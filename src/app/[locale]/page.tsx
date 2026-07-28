import { isLocale, localizedPath } from "@/lib/i18n/config";
import { notFound, redirect } from "next/navigation";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return redirect(localizedPath(locale, "/dashboard"));
}
