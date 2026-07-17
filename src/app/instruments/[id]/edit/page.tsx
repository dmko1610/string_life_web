import { AppShell } from "@/components/app-shell";
import { InstrumentForm } from "@/components/instrument-form";
import { getInstrument } from "@/lib/api/instruments";

export default async function EditInstrumentPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const instrument = await getInstrument(id);

  return (
    <AppShell>
      <h1 className="mb-6 text-2xl font-semibold">Edit Instrument</h1>
      <InstrumentForm instrument={instrument} />
    </AppShell>
  );
}
