"use client";

import { uiText, type Lang } from "@/lib/decks";
import { quizText } from "@/lib/quiz";

export type Mode = "cards" | "quiz";
export type Theme = "light" | "dark" | "system";

export default function Header({
  lang,
  setLang,
  theme,
  setTheme,
  mounted,
  mode,
  setMode,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  mounted: boolean;
  mode: Mode;
  setMode: (m: Mode) => void;
}) {
  const nextTheme: Record<Theme, Theme> = {
    system: "light",
    light: "dark",
    dark: "system",
  };
  const themeIcon: Record<Theme, string> = {
    system: "🖥️",
    light: "☀️",
    dark: "🌙",
  };
  const th = lang === "th";

  return (
    <header className="border-b border-border bg-surface/70 backdrop-blur sticky top-0 z-10">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span
            aria-hidden
            className="grid place-items-center w-10 h-10 rounded-xl bg-primary text-primary-fg text-xl shrink-0"
          >
            ☪
          </span>
          <div className="min-w-0">
            <h1 className="font-semibold leading-tight truncate">
              {uiText.appTitle[lang]}
            </h1>
            <p className="text-xs text-muted leading-tight truncate">
              {uiText.appSubtitle[lang]}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="inline-flex rounded-lg border border-border bg-surface-2 p-0.5 text-sm font-medium"
            role="group"
            aria-label="Language"
          >
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-md transition ${
                lang === "en"
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("th")}
              className={`px-3 py-1.5 rounded-md transition lang-th ${
                lang === "th"
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-foreground"
              }`}
            >
              ไทย
            </button>
          </div>
          <button
            onClick={() => setTheme(nextTheme[theme])}
            className="w-9 h-9 grid place-items-center rounded-lg border border-border bg-surface-2 hover:border-ring transition"
            aria-label="Toggle theme"
            title={`Theme: ${theme}`}
          >
            <span suppressHydrationWarning>{mounted ? themeIcon[theme] : "🖥️"}</span>
          </button>
        </div>
      </div>

      {/* Mode switch */}
      <div className="border-t border-border/60">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-2 flex justify-center">
          <div
            className="inline-flex rounded-xl border border-border bg-surface-2 p-1 text-sm font-medium"
            role="group"
            aria-label="Mode"
          >
            <button
              onClick={() => setMode("cards")}
              className={`px-4 py-1.5 rounded-lg transition ${th ? "lang-th" : ""} ${
                mode === "cards"
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-foreground"
              }`}
            >
              🗂️ {uiText.flashcards[lang]}
            </button>
            <button
              onClick={() => setMode("quiz")}
              className={`px-4 py-1.5 rounded-lg transition ${th ? "lang-th" : ""} ${
                mode === "quiz"
                  ? "bg-primary text-primary-fg"
                  : "text-muted hover:text-foreground"
              }`}
            >
              ✅ {quizText.quizTitle[lang]}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
