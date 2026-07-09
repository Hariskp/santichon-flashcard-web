# Learn Islam — Flashcards for New Muslims

A bilingual (English + Thai) flashcard web app to help new Muslims learn the basics of Islam.
Content is distilled from the study booklet *"เอกสารประกอบการเรียนการสอนสำหรับผู้สนใจอิสลาม"*
by **มูลนิธิสันติชน (Santichon Foundation)**.

## Features

Two study modes, switchable from the header:

**🗂️ Flashcards**
- **12 themed decks** — Foundations, 6 Articles of Faith, 5 Pillars, Prayer (Salah),
  Purification, Fasting, Zakat, Hajj, Core Virtues, Ethics & Manners, Daily Life
  (dress/food/family), and Prophets & Key Phrases.
- **Flip cards** — tap (or press Space/Enter) to reveal the answer.
- **Progress tracking** — mark cards "Got it" / "Review again"; saved per deck.
- **Shuffle & reset**, keyboard navigation (← →).

**✅ Quiz**
- **43 multiple-choice questions** (5 options each) across the same 12 topics.
- Pick one topic or **All topics mixed**; options are shuffled each attempt.
- **Instant right/wrong feedback**, live score, and **best score saved per topic**.

**🕌 Salah (How to Pray)**
- A friendly, step-by-step visual guide to one rak'ah — with **cute hand-drawn SVG
  characters** for each position (standing, takbir, ruku', sujud, sitting, tashahhud, salam).
- Each step shows the position name, Arabic term, instruction, and **what to recite**
  (transliteration + meaning). Navigate with step dots or Back/Next.

Shared across both modes:
- **English ⇄ Thai toggle** — everything is bilingual; Arabic transliterations where useful.
- **Light / dark / system theme**; all preferences saved in the browser (`localStorage`).
- Fully **static** — no backend required.

## Tech stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4
- Fonts: Geist + Noto Sans Thai (self-hosted via `next/font`)

## Development

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm start       # serve the production build
```

## Editing content

All flashcard content lives in [`lib/decks.ts`](lib/decks.ts). Each card has
`front`, `back` (both `{ en, th }`), and an optional `arabic` transliteration.
Add or edit cards there — no other changes needed.

## Deploying

Push to GitHub and import into [Vercel](https://vercel.com), or run `vercel`.
The app is static, so any static host works too.
