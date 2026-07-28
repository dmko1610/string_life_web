import { AppShell } from "@/components/app-shell";
import { getInstrument } from "@/lib/api/instruments";
import { listSessions } from "@/lib/api/sessions";
import {
  formatPlaytime,
  getSessionDurationMs,
  getTotalPlaytimeMs
} from "@/lib/domain/playtime";
import { isLocale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function SessionsPage({
  params
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;

  if (!isLocale(locale)) notFound();

  const instrument = await getInstrument(id);
  const sessions = await listSessions(id);
  const dict = dictionaries[locale];

  return (
    <AppShell locale={locale}>
      <div className="mb-6">
        <h1 className="text-2xl">{instrument?.name}</h1>
        <p className="mt-1 text-sm text-zinc-600">
          {dict.session.total}
          {formatPlaytime(getTotalPlaytimeMs(sessions))}
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-100 text-zinc-600">
            <tr>
              <th className="p-3">{dict.session.startTime}</th>
              <th className="p-3">{dict.session.endTime}</th>
              <th className="p-3">{dict.session.duration}</th>
              <th className="p-3">{dict.session.notes}</th>
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
                  {dict.session.emptyScreen}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
