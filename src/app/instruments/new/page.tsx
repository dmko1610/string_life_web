import { AppShell } from "@/components/app-shell";
import { InstrumentForm } from "@/components/instrument-form";

export default function NewInstrumentPage() {
  return (
    <AppShell>
      <h1>Add Instrument</h1>
      <InstrumentForm />
    </AppShell>
  );
}
