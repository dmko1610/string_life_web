"use client";

import {
  createInstrument,
  Instrument,
  updateInstrument
} from "@/lib/api/instruments";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Locale, localizedPath } from "@/lib/i18n/config";

export function InstrumentForm({
  instrument,
  locale
}: {
  instrument?: Instrument;
  locale: Locale;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const dict = dictionaries[locale];
  const formDict = dict.instrumentForm;

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
        router.push(localizedPath(locale, `/instruments/${instrument.id}`));
      } else {
        const created = await createInstrument(body);
        router.push(
          localizedPath(
            locale,
            created?.id ? `/instruments/${created.id}` : "/dashboard"
          )
        );
      }

      router.refresh();
    } catch {
      setError(formDict.error);
    }
  }

  return (
    <form action={onSubmit} className="max-w-xl space-y-5">
      <label className="block">
        <span className="text-sm font-medium">{formDict.name}</span>
        <input
          name="name"
          required
          defaultValue={instrument?.name}
          className="mt-1 h-10 w-full rounded-md border px-3"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">{formDict.type}</span>
        <select
          name="type"
          defaultValue={instrument?.type ?? "ELECTRIC"}
          className="mt-1 h-10 w-full rounded-md border px-3"
        >
          <option value="ELECTRIC">{formDict.types.electric}</option>
          <option value="ACOUSTIC">{formDict.types.acoustic}</option>
          <option value="BASS">{formDict.types.bass}</option>
          <option value="UKULELE">{formDict.types.ukulele}</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-medium">{formDict.stringCount}</span>
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
        <span className="text-sm font-medium">
          {formDict.lastStringChangeDate}
        </span>
        <input
          name="lastStringChangeDate"
          type="date"
          defaultValue={instrument?.lastStringChangeDate ?? ""}
          className="mt-1 h-10 w-full rounded-md border px-3"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">{formDict.notes}</span>
        <textarea
          name="notes"
          defaultValue={instrument?.notes ?? ""}
          className="mt-1 h-10 w-full rounded-md border p-3"
        />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit">{formDict.save}</Button>
    </form>
  );
}
