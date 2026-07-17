import { AppShell } from "@/components/app-shell";
import { getInstrument } from "@/lib/api/instruments";
import { listSessions } from "@/lib/api/sessions";
import {
  formatPlaytime,
  getSessionDurationMs,
  getTotalPlaytimeMs
} from "@/lib/domain/playtime";

export default async function SessionsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const instrument = await getInstrument(id);
  const sessions = await listSessions(id);

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl">{instrument?.name}</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Total: {formatPlaytime(getTotalPlaytimeMs(sessions))}
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-100 text-zinc-600">
            <tr>
              <th className="p-3">Start</th>
              <th className="p-3">End</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id} className="border-t">
                <td className="p-3">
                  {new Date(session.startTime).toLocaleString()}
                </td>
                <td className="p-3">
                  {session.endTime
                    ? new Date(session.endTime).toLocaleString()
                    : "Active"}
                </td>
                <td className="p-3">
                  {formatPlaytime(getSessionDurationMs(session))}
                </td>
                <td className="p-3">{session.notes ?? ""}</td>
              </tr>
            ))}
            {sessions.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-zinc-600">
                  No sessions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
