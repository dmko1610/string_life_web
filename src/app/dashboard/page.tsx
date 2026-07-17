import { AppShell } from "@/components/app-shell";
import { ButtonLink } from "@/components/button";
import { listInstruments } from "@/lib/api/instruments";
import { getDaysSinceReplacement } from "@/lib/domain/instruments";
import { Plus } from "lucide-react";

export default async function DashboardPage() {
  const instruments = await listInstruments();

  return (
    <AppShell>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Instruments</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Track strings, sessions and playtime
          </p>
        </div>
        <ButtonLink href="/instruments/new">
          <Plus className="mr-2 h-4 w-4" />
        </ButtonLink>
      </div>

      {instruments.length === 0 ? (
        <div className="rounded-lg border bg-white p-8 text-center">
          <h2 className="font-medium">No Instruments yet</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Add your first instrument to start tracking.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map((instrument) => {
            const days = getDaysSinceReplacement(instrument);

            return (
              <a
                key={instrument.id}
                href={`/instruments/${instrument.id}`}
                className="rounded-lg border bg-white p-5 hover:bg-zinc-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold">{instrument.name}</h2>
                    <p className="mt-1 text-sm text-zinc-600">
                      {instrument.type}
                    </p>
                  </div>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs">
                    {instrument.stringCount} strings
                  </span>
                </div>
                <p className="mt-6 text-sm text-zinc-600">
                  {days === null
                    ? "String change unknown"
                    : `${days} days since replacement`}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </AppShell>
  );
}
