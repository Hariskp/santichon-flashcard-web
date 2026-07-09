// Step-by-step guide to performing Salah (one rak'ah cycle + ending).
// Poses map to cute SVG figures in PrayerFigure.tsx.

import { type Lang } from "./decks";

export type Pose =
  | "stand"
  | "takbir"
  | "qiyam"
  | "ruku"
  | "sujud"
  | "sit"
  | "tashahhud"
  | "salam";

export interface SolatStep {
  id: string;
  pose: Pose;
  name: Record<Lang, string>;
  term?: string; // Arabic term (transliteration)
  instruction: Record<Lang, string>;
  say?: { arabic: string; meaning: Record<Lang, string> }; // what to recite
}

export const solatSteps: SolatStep[] = [
  {
    id: "st1",
    pose: "stand",
    name: { en: "Intention & Standing", th: "ตั้งเจตนา และยืนตรง" },
    term: "Niyyah · Qiyam",
    instruction: {
      en: "Stand up straight facing the qibla, and make the intention in your heart to pray.",
      th: "ยืนตรงหันหน้าไปทางกิบลัต และตั้งเจตนาในใจว่าจะละหมาด",
    },
  },
  {
    id: "st2",
    pose: "takbir",
    name: { en: "Opening Takbir", th: "ตักบีเราะตุลอิฮฺรอม" },
    term: "Takbiratul-Ihram",
    instruction: {
      en: "Raise both hands up to your ears and say:",
      th: "ยกมือทั้งสองข้างขึ้นระดับใบหู แล้วกล่าวว่า:",
    },
    say: {
      arabic: "Allāhu Akbar",
      meaning: { en: "Allah is the Greatest", th: "อัลลอฮผู้ทรงยิ่งใหญ่" },
    },
  },
  {
    id: "st3",
    pose: "qiyam",
    name: { en: "Recite Al-Fatihah", th: "อ่านซูเราะฮอัลฟาติฮะฮ" },
    term: "Qiyam",
    instruction: {
      en: "Place your right hand over your left on your chest and recite Surah Al-Fatihah.",
      th: "วางมือขวาทับมือซ้ายไว้บนหน้าอก แล้วอ่านซูเราะฮอัลฟาติฮะฮ",
    },
  },
  {
    id: "st4",
    pose: "ruku",
    name: { en: "Ruku' (Bowing)", th: "รุกู้อ (การก้ม)" },
    term: "Ruku'",
    instruction: {
      en: "Bow with a straight back, hands on your knees, and say 3 times:",
      th: "ก้มลงให้หลังตรง วางมือบนหัวเข่า แล้วกล่าว 3 ครั้ง:",
    },
    say: {
      arabic: "Subḥāna Rabbiyal-'Adhīm",
      meaning: {
        en: "Glory to my Lord, the Most Great",
        th: "มหาบริสุทธิ์แด่พระผู้อภิบาลของฉัน ผู้ทรงยิ่งใหญ่",
      },
    },
  },
  {
    id: "st5",
    pose: "stand",
    name: { en: "I'tidal (Rise up)", th: "เอี๊ยะติดาล (ลุกขึ้นยืน)" },
    term: "I'tidal",
    instruction: {
      en: "Rise back to standing upright and say:",
      th: "ลุกขึ้นยืนตรงอีกครั้ง แล้วกล่าว:",
    },
    say: {
      arabic: "Sami'Allāhu liman ḥamidah",
      meaning: {
        en: "Allah hears the one who praises Him",
        th: "อัลลอฮทรงได้ยินผู้ที่สรรเสริญพระองค์",
      },
    },
  },
  {
    id: "st6",
    pose: "sujud",
    name: { en: "Sujud (Prostration)", th: "สุญูด (การกราบ)" },
    term: "Sujud",
    instruction: {
      en: "Prostrate with your forehead, nose, palms, knees and toes touching the ground. Say 3 times:",
      th: "กราบลงให้หน้าผาก จมูก ฝ่ามือ เข่า และปลายเท้าแตะพื้น กล่าว 3 ครั้ง:",
    },
    say: {
      arabic: "Subḥāna Rabbiyal-A'lā",
      meaning: {
        en: "Glory to my Lord, the Most High",
        th: "มหาบริสุทธิ์แด่พระผู้อภิบาลของฉัน ผู้ทรงสูงส่ง",
      },
    },
  },
  {
    id: "st7",
    pose: "sit",
    name: { en: "Sitting between prostrations", th: "นั่งระหว่างสองสุญูด" },
    term: "Julus",
    instruction: {
      en: "Sit up calmly on your left foot and say:",
      th: "นั่งขึ้นอย่างสงบบนเท้าซ้าย แล้วกล่าว:",
    },
    say: {
      arabic: "Rabbighfir lī",
      meaning: { en: "My Lord, forgive me", th: "โอ้พระผู้อภิบาล ขอทรงอภัยแก่ฉัน" },
    },
  },
  {
    id: "st8",
    pose: "sujud",
    name: { en: "Second Prostration", th: "สุญูดครั้งที่สอง" },
    term: "Sujud",
    instruction: {
      en: "Prostrate a second time, just like before. This completes one rak'ah (unit).",
      th: "กราบเป็นครั้งที่สองเหมือนเดิม เมื่อครบถือว่าจบ 1 ร็อกอัต",
    },
    say: {
      arabic: "Subḥāna Rabbiyal-A'lā",
      meaning: {
        en: "Glory to my Lord, the Most High",
        th: "มหาบริสุทธิ์แด่พระผู้อภิบาลของฉัน ผู้ทรงสูงส่ง",
      },
    },
  },
  {
    id: "st9",
    pose: "tashahhud",
    name: { en: "Tashahhud", th: "ตะชะฮฮุด" },
    term: "Tashahhud",
    instruction: {
      en: "In the final sitting, raise your right index finger and recite the tashahhud and blessings on the Prophet ﷺ.",
      th: "ในการนั่งครั้งสุดท้าย ชี้นิ้วชี้ขวา แล้วอ่านตะชะฮฮุดและเศาะละวาตแก่ท่านนบี",
    },
  },
  {
    id: "st10",
    pose: "salam",
    name: { en: "Salam (Ending)", th: "การให้สลาม (จบละหมาด)" },
    term: "Taslim",
    instruction: {
      en: "Turn your head to the right, then to the left, giving salam to end the prayer:",
      th: "ผินหน้าไปทางขวา แล้วทางซ้าย พร้อมให้สลามเพื่อจบละหมาด:",
    },
    say: {
      arabic: "Assalāmu 'alaikum wa raḥmatullāh",
      meaning: {
        en: "Peace and mercy of Allah be upon you",
        th: "ขอความสันติและความเมตตาของอัลลอฮจงมีแด่ท่าน",
      },
    },
  },
];

export const solatText = {
  navShort: { en: "Salah", th: "ละหมาด" },
  title: { en: "How to Pray, step by step", th: "วิธีละหมาด ทีละขั้นตอน" },
  intro: {
    en: "Follow these steps for one rak'ah (unit of prayer). Each daily prayer repeats this cycle 2–4 times. 🕌",
    th: "ทำตามขั้นตอนเหล่านี้สำหรับ 1 ร็อกอัต (1 รอบของการละหมาด) แต่ละเวลาจะทำซ้ำ 2–4 รอบ 🕌",
  },
  step: { en: "Step", th: "ขั้นที่" },
  say: { en: "Say", th: "กล่าวว่า" },
  prev: { en: "Back", th: "ย้อนกลับ" },
  next: { en: "Next", th: "ถัดไป" },
  restart: { en: "Start over", th: "เริ่มใหม่" },
  done: { en: "Masha'Allah! You've learned one full rak'ah 🎉", th: "มาชาอัลลอฮ! คุณได้เรียนครบ 1 ร็อกอัตแล้ว 🎉" },
} as const;
