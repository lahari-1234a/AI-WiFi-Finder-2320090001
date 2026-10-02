import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import {
  Activity, ArrowUpRight, BookOpen, Building2, Check, CircleHelp, Coffee, Gauge,
  LocateFixed, MapPin, MapPinned, Navigation, RefreshCw,
  Signal, Wifi, X,
} from 'lucide-react';
import {
  getFindWifiPlacesQueryKey,
  getGetWifiReportsQueryKey,
  getGetWifiSummaryQueryKey,
  useCreateWifiReport,
  useFindWifiPlaces,
  useGetWifiReports,
  useGetWifiSummary,
} from '@workspace/api-client-react';
import type { WifiPlace, WifiReportActivity } from '@workspace/api-client-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const activities: { value: WifiReportActivity; label: string }[] = [
  { value: 'remote-work', label: 'Focused work' },
  { value: 'video-calls', label: 'Video calls' },
  { value: 'online-class', label: 'Online class' },
  { value: 'software-development', label: 'Development' },
];
const activityNotes: Record<WifiReportActivity, string> = {
  'remote-work': 'Prioritizing reported download speed and overall consistency for a full work session.',
  'video-calls': 'Low latency and a healthy upload matter most for steady calls.',
  'online-class': 'Looking for responsive connections that can keep a live class moving.',
  'software-development': 'Download and upload performance can make builds, repos, and collaboration feel less sluggish.',
};
const categoryNames: Record<string, string> = {
  cafe: 'Café', library: 'Library', coworking: 'Coworking', hotel: 'Hotel', other: 'Other',
};

