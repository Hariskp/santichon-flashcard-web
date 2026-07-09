// Content distilled from the study booklet
// "เอกสารประกอบการเรียนการสอนสำหรับผู้สนใจอิสลาม" — มูลนิธิสันติชน (Santichon Foundation)
// Each card is bilingual (English + Thai). `arabic` holds a transliteration or Arabic where useful.

export type Lang = "en" | "th";

export interface Card {
  id: string;
  front: Record<Lang, string>;
  back: Record<Lang, string>;
  arabic?: string;
}

export interface Deck {
  id: string;
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  cards: Card[];
}

export const decks: Deck[] = [
  // 1. FOUNDATIONS ────────────────────────────────────────────
  {
    id: "foundations",
    icon: "📖",
    title: { en: "Foundations of Islam", th: "พื้นฐานอิสลาม" },
    description: {
      en: "The very first things to know: Allah, the Prophet, the Quran, and what it means to be Muslim.",
      th: "สิ่งแรกที่ควรรู้: อัลลอฮ ท่านนบี คัมภีร์กุรอาน และการเป็นมุสลิม",
    },
    cards: [
      {
        id: "f1",
        front: { en: "What does the word “Islam” mean?", th: "คำว่า “อิสลาม” หมายถึงอะไร?" },
        back: {
          en: "“Submission to attain peace” — willingly submitting to the will of Allah.",
          th: "“การยอมจำนนเพื่อบรรลุถึงความสันติสุข” คือการนอบน้อมยอมจำนนต่อพระประสงค์ของอัลลอฮ",
        },
      },
      {
        id: "f2",
        front: { en: "Who is Allah?", th: "อัลลอฮ คือใคร?" },
        back: {
          en: "Allah is the One God — the Creator of the universe and everything in it. There is nothing like Him.",
          th: "อัลลอฮ คือพระเจ้าองค์เดียว ผู้ทรงสร้างจักรวาลและทุกสรรพสิ่ง ไม่มีสิ่งใดเสมอเหมือนพระองค์",
        },
      },
      {
        id: "f3",
        front: { en: "Who is a “Muslim”?", th: "“มุสลิม” คือใคร?" },
        back: {
          en: "A Muslim is a person who follows Islam — “one who submits to the will of Allah.”",
          th: "มุสลิม คือผู้นับถือศาสนาอิสลาม หมายถึง “ผู้นอบน้อมยอมจำนนต่อพระประสงค์ของอัลลอฮ”",
        },
      },
      {
        id: "f4",
        front: { en: "What does “Mu’min” mean?", th: "“มุอ์มิน” หมายถึงอะไร?" },
        back: {
          en: "“Mu’min” means “a believer in Allah.” A believing man is Muslimin; a believing woman is Muslimah.",
          th: "“มุอ์มิน” หมายถึง “ผู้ศรัทธาในอัลลอฮ” ชายผู้ศรัทธาเรียก มุสลิมีน หญิงผู้ศรัทธาเรียก มุสลิมะฮ",
        },
      },
      {
        id: "f5",
        front: { en: "Who was the Prophet Muhammad ﷺ?", th: "ท่านนบีมุฮัมมัด (ซ.ล.) คือใคร?" },
        back: {
          en: "The final Messenger (Rasul) sent by Allah. He is the last prophet, the example Muslims follow.",
          th: "ศาสนทูต (รอซูล) คนสุดท้ายที่อัลลอฮทรงส่งมา เป็นนบีคนสุดท้าย และเป็นแบบอย่างที่มุสลิมยึดถือ",
        },
      },
      {
        id: "f6",
        front: { en: "What is the Quran?", th: "คัมภีร์กุรอานคืออะไร?" },
        back: {
          en: "The final holy book from Allah, revealed to Prophet Muhammad ﷺ. It has 30 parts (juz), 114 chapters (surah), and 6,236 verses (ayah).",
          th: "คัมภีร์เล่มสุดท้ายจากอัลลอฮ ประทานแก่ท่านนบีมุฮัมมัด (ซ.ล.) แบ่งเป็น 30 ญุซ 114 ซูเราะฮ และ 6,236 อายะฮ",
        },
      },
      {
        id: "f7",
        front: { en: "Who was the first human being?", th: "มนุษย์คนแรกของโลกคือใคร?" },
        back: {
          en: "Prophet Adam — the first human Allah created, and the father of humankind.",
          th: "นบีอาดัม มนุษย์คนแรกที่อัลลอฮทรงสร้าง และเป็นบิดาของมนุษยชาติ",
        },
      },
      {
        id: "f8",
        front: { en: "What is the Shahada (declaration of faith)?", th: "คำปฏิญาณตน (ชะฮาดะฮ) คืออะไร?" },
        back: {
          en: "“I bear witness there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.” Saying it sincerely makes one a Muslim.",
          th: "“ข้าพเจ้าขอปฏิญาณว่าไม่มีพระเจ้าอื่นใดนอกจากอัลลอฮ และมุฮัมมัดเป็นศาสนทูตของพระองค์” การกล่าวด้วยความจริงใจทำให้เป็นมุสลิม",
        },
        arabic: "Ash-hadu an laa ilaaha illallah, wa ash-hadu anna Muhammadan rasulullah",
      },
      {
        id: "f9",
        front: { en: "What makes up the structure of Islam?", th: "โครงสร้างของอิสลามประกอบด้วยอะไร?" },
        back: {
          en: "Quran + Sunnah = Shariah. It rests on 3 principles: Faith (Iman), Practice (Ibadah), and Virtue/Ethics (Ihsan).",
          th: "กุรอาน + ซุนนะฮ = ชะรีอะฮ ตั้งอยู่บน 3 หลัก คือ หลักศรัทธา (อีมาน) หลักปฏิบัติ (อิบาดะฮ) และหลักคุณธรรม (เอี๊ยะฮ์ซาน)",
        },
      },
      {
        id: "f10",
        front: { en: "How do Muslims greet one another?", th: "มุสลิมทักทายกันอย่างไร?" },
        back: {
          en: "“Assalamu alaikum” (peace be upon you). The reply is “Wa alaikumus-salam” (and upon you peace).",
          th: "“อัสสะลามุอะลัยกุม” (ขอความสันติสุขจงประสบแด่ท่าน) ผู้รับตอบว่า “วะอะลัยกุมุสสลาม” (และแด่ท่านเช่นกัน)",
        },
        arabic: "As-salamu ʿalaikum → Wa ʿalaikumus-salam",
      },
      {
        id: "f11",
        front: { en: "Why do human beings need religion?", th: "ทำไมมนุษย์จำเป็นต้องมีศาสนา?" },
        back: {
          en: "As a model for living, an anchor for the heart, a code for living together, a source of morals, and to make us different from animals.",
          th: "เพื่อเป็นแบบอย่างในการดำเนินชีวิต เป็นที่ยึดเหนี่ยวจิตใจ เป็นกฎการอยู่ร่วมกัน ทำให้มีศีลธรรม และทำให้มนุษย์ต่างจากสัตว์",
        },
      },
    ],
  },

  // 2. SIX ARTICLES OF FAITH ──────────────────────────────────
  {
    id: "iman",
    icon: "☪️",
    title: { en: "The 6 Articles of Faith", th: "หลักศรัทธา 6 ประการ" },
    description: {
      en: "Iman — the six things every Muslim believes in the heart.",
      th: "อีมาน — 6 สิ่งที่มุสลิมทุกคนศรัทธาในหัวใจ",
    },
    cards: [
      {
        id: "i0",
        front: { en: "What are the 6 Articles of Faith (Iman)?", th: "หลักศรัทธา (อีมาน) 6 ประการมีอะไรบ้าง?" },
        back: {
          en: "Belief in: 1) Allah, 2) the Angels, 3) the Books, 4) the Prophets, 5) Divine Decree, 6) the Last Day.",
          th: "ศรัทธาใน 1) พระเจ้า 2) มลาอิกะฮ 3) คัมภีร์ 4) บรรดานบี 5) กฎกำหนดสภาวะ 6) วันสิ้นโลก/วันฟื้นคืนชีพ",
        },
      },
      {
        id: "i1",
        front: { en: "1. Belief in Allah", th: "1. ศรัทธาในพระเจ้า" },
        back: {
          en: "Believe Allah is the one God, Creator of the universe. Worship nothing besides Him.",
          th: "เชื่อว่าอัลลอฮเป็นพระเจ้าองค์เดียว ผู้สร้างจักรวาล ไม่เคารพสักการะสิ่งอื่นใดเทียบเคียงพระองค์",
        },
      },
      {
        id: "i2",
        front: { en: "2. Belief in the Angels (Malaikah)", th: "2. ศรัทธาในบรรดามลาอิกะฮ" },
        back: {
          en: "Believe Allah created angels as His messengers to bring commands to the prophets.",
          th: "เชื่อว่าอัลลอฮทรงสร้างมลาอิกะฮ (ทูตสวรรค์) เป็นผู้นำโองการของพระองค์มายังบรรดานบี",
        },
      },
      {
        id: "i3",
        front: { en: "3. Belief in the Books (Kitab)", th: "3. ศรัทธาในบรรดาคัมภีร์" },
        back: {
          en: "Believe Allah sent down His revealed books to the prophets. The final and complete one is the Quran.",
          th: "เชื่อว่าอัลลอฮทรงประทานคัมภีร์ผ่านบรรดานบี คัมภีร์เล่มสุดท้ายที่สมบูรณ์คือกุรอาน",
        },
      },
      {
        id: "i4",
        front: { en: "4. Belief in the Prophets (Nabi)", th: "4. ศรัทธาในบรรดานบี" },
        back: {
          en: "Believe Allah sent prophets to guide people to do good and shun evil. Muhammad ﷺ is the last of them.",
          th: "เชื่อว่าอัลลอฮทรงส่งบรรดานบีมาชี้นำมนุษย์ให้ทำดีและห้ามความชั่ว โดยมีนบีมุฮัมมัดเป็นคนสุดท้าย",
        },
      },
      {
        id: "i5",
        front: { en: "5. Belief in Divine Decree (Qadar)", th: "5. ศรัทธาในกฎกำหนดสภาวะ" },
        back: {
          en: "Believe Allah set laws and a decree governing all creation, unfolding by His will.",
          th: "เชื่อว่าอัลลอฮทรงวางกฎเกณฑ์เพื่อควบคุมทุกสรรพสิ่ง ให้เป็นไปตามพระประสงค์ของพระองค์",
        },
      },
      {
        id: "i6",
        front: { en: "6. Belief in the Last Day (Resurrection)", th: "6. ศรัทธาในวันฟื้นคืนชีพ" },
        back: {
          en: "Believe that after death people will be raised again and judged for their deeds in this life.",
          th: "เชื่อว่าหลังความตาย มนุษย์จะฟื้นคืนชีพเพื่อรับการพิพากษาตามการกระทำในโลกนี้",
        },
      },
    ],
  },

  // 3. FIVE PILLARS ───────────────────────────────────────────
  {
    id: "pillars",
    icon: "🕌",
    title: { en: "The 5 Pillars of Islam", th: "หลักปฏิบัติ 5 ประการ" },
    description: {
      en: "Ibadah — the five acts of worship that shape a Muslim's practice.",
      th: "อิบาดะฮ — 5 การปฏิบัติศาสนกิจหลักของมุสลิม",
    },
    cards: [
      {
        id: "p0",
        front: { en: "What are the 5 Pillars of Islam?", th: "หลักปฏิบัติ 5 ประการมีอะไรบ้าง?" },
        back: {
          en: "1) Shahada (declaration of faith), 2) Salah (prayer), 3) Sawm (fasting), 4) Zakat (charity), 5) Hajj (pilgrimage, if able).",
          th: "1) การกล่าวปฏิญาณตน 2) การนมาซ 3) การถือศีลอด 4) การจ่ายซะกาต 5) การประกอบพิธีฮัจญ์ (ถ้ามีความสามารถ)",
        },
      },
      {
        id: "p1",
        front: { en: "Pillar 1 — Shahada", th: "ปฏิบัติที่ 1 — การปฏิญาณตน" },
        back: {
          en: "Declaring faith: there is no god but Allah, and Muhammad is His Messenger. This is the doorway into Islam.",
          th: "การกล่าวปฏิญาณว่าไม่มีพระเจ้าอื่นใดนอกจากอัลลอฮ และมุฮัมมัดเป็นศาสนทูตของพระองค์ เป็นประตูสู่การเป็นมุสลิม",
        },
      },
      {
        id: "p2",
        front: { en: "Pillar 2 — Salah", th: "ปฏิบัติที่ 2 — การนมาซ" },
        back: {
          en: "Performing the 5 daily prayers at their set times — the first act a person is questioned about after death.",
          th: "การนมาซ 5 เวลาตามเวลาที่กำหนด เป็นสิ่งแรกที่จะถูกสอบสวนหลังความตาย",
        },
      },
      {
        id: "p3",
        front: { en: "Pillar 3 — Sawm", th: "ปฏิบัติที่ 3 — การถือศีลอด" },
        back: {
          en: "Fasting the month of Ramadan — abstaining from food, drink, and desires from dawn to sunset.",
          th: "การถือศีลอดในเดือนเราะมะฎอน งดอาหาร เครื่องดื่ม และอารมณ์ตั้งแต่รุ่งอรุณจนตะวันตกดิน",
        },
      },
      {
        id: "p4",
        front: { en: "Pillar 4 — Zakat", th: "ปฏิบัติที่ 4 — การจ่ายซะกาต" },
        back: {
          en: "Giving obligatory charity from one's wealth to purify it and help those in need.",
          th: "การจ่ายทานภาคบังคับจากทรัพย์สิน เพื่อขัดเกลาให้บริสุทธิ์และช่วยเหลือผู้ขัดสน",
        },
      },
      {
        id: "p5",
        front: { en: "Pillar 5 — Hajj", th: "ปฏิบัติที่ 5 — การประกอบพิธีฮัจญ์" },
        back: {
          en: "Making pilgrimage to Makkah once in a lifetime, for those who are physically and financially able.",
          th: "การเดินทางไปประกอบพิธีฮัจญ์ที่นครมักกะฮครั้งหนึ่งในชีวิต สำหรับผู้ที่มีความสามารถ",
        },
      },
    ],
  },

  // 4. SALAH ──────────────────────────────────────────────────
  {
    id: "salah",
    icon: "🤲",
    title: { en: "Prayer (Salah)", th: "การนมาซ" },
    description: {
      en: "The daily prayers: their times, units, conditions and movements.",
      th: "การนมาซประจำวัน: เวลา จำนวนร็อกอัต เงื่อนไข และท่าทาง",
    },
    cards: [
      {
        id: "s1",
        front: { en: "What is Salah (namaz)?", th: "การนมาซคืออะไร?" },
        back: {
          en: "Worshipping and drawing close to Allah with the whole self — heart, tongue, hands and feet. In Arabic it is “Salah.”",
          th: "การเคารพสักการะและเข้าใกล้อัลลอฮด้วยทั้งหัวใจ ลิ้น มือ และเท้า ภาษาอาหรับเรียกว่า “เศาะลาฮ”",
        },
      },
      {
        id: "s2",
        front: { en: "What are the 5 daily prayers and their units (rak'ah)?", th: "นมาซ 5 เวลา มีกี่ร็อกอัต?" },
        back: {
          en: "Fajr 2 · Zuhr 4 · Asr 4 · Maghrib 3 · Isha 4 — 17 obligatory rak'ah in total.",
          th: "ซุบฮิ 2 · ซุฮริ 4 · อัศริ 4 · มัฆริบ 3 · อิชาอุ 4 — รวมฟัรฎู 17 ร็อกอัต",
        },
      },
      {
        id: "s3",
        front: { en: "When is each prayer time?", th: "เวลาของนมาซแต่ละเวลา?" },
        back: {
          en: "Fajr: dawn→sunrise · Zuhr: after midday · Asr: late afternoon · Maghrib: just after sunset · Isha: night until midnight/dawn.",
          th: "ซุบฮิ: รุ่งอรุณถึงตะวันขึ้น · ซุฮริ: หลังเที่ยง · อัศริ: บ่ายคล้อย · มัฆริบ: หลังตะวันตก · อิชาอุ: ค่ำจนถึงเที่ยงคืน/รุ่งอรุณ",
        },
      },
      {
        id: "s4",
        front: { en: "What are the conditions for prayer to be valid?", th: "เงื่อนไขในการนมาซมีอะไรบ้าง?" },
        back: {
          en: "Be Muslim, sane, at the right time; body/clothes/place clean of najis; cover the awrah; and face the qibla.",
          th: "เป็นมุสลิม มีสติ ถึงเวลานมาซ ร่างกาย/เสื้อผ้า/สถานที่สะอาดปราศจากนะญิส ปกปิดเอาเราะฮ และผินหน้าสู่กิบลัต",
        },
      },
      {
        id: "s5",
        front: { en: "Which direction is the qibla?", th: "กิบลัตคือทิศใด?" },
        back: {
          en: "Toward the Ka'bah in Makkah. From Thailand, that is to the west (slightly toward the northwest).",
          th: "หันไปทางกะอบะฮ ณ นครมักกะฮ จากประเทศไทยคือทางทิศตะวันตก (ค่อนไปทางตะวันตกเฉียงเหนือ)",
        },
      },
      {
        id: "s6",
        front: { en: "What are the 13 positions of prayer (in short)?", th: "รุ่กนนมาซ 13 ประการ (โดยย่อ)?" },
        back: {
          en: "Intention, standing, takbir, reciting Fatihah, ruku' (bowing), i'tidal, sujud (prostration), sitting between prostrations, final sitting, tashahhud, salawat, and salam.",
          th: "ตั้งเจตนา ยืนตรง ตักบีร อ่านฟาติฮะฮ รุกู้อ (ก้ม) เอี๊ยะติดาล สุญูด (กราบ) นั่งระหว่างสองสุญูด นั่งตะชะฮฮุด อ่านตะชะฮฮุด เศาะละวาต และให้สลาม",
        },
      },
      {
        id: "s7",
        front: { en: "What is the Adhan?", th: "อะซานคืออะไร?" },
        back: {
          en: "The call to prayer, announced to invite people to pray when the time enters.",
          th: "คำประกาศเชิญชวนให้มานมาซ เมื่อเข้าเวลานมาซ",
        },
      },
      {
        id: "s8",
        front: { en: "Why pray in congregation (jama'ah)?", th: "ทำไมจึงนมาซรวม (ญะมาอะฮ)?" },
        back: {
          en: "Praying together earns up to 27 times the reward of praying alone, and builds unity. The leader is the imam; followers are ma'mum.",
          th: "การนมาซรวมได้ผลบุญมากกว่านมาซคนเดียวถึง 27 เท่า และสร้างความสามัคคี ผู้นำเรียกอิมาม ผู้ตามเรียกมะอ์มูม",
        },
      },
      {
        id: "s9",
        front: { en: "Who must attend Friday prayer (Jumu'ah)?", th: "ใครต้องนมาซวันศุกร์?" },
        back: {
          en: "Friday prayer is obligatory for adult Muslim men (2 rak'ah with a sermon), replacing that day's Zuhr.",
          th: "นมาซวันศุกร์เป็นหน้าที่ของชายมุสลิมที่บรรลุศาสนภาวะ (2 ร็อกอัต พร้อมคุฏบะฮ) แทนนมาซซุฮริของวันนั้น",
        },
      },
      {
        id: "s10",
        front: { en: "When is prayer forbidden?", th: "เวลาใดที่ห้ามนมาซ?" },
        back: {
          en: "At sunrise, at the sun's zenith (noon), and at sunset — the times of the sun-worshippers.",
          th: "ขณะดวงอาทิตย์กำลังขึ้น ขณะตรงศีรษะ (เที่ยง) และขณะกำลังตก เพราะเป็นเวลาของผู้บูชาดวงอาทิตย์",
        },
      },
      {
        id: "s11",
        front: { en: "What invalidates a prayer?", th: "อะไรทำให้เสียนมาซ?" },
        back: {
          en: "Speaking or making sounds on purpose, much unnecessary movement, losing wudu, najis on the body, uncovering the awrah, laughing, eating or drinking.",
          th: "กล่าววาจาหรือเปล่งเสียงโดยเจตนา เคลื่อนไหวมากติดต่อกัน เสียน้ำละหมาด มีนะญิสที่ร่างกาย เปิดเอาเราะฮ หัวเราะ กินหรือดื่ม",
        },
      },
    ],
  },

  // 5. PURIFICATION ───────────────────────────────────────────
  {
    id: "purification",
    icon: "💧",
    title: { en: "Purification", th: "การชำระล้าง" },
    description: {
      en: "Cleanliness before worship: wudu, ghusl, tayammum and najis.",
      th: "ความสะอาดก่อนอิบาดะฮ: วุฎู ฆุสล ตะยัมมุม และนะญิส",
    },
    cards: [
      {
        id: "pu1",
        front: { en: "What is najis?", th: "นะญิสคืออะไร?" },
        back: {
          en: "Impurity — a filthy thing that must be washed off according to religious law before worship (e.g. urine, blood, feces).",
          th: "สิ่งสกปรกที่ต้องชำระล้างตามบทบัญญัติก่อนทำอิบาดะฮ เช่น ปัสสาวะ เลือด อุจจาระ",
        },
      },
      {
        id: "pu2",
        front: { en: "What is the difference between minor and major hadath?", th: "ฮะดัษเล็กกับฮะดัษใหญ่ต่างกันอย่างไร?" },
        back: {
          en: "Minor hadath (e.g. passing gas, urine) → removed by wudu. Major hadath (e.g. menstruation, intimacy) → removed by ghusl (full bath).",
          th: "ฮะดัษเล็ก (เช่น ผายลม ปัสสาวะ) → แก้ด้วยวุฎู (อาบน้ำละหมาด) ฮะดัษใหญ่ (เช่น ประจำเดือน เพศสัมพันธ์) → แก้ด้วยฆุสล (อาบน้ำทั้งตัว)",
        },
      },
      {
        id: "pu3",
        front: { en: "What is wudu (ablution)?", th: "วุฎู (การอาบน้ำละหมาด) คืออะไร?" },
        back: {
          en: "Washing specific parts with water before prayer: hands, mouth & nose, face, arms, wiping the head & ears, then the feet.",
          th: "การล้างอวัยวะบางส่วนด้วยน้ำก่อนนมาซ: มือ ปากและจมูก ใบหน้า แขน ลูบศีรษะและใบหู แล้วล้างเท้า",
        },
      },
      {
        id: "pu4",
        front: { en: "What breaks wudu?", th: "อะไรทำให้เสียน้ำละหมาด?" },
        back: {
          en: "Passing gas, urine or feces; vomiting; touching the private part without a barrier; deep sleep; touching the opposite sex with desire; fainting.",
          th: "ผายลม ปัสสาวะ อุจจาระ อาเจียน มือโดนอวัยวะเพศโดยไม่มีผ้ากั้น นอนหลับสนิท ชาย-หญิงแตะกันด้วยอารมณ์ เป็นลมหมดสติ",
        },
      },
      {
        id: "pu5",
        front: { en: "When is ghusl (full ritual bath) required?", th: "เมื่อใดต้องอาบน้ำฆุสล (ชำระฮะดัษใหญ่)?" },
        back: {
          en: "After menstruation, after intimacy, after wet dream, after childbirth. Also when a person newly embraces Islam, and for the deceased.",
          th: "หลังหมดประจำเดือน หลังมีเพศสัมพันธ์ หลังฝันเปียก หลังคลอดบุตร รวมถึงผู้เข้ารับอิสลามใหม่ และผู้เสียชีวิต",
        },
      },
      {
        id: "pu6",
        front: { en: "What is tayammum?", th: "ตะยัมมุมคืออะไร?" },
        back: {
          en: "Dry ablution using clean earth/dust instead of water — allowed when there is no water, or water would harm the sick, or on a journey.",
          th: "การอาบน้ำละหมาดด้วยฝุ่นดินสะอาดแทนน้ำ อนุญาตเมื่อไม่มีน้ำ หรือน้ำเป็นอันตรายต่อผู้ป่วย หรือขณะเดินทาง",
        },
      },
      {
        id: "pu7",
        front: { en: "What things must be washed for purification (5 najis)?", th: "นะญิสที่ต้องชำระล้างมี 5 อย่างอะไรบ้าง?" },
        back: {
          en: "Feces, urine, menstrual blood, postnatal blood, and semen/pre-seminal fluid.",
          th: "อุจจาระ ปัสสาวะ ประจำเดือน เลือดหลังคลอดบุตร และอสุจิ/น้ำเมือก",
        },
      },
    ],
  },

  // 6. FASTING ────────────────────────────────────────────────
  {
    id: "fasting",
    icon: "🌙",
    title: { en: "Fasting (Sawm)", th: "การถือศีลอด" },
    description: {
      en: "The fast of Ramadan: who, when, and what it involves.",
      th: "การถือศีลอดเดือนเราะมะฎอน: ใคร เมื่อไร และอย่างไร",
    },
    cards: [
      {
        id: "fa1",
        front: { en: "What is fasting (sawm) and when is it obligatory?", th: "การถือศีลอดคืออะไร ทำเมื่อไร?" },
        back: {
          en: "Abstaining from food, drink and desires from dawn to sunset during Ramadan, the 9th month of the Islamic calendar. Its purpose is faith and God-consciousness.",
          th: "การงดอาหาร เครื่องดื่ม และอารมณ์ ตั้งแต่รุ่งอรุณจนตะวันตกดิน ในเดือนเราะมะฎอน (เดือนที่ 9) เพื่อความศรัทธาและยำเกรงพระเจ้า",
        },
      },
      {
        id: "fa2",
        front: { en: "Who is required to fast?", th: "ผู้ที่ต้องถือศีลอดคือใคร?" },
        back: {
          en: "A Muslim who is of age, sane, and healthy (not sick or travelling).",
          th: "มุสลิมที่บรรลุศาสนภาวะ มีสติสัมปชัญญะ มีสุขภาพสมบูรณ์ ไม่เจ็บป่วยและไม่อยู่ในการเดินทาง",
        },
      },
      {
        id: "fa3",
        front: { en: "What breaks the fast?", th: "สิ่งใดทำให้เสียศีลอด?" },
        back: {
          en: "Intentionally eating or drinking, deliberately vomiting, intimacy, menstruation or postnatal bleeding, and leaving Islam.",
          th: "กินหรือดื่มโดยเจตนา ตั้งใจทำให้อาเจียน ร่วมประเวณี มีประจำเดือนหรือเลือดหลังคลอด และสิ้นสภาพจากการเป็นมุสลิม",
        },
      },
      {
        id: "fa4",
        front: { en: "Who is excused from fasting?", th: "ใครได้รับการผ่อนผันในการถือศีลอด?" },
        back: {
          en: "The sick, travellers, the very elderly, and pregnant or nursing women — they make it up later or feed the needy instead.",
          th: "ผู้ป่วย ผู้เดินทาง คนชรามาก และหญิงมีครรภ์หรือให้นมบุตร — ให้ถือชดใช้ภายหลัง หรือจ่ายอาหารแก่คนยากจน",
        },
      },
      {
        id: "fa5",
        front: { en: "What are suhoor and iftar?", th: "ซะฮูรและการละศีลอดคืออะไร?" },
        back: {
          en: "Suhoor is the pre-dawn meal. One should break the fast (iftar) promptly at sunset, ideally with dates and water.",
          th: "ซะฮูรคืออาหารก่อนรุ่งอรุณ และควรละศีลอดทันทีเมื่อตะวันลับขอบฟ้า โดยเริ่มด้วยผลอินทผลัมและน้ำ",
        },
      },
      {
        id: "fa6",
        front: { en: "What are some recommended voluntary fasts?", th: "การถือศีลอดสมัครใจ (ซุนนะฮ) มีอะไรบ้าง?" },
        back: {
          en: "6 days of Shawwal, the day of Arafah, the day of Ashura, and Mondays & Thursdays each week.",
          th: "6 วันในเดือนเชาวาล วันอะเราะฟะฮ วันอาชูรอ และวันจันทร์กับวันพฤหัสของทุกสัปดาห์",
        },
      },
    ],
  },

  // 7. ZAKAT ──────────────────────────────────────────────────
  {
    id: "zakat",
    icon: "💰",
    title: { en: "Zakat (Almsgiving)", th: "การจ่ายซะกาต" },
    description: {
      en: "Purifying wealth by giving a set share to those in need.",
      th: "การขัดเกลาทรัพย์สินด้วยการแบ่งปันแก่ผู้ขัดสน",
    },
    cards: [
      {
        id: "z1",
        front: { en: "What does the word “zakat” mean?", th: "คำว่า “ซะกาต” หมายถึงอะไร?" },
        back: {
          en: "“Purifying and cleansing,” or “growth and increase.” It cleanses one's wealth and soul.",
          th: "“การขัดเกลาให้สะอาดบริสุทธิ์” หรือ “ความเจริญงอกงาม” เป็นการชำระทรัพย์สินและจิตใจ",
        },
      },
      {
        id: "z2",
        front: { en: "What are the two types of zakat?", th: "ซะกาตมีกี่ประเภท?" },
        back: {
          en: "Zakat al-Fitr (paid at the end of Ramadan) and Zakat al-Mal (on accumulated wealth).",
          th: "ซะกาตฟิฏร (จ่ายท้ายเดือนเราะมะฎอน) และซะกาตมาล (ซะกาตทรัพย์สิน)",
        },
      },
      {
        id: "z3",
        front: { en: "What is Zakat al-Fitr?", th: "ซะกาตฟิฏรคืออะไร?" },
        back: {
          en: "A staple food of the region (about 2.8 kg, e.g. rice) given for each person before the end of Ramadan, before the Eid prayer.",
          th: "อาหารหลักของท้องถิ่น (ประมาณ 2.8 กิโลกรัม เช่น ข้าวสาร) จ่ายให้แต่ละคนก่อนสิ้นเดือนเราะมะฎอน ก่อนนมาซอีด",
        },
      },
      {
        id: "z4",
        front: { en: "What is the rate of Zakat al-Mal on money and gold?", th: "อัตราซะกาตมาลของเงินและทองคำเท่าไร?" },
        back: {
          en: "2.5% — due when wealth reaches the nisab (value of about 5.6 baht-weight of gold) and has been held for one year (354 days).",
          th: "2.5% — เมื่อทรัพย์ถึงพิกัด (มูลค่าเท่ากับทองคำหนักประมาณ 5.6 บาท) และถือครองครบ 1 ปี (354 วัน)",
        },
      },
      {
        id: "z5",
        front: { en: "What are the zakat rates on crops, livestock and treasure?", th: "อัตราซะกาตของพืชผล ปศุสัตว์ และทรัพย์ที่พบคือเท่าไร?" },
        back: {
          en: "Crops: 10% (rain-watered) or 5% (irrigated). Livestock: paid in animals when the count is reached. Found treasure: 20%.",
          th: "พืชผล: 10% (ใช้น้ำธรรมชาติ) หรือ 5% (ใช้ชลประทาน) ปศุสัตว์: จ่ายเป็นตัวเมื่อถึงจำนวน ทรัพย์ที่พบในดิน: 20%",
        },
      },
      {
        id: "z6",
        front: { en: "Who is eligible to receive zakat?", th: "ใครมีสิทธิ์รับซะกาต?" },
        back: {
          en: "Eight groups, including the poor, the needy, new Muslims, those managing zakat, debtors, freeing captives, travellers in need, and those in the cause of Allah.",
          th: "8 จำพวก เช่น คนยากจน คนขัดสน ผู้เข้ารับอิสลามใหม่ ผู้บริหารจัดการซะกาต ผู้มีหนี้สินล้นตัว ไถ่ทาส ผู้พลัดถิ่นหลงทาง และผู้อยู่ในหนทางของอัลลอฮ",
        },
      },
      {
        id: "z7",
        front: { en: "Who may NOT receive your zakat?", th: "ใครที่ไม่มีสิทธิ์รับซะกาตของเรา?" },
        back: {
          en: "Your own parents/grandparents, your children/grandchildren, and your spouse — because supporting them is already your duty.",
          th: "พ่อแม่ปู่ย่าตายาย ลูกหลาน และสามีหรือภรรยา เพราะเป็นหน้าที่ที่ต้องเลี้ยงดูอยู่แล้ว",
        },
      },
    ],
  },

  // 8. HAJJ ───────────────────────────────────────────────────
  {
    id: "hajj",
    icon: "🕋",
    title: { en: "Pilgrimage (Hajj)", th: "การประกอบพิธีฮัจญ์" },
    description: {
      en: "The journey to Makkah: who, when, and its main rites.",
      th: "การเดินทางสู่มักกะฮ: ใคร เมื่อไร และขั้นตอนหลัก",
    },
    cards: [
      {
        id: "h1",
        front: { en: "What is Hajj and when is it performed?", th: "ฮัจญ์คืออะไร ทำเมื่อไร?" },
        back: {
          en: "The pilgrimage to Makkah, performed once in a lifetime by those able, during the 8th–13th of Dhul-Hijjah.",
          th: "การเดินทางไปประกอบศาสนกิจที่นครมักกะฮ ครั้งหนึ่งในชีวิตสำหรับผู้มีความสามารถ ระหว่างวันที่ 8–13 เดือนซุลฮิจญะฮ",
        },
      },
      {
        id: "h2",
        front: { en: "What are the conditions for Hajj?", th: "คุณสมบัติของผู้จะไปทำฮัจญ์?" },
        back: {
          en: "Be Muslim, of age, sane, financially able with a safe route, and (for a woman) accompanied by a mahram.",
          th: "เป็นมุสลิม บรรลุศาสนภาวะ มีสติปัญญาสมบูรณ์ มีทรัพย์พอและเส้นทางปลอดภัย และ (สำหรับหญิง) ต้องมีมะฮรอมไปด้วย",
        },
      },
      {
        id: "h3",
        front: { en: "What are the main rites of Hajj?", th: "องค์ประกอบหลักของฮัจญ์มีอะไรบ้าง?" },
        back: {
          en: "Entering ihram (with intention), standing at Arafah (wuquf), circling the Ka'bah (tawaf), walking Safa–Marwah (sa'i), and shaving/trimming the hair (tahallul).",
          th: "การครองเอี๊ยะฮรอม (พร้อมเจตนา) การวุกูฟที่อารอฟะฮ การเฏาะวาฟรอบกะอบะฮ การสะแอระหว่างเศาะฟา–มัรวะฮ และการตะฮัลลุล (โกน/ขลิบผม)",
        },
      },
      {
        id: "h4",
        front: { en: "What is Umrah?", th: "อุมเราะฮคืออะไร?" },
        back: {
          en: "A voluntary “lesser pilgrimage” to Makkah that can be performed any time of the year, outside the Hajj season.",
          th: "การปฏิบัติศาสนกิจด้วยความสมัครใจในช่วงเวลาอื่นๆ ที่ไม่ใช่ช่วงฮัจญ์ ทำได้ตลอดปี",
        },
      },
      {
        id: "h5",
        front: { en: "What is the Ka'bah?", th: "กะอบะฮคืออะไร?" },
        back: {
          en: "The cube-shaped House of Allah (Baitullah) in Makkah that Muslims face in prayer. Tawaf begins at the Black Stone corner.",
          th: "บัยตุลลอฮ (บ้านของอัลลอฮ) รูปทรงลูกบาศก์ในมักกะฮ ที่มุสลิมผินหน้าไปในการนมาซ การเฏาะวาฟเริ่มที่มุมหินดำ",
        },
      },
      {
        id: "h6",
        front: { en: "What is a mahram?", th: "มะฮรอมคือใคร?" },
        back: {
          en: "A man a woman can never marry due to blood ties — e.g. her father, son, brother, uncle, nephew — who may accompany her.",
          th: "ผู้ชายที่มีความสัมพันธ์ทางสายเลือดและแต่งงานกันไม่ได้ เช่น พ่อ ลูกชาย พี่/น้องชาย ลุง/อา หลานชาย ที่สามารถเป็นผู้ติดตามได้",
        },
      },
    ],
  },

  // 9. VIRTUES ────────────────────────────────────────────────
  {
    id: "virtues",
    icon: "💚",
    title: { en: "The 5 Core Virtues", th: "คุณธรรมพื้นฐาน 5 ประการ" },
    description: {
      en: "The inner qualities Islam builds in the heart.",
      th: "คุณสมบัติภายในที่อิสลามสร้างในจิตใจ",
    },
    cards: [
      {
        id: "v0",
        front: { en: "What are the 5 foundational virtues?", th: "คุณธรรมพื้นฐาน 5 ประการมีอะไรบ้าง?" },
        back: {
          en: "1) Taqwa (God-consciousness), 2) Ikhlas (sincerity), 3) Tawakkul (trust in God), 4) Sabr (patience), 5) Shukr (gratitude).",
          th: "1) ตักวา (ความยำเกรง) 2) อิคลาศ (ความบริสุทธิ์ใจ) 3) ตะวักกุล (ความไว้วางใจในพระเจ้า) 4) ซ็อบรุ (ความอดทน) 5) ชุกูร (ความกตัญญู)",
        },
      },
      {
        id: "v1",
        front: { en: "Taqwa — God-consciousness", th: "ตักวา — ความยำเกรงพระเจ้า" },
        back: {
          en: "Building a heart that fears and is mindful of Allah in every action. Only the mindful truly benefit from the Quran.",
          th: "การสร้างจิตที่ยำเกรงและระลึกถึงอัลลอฮในทุกการกระทำ เฉพาะผู้ยำเกรงเท่านั้นที่ได้ประโยชน์จากกุรอาน",
        },
      },
      {
        id: "v2",
        front: { en: "Ikhlas — sincerity", th: "อิคลาศ — ความบริสุทธิ์ใจ" },
        back: {
          en: "Doing every deed purely for Allah, not for show or praise. Actions are judged by the intention of the heart.",
          th: "การทำทุกสิ่งเพื่ออัลลอฮเพียงผู้เดียว ไม่ใช่เพื่ออวดหรือคำสรรเสริญ ทุกการกระทำวัดกันที่เจตนาของหัวใจ",
        },
      },
      {
        id: "v3",
        front: { en: "Tawakkul — trust in Allah", th: "ตะวักกุล — ความไว้วางใจในพระเจ้า" },
        back: {
          en: "Putting trust in Allah *after* doing your best effort and planning — not passivity.",
          th: "การมอบความไว้วางใจต่ออัลลอฮ *หลังจาก* ที่เราได้พยายามและวางแผนอย่างเต็มที่แล้ว ไม่ใช่การนิ่งเฉย",
        },
      },
      {
        id: "v4",
        front: { en: "Sabr — patience", th: "ซ็อบรุ — ความอดทน" },
        back: {
          en: "Steadfast endurance and firmness when facing hardship, waiting for the right time, and facing obstacles with courage.",
          th: "ความอดทนและความหนักแน่นมั่นคงเมื่อเผชิญความยากลำบาก การรอคอยเวลาที่เหมาะสม และเผชิญอุปสรรคด้วยความกล้าหาญ",
        },
      },
      {
        id: "v5",
        front: { en: "Shukr — gratitude", th: "ชุกูร — ความกตัญญูรู้คุณ" },
        back: {
          en: "Thankfulness shown by heart, tongue and action. The Prophet ﷺ said: “Whoever does not thank people does not thank Allah.”",
          th: "ความขอบคุณที่แสดงออกทางหัวใจ วาจา และการกระทำ ท่านนบีกล่าวว่า “คนที่ไม่ขอบคุณคน ก็จะไม่ขอบคุณอัลลอฮด้วย”",
        },
      },
    ],
  },

  // 10. ETHICS & MANNERS ──────────────────────────────────────
  {
    id: "ethics",
    icon: "🤝",
    title: { en: "Ethics & Manners", th: "จริยธรรมและมารยาท" },
    description: {
      en: "Akhlaq — good character in everyday life, following the Prophet ﷺ.",
      th: "อัคลาก — ความประพฤติดีในชีวิตประจำวัน ตามแบบอย่างท่านนบี",
    },
    cards: [
      {
        id: "e0",
        front: { en: "What is akhlaq (Islamic ethics)?", th: "จริยธรรม (อัคลาก) คืออะไร?" },
        back: {
          en: "Good conduct and manners a Muslim should practice daily, modeled on the example of Prophet Muhammad ﷺ.",
          th: "การประพฤติปฏิบัติอันดีงามที่มุสลิมควรปฏิบัติในชีวิตประจำวัน ตามแบบอย่างของท่านนบีมุฮัมมัด",
        },
      },
      {
        id: "e1",
        front: { en: "Five moral qualities of good ethics", th: "คุณธรรมดี 5 ประการของจริยธรรม" },
        back: {
          en: "Honesty, justice, truthfulness, forgiveness, and compassion.",
          th: "ความซื่อสัตย์สุจริต ความยุติธรรม ความมีสัจจะ การรู้จักให้อภัย และการมีความเมตตา",
        },
      },
      {
        id: "e2",
        front: { en: "Humility & moderation", th: "ความถ่อมตน และความรู้จักพอประมาณ" },
        back: {
          en: "Never seeing yourself as above others, and living with balance — neither stingy nor wasteful.",
          th: "การไม่ถือว่าตัวเองเหนือกว่าผู้อื่น และการใช้ชีวิตอย่างพอดี ไม่ตระหนี่และไม่สุรุ่ยสุร่าย",
        },
      },
      {
        id: "e3",
        front: { en: "Modesty (haya)", th: "ความละอาย (ฮะยาอ์)" },
        back: {
          en: "A sense of shame that guards a person from wrong. Islam counts modesty as part of faith.",
          th: "ความละอายที่ปกป้องมนุษย์จากความชั่ว อิสลามถือว่าความละอายเป็นส่วนหนึ่งของความศรัทธา",
        },
      },
      {
        id: "e4",
        front: { en: "Gentleness & respecting others", th: "ความสุภาพอ่อนโยน และการเคารพผู้อื่น" },
        back: {
          en: "Being soft-hearted and kind, respecting other people's opinions and honoring their dignity.",
          th: "การมีจิตใจอ่อนโยนและเมตตา เคารพความเห็นของผู้อื่น และการให้เกียรติศักดิ์ศรีของผู้อื่น",
        },
      },
      {
        id: "e5",
        front: { en: "Keeping a Muslim identity", th: "การรักษาอัตลักษณ์ความเป็นมุสลิม" },
        back: {
          en: "Living openly by Islamic culture: greeting with salam, dressing modestly, eating halal, and helping others in need.",
          th: "การดำเนินชีวิตตามวัฒนธรรมอิสลาม: ให้สลามในการทักทาย แต่งกายเรียบร้อย กินอาหารฮาลาล และช่วยเหลือผู้เดือดร้อน",
        },
      },
    ],
  },

  // 11. DAILY LIFE & LAW ──────────────────────────────────────
  {
    id: "dailylife",
    icon: "🍽️",
    title: { en: "Daily Life: Dress, Food & Family", th: "ชีวิตประจำวัน: การแต่งกาย อาหาร ครอบครัว" },
    description: {
      en: "Practical Islamic guidance on clothing, food, and marriage.",
      th: "แนวทางอิสลามในการแต่งกาย อาหาร และการแต่งงาน",
    },
    cards: [
      {
        id: "d1",
        front: { en: "How should a Muslim man dress?", th: "ผู้ชายมุสลิมควรแต่งกายอย่างไร?" },
        back: {
          en: "Neat and clean, covering at least from the navel to the knees (his awrah), avoiding gold and silk, and not imitating women.",
          th: "สุภาพ สะอาด เรียบร้อย ปกปิดอย่างน้อยตั้งแต่สะดือถึงหัวเข่า (เอาเราะฮ) ห้ามใส่ทองคำและผ้าไหม และไม่แต่งกายเลียนแบบผู้หญิง",
        },
      },
      {
        id: "d2",
        front: { en: "How should a Muslim woman dress (hijab)?", th: "ผู้หญิงมุสลิมควรแต่งกายอย่างไร (ฮิญาบ)?" },
        back: {
          en: "Cover the whole body except the face and hands, with loose, non-transparent clothing that is not for show or attracting attention.",
          th: "ปกปิดทั้งร่างกายยกเว้นใบหน้าและมือ ด้วยเสื้อผ้าหลวม ไม่โปร่งบาง ไม่ประดับเพื่อเรียกร้องความสนใจ",
        },
      },
      {
        id: "d3",
        front: { en: "What do halal, haram and makruh mean?", th: "ฮาลาล ฮะรอม และมักรูฮ หมายถึงอะไร?" },
        back: {
          en: "Halal = permitted by Allah. Haram = forbidden by Allah. Makruh = not forbidden but disliked, best avoided.",
          th: "ฮาลาล = สิ่งที่อัลลอฮทรงอนุมัติ ฮะรอม = สิ่งที่อัลลอฮทรงห้าม มักรูฮ = ไม่ได้ห้ามแต่ก็ไม่น่ายกย่อง ควรหลีกเลี่ยง",
        },
      },
      {
        id: "d4",
        front: { en: "What foods are forbidden (haram) in the Quran?", th: "อาหารต้องห้ามในคัมภีร์กุรอานมีอะไรบ้าง?" },
        back: {
          en: "Pork and its products, carrion (animals that died by themselves), blood, animals slaughtered for other than Allah, and intoxicants/alcohol.",
          th: "สุกรและผลิตภัณฑ์ สัตว์ที่ตายเอง เลือด สัตว์ที่เชือดในนามอื่นนอกจากอัลลอฮ และเครื่องดื่มแอลกอฮอล์/ของมึนเมา",
        },
      },
      {
        id: "d5",
        front: { en: "What is riba, and what is its ruling?", th: "ริบา (ดอกเบี้ย) คืออะไร มีข้อชี้ขาดอย่างไร?" },
        back: {
          en: "Riba is interest/usury. It is forbidden (haram) — the Quran and Prophet ﷺ warned against it as a grave sin.",
          th: "ริบา คือดอกเบี้ย เป็นสิ่งต้องห้าม (ฮะรอม) กุรอานและท่านนบีเตือนว่าเป็นบาปใหญ่",
        },
      },
      {
        id: "d6",
        front: { en: "What are the conditions for a valid marriage?", th: "เงื่อนไขการแต่งงานที่ถูกต้องคืออะไร?" },
        back: {
          en: "Both are Muslim believers, the bride's guardian (wali) consents, a dowry (mahar) is given, two just witnesses are present, and there is an offer and acceptance.",
          th: "ทั้งคู่เป็นมุสลิมผู้ศรัทธา มีผู้ปกครอง (วะลี) ของฝ่ายหญิงยินยอม มีสินสอด (มะฮัร) มีพยานที่มีคุณธรรม 2 คน และมีคำเสนอและคำตอบรับ",
        },
      },
      {
        id: "d7",
        front: { en: "What does Islam say about having more than one wife?", th: "อิสลามกล่าวถึงการมีภรรยามากกว่าหนึ่งคนอย่างไร?" },
        back: {
          en: "A man may marry up to four, but only on the strict condition of treating them all with complete fairness. If he cannot, he marries only one.",
          th: "ผู้ชายมีภรรยาได้ไม่เกิน 4 คน โดยมีเงื่อนไขสำคัญคือต้องให้ความยุติธรรมเท่าเทียมกันทุกด้าน หากทำไม่ได้ ให้แต่งกับหญิงเพียงคนเดียว",
        },
      },
      {
        id: "d8",
        front: { en: "What is talaq and iddah in divorce?", th: "ฏอลาก และอิดดะฮ ในการหย่าคืออะไร?" },
        back: {
          en: "Talaq is the pronouncement of divorce (a permitted but disliked act). Iddah is the woman's waiting period afterward (about 3 monthly cycles).",
          th: "ฏอลาก คือการกล่าวคำหย่า (สิ่งที่อนุญาตแต่ไม่ชอบ) อิดดะฮ คือช่วงเวลารอคอยของฝ่ายหญิงหลังหย่า (ประมาณ 3 รอบประจำเดือน)",
        },
      },
    ],
  },

  // 12. PROPHETS & HISTORY ────────────────────────────────────
  {
    id: "history",
    icon: "🕰️",
    title: { en: "Prophets & Key Phrases", th: "บรรดานบี และคำกล่าวสำคัญ" },
    description: {
      en: "The prophets, the Night Journey, and phrases Muslims say every day.",
      th: "บรรดานบี อิสรออ์ และคำกล่าวที่มุสลิมใช้ทุกวัน",
    },
    cards: [
      {
        id: "hi1",
        front: { en: "How many prophets were sent, and how many are named in the Quran?", th: "มีนบีกี่ท่าน และมีชื่อในกุรอานกี่ท่าน?" },
        back: {
          en: "Allah sent 124,000 prophets in total; 25 of them are named in the Quran.",
          th: "อัลลอฮทรงส่งบรรดานบีทั้งหมด 124,000 ท่าน โดยมีชื่อระบุในกุรอาน 25 ท่าน",
        },
      },
      {
        id: "hi2",
        front: { en: "What is the difference between a Nabi and a Rasul?", th: "นบีกับรอซูลต่างกันอย่างไร?" },
        back: {
          en: "A Nabi is a prophet who receives revelation. A Rasul is a messenger given a scripture/law to convey — a higher rank.",
          th: "นบี คือผู้ประกาศ/ผู้รับโองการ ส่วนรอซูล คือผู้ที่ได้รับคัมภีร์/บทบัญญัติมาเผยแผ่ ซึ่งมีตำแหน่งสูงกว่า",
        },
      },
      {
        id: "hi3",
        front: { en: "Who is the “father of the prophets”?", th: "ใครคือ “บิดาแห่งบรรดานบี”?" },
        back: {
          en: "Prophet Ibrahim (Abraham) — ancestor of the Muslims, and also revered by Christians and Jews.",
          th: "นบีอิบรอฮีม เป็นบรรพบุรุษของชาวมุสลิม และเป็นที่เคารพของชาวคริสเตียนและชาวยิวด้วย",
        },
      },
      {
        id: "hi4",
        front: { en: "What was the Isra' and Mi'raj?", th: "อิสรออ์ และเมี๊ยะอุรอจญ์คืออะไร?" },
        back: {
          en: "The Prophet's ﷺ miraculous Night Journey from Makkah to Jerusalem (Isra'), then his ascension through the heavens (Mi'raj).",
          th: "การเดินทางอันเป็นปาฏิหาริย์ของท่านนบียามค่ำคืน จากมักกะฮสู่เยรูซาเล็ม (อิสรออ์) แล้วขึ้นสู่ชั้นฟ้า (เมี๊ยะอุรอจญ์)",
        },
      },
      {
        id: "hi5",
        front: { en: "What key command came from the Isra' and Mi'raj?", th: "คำบัญชาสำคัญจากอิสรออ์และเมี๊ยะอุรอจญ์คืออะไร?" },
        back: {
          en: "The 5 daily prayers were made obligatory — first ordained as 50, then reduced by Allah's mercy to 5 (with the reward of 50).",
          th: "การนมาซ 5 เวลาถูกกำหนดเป็นวาญิบ เดิมกำหนด 50 เวลา แล้วทรงลดเหลือ 5 เวลา (แต่ได้ผลบุญเท่า 50)",
        },
      },
      {
        id: "hi6",
        front: { en: "Bismillah", th: "บิสมิลลาฮ" },
        back: {
          en: "“In the name of Allah, the Most Gracious, the Most Merciful.” Said before beginning any action.",
          th: "“ด้วยพระนามของอัลลอฮ ผู้ทรงกรุณาปรานี ผู้ทรงเมตตาเสมอ” กล่าวก่อนเริ่มทำสิ่งต่างๆ",
        },
        arabic: "Bismillāhir-Raḥmānir-Raḥīm",
      },
      {
        id: "hi7",
        front: { en: "Alhamdulillah", th: "อัลฮัมดุลิลลาฮ" },
        back: {
          en: "“All praise is due to Allah.” Said to give thanks and praise.",
          th: "“การสรรเสริญทั้งมวลเป็นของอัลลอฮ” กล่าวเพื่อขอบคุณและสรรเสริญ",
        },
        arabic: "Al-ḥamdu lillāh",
      },
      {
        id: "hi8",
        front: { en: "SubhanAllah & Allahu Akbar", th: "ซุบฮานัลลอฮ และ อัลลอฮุอักบัร" },
        back: {
          en: "SubhanAllah = “Glory be to Allah” (the Pure). Allahu Akbar = “Allah is the Greatest.”",
          th: "ซุบฮานัลลอฮ = “มหาบริสุทธิ์แด่อัลลอฮ” (ผู้ทรงบริสุทธิ์) อัลลอฮุอักบัร = “อัลลอฮผู้ทรงยิ่งใหญ่”",
        },
        arabic: "Subḥānallāh · Allāhu akbar",
      },
      {
        id: "hi9",
        front: { en: "InshaAllah", th: "อินชาอัลลอฮ" },
        back: {
          en: "“If Allah wills.” Said when speaking about the future or making a plan.",
          th: "“หากอัลลอฮทรงประสงค์” กล่าวเมื่อพูดถึงอนาคตหรือการวางแผน",
        },
        arabic: "In shāʾ Allāh",
      },
      {
        id: "hi10",
        front: { en: "What do Muslims say when someone dies or on hearing bad news?", th: "เมื่อมีคนเสียชีวิตหรือได้รับข่าวร้าย มุสลิมกล่าวว่าอย่างไร?" },
        back: {
          en: "“Inna lillahi wa inna ilayhi raji'un” — “Indeed we belong to Allah, and to Him we shall return.”",
          th: "“อินนาลิลลาฮิ วะอินนา อิลัยฮิรอญิอูน” — “เราเป็นกรรมสิทธิ์ของอัลลอฮ และยังพระองค์ที่เราต้องกลับไป”",
        },
        arabic: "Innā lillāhi wa innā ilayhi rājiʿūn",
      },
    ],
  },
];

export const uiText = {
  appTitle: { en: "Learn Islam", th: "เรียนรู้อิสลาม" },
  appSubtitle: {
    en: "Flashcards for new Muslims",
    th: "แฟลชการ์ดสำหรับมุสลิมใหม่",
  },
  chooseDeck: { en: "Choose a topic", th: "เลือกหัวข้อ" },
  cards: { en: "cards", th: "การ์ด" },
  tapToFlip: { en: "Tap the card to flip", th: "แตะการ์ดเพื่อพลิก" },
  question: { en: "Question", th: "คำถาม" },
  answer: { en: "Answer", th: "คำตอบ" },
  prev: { en: "Previous", th: "ก่อนหน้า" },
  next: { en: "Next", th: "ถัดไป" },
  gotIt: { en: "Got it", th: "เข้าใจแล้ว" },
  reviewAgain: { en: "Review again", th: "ทบทวนอีก" },
  shuffle: { en: "Shuffle", th: "สุ่มลำดับ" },
  reset: { en: "Reset", th: "เริ่มใหม่" },
  back: { en: "All topics", th: "ทุกหัวข้อ" },
  learned: { en: "learned", th: "เรียนแล้ว" },
  deckDone: { en: "You've reviewed every card!", th: "คุณทบทวนครบทุกการ์ดแล้ว!" },
  studyAgain: { en: "Study again", th: "เรียนอีกครั้ง" },
  progress: { en: "Progress", th: "ความคืบหน้า" },
} as const;
