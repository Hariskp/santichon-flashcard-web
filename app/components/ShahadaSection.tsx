"use client";

import { type Lang } from "@/lib/decks";
import { shahadaFull, shahadaParts, shahadaText, type ShahadaLine } from "@/lib/shahada";

export default function ShahadaSection({ lang }: { lang: Lang }) {
  const th = lang === "th";

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
      <div className="text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${th ? "lang-th" : ""}`}>
          {shahadaText.title[lang]}
        </h2>
        <p className={`text-sm text-muted mt-2 ${th ? "lang-th" : ""}`}>{shahadaText.subtitle[lang]}</p>
      </div>

      {/* Hero card — the full Shahada */}
      <div className="rounded-3xl border border-primary/25 bg-primary/8 p-6 sm:p-9 text-center flex flex-col gap-5">
        <p className="lang-ar text-3xl sm:text-4xl leading-loose text-foreground" lang="ar" dir="rtl">
          {shahadaFull.arabic}
        </p>
        <div>
          <div className={`text-xs font-semibold text-primary mb-1 ${th ? "lang-th" : ""}`}>
            🔊 {shahadaText.sayIt[lang]}
          </div>
          <p className={`text-lg sm:text-xl font-semibold ${th ? "lang-th" : ""}`}>
            “{shahadaFull.say[lang]}”
          </p>
        </div>
        <div>
          <div className={`text-xs font-semibold text-accent mb-1 ${th ? "lang-th" : ""}`}>
            💬 {shahadaText.meaning[lang]}
          </div>
          <p className={`text-base text-muted leading-relaxed ${th ? "lang-th" : ""}`}>
            {shahadaFull.meaning[lang]}
          </p>
        </div>
      </div>

      {/* The two testimonies */}
      <div className="grid sm:grid-cols-2 gap-4">
        <PartCard
          label={shahadaText.firstTestimony[lang]}
          line={shahadaParts[0]}
          lang={lang}
        />
        <PartCard
          label={shahadaText.secondTestimony[lang]}
          line={shahadaParts[1]}
          lang={lang}
        />
      </div>

      {/* Note */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <div className={`text-sm font-semibold text-primary mb-1.5 ${th ? "lang-th" : ""}`}>
          💡 {shahadaText.noteTitle[lang]}
        </div>
        <p className={`text-sm text-muted leading-relaxed ${th ? "lang-th" : ""}`}>
          {shahadaText.note[lang]}
        </p>
      </div>
    </div>
  );
}

function PartCard({ label, line, lang }: { label: string; line: ShahadaLine; lang: Lang }) {
  const th = lang === "th";
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-accent-soft text-accent self-start">
        {label}
      </span>
      <p className="lang-ar text-2xl leading-loose text-foreground text-right" lang="ar" dir="rtl">
        {line.arabic}
      </p>
      <p className={`font-semibold text-primary ${th ? "lang-th" : ""}`}>{line.say[lang]}</p>
      <p className={`text-sm text-muted ${th ? "lang-th" : ""}`}>{line.meaning[lang]}</p>
    </div>
  );
}
