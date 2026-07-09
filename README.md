# Learn Islam — Flashcards for New Muslims

A bilingual (English + Thai) flashcard web app to help new Muslims learn the basics of Islam.
Content is distilled from the study booklet *"เอกสารประกอบการเรียนการสอนสำหรับผู้สนใจอิสลาม"*
by **มูลนิธิสันติชน (Santichon Foundation)**.

## Features

- **12 themed decks** — Foundations, 6 Articles of Faith, 5 Pillars, Prayer (Salah),
  Purification, Fasting, Zakat, Hajj, Core Virtues, Ethics & Manners, Daily Life
  (dress/food/family), and Prophets & Key Phrases.
- **English ⇄ Thai toggle** — every card is bilingual; Arabic transliterations shown where useful.
- **Flip cards** — tap (or press Space/Enter) to reveal the answer.
- **Progress tracking** — mark cards "Got it" / "Review again"; progress is saved in the
  browser (`localStorage`), per deck.
- **Shuffle & reset**, keyboard navigation (← →), light/dark/system theme.
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
