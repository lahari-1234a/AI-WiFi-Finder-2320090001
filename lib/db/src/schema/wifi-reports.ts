import { createInsertSchema } from "drizzle-zod";
import {
  doublePrecision,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const wifiReportsTable = pgTable("wifi_reports", {
  id: uuid("id").defaultRandom().primaryKey(),
  placeId: text("place_id").notNull(),
  placeName: text("place_name").notNull(),
  latitude: doublePrecision("latitude").notNull(),
  longitude: doublePrecision("longitude").notNull(),
  downloadMbps: doublePrecision("download_mbps").notNull(),
  uploadMbps: doublePrecision("upload_mbps").notNull(),
  latencyMs: doublePrecision("latency_ms").notNull(),
  signalStrength: integer("signal_strength"),
  activity: text("activity").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertWifiReportSchema = createInsertSchema(wifiReportsTable).omit(
  { id: true, createdAt: true },
);
export type InsertWifiReport = z.infer<typeof insertWifiReportSchema>;
export type WifiReportRecord = typeof wifiReportsTable.$inferSelect;