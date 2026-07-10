// Multiple-choice quiz bank (5 options each), bilingual EN/Thai.
// Grouped by the same topic ids as the flashcard decks in decks.ts.

import { decks, type Lang } from "./decks";

export interface QuizQuestion {
  id: string;
  topic: string; // matches a deck id
  question: Record<Lang, string>;
  options: Record<Lang, string[]>; // exactly 5
  correct: number; // index 0–4
}

export const quiz: QuizQuestion[] = [
  // Foundations
  {
    id: "q_f1",
    topic: "foundations",
    question: { en: "What does the word “Islam” mean?", th: "คำว่า “อิสลาม” หมายถึงอะไร?" },
    options: {
      en: ["Submission to attain peace", "Holy war", "Knowledge", "Charity", "Pilgrimage"],
      th: ["การยอมจำนนเพื่อบรรลุความสันติสุข", "สงครามศักดิ์สิทธิ์", "ความรู้", "การบริจาค", "การไปแสวงบุญ"],
    },
    correct: 0,
  },
  {
    id: "q_f2",
    topic: "foundations",
    question: { en: "Who is the final Messenger of Allah?", th: "ศาสนทูตคนสุดท้ายของอัลลอฮคือใคร?" },
    options: {
      en: ["Prophet Muhammad ﷺ", "Prophet Adam", "Prophet Ibrahim", "Prophet Musa", "Prophet Isa"],
      th: ["นบีมุฮัมมัด (ซ.ล.)", "นบีอาดัม", "นบีอิบรอฮีม", "นบีมูซา", "นบีอีซา"],
    },
    correct: 0,
  },
  {
    id: "q_f3",
    topic: "foundations",
    question: { en: "How many chapters (surah) are in the Quran?", th: "คัมภีร์กุรอานมีกี่บท (ซูเราะฮ)?" },
    options: {
      en: ["114", "30", "99", "124", "6,236"],
      th: ["114", "30", "99", "124", "6,236"],
    },
    correct: 0,
  },
  {
    id: "q_f4",
    topic: "foundations",
    question: { en: "Who was the first human being?", th: "มนุษย์คนแรกของโลกคือใคร?" },
    options: {
      en: ["Prophet Adam", "Prophet Nuh", "Prophet Ibrahim", "Prophet Muhammad ﷺ", "Prophet Musa"],
      th: ["นบีอาดัม", "นบีนูฮ", "นบีอิบรอฮีม", "นบีมุฮัมมัด (ซ.ล.)", "นบีมูซา"],
    },
    correct: 0,
  },
  {
    id: "q_f5",
    topic: "foundations",
    question: {
      en: "How do you reply to “Assalamu alaikum”?",
      th: "ตอบรับคำทักทาย “อัสสะลามุอะลัยกุม” ว่าอย่างไร?",
    },
    options: {
      en: ["Wa alaikumus-salam", "Alhamdulillah", "Bismillah", "InshaAllah", "Ameen"],
      th: ["วะอะลัยกุมุสสลาม", "อัลฮัมดุลิลลาฮ", "บิสมิลลาฮ", "อินชาอัลลอฮ", "อามีน"],
    },
    correct: 0,
  },

  // 6 Articles of Faith
  {
    id: "q_i1",
    topic: "iman",
    question: { en: "How many Articles of Faith (Iman) are there?", th: "หลักศรัทธา (อีมาน) มีกี่ประการ?" },
    options: { en: ["6", "5", "3", "7", "10"], th: ["6", "5", "3", "7", "10"] },
    correct: 0,
  },
  {
    id: "q_i2",
    topic: "iman",
    question: {
      en: "Which of these is NOT one of the 6 Articles of Faith?",
      th: "ข้อใดไม่ใช่หลักศรัทธา 6 ประการ?",
    },
    options: {
      en: [
        "Belief in performing Hajj",
        "Belief in Allah",
        "Belief in the Angels",
        "Belief in the Prophets",
        "Belief in the Last Day",
      ],
      th: [
        "ศรัทธาในการทำฮัจญ์",
        "ศรัทธาในอัลลอฮ",
        "ศรัทธาในบรรดามลาอิกะฮ",
        "ศรัทธาในบรรดานบี",
        "ศรัทธาในวันสิ้นโลก",
      ],
    },
    correct: 0,
  },
  {
    id: "q_i3",
    topic: "iman",
    question: {
      en: "Believing that people will be raised and judged after death is belief in…",
      th: "การเชื่อว่ามนุษย์จะฟื้นคืนชีพและถูกพิพากษาหลังความตาย คือศรัทธาใน…",
    },
    options: {
      en: ["The Last Day", "The Angels", "The Books", "Divine Decree", "The Prophets"],
      th: ["วันฟื้นคืนชีพ", "มลาอิกะฮ", "คัมภีร์", "กฎกำหนดสภาวะ", "บรรดานบี"],
    },
    correct: 0,
  },

  // 5 Pillars
  {
    id: "q_p1",
    topic: "pillars",
    question: { en: "How many Pillars of Islam are there?", th: "หลักปฏิบัติของอิสลามมีกี่ประการ?" },
    options: { en: ["5", "6", "3", "4", "7"], th: ["5", "6", "3", "4", "7"] },
    correct: 0,
  },
  {
    id: "q_p2",
    topic: "pillars",
    question: { en: "Which of these is one of the 5 Pillars?", th: "ข้อใดคือหนึ่งในหลักปฏิบัติ 5 ประการ?" },
    options: {
      en: ["Hajj (pilgrimage)", "Adhan (call to prayer)", "Wudu (ablution)", "Tarawih prayer", "Isra' & Mi'raj"],
      th: ["ฮัจญ์ (การแสวงบุญ)", "อะซาน (การเรียกละหมาด)", "วุฎู (อาบน้ำละหมาด)", "นมาซตะรอเวียะฮ", "อิสรออ์ เมี๊ยะอุรอจญ์"],
    },
    correct: 0,
  },
  {
    id: "q_p3",
    topic: "pillars",
    question: { en: "Which pillar is the fast of Ramadan?", th: "หลักปฏิบัติข้อใดคือการถือศีลอดเดือนเราะมะฎอน?" },
    options: {
      en: ["Sawm", "Salah", "Zakat", "Hajj", "Shahada"],
      th: ["ศิยาม (ถือศีลอด)", "นมาซ", "ซะกาต", "ฮัจญ์", "ชะฮาดะฮ"],
    },
    correct: 0,
  },

  // Salah
  {
    id: "q_s1",
    topic: "salah",
    question: { en: "How many obligatory prayers are there each day?", th: "นมาซภาคบังคับมีกี่เวลาต่อวัน?" },
    options: { en: ["5", "3", "7", "2", "10"], th: ["5", "3", "7", "2", "10"] },
    correct: 0,
  },
  {
    id: "q_s2",
    topic: "salah",
    question: { en: "How many rak'ah is the Maghrib prayer?", th: "นมาซมัฆริบมีกี่ร็อกอัต?" },
    options: { en: ["3", "2", "4", "5", "1"], th: ["3", "2", "4", "5", "1"] },
    correct: 0,
  },
  {
    id: "q_s3",
    topic: "salah",
    question: { en: "How many obligatory rak'ah in total each day?", th: "รวมนมาซภาคบังคับทั้งวันมีกี่ร็อกอัต?" },
    options: { en: ["17", "5", "10", "13", "20"], th: ["17", "5", "10", "13", "20"] },
    correct: 0,
  },
  {
    id: "q_s4",
    topic: "salah",
    question: { en: "Which prayer is performed at dawn?", th: "นมาซเวลาใดที่ทำตอนรุ่งอรุณ?" },
    options: {
      en: ["Fajr", "Zuhr", "Asr", "Maghrib", "Isha"],
      th: ["ซุบฮิ (ฟัจร)", "ซุฮริ", "อัศริ", "มัฆริบ", "อิชาอุ"],
    },
    correct: 0,
  },
  {
    id: "q_s5",
    topic: "salah",
    question: {
      en: "Praying in congregation multiplies the reward by how much?",
      th: "การนมาซรวม (ญะมาอะฮ) ได้ผลบุญมากกว่ากี่เท่า?",
    },
    options: { en: ["27 times", "10 times", "5 times", "70 times", "100 times"], th: ["27 เท่า", "10 เท่า", "5 เท่า", "70 เท่า", "100 เท่า"] },
    correct: 0,
  },

  // Purification
  {
    id: "q_pu1",
    topic: "purification",
    question: { en: "Dry ablution (used when there is no water) is called…", th: "การอาบน้ำละหมาดด้วยฝุ่นดินเมื่อไม่มีน้ำ เรียกว่า…" },
    options: {
      en: ["Tayammum", "Wudu", "Ghusl", "Najis", "Adhan"],
      th: ["ตะยัมมุม", "วุฎู", "ฆุสล", "นะญิส", "อะซาน"],
    },
    correct: 0,
  },
  {
    id: "q_pu2",
    topic: "purification",
    question: { en: "Which of these breaks your wudu?", th: "สิ่งใดทำให้เสียน้ำละหมาด?" },
    options: {
      en: ["Passing gas", "Reading the Quran", "Smiling", "Walking", "Making dua"],
      th: ["การผายลม", "การอ่านกุรอาน", "การยิ้ม", "การเดิน", "การขอดุอาอ์"],
    },
    correct: 0,
  },
  {
    id: "q_pu3",
    topic: "purification",
    question: { en: "The full ritual bath is called…", th: "การอาบน้ำชำระฮะดัษใหญ่ทั้งตัว เรียกว่า…" },
    options: {
      en: ["Ghusl", "Wudu", "Tayammum", "Sa'i", "Sujud"],
      th: ["ฆุสล", "วุฎู", "ตะยัมมุม", "สะแอ", "สุญูด"],
    },
    correct: 0,
  },

  // Fasting
  {
    id: "q_fa1",
    topic: "fasting",
    question: { en: "Ramadan is which month of the Islamic calendar?", th: "เราะมะฎอนเป็นเดือนที่เท่าไรของปฏิทินอิสลาม?" },
    options: { en: ["9th", "1st", "12th", "7th", "10th"], th: ["ที่ 9", "ที่ 1", "ที่ 12", "ที่ 7", "ที่ 10"] },
    correct: 0,
  },
  {
    id: "q_fa2",
    topic: "fasting",
    question: { en: "The fast each day lasts from…", th: "การถือศีลอดในแต่ละวันคือช่วงเวลาใด?" },
    options: {
      en: ["Dawn to sunset", "Sunrise to noon", "Noon to night", "Midnight to dawn", "All day and night"],
      th: ["รุ่งอรุณถึงตะวันตกดิน", "ตะวันขึ้นถึงเที่ยง", "เที่ยงถึงกลางคืน", "เที่ยงคืนถึงรุ่งอรุณ", "ทั้งวันทั้งคืน"],
    },
    correct: 0,
  },
  {
    id: "q_fa3",
    topic: "fasting",
    question: { en: "It is recommended to break the fast with…", th: "แนะนำให้ละศีลอดด้วยสิ่งใด?" },
    options: {
      en: ["Dates and water", "Bread", "Coffee", "Meat", "Rice"],
      th: ["ผลอินทผลัมและน้ำ", "ขนมปัง", "กาแฟ", "เนื้อ", "ข้าว"],
    },
    correct: 0,
  },

  // Zakat
  {
    id: "q_z1",
    topic: "zakat",
    question: { en: "What is the zakat rate on money and gold?", th: "อัตราซะกาตของเงินและทองคำคือเท่าไร?" },
    options: { en: ["2.5%", "5%", "10%", "20%", "1%"], th: ["2.5%", "5%", "10%", "20%", "1%"] },
    correct: 0,
  },
  {
    id: "q_z2",
    topic: "zakat",
    question: { en: "The word “zakat” means…", th: "คำว่า “ซะกาต” หมายถึง…" },
    options: {
      en: ["Purification and growth", "Struggle", "Submission", "Fasting", "Ablution"],
      th: ["การขัดเกลาและความเจริญงอกงาม", "การต่อสู้", "การยอมจำนน", "การถือศีลอด", "การอาบน้ำละหมาด"],
    },
    correct: 0,
  },
  {
    id: "q_z3",
    topic: "zakat",
    question: { en: "Who may NOT receive your zakat?", th: "ใครที่ไม่มีสิทธิ์รับซะกาตของเรา?" },
    options: {
      en: ["Your own children/parents", "A poor stranger", "A traveler in need", "A new Muslim", "A person in debt"],
      th: ["ลูกและพ่อแม่ของตัวเอง", "คนแปลกหน้าที่ยากจน", "ผู้เดินทางที่ขัดสน", "ผู้เข้ารับอิสลามใหม่", "ผู้มีหนี้สิน"],
    },
    correct: 0,
  },

  // Hajj
  {
    id: "q_h1",
    topic: "hajj",
    question: { en: "Hajj is performed in which month?", th: "ฮัจญ์ทำในเดือนใด?" },
    options: {
      en: ["Dhul-Hijjah", "Ramadan", "Shawwal", "Muharram", "Rajab"],
      th: ["ซุลฮิจญะฮ", "เราะมะฎอน", "เชาวาล", "มุฮัรรอม", "เราะญับ"],
    },
    correct: 0,
  },
  {
    id: "q_h2",
    topic: "hajj",
    question: { en: "How often must a Muslim perform Hajj (if able)?", th: "มุสลิมต้องทำฮัจญ์บ่อยแค่ไหน (ถ้ามีความสามารถ)?" },
    options: {
      en: ["Once in a lifetime", "Every year", "Every month", "Twice", "Never"],
      th: ["ครั้งหนึ่งในชีวิต", "ทุกปี", "ทุกเดือน", "สองครั้ง", "ไม่ต้องเลย"],
    },
    correct: 0,
  },
  {
    id: "q_h3",
    topic: "hajj",
    question: { en: "The cube-shaped House of Allah is called the…", th: "บ้านของอัลลอฮทรงลูกบาศก์เรียกว่า…" },
    options: {
      en: ["Ka'bah", "Masjid al-Aqsa", "Mount Arafah", "Safa", "Mina"],
      th: ["กะอบะฮ", "มัสยิดอัลอักซอ", "ภูเขาอารอฟะฮ", "เศาะฟา", "มินา"],
    },
    correct: 0,
  },
  {
    id: "q_h4",
    topic: "hajj",
    question: { en: "Circling the Ka'bah is called…", th: "การเวียนรอบกะอบะฮเรียกว่า…" },
    options: {
      en: ["Tawaf", "Sa'i", "Wuquf", "Ihram", "Tahallul"],
      th: ["เฏาะวาฟ", "สะแอ", "วุกูฟ", "เอี๊ยะฮรอม", "ตะฮัลลุล"],
    },
    correct: 0,
  },

  // Virtues
  {
    id: "q_v1",
    topic: "virtues",
    question: { en: "Which virtue means “God-consciousness / mindfulness of Allah”?", th: "คุณธรรมใดหมายถึง “ความยำเกรงและระลึกถึงอัลลอฮ”?" },
    options: {
      en: ["Taqwa", "Ikhlas", "Sabr", "Shukr", "Tawakkul"],
      th: ["ตักวา", "อิคลาศ", "ซ็อบรุ", "ชุกูร", "ตะวักกุล"],
    },
    correct: 0,
  },
  {
    id: "q_v2",
    topic: "virtues",
    question: { en: "Doing deeds purely for Allah (sincerity) is called…", th: "การทำความดีเพื่ออัลลอฮเพียงผู้เดียว (ความบริสุทธิ์ใจ) เรียกว่า…" },
    options: {
      en: ["Ikhlas", "Taqwa", "Sabr", "Tawakkul", "Shukr"],
      th: ["อิคลาศ", "ตักวา", "ซ็อบรุ", "ตะวักกุล", "ชุกูร"],
    },
    correct: 0,
  },
  {
    id: "q_v3",
    topic: "virtues",
    question: { en: "“Whoever does not thank people does not thank Allah” describes which virtue?", th: "“ผู้ที่ไม่ขอบคุณคนก็ไม่ขอบคุณอัลลอฮ” หมายถึงคุณธรรมใด?" },
    options: {
      en: ["Shukr (gratitude)", "Sabr (patience)", "Taqwa", "Tawakkul", "Ikhlas"],
      th: ["ชุกูร (ความกตัญญู)", "ซ็อบรุ (ความอดทน)", "ตักวา", "ตะวักกุล", "อิคลาศ"],
    },
    correct: 0,
  },

  // Ethics
  {
    id: "q_e1",
    topic: "ethics",
    question: { en: "A sense of shame/modesty that guards from wrong is called…", th: "ความละอายที่ปกป้องจากความชั่ว เรียกว่า…" },
    options: {
      en: ["Haya", "Riba", "Najis", "Qibla", "Sabr"],
      th: ["ฮะยาอ์", "ริบา", "นะญิส", "กิบลัต", "ซ็อบรุ"],
    },
    correct: 0,
  },
  {
    id: "q_e2",
    topic: "ethics",
    question: { en: "Which one is good Islamic character (akhlaq)?", th: "ข้อใดคือจริยธรรมอันดี (อัคลาก)?" },
    options: {
      en: ["Honesty", "Arrogance", "Gossip", "Cheating", "Cruelty"],
      th: ["ความซื่อสัตย์", "ความหยิ่งยโส", "การนินทา", "การโกง", "ความโหดร้าย"],
    },
    correct: 0,
  },

  // Daily life
  {
    id: "q_d1",
    topic: "dailylife",
    question: { en: "Which food is haram (forbidden)?", th: "อาหารใดเป็นฮะรอม (ต้องห้าม)?" },
    options: {
      en: ["Pork", "Dates", "Fish", "Rice", "Honey"],
      th: ["เนื้อสุกร", "อินทผลัม", "ปลา", "ข้าว", "น้ำผึ้ง"],
    },
    correct: 0,
  },
  {
    id: "q_d2",
    topic: "dailylife",
    question: { en: "Interest / usury, which is forbidden, is called…", th: "ดอกเบี้ยซึ่งเป็นสิ่งต้องห้าม เรียกว่า…" },
    options: {
      en: ["Riba", "Zakat", "Mahar", "Sadaqah", "Halal"],
      th: ["ริบา", "ซะกาต", "มะฮัร", "เศาะดะเกาะฮ", "ฮาลาล"],
    },
    correct: 0,
  },
  {
    id: "q_d3",
    topic: "dailylife",
    question: { en: "What is the most a man may marry, with full fairness?", th: "ผู้ชายมีภรรยาได้มากที่สุดกี่คน โดยให้ความยุติธรรม?" },
    options: { en: ["4", "2", "1", "3", "Unlimited"], th: ["4 คน", "2 คน", "1 คน", "3 คน", "ไม่จำกัด"] },
    correct: 0,
  },
  {
    id: "q_d4",
    topic: "dailylife",
    question: { en: "“Permitted by Allah” is described as…", th: "สิ่งที่ “อัลลอฮทรงอนุมัติ” เรียกว่า…" },
    options: {
      en: ["Halal", "Haram", "Makruh", "Najis", "Riba"],
      th: ["ฮาลาล", "ฮะรอม", "มักรูฮ", "นะญิส", "ริบา"],
    },
    correct: 0,
  },

  // History & phrases
  {
    id: "q_hi1",
    topic: "history",
    question: { en: "How many prophets are named in the Quran?", th: "มีนบีที่ถูกระบุชื่อในกุรอานกี่ท่าน?" },
    options: { en: ["25", "124,000", "99", "114", "5"], th: ["25 ท่าน", "124,000 ท่าน", "99 ท่าน", "114 ท่าน", "5 ท่าน"] },
    correct: 0,
  },
  {
    id: "q_hi2",
    topic: "history",
    question: { en: "Who is known as the “father of the prophets”?", th: "ใครคือ “บิดาแห่งบรรดานบี”?" },
    options: {
      en: ["Prophet Ibrahim", "Prophet Adam", "Prophet Musa", "Prophet Isa", "Prophet Nuh"],
      th: ["นบีอิบรอฮีม", "นบีอาดัม", "นบีมูซา", "นบีอีซา", "นบีนูฮ"],
    },
    correct: 0,
  },
  {
    id: "q_hi3",
    topic: "history",
    question: {
      en: "On the Night Journey, how many daily prayers were finally ordained?",
      th: "ในคืนอิสรออ์ การนมาซถูกกำหนดในที่สุดกี่เวลา?",
    },
    options: { en: ["5", "50", "17", "3", "10"], th: ["5 เวลา", "50 เวลา", "17 เวลา", "3 เวลา", "10 เวลา"] },
    correct: 0,
  },
  {
    id: "q_hi4",
    topic: "history",
    question: {
      en: "Which phrase means “In the name of Allah, Most Gracious, Most Merciful”?",
      th: "คำใดหมายถึง “ด้วยพระนามของอัลลอฮ ผู้ทรงกรุณาปรานี ผู้ทรงเมตตาเสมอ”?",
    },
    options: {
      en: ["Bismillah", "Alhamdulillah", "SubhanAllah", "Allahu Akbar", "InshaAllah"],
      th: ["บิสมิลลาฮ", "อัลฮัมดุลิลลาฮ", "ซุบฮานัลลอฮ", "อัลลอฮุอักบัร", "อินชาอัลลอฮ"],
    },
    correct: 0,
  },
  {
    id: "q_hi5",
    topic: "history",
    question: { en: "What do Muslims say when someone passes away?", th: "เมื่อมีคนเสียชีวิต มุสลิมกล่าวว่าอย่างไร?" },
    options: {
      en: [
        "Inna lillahi wa inna ilayhi raji'un",
        "Assalamu alaikum",
        "Bismillah",
        "Alhamdulillah",
        "Ameen",
      ],
      th: [
        "อินนาลิลลาฮิ วะอินนา อิลัยฮิรอญิอูน",
        "อัสสะลามุอะลัยกุม",
        "บิสมิลลาฮ",
        "อัลฮัมดุลิลลาฮ",
        "อามีน",
      ],
    },
    correct: 0,
  },
];

