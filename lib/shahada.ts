// The Shahada (declaration of faith) — for reading, with meaning in EN/Thai.
// This is standard, public-domain religious text.

import { type Lang } from "./decks";

export interface ShahadaLine {
  arabic: string;
  say: Record<Lang, string>; // pronunciation: en = romanized, th = Thai script
  meaning: Record<Lang, string>;
}

export const shahadaFull: ShahadaLine = {
  arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللّٰهِ",
  say: {
    en: "Ash-hadu an lā ilāha illallāh, wa ash-hadu anna Muḥammadan rasūlullāh",
    th: "อัชฮะดุอัน ลาอิลาฮะ อิลลัลลอฮ วะอัชฮะดุ อันนะ มุฮัมมะดัรฺ รอซูลุลลอฮ",
  },
  meaning: {
    en: "I bear witness that there is no god worthy of worship except Allah, and I bear witness that Muhammad is the Messenger of Allah.",
    th: "ข้าพเจ้าขอปฏิญาณว่าไม่มีพระเจ้าอื่นใดที่ควรเคารพสักการะนอกจากอัลลอฮ และข้าพเจ้าขอปฏิญาณว่านบีมุฮัมมัดเป็นศาสนทูตของพระองค์",
  },
};

export const shahadaParts: ShahadaLine[] = [
  {
    arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ",
    say: {
      en: "Ash-hadu an lā ilāha illallāh",
      th: "อัชฮะดุอัน ลาอิลาฮะ อิลลัลลอฮ",
    },
    meaning: {
      en: "I bear witness that there is no god worthy of worship except Allah.",
      th: "ข้าพเจ้าขอปฏิญาณว่าไม่มีพระเจ้าอื่นใดที่ควรเคารพสักการะนอกจากอัลลอฮ",
    },
  },
  {
    arabic: "وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللّٰهِ",
    say: {
      en: "wa ash-hadu anna Muḥammadan rasūlullāh",
      th: "วะอัชฮะดุ อันนะ มุฮัมมะดัรฺ รอซูลุลลอฮ",
    },
    meaning: {
      en: "And I bear witness that Muhammad is the Messenger of Allah.",
      th: "และข้าพเจ้าขอปฏิญาณว่านบีมุฮัมมัดเป็นศาสนทูตของพระองค์",
    },
  },
];

export const shahadaText = {
  navShort: { en: "Shahada", th: "ชะฮาดะฮ" },
  title: { en: "The Shahada", th: "ชะฮาดะฮ" },
  subtitle: {
    en: "The declaration of faith — the first pillar and the doorway into Islam.",
    th: "คำปฏิญาณศรัทธา — หลักปฏิบัติข้อแรกและประตูสู่การเป็นมุสลิม",
  },
  sayIt: { en: "How to say it", th: "คำอ่าน" },
  meaning: { en: "Meaning", th: "ความหมาย" },
  firstTestimony: { en: "First testimony", th: "คำปฏิญาณที่หนึ่ง" },
  secondTestimony: { en: "Second testimony", th: "คำปฏิญาณที่สอง" },
  noteTitle: { en: "What it means", th: "ความหมายของมัน" },
  note: {
    en: "Saying the Shahada sincerely — believing it in the heart and understanding its meaning — is how a person enters Islam. It is a promise to worship Allah alone, and to follow what the Prophet Muhammad ﷺ taught.",
    th: "การกล่าวชะฮาดะฮด้วยความจริงใจ เชื่อมั่นในหัวใจและเข้าใจความหมาย คือการเข้าสู่การเป็นมุสลิม เป็นการทำสัญญาว่าจะเคารพภักดีอัลลอฮเพียงองค์เดียว และปฏิบัติตามสิ่งที่ท่านนบีมุฮัมมัดนำมาสอน",
  },
} as const;
