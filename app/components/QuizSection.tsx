"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { type Lang } from "@/lib/decks";
import { quiz, quizText, quizTopics, type QuizQuestion } from "@/lib/quiz";

const BEST_KEY = "islam-quiz-best";
type BestMap = Record<string, { pct: number; score: number; total: number }>;

interface SessionQ {
  id: string;
  question: Record<Lang, string>;
  options: Record<Lang, string[]>;
  correct: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSession(topicId: string): SessionQ[] {
  const pool = topicId === "all" ? quiz : quiz.filter((q) => q.topic === topicId);
  return shuffle(pool).map((q: QuizQuestion) => {
    // Permute the 5 options, applying the same order to both languages.
    const perm = shuffle([0, 1, 2, 3, 4]);
    const en = perm.map((i) => q.options.en[i]);
    const th = perm.map((i) => q.options.th[i]);
    const correct = perm.indexOf(q.correct);
    return { id: q.id, question: q.question, options: { en, th }, correct };
  });
}

export default function QuizSection({ lang }: { lang: Lang }) {
  const [best, setBest] = useState<BestMap>({});
  const [topicId, setTopicId] = useState<string | null>(null);
  const [session, setSession] = useState<SessionQ[]>([]);
  const [pos, setPos] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(BEST_KEY);
      if (raw) setBest(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const topics = useMemo(() => quizTopics(), []);
  const th = lang === "th";

  const start = useCallback((id: string) => {
    setTopicId(id);
    setSession(buildSession(id));
    setPos(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }, []);

  const choose = (i: number) => {
    if (selected !== null) return; // lock after answering
    setSelected(i);
    if (i === session[pos].correct) setScore((s) => s + 1);
  };

  const nextQ = () => {
    if (pos + 1 >= session.length) {
      finish();
    } else {
      setPos((p) => p + 1);
      setSelected(null);
    }
  };

  const finish = () => {
    setFinished(true);
    if (!topicId) return;
    const total = session.length;
    const pct = total ? Math.round((score / total) * 100) : 0;
    setBest((prev) => {
      const cur = prev[topicId];
      if (cur && cur.pct >= pct) return prev;
      const next = { ...prev, [topicId]: { pct, score, total } };
      try {
        localStorage.setItem(BEST_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const backToTopics = () => {
    setTopicId(null);
    setSession([]);
    setFinished(false);
  };

  // ── Topic picker ───────────────────────────────────────
  if (!topicId) {
    return (
      <div>
        <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-6 ${th ? "lang-th" : ""}`}>
          {quizText.chooseQuizTopic[lang]}
        </h2>

        <button
          onClick={() => start("all")}
          className="w-full text-left rounded-2xl border border-primary/40 bg-primary/5 p-5 mb-4 hover:border-ring transition flex items-center gap-4"
        >
          <span className="text-3xl" aria-hidden>🎯</span>
          <div className="flex-1">
            <h3 className={`font-semibold text-lg ${th ? "lang-th" : ""}`}>
              {quizText.allTopics[lang]}
            </h3>
            <p className="text-sm text-muted">
              {quiz.length} {quizText.questions[lang]}
              <BestBadge best={best["all"]} lang={lang} />
            </p>
          </div>
          <span className="text-muted" aria-hidden>→</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => start(topic.id)}
              className="text-left rounded-2xl border border-border bg-surface p-5 hover:border-ring hover:shadow-lg hover:shadow-primary/5 transition flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl" aria-hidden>{topic.icon}</span>
                <span className="text-xs text-muted whitespace-nowrap">
                  {topic.count} {quizText.questions[lang]}
                </span>
              </div>
              <h3 className={`font-semibold text-lg leading-snug ${th ? "lang-th" : ""}`}>
                {topic.title[lang]}
              </h3>
              <p className="text-xs text-muted -mt-1">
                <BestBadge best={best[topic.id]} lang={lang} standalone />
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Result screen ──────────────────────────────────────
  if (finished) {
    const total = session.length;
    const pct = total ? Math.round((score / total) * 100) : 0;
    const msg =
      pct === 100 ? quizText.perfect[lang] : pct >= 60 ? quizText.great[lang] : quizText.keepGoing[lang];
    return (
      <div className="rounded-3xl border border-border bg-surface p-10 text-center flex flex-col items-center gap-4 max-w-xl mx-auto">
        <div className="text-5xl">{pct === 100 ? "🏆" : pct >= 60 ? "🌟" : "📚"}</div>
        <p className={`text-sm text-muted ${th ? "lang-th" : ""}`}>{quizText.yourScore[lang]}</p>
        <p className="text-5xl font-bold text-primary">
          {score}
          <span className="text-2xl text-muted">/{total}</span>
        </p>
        <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden max-w-xs">
          <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
        </div>
        <p className={`text-lg font-medium ${th ? "lang-th" : ""}`}>{msg}</p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <button
            onClick={() => start(topicId)}
            className={`px-5 py-2.5 rounded-xl bg-primary text-primary-fg font-medium hover:opacity-90 transition ${th ? "lang-th" : ""}`}
          >
            🔁 {quizText.tryAgain[lang]}
          </button>
          <button
            onClick={backToTopics}
            className={`px-5 py-2.5 rounded-xl border border-border bg-surface font-medium hover:border-ring transition ${th ? "lang-th" : ""}`}
          >
            {quizText.backToTopics[lang]}
          </button>
        </div>
      </div>
    );
  }

  // ── Question screen ────────────────────────────────────
  const q = session[pos];
  const answered = selected !== null;
  const total = session.length;

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between text-sm">
        <button
          onClick={backToTopics}
          className={`inline-flex items-center gap-1.5 font-medium text-muted hover:text-foreground transition -ml-1 ${th ? "lang-th" : ""}`}
        >
          <span aria-hidden>←</span> {quizText.backToTopics[lang]}
        </button>
        <span className="text-muted">
          {quizText.score[lang]}: <span className="font-semibold text-foreground">{score}</span>
        </span>
      </div>

      <div>
        <div className="flex justify-between text-xs text-muted mb-1.5">
          <span className={th ? "lang-th" : ""}>
            {quizText.question[lang]} {pos + 1} / {total}
          </span>
        </div>
        <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${((pos + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <p className={`text-xl sm:text-2xl font-semibold leading-snug ${th ? "lang-th" : ""}`}>
          {q.question[lang]}
        </p>
      </div>

      <div className="grid gap-3">
        {q.options[lang].map((opt, i) => {
          const isCorrect = i === q.correct;
          const isChosen = i === selected;
          let cls =
            "border-border bg-surface hover:border-ring";
          if (answered) {
            if (isCorrect) cls = "border-primary bg-primary/10 text-primary";
            else if (isChosen) cls = "border-red-400 bg-red-500/10 text-red-600 dark:text-red-400";
            else cls = "border-border bg-surface opacity-55";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={answered}
              className={`text-left rounded-xl border px-4 py-3.5 font-medium transition flex items-center gap-3 ${cls} ${th ? "lang-th" : ""}`}
            >
              <span
                className={`grid place-items-center w-7 h-7 rounded-lg text-sm shrink-0 ${
                  answered && isCorrect
                    ? "bg-primary text-primary-fg"
                    : answered && isChosen
                      ? "bg-red-500 text-white"
                      : "bg-surface-2 text-muted"
                }`}
                aria-hidden
              >
                {answered && isCorrect ? "✓" : answered && isChosen ? "✗" : String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p
            className={`font-semibold ${
              selected === q.correct ? "text-primary" : "text-red-600 dark:text-red-400"
            } ${th ? "lang-th" : ""}`}
          >
            {selected === q.correct ? `✓ ${quizText.correct[lang]}` : `✗ ${quizText.wrong[lang]}`}
          </p>
          <button
            onClick={nextQ}
            className={`px-5 py-2.5 rounded-xl bg-primary text-primary-fg font-medium hover:opacity-90 transition ml-auto ${th ? "lang-th" : ""}`}
          >
            {pos + 1 >= total ? quizText.seeResult[lang] : quizText.nextQ[lang]} →
          </button>
        </div>
      )}
    </div>
  );
}

function BestBadge({
  best,
  lang,
  standalone,
}: {
  best?: { pct: number; score: number; total: number };
  lang: Lang;
  standalone?: boolean;
}) {
  if (!best) return standalone ? <span className="text-muted">&nbsp;</span> : null;
  return (
    <span className={standalone ? "" : "ml-2"}>
      <span className="inline-flex items-center gap-1 text-accent font-medium">
        ⭐ {quizText.best[lang]} {best.score}/{best.total}
      </span>
    </span>
  );
}