// Topics that actually have questions, in deck order, with their icon + title.
export function quizTopics() {
  const counts = new Map<string, number>();
  for (const q of quiz) counts.set(q.topic, (counts.get(q.topic) ?? 0) + 1);
  return decks
    .filter((d) => counts.has(d.id))
    .map((d) => ({ id: d.id, icon: d.icon, title: d.title, count: counts.get(d.id)! }));
}

export const quizText = {
  quizTitle: { en: "Quiz", th: "แบบทดสอบ" },
  chooseQuizTopic: { en: "Pick a quiz", th: "เลือกแบบทดสอบ" },
  allTopics: { en: "All topics mixed", th: "รวมทุกหัวข้อ" },
  questions: { en: "questions", th: "ข้อ" },
  best: { en: "Best", th: "ดีที่สุด" },
  start: { en: "Start quiz", th: "เริ่มทำ" },
  question: { en: "Question", th: "ข้อที่" },
  score: { en: "Score", th: "คะแนน" },
  correct: { en: "Correct!", th: "ถูกต้อง!" },
  wrong: { en: "Not quite", th: "ยังไม่ถูก" },
  nextQ: { en: "Next question", th: "ข้อถัดไป" },
  seeResult: { en: "See result", th: "ดูผล" },
  yourScore: { en: "Your score", th: "คะแนนของคุณ" },
  tryAgain: { en: "Try again", th: "ลองอีกครั้ง" },
  backToTopics: { en: "Back to quizzes", th: "กลับไปเลือกแบบทดสอบ" },
  perfect: { en: "Perfect! Masha'Allah 🎉", th: "เต็ม! มาชาอัลลอฮ 🎉" },
  great: { en: "Great work!", th: "เยี่ยมมาก!" },
  keepGoing: { en: "Keep practicing 💪", th: "ฝึกต่อไปนะ 💪" },
} as const;