function categoryIcon(category: string) {
  if (category === 'library') return <BookOpen size={17} />;
  if (category === 'coworking') return <Building2 size={17} />;
  if (category === 'hotel') return <MapPinned size={17} />;
  return <Coffee size={17} />;
}
function ago(date: string | null) {
  if (!date) return 'No recent test';
  const delta = Math.max(0, Date.now() - new Date(date).getTime());
  const hours = Math.floor(delta / 3600000);
  if (hours < 1) return 'Tested within the last hour';
  if (hours < 24) return `Tested ${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `Tested ${days}d ago`;
}
function distanceLabel(meters: number) {
  return meters < 1000 ? `${Math.round(meters)} m away` : `${(meters / 1000).toFixed(1)} km away`;
}
function placeScore(place: WifiPlace) {
  return place.remoteWorkerScore ?? -1;
}
function wifiListingLabel(available: boolean | null) {
  if (available === true) return 'WiFi listed';
  if (available === false) return 'WiFi not tagged';
  return 'WiFi status unknown';
}
function mapEmbedUrl(place: WifiPlace, radiusMeters: number) {
  const latPadding = Math.max(radiusMeters / 111_320, 0.005);
  const longitudeScale = Math.max(
    0.2,
    Math.abs(Math.cos((place.latitude * Math.PI) / 180)),
  );
  const lonPadding = Math.max(
    radiusMeters / (111_320 * longitudeScale),
    0.005,
  );
  const mapUrl = new URL('https://www.openstreetmap.org/export/embed.html');
  mapUrl.searchParams.set(
    'bbox',
    [
      place.longitude - lonPadding,
      place.latitude - latPadding,
      place.longitude + lonPadding,
      place.latitude + latPadding,
    ]
      .map((coordinate) => coordinate.toFixed(6))
      .join(','),
  );
  mapUrl.searchParams.set('layer', 'mapnik');
  mapUrl.searchParams.set(
    'marker',
    `${place.latitude.toFixed(6)},${place.longitude.toFixed(6)}`,
  );
  return mapUrl.toString();
}
function niceActivity(activity: string) {
  return activities.find((item) => item.value === activity)?.label ?? activity.replaceAll('-', ' ');
}
function LoadingRows() {
  return <div aria-label="Loading nearby places"><div className="skeleton" /><div className="skeleton" /><div className="skeleton" /></div>;
}

function Home() {
  const queryClient = useQueryClient();
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationError, setLocationError] = useState('');
  const [manualOpen, setManualOpen] = useState(false);
  const [latDraft, setLatDraft] = useState('');
  const [lonDraft, setLonDraft] = useState('');
  const [radius, setRadius] = useState(1500);
  const [category, setCategory] = useState('all');
  const [activity, setActivity] = useState<WifiReportActivity>('remote-work');
  const [selectedId, setSelectedId] = useState('');
  const [testState, setTestState] = useState<'idle' | 'testing' | 'ready' | 'error'>('idle');
  const [testError, setTestError] = useState('');
  const [download, setDownload] = useState<number | null>(null);
  const [upload, setUpload] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [signalStrength, setSignalStrength] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showTestForm, setShowTestForm] = useState(false);
  const [locating, setLocating] = useState(false);

  const placeParams = useMemo(() => ({
    latitude: location?.latitude ?? 0,
    longitude: location?.longitude ?? 0,
    radiusMeters: radius,
    category: category as 'all' | 'cafe' | 'library' | 'coworking' | 'hotel',
    activity,
  }), [location, radius, category, activity]);
  const summaryParams = useMemo(() => ({
    latitude: location?.latitude ?? 0,
    longitude: location?.longitude ?? 0,
    radiusMeters: radius,
  }), [location, radius]);
  const placesQuery = useFindWifiPlaces(placeParams, {
    query: { enabled: !!location, queryKey: getFindWifiPlacesQueryKey(placeParams) },
  });
  const summaryQuery = useGetWifiSummary(summaryParams, {
    query: { enabled: !!location, queryKey: getGetWifiSummaryQueryKey(summaryParams) },
  });
  const places = placesQuery.data ?? [];
  const selected = places.find((place) => place.placeId === selectedId) ?? places[0];
  const reportParams = useMemo(() => ({ placeId: selected?.placeId ?? '' }), [selected?.placeId]);
  const reportsQuery = useGetWifiReports(reportParams, {
    query: {
      enabled: !!selected?.placeId,
      queryKey: getGetWifiReportsQueryKey(reportParams),
    },
  });
  const reports = reportsQuery.data ?? [];
  const createReport = useCreateWifiReport();

  useEffect(() => {
    if (places.length && (!selectedId || !places.some((place) => place.placeId === selectedId))) {
      setSelectedId(places[0].placeId);
    }
  }, [places, selectedId]);
  useEffect(() => {
    setTestState('idle');
    setDownload(null);
    setUpload(null);
    setLatency(null);
    setConfirmed(false);
    setSignalStrength('');
    setSubmitted(false);
    setShowTestForm(false);
  }, [selected?.placeId]);

  const findLocation = () => {
    setLocationError('');
    if (!navigator.geolocation) {
      setLocationError('Location is not available in this browser. Enter coordinates instead.');
      setManualOpen(true);
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        setLatDraft(position.coords.latitude.toFixed(5));
        setLonDraft(position.coords.longitude.toFixed(5));
        setLocationError('');
        setLocating(false);
      },
      (error) => {
        setLocationError(error.code === error.PERMISSION_DENIED
          ? 'Location permission was declined. Add coordinates manually to explore nearby places.'
          : 'Could not determine your location. You can enter coordinates instead.');
        setManualOpen(true);
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  };
  const applyManualLocation = () => {
    if (!latDraft.trim() || !lonDraft.trim()) {
      setLocationError('Enter both a latitude and longitude.');
      return;
    }
    const latitude = Number(latDraft);
    const longitude = Number(lonDraft);
    if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90 ||
        !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
      setLocationError('Enter a valid latitude (−90 to 90) and longitude (−180 to 180).');
      return;
    }
    setLocation({ latitude, longitude });
    setLocationError('');
    setManualOpen(false);
  };
  const runSpeedTest = async () => {
    setTestState('testing');
    setTestError('');
    setDownload(null);
    setUpload(null);
    setLatency(null);
    setSubmitted(false);
    setConfirmed(false);
    try {
      const base = 'https://speed.cloudflare.com';
      const pingStart = performance.now();
      const pingResponse = await fetch(`${base}/__down?bytes=0&ts=${Date.now()}`, { cache: 'no-store', signal: AbortSignal.timeout(20000) });
      if (!pingResponse.ok) throw new Error('The test service did not respond.');
      await pingResponse.arrayBuffer();
      const ping = Math.max(1, Math.round(performance.now() - pingStart));

      const downStart = performance.now();
      const downResponse = await fetch(`${base}/__down?bytes=5000000&ts=${Date.now()}`, { cache: 'no-store', signal: AbortSignal.timeout(20000) });
      if (!downResponse.ok) throw new Error('Download measurement was unavailable.');
      const downData = await downResponse.arrayBuffer();
      const downSeconds = (performance.now() - downStart) / 1000;
      const downMbps = (downData.byteLength * 8) / (downSeconds * 1_000_000);

      const payload = new Blob([new Uint8Array(1_000_000)], { type: 'application/octet-stream' });
      const upStart = performance.now();
      const upResponse = await fetch(`${base}/__up?ts=${Date.now()}`, {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'application/octet-stream' },
        signal: AbortSignal.timeout(20000),
      });
      if (!upResponse.ok) throw new Error('Upload measurement was unavailable.');
      await upResponse.arrayBuffer();
      const upSeconds = (performance.now() - upStart) / 1000;
      const upMbps = (payload.size * 8) / (upSeconds * 1_000_000);
      setLatency(ping);
      setDownload(Number(downMbps.toFixed(1)));
      setUpload(Number(upMbps.toFixed(1)));
      setTestState('ready');
      setShowTestForm(true);
    } catch {
      setTestState('error');
      setTestError('The browser could not reach the speed-test service. Check your connection and try again.');
    }
  };
  const submitReport = () => {
    if (!selected || download === null || upload === null || latency === null || !confirmed) return;
    createReport.mutate({
      data: {
        placeId: selected.placeId,
        placeName: selected.name,
        latitude: selected.latitude,
        longitude: selected.longitude,
        downloadMbps: download,
        uploadMbps: upload,
        latencyMs: latency,
        signalStrength: signalStrength ? Number(signalStrength) : null,
        activity,
        connectedToVenueWifi: true,
      },
    }, {
      onSuccess: () => {
        setSubmitted(true);
        setShowTestForm(false);
        queryClient.invalidateQueries({ queryKey: getFindWifiPlacesQueryKey(placeParams) });
        queryClient.invalidateQueries({ queryKey: getGetWifiSummaryQueryKey(summaryParams) });
        queryClient.invalidateQueries({ queryKey: getGetWifiReportsQueryKey(reportParams) });
      },
    });
  };

  const orderedPlaces = useMemo(
    () =>
      [...places].sort(
        (a, b) => placeScore(b) - placeScore(a),
      ),
    [places, activity],
  );
  const summary = summaryQuery.data;

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand" data-testid="text-brand"><span className="brand-mark"><Wifi size={19} /></span> Wifi Fieldnotes</div>
        <div className="header-note">Community measured · never guessed</div>
      </header>
      <main className="page">
        <div className="intro-row fade-in">
          <div>
            <div className="eyebrow">A better place to plug in</div>
            <h1 className="headline">Find your next<br />good connection.</h1>
            <p className="intro-copy">Nearby cafés, libraries, and workspaces with real-world WiFi measurements shared by people who were there.</p>
          </div>
          <div className="location-box">
            <span className="status-line" data-testid="status-location">
              <LocateFixed size={14} />
              {location ? `${location.latitude.toFixed(3)}, ${location.longitude.toFixed(3)}` : 'Set a search location'}
            </span>
            <button onClick={findLocation} disabled={locating} data-testid="button-use-location">
              {locating ? <RefreshCw size={14} className="spin" /> : <Navigation size={14} />}
              {locating ? 'Finding you…' : 'Use my location'}
            </button>
            <button className="quiet-btn" onClick={() => {
              if (location) {
                setLatDraft(location.latitude.toFixed(5));
                setLonDraft(location.longitude.toFixed(5));
              }
              setLocationError('');
              setManualOpen(true);
            }} data-testid="button-enter-coordinates">Enter coordinates</button>
          </div>
        </div>
        {manualOpen && (
          <div className="coord-panel fade-in" data-testid="panel-manual-location">
            <MapPin size={15} />
            <label><span className="field-label">Latitude</span><input className="coord-input" data-testid="input-latitude" value={latDraft} onChange={(e) => setLatDraft(e.target.value)} placeholder="37.7749" inputMode="decimal" /></label>
            <label><span className="field-label">Longitude</span><input className="coord-input" data-testid="input-longitude" value={lonDraft} onChange={(e) => setLonDraft(e.target.value)} placeholder="-122.4194" inputMode="decimal" /></label>
            <button className="quiet-btn" onClick={applyManualLocation} data-testid="button-apply-location">Search here</button>
            <button className="quiet-btn" aria-label="Close coordinate form" onClick={() => setManualOpen(false)} data-testid="button-close-location"><X size={14} /></button>
          </div>
        )}
        {locationError && <div className="notice" role="status" data-testid="status-location-error">{locationError}</div>}

        <section className="stats-strip fade-in" aria-label="Nearby community summary" data-testid="section-community-summary">
          <div className="stat-cell"><span className="stat-label">Places nearby</span><span className="stat-value" data-testid="text-summary-venues">{summary?.venueCount ?? '—'}</span></div>
          <div className="stat-cell"><span className="stat-label">With community tests</span><span className="stat-value" data-testid="text-summary-tested">{summary?.testedVenueCount ?? '—'}</span></div>
          <div className="stat-cell"><span className="stat-label">Measurements shared</span><span className="stat-value" data-testid="text-summary-reports">{summary?.communityTestCount ?? '—'}</span></div>
          <div className="stat-cell"><span className="stat-label">Nearby average</span><span className="stat-value" data-testid="text-summary-average">{summary?.averageDownloadMbps == null ? '—' : summary.averageDownloadMbps.toFixed(1)}<span className="stat-unit">Mbps down</span></span></div>
        </section>

        <div className="workspace">
          <section className="panel fade-in" data-testid="section-nearby-places">
            <div className="panel-head">
              <div><h2 className="panel-title">Around you</h2><div className="panel-kicker">{location ? `${places.length} places · community-reported` : 'Choose a location to begin'}</div></div>
              <span className="status-line"><MapPin size={13} />{location ? `${(radius / 1000).toFixed(1)} km` : '—'}</span>
            </div>
            <div className="filters">
              <select aria-label="Filter by venue type" className="filter-select" data-testid="select-category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All places</option><option value="cafe">Cafés</option><option value="library">Libraries</option><option value="coworking">Coworking</option><option value="hotel">Hotels</option>
              </select>
              <select aria-label="Search radius" className="filter-select" data-testid="select-radius" value={radius} onChange={(e) => setRadius(Number(e.target.value))}>
                <option value={500}>500 m radius</option><option value={1000}>1 km radius</option><option value={1500}>1.5 km radius</option><option value={3000}>3 km radius</option><option value={5000}>5 km radius</option>
              </select>
              <select aria-label="Activity recommendation" className="filter-select" data-testid="select-activity" value={activity} onChange={(e) => setActivity(e.target.value as WifiReportActivity)}>
                {activities.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </div>
            {placesQuery.isLoading && location ? <LoadingRows /> : null}
            {placesQuery.isError && location && (
              <div className="error-state" data-testid="status-places-error">
                We couldn’t load nearby places just now.<br />
                <button className="quiet-btn" onClick={() => placesQuery.refetch()} data-testid="button-retry-places"><RefreshCw size={13} />Try again</button>
              </div>
            )}
            {!location && !placesQuery.isLoading && (
              <div className="empty-inline" data-testid="empty-location">Use your location or enter coordinates to see places nearby.<br />Your browser shares location only after you allow it.</div>
            )}
            {location && !placesQuery.isLoading && !placesQuery.isError && orderedPlaces.length === 0 && (
              <div className="empty-inline" data-testid="empty-places">No places in this search yet.<br />Try a wider radius or another category.</div>
            )}
            {location && orderedPlaces.length > 0 && <div className="place-list" data-testid="list-nearby-places">
              {orderedPlaces.map((place) => (
                <button key={place.placeId} className={`place-card ${selected?.placeId === place.placeId ? 'selected' : ''}`} onClick={() => setSelectedId(place.placeId)} data-testid={`card-place-${place.placeId}`}>
                  <span className="place-top">
                    <span><span className="place-name" data-testid={`text-place-name-${place.placeId}`}>{place.name}</span><span className="place-address">{place.address || 'Address not provided'}</span></span>
                    <span className="category-chip">{categoryIcon(place.category)}{categoryNames[place.category] ?? place.category}</span>
                  </span>
                  <span className="place-meta">
                    <span className="distance">{distanceLabel(place.distanceMeters)}</span>
                    <span className="speed-pill">{place.avgDownloadMbps == null ? 'No speed data' : `${place.avgDownloadMbps.toFixed(1)} Mbps`}</span>
                    <span className="place-tests">{place.communityTestCount} {place.communityTestCount === 1 ? 'test' : 'tests'}</span>
                    <span className="wifi-status">{wifiListingLabel(place.wifiAvailable)}</span>
                  </span>
                </button>
              ))}
            </div>}
          </section>

          <section className="panel detail-panel fade-in" data-testid="section-place-detail">
            {selected ? <>
              <div className="panel-head">
                <div className="venue-title">
                  <div className="venue-icon">{categoryIcon(selected.category)}</div>
                  <div><h2 className="panel-title" data-testid="text-selected-place">{selected.name}</h2><div className="venue-address">{selected.address || 'Address not provided'} · {distanceLabel(selected.distanceMeters)} · {wifiListingLabel(selected.wifiAvailable)}</div></div>
                </div>
                <div className="venue-actions">
                  <a className="quiet-btn" href={selected.mapUrl} target="_blank" rel="noreferrer" data-testid="link-open-map">Map <ArrowUpRight size={13} /></a>
                </div>
              </div>
              <div className="map-card" data-testid="map-nearby-places" aria-label="Interactive OpenStreetMap showing the selected venue">
                <iframe
                  title={`OpenStreetMap centered on ${selected.name}`}
                  src={mapEmbedUrl(selected, radius)}
                  loading="lazy"
                  data-testid="iframe-openstreetmap"
                />
              </div>
              <div className="map-legend"><span>Map data © OpenStreetMap contributors · selected venue</span><a href={selected.mapUrl} target="_blank" rel="noreferrer" data-testid="link-venue-directions">Open in maps <ArrowUpRight size={11} /></a></div>

              <div className="metrics-grid" data-testid="section-venue-measurements">
                <div className="metric-box"><div className="metric-number">{selected.avgDownloadMbps == null ? '—' : selected.avgDownloadMbps.toFixed(1)}</div><div className="metric-caption">Mbps download</div></div>
                <div className="metric-box"><div className="metric-number">{selected.avgUploadMbps == null ? '—' : selected.avgUploadMbps.toFixed(1)}</div><div className="metric-caption">Mbps upload</div></div>
                <div className="metric-box"><div className="metric-number">{selected.avgLatencyMs == null ? '—' : Math.round(selected.avgLatencyMs)}</div><div className="metric-caption">ms latency</div></div>
                <div className="metric-box"><div className="metric-number">{selected.communityTestCount}</div><div className="metric-caption">community tests</div></div>
              </div>
              <div className="activity-banner" data-testid="text-activity-recommendation"><strong>{niceActivity(activity)} lens.</strong> {activityNotes[activity]} {selected.remoteWorkerScore != null && <>Estimated activity fit: <strong>{selected.remoteWorkerScore} / 100</strong>, based on recent community tests.</>}</div>

              <div className="section-heading"><h3>Recent community measurements</h3><span data-testid="text-last-tested">{ago(selected.lastTestAt)}</span></div>
              {reportsQuery.isLoading ? <LoadingRows /> : reportsQuery.isError ? (
                <div className="empty-inline" data-testid="status-reports-error">Couldn’t load this venue’s measurement history. <button className="quiet-btn" onClick={() => reportsQuery.refetch()} data-testid="button-retry-reports">Retry</button></div>
              ) : reports.length ? (
                <div className="report-list" data-testid="list-venue-reports">
                  {reports.slice(0, 5).map((report) => <div className="report-row" key={report.id} data-testid={`row-report-${report.id}`}>
                    <div><div className="report-activity">{niceActivity(report.activity)}</div><div className="report-date">{new Date(report.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}</div></div>
                    <div className="report-value">{report.downloadMbps.toFixed(1)}<small>DOWN</small></div>
                    <div className="report-value">{report.uploadMbps.toFixed(1)}<small>UP</small></div>
                    <div className="report-value">{Math.round(report.latencyMs)}<small>MS</small></div>
                  </div>)}
                </div>
              ) : <div className="empty-inline" data-testid="empty-reports">No community measurements yet.<br />Run a test while connected to help the next person.</div>}

              <div className="section-heading"><h3>Measure this connection</h3><span><Activity size={12} /> LIVE TEST</span></div>
              <div className="speedtest" data-testid="section-speed-test">
                <div className="speed-top">
                  <div><div className="speed-title">A quick check, from your browser</div><div className="speed-sub">Tests this device’s active internet connection</div></div>
                  <Gauge size={20} color="#668879" />
                </div>
                <div className="speed-grid">
                  <div className="speed-reading"><strong data-testid="text-live-download">{download === null ? '—' : download.toFixed(1)}</strong><span>Download · Mbps</span></div>
                  <div className="speed-reading"><strong data-testid="text-live-upload">{upload === null ? '—' : upload.toFixed(1)}</strong><span>Upload · Mbps</span></div>
                  <div className="speed-reading"><strong data-testid="text-live-latency">{latency === null ? '—' : latency}</strong><span>Latency · ms</span></div>
                </div>
                <div className="action-row">
                  <button className="primary-btn" onClick={runSpeedTest} disabled={testState === 'testing'} data-testid="button-run-speed-test">
                    {testState === 'testing' ? <><RefreshCw size={14} className="spin" />Testing connection…</> : <><Gauge size={14} />{testState === 'ready' ? 'Run again' : 'Run live speed test'}</>}
                  </button>
                  <span className="small-note"><CircleHelp size={12} />No nearby-network scan or radio signal reading.</span>
                </div>
                {testError && <div className="notice" role="alert" data-testid="status-speed-test-error">{testError}</div>}
                {submitted && <div className="notice" role="status" data-testid="status-report-submitted"><Check size={13} /> Thanks — your community measurement was shared.</div>}
                {showTestForm && testState === 'ready' && (
                  <div className="form-area fade-in" data-testid="form-report-confirmation">
                    <label className="check-row"><input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} data-testid="checkbox-connected-wifi" /><span><strong>Confirm you’re connected to {selected.name}’s WiFi.</strong> I’m submitting these results from this venue’s network. The browser cannot verify the WiFi network name.</span></label>
                    <div className="form-fields">
                      <label><span className="field-label">Activity</span><select className="metric-input" value={activity} onChange={(e) => setActivity(e.target.value as WifiReportActivity)} data-testid="select-report-activity">{activities.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
                      <label><span className="field-label">Signal strength · optional self-rating</span><select className="metric-input" value={signalStrength} onChange={(e) => setSignalStrength(e.target.value)} data-testid="select-self-reported-signal"><option value="">Not reported</option><option value="25">Weak · 25%</option><option value="50">Fair · 50%</option><option value="75">Good · 75%</option><option value="100">Excellent · 100%</option></select></label>
                    </div>
                    <div className="action-row">
                      <span className="small-note">Signal strength is optional and self-reported, not measured by this browser.</span>
                      <button className="primary-btn" onClick={submitReport} disabled={!confirmed || createReport.isPending} data-testid="button-submit-report">
                        {createReport.isPending ? <><RefreshCw size={14} className="spin" />Sharing…</> : <><Check size={14} />Share measurement</>}
                      </button>
                    </div>
                    {createReport.isError && <div className="notice" role="alert" data-testid="status-report-error">We couldn’t share this measurement. Please try again.</div>}
                  </div>
                )}
              </div>
            </> : (
              <div className="empty-inline" style={{ padding: '70px 20px' }} data-testid="empty-selected-place">
                <Wifi size={22} style={{ margin: '0 auto 10px' }} /><br />
                {location ? 'Choose a nearby place to see its community measurements.' : 'Your nearby guide will appear here once you set a search location.'}
              </div>
            )}
          </section>
        </div>
        <footer className="footer-note" data-testid="text-honesty-note"><Signal size={13} /> Results come from community reports and a live browser speed test. Device location is permission-based; WiFi name and radio signal are not detectable here.</footer>
      </main>
    </div>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}
function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}
function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}
export default App;