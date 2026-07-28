import { AppShell } from "@/components/app-shell";
import { InstrumentForm } from "@/components/instrument-form";
import { isLocale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function NewInstrumentPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dict = dictionaries[locale];

  return (
    <AppShell locale={locale}>
      <h1>{dict.instrumentForm.titleNew}</h1>
      <InstrumentForm locale={locale} />
    </AppShell>
  );
}
