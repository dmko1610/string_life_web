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
import { isLocale, localizedPath } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function InstrumentPage({
  params
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;

  if (!isLocale(locale)) notFound();

  const instrument = await getInstrument(id);
  if (!instrument) notFound();

  const sessions = await listSessions(id);
  const days = getDaysSinceReplacement(instrument);
  const status = getReplacementStatus(days);
  const dict = dictionaries[locale];

  return (
    <AppShell locale={locale}>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{instrument?.name}</h1>
          <p className="mt-1 text-sm text-zinc-600">
            {instrument.type} - {instrument.stringCount}{" "}
            {dict.instrument.strings}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <TimerControls
            instrumentId={id}
            startText={dict.instrument.start}
            stopText={dict.instrument.stop}
          />
          <ButtonLink
            href={localizedPath(locale, `/instruments/${id}/sessions`)}
            variant="secondary"
          >
            {dict.instrument.sessions}
          </ButtonLink>
          <ButtonLink
            href={localizedPath(locale, `/instruments/${id}/edit`)}
            variant="secondary"
          >
            {dict.instrument.edit}
          </ButtonLink>
          <DeleteInstrumentButton
            id={id}
            locale={locale}
            text={dict.instrument.delete}
            confirmText={dict.instrument.deleteConfirm}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-zinc-600">
            {dict.instrument.totalPlaytime}
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatPlaytime(getTotalPlaytimeMs(sessions))}
          </p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-zinc-600">{dict.instrument.stringAge}</p>
          <p className="mt-2 text-2xl font-semibold">
            {days === null
              ? dict.instrument.unknown
              : `${days} ${dict.instrument.days}`}
          </p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-zinc-600">
            {dict.instrument.replacementStatus}
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {dict.instrument.statuses[status]}
          </p>
        </div>
      </div>

      {instrument?.notes && (
        <section className="mt-6 rounded-lg border bg-white p-5">
          <h2 className="font-semibold">{dict.instrument.notes}</h2>
          <p className="mt-2 text-sm text-zinc-700">{instrument.notes}</p>
        </section>
      )}
    </AppShell>
  );
}
