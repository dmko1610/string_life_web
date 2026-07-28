"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { deleteInstrument } from "@/lib/api/instruments";
import { Trash2 } from "lucide-react";
import { Locale, localizedPath } from "@/lib/i18n/config";

export function DeleteInstrumentButton({
  id,
  locale,
  text,
  confirmText
}: {
  id: string;
  locale: Locale;
  text: string;
  confirmText: string;
}) {
  const router = useRouter();

  async function onDelete() {
    if (!confirm(confirmText)) return;

    await deleteInstrument(id);

    router.push(localizedPath(locale, "/dashboard"));
    router.refresh();
  }

  return (
    <Button variant="danger" onClick={onDelete}>
      <Trash2 className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );
}
