import { and, gt, inArray } from "drizzle-orm";
import { db, wifiReportsTable } from "@workspace/db";

type WifiPlaceCategory = "cafe" | "library" | "coworking" | "hotel" | "other";

type Activity =
  | "remote-work"
  | "video-calls"
  | "online-class"
  | "software-development";
type Category = "all" | "cafe" | "library" | "coworking" | "hotel";

interface OverpassElement {
  type: "node" | "way" | "relation";
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
}

interface OverpassResponse {
  elements?: OverpassElement[];
}

interface NearbyPlace {
  placeId: string;
  name: string;
  category: WifiPlaceCategory;
  latitude: number;
  longitude: number;
  address: string | null;
  distanceMeters: number;
  wifiAvailable: boolean | null;
  mapUrl: string;
}

interface EnrichedWifiPlace extends NearbyPlace {
  communityTestCount: number;
  lastTestAt: string | null;
  avgDownloadMbps: number | null;
  avgUploadMbps: number | null;
  avgLatencyMs: number | null;
  remoteWorkerScore: number | null;
}

interface ActivityThreshold {
  download: number;
  upload: number;
  latency: number;
}

const thresholds: Record<Activity, ActivityThreshold> = {
  "remote-work": { download: 40, upload: 12, latency: 55 },
  "video-calls": { download: 18, upload: 8, latency: 65 },
  "online-class": { download: 12, upload: 5, latency: 80 },
  "software-development": { download: 50, upload: 15, latency: 55 },
};

const cacheTtlMs = 90_000;
const nearbyCache = new Map<
  string,
  { expiresAt: number; elements: OverpassElement[] }
>();
const reportWindowMs = 90 * 24 * 60 * 60 * 1000;

function distanceBetween(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const radians = (degrees: number) => (degrees * Math.PI) / 180;
  const earthRadiusMeters = 6_371_000;
  const dLat = radians(lat2 - lat1);
  const dLon = radians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(radians(lat1)) *
      Math.cos(radians(lat2)) *
      Math.sin(dLon / 2) ** 2;
  return earthRadiusMeters * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function categoryFor(tags: Record<string, string>): WifiPlaceCategory {
  if (tags.tourism === "hotel" || tags.amenity === "hotel") return "hotel";
  if (tags.amenity === "library") return "library";
  if (
    tags.amenity === "coworking_space" ||
    tags.office === "coworking" ||
    tags.leisure === "coworking"
  ) {
    return "coworking";
  }
  if (
    ["cafe", "restaurant", "fast_food"].includes(tags.amenity ?? "") ||
    tags.cuisine === "coffee_shop"
  ) {
    return "cafe";
  }
  return "other";
}

function wifiTag(tags: Record<string, string>): boolean | null {
  const wifi = tags.wifi?.toLowerCase();
  if (wifi) {
    if (["no", "none"].includes(wifi)) return false;
    if (["yes", "wlan", "wifi", "free", "customers"].includes(wifi)) {
      return true;
    }
  }
  const access = tags.internet_access?.toLowerCase();
  if (["no", "none", "wired"].includes(access ?? "")) return false;
  if (["wlan", "wifi"].includes(access ?? "")) return true;
  return null;
}

function addressFrom(tags: Record<string, string>): string | null {
  const streetLine = [tags["addr:housenumber"], tags["addr:street"]]
    .filter(Boolean)
    .join(" ");
  const address = [streetLine, tags["addr:suburb"], tags["addr:city"]]
    .filter(Boolean)
    .join(", ");
  return address || null;
}

async function getOverpassElements(
  latitude: number,
  longitude: number,
  radiusMeters: number,
): Promise<OverpassElement[]> {
  const key = `${latitude.toFixed(3)}:${longitude.toFixed(3)}:${radiusMeters}`;
  const cached = nearbyCache.get(key);
  if (cached && cached.expiresAt > Date.now()) return cached.elements;

  const amenityFilter =
    '["amenity"~"^(cafe|restaurant|library|coworking_space|fast_food|university|community_centre)$"]';
  const query =
    `[out:json][timeout:18];` +
    `(` +
    `nwr${amenityFilter}(around:${radiusMeters},${latitude},${longitude});` +
    `nwr["tourism"="hotel"](around:${radiusMeters},${latitude},${longitude});` +
    `nwr["office"="coworking"](around:${radiusMeters},${latitude},${longitude});` +
    `);out center;`;

  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "user-agent": "AI-WiFi-Finder/1.0 (nearby venue lookup)",
    },
    body: `data=${encodeURIComponent(query)}`,
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) {
    throw new Error(`OpenStreetMap venue lookup returned ${response.status}`);
  }

  const data = (await response.json()) as OverpassResponse;
  if (!Array.isArray(data.elements)) {
    throw new Error("OpenStreetMap venue lookup returned an invalid response");
  }

  nearbyCache.set(key, {
    expiresAt: Date.now() + cacheTtlMs,
    elements: data.elements,
  });
  if (nearbyCache.size > 60) {
    const oldestKey = nearbyCache.keys().next().value;
    if (oldestKey) nearbyCache.delete(oldestKey);
  }
  return data.elements;
}

