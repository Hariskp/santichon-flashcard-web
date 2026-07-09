"use client";

import { useEffect, useState } from "react";
import { type Lang } from "@/lib/decks";
import Header, { type Mode, type Theme } from "./Header";
import FlashcardsSection from "./FlashcardsSection";
import QuizSection from "./QuizSection";

const LANG_KEY = "islam-fc-lang";
const THEME_KEY = "islam-fc-theme";
const MODE_KEY = "islam-fc-mode";

export default function AppShell() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("system");
  const [mode, setMode] = useState<Mode>("cards");

  useEffect(() => {
    setMounted(true);
    try {
      const l = localStorage.getItem(LANG_KEY);
      if (l === "en" || l === "th") setLang(l);
      const t = localStorage.getItem(THEME_KEY) as Theme | null;
      if (t === "light" || t === "dark" || t === "system") setTheme(t);
      const m = localStorage.getItem(MODE_KEY) as Mode | null;
      if (m === "cards" || m === "quiz") setMode(m);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem(LANG_KEY, lang);
  }, [lang, mounted]);

  useEffect(() => {
    if (mounted) localStorage.setItem(MODE_KEY, mode);
  }, [mode, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(THEME_KEY, theme);
    const root = document.documentElement;
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  return (
    <div className="flex-1 flex flex-col">
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        mounted={mounted}
        mode={mode}
        setMode={setMode}
      />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {mode === "cards" ? (
          <FlashcardsSection lang={lang} />
        ) : (
          <QuizSection lang={lang} />
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
