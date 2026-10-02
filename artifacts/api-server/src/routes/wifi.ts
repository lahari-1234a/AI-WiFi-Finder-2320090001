import { desc, eq } from "drizzle-orm";
import { Router, type IRouter } from "express";
import {
  CreateWifiReportBody,
  CreateWifiReportResponse,
  FindWifiPlacesQueryParams,
  FindWifiPlacesResponse,
  GetWifiReportsQueryParams,
  GetWifiReportsResponse,
  GetWifiSummaryQueryParams,
  GetWifiSummaryResponse,
} from "@workspace/api-zod";
import { db, wifiReportsTable } from "@workspace/db";
import {
  getNearbyWifiPlaces,
  summarizeWifiPlaces,
} from "../lib/wifi-places";

const router: IRouter = Router();

router.get("/wifi/places", async (req, res): Promise<void> => {
  const parsed = FindWifiPlacesQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  try {
    const places = await getNearbyWifiPlaces(parsed.data);
    res.json(FindWifiPlacesResponse.parse(places));
  } catch (error) {
    req.log.warn({ err: error }, "Nearby WiFi venue lookup failed");
    res.status(502).json({ error: "Nearby venue data is temporarily unavailable." });
  }
});

router.get("/wifi/summary", async (req, res): Promise<void> => {
  const parsed = GetWifiSummaryQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  try {
    const places = await getNearbyWifiPlaces({
      ...parsed.data,
      category: "all",
      activity: "remote-work",
    });
    res.json(GetWifiSummaryResponse.parse(summarizeWifiPlaces(places)));
  } catch (error) {
    req.log.warn({ err: error }, "Nearby WiFi summary lookup failed");
    res.status(502).json({ error: "Nearby venue data is temporarily unavailable." });
  }
});

router.get("/wifi/reports", async (req, res): Promise<void> => {
  const parsed = GetWifiReportsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const reports = await db
    .select()
    .from(wifiReportsTable)
    .where(eq(wifiReportsTable.placeId, parsed.data.placeId))
    .orderBy(desc(wifiReportsTable.createdAt))
    .limit(20);

  res.json(
    GetWifiReportsResponse.parse(
      reports.map((report) => ({
        id: report.id,
        placeId: report.placeId,
        placeName: report.placeName,
        downloadMbps: report.downloadMbps,
        uploadMbps: report.uploadMbps,
        latencyMs: report.latencyMs,
        signalStrength: report.signalStrength,
        activity: report.activity,
        createdAt: report.createdAt,
      })),
    ),
  );
});

router.post("/wifi/reports", async (req, res): Promise<void> => {
  const parsed = CreateWifiReportBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const {
    connectedToVenueWifi: _connectedToVenueWifi,
    ...measurement
  } = parsed.data;
  const [report] = await db
    .insert(wifiReportsTable)
    .values(measurement)
    .returning();

  res
    .status(201)
    .json(
      CreateWifiReportResponse.parse({
        id: report.id,
        placeId: report.placeId,
        placeName: report.placeName,
        downloadMbps: report.downloadMbps,
        uploadMbps: report.uploadMbps,
        latencyMs: report.latencyMs,
        signalStrength: report.signalStrength,
        activity: report.activity,
        createdAt: report.createdAt,
      }),
    );
});

export default router;