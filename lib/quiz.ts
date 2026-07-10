// Multiple-choice quiz bank (5 options each), bilingual EN/Thai.
// Grouped by the same topic ids as the flashcard decks in decks.ts.
// The correct answer is index 0; options are shuffled at runtime.

import { decks, type Lang } from "./decks";

export interface QuizQuestion {
  id: string;
  topic: string; // matches a deck id
  question: Record<Lang, string>;
  options: Record<Lang, string[]>; // exactly 5
  correct: number; // index 0–4
  explanation: Record<Lang, string>;
}

// How many questions to draw per round (randomly, from the pool).
export const ROUND_SIZE = 50;

export const quiz: QuizQuestion[] = [
  // ── Foundations ────────────────────────────────────────
  {
    id: "q_f1",
    topic: "foundations",
    question: { en: "What does the word “Islam” mean?", th: "คำว่า “อิสลาม” หมายถึงอะไร?" },
    options: {
      en: ["Submission to attain peace", "Holy war", "Knowledge", "Charity", "Pilgrimage"],
      th: ["การยอมจำนนเพื่อบรรลุความสันติสุข", "สงครามศักดิ์สิทธิ์", "ความรู้", "การบริจาค", "การไปแสวงบุญ"],
    },
    correct: 0,
    explanation: {
      en: "“Islam” comes from Arabic roots meaning submission and peace — a Muslim submits to Allah's will to find peace.",
      th: "คำว่าอิสลามมาจากรากศัพท์อาหรับที่หมายถึงการนอบน้อมและสันติ มุสลิมยอมจำนนต่ออัลลอฮเพื่อบรรลุความสันติสุข",
    },
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
    explanation: {
      en: "Prophet Muhammad ﷺ is the last of all the prophets and messengers sent by Allah.",
      th: "ท่านนบีมุฮัมมัดเป็นนบีและศาสนทูตคนสุดท้ายที่อัลลอฮทรงส่งมา",
    },
  },
  {
    id: "q_f3",
    topic: "foundations",
    question: { en: "How many chapters (surah) are in the Quran?", th: "คัมภีร์กุรอานมีกี่บท (ซูเราะฮ)?" },
    options: { en: ["114", "30", "99", "124", "6,236"], th: ["114", "30", "99", "124", "6,236"] },
    correct: 0,
    explanation: {
      en: "The Quran has 114 chapters (surahs), 30 parts (juz), and 6,236 verses.",
      th: "คัมภีร์กุรอานมี 114 บท (ซูเราะฮ) 30 ภาค (ญุซ) และ 6,236 อายะฮ",
    },
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
    explanation: {
      en: "Prophet Adam was the first human Allah created and the first prophet.",
      th: "นบีอาดัมเป็นมนุษย์คนแรกที่อัลลอฮทรงสร้าง และเป็นนบีท่านแรก",
    },
  },
  {
    id: "q_f5",
    topic: "foundations",
    question: { en: "How do you reply to “Assalamu alaikum”?", th: "ตอบรับคำทักทาย “อัสสะลามุอะลัยกุม” ว่าอย่างไร?" },
    options: {
      en: ["Wa alaikumus-salam", "Alhamdulillah", "Bismillah", "InshaAllah", "Ameen"],
      th: ["วะอะลัยกุมุสสลาม", "อัลฮัมดุลิลลาฮ", "บิสมิลลาฮ", "อินชาอัลลอฮ", "อามีน"],
    },
    correct: 0,
    explanation: {
      en: "The reply to “peace be upon you” is “Wa alaikumus-salam” — and upon you peace.",
      th: "การตอบรับ “ขอความสันติจงมีแด่ท่าน” คือ “วะอะลัยกุมุสสลาม” และแด่ท่านเช่นกัน",
    },
  },
  {
    id: "q_f6",
    topic: "foundations",
    question: { en: "How many parts (juz) is the Quran divided into?", th: "คัมภีร์กุรอานถูกแบ่งออกเป็นกี่ภาค (ญุซ)?" },
    options: { en: ["30", "114", "99", "60", "40"], th: ["30", "114", "99", "60", "40"] },
    correct: 0,
    explanation: {
      en: "The Quran is divided into 30 parts (juz), often read one per night in Ramadan.",
      th: "กุรอานแบ่งเป็น 30 ภาค (ญุซ) นิยมอ่านคืนละภาคในเดือนเราะมะฎอน",
    },
  },
  {
    id: "q_f7",
    topic: "foundations",
    question: { en: "In which language was the Quran revealed?", th: "คัมภีร์กุรอานถูกประทานลงมาเป็นภาษาใด?" },
    options: {
      en: ["Arabic", "Hebrew", "Persian", "Urdu", "Aramaic"],
      th: ["ภาษาอาหรับ", "ภาษาฮีบรู", "ภาษาเปอร์เซีย", "ภาษาอูรดู", "ภาษาอราเมอิก"],
    },
    correct: 0,
    explanation: {
      en: "The Quran was revealed in the Arabic language.",
      th: "คัมภีร์กุรอานถูกประทานลงมาเป็นภาษาอาหรับ",
    },
  },
  {
    id: "q_f8",
    topic: "foundations",
    question: { en: "What is the Sunnah?", th: "ซุนนะฮคืออะไร?" },
    options: {
      en: ["The teachings and example of the Prophet ﷺ", "A pillar of prayer", "A type of fasting", "The call to prayer", "A kind of mosque"],
      th: ["แบบอย่างและคำสอนของท่านนบี", "รุ่กนของการละหมาด", "ประเภทของการถือศีลอด", "การเรียกละหมาด", "ชนิดของมัสยิด"],
    },
    correct: 0,
    explanation: {
      en: "The Sunnah is the sayings, actions and example of Prophet Muhammad ﷺ — a source of guidance alongside the Quran.",
      th: "ซุนนะฮคือคำพูด การกระทำ และแบบอย่างของท่านนบี ซึ่งเป็นแหล่งคำสอนคู่กับกุรอาน",
    },
  },
  {
    id: "q_f9",
    topic: "foundations",
    question: { en: "What is the Muslim place of worship called?", th: "สถานที่ประกอบศาสนกิจของมุสลิมเรียกว่าอะไร?" },
    options: {
      en: ["Mosque (masjid)", "Church", "Temple", "Synagogue", "Shrine"],
      th: ["มัสยิด", "โบสถ์คริสต์", "วัด", "ศาลาธรรมยิว", "ศาลเจ้า"],
    },
    correct: 0,
    explanation: { en: "A mosque (masjid) is the Muslim place of worship.", th: "มัสยิดคือสถานที่ประกอบศาสนกิจของมุสลิม" },
  },
  {
    id: "q_f10",
    topic: "foundations",
    question: { en: "What is the holy book of Islam?", th: "คัมภีร์ของศาสนาอิสลามคืออะไร?" },
    options: {
      en: ["The Quran", "The Bible", "The Torah", "The Vedas", "The Psalms"],
      th: ["คัมภีร์กุรอาน", "คัมภีร์ไบเบิล", "คัมภีร์โตราห์", "คัมภีร์พระเวท", "บทเพลงสดุดี"],
    },
    correct: 0,
    explanation: {
      en: "The Quran is the holy book of Islam, the final revelation from Allah.",
      th: "คัมภีร์กุรอานคือคัมภีร์ของอิสลาม เป็นวิวรณ์สุดท้ายจากอัลลอฮ",
    },
  },

  // ── 6 Articles of Faith ────────────────────────────────
  {
    id: "q_i1",
    topic: "iman",
    question: { en: "How many Articles of Faith (Iman) are there?", th: "หลักศรัทธา (อีมาน) มีกี่ประการ?" },
    options: { en: ["6", "5", "3", "7", "10"], th: ["6", "5", "3", "7", "10"] },
    correct: 0,
    explanation: {
      en: "The 6 Articles of Faith: belief in Allah, the Angels, the Books, the Prophets, Divine Decree, and the Last Day.",
      th: "หลักศรัทธา 6 ประการ คือ ศรัทธาในอัลลอฮ มลาอิกะฮ คัมภีร์ บรรดานบี กฎกำหนดสภาวะ และวันสิ้นโลก",
    },
  },
  {
    id: "q_i2",
    topic: "iman",
    question: { en: "Which of these is NOT one of the 6 Articles of Faith?", th: "ข้อใดไม่ใช่หลักศรัทธา 6 ประการ?" },
    options: {
      en: ["Belief in performing Hajj", "Belief in Allah", "Belief in the Angels", "Belief in the Prophets", "Belief in the Last Day"],
      th: ["ศรัทธาในการทำฮัจญ์", "ศรัทธาในอัลลอฮ", "ศรัทธาในบรรดามลาอิกะฮ", "ศรัทธาในบรรดานบี", "ศรัทธาในวันสิ้นโลก"],
    },
    correct: 0,
    explanation: {
      en: "Hajj is one of the 5 Pillars of practice, not one of the 6 Articles of Faith.",
      th: "การทำฮัจญ์เป็นหนึ่งในหลักปฏิบัติ 5 ประการ ไม่ใช่หลักศรัทธา",
    },
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
    explanation: {
      en: "Belief in resurrection and judgment after death is belief in the Last Day.",
      th: "การเชื่อในการฟื้นคืนชีพและการพิพากษาหลังความตายคือศรัทธาในวันสิ้นโลก",
    },
  },
  {
    id: "q_i4",
    topic: "iman",
    question: { en: "Angels (malaikah) were created from…", th: "มลาอิกะฮถูกสร้างมาจากสิ่งใด?" },
    options: {
      en: ["Light", "Clay", "Fire", "Water", "Smoke"],
      th: ["แสงรัศมี (นูร)", "ดิน", "ไฟ", "น้ำ", "ควัน"],
    },
    correct: 0,
    explanation: {
      en: "Angels are created from light (nur); jinn from fire and humans from clay.",
      th: "มลาอิกะฮถูกสร้างจากแสงรัศมี (นูร) ญินจากไฟ และมนุษย์จากดิน",
    },
  },
  {
    id: "q_i5",
    topic: "iman",
    question: { en: "Which angel brought revelation to the prophets?", th: "มลาอิกะฮองค์ใดนำโองการมาสู่บรรดานบี?" },
    options: {
      en: ["Jibril (Gabriel)", "Mikail", "Israfil", "Izrail", "Malik"],
      th: ["ญิบรีล", "มีกาอีล", "อิสรอฟีล", "อิซรออีล", "มาลิก"],
    },
    correct: 0,
    explanation: {
      en: "The Angel Jibril (Gabriel) brought Allah's revelation to the prophets.",
      th: "มลาอิกะฮญิบรีลเป็นผู้นำโองการของอัลลอฮมาสู่บรรดานบี",
    },
  },
  {
    id: "q_i6",
    topic: "iman",
    question: {
      en: "Believing everything happens by Allah's will and decree is belief in…",
      th: "การเชื่อว่าทุกสิ่งเกิดขึ้นตามพระประสงค์และการกำหนดของอัลลอฮ คือศรัทธาใน…",
    },
    options: {
      en: ["Qadar (Divine Decree)", "The Angels", "The Books", "The Prophets", "The Last Day"],
      th: ["กฎกำหนดสภาวะ (เกาะดัร)", "มลาอิกะฮ", "คัมภีร์", "บรรดานบี", "วันสิ้นโลก"],
    },
    correct: 0,
    explanation: {
      en: "Belief that all things happen by Allah's decree is called belief in Qadar.",
      th: "การเชื่อว่าทุกสิ่งเกิดตามการกำหนดของอัลลอฮเรียกว่าศรัทธาในเกาะดัร",
    },
  },
  {
    id: "q_i7",
    topic: "iman",
    question: { en: "Which scripture was given to Prophet Musa (Moses)?", th: "คัมภีร์ใดที่ประทานแก่นบีมูซา?" },
    options: {
      en: ["The Tawrah (Torah)", "The Injil", "The Zabur", "The Quran", "The Furqan"],
      th: ["คัมภีร์เตารอต", "คัมภีร์อินญีล", "คัมภีร์ซะบูร", "คัมภีร์กุรอาน", "อัลฟุรกอน"],
    },
    correct: 0,
    explanation: {
      en: "The Tawrah (Torah) was revealed to Prophet Musa (Moses).",
      th: "คัมภีร์เตารอตถูกประทานแก่นบีมูซา",
    },
  },

  // ── 5 Pillars ──────────────────────────────────────────
  {
    id: "q_p1",
    topic: "pillars",
    question: { en: "How many Pillars of Islam are there?", th: "หลักปฏิบัติของอิสลามมีกี่ประการ?" },
    options: { en: ["5", "6", "3", "4", "7"], th: ["5", "6", "3", "4", "7"] },
    correct: 0,
    explanation: {
      en: "The 5 Pillars: Shahada, Salah, Sawm (fasting), Zakat, and Hajj.",
      th: "หลักปฏิบัติ 5 ประการ คือ ปฏิญาณตน ละหมาด ถือศีลอด จ่ายซะกาต และฮัจญ์",
    },
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
    explanation: {
      en: "Hajj is a pillar; the others are acts of worship but not among the five pillars.",
      th: "ฮัจญ์เป็นหนึ่งในหลักปฏิบัติ ส่วนตัวเลือกอื่นเป็นศาสนกิจแต่ไม่ใช่หลักปฏิบัติ 5 ประการ",
    },
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
    explanation: {
      en: "Fasting the month of Ramadan is the pillar called Sawm.",
      th: "การถือศีลอดเดือนเราะมะฎอนคือหลักปฏิบัติที่เรียกว่าศิยาม",
    },
  },
  {
    id: "q_p4",
    topic: "pillars",
    question: { en: "How many times a day do Muslims pray?", th: "มุสลิมละหมาดวันละกี่เวลา?" },
    options: { en: ["5", "3", "7", "2", "6"], th: ["5", "3", "7", "2", "6"] },
    correct: 0,
    explanation: {
      en: "Muslims pray five times a day: Fajr, Zuhr, Asr, Maghrib and Isha.",
      th: "มุสลิมละหมาดวันละ 5 เวลา คือ ซุบฮิ ซุฮริ อัศริ มัฆริบ และอิชาอุ",
    },
  },
  {
    id: "q_p5",
    topic: "pillars",
    question: { en: "Which pillar is giving a share of wealth to the poor?", th: "หลักปฏิบัติข้อใดคือการบริจาคทรัพย์แก่คนยากจน?" },
    options: {
      en: ["Zakat", "Salah", "Hajj", "Sawm", "Shahada"],
      th: ["ซะกาต", "ละหมาด", "ฮัจญ์", "ถือศีลอด", "ปฏิญาณตน"],
    },
    correct: 0,
    explanation: {
      en: "Zakat is the pillar of giving a set share of one's wealth to the poor.",
      th: "ซะกาตคือหลักปฏิบัติของการบริจาคทรัพย์ส่วนหนึ่งแก่คนยากจน",
    },
  },
  {
    id: "q_p6",
    topic: "pillars",
    question: { en: "Hajj is obligatory…", th: "การทำฮัจญ์เป็นข้อบังคับ…" },
    options: {
      en: ["Once in a lifetime, if able", "Every year", "Never", "Monthly", "Weekly"],
      th: ["ครั้งหนึ่งในชีวิต หากมีความสามารถ", "ทุกปี", "ไม่ต้องเลย", "ทุกเดือน", "ทุกสัปดาห์"],
    },
    correct: 0,
    explanation: {
      en: "Hajj is obligatory once in a lifetime for those who are able.",
      th: "การทำฮัจญ์เป็นข้อบังคับครั้งหนึ่งในชีวิตสำหรับผู้มีความสามารถ",
    },
  },
  {
    id: "q_p7",
    topic: "pillars",
    question: { en: "Declaring “there is no god but Allah…” is which pillar?", th: "การกล่าวปฏิญาณ “ไม่มีพระเจ้าอื่นใดนอกจากอัลลอฮ” คือหลักปฏิบัติข้อใด?" },
    options: {
      en: ["Shahada", "Zakat", "Hajj", "Sawm", "Salah"],
      th: ["ชะฮาดะฮ (ปฏิญาณตน)", "ซะกาต", "ฮัจญ์", "ถือศีลอด", "ละหมาด"],
    },
    correct: 0,
    explanation: {
      en: "The declaration of faith is the Shahada, the first pillar.",
      th: "การกล่าวปฏิญาณศรัทธาคือชะฮาดะฮ หลักปฏิบัติข้อแรก",
    },
  },

  // ── Salah ──────────────────────────────────────────────
  {
    id: "q_s1",
    topic: "salah",
    question: { en: "How many obligatory prayers are there each day?", th: "นมาซภาคบังคับมีกี่เวลาต่อวัน?" },
    options: { en: ["5", "3", "7", "2", "10"], th: ["5", "3", "7", "2", "10"] },
    correct: 0,
    explanation: { en: "There are five obligatory prayers each day.", th: "การละหมาดภาคบังคับมีวันละ 5 เวลา" },
  },
  {
    id: "q_s2",
    topic: "salah",
    question: { en: "How many rak'ah is the Maghrib prayer?", th: "นมาซมัฆริบมีกี่ร็อกอัต?" },
    options: { en: ["3", "2", "4", "5", "1"], th: ["3", "2", "4", "5", "1"] },
    correct: 0,
    explanation: { en: "Maghrib, prayed just after sunset, has 3 rak'ah.", th: "นมาซมัฆริบซึ่งละหมาดหลังตะวันตกดินมี 3 ร็อกอัต" },
  },
  {
    id: "q_s3",
    topic: "salah",
    question: { en: "How many obligatory rak'ah in total each day?", th: "รวมนมาซภาคบังคับทั้งวันมีกี่ร็อกอัต?" },
    options: { en: ["17", "5", "10", "13", "20"], th: ["17", "5", "10", "13", "20"] },
    correct: 0,
    explanation: {
      en: "The five daily prayers total 17 obligatory rak'ah (2+4+4+3+4).",
      th: "นมาซ 5 เวลารวมเป็นฟัรฎู 17 ร็อกอัต (2+4+4+3+4)",
    },
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
    explanation: { en: "Fajr is the dawn prayer, prayed before sunrise.", th: "ซุบฮิ (ฟัจร) คือนมาซยามรุ่งอรุณ ก่อนดวงอาทิตย์ขึ้น" },
  },
  {
    id: "q_s5",
    topic: "salah",
    question: { en: "Praying in congregation multiplies the reward by how much?", th: "การนมาซรวม (ญะมาอะฮ) ได้ผลบุญมากกว่ากี่เท่า?" },
    options: { en: ["27 times", "10 times", "5 times", "70 times", "100 times"], th: ["27 เท่า", "10 เท่า", "5 เท่า", "70 เท่า", "100 เท่า"] },
    correct: 0,
    explanation: {
      en: "Praying in congregation earns up to 27 times the reward of praying alone.",
      th: "การละหมาดรวมได้ผลบุญมากกว่าละหมาดคนเดียวถึง 27 เท่า",
    },
  },
  {
    id: "q_s6",
    topic: "salah",
    question: { en: "How many rak'ah is the Fajr (dawn) prayer?", th: "นมาซซุบฮิ (ฟัจร) มีกี่ร็อกอัต?" },
    options: { en: ["2", "3", "4", "5", "1"], th: ["2", "3", "4", "5", "1"] },
    correct: 0,
    explanation: { en: "Fajr has 2 rak'ah.", th: "นมาซซุบฮิมี 2 ร็อกอัต" },
  },
  {
    id: "q_s7",
    topic: "salah",
    question: { en: "How many rak'ah is the Zuhr prayer?", th: "นมาซซุฮริมีกี่ร็อกอัต?" },
    options: { en: ["4", "2", "3", "5", "1"], th: ["4", "2", "3", "5", "1"] },
    correct: 0,
    explanation: { en: "Zuhr has 4 rak'ah.", th: "นมาซซุฮริมี 4 ร็อกอัต" },
  },
  {
    id: "q_s8",
    topic: "salah",
    question: { en: "How many rak'ah is the Isha prayer?", th: "นมาซอิชาอุมีกี่ร็อกอัต?" },
    options: { en: ["4", "3", "2", "5", "1"], th: ["4", "3", "2", "5", "1"] },
    correct: 0,
    explanation: { en: "Isha has 4 rak'ah.", th: "นมาซอิชาอุมี 4 ร็อกอัต" },
  },
  {
    id: "q_s9",
    topic: "salah",
    question: { en: "What is the prostration in prayer called?", th: "การกราบในละหมาดเรียกว่าอะไร?" },
    options: {
      en: ["Sujud", "Ruku'", "Qiyam", "Tashahhud", "Takbir"],
      th: ["สุญูด", "รุกู้อ", "ยืน (กิยาม)", "ตะชะฮฮุด", "ตักบีร"],
    },
    correct: 0,
    explanation: { en: "Sujud is the prostration where the forehead touches the ground.", th: "สุญูดคือการกราบที่หน้าผากแตะพื้น" },
  },
  {
    id: "q_s10",
    topic: "salah",
    question: { en: "What do you say to begin the prayer (while raising your hands)?", th: "กล่าวคำใดเพื่อเริ่มการละหมาด (ขณะยกมือ)?" },
    options: {
      en: ["Allāhu Akbar", "Bismillah", "Alhamdulillah", "Ameen", "Subhanallah"],
      th: ["อัลลอฮุอักบัร", "บิสมิลลาฮ", "อัลฮัมดุลิลลาฮ", "อามีน", "ซุบฮานัลลอฮ"],
    },
    correct: 0,
    explanation: {
      en: "The prayer begins with the takbir, “Allāhu Akbar”, while raising the hands.",
      th: "การละหมาดเริ่มด้วยตักบีร “อัลลอฮุอักบัร” พร้อมยกมือ",
    },
  },
  {
    id: "q_s11",
    topic: "salah",
    question: { en: "Which surah is recited in every rak'ah?", th: "ซูเราะฮใดที่ต้องอ่านในทุกร็อกอัต?" },
    options: {
      en: ["Al-Fatihah", "Al-Ikhlas", "Al-Kafirun", "Ya-Sin", "Al-Baqarah"],
      th: ["อัลฟาติฮะฮ", "อัลอิคลาศ", "อัลกาฟิรูน", "ยาซีน", "อัลบะเกาะเราะฮ"],
    },
    correct: 0,
    explanation: {
      en: "Surah Al-Fatihah is recited in every rak'ah of every prayer.",
      th: "ซูเราะฮอัลฟาติฮะฮต้องอ่านในทุกร็อกอัตของทุกการละหมาด",
    },
  },
  {
    id: "q_s12",
    topic: "salah",
    question: { en: "What is the direction Muslims face in prayer called?", th: "ทิศที่มุสลิมหันหน้าไปในการละหมาดเรียกว่าอะไร?" },
    options: {
      en: ["Qibla", "Mihrab", "Minbar", "Iqamah", "Wudu"],
      th: ["กิบลัต", "มิฮฺรอบ", "มินบัร", "อิกอมะฮ", "วุฎู"],
    },
    correct: 0,
    explanation: {
      en: "The direction of prayer, toward the Kaaba, is called the qibla.",
      th: "ทิศที่หันหน้าไปละหมาด (สู่กะอบะฮ) เรียกว่ากิบลัต",
    },
  },
  {
    id: "q_s13",
    topic: "salah",
    question: { en: "What is the call announcing the prayer time called?", th: "คำประกาศเรียกเข้าเวลาละหมาดเรียกว่าอะไร?" },
    options: {
      en: ["Adhan", "Iqamah", "Khutbah", "Dhikr", "Dua"],
      th: ["อะซาน", "อิกอมะฮ", "คุฏบะฮ", "ซิกิร", "ดุอาอ์"],
    },
    correct: 0,
    explanation: { en: "The adhan is the call announcing that the prayer time has entered.", th: "อะซานคือคำประกาศเรียกเมื่อเข้าเวลาละหมาด" },
  },

  // ── Purification ───────────────────────────────────────
  {
    id: "q_pu1",
    topic: "purification",
    question: { en: "Dry ablution (used when there is no water) is called…", th: "การอาบน้ำละหมาดด้วยฝุ่นดินเมื่อไม่มีน้ำ เรียกว่า…" },
    options: {
      en: ["Tayammum", "Wudu", "Ghusl", "Najis", "Adhan"],
      th: ["ตะยัมมุม", "วุฎู", "ฆุสล", "นะญิส", "อะซาน"],
    },
    correct: 0,
    explanation: {
      en: "Tayammum is dry ablution with clean earth, used when water is unavailable or harmful.",
      th: "ตะยัมมุมคือการอาบน้ำละหมาดด้วยฝุ่นดินสะอาด ใช้เมื่อไม่มีน้ำหรือน้ำเป็นอันตราย",
    },
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
    explanation: { en: "Passing gas breaks wudu; it must be renewed before prayer.", th: "การผายลมทำให้เสียน้ำละหมาด ต้องอาบใหม่ก่อนละหมาด" },
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
    explanation: { en: "Ghusl is the full-body ritual bath.", th: "ฆุสลคือการอาบน้ำชำระทั้งตัว" },
  },
  {
    id: "q_pu4",
    topic: "purification",
    question: { en: "Washing specific parts with water before prayer is called…", th: "การล้างอวัยวะด้วยน้ำก่อนละหมาดเรียกว่าอะไร?" },
    options: {
      en: ["Wudu", "Ghusl", "Tayammum", "Sujud", "Adhan"],
      th: ["วุฎู (อาบน้ำละหมาด)", "ฆุสล", "ตะยัมมุม", "สุญูด", "อะซาน"],
    },
    correct: 0,
    explanation: { en: "Wudu is the washing of specific parts before prayer.", th: "วุฎูคือการล้างอวัยวะบางส่วนก่อนละหมาด" },
  },
  {
    id: "q_pu5",
    topic: "purification",
    question: { en: "Which of these requires ghusl (a full bath)?", th: "ข้อใดต้องอาบน้ำฆุสล (ชำระฮะดัษใหญ่)?" },
    options: {
      en: ["After menstruation", "Sleeping briefly", "Eating food", "Walking", "Laughing"],
      th: ["หลังหมดประจำเดือน", "งีบหลับสั้น ๆ", "การกินอาหาร", "การเดิน", "การหัวเราะ"],
    },
    correct: 0,
    explanation: { en: "Ghusl (a full bath) is required after menstruation ends.", th: "ต้องอาบน้ำฆุสลหลังหมดประจำเดือน" },
  },
  {
    id: "q_pu6",
    topic: "purification",
    question: { en: "Wudu is begun by saying…", th: "การอาบน้ำละหมาดเริ่มด้วยการกล่าวคำใด?" },
    options: {
      en: ["Bismillah", "Ameen", "Allāhu Akbar", "Alhamdulillah", "Subhanallah"],
      th: ["บิสมิลลาฮ", "อามีน", "อัลลอฮุอักบัร", "อัลฮัมดุลิลลาฮ", "ซุบฮานัลลอฮ"],
    },
    correct: 0,
    explanation: { en: "Wudu begins by saying “Bismillah”.", th: "การอาบน้ำละหมาดเริ่มด้วยการกล่าว “บิสมิลลาฮ”" },
  },
  {
    id: "q_pu7",
    topic: "purification",
    question: { en: "In wudu, the parts are usually washed…", th: "ในการอาบน้ำละหมาด ปกติล้างอวัยวะกี่ครั้ง?" },
    options: {
      en: ["Three times", "Once", "Five times", "Seven times", "Ten times"],
      th: ["สามครั้ง", "ครั้งเดียว", "ห้าครั้ง", "เจ็ดครั้ง", "สิบครั้ง"],
    },
    correct: 0,
    explanation: { en: "In wudu, the parts are typically washed three times each.", th: "ในวุฎู ปกติล้างอวัยวะส่วนละ 3 ครั้ง" },
  },
  {
    id: "q_pu8",
    topic: "purification",
    question: { en: "Tayammum is performed using…", th: "การตะยัมมุมทำโดยใช้สิ่งใด?" },
    options: {
      en: ["Clean earth or dust", "Milk", "Oil", "Leaves", "Sand mixed with water"],
      th: ["ดินหรือฝุ่นที่สะอาด", "นม", "น้ำมัน", "ใบไม้", "ทรายผสมน้ำ"],
    },
    correct: 0,
    explanation: { en: "Tayammum uses clean earth or dust instead of water.", th: "ตะยัมมุมใช้ดินหรือฝุ่นสะอาดแทนน้ำ" },
  },

  // ── Fasting ────────────────────────────────────────────
  {
    id: "q_fa1",
    topic: "fasting",
    question: { en: "Ramadan is which month of the Islamic calendar?", th: "เราะมะฎอนเป็นเดือนที่เท่าไรของปฏิทินอิสลาม?" },
    options: { en: ["9th", "1st", "12th", "7th", "10th"], th: ["ที่ 9", "ที่ 1", "ที่ 12", "ที่ 7", "ที่ 10"] },
    correct: 0,
    explanation: { en: "Ramadan is the 9th month of the Islamic calendar.", th: "เราะมะฎอนเป็นเดือนที่ 9 ของปฏิทินอิสลาม" },
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
    explanation: { en: "The fast is kept from dawn (Fajr) until sunset (Maghrib).", th: "การถือศีลอดเริ่มตั้งแต่รุ่งอรุณ (ฟัจร) จนถึงตะวันตกดิน (มัฆริบ)" },
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
    explanation: { en: "It is Sunnah to break the fast with dates and water.", th: "เป็นซุนนะฮที่จะละศีลอดด้วยอินทผลัมและน้ำ" },
  },
  {
    id: "q_fa4",
    topic: "fasting",
    question: { en: "The pre-dawn meal before fasting is called…", th: "อาหารมื้อก่อนรุ่งอรุณก่อนถือศีลอดเรียกว่าอะไร?" },
    options: {
      en: ["Suhoor", "Iftar", "Eid", "Sadaqah", "Zakat"],
      th: ["ซะฮูร", "การละศีลอด (อิฟฏอร)", "อีด", "เศาะดะเกาะฮ", "ซะกาต"],
    },
    correct: 0,
    explanation: { en: "Suhoor is the blessed pre-dawn meal before the fast.", th: "ซะฮูรคืออาหารมื้อก่อนรุ่งอรุณอันเป็นสิริมงคลก่อนถือศีลอด" },
  },
  {
    id: "q_fa5",
    topic: "fasting",
    question: { en: "Breaking the fast at sunset is called…", th: "การละศีลอดเมื่อตะวันตกดินเรียกว่าอะไร?" },
    options: {
      en: ["Iftar", "Suhoor", "Tarawih", "Ramadan", "Eid"],
      th: ["การละศีลอด (อิฟฏอร)", "ซะฮูร", "ตะรอเวียะฮ", "เราะมะฎอน", "อีด"],
    },
    correct: 0,
    explanation: { en: "Iftar is breaking the fast at sunset.", th: "อิฟฏอรคือการละศีลอดเมื่อตะวันตกดิน" },
  },
  {
    id: "q_fa6",
    topic: "fasting",
    question: { en: "Which celebration marks the end of Ramadan?", th: "งานเฉลิมฉลองใดที่เป็นการสิ้นสุดเดือนเราะมะฎอน?" },
    options: {
      en: ["Eid al-Fitr", "Eid al-Adha", "Ashura", "Mawlid", "Isra' & Mi'raj"],
      th: ["อีดิลฟิฏร (วันออกบวช)", "อีดิลอัฎฮา", "อาชูรอ", "เมาลิด", "อิสรออ์ เมี๊ยะอุรอจญ์"],
    },
    correct: 0,
    explanation: { en: "Eid al-Fitr celebrates the end of the Ramadan fast.", th: "อีดิลฟิฏรคือการเฉลิมฉลองการสิ้นสุดการถือศีลอดเดือนเราะมะฎอน" },
  },
  {
    id: "q_fa7",
    topic: "fasting",
    question: { en: "Fasting is meant to build self-control and…", th: "การถือศีลอดมีเป้าหมายเพื่อฝึกการควบคุมตนเองและสิ่งใด?" },
    options: {
      en: ["God-consciousness (taqwa)", "Wealth", "Physical strength", "Speed", "More sleep"],
      th: ["ความยำเกรงต่ออัลลอฮ (ตักวา)", "ความร่ำรวย", "พละกำลัง", "ความเร็ว", "การนอนมากขึ้น"],
    },
    correct: 0,
    explanation: { en: "Fasting is meant to build taqwa — God-consciousness and self-control.", th: "การถือศีลอดมีเป้าหมายเพื่อสร้างตักวา คือความยำเกรงและการควบคุมตนเอง" },
  },
  {
    id: "q_fa8",
    topic: "fasting",
    question: { en: "A person who is genuinely sick during Ramadan should…", th: "ผู้ที่ป่วยจริง ๆ ในเดือนเราะมะฎอนควรทำอย่างไร?" },
    options: {
      en: ["Make up the fast later (or feed the needy)", "Fast anyway", "Never pray again", "Fast twice as long", "Do nothing"],
      th: ["ถือชดใช้ภายหลัง (หรือจ่ายอาหารแก่คนขัดสน)", "ฝืนถือศีลอด", "เลิกละหมาดตลอดไป", "ถือศีลอดเป็นสองเท่า", "ไม่ต้องทำอะไร"],
    },
    correct: 0,
    explanation: {
      en: "The sick are excused and make up the missed days later (or feed the needy).",
      th: "ผู้ป่วยได้รับการผ่อนผัน ให้ถือชดใช้ภายหลัง (หรือจ่ายอาหารแก่คนขัดสน)",
    },
  },

  // ── Zakat ──────────────────────────────────────────────
  {
    id: "q_z1",
    topic: "zakat",
    question: { en: "What is the zakat rate on money and gold?", th: "อัตราซะกาตของเงินและทองคำคือเท่าไร?" },
    options: { en: ["2.5%", "5%", "10%", "20%", "1%"], th: ["2.5%", "5%", "10%", "20%", "1%"] },
    correct: 0,
    explanation: {
      en: "Zakat on money and gold is 2.5% of wealth held for a full year (above the nisab).",
      th: "ซะกาตของเงินและทองคือ 2.5% ของทรัพย์ที่ถือครองครบหนึ่งปี (เกินพิกัด)",
    },
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
    explanation: { en: "The word zakat means purification and growth — it cleanses one's wealth.", th: "คำว่าซะกาตหมายถึงการขัดเกลาและความเจริญงอกงาม เป็นการชำระทรัพย์ให้บริสุทธิ์" },
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
    explanation: {
      en: "You can't give zakat to your own dependents (parents, children, spouse) — supporting them is already your duty.",
      th: "จ่ายซะกาตแก่ผู้ที่ต้องเลี้ยงดู (พ่อแม่ ลูก คู่สมรส) ไม่ได้ เพราะเป็นหน้าที่ต้องดูแลอยู่แล้ว",
    },
  },
  {
    id: "q_z4",
    topic: "zakat",
    question: { en: "Zakat is given mainly to help…", th: "ซะกาตจ่ายเพื่อช่วยเหลือใครเป็นหลัก?" },
    options: {
      en: ["The poor and needy", "The wealthy", "Rulers only", "Only one's own family", "Strangers only"],
      th: ["คนยากจนและขัดสน", "คนร่ำรวย", "ผู้ปกครองเท่านั้น", "เฉพาะครอบครัวตนเอง", "คนแปลกหน้าเท่านั้น"],
    },
    correct: 0,
    explanation: { en: "Zakat is given mainly to the poor and needy.", th: "ซะกาตจ่ายเพื่อช่วยเหลือคนยากจนและขัดสนเป็นหลัก" },
  },
  {
    id: "q_z5",
    topic: "zakat",
    question: { en: "Zakat al-Fitr is given during…", th: "ซะกาตฟิฏรจ่ายในช่วงใด?" },
    options: {
      en: ["Ramadan, before the Eid prayer", "Dhul-Hijjah", "Muharram", "Rajab", "Any time freely"],
      th: ["เดือนเราะมะฎอน ก่อนนมาซอีด", "ซุลฮิจญะฮ", "มุฮัรรอม", "เราะญับ", "เมื่อใดก็ได้"],
    },
    correct: 0,
    explanation: { en: "Zakat al-Fitr is paid during Ramadan, before the Eid prayer.", th: "ซะกาตฟิฏรจ่ายในเดือนเราะมะฎอน ก่อนนมาซอีด" },
  },
  {
    id: "q_z6",
    topic: "zakat",
    question: { en: "How many categories of people may receive zakat?", th: "ผู้มีสิทธิ์รับซะกาตมีกี่จำพวก?" },
    options: { en: ["8", "5", "3", "10", "12"], th: ["8", "5", "3", "10", "12"] },
    correct: 0,
    explanation: { en: "The Quran names 8 categories of people who may receive zakat.", th: "กุรอานระบุผู้มีสิทธิ์รับซะกาต 8 จำพวก" },
  },
  {
    id: "q_z7",
    topic: "zakat",
    question: { en: "The minimum wealth at which zakat becomes due is called…", th: "จำนวนทรัพย์ขั้นต่ำที่ทำให้ต้องจ่ายซะกาตเรียกว่าอะไร?" },
    options: {
      en: ["Nisab", "Mahar", "Riba", "Sadaqah", "Fitr"],
      th: ["พิกัด (นิศอบ)", "มะฮัร", "ริบา", "เศาะดะเกาะฮ", "ฟิฏร"],
    },
    correct: 0,
    explanation: { en: "Nisab is the minimum amount of wealth at which zakat becomes obligatory.", th: "นิศอบ (พิกัด) คือจำนวนทรัพย์ขั้นต่ำที่ทำให้ต้องจ่ายซะกาต" },
  },

  // ── Hajj ───────────────────────────────────────────────
  {
    id: "q_h1",
    topic: "hajj",
    question: { en: "Hajj is performed in which month?", th: "ฮัจญ์ทำในเดือนใด?" },
    options: {
      en: ["Dhul-Hijjah", "Ramadan", "Shawwal", "Muharram", "Rajab"],
      th: ["ซุลฮิจญะฮ", "เราะมะฎอน", "เชาวาล", "มุฮัรรอม", "เราะญับ"],
    },
    correct: 0,
    explanation: { en: "Hajj is performed in the month of Dhul-Hijjah (days 8–13).", th: "ฮัจญ์ทำในเดือนซุลฮิจญะฮ (วันที่ 8–13)" },
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
    explanation: { en: "Hajj is required once in a lifetime for those who are able.", th: "ฮัจญ์เป็นข้อบังคับครั้งหนึ่งในชีวิตสำหรับผู้มีความสามารถ" },
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
    explanation: { en: "The cube-shaped House of Allah is the Kaaba.", th: "บ้านของอัลลอฮทรงลูกบาศก์คือกะอบะฮ" },
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
    explanation: { en: "Circling the Kaaba seven times is called tawaf.", th: "การเวียนรอบกะอบะฮ 7 รอบเรียกว่าเฏาะวาฟ" },
  },
  {
    id: "q_h5",
    topic: "hajj",
    question: { en: "The simple white garments worn for Hajj are called…", th: "ชุดขาวเรียบง่ายที่สวมในการทำฮัจญ์เรียกว่าอะไร?" },
    options: {
      en: ["Ihram", "Hijab", "Thobe", "Kufi", "Abaya"],
      th: ["เอี๊ยะฮรอม (อิฮฺรอม)", "ฮิญาบ", "ชุดโต๊บ", "หมวกกะปิเยาะ", "อาบายะ"],
    },
    correct: 0,
    explanation: { en: "The white seamless garments of Hajj are called ihram.", th: "ชุดขาวไร้ตะเข็บของการทำฮัจญ์เรียกว่าเอี๊ยะฮรอม" },
  },
  {
    id: "q_h6",
    topic: "hajj",
    question: { en: "Standing at the plain of Arafah is a key rite of…", th: "การวุกูฟที่ทุ่งอารอฟะฮเป็นพิธีสำคัญของสิ่งใด?" },
    options: {
      en: ["Hajj", "Ramadan", "Friday prayer", "Eid", "Wudu"],
      th: ["ฮัจญ์", "เราะมะฎอน", "นมาซวันศุกร์", "อีด", "วุฎู"],
    },
    correct: 0,
    explanation: { en: "Standing (wuquf) at Arafah is the essential rite of Hajj.", th: "การวุกูฟที่อารอฟะฮเป็นพิธีสำคัญที่สุดของฮัจญ์" },
  },
  {
    id: "q_h7",
    topic: "hajj",
    question: { en: "The Kaaba is located in the city of…", th: "กะอบะฮตั้งอยู่ในเมืองใด?" },
    options: {
      en: ["Makkah", "Madinah", "Jerusalem", "Cairo", "Baghdad"],
      th: ["มักกะฮ", "มะดีนะฮ", "เยรูซาเล็ม", "ไคโร", "แบกแดด"],
    },
    correct: 0,
    explanation: { en: "The Kaaba is in Makkah, Saudi Arabia.", th: "กะอบะฮอยู่ที่นครมักกะฮ ประเทศซาอุดีอาระเบีย" },
  },
  {
    id: "q_h8",
    topic: "hajj",
    question: { en: "Walking seven times between Safa and Marwah is called…", th: "การเดินไป-มา 7 เที่ยวระหว่างเศาะฟาและมัรวะฮเรียกว่าอะไร?" },
    options: {
      en: ["Sa'i", "Tawaf", "Wuquf", "Ramy", "Ihram"],
      th: ["สะแอ", "เฏาะวาฟ", "วุกูฟ", "ขว้างเสาหิน", "เอี๊ยะฮรอม"],
    },
    correct: 0,
    explanation: { en: "Walking seven times between Safa and Marwah is called sa'i.", th: "การเดินไป-มา 7 เที่ยวระหว่างเศาะฟาและมัรวะฮเรียกว่าสะแอ" },
  },

  // ── Virtues ────────────────────────────────────────────
  {
    id: "q_v1",
    topic: "virtues",
    question: { en: "Which virtue means “God-consciousness / mindfulness of Allah”?", th: "คุณธรรมใดหมายถึง “ความยำเกรงและระลึกถึงอัลลอฮ”?" },
    options: {
      en: ["Taqwa", "Ikhlas", "Sabr", "Shukr", "Tawakkul"],
      th: ["ตักวา", "อิคลาศ", "ซ็อบรุ", "ชุกูร", "ตะวักกุล"],
    },
    correct: 0,
    explanation: { en: "Taqwa is God-consciousness — being mindful of Allah in all things.", th: "ตักวาคือความยำเกรง การระลึกถึงอัลลอฮในทุกสิ่ง" },
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
    explanation: { en: "Ikhlas is sincerity — doing deeds purely for Allah's sake.", th: "อิคลาศคือความบริสุทธิ์ใจ การทำความดีเพื่ออัลลอฮเพียงผู้เดียว" },
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
    explanation: { en: "That saying describes shukr — gratitude to both people and Allah.", th: "คำกล่าวนั้นหมายถึงชุกูร ความกตัญญูทั้งต่อคนและต่ออัลลอฮ" },
  },
  {
    id: "q_v4",
    topic: "virtues",
    question: { en: "Trusting Allah after doing your best is called…", th: "การมอบหมายต่ออัลลอฮหลังจากพยายามอย่างเต็มที่เรียกว่าอะไร?" },
    options: {
      en: ["Tawakkul", "Sabr", "Shukr", "Taqwa", "Ikhlas"],
      th: ["ตะวักกุล", "ซ็อบรุ", "ชุกูร", "ตักวา", "อิคลาศ"],
    },
    correct: 0,
    explanation: { en: "Tawakkul is trusting Allah after doing your best effort.", th: "ตะวักกุลคือการมอบหมายต่ออัลลอฮหลังจากพยายามอย่างเต็มที่" },
  },
  {
    id: "q_v5",
    topic: "virtues",
    question: { en: "Being grateful and thankful to Allah is called…", th: "การขอบคุณและสำนึกในบุญคุณของอัลลอฮเรียกว่าอะไร?" },
    options: {
      en: ["Shukr", "Sabr", "Taqwa", "Tawakkul", "Ikhlas"],
      th: ["ชุกูร", "ซ็อบรุ", "ตักวา", "ตะวักกุล", "อิคลาศ"],
    },
    correct: 0,
    explanation: { en: "Shukr is gratitude and thankfulness to Allah.", th: "ชุกูรคือความกตัญญูและสำนึกในบุญคุณของอัลลอฮ" },
  },
  {
    id: "q_v6",
    topic: "virtues",
    question: { en: "Doing good only to be seen by others is the opposite of…", th: "การทำความดีเพียงเพื่อให้คนเห็น เป็นสิ่งตรงข้ามกับคุณธรรมใด?" },
    options: {
      en: ["Ikhlas (sincerity)", "Sabr", "Shukr", "Tawakkul", "Haya"],
      th: ["อิคลาศ (ความบริสุทธิ์ใจ)", "ซ็อบรุ", "ชุกูร", "ตะวักกุล", "ฮะยาอ์"],
    },
    correct: 0,
    explanation: { en: "Doing good just to be seen is showing off (riya), the opposite of ikhlas (sincerity).", th: "การทำดีเพียงให้คนเห็นคือการโอ้อวด (ริยาอ์) ตรงข้ามกับอิคลาศ" },
  },
  {
    id: "q_v7",
    topic: "virtues",
    question: { en: "Enduring hardship without complaint shows…", th: "การอดทนต่อความยากลำบากโดยไม่บ่นแสดงถึงคุณธรรมใด?" },
    options: {
      en: ["Sabr (patience)", "Riba", "Najis", "Qibla", "Zakat"],
      th: ["ซ็อบรุ (ความอดทน)", "ริบา", "นะญิส", "กิบลัต", "ซะกาต"],
    },
    correct: 0,
    explanation: { en: "Patiently enduring hardship is sabr.", th: "การอดทนต่อความยากลำบากคือซ็อบรุ" },
  },

  // ── Ethics ─────────────────────────────────────────────
  {
    id: "q_e1",
    topic: "ethics",
    question: { en: "A sense of shame/modesty that guards from wrong is called…", th: "ความละอายที่ปกป้องจากความชั่ว เรียกว่า…" },
    options: {
      en: ["Haya", "Riba", "Najis", "Qibla", "Sabr"],
      th: ["ฮะยาอ์", "ริบา", "นะญิส", "กิบลัต", "ซ็อบรุ"],
    },
    correct: 0,
    explanation: { en: "Haya is modesty — a sense of shame that guards from wrong, and part of faith.", th: "ฮะยาอ์คือความละอายที่ปกป้องจากความชั่ว และเป็นส่วนหนึ่งของศรัทธา" },
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
    explanation: { en: "Honesty is good character; the others are blameworthy traits.", th: "ความซื่อสัตย์เป็นจริยธรรมอันดี ส่วนตัวเลือกอื่นเป็นนิสัยที่น่าตำหนิ" },
  },
  {
    id: "q_e3",
    topic: "ethics",
    question: { en: "Islam teaches Muslims to treat their parents with…", th: "อิสลามสอนให้มุสลิมปฏิบัติต่อพ่อแม่ด้วยสิ่งใด?" },
    options: {
      en: ["Kindness and respect", "Harshness", "Indifference", "Anger", "Neglect"],
      th: ["ความเมตตาและความเคารพ", "ความรุนแรง", "ความเฉยเมย", "ความโกรธ", "การละเลย"],
    },
    correct: 0,
    explanation: { en: "Islam strongly commands treating parents with kindness and respect.", th: "อิสลามสั่งใช้อย่างหนักแน่นให้ปฏิบัติต่อพ่อแม่ด้วยความเมตตาและเคารพ" },
  },
  {
    id: "q_e4",
    topic: "ethics",
    question: { en: "Backbiting (talking badly about someone absent) is…", th: "การนินทา (พูดถึงผู้อื่นในทางไม่ดีลับหลัง) เป็นสิ่งใด?" },
    options: {
      en: ["Forbidden", "Encouraged", "Required", "A pillar", "A virtue"],
      th: ["สิ่งต้องห้าม", "สิ่งที่ส่งเสริม", "สิ่งจำเป็น", "หลักปฏิบัติ", "คุณธรรม"],
    },
    correct: 0,
    explanation: { en: "Backbiting (ghibah) is forbidden in Islam.", th: "การนินทา (ฆีบะฮ) เป็นสิ่งต้องห้ามในอิสลาม" },
  },
  {
    id: "q_e5",
    topic: "ethics",
    question: { en: "Which is part of good character (akhlaq)?", th: "ข้อใดเป็นส่วนหนึ่งของจริยธรรมอันดี (อัคลาก)?" },
    options: {
      en: ["Keeping your promises", "Lying", "Cheating", "Boasting", "Mocking others"],
      th: ["การรักษาสัญญา", "การโกหก", "การโกง", "การโอ้อวด", "การเยาะเย้ยผู้อื่น"],
    },
    correct: 0,
    explanation: { en: "Keeping promises is part of good akhlaq (character).", th: "การรักษาสัญญาเป็นส่วนหนึ่งของอัคลาก (จริยธรรมอันดี)" },
  },
  {
    id: "q_e6",
    topic: "ethics",
    question: { en: "A Muslim greets others by saying…", th: "มุสลิมทักทายผู้อื่นด้วยการกล่าวคำใด?" },
    options: {
      en: ["Assalamu alaikum", "Goodbye", "Cheers", "Nothing", "Good luck"],
      th: ["อัสสะลามุอะลัยกุม", "ลาก่อน", "ไชโย", "ไม่กล่าวอะไร", "โชคดี"],
    },
    correct: 0,
    explanation: { en: "Muslims greet with “Assalamu alaikum” — peace be upon you.", th: "มุสลิมทักทายด้วย “อัสสะลามุอะลัยกุม” ขอความสันติจงมีแด่ท่าน" },
  },

  // ── Daily life ─────────────────────────────────────────
  {
    id: "q_d1",
    topic: "dailylife",
    question: { en: "Which food is haram (forbidden)?", th: "อาหารใดเป็นฮะรอม (ต้องห้าม)?" },
    options: {
      en: ["Pork", "Dates", "Fish", "Rice", "Honey"],
      th: ["เนื้อสุกร", "อินทผลัม", "ปลา", "ข้าว", "น้ำผึ้ง"],
    },
    correct: 0,
    explanation: { en: "Pork is haram (forbidden) in Islam.", th: "เนื้อสุกรเป็นสิ่งต้องห้าม (ฮะรอม) ในอิสลาม" },
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
    explanation: { en: "Interest/usury is called riba and is forbidden.", th: "ดอกเบี้ยเรียกว่าริบา และเป็นสิ่งต้องห้าม" },
  },
  {
    id: "q_d3",
    topic: "dailylife",
    question: { en: "What is the most a man may marry, with full fairness?", th: "ผู้ชายมีภรรยาได้มากที่สุดกี่คน โดยให้ความยุติธรรม?" },
    options: { en: ["4", "2", "1", "3", "Unlimited"], th: ["4 คน", "2 คน", "1 คน", "3 คน", "ไม่จำกัด"] },
    correct: 0,
    explanation: {
      en: "A man may marry up to four wives, only if he can treat them with full fairness.",
      th: "ผู้ชายมีภรรยาได้ไม่เกิน 4 คน เฉพาะเมื่อให้ความยุติธรรมเท่าเทียมกันได้",
    },
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
    explanation: { en: "Halal means permitted by Allah.", th: "ฮาลาลหมายถึงสิ่งที่อัลลอฮทรงอนุมัติ" },
  },
  {
    id: "q_d5",
    topic: "dailylife",
    question: { en: "Which drink is forbidden (haram) in Islam?", th: "เครื่องดื่มใดเป็นสิ่งต้องห้าม (ฮะรอม) ในอิสลาม?" },
    options: {
      en: ["Alcohol", "Water", "Milk", "Tea", "Fruit juice"],
      th: ["เครื่องดื่มแอลกอฮอล์", "น้ำเปล่า", "นม", "ชา", "น้ำผลไม้"],
    },
    correct: 0,
    explanation: { en: "Alcohol and all intoxicants are haram in Islam.", th: "เครื่องดื่มแอลกอฮอล์และของมึนเมาทุกชนิดเป็นฮะรอมในอิสลาม" },
  },
  {
    id: "q_d6",
    topic: "dailylife",
    question: { en: "Meat becomes halal when the animal is…", th: "เนื้อสัตว์จะเป็นฮาลาลเมื่อสัตว์นั้น…" },
    options: {
      en: ["Slaughtered properly in Allah's name", "Found already dead", "Killed in any way", "Not slaughtered at all", "Only boiled"],
      th: ["ถูกเชือดอย่างถูกต้องในนามของอัลลอฮ", "พบว่าตายอยู่แล้ว", "ถูกฆ่าด้วยวิธีใดก็ได้", "ไม่ได้เชือดเลย", "แค่ต้มสุก"],
    },
    correct: 0,
    explanation: { en: "Meat is halal when the animal is slaughtered properly in Allah's name.", th: "เนื้อเป็นฮาลาลเมื่อสัตว์ถูกเชือดอย่างถูกต้องในนามของอัลลอฮ" },
  },
  {
    id: "q_d7",
    topic: "dailylife",
    question: { en: "A Muslim man must cover at least…", th: "ผู้ชายมุสลิมต้องปกปิดร่างกายอย่างน้อยส่วนใด?" },
    options: {
      en: ["From the navel to the knees", "Only the head", "The whole body", "Nothing", "Only the hands"],
      th: ["ตั้งแต่สะดือถึงหัวเข่า", "เฉพาะศีรษะ", "ทั้งร่างกาย", "ไม่ต้องปกปิด", "เฉพาะมือ"],
    },
    correct: 0,
    explanation: { en: "A man's minimum awrah to cover is from the navel to the knees.", th: "เอาเราะฮขั้นต่ำที่ผู้ชายต้องปกปิดคือตั้งแต่สะดือถึงหัวเข่า" },
  },
  {
    id: "q_d8",
    topic: "dailylife",
    question: { en: "Gambling in Islam is…", th: "การพนันในอิสลามเป็นสิ่งใด?" },
    options: {
      en: ["Forbidden (haram)", "Allowed", "Recommended", "A pillar", "Required"],
      th: ["สิ่งต้องห้าม (ฮะรอม)", "อนุญาต", "ส่งเสริมให้ทำ", "หลักปฏิบัติ", "สิ่งจำเป็น"],
    },
    correct: 0,
    explanation: { en: "Gambling (maysir) is forbidden in Islam.", th: "การพนัน (มัยสิร) เป็นสิ่งต้องห้ามในอิสลาม" },
  },
  {
    id: "q_d9",
    topic: "dailylife",
    question: { en: "What does a Muslim say before eating?", th: "ก่อนรับประทานอาหาร มุสลิมกล่าวคำใด?" },
    options: {
      en: ["Bismillah", "Alhamdulillah", "Ameen", "Allāhu Akbar", "Astaghfirullah"],
      th: ["บิสมิลลาฮ", "อัลฮัมดุลิลลาฮ", "อามีน", "อัลลอฮุอักบัร", "อัสตัฆฟิรุลลอฮ"],
    },
    correct: 0,
    explanation: { en: "A Muslim says “Bismillah” before eating and “Alhamdulillah” after.", th: "มุสลิมกล่าว “บิสมิลลาฮ” ก่อนกิน และ “อัลฮัมดุลิลลาฮ” หลังกิน" },
  },

  // ── Prophets & phrases ─────────────────────────────────
  {
    id: "q_hi1",
    topic: "history",
    question: { en: "How many prophets are named in the Quran?", th: "มีนบีที่ถูกระบุชื่อในกุรอานกี่ท่าน?" },
    options: { en: ["25", "124,000", "99", "114", "5"], th: ["25 ท่าน", "124,000 ท่าน", "99 ท่าน", "114 ท่าน", "5 ท่าน"] },
    correct: 0,
    explanation: { en: "124,000 prophets were sent in total; 25 are named in the Quran.", th: "มีนบีทั้งหมด 124,000 ท่าน และมีชื่อระบุในกุรอาน 25 ท่าน" },
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
    explanation: { en: "Prophet Ibrahim is called the father of the prophets; many later prophets descend from him.", th: "นบีอิบรอฮีมถูกเรียกว่าบิดาแห่งบรรดานบี เพราะนบีรุ่นหลังหลายท่านสืบเชื้อสายจากท่าน" },
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
    explanation: { en: "On the Isra' & Mi'raj the 5 daily prayers were ordained — reduced from 50 by Allah's mercy.", th: "ในคืนอิสรออ์ เมี๊ยะอุรอจญ์ การละหมาด 5 เวลาถูกกำหนดขึ้น (ลดจาก 50 ด้วยความเมตตาของอัลลอฮ)" },
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
    explanation: { en: "“Bismillahir-Rahmanir-Rahim” means “In the name of Allah, the Most Gracious, the Most Merciful”.", th: "“บิสมิลลาฮิรฺเราะฮฺมานิรฺเราะฮีม” หมายถึง “ด้วยพระนามของอัลลอฮ ผู้ทรงกรุณาปรานี ผู้ทรงเมตตาเสมอ”" },
  },
  {
    id: "q_hi5",
    topic: "history",
    question: { en: "What do Muslims say when someone passes away?", th: "เมื่อมีคนเสียชีวิต มุสลิมกล่าวว่าอย่างไร?" },
    options: {
      en: ["Inna lillahi wa inna ilayhi raji'un", "Assalamu alaikum", "Bismillah", "Alhamdulillah", "Ameen"],
      th: ["อินนาลิลลาฮิ วะอินนา อิลัยฮิรอญิอูน", "อัสสะลามุอะลัยกุม", "บิสมิลลาฮ", "อัลฮัมดุลิลลาฮ", "อามีน"],
    },
    correct: 0,
    explanation: { en: "On hearing of a death or calamity, Muslims say “Inna lillahi wa inna ilayhi raji'un”.", th: "เมื่อได้ข่าวการเสียชีวิตหรือเคราะห์ร้าย มุสลิมกล่าว “อินนาลิลลาฮิ วะอินนา อิลัยฮิรอญิอูน”" },
  },
  {
    id: "q_hi6",
    topic: "history",
    question: { en: "Which prophet built the Kaaba with his son Ismail?", th: "นบีท่านใดสร้างกะอบะฮร่วมกับนบีอิสมาอีลผู้เป็นบุตร?" },
    options: {
      en: ["Prophet Ibrahim", "Prophet Musa", "Prophet Nuh", "Prophet Isa", "Prophet Adam"],
      th: ["นบีอิบรอฮีม", "นบีมูซา", "นบีนูฮ", "นบีอีซา", "นบีอาดัม"],
    },
    correct: 0,
    explanation: { en: "Prophet Ibrahim built the Kaaba together with his son Ismail.", th: "นบีอิบรอฮีมสร้างกะอบะฮร่วมกับนบีอิสมาอีลผู้เป็นบุตร" },
  },
  {
    id: "q_hi7",
    topic: "history",
    question: { en: "Which prophet is known for the great flood and the ark?", th: "นบีท่านใดที่เกี่ยวข้องกับเหตุการณ์น้ำท่วมใหญ่และเรือ?" },
    options: {
      en: ["Prophet Nuh (Noah)", "Prophet Musa", "Prophet Yusuf", "Prophet Dawud", "Prophet Sulaiman"],
      th: ["นบีนูฮ", "นบีมูซา", "นบียูซุฟ", "นบีดาวูด", "นบีสุลัยมาน"],
    },
    correct: 0,
    explanation: { en: "Prophet Nuh (Noah) built the ark and was saved from the great flood.", th: "นบีนูฮสร้างเรือและรอดจากเหตุการณ์น้ำท่วมใหญ่" },
  },
  {
    id: "q_hi8",
    topic: "history",
    question: { en: "In Islam, Prophet Isa (Jesus) is…", th: "ในอิสลาม นบีอีซา (เยซู) คือ…" },
    options: {
      en: ["A prophet and messenger of Allah", "The son of God", "God himself", "An angel", "A king"],
      th: ["นบีและศาสนทูตของอัลลอฮ", "บุตรของพระเจ้า", "พระเจ้าเอง", "มลาอิกะฮ", "กษัตริย์"],
    },
    correct: 0,
    explanation: { en: "In Islam, Isa (Jesus) is a great prophet and messenger of Allah — not divine.", th: "ในอิสลาม อีซา (เยซู) เป็นนบีและศาสนทูตผู้ยิ่งใหญ่ของอัลลอฮ ไม่ใช่พระเจ้า" },
  },
  {
    id: "q_hi9",
    topic: "history",
    question: { en: "In which city was Prophet Muhammad ﷺ born?", th: "นบีมุฮัมมัดประสูติที่เมืองใด?" },
    options: {
      en: ["Makkah", "Madinah", "Jerusalem", "Taif", "Cairo"],
      th: ["มักกะฮ", "มะดีนะฮ", "เยรูซาเล็ม", "ฏออิฟ", "ไคโร"],
    },
    correct: 0,
    explanation: { en: "Prophet Muhammad ﷺ was born in the city of Makkah.", th: "นบีมุฮัมมัดประสูติที่นครมักกะฮ" },
  },
  {
    id: "q_hi10",
    topic: "history",
    question: { en: "What is said to express gratitude or on hearing good news?", th: "กล่าวคำใดเพื่อแสดงความขอบคุณหรือเมื่อได้ข่าวดี?" },
    options: {
      en: ["Alhamdulillah", "Astaghfirullah", "Bismillah", "Ameen", "Insha'Allah"],
      th: ["อัลฮัมดุลิลลาฮ", "อัสตัฆฟิรุลลอฮ", "บิสมิลลาฮ", "อามีน", "อินชาอัลลอฮ"],
    },
    correct: 0,
    explanation: { en: "“Alhamdulillah” (all praise is for Allah) is said to give thanks or on good news.", th: "“อัลฮัมดุลิลลาฮ” (การสรรเสริญเป็นของอัลลอฮ) กล่าวเพื่อขอบคุณหรือเมื่อได้ข่าวดี" },
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
  fromPool: { en: "random from", th: "สุ่มจาก" },
  best: { en: "Best", th: "ดีที่สุด" },
  start: { en: "Start quiz", th: "เริ่มทำ" },
  question: { en: "Question", th: "ข้อที่" },
  score: { en: "Score", th: "คะแนน" },
  correct: { en: "Correct!", th: "ถูกต้อง!" },
  wrong: { en: "Not quite", th: "ยังไม่ถูก" },
  why: { en: "Why", th: "คำอธิบาย" },
  nextQ: { en: "Next question", th: "ข้อถัดไป" },
  seeResult: { en: "See result", th: "ดูผล" },
  yourScore: { en: "Your score", th: "คะแนนของคุณ" },
  tryAgain: { en: "Try again", th: "ลองอีกครั้ง" },
  backToTopics: { en: "Back to quizzes", th: "กลับไปเลือกแบบทดสอบ" },
  perfect: { en: "Perfect! Masha'Allah 🎉", th: "เต็ม! มาชาอัลลอฮ 🎉" },
  great: { en: "Great work!", th: "เยี่ยมมาก!" },
  keepGoing: { en: "Keep practicing 💪", th: "ฝึกต่อไปนะ 💪" },
} as const;
