"use client";

import { useState } from "react";
import { type Lang } from "@/lib/decks";
import { solatSteps, solatText } from "@/lib/solat";
import PrayerFigure from "./PrayerFigure";

export default function SolatSection({ lang }: { lang: Lang }) {
  const [pos, setPos] = useState(0);
  const th = lang === "th";
  const total = solatSteps.length;
  const step = solatSteps[pos];
  const last = pos === total - 1;

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
      <div className="text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${th ? "lang-th" : ""}`}>
          {solatText.title[lang]}
        </h2>
        <p className={`text-sm text-muted mt-2 ${th ? "lang-th" : ""}`}>
          {solatText.intro[lang]}
        </p>
      </div>

      {/* Step dots */}
      <div className="flex flex-wrap justify-center gap-2">
        {solatSteps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setPos(i)}
            aria-label={`${solatText.step[lang]} ${i + 1}`}
            className={`w-8 h-8 rounded-full text-sm font-semibold transition ${
              i === pos
                ? "bg-primary text-primary-fg scale-110"
                : i < pos
                  ? "bg-primary/20 text-primary"
                  : "bg-surface-2 text-muted hover:text-foreground"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div className="rounded-3xl border border-border bg-surface overflow-hidden">
        <div className="grid sm:grid-cols-[minmax(0,1fr)_1.3fr]">
          {/* Figure */}
          <div className="bg-surface-2/60 flex items-center justify-center p-6 sm:p-8">
            <PrayerFigure pose={step.pose} />
          </div>

          {/* Info */}
          <div className="p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-accent-soft text-accent">
                {solatText.step[lang]} {pos + 1}/{total}
              </span>
              {step.term && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {step.term}
                </span>
              )}
            </div>

            <h3 className={`text-2xl font-bold leading-snug ${th ? "lang-th" : ""}`}>
              {step.name[lang]}
            </h3>

            <p className={`text-muted leading-relaxed ${th ? "lang-th" : ""}`}>
              {step.instruction[lang]}
            </p>

            {step.say && (
              <div className="rounded-2xl bg-primary/8 border border-primary/20 p-4">
                <div className={`text-xs font-semibold text-primary mb-1 ${th ? "lang-th" : ""}`}>
                  🗣️ {solatText.say[lang]}
                </div>
                <p className="text-lg font-semibold">“{step.say.arabic}”</p>
                <p className={`text-sm text-muted mt-1 ${th ? "lang-th" : ""}`}>
                  {step.say.meaning[lang]}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {last && (
        <div className={`text-center text-primary font-semibold ${th ? "lang-th" : ""}`}>
          {solatText.done[lang]}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setPos((p) => Math.max(0, p - 1))}
          disabled={pos === 0}
          className={`px-5 py-2.5 rounded-xl border border-border bg-surface font-medium transition disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-ring ${th ? "lang-th" : ""}`}
        >
          ← {solatText.prev[lang]}
        </button>

        {last ? (
          <button
            onClick={() => setPos(0)}
            className={`px-5 py-2.5 rounded-xl border border-border bg-surface font-medium hover:border-ring transition ${th ? "lang-th" : ""}`}
          >
            ↺ {solatText.restart[lang]}
          </button>
        ) : (
          <button
            onClick={() => setPos((p) => Math.min(total - 1, p + 1))}
            className={`px-6 py-2.5 rounded-xl bg-primary text-primary-fg font-medium hover:opacity-90 transition ${th ? "lang-th" : ""}`}
          >
            {solatText.next[lang]} →
          </button>
        )}
      </div>
    </div>
  );
}
