import { AppShell } from "@/components/app-shell";
import { ButtonLink } from "@/components/button";
import { DeleteInstrumentButton } from "@/components/delete-instrument-button";
import { TimerControls } from "@/components/timer-controls";
import { getInstrument } from "@/lib/api/instruments";
import { listSessions } from "@/lib/api/sessions";
import {
  getDaysSinceReplacement,
  getReplacementStatus
} from "@/lib/domain/instruments";
import { formatPlaytime, getTotalPlaytimeMs } from "@/lib/domain/playtime";

export default async function InstrumentPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const instrument = await getInstrument(id);
  const sessions = await listSessions(id);
  const days = getDaysSinceReplacement(instrument);
  const status = getReplacementStatus(days);

  return (
    <AppShell>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{instrument?.name}</h1>
          <p className="mt-1 text-sm text-zinc-600">
            {instrument?.type} - {instrument?.stringCount} strings
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <TimerControls instrumentId={id} />
          <ButtonLink href={`/instruments/${id}/sessions`} variant="secondary">
            Sessions
          </ButtonLink>
          <ButtonLink href={`/instruments/${id}/edit`} variant="secondary">
            Edit
          </ButtonLink>
          <DeleteInstrumentButton id={id} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-zinc-600">Total playtime</p>
          <p className="mt-2 text-2xl font-semibold">
            {formatPlaytime(getTotalPlaytimeMs(sessions))}
          </p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-zinc-600">String age</p>
          <p className="mt-2 text-2xl font-semibold">
            {days === null ? "Unknown" : `${days} days`}
          </p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-zinc-600">Replacement status</p>
          <p className="mt-2 text-2xl font-semibold capitalize">{status}</p>
        </div>
      </div>

      {instrument?.notes && (
        <section className="mt-6 rounded-lg border bg-white p-5">
          <h2 className="font-semibold">Notes</h2>
          <p className="mt-2 text-sm text-zinc-700">{instrument.notes}</p>
        </section>
      )}
    </AppShell>
  );
}
