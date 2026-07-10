"use client";

import { useState } from "react";
import { type Lang } from "@/lib/decks";
import { solatSteps, solatText } from "@/lib/solat";

export default function SolatSection({ lang }: { lang: Lang }) {
  const [pos, setPos] = useState(0);
  const th = lang === "th";
  const total = solatSteps.length;
  const step = solatSteps[pos];
  const last = pos === total - 1;

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
      <div className="text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${th ? "lang-th" : ""}`}>
          {solatText.title[lang]}
        </h2>
        <p className={`text-sm text-muted mt-2 ${th ? "lang-th" : ""}`}>{solatText.intro[lang]}</p>
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
      <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 flex flex-col gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-accent-soft text-accent">
            {solatText.step[lang]} {pos + 1}/{total}
          </span>
          {step.term && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {step.term}
            </span>
          )}
          {step.repeat && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-accent-soft text-accent ${th ? "lang-th" : ""}`}>
              🔁 {step.repeat[lang]}
            </span>
          )}
        </div>

        <h3 className={`text-2xl font-bold leading-snug ${th ? "lang-th" : ""}`}>{step.name[lang]}</h3>

        <p className={`text-muted leading-relaxed ${th ? "lang-th" : ""}`}>{step.instruction[lang]}</p>

        {step.note && (
          <div className={`rounded-2xl bg-surface-2 border border-border p-4 text-sm text-muted ${th ? "lang-th" : ""}`}>
            💡 {step.note[lang]}
          </div>
        )}

        {step.recite && (
          <div className="rounded-2xl bg-primary/8 border border-primary/20 overflow-hidden">
            <div className={`px-4 py-2 bg-primary/10 text-primary text-xs font-semibold flex items-center gap-1.5 ${th ? "lang-th" : ""}`}>
              🔊 {solatText.pronounce[lang]}
            </div>
            <div className="divide-y divide-primary/10">
              {step.recite.map((line, i) => (
                <div key={i} className="p-4 flex flex-col gap-2">
                  {line.heading && (
                    <p className={`text-xs font-bold uppercase tracking-wide text-accent ${th ? "lang-th" : ""}`}>
                      {line.heading[lang]}
                    </p>
                  )}
                  {line.arabic && (
                    <p className="lang-ar text-2xl sm:text-3xl text-foreground text-right" lang="ar">
                      {line.arabic}
                    </p>
                  )}
                  <p className={`text-lg font-semibold text-primary leading-snug ${th ? "lang-th" : ""}`}>
                    {line.say[lang]}
                  </p>
                  {line.meaning && (
                    <p className={`text-sm text-muted ${th ? "lang-th" : ""}`}>
                      <span className="font-medium">{solatText.meaning[lang]}: </span>
                      {line.meaning[lang]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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
