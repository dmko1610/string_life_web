"use client";

import {
  createInstrument,
  Instrument,
  updateInstrument
} from "@/lib/api/instruments";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";

export function InstrumentForm({ instrument }: { instrument?: Instrument }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setError(null);

    const body = {
      name: String(formData.get("name") ?? ""),
      type: String(formData.get("type") ?? "ELECTRIC"),
      stringCount: Number(formData.get("stringCount") ?? 6),
      lastStringChangeDate:
        String(formData.get("lastStringChangeDate") || "") || null,
      notes: String(formData.get("notes") || "") || null
    };

    try {
      if (instrument) {
        await updateInstrument(instrument.id, body);
        router.push(`/instruments/${instrument.id}`);
      } else {
        const created = await createInstrument(body);
        router.push(created?.id ? `/instruments/${created.id}` : "/dashboard");
      }

      router.refresh();
    } catch {
      setError("Could not save instrument.");
    }
  }

  return (
    <form action={onSubmit} className="max-w-xl space-y-5">
      <label className="block">
        <span className="text-sm font-medium">Name</span>
        <input
          name="name"
          required
          defaultValue={instrument?.name}
          className="mt-1 h-10 w-full rounded-md border px-3"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Type</span>
        <select
          name="type"
          defaultValue={instrument?.type ?? "ELECTRIC"}
          className="mt-1 h-10 w-full rounded-md border px-3"
        >
          <option value="ELECTRIC">Electric</option>
          <option value="ACOUSTIC">Acoustic</option>
          <option value="BASS">Bass</option>
          <option value="UKULELE">Ukulele</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-medium">String count</span>
        <input
          name="stringCount"
          type="number"
          min="1"
          required
          defaultValue={instrument?.stringCount ?? 6}
          className="mt-1 h-10 w-full rounded-md border px-3"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Last string replacement</span>
        <input
          name="lastStringChangeDate"
          type="date"
          defaultValue={instrument?.lastStringChangeDate ?? ""}
          className="mt-1 h-10 w-full rounded-md border px-3"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Notes</span>
        <textarea
          name="notes"
          defaultValue={instrument?.notes ?? ""}
          className="mt-1 h-10 w-full rounded-md border p-3"
        />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit">Save instrument</Button>
    </form>
  );
}
