import type { Session } from "../api/sessions";

export function getSessionDurationMs(session: Session) {
  if (!session.endTime) return 0;

  const startTime = new Date(session.startTime).getTime();
  const endTime = new Date(session.endTime).getTime();

  return Math.max(0, endTime - startTime);
}

export function getTotalPlaytimeMs(sessions: Session[]) {
  return sessions.reduce(
    (total, session) => total + getSessionDurationMs(session),
    0
  );
}

export function formatPlaytime(totalMs: number) {
  const totalMinutes = Math.floor(totalMs / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;

  return `${hours}h ${minutes}m`;
}


