"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { deleteInstrument } from "@/lib/api/instruments";
import { Trash2 } from "lucide-react";

export function DeleteInstrumentButton({ id }: { id: string }) {
  const router = useRouter();

  async function onDelete() {
    if (!confirm("Delete this instrument?")) return;

    await deleteInstrument(id);

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <Button variant="danger" onClick={onDelete}>
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </Button>
  );
}
