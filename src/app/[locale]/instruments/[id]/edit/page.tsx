import { AppShell } from "@/components/app-shell";
import { InstrumentForm } from "@/components/instrument-form";
import { getInstrument } from "@/lib/api/instruments";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function EditInstrumentPage({
  params
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;

  if (!isLocale(locale)) notFound();

  const instrument = await getInstrument(id);

  return (
    <AppShell locale={locale}>
      <h1 className="mb-6 text-2xl font-semibold">Edit Instrument</h1>
      <InstrumentForm instrument={instrument} locale={locale} />
    </AppShell>
  );
}
