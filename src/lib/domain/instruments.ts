import { Instrument } from "../api/instruments";

export type ReplacementStatus = "unknown" | "fresh" | "soon" | "overdue";

export function getDaysSinceReplacement(instrument: Instrument) {
  if (!instrument.lastStringChangeDate) return null;

  const changedAt = new Date(instrument.lastStringChangeDate).getTime();
  const now = Date.now();
  const elapsedMs = Math.max(0, now - changedAt);

  return Math.floor(elapsedMs / 86_400_000);
}

export function getReplacementStatus(
  daysSinceReplacement: number | null
): ReplacementStatus {
  if (daysSinceReplacement === null) return "unknown";
  if (daysSinceReplacement < 60) return "fresh";
  if (daysSinceReplacement < 90) return "soon";

  return "overdue";
}
