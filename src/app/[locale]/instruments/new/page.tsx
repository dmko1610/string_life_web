import { AppShell } from "@/components/app-shell";
import { InstrumentForm } from "@/components/instrument-form";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function NewInstrumentPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <AppShell locale={locale}>
      <h1>Add Instrument</h1>
      <InstrumentForm locale={locale} />
    </AppShell>
  );
}
