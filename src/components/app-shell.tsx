import { Locale, locales, localizedPath } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Guitar } from "lucide-react";
import Link from "next/link";

export function AppShell({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const dict = dictionaries[locale];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href={localizedPath(locale, "/dashboard")}
            className="flex items-center gap-2 font-semibold"
          >
            <Guitar className="h-5 w-5" />
            StringLife
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-600">{dict.app.language}</span>

            <div className="flex gap-1">
              {locales.map((option) => (
                <Link
                  key={option}
                  href={localizedPath(option, "/dashboard")}
                  className={
                    option === locale
                      ? "font-semibold text-zinc-950"
                      : "text-zinc-600 hover:text-zinc-950"
                  }
                >
                  {option.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <nav className="mx-auto max-w-6xl px-4 pb-3 text-sm">
          <Link
            href={localizedPath(locale, "/dashboard")}
            className="text-zinc-600 hover:text-zinc-900"
          >
            {dict.app.dashboard}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
