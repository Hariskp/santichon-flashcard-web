"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { decks, uiText, type Deck, type Lang } from "@/lib/decks";

const LANG_KEY = "islam-fc-lang";
const THEME_KEY = "islam-fc-theme";
const LEARNED_KEY = "islam-fc-learned";

type LearnedMap = Record<string, string[]>;
type Theme = "light" | "dark" | "system";

function shuffled(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardApp() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("system");
  const [learned, setLearned] = useState<LearnedMap>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  // Load persisted preferences after mount (avoids hydration mismatch)
  useEffect(() => {
    setMounted(true);
    try {
      const l = localStorage.getItem(LANG_KEY);
      if (l === "en" || l === "th") setLang(l);
      const t = localStorage.getItem(THEME_KEY) as Theme | null;
      if (t === "light" || t === "dark" || t === "system") setTheme(t);
      const raw = localStorage.getItem(LEARNED_KEY);
      if (raw) setLearned(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LANG_KEY, lang);
  }, [lang, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(THEME_KEY, theme);
    const root = document.documentElement;
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  const persistLearned = useCallback((next: LearnedMap) => {
    setLearned(next);
    try {
      localStorage.setItem(LEARNED_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const t = (v: Record<Lang, string>) => v[lang];
  const activeDeck = decks.find((d) => d.id === activeId) ?? null;

  return (
    <div className="flex-1 flex flex-col">
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        mounted={mounted}
      />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {activeDeck ? (
          <StudyView
            key={activeDeck.id}
            deck={activeDeck}
            lang={lang}
            learnedIds={learned[activeDeck.id] ?? []}
            onBack={() => setActiveId(null)}
            onUpdateLearned={(ids) =>
              persistLearned({ ...learned, [activeDeck.id]: ids })
            }
          />
        ) : (
          <DeckGrid
            lang={lang}
            learned={learned}
            onOpen={(id) => setActiveId(id)}
          />
        )}
      </main>
      <footer className="text-center text-xs text-muted py-6 px-4">
        {lang === "th" ? (
          <span className="lang-th">
            เนื้อหาจากเอกสารประกอบการเรียนการสอน · มูลนิธิสันติชน
          </span>
        ) : (
          <span>Content adapted from a study booklet by the Santichon Foundation</span>
        )}
      </footer>
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────── */

function Header({
  lang,
  setLang,
  theme,
  setTheme,
  mounted,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  mounted: boolean;
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
    </header>
  );
}

/* ── Deck grid ──────────────────────────────────────────── */

function DeckGrid({
  lang,
  learned,
  onOpen,
}: {
  lang: Lang;
  learned: LearnedMap;
  onOpen: (id: string) => void;
}) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {uiText.chooseDeck[lang]}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {decks.map((deck) => {
          const total = deck.cards.length;
          const done = (learned[deck.id] ?? []).filter((id) =>
            deck.cards.some((c) => c.id === id),
          ).length;
          const pct = total ? Math.round((done / total) * 100) : 0;
          return (
            <button
              key={deck.id}
              onClick={() => onOpen(deck.id)}
              className="group text-left rounded-2xl border border-border bg-surface p-5 hover:border-ring hover:shadow-lg hover:shadow-primary/5 transition flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl" aria-hidden>
                  {deck.icon}
                </span>
                <span className="text-xs text-muted whitespace-nowrap">
                  {total} {uiText.cards[lang]}
                </span>
              </div>
              <div className="flex-1">
                <h3
                  className={`font-semibold text-lg leading-snug ${lang === "th" ? "lang-th" : ""}`}
                >
                  {deck.title[lang]}
                </h3>
                <p
                  className={`text-sm text-muted mt-1 ${lang === "th" ? "lang-th" : ""}`}
                >
                  {deck.description[lang]}
                </p>
              </div>
              <div>
                <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-1.5 text-xs text-muted">
                  {done}/{total} {uiText.learned[lang]}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Study view ─────────────────────────────────────────── */

function StudyView({
  deck,
  lang,
  learnedIds,
  onBack,
  onUpdateLearned,
}: {
  deck: Deck;
  lang: Lang;
  learnedIds: string[];
  onBack: () => void;
  onUpdateLearned: (ids: string[]) => void;
}) {
  const [order, setOrder] = useState<number[]>(() =>
    Array.from({ length: deck.cards.length }, (_, i) => i),
  );
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const total = deck.cards.length;
  const learnedSet = useMemo(() => new Set(learnedIds), [learnedIds]);
  const doneCount = deck.cards.filter((c) => learnedSet.has(c.id)).length;
  const card = deck.cards[order[pos]];
  const finished = doneCount === total;

  const go = useCallback(
    (dir: 1 | -1) => {
      setFlipped(false);
      setPos((p) => (p + dir + total) % total);
    },
    [total],
  );

  const mark = useCallback(
    (asLearned: boolean) => {
      const id = card.id;
      const next = new Set(learnedSet);
      if (asLearned) next.add(id);
      else next.delete(id);
      onUpdateLearned([...next]);
      setFlipped(false);
      setPos((p) => (p + 1) % total);
    },
    [card, learnedSet, onUpdateLearned, total],
  );

  const reshuffle = () => {
    setOrder(shuffled(total));
    setPos(0);
    setFlipped(false);
  };

  const reset = () => {
    onUpdateLearned([]);
    setOrder(Array.from({ length: total }, (_, i) => i));
    setPos(0);
    setFlipped(false);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const th = lang === "th";

  return (
    <div className="flex flex-col gap-5">
      {/* Top bar */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition rounded-lg px-2 py-1 -ml-2"
        >
          <span aria-hidden>←</span>
          <span className={th ? "lang-th" : ""}>{uiText.back[lang]}</span>
        </button>
        <div className="flex items-center gap-2 ml-auto text-sm text-muted">
          <span aria-hidden>{deck.icon}</span>
          <span className={`font-medium text-foreground ${th ? "lang-th" : ""}`}>
            {deck.title[lang]}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-muted mb-1.5">
          <span className={th ? "lang-th" : ""}>{uiText.progress[lang]}</span>
          <span>
            {doneCount}/{total} {uiText.learned[lang]}
          </span>
        </div>
        <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${total ? (doneCount / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      {finished ? (
        <DoneCard lang={lang} onStudyAgain={reset} onBack={onBack} />
      ) : (
        <>
          <div className="text-center text-xs text-muted">
            {pos + 1} / {total}
          </div>

          {/* Card */}
          <div className="flip-scene">
            <button
              onClick={() => setFlipped((f) => !f)}
              className="relative w-full block text-left"
              style={{ minHeight: "22rem" }}
              aria-label={uiText.tapToFlip[lang]}
            >
              <div
                className={`flip-card relative w-full ${flipped ? "is-flipped" : ""}`}
                style={{ minHeight: "22rem" }}
              >
                <CardFace
                  face="front"
                  badge={uiText.question[lang]}
                  badgeClass="bg-accent-soft text-accent"
                  text={card.front[lang]}
                  th={th}
                  learned={learnedSet.has(card.id)}
                  hint={uiText.tapToFlip[lang]}
                />
                <CardFace
                  face="back"
                  badge={uiText.answer[lang]}
                  badgeClass="bg-primary/10 text-primary"
                  text={card.back[lang]}
                  arabic={card.arabic}
                  th={th}
                  learned={learnedSet.has(card.id)}
                />
              </div>
            </button>
          </div>

          {/* Answer actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => mark(false)}
              className={`py-3 rounded-xl border border-border bg-surface font-medium hover:border-ring transition ${th ? "lang-th" : ""}`}
            >
              🔁 {uiText.reviewAgain[lang]}
            </button>
            <button
              onClick={() => mark(true)}
              className={`py-3 rounded-xl bg-primary text-primary-fg font-medium hover:opacity-90 transition ${th ? "lang-th" : ""}`}
            >
              ✓ {uiText.gotIt[lang]}
            </button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => go(-1)}
              className={`px-4 py-2 rounded-lg text-sm text-muted hover:text-foreground transition ${th ? "lang-th" : ""}`}
            >
              ← {uiText.prev[lang]}
            </button>
            <div className="flex gap-2">
              <button
                onClick={reshuffle}
                className={`px-3 py-2 rounded-lg text-sm border border-border bg-surface hover:border-ring transition ${th ? "lang-th" : ""}`}
              >
                🔀 {uiText.shuffle[lang]}
              </button>
              <button
                onClick={reset}
                className={`px-3 py-2 rounded-lg text-sm border border-border bg-surface hover:border-ring transition ${th ? "lang-th" : ""}`}
              >
                ↺ {uiText.reset[lang]}
              </button>
            </div>
            <button
              onClick={() => go(1)}
              className={`px-4 py-2 rounded-lg text-sm text-muted hover:text-foreground transition ${th ? "lang-th" : ""}`}
            >
              {uiText.next[lang]} →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function CardFace({
  face,
  badge,
  badgeClass,
  text,
  arabic,
  th,
  learned,
  hint,
}: {
  face: "front" | "back";
  badge: string;
  badgeClass: string;
  text: string;
  arabic?: string;
  th: boolean;
  learned: boolean;
  hint?: string;
}) {
  return (
    <div
      className={`flip-face ${face === "back" ? "flip-back" : ""} absolute inset-0 rounded-3xl border border-border bg-surface shadow-sm p-6 sm:p-10 flex flex-col`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${badgeClass}`}
        >
          {badge}
        </span>
        {learned && (
          <span className="text-primary text-sm" title="Learned" aria-hidden>
            ✓
          </span>
        )}
      </div>
      <div className="flex-1 grid place-items-center py-4">
        <p
          className={`text-center text-2xl sm:text-3xl font-semibold leading-snug ${th ? "lang-th" : ""}`}
        >
          {text}
        </p>
      </div>
      {arabic ? (
        <p className="text-center text-sm text-muted italic">{arabic}</p>
      ) : (
        hint && <p className="text-center text-xs text-muted">{hint}</p>
      )}
    </div>
  );
}

function DoneCard({
  lang,
  onStudyAgain,
  onBack,
}: {
  lang: Lang;
  onStudyAgain: () => void;
  onBack: () => void;
}) {
  const th = lang === "th";
  return (
    <div className="rounded-3xl border border-border bg-surface p-10 text-center flex flex-col items-center gap-4">
      <div className="text-5xl">🎉</div>
      <p className={`text-xl font-semibold ${th ? "lang-th" : ""}`}>
        {uiText.deckDone[lang]}
      </p>
      <div className="flex gap-3 mt-2">
        <button
          onClick={onStudyAgain}
          className={`px-5 py-2.5 rounded-xl bg-primary text-primary-fg font-medium hover:opacity-90 transition ${th ? "lang-th" : ""}`}
        >
          {uiText.studyAgain[lang]}
        </button>
        <button
          onClick={onBack}
          className={`px-5 py-2.5 rounded-xl border border-border bg-surface font-medium hover:border-ring transition ${th ? "lang-th" : ""}`}
        >
          {uiText.back[lang]}
        </button>
      </div>
    </div>
  );
}
