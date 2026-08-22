# Content Accuracy & Verification

Islamic content is sensitive, and mistakes are not acceptable. This document explains
**how the content in this app was verified**, what was checked, what we found, and the
limits of that verification. It exists so that anyone using or reviewing this project can
understand exactly how much scrutiny the content has received.

## Sources

All content is distilled from two documents provided by the project owner:

1. **The study booklet** — _"เอกสารประกอบการเรียนการสอนสำหรับผู้สนใจอิสลาม"_ by
   **มูลนิธิสันติชน (Santichon Foundation)** — the primary source for facts, structure, and
   the Thai wording/pronunciations.
2. **A 100-question study exam** (mock + past exams, 4 sections: Aqidah, Fiqh, Seerah,
   Akhlaq), used as an independent cross-check.

The Arabic recitations (the Quran and the standard prayer formulas) are **public-domain
religious text**. The flashcards and quiz questions are written as original bilingual Q&A
based on the facts in the sources above.

## What was verified

A full, line-by-line audit was performed across every content file:

| Area | Scope checked | Result |
|------|---------------|--------|
| **Recitations** (`lib/solat.ts`) | Arabic script, transliteration & meaning for: Shahada, Al-Fatihah (7 verses), the opening dua, Surah Al-Kāfirūn & Al-Ikhlāṣ, and the dhikr of takbir / ruku' / i'tidal / sujud / sitting / tashahhud / salam | ✅ Correct |
| **Shahada** (`lib/shahada.ts`) | Arabic, pronunciation, meaning (EN/TH) | ✅ Correct |
| **Flashcards** (`lib/decks.ts`) | Every card across 18 decks — foundations, 6 articles of faith, 5 pillars, salah, purification, fasting, zakat, hajj, virtues, ethics, daily life, prophets & phrases, creed, seerah, prophets' stories, adab, marriage/family, funeral rites | ✅ Correct |
| **Quiz** (`lib/quiz.ts`) | All 163 questions — each **correct answer** was extracted and checked individually | ✅ No wrong answers |

Facts were confirmed to be consistent **both** with the Santichon booklet **and** with the
independent 100-question exam (they agreed on every overlapping point): the 6 articles and
5 pillars, the rak'ah counts (Fajr 2 · Zuhr 4 · Asr 4 · Maghrib 3 · Isha 4 = 17), wudu /
ghusl / tayammum, zakat (2.5%, nisab, the 8 categories), the Hajj rites, the prophets'
stories, key Seerah events (Badr, Fath Makkah, the Prophet ﷺ passing at 63, Abu Bakr as
first caliph), the Isra' & Mi'raj, marriage & divorce rulings, the funeral (janazah) rites,
and the awrah rules.

## What was corrected

- **The "Mu'min" flashcard** originally described a believing man with the plural form
  _"Muslimin"_. It was corrected to the proper singular pair: **Mu'min** (believing man) /
  **Mu'minah** (believing woman).

## Notes kept as-is (matching the source)

These follow the project's source material and common teaching, and were deliberately kept:

- **The recording angels are named "Raqib & Atid."** This is how the booklet presents them
  and is a widely used teaching. (Scholarly note: رقيب وعتيد in Qur'an 50:18 can be read as
  descriptions — "an observer, ever-ready" — rather than proper names.)
- **"The 13 positions of prayer"** — the heading says 13 while the concise list shows the
  main ones; this mirrors the booklet, and the card is labelled "in short."

## Our limitation (please read)

This verification checked the content against the **two provided source documents** and
against **standard, widely-agreed teachings**. It is thorough, but it is **not** a
substitute for religious authority.

> **Before relying on this app for teaching, a final review by a qualified person — an
> imam or a qualified Islamic teacher — is strongly recommended.** That human review is the
> responsible last step for religious content.

## How to report an issue

If you spot anything that seems inaccurate, please open an issue on the repository. Because
this is educational Islamic content for new Muslims, corrections are treated as a priority.

---

_Content is provided for the purpose of Islamic education for new Muslims only. Free._
