# AI WiFi Finder

A responsive web app for finding nearby places to work or study and comparing recent, community-submitted internet measurements. Venue listings and map data come from OpenStreetMap; measurements are stored in PostgreSQL.

## Features

- Find nearby cafés, libraries, coworking spaces, and hotels.
- Search using browser location permission or manually entered coordinates.
- Filter venues by category and search radius.
- Choose an activity—focused work, video calls, online classes, or software development—to tailor the venue fit estimate.
- View recent venue measurements, historical reports, an interactive OpenStreetMap view, and nearby community summaries.
- Run a browser-based latency, download, and upload test, then optionally share the results after confirming that the device was connected to the venue's WiFi.
- Optionally add a self-reported signal-quality rating.

## How recommendations work

The server uses community measurements from the last 90 days to calculate an activity-fit score. It compares download speed, upload speed, and latency against targets for the selected activity. The score is adjusted according to how many reports are available, so venues with few measurements have lower confidence.

This is a transparent, rules-based estimate, **not a trained machine-learning model or a guarantee of venue internet quality**. No sample reports are seeded; venues without community measurements display no score.

## Data sources and limitations

- **Venue listings and map:** OpenStreetMap and its Overpass API. WiFi tags describe mapped information and may be missing or out of date.
- **Speed test:** Cloudflare's public speed-test service. The browser measures the device's active internet connection; it cannot establish which access point provided it.
- **Community reports:** Stored in the `wifi_reports` PostgreSQL table, including venue details, download and upload speed, latency, activity, timestamp, and optional self-reported signal strength. The table does not store a reporter account ID.

A browser cannot scan nearby WiFi networks, read the connected SSID, or measure radio signal strength (RSSI). The app therefore asks users to confirm their venue-WiFi connection and labels signal quality as a self-rating. These confirmations and ratings are not independently verified.

## Architecture

- `artifacts/wifi-finder` — React, TypeScript, and Vite frontend.
- `artifacts/api-server` — Express API for venue lookup, summaries, report history, and report submission.
- `lib/api-spec/openapi.yaml` — API contract; generated schemas, types, and React Query hooks are shared through workspace packages.
- `artifacts/api-server/src/lib/wifi-places.ts` — OpenStreetMap lookup, community-measurement aggregation, and activity-fit calculation.
- `lib/db/src/schema/wifi-reports.ts` — PostgreSQL schema for community measurements, managed with Drizzle.

### API routes

- `GET /api/wifi/places` — nearby venues with recent measurement summaries.
- `GET /api/wifi/summary` — nearby venue and community-measurement counts and averages.
- `GET /api/wifi/reports?placeId=...` — up to 20 recent reports for a venue.
- `POST /api/wifi/reports` — validate and save a community measurement.

## Run in Replit

Run commands from the workspace root. The managed workflows supply the required `PORT`, `BASE_PATH`, database connection, and preview routing:

```sh
pnpm install
```

If provisioning a fresh workspace database, make sure `DATABASE_URL` is configured through Replit's database/secrets setup, then apply the schema:

```sh
pnpm --filter @workspace/db run push
```

Start the two managed workflows:

```sh
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/wifi-finder run dev
```

For changes, run the workspace type checks:

```sh
pnpm run typecheck
```

The frontend expects Replit's artifact routing and `BASE_PATH`; running it outside Replit may require equivalent environment variables and API proxy configuration. Do not commit database connection strings or other secrets.

## Attribution

Map and venue data © OpenStreetMap contributors. The speed test is provided by Cloudflare.