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

  // ── Core Beliefs (Aqidah) ──────────────────────────────
  {
    id: "q_cr1",
    topic: "creed",
    question: { en: "What does “Tawhid” mean?", th: "“เตาฮีด” หมายถึงอะไร?" },
    options: {
      en: ["Sincere worship of the one God alone", "Reciting the Quran daily", "Performing Hajj yearly", "Respecting one's teachers", "Giving charity"],
      th: ["การเคารพภักดีพระเจ้าองค์เดียวอย่างบริสุทธิ์ใจ", "การอ่านกุรอานทุกวัน", "การทำฮัจญ์ทุกปี", "การเคารพครูบาอาจารย์", "การบริจาคทาน"],
    },
    correct: 0,
    explanation: { en: "Tawhid is the heart of Islam — believing in and worshipping Allah alone, with no partners.", th: "เตาฮีดคือหัวใจของอิสลาม การศรัทธาและเคารพภักดีอัลลอฮเพียงองค์เดียว โดยไม่มีภาคี" },
  },
  {
    id: "q_cr2",
    topic: "creed",
    question: { en: "What is Shirk?", th: "ชิริกคืออะไร?" },
    options: {
      en: ["Associating partners with Allah", "Lying on purpose", "Missing zakat", "Insulting others", "Breaking a promise"],
      th: ["การตั้งภาคีต่ออัลลอฮ", "การโกหกโดยเจตนา", "การละเลยซะกาต", "การด่าทอผู้อื่น", "การผิดสัญญา"],
    },
    correct: 0,
    explanation: { en: "Shirk — associating partners with Allah — is the gravest sin in Islam.", th: "ชิริก การตั้งภาคีต่ออัลลอฮ เป็นบาปใหญ่ที่สุดในอิสลาม" },
  },
  {
    id: "q_cr3",
    topic: "creed",
    question: { en: "The Day of Resurrection is called…", th: "วันแห่งการฟื้นคืนชีพเรียกว่าอะไร?" },
    options: {
      en: ["Yawmul Qiyamah", "Yawmul Jumu'ah", "Yawmul Arafah", "Yawmul Hijrah", "Laylatul Qadr"],
      th: ["เยามุลกิยามะฮ", "เยามุลญุมอะฮ", "เยามุลอาเราะฟะฮ", "เยามุลฮิจเราะฮ", "ลัยละตุลก็อดร์"],
    },
    correct: 0,
    explanation: { en: "Yawmul Qiyamah is the Day of Resurrection — the Last Day.", th: "เยามุลกิยามะฮ คือวันฟื้นคืนชีพหรือวันสิ้นโลก" },
  },
  {
    id: "q_cr4",
    topic: "creed",
    question: { en: "The realm of the grave before the Last Day is called…", th: "แดนของหลุมฝังศพก่อนถึงวันสิ้นโลกเรียกว่าอะไร?" },
    options: {
      en: ["Barzakh", "Akhirah", "Mahshar", "Sirat", "Jannah"],
      th: ["บัรซัค", "อาคิเราะฮ", "มะฮ์ชัร", "ศิรอต", "ญันนะฮ"],
    },
    correct: 0,
    explanation: { en: "Barzakh is the realm of the souls in the grave, between this life and the resurrection.", th: "บัรซัคคือโลกแห่งดวงวิญญาณในหลุมศพ คั่นระหว่างโลกนี้กับการฟื้นคืนชีพ" },
  },
  {
    id: "q_cr5",
    topic: "creed",
    question: { en: "How many beautiful names (Al-Asma'ul-Husna) does Allah have?", th: "อัลลอฮทรงมีพระนามอันวิจิตร (อัลอัสมาอุลฮุสนา) กี่พระนาม?" },
    options: { en: ["99", "33", "66", "100", "40"], th: ["99", "33", "66", "100", "40"] },
    correct: 0,
    explanation: { en: "Allah has 99 beautiful names — Al-Asma'ul-Husna.", th: "อัลลอฮทรงมีพระนามอันงดงาม 99 พระนาม เรียกว่าอัลอัสมาอุลฮุสนา" },
  },
  {
    id: "q_cr6",
    topic: "creed",
    question: { en: "Which angels record our good and bad deeds?", th: "มลาอิกะฮองค์ใดบันทึกความดีและความชั่วของมนุษย์?" },
    options: {
      en: ["Raqib and Atid", "Munkar and Nakir", "Israfil and Mikail", "Ridwan and Malik", "Jibril and Israfil"],
      th: ["รอกีบ และ อะตีด", "มุงกัร และ นกีร", "อิสรอฟีล และ มีกาอีล", "ริฎวาน และ มะลิก", "ญิบรีล และ อิสรอฟีล"],
    },
    correct: 0,
    explanation: { en: "Raqib records good deeds and Atid records bad deeds.", th: "รอกีบบันทึกความดี และอะตีดบันทึกความชั่ว" },
  },
  {
    id: "q_cr7",
    topic: "creed",
    question: { en: "Which angel blows the trumpet on the Last Day?", th: "มลาอิกะฮองค์ใดเป่าแตรสังข์ในวันสิ้นโลก?" },
    options: {
      en: ["Israfil", "Jibril", "Mikail", "Malik", "Ridwan"],
      th: ["อิสรอฟีล", "ญิบรีล", "มีกาอีล", "มะลิก", "ริฎวาน"],
    },
    correct: 0,
    explanation: { en: "Israfil blows the trumpet — once to end the world, and again for the resurrection.", th: "อิสรอฟีลเป่าแตร ครั้งแรกเพื่อจบสิ้นโลก และครั้งที่สองเพื่อการฟื้นคืนชีพ" },
  },
  {
    id: "q_cr8",
    topic: "creed",
    question: { en: "The vast plain where all people gather for judgment is called…", th: "ลานกว้างที่มนุษย์ทุกคนมาชุมนุมเพื่อรับการพิพากษาเรียกว่าอะไร?" },
    options: {
      en: ["Mahshar", "Arafah", "Mina", "Barzakh", "Sirat"],
      th: ["ทุ่งมะฮ์ชัร", "ทุ่งอาเราะฟะฮ", "เขามินา", "บัรซัค", "ศิรอต"],
    },
    correct: 0,
    explanation: { en: "Mahshar is where all people, from first to last, gather to be judged.", th: "ทุ่งมะฮ์ชัรคือที่ชุมนุมมนุษย์ทุกคนตั้งแต่คนแรกถึงคนสุดท้ายเพื่อรับการชำระบัญชี" },
  },
  {
    id: "q_cr9",
    topic: "creed",
    question: { en: "The bridge over Hell that everyone must cross is called…", th: "สะพานที่พาดผ่านนรกซึ่งทุกคนต้องเดินข้ามเรียกว่าอะไร?" },
    options: {
      en: ["As-Sirat", "Al-Kawthar", "Al-Mizan", "Al-Hawd", "Al-Arsh"],
      th: ["อัศศิรอต", "อัลเกาษัร", "อัลมีซาน", "อัลเฮาฎ", "อัลอัรช์"],
    },
    correct: 0,
    explanation: { en: "As-Sirat is the bridge over Hell that everyone crosses on the Last Day.", th: "อัศศิรอตคือสะพานที่ทุกคนต้องเดินข้ามในวันสิ้นโลก" },
  },
  {
    id: "q_cr10",
    topic: "creed",
    question: { en: "Worshipping Allah as if you can see Him is the level of…", th: "การเคารพภักดีอัลลอฮเสมือนว่าเห็นพระองค์ คือระดับใด?" },
    options: {
      en: ["Ihsan", "Islam", "Iman", "Taqwa", "Tawakkul"],
      th: ["อิห์ซาน", "อิสลาม", "อีมาน", "ตักวา", "ตะวักกุล"],
    },
    correct: 0,
    explanation: { en: "Ihsan is the highest level — to worship Allah as if you see Him, knowing He sees you.", th: "อิห์ซานคือระดับสูงสุด การเคารพภักดีอัลลอฮเสมือนเห็นพระองค์ โดยรู้ว่าพระองค์ทรงเห็นเรา" },
  },

  // ── Life of the Prophet ﷺ (Seerah) ─────────────────────
  {
    id: "q_se1",
    topic: "seerah",
    question: { en: "What did the title “Al-Amin” given to the Prophet ﷺ mean?", th: "ฉายา “อัลอะมีน” ของท่านนบีหมายถึงอะไร?" },
    options: {
      en: ["The trustworthy", "The brave", "The wealthy", "The wise", "The strong"],
      th: ["ผู้ซื่อสัตย์ไว้วางใจได้", "ผู้กล้าหาญ", "ผู้ร่ำรวย", "ผู้มีปัญญา", "ผู้แข็งแกร่ง"],
    },
    correct: 0,
    explanation: { en: "Even before prophethood, Muhammad ﷺ was known as Al-Amin — the trustworthy.", th: "ก่อนการเป็นนบี ท่านมุฮัมมัดเป็นที่รู้จักในนาม อัลอะมีน ผู้ซื่อสัตย์ไว้วางใจได้" },
  },
  {
    id: "q_se2",
    topic: "seerah",
    question: { en: "Where did the Prophet ﷺ receive the first revelation?", th: "ท่านนบีได้รับโองการครั้งแรกที่ใด?" },
    options: {
      en: ["The cave of Hira", "The cave of Thawr", "The courtyard of the Kaaba", "The Prophet's Mosque", "Mount Arafah"],
      th: ["ถ้ำฮิรออ์", "ถ้ำษูร", "ลานกะอบะฮ", "มัสยิดนบี", "ภูเขาอารอฟะฮ"],
    },
    correct: 0,
    explanation: { en: "The first revelation came in the cave of Hira on the Mountain of Light.", th: "โองการแรกลงมา ณ ถ้ำฮิรออ์ บนภูเขานูร" },
  },
  {
    id: "q_se3",
    topic: "seerah",
    question: { en: "What was the first word of the Quran revealed?", th: "คำแรกของอัลกุรอานที่ถูกประทานคือคำใด?" },
    options: {
      en: ["Iqra (Read!)", "Bismillah", "Alhamdulillah", "Qul", "Ameen"],
      th: ["อิกเราะอ์ (จงอ่าน)", "บิสมิลลาฮ", "อัลฮัมดุลิลลาฮ", "กุล", "อามีน"],
    },
    correct: 0,
    explanation: { en: "The very first word revealed was “Iqra” — “Read!”", th: "คำแรกสุดที่ถูกประทานคือ “อิกเราะอ์” — “จงอ่าน”" },
  },
  {
    id: "q_se4",
    topic: "seerah",
    question: { en: "Who was the Prophet's first wife and the first person to accept Islam?", th: "ภรรยาคนแรกและผู้รับอิสลามคนแรกคือใคร?" },
    options: {
      en: ["Khadijah", "Aishah", "Fatimah", "Maryam", "Zaynab"],
      th: ["นางเคาะดีญะฮ", "นางอาอิชะฮ", "นางฟาฏิมะฮ", "นางมารียัม", "นางซัยนับ"],
    },
    correct: 0,
    explanation: { en: "Khadijah bint Khuwaylid was his first wife and the first to believe.", th: "นางเคาะดีญะฮ บินติ คุวัยลิด เป็นภรรยาคนแรกและผู้ศรัทธาคนแรก" },
  },
  {
    id: "q_se5",
    topic: "seerah",
    question: { en: "What is the migration from Makkah to Madinah called?", th: "การอพยพจากมักกะฮไปมะดีนะฮเรียกว่าอะไร?" },
    options: {
      en: ["Hijrah", "Isra' & Mi'raj", "Fath Makkah", "Bay'ah", "Tawaf"],
      th: ["ฮิจเราะฮ", "อิสรออ์ เมี๊ยะอุรอจญ์", "ฟัตฮุมักกะฮ", "บัยอะฮ", "เฏาะวาฟ"],
    },
    correct: 0,
    explanation: { en: "The Hijrah marks the start of the Islamic calendar.", th: "ฮิจเราะฮเป็นจุดเริ่มต้นของปฏิทินอิสลาม" },
  },
  {
    id: "q_se6",
    topic: "seerah",
    question: { en: "The migrants from Makkah and the “helpers” of Madinah were called…", th: "ผู้อพยพจากมักกะฮ และ “ผู้ช่วยเหลือ” ชาวมะดีนะฮเรียกว่ากลุ่มใด?" },
    options: {
      en: ["Muhajirin and Ansar", "Quraysh and Yahud", "Aws and Khazraj", "Sahabah and Tabi'in", "Muhajirin and Quraysh"],
      th: ["มุฮาญิรีน และ อันศอร", "กุเรช และ ยะฮูดี", "เอาส์ และ ค็อซร็อจญ์", "ศ่อฮาบะฮ และ ตาบิอีน", "มุฮาญิรีน และ กุเรช"],
    },
    correct: 0,
    explanation: { en: "Muhajirin migrated from Makkah; the Ansar of Madinah welcomed them.", th: "มุฮาญิรีนคือผู้อพยพจากมักกะฮ อันศอรชาวมะดีนะฮคือผู้ต้อนรับพวกเขา" },
  },
  {
    id: "q_se7",
    topic: "seerah",
    question: { en: "What was the first battle between the Muslims and the Makkans?", th: "สงครามครั้งแรกระหว่างมุสลิมกับชาวมักกะฮคือสงครามใด?" },
    options: {
      en: ["Badr", "Uhud", "Khandaq", "Hunayn", "Tabuk"],
      th: ["บัดร์", "อุฮุด", "คอนดัก", "ฮุนัยน์", "ตะบูก"],
    },
    correct: 0,
    explanation: { en: "The Battle of Badr was the first major battle, and a great victory for the Muslims.", th: "สงครามบัดร์เป็นสงครามใหญ่ครั้งแรก และเป็นชัยชนะยิ่งใหญ่ของมุสลิม" },
  },
  {
    id: "q_se8",
    topic: "seerah",
    question: { en: "The peaceful conquest of Makkah, without bloodshed, is called…", th: "การพิชิตมักกะฮอย่างสันติโดยไม่นองเลือดเรียกว่าอะไร?" },
    options: {
      en: ["Fath Makkah", "Hijrah", "Hudaybiyyah", "Badr", "Isra'"],
      th: ["ฟัตฮุมักกะฮ", "ฮิจเราะฮ", "ฮุดัยบียะฮ", "บัดร์", "อิสรออ์"],
    },
    correct: 0,
    explanation: { en: "Fath Makkah — the Prophet ﷺ entered Makkah without bloodshed.", th: "ฟัตฮุมักกะฮ ท่านนบีเข้าสู่มักกะฮโดยปราศจากการนองเลือด" },
  },
  {
    id: "q_se9",
    topic: "seerah",
    question: { en: "At what age did the Prophet ﷺ pass away?", th: "ท่านนบีสิ้นชีวิตเมื่ออายุเท่าใด?" },
    options: { en: ["63", "60", "65", "70", "50"], th: ["63 ปี", "60 ปี", "65 ปี", "70 ปี", "50 ปี"] },
    correct: 0,
    explanation: { en: "The Prophet ﷺ passed away at age 63, in Madinah.", th: "ท่านนบีสิ้นชีวิตเมื่ออายุ 63 ปี ที่เมืองมะดีนะฮ" },
  },
  {
    id: "q_se10",
    topic: "seerah",
    question: { en: "Who was the first caliph after the Prophet ﷺ?", th: "ผู้นำ (เคาะลีฟะฮ) คนแรกหลังท่านนบีคือใคร?" },
    options: {
      en: ["Abu Bakr as-Siddiq", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib", "Khalid ibn al-Walid"],
      th: ["อบูบักร อัศศิดดีก", "อุมัร อิบนุ อัลค็อฏฏอบ", "อุสมาน อิบนุ อัฟฟาน", "อาลี อิบนุ อบีฏอลิบ", "คอลิด อิบนุ อัลวะลีด"],
    },
    correct: 0,
    explanation: { en: "Abu Bakr as-Siddiq was the first caliph after the Prophet ﷺ.", th: "อบูบักร อัศศิดดีก เป็นเคาะลีฟะฮคนแรกหลังท่านนบี" },
  },

  // ── Stories of the Prophets ────────────────────────────
  {
    id: "q_ps1",
    topic: "prophets-stories",
    question: { en: "Who was the wife of Prophet Adam, the first woman?", th: "คู่ครองของนบีอาดัม ผู้เป็นสตรีคนแรกคือใคร?" },
    options: {
      en: ["Hawwa (Eve)", "Maryam", "Khadijah", "Aishah", "Sarah"],
      th: ["นางฮาวา (อีฟ)", "นางมารียัม", "นางเคาะดีญะฮ", "นางอาอิชะฮ", "นางซาเราะฮ"],
    },
    correct: 0,
    explanation: { en: "Hawwa (Eve) was the wife of Adam and the first woman.", th: "นางฮาวา (อีฟ) เป็นคู่ครองของนบีอาดัมและสตรีคนแรก" },
  },
  {
    id: "q_ps2",
    topic: "prophets-stories",
    question: { en: "Who refused, out of arrogance, to prostrate to Adam?", th: "ผู้ใดปฏิเสธการคารวะต่ออาดัมด้วยความเย่อหยิ่ง?" },
    options: {
      en: ["Iblis", "Jibril", "Mikail", "Israfil", "Malik"],
      th: ["อิบลีส", "ญิบรีล", "มีกาอีล", "อิสรอฟีล", "มะลิก"],
    },
    correct: 0,
    explanation: { en: "Iblis (Satan) arrogantly refused Allah's command to prostrate to Adam.", th: "อิบลีส (มารร้าย) ปฏิเสธคำสั่งของอัลลอฮในการคารวะต่ออาดัมด้วยความเย่อหยิ่ง" },
  },
  {
    id: "q_ps3",
    topic: "prophets-stories",
    question: { en: "Which prophet built a great ark to survive the flood?", th: "นบีท่านใดสร้างเรือใหญ่เพื่อรอดจากน้ำท่วมโลก?" },
    options: {
      en: ["Nuh (Noah)", "Ibrahim", "Yusuf", "Adam", "Musa"],
      th: ["นูฮ (โนอาห์)", "อิบรอฮีม", "ยูซุฟ", "อาดัม", "มูซา"],
    },
    correct: 0,
    explanation: { en: "Prophet Nuh built the ark and was saved from the great flood.", th: "นบีนูฮสร้างเรือและรอดจากน้ำท่วมใหญ่" },
  },
  {
    id: "q_ps4",
    topic: "prophets-stories",
    question: { en: "Which prophet parted the Red Sea to escape Pharaoh?", th: "นบีท่านใดแหวกทะเลแดงเพื่อหนีฟาโรห์?" },
    options: {
      en: ["Musa (Moses)", "Isa", "Yunus", "Dawud", "Sulaiman"],
      th: ["มูซา (โมเสส)", "อีซา", "ยูนุส", "ดาวูด", "สุลัยมาน"],
    },
    correct: 0,
    explanation: { en: "Prophet Musa parted the Red Sea to save the Children of Israel from Pharaoh.", th: "นบีมูซาแหวกทะเลแดงเพื่อพาวงศ์วานอิสราเอลรอดพ้นจากฟาโรห์" },
  },
  {
    id: "q_ps5",
    topic: "prophets-stories",
    question: { en: "Which prophet was thrown into a well and later became a minister in Egypt?", th: "นบีท่านใดถูกโยนลงบ่อน้ำ แล้วต่อมาเป็นเสนาบดีแห่งอียิปต์?" },
    options: {
      en: ["Yusuf (Joseph)", "Yaqub", "Ishaq", "Musa", "Harun"],
      th: ["ยูซุฟ (โจเซฟ)", "ยะอ์กูบ", "อิสฮาก", "มูซา", "ฮารูน"],
    },
    correct: 0,
    explanation: { en: "Prophet Yusuf was thrown into a well by his brothers and rose to become a minister of Egypt.", th: "นบียูซุฟถูกพี่ชายโยนลงบ่อน้ำ และได้กลายเป็นเสนาบดีคลังแห่งอียิปต์" },
  },
  {
    id: "q_ps6",
    topic: "prophets-stories",
    question: { en: "Which prophet was swallowed by a great fish?", th: "นบีท่านใดถูกขังอยู่ในท้องปลาใหญ่?" },
    options: {
      en: ["Yunus (Jonah)", "Ayyub", "Yusuf", "Idris", "Salih"],
      th: ["ยูนุส (โยนาห์)", "อัยยูบ", "ยูซุฟ", "อิดรีส", "ศอลิห์"],
    },
    correct: 0,
    explanation: { en: "Prophet Yunus was kept in the belly of a great fish before Allah rescued him.", th: "นบียูนุสถูกขังในท้องปลาใหญ่ก่อนที่อัลลอฮจะทรงช่วยเหลือ" },
  },
  {
    id: "q_ps7",
    topic: "prophets-stories",
    question: { en: "Which prophet could understand animals and ruled over the jinn?", th: "นบีท่านใดฟังภาษาสัตว์ได้และปกครองมวลญิน?" },
    options: {
      en: ["Sulaiman (Solomon)", "Dawud", "Yusuf", "Yunus", "Ayyub"],
      th: ["สุลัยมาน (โซโลมอน)", "ดาวูด", "ยูซุฟ", "ยูนุส", "อัยยูบ"],
    },
    correct: 0,
    explanation: { en: "Prophet Sulaiman was given power to understand animals and command the jinn.", th: "นบีสุลัยมานได้รับความสามารถในการฟังภาษาสัตว์และปกครองมวลญิน" },
  },
  {
    id: "q_ps8",
    topic: "prophets-stories",
    question: { en: "Who was the pure mother of Prophet Isa (Jesus)?", th: "มารดาผู้บริสุทธิ์ของนบีอีซา (เยซู) คือใคร?" },
    options: {
      en: ["Maryam (Mary)", "Asiyah", "Khadijah", "Sarah", "Hawwa"],
      th: ["นางมารียัม (แมรี่)", "นางอาสิยะฮ", "นางเคาะดีญะฮ", "นางซาเราะฮ", "นางฮาวา"],
    },
    correct: 0,
    explanation: { en: "Maryam (Mary) is honored in the Quran as the pure mother of Prophet Isa.", th: "นางมารียัม (แมรี่) ได้รับการยกย่องในกุรอานว่าเป็นมารดาผู้บริสุทธิ์ของนบีอีซา" },
  },
  {
    id: "q_ps9",
    topic: "prophets-stories",
    question: { en: "Who first built the Kaaba?", th: "ใครเป็นผู้สร้างกะอบะฮครั้งแรก?" },
    options: {
      en: ["Ibrahim and Ismail", "Musa and Harun", "Dawud and Sulaiman", "Adam and Nuh", "Muhammad ﷺ and Ali"],
      th: ["อิบรอฮีม และ อิสมาอีล", "มูซา และ ฮารูน", "ดาวูด และ สุลัยมาน", "อาดัม และ นูฮ", "มุฮัมมัด และ อาลี"],
    },
    correct: 0,
    explanation: { en: "Prophets Ibrahim and his son Ismail first built the Kaaba.", th: "นบีอิบรอฮีมและนบีอิสมาอีลผู้เป็นบุตรเป็นผู้สร้างกะอบะฮครั้งแรก" },
  },
  {
    id: "q_ps10",
    topic: "prophets-stories",
    question: { en: "Who is called the “father of the prophets”?", th: "ใครได้ชื่อว่าเป็น “บิดาแห่งบรรดาศาสดา”?" },
    options: {
      en: ["Ibrahim", "Adam", "Musa", "Isa", "Nuh"],
      th: ["อิบรอฮีม", "อาดัม", "มูซา", "อีซา", "นูฮ"],
    },
    correct: 0,
    explanation: { en: "Prophet Ibrahim is called the father of the prophets.", th: "นบีอิบรอฮีมได้ชื่อว่าเป็นบิดาแห่งบรรดาศาสดา" },
  },

  // ── Manners & Etiquette (Adab) ─────────────────────────
  {
    id: "q_ad1",
    topic: "adab",
    question: { en: "Following the Sunnah, a Muslim should eat with…", th: "ตามซุนนะฮ มุสลิมควรรับประทานอาหารด้วย…" },
    options: {
      en: ["The right hand, saying Bismillah", "The left hand", "Both hands while standing", "A spoon only", "The left hand, saying Ameen"],
      th: ["มือขวา พร้อมกล่าวบิสมิลลาฮ", "มือซ้าย", "สองมือขณะยืน", "ใช้ช้อนเท่านั้น", "มือซ้าย พร้อมกล่าวอามีน"],
    },
    correct: 0,
    explanation: { en: "Eat with the right hand, starting with “Bismillah” and ending with “Alhamdulillah”.", th: "รับประทานด้วยมือขวา เริ่มด้วย “บิสมิลลาฮ” และจบด้วย “อัลฮัมดุลิลลาฮ”" },
  },
  {
    id: "q_ad2",
    topic: "adab",
    question: { en: "What do you say after finishing a meal?", th: "หลังรับประทานอาหารเสร็จ ควรกล่าวคำใด?" },
    options: {
      en: ["Alhamdulillah", "Bismillah", "Astaghfirullah", "Allāhu Akbar", "Ameen"],
      th: ["อัลฮัมดุลิลลาฮ", "บิสมิลลาฮ", "อัสตัฆฟิรุลลอฮ", "อัลลอฮุอักบัร", "อามีน"],
    },
    correct: 0,
    explanation: { en: "“Alhamdulillah” (all praise is for Allah) is said to thank Allah after eating.", th: "กล่าว “อัลฮัมดุลิลลาฮ” เพื่อขอบคุณอัลลอฮหลังรับประทานอาหาร" },
  },
  {
    id: "q_ad3",
    topic: "adab",
    question: { en: "When someone sneezes and says “Alhamdulillah”, the listener replies…", th: "เมื่อผู้จามกล่าว “อัลฮัมดุลิลลาฮ” ผู้ได้ยินตอบว่า…" },
    options: {
      en: ["Yarhamukallah", "Alhamdulillah", "Assalamu alaikum", "Bismillah", "Ameen"],
      th: ["ยัรฮะมุกัลลอฮ", "อัลฮัมดุลิลลาฮ", "อัสสะลามุอะลัยกุม", "บิสมิลลาฮ", "อามีน"],
    },
    correct: 0,
    explanation: { en: "The listener replies “Yarhamukallah” — may Allah have mercy on you.", th: "ผู้ได้ยินตอบ “ยัรฮะมุกัลลอฮ” — ขออัลลอฮทรงเมตตาท่าน" },
  },
  {
    id: "q_ad4",
    topic: "adab",
    question: { en: "In the Quran, backbiting (ghibah) is compared to…", th: "ในกุรอาน การนินทา (ฆีบะฮ) ถูกเปรียบเทียบกับสิ่งใด?" },
    options: {
      en: ["Eating the flesh of your dead brother", "Stealing money", "Drinking alcohol", "Breaking a promise", "Missing prayer"],
      th: ["การกินเนื้อพี่น้องของตนที่ตายแล้ว", "การขโมยทรัพย์", "การดื่มสุรา", "การผิดสัญญา", "การขาดละหมาด"],
    },
    correct: 0,
    explanation: { en: "The Quran likens backbiting to eating the flesh of one's dead brother — it is forbidden.", th: "กุรอานเปรียบการนินทาเหมือนการกินเนื้อพี่น้องที่ตายแล้ว เป็นสิ่งต้องห้าม" },
  },
  {
    id: "q_ad5",
    topic: "adab",
    question: { en: "Smiling at your brother is rewarded like…", th: "การยิ้มให้พี่น้องมีผลบุญเทียบเท่าสิ่งใด?" },
    options: {
      en: ["Giving charity (sadaqah)", "Praying 100 rak'ah", "Fasting a day", "Performing Umrah", "Reading the whole Quran"],
      th: ["การบริจาคทาน (ศอดะเกาะฮ)", "การละหมาด 100 รอกะอัต", "การถือศีลอด 1 วัน", "การทำอุมเราะฮ", "การอ่านกุรอานจบเล่ม"],
    },
    correct: 0,
    explanation: { en: "The Prophet ﷺ taught that smiling at your brother is a charity (sadaqah).", th: "ท่านนบีสอนว่าการยิ้มให้พี่น้องเป็นการบริจาคทาน (ศอดะเกาะฮ)" },
  },
  {
    id: "q_ad6",
    topic: "adab",
    question: { en: "What is said when you hear the Prophet's ﷺ name?", th: "เมื่อได้ยินพระนามของท่านนบี ควรกล่าวคำใด?" },
    options: {
      en: ["Sallallahu alayhi wa sallam", "Alhamdulillah", "Astaghfirullah", "Subhanallah", "Ameen"],
      th: ["ศ็อลลัลลอฮุ อะลัยฮิ วะซัลลัม", "อัลฮัมดุลิลลาฮ", "อัสตัฆฟิรุลลอฮ", "ซุบฮานัลลอฮ", "อามีน"],
    },
    correct: 0,
    explanation: { en: "“Sallallahu alayhi wa sallam” — may Allah's blessings and peace be upon him.", th: "“ศ็อลลัลลอฮุ อะลัยฮิ วะซัลลัม” — ขออัลลอฮทรงอำนวยพรและความสันติแก่ท่าน" },
  },
  {
    id: "q_ad7",
    topic: "adab",
    question: { en: "What is Islamic marriage called?", th: "การแต่งงานในอิสลามเรียกว่าอะไร?" },
    options: {
      en: ["Nikah", "Walimah", "Talaq", "Faskh", "Mahar"],
      th: ["นิกาห์", "วะลีมะฮ", "ตอลาก", "ฟะซัค", "มะฮัร"],
    },
    correct: 0,
    explanation: { en: "Nikah is the Islamic marriage contract.", th: "นิกาห์คือการสมรสตามหลักอิสลาม" },
  },
  {
    id: "q_ad8",
    topic: "adab",
    question: { en: "The gift the groom gives the bride, which becomes her own right, is called…", th: "ของขวัญที่ฝ่ายชายมอบให้ฝ่ายหญิงและเป็นสิทธิ์ของเธอ เรียกว่าอะไร?" },
    options: {
      en: ["Mahar", "Riba", "Zakat", "Sadaqah", "Walimah"],
      th: ["มะฮัร", "ริบา", "ซะกาต", "เศาะดะเกาะฮ", "วะลีมะฮ"],
    },
    correct: 0,
    explanation: { en: "The mahar (dowry) is the bride's own right, given by the groom.", th: "มะฮัร (สินสอด) เป็นสิทธิ์ของฝ่ายหญิง มอบให้โดยฝ่ายชาย" },
  },
  {
    id: "q_ad9",
    topic: "adab",
    question: { en: "How does sadaqah differ from zakat?", th: "ศอดะเกาะฮต่างจากซะกาตอย่างไร?" },
    options: {
      en: ["Sadaqah is voluntary; zakat is obligatory", "Sadaqah is obligatory; zakat is voluntary", "They are exactly the same", "Sadaqah is only for family", "Zakat is only given in Ramadan"],
      th: ["ศอดะเกาะฮสมัครใจ ส่วนซะกาตบังคับ", "ศอดะเกาะฮบังคับ ส่วนซะกาตสมัครใจ", "ทั้งสองเหมือนกันทุกประการ", "ศอดะเกาะฮให้เฉพาะครอบครัว", "ซะกาตจ่ายเฉพาะในรอมฎอน"],
    },
    correct: 0,
    explanation: { en: "Sadaqah is voluntary charity given any time; zakat is obligatory at a set rate.", th: "ศอดะเกาะฮเป็นทานสมัครใจทำเมื่อใดก็ได้ ส่วนซะกาตเป็นทานบังคับตามอัตราที่กำหนด" },
  },
  {
    id: "q_ad10",
    topic: "adab",
    question: { en: "A handshake greeting (musafahah) is allowed with…", th: "การสัมผัสมือทักทาย (มูซอฟาฮะฮ) อนุญาตให้ทำกับใคร?" },
    options: {
      en: ["The same gender, or a mahram relative", "Anyone of the opposite gender", "Only strangers", "Only coworkers", "No one at all"],
      th: ["เพศเดียวกัน หรือญาติมะฮ์รอม", "เพศตรงข้ามทุกคน", "เฉพาะคนแปลกหน้า", "เฉพาะเพื่อนร่วมงาน", "ไม่ได้กับใครเลย"],
    },
    correct: 0,
    explanation: { en: "Handshaking is allowed with the same gender or with a mahram (a relative you cannot marry).", th: "การสัมผัสมืออนุญาตกับเพศเดียวกัน หรือกับญาติมะฮ์รอม (ผู้ที่แต่งงานด้วยไม่ได้)" },
  },

  // ── Marriage & Family ──────────────────────────────────
  {
    id: "q_fam1",
    topic: "family",
    question: { en: "Which is a condition for a valid Islamic marriage?", th: "ข้อใดเป็นเงื่อนไขของการแต่งงานที่ถูกต้องในอิสลาม?" },
    options: {
      en: ["The bride's guardian (wali) consents", "The couple are the same age", "They live in the same city", "They have known each other 5 years", "They are wealthy"],
      th: ["ผู้ปกครองหญิง (วะลี) ยินยอม", "ทั้งคู่อายุเท่ากัน", "อยู่เมืองเดียวกัน", "รู้จักกันมา 5 ปี", "เป็นคนร่ำรวย"],
    },
    correct: 0,
    explanation: { en: "A valid marriage needs the wali's consent, a dowry (mahar), two witnesses, and an offer & acceptance.", th: "การแต่งงานที่ถูกต้องต้องมีวะลียินยอม มีสินสอด (มะฮัร) มีพยาน 2 คน และมีคำเสนอและคำตอบรับ" },
  },
  {
    id: "q_fam2",
    topic: "family",
    question: { en: "What is the maximum number of wives a man may have, with full fairness?", th: "ผู้ชายมีภรรยาได้มากที่สุดกี่คน โดยให้ความยุติธรรม?" },
    options: { en: ["4", "2", "1", "3", "Unlimited"], th: ["4 คน", "2 คน", "1 คน", "3 คน", "ไม่จำกัด"] },
    correct: 0,
    explanation: { en: "Up to four, but only if he can be completely fair; otherwise, only one.", th: "ไม่เกิน 4 คน แต่เฉพาะเมื่อให้ความยุติธรรมได้ มิฉะนั้นให้เพียงคนเดียว" },
  },
  {
    id: "q_fam3",
    topic: "family",
    question: { en: "Which of these women may a man NOT marry?", th: "ผู้ชายแต่งงานกับหญิงคนใดไม่ได้?" },
    options: {
      en: ["His own sister", "A stranger", "A widow", "A neighbor", "A colleague"],
      th: ["พี่สาว/น้องสาวของตัวเอง", "คนแปลกหน้า", "หญิงหม้าย", "เพื่อนบ้าน", "เพื่อนร่วมงาน"],
    },
    correct: 0,
    explanation: { en: "A man may never marry a mahram — his mother, daughter, sisters, aunts, nieces, etc.", th: "ผู้ชายแต่งงานกับมะฮ์รอมไม่ได้ เช่น แม่ ลูกสาว พี่สาว/น้องสาว ป้า/น้า/อา หลานสาว" },
  },
  {
    id: "q_fam4",
    topic: "family",
    question: { en: "Divorce (talaq) in Islam is…", th: "การหย่า (ฏอลาก) ในอิสลามเป็นสิ่งใด?" },
    options: {
      en: ["Permitted but the most disliked lawful act", "Completely forbidden", "Strongly recommended", "A pillar of Islam", "Required yearly"],
      th: ["อนุญาต แต่เป็นสิ่งที่อัลลอฮไม่ชอบที่สุดในสิ่งที่อนุมัติ", "ห้ามโดยเด็ดขาด", "ส่งเสริมให้ทำอย่างยิ่ง", "หลักปฏิบัติของอิสลาม", "ต้องทำทุกปี"],
    },
    correct: 0,
    explanation: { en: "Talaq is halal but the most hated of permitted things — Islam sets rules to avoid it.", th: "ฏอลากเป็นฮาลาลแต่เป็นสิ่งที่ไม่ชอบที่สุดในสิ่งที่อนุมัติ อิสลามกำหนดกฎเพื่อหลีกเลี่ยง" },
  },
  {
    id: "q_fam5",
    topic: "family",
    question: { en: "The waiting period a woman observes after divorce or widowhood is called…", th: "ช่วงเวลารอคอยของหญิงหลังหย่าหรือเป็นหม้ายเรียกว่าอะไร?" },
    options: {
      en: ["Iddah", "Mahar", "Nikah", "Talaq", "Walimah"],
      th: ["อิดดะฮ", "มะฮัร", "นิกาห์", "ฏอลาก", "วะลีมะฮ"],
    },
    correct: 0,
    explanation: { en: "The iddah (about 3 monthly cycles) confirms no pregnancy and allows reconciliation.", th: "อิดดะฮ (ประมาณ 3 รอบประจำเดือน) เพื่อยืนยันว่าไม่มีครรภ์และเปิดโอกาสคืนดี" },
  },
  {
    id: "q_fam6",
    topic: "family",
    question: { en: "A revocable divorce, where the husband may return within the iddah, is called…", th: "การหย่าที่สามีคืนดีได้ภายในอิดดะฮเรียกว่าอะไร?" },
    options: {
      en: ["Talaq Raj'i", "Talaq Ba'in", "Khul'", "Faskh", "Li'an"],
      th: ["ฏอลากรอจญอี (หย่ากลับคืนได้)", "ฏอลากบาอิน (หย่าขาด)", "คุลอ์", "ฟะซัค", "ลิอาน"],
    },
    correct: 0,
    explanation: { en: "Talaq Raj'i is revocable within the iddah; Talaq Ba'in is irrevocable.", th: "ฏอลากรอจญอีคืนดีได้ภายในอิดดะฮ ส่วนฏอลากบาอินคือหย่าขาดคืนไม่ได้" },
  },
  {
    id: "q_fam7",
    topic: "family",
    question: { en: "Whose consent is required for a marriage (for the bride)?", th: "การแต่งงานต้องได้รับความยินยอมจากใคร (ฝ่ายหญิง)?" },
    options: {
      en: ["Her guardian (wali)", "The imam only", "The government", "Her neighbors", "No one"],
      th: ["ผู้ปกครองของเธอ (วะลี)", "อิมามเท่านั้น", "รัฐบาล", "เพื่อนบ้านของเธอ", "ไม่ต้องใครเลย"],
    },
    correct: 0,
    explanation: { en: "The bride's wali (guardian) must consent to the marriage.", th: "วะลี (ผู้ปกครอง) ของฝ่ายหญิงต้องให้ความยินยอมในการแต่งงาน" },
  },
  {
    id: "q_fam8",
    topic: "family",
    question: { en: "A close relative a person can never marry is called…", th: "ญาติสนิทที่แต่งงานด้วยไม่ได้เรียกว่าอะไร?" },
    options: {
      en: ["Mahram", "Wali", "Mahar", "Sahabah", "Ansar"],
      th: ["มะฮ์รอม", "วะลี", "มะฮัร", "ศ่อฮาบะฮ", "อันศอร"],
    },
    correct: 0,
    explanation: { en: "A mahram is a blood relative one may never marry (e.g. parent, sibling, aunt/uncle).", th: "มะฮ์รอมคือญาติสายเลือดที่แต่งงานด้วยไม่ได้ (เช่น พ่อแม่ พี่น้อง ป้า/น้า/อา)" },
  },

  // ── Funeral Rites (Janazah) ────────────────────────────
  {
    id: "q_jz1",
    topic: "janazah",
    question: { en: "What do Muslims say on hearing of a death?", th: "เมื่อได้ยินข่าวการเสียชีวิต มุสลิมกล่าวว่าอย่างไร?" },
    options: {
      en: ["Inna lillahi wa inna ilayhi raji'un", "Assalamu alaikum", "Bismillah", "Alhamdulillah", "Subhanallah"],
      th: ["อินนาลิลลาฮิ วะอินนา อิลัยฮิรอญิอูน", "อัสสะลามุอะลัยกุม", "บิสมิลลาฮ", "อัลฮัมดุลิลลาฮ", "ซุบฮานัลลอฮ"],
    },
    correct: 0,
    explanation: { en: "“Inna lillahi wa inna ilayhi raji'un” — indeed we belong to Allah and to Him we return.", th: "“อินนาลิลลาฮิ วะอินนา อิลัยฮิรอญิอูน” — เราเป็นกรรมสิทธิ์ของอัลลอฮ และยังพระองค์ที่เราต้องกลับไป" },
  },
  {
    id: "q_jz2",
    topic: "janazah",
    question: { en: "Which is one of the four duties toward a deceased Muslim?", th: "ข้อใดเป็นหนึ่งในหน้าที่ 4 ประการต่อผู้เสียชีวิต?" },
    options: {
      en: ["Washing the body (ghusl)", "Cremating the body", "Keeping the body at home", "Embalming with chemicals", "Displaying the body for a week"],
      th: ["การอาบน้ำศพ (ฆุสล)", "การเผาศพ", "การเก็บศพไว้ที่บ้าน", "การดองศพด้วยสารเคมี", "การตั้งศพให้ชมหนึ่งสัปดาห์"],
    },
    correct: 0,
    explanation: { en: "The four duties are: wash, shroud, pray the funeral prayer, and bury the body.", th: "หน้าที่ 4 ประการ คือ อาบน้ำศพ ห่อศพ นมาซให้ศพ และฝังศพ" },
  },
  {
    id: "q_jz3",
    topic: "janazah",
    question: { en: "How many takbir does the funeral prayer (Salatul Janazah) have?", th: "นมาซญะนาซะฮมีกี่ตักบีร?" },
    options: { en: ["4", "2", "3", "5", "7"], th: ["4", "2", "3", "5", "7"] },
    correct: 0,
    explanation: { en: "The funeral prayer has 4 takbir, standing only — no ruku' and no sujud.", th: "นมาซญะนาซะฮมี 4 ตักบีร ทำในท่ายืนเท่านั้น ไม่มีรุกู้อและไม่มีสุญูด" },
  },
  {
    id: "q_jz4",
    topic: "janazah",
    question: { en: "The funeral prayer is unusual because it has…", th: "นมาซญะนาซะฮพิเศษเพราะ…" },
    options: {
      en: ["No bowing (ruku') and no prostration (sujud)", "No standing", "No takbir", "Ten rak'ah", "Loud singing"],
      th: ["ไม่มีการก้ม (รุกู้อ) และไม่มีการกราบ (สุญูด)", "ไม่มีการยืน", "ไม่มีตักบีร", "มี 10 ร็อกอัต", "มีการร้องเพลงเสียงดัง"],
    },
    correct: 0,
    explanation: { en: "It is done standing with 4 takbir — there is no ruku' and no sujud.", th: "ทำในท่ายืนพร้อม 4 ตักบีร ไม่มีรุกู้อและไม่มีสุญูด" },
  },
  {
    id: "q_jz5",
    topic: "janazah",
    question: { en: "A Muslim is buried in the grave…", th: "มุสลิมถูกฝังในหลุมอย่างไร?" },
    options: {
      en: ["On the right side, facing the qibla", "Face down", "Standing upright", "Facing east", "In a metal box facing up"],
      th: ["ตะแคงขวา หันหน้าไปทางกิบลัต", "คว่ำหน้า", "ยืนตรง", "หันหน้าไปทางทิศตะวันออก", "ในกล่องโลหะหงายขึ้น"],
    },
    correct: 0,
    explanation: { en: "The body is laid on its right side, facing the qibla, and buried soon.", th: "วางร่างตะแคงขวา หันหน้าไปทางกิบลัต และฝังโดยเร็ว" },
  },
  {
    id: "q_jz6",
    topic: "janazah",
    question: { en: "Who washes a deceased woman's body?", th: "ใครเป็นผู้อาบน้ำศพผู้หญิง?" },
    options: {
      en: ["A woman (or her husband)", "Any man", "Only the imam", "A stranger", "No one — it is skipped"],
      th: ["ผู้หญิง (หรือสามีของเธอ)", "ผู้ชายคนใดก็ได้", "อิมามเท่านั้น", "คนแปลกหน้า", "ไม่มีใคร — ข้ามขั้นตอนนี้"],
    },
    correct: 0,
    explanation: { en: "A woman washes a woman and a man washes a man; spouses may wash each other.", th: "หญิงอาบให้หญิง ชายอาบให้ชาย ส่วนสามี-ภรรยาอาบให้กันได้" },
  },
  {
    id: "q_jz7",
    topic: "janazah",
    question: { en: "What is a deceased male called?", th: "ศพผู้ชายเรียกว่าอะไร?" },
    options: {
      en: ["Mayyit", "Mayyitah", "Wali", "Mahram", "Kafan"],
      th: ["มัยยิต", "มัยยิตะฮ", "วะลี", "มะฮ์รอม", "กะฝั่น"],
    },
    correct: 0,
    explanation: { en: "A deceased male is “mayyit”; a deceased female is “mayyitah”.", th: "ศพผู้ชายเรียก “มัยยิต” ศพผู้หญิงเรียก “มัยยิตะฮ”" },
  },

  // ── Isra' & Mi'raj (Seerah) ────────────────────────────
  {
    id: "q_se11",
    topic: "seerah",
    question: { en: "The Isra' was the night journey from Makkah to…", th: "อิสรออ์คือการเดินทางยามค่ำคืนจากมักกะฮไปยัง…" },
    options: {
      en: ["Jerusalem (Masjid al-Aqsa)", "Madinah", "Taif", "Cairo", "Damascus"],
      th: ["เยรูซาเล็ม (มัสยิดอัลอักซอ)", "มะดีนะฮ", "ฏออิฟ", "ไคโร", "ดามัสกัส"],
    },
    correct: 0,
    explanation: { en: "The Isra' was the miraculous night journey from Makkah to Masjid al-Aqsa in Jerusalem.", th: "อิสรออ์คือการเดินทางอันเป็นปาฏิหาริย์ยามค่ำคืนจากมักกะฮสู่มัสยิดอัลอักซอในเยรูซาเล็ม" },
  },
  {
    id: "q_se12",
    topic: "seerah",
    question: { en: "The Mi'raj was the Prophet's ascension through…", th: "เมี๊ยะอุรอจญ์คือการขึ้นสู่เบื้องบนของท่านนบีผ่าน…" },
    options: {
      en: ["The seven heavens", "A mountain cave", "The desert", "A great river", "The sea"],
      th: ["ชั้นฟ้าทั้งเจ็ด", "ถ้ำบนภูเขา", "ทะเลทราย", "แม่น้ำใหญ่", "ทะเล"],
    },
    correct: 0,
    explanation: { en: "In the Mi'raj the Prophet ﷺ ascended through the seven heavens, meeting earlier prophets.", th: "ในเมี๊ยะอุรอจญ์ ท่านนบีขึ้นผ่านชั้นฟ้าทั้งเจ็ด และได้พบบรรดานบีท่านก่อน" },
  },
  {
    id: "q_se13",
    topic: "seerah",
    question: { en: "What was ordained during the Isra' & Mi'raj?", th: "สิ่งใดถูกกำหนดขึ้นในคืนอิสรออ์ เมี๊ยะอุรอจญ์?" },
    options: {
      en: ["The five daily prayers", "The fast of Ramadan", "Zakat", "Hajj", "The Friday prayer"],
      th: ["การนมาซ 5 เวลา", "การถือศีลอดเราะมะฎอน", "ซะกาต", "ฮัจญ์", "นมาซวันศุกร์"],
    },
    correct: 0,
    explanation: { en: "The five daily prayers were ordained — reduced from 50 to 5 by Allah's mercy.", th: "การนมาซ 5 เวลาถูกกำหนดขึ้น ลดจาก 50 เหลือ 5 ด้วยความเมตตาของอัลลอฮ" },
  },
  {
    id: "q_se14",
    topic: "seerah",
    question: { en: "What was the name of the creature that carried the Prophet ﷺ on the night journey?", th: "สัตว์พาหนะที่พาท่านนบีในค่ำคืนอิสรออ์ชื่ออะไร?" },
    options: {
      en: ["Buraq", "Ababil", "Naqah", "Adha", "Rakhsh"],
      th: ["บุร็อก", "อะบาบีล", "นาเกาะฮ", "อัฎฮา", "รัคช์"],
    },
    correct: 0,
    explanation: { en: "The Buraq — a swift white creature — carried the Prophet ﷺ on the night journey.", th: "บุร็อก สัตว์สีขาววิ่งเร็ว พาท่านนบีในค่ำคืนอิสรออ์" },
  },
  {
    id: "q_se15",
    topic: "seerah",
    question: { en: "The 5 daily prayers were first made 50, then reduced to…", th: "การนมาซเดิมกำหนด 50 เวลา แล้วลดเหลือ…" },
    options: { en: ["5", "10", "17", "3", "25"], th: ["5 เวลา", "10 เวลา", "17 เวลา", "3 เวลา", "25 เวลา"] },
    correct: 0,
    explanation: { en: "By Allah's mercy the 50 prayers were reduced to 5 — still with the reward of 50.", th: "ด้วยความเมตตาของอัลลอฮ การนมาซ 50 เวลาถูกลดเหลือ 5 เวลา แต่ยังได้ผลบุญเท่า 50" },
  },

  // ── Salah — meaning & conditions ───────────────────────
  {
    id: "q_s14",
    topic: "salah",
    question: { en: "What is the first act a person will be questioned about on the Day of Judgment?", th: "สิ่งแรกที่มนุษย์จะถูกสอบสวนในวันพิพากษาคืออะไร?" },
    options: {
      en: ["Salah (prayer)", "Zakat", "Fasting", "Hajj", "Charity"],
      th: ["การนมาซ (ละหมาด)", "ซะกาต", "การถือศีลอด", "ฮัจญ์", "การบริจาค"],
    },
    correct: 0,
    explanation: { en: "The prayer (Salah) is the first act a person is questioned about after death.", th: "การนมาซเป็นสิ่งแรกที่มนุษย์จะถูกสอบสวนหลังความตาย" },
  },
  {
    id: "q_s15",
    topic: "salah",
    question: { en: "Which is a condition for the prayer to be valid?", th: "ข้อใดเป็นเงื่อนไขให้การนมาซใช้ได้?" },
    options: {
      en: ["Body, clothes and place are clean of najis, and one faces the qibla", "Wearing only white", "Having eaten a full meal", "Reciting the whole Quran first", "Praying only at night"],
      th: ["ร่างกาย เสื้อผ้า และสถานที่สะอาดจากนะญิส และหันหน้าสู่กิบลัต", "สวมชุดขาวเท่านั้น", "รับประทานอาหารอิ่มก่อน", "อ่านกุรอานจบทั้งเล่มก่อน", "ละหมาดเฉพาะกลางคืน"],
    },
    correct: 0,
    explanation: { en: "Conditions include: being Muslim, at the right time, clean of najis, covering the awrah, and facing the qibla.", th: "เงื่อนไขได้แก่ เป็นมุสลิม ถึงเวลา สะอาดจากนะญิส ปกปิดเอาเราะฮ และหันหน้าสู่กิบลัต" },
  },
  {
    id: "q_s16",
    topic: "salah",
    question: { en: "What is the deeper meaning of Salah?", th: "ความหมายที่ลึกซึ้งของการนมาซคืออะไร?" },
    options: {
      en: ["Worshipping and drawing close to Allah with the whole self", "A form of exercise", "A social gathering only", "A cultural custom with no meaning", "A way to earn money"],
      th: ["การเคารพภักดีและเข้าใกล้อัลลอฮด้วยทั้งกายและใจ", "รูปแบบการออกกำลังกาย", "การรวมตัวทางสังคมเท่านั้น", "ธรรมเนียมที่ไม่มีความหมาย", "วิธีหาเงิน"],
    },
    correct: 0,
    explanation: { en: "Salah is worship and connection with Allah — with the heart, tongue, hands and feet.", th: "การนมาซคือการเคารพภักดีและการเชื่อมสัมพันธ์กับอัลลอฮ ด้วยหัวใจ ลิ้น มือ และเท้า" },
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
