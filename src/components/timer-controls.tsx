"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { useState } from "react";
import { createSession, updateSession } from "@/lib/api/sessions";
import { Play, Square } from "lucide-react";

export function TimerControls({
  instrumentId,
  startText,
  stopText
}: {
  instrumentId: string;
  startText: string;
  stopText: string;
}) {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function start() {
    setBusy(true);
    const session = await createSession({
      instrumentId,
      startTime: new Date().toISOString(),
      endTime: null,
      notes: null
    });
    setSessionId(session?.id ?? null);
    setBusy(false);
  }

  async function stop() {
    if (!sessionId) return;

    setBusy(true);
    await updateSession(sessionId, {
      endTime: new Date().toISOString(),
      notes: null
    });
    setSessionId(null);
    setBusy(false);
    router.refresh();
  }

  return sessionId ? (
    <Button onClick={stop} disabled={busy} variant="danger">
      <Square className="mr-2 h-4 w-4" />
      {stopText}
    </Button>
  ) : (
    <Button onClick={start} disabled={busy}>
      <Play className="mr-2 h-4 w-4" />
      {startText}
    </Button>
  );
}
