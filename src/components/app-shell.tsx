import { Guitar } from "lucide-react";
import Link from "next/link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Guitar className="h-5 w-5" />
            StringLife
          </Link>
        </div>
        <nav className="text-sm">
          <Link href="/dashboard" className="text-zinc-600 hover:text-zinc-900">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
