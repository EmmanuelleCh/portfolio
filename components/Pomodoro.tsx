"use client";

import { useEffect, useState } from "react";

type Mode = "work" | "break";
const DURATIONS: Record<Mode, number> = {
  work: 25 * 60, // 25 min
  break: 5 * 60, // 5  min
};

export default function Pomodoro() {
  const [mode, setMode] = useState<Mode>("work");
  const [seconds, setSeconds] = useState(DURATIONS.work);
  const [running, setRunning] = useState(false);

  // Tick 1s quand c'est en marche
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  // Quand ça atteint 0 → bascule de mode et met en pause
  useEffect(() => {
    if (seconds >= 0) return;
    const next: Mode = mode === "work" ? "break" : "work";
    setMode(next);
    setSeconds(DURATIONS[next]);
    setRunning(false);
  }, [seconds, mode]);

  function start() {
    setRunning(true);
  }
  function pause() {
    setRunning(false);
  }
  function reset() {
    setRunning(false);
    setSeconds(DURATIONS[mode]);
  }
  function switchMode(next: Mode) {
    setRunning(false);
    setMode(next);
    setSeconds(DURATIONS[next]);
  }

  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="w-full max-w-sm card p-6 text-center">
        <h1 className="text-xl font-semibold mb-1">Pomodoro</h1>
        <p className="text-xs opacity-70 mb-6">
          Mode : <b>{mode === "work" ? "Focus" : "Pause"}</b>
        </p>

        <div className="text-6xl font-semibold tabular-nums mb-6">
          {format(seconds)}
        </div>

        <div className="flex items-center justify-center gap-3">
          {!running ? (
            <button className="btn btn-primary" onClick={start}>
              Démarrer
            </button>
          ) : (
            <button className="btn btn-ghost" onClick={pause}>
              Pause
            </button>
          )}
          <button className="btn btn-ghost" onClick={reset}>
            Réinitialiser
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs">
          <button
            className={`px-3 py-1 rounded-full border ${
              mode === "work"
                ? "border-brand-500/50 text-brand-700 dark:text-brand-200"
                : "border-white/10 opacity-80"
            }`}
            onClick={() => switchMode("work")}
          >
            Focus 25′
          </button>
          <button
            className={`px-3 py-1 rounded-full border ${
              mode === "break"
                ? "border-brand-500/50 text-brand-700 dark:text-brand-200"
                : "border-white/10 opacity-80"
            }`}
            onClick={() => switchMode("break")}
          >
            Pause 5′
          </button>
        </div>
      </div>
    </main>
  );
}

function format(total: number) {
  const t = Math.max(0, total);
  const m = String(Math.floor(t / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  return `${m}:${s}`;
}