function fitScore(
  downloadMbps: number,
  uploadMbps: number,
  latencyMs: number,
  sampleCount: number,
  activity: Activity,
): number {
  const target = thresholds[activity];
  const downloadScore =
    Math.min(1, Math.log1p(downloadMbps) / Math.log1p(target.download)) * 100;
  const uploadScore =
    Math.min(1, Math.log1p(uploadMbps) / Math.log1p(target.upload)) * 100;
  const latencyScore =
    Math.max(0, 1 - latencyMs / (target.latency * 2)) * 100;
  const measurementScore =
    downloadScore * 0.45 + uploadScore * 0.25 + latencyScore * 0.3;
  const confidence = 0.65 + 0.35 * Math.min(1, sampleCount / 5);
  return Math.round(measurementScore * confidence);
}

export async function getNearbyWifiPlaces(options: {
  latitude: number;
  longitude: number;
  radiusMeters: number;
  category: Category;
  activity: Activity;
}): Promise<EnrichedWifiPlace[]> {
  const { latitude, longitude, radiusMeters, category, activity } = options;
  const elements = await getOverpassElements(
    latitude,
    longitude,
    radiusMeters,
  );

  const placesById = new Map<string, NearbyPlace>();
  for (const element of elements) {
    const tags = element.tags;
    const placeLat = element.lat ?? element.center?.lat;
    const placeLon = element.lon ?? element.center?.lon;
    if (!tags || placeLat == null || placeLon == null) continue;
    const name = tags.name?.trim() || tags.brand?.trim() || tags.operator?.trim();
    if (!name) continue;
    const placeCategory = categoryFor(tags);
    if (category !== "all" && placeCategory !== category) continue;

    const placeId = `${element.type}/${element.id}`;
    placesById.set(placeId, {
      placeId,
      name,
      category: placeCategory,
      latitude: placeLat,
      longitude: placeLon,
      address: addressFrom(tags),
      distanceMeters: Math.round(
        distanceBetween(latitude, longitude, placeLat, placeLon),
      ),
      wifiAvailable: wifiTag(tags),
      mapUrl: `https://www.openstreetmap.org/?mlat=${placeLat}&mlon=${placeLon}#map=18/${placeLat}/${placeLon}`,
    });
  }

  const places = [...placesById.values()].sort(
    (a, b) => a.distanceMeters - b.distanceMeters,
  );
  const placeIds = places.map((place) => place.placeId);
  const since = new Date(Date.now() - reportWindowMs);
  const reports =
    placeIds.length === 0
      ? []
      : await db
          .select()
          .from(wifiReportsTable)
          .where(
            and(
              inArray(wifiReportsTable.placeId, placeIds),
              gt(wifiReportsTable.createdAt, since),
            ),
          );

  const grouped = new Map<
    string,
    { download: number[]; upload: number[]; latency: number[]; dates: Date[] }
  >();
  for (const report of reports) {
    const entry = grouped.get(report.placeId) ?? {
      download: [],
      upload: [],
      latency: [],
      dates: [],
    };
    entry.download.push(report.downloadMbps);
    entry.upload.push(report.uploadMbps);
    entry.latency.push(report.latencyMs);
    entry.dates.push(report.createdAt);
    grouped.set(report.placeId, entry);
  }

  return places.map((place) => {
    const stats = grouped.get(place.placeId);
    const count = stats?.download.length ?? 0;
    const mean = (values: number[] | undefined) =>
      values?.length
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : null;
    const avgDownloadMbps = mean(stats?.download);
    const avgUploadMbps = mean(stats?.upload);
    const avgLatencyMs = mean(stats?.latency);
    const lastTestAt = stats?.dates.length
      ? new Date(Math.max(...stats.dates.map((date) => date.getTime())))
      : null;
    const remoteWorkerScore =
      avgDownloadMbps !== null &&
      avgUploadMbps !== null &&
      avgLatencyMs !== null
        ? fitScore(
            avgDownloadMbps,
            avgUploadMbps,
            avgLatencyMs,
            count,
            activity,
          )
        : null;

    return {
      ...place,
      communityTestCount: count,
      lastTestAt: lastTestAt?.toISOString() ?? null,
      avgDownloadMbps,
      avgUploadMbps,
      avgLatencyMs,
      remoteWorkerScore,
    };
  });
}

export function summarizeWifiPlaces(places: EnrichedWifiPlace[]) {
  const testedPlaces = places.filter(
    (place) => place.communityTestCount > 0,
  );
  const communityTestCount = places.reduce(
    (sum, place) => sum + place.communityTestCount,
    0,
  );
  const averages = (
    key: "avgDownloadMbps" | "avgLatencyMs",
  ): number | null => {
    const values = testedPlaces
      .map((place) => place[key])
      .filter((value): value is number => value !== null);
    return values.length
      ? Math.round(
          (values.reduce((sum, value) => sum + value, 0) / values.length) * 10,
        ) / 10
      : null;
  };

  return {
    venueCount: places.length,
    testedVenueCount: testedPlaces.length,
    communityTestCount,
    averageDownloadMbps: averages("avgDownloadMbps"),
    averageLatencyMs: averages("avgLatencyMs"),
  };
}