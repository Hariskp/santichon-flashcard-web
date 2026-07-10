// Step-by-step guide to performing Salah (one rak'ah + ending), focused on
// PRONUNCIATION: each recitation shows Arabic script, how to say it
// (romanized for EN / Thai คำอ่าน for TH), and its meaning.
// These are standard, public-domain religious recitations (incl. the Quran).

import { type Lang } from "./decks";

export interface ReciteLine {
  arabic?: string;
  say: Record<Lang, string>; // pronunciation: en = romanized, th = Thai script
  meaning?: Record<Lang, string>;
}

export interface SolatStep {
  id: string;
  name: Record<Lang, string>;
  term?: string;
  instruction: Record<Lang, string>;
  repeat?: Record<Lang, string>;
  recite?: ReciteLine[];
  note?: Record<Lang, string>;
}

export const solatSteps: SolatStep[] = [
  {
    id: "st1",
    name: { en: "Intention & Standing", th: "ตั้งเจตนา และยืนตรง" },
    term: "Niyyah · Qiyam",
    instruction: {
      en: "Stand up straight facing the qibla, and make the intention in your heart to pray.",
      th: "ยืนตรงหันหน้าไปทางกิบลัต และตั้งเจตนาในใจว่าจะละหมาด",
    },
    note: {
      en: "The intention (niyyah) is made silently in the heart — there is no set phrase to say aloud.",
      th: "การตั้งเจตนา (เนียต) ทำอย่างเงียบ ๆ ในใจ ไม่มีคำที่ต้องกล่าวออกเสียง",
    },
  },
  {
    id: "st2",
    name: { en: "Opening Takbir", th: "ตักบีเราะตุลอิฮฺรอม" },
    term: "Takbiratul-Ihram",
    instruction: {
      en: "Raise both hands up to your ears and say:",
      th: "ยกมือทั้งสองข้างขึ้นระดับใบหู แล้วกล่าวว่า:",
    },
    recite: [
      {
        arabic: "اللّٰهُ أَكْبَر",
        say: { en: "Allāhu Akbar", th: "อัลลอฮุ อักบัร" },
        meaning: { en: "Allah is the Greatest", th: "อัลลอฮผู้ทรงยิ่งใหญ่" },
      },
    ],
  },
  {
    id: "st3",
    name: { en: "Recite Al-Fatihah", th: "อ่านซูเราะฮอัลฟาติฮะฮ" },
    term: "Qiyam",
    instruction: {
      en: "Place your right hand over your left on your chest and recite Surah Al-Fatihah:",
      th: "วางมือขวาทับมือซ้ายไว้บนหน้าอก แล้วอ่านซูเราะฮอัลฟาติฮะฮ:",
    },
    recite: [
      {
        arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم",
        say: { en: "Bismillāhir-Raḥmānir-Raḥīm", th: "บิสมิลลาฮิรฺ เราะฮฺมานิรฺ เราะฮีม" },
        meaning: {
          en: "In the name of Allah, the Most Gracious, the Most Merciful",
          th: "ด้วยพระนามของอัลลอฮ ผู้ทรงกรุณาปรานี ผู้ทรงเมตตาเสมอ",
        },
      },
      {
        arabic: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْن",
        say: { en: "Al-ḥamdu lillāhi Rabbil-'ālamīn", th: "อัลฮัมดุ ลิลลาฮิ ร็อบบิล อาละมีน" },
        meaning: {
          en: "All praise is for Allah, Lord of all the worlds",
          th: "การสรรเสริญทั้งมวลเป็นของอัลลอฮ พระผู้อภิบาลแห่งสากลโลก",
        },
      },
      {
        arabic: "اَلرَّحْمٰنِ الرَّحِيْم",
        say: { en: "Ar-Raḥmānir-Raḥīm", th: "อัรฺเราะฮฺมานิรฺ เราะฮีม" },
        meaning: { en: "The Most Gracious, the Most Merciful", th: "ผู้ทรงกรุณาปรานี ผู้ทรงเมตตาเสมอ" },
      },
      {
        arabic: "مٰلِكِ يَوْمِ الدِّيْن",
        say: { en: "Māliki yawmid-dīn", th: "มาลิกิ เยามิดดีน" },
        meaning: { en: "Master of the Day of Judgment", th: "ผู้ทรงสิทธิ์แห่งวันตอบแทน" },
      },
      {
        arabic: "اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْن",
        say: { en: "Iyyāka na'budu wa iyyāka nasta'īn", th: "อียยากะ นะอฺบุดุ วะอียยากะ นัสตะอีน" },
        meaning: {
          en: "You alone we worship, and You alone we ask for help",
          th: "เฉพาะพระองค์เท่านั้นที่เราเคารพภักดี และเฉพาะพระองค์ที่เราขอความช่วยเหลือ",
        },
      },
      {
        arabic: "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْم",
        say: { en: "Ihdinaṣ-ṣirāṭal-mustaqīm", th: "อิฮฺดินัซ ซิรอฏ็อล มุสตะกีม" },
        meaning: { en: "Guide us to the straight path", th: "ขอทรงชี้นำเราสู่ทางอันเที่ยงตรง" },
      },
      {
        arabic: "صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّآلِّيْن",
        say: {
          en: "Ṣirāṭal-ladhīna an'amta 'alayhim, ghayril-maghḍūbi 'alayhim wa laḍ-ḍāllīn",
          th: "ซิรอฏ็อลละซีนะ อันอัมตะ อะลัยฮิม ฆ็อยริล มัฆฎูบิ อะลัยฮิม วะลัฎ ฎอลลีน",
        },
        meaning: {
          en: "The path of those You have blessed — not of those who earned anger, nor of those who went astray",
          th: "ทางของบรรดาผู้ที่พระองค์ทรงโปรดปราน มิใช่ทางของผู้ที่ถูกกริ้ว และมิใช่ทางของผู้ที่หลงผิด",
        },
      },
    ],
  },
  {
    id: "st4",
    name: { en: "Ruku' (Bowing)", th: "รุกู้อ (การก้ม)" },
    term: "Ruku'",
    instruction: {
      en: "Bow with a straight back, hands on your knees, and say:",
      th: "ก้มลงให้หลังตรง วางมือบนหัวเข่า แล้วกล่าว:",
    },
    repeat: { en: "Repeat 3 times", th: "กล่าว 3 ครั้ง" },
    recite: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيْم",
        say: { en: "Subḥāna Rabbiyal-'Aẓīm", th: "ซุบฮานะ ร็อบบิยัล อะซีม" },
        meaning: {
          en: "Glory to my Lord, the Most Great",
          th: "มหาบริสุทธิ์แด่พระผู้อภิบาลของฉัน ผู้ทรงยิ่งใหญ่",
        },
      },
    ],
  },
  {
    id: "st5",
    name: { en: "I'tidal (Rise up)", th: "เอี๊ยะติดาล (ลุกขึ้นยืน)" },
    term: "I'tidal",
    instruction: {
      en: "Rise back to standing upright, saying the first line as you rise, then the second:",
      th: "ลุกขึ้นยืนตรง กล่าวประโยคแรกขณะลุกขึ้น แล้วตามด้วยประโยคที่สอง:",
    },
    recite: [
      {
        arabic: "سَمِعَ اللّٰهُ لِمَنْ حَمِدَه",
        say: { en: "Sami'Allāhu liman ḥamidah", th: "สะมิอัลลอฮุ ลิมัน ฮะมิดะฮ" },
        meaning: {
          en: "Allah hears the one who praises Him",
          th: "อัลลอฮทรงได้ยินผู้ที่สรรเสริญพระองค์",
        },
      },
      {
        arabic: "رَبَّنَا لَكَ الْحَمْد",
        say: { en: "Rabbanā lakal-ḥamd", th: "ร็อบบะนา ละกัล ฮัมด" },
        meaning: { en: "Our Lord, all praise is for You", th: "โอ้พระผู้อภิบาลของเรา การสรรเสริญเป็นของพระองค์" },
      },
    ],
  },
  {
    id: "st6",
    name: { en: "Sujud (Prostration)", th: "สุญูด (การกราบ)" },
    term: "Sujud",
    instruction: {
      en: "Prostrate with forehead, nose, palms, knees and toes on the ground, and say:",
      th: "กราบลงให้หน้าผาก จมูก ฝ่ามือ เข่า และปลายเท้าแตะพื้น แล้วกล่าว:",
    },
    repeat: { en: "Repeat 3 times", th: "กล่าว 3 ครั้ง" },
    recite: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        say: { en: "Subḥāna Rabbiyal-A'lā", th: "ซุบฮานะ ร็อบบิยัล อะอฺลา" },
        meaning: {
          en: "Glory to my Lord, the Most High",
          th: "มหาบริสุทธิ์แด่พระผู้อภิบาลของฉัน ผู้ทรงสูงส่ง",
        },
      },
    ],
  },
  {
    id: "st7",
    name: { en: "Sitting between prostrations", th: "นั่งระหว่างสองสุญูด" },
    term: "Julus",
    instruction: {
      en: "Sit up calmly and say:",
      th: "นั่งขึ้นอย่างสงบ แล้วกล่าว:",
    },
    recite: [
      {
        arabic: "رَبِّ اغْفِرْ لِيْ",
        say: { en: "Rabbighfir lī", th: "ร็อบบิฆฟิร ลี" },
        meaning: { en: "My Lord, forgive me", th: "โอ้พระผู้อภิบาล ขอทรงอภัยแก่ฉัน" },
      },
    ],
  },
  {
    id: "st8",
    name: { en: "Second Prostration", th: "สุญูดครั้งที่สอง" },
    term: "Sujud",
    instruction: {
      en: "Prostrate a second time, exactly as before. This completes one rak'ah (unit).",
      th: "กราบเป็นครั้งที่สองเหมือนเดิมทุกประการ เมื่อครบถือว่าจบ 1 ร็อกอัต",
    },
    repeat: { en: "Repeat 3 times", th: "กล่าว 3 ครั้ง" },
    recite: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        say: { en: "Subḥāna Rabbiyal-A'lā", th: "ซุบฮานะ ร็อบบิยัล อะอฺลา" },
        meaning: {
          en: "Glory to my Lord, the Most High",
          th: "มหาบริสุทธิ์แด่พระผู้อภิบาลของฉัน ผู้ทรงสูงส่ง",
        },
      },
    ],
  },
  {
    id: "st9",
    name: { en: "Tashahhud", th: "ตะชะฮฮุด" },
    term: "Tashahhud",
    instruction: {
      en: "In the final sitting, raise your right index finger and recite the tashahhud:",
      th: "ในการนั่งครั้งสุดท้าย ชี้นิ้วชี้ขวา แล้วอ่านตะชะฮฮุด:",
    },
    recite: [
      {
        arabic:
          "اَلتَّحِيَّاتُ لِلّٰهِ وَالصَّلَوَاتُ وَالطَّيِّبَات، اَلسَّلَامُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُه، اَلسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِيْن",
        say: {
          en: "At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibāt, as-salāmu 'alayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh, as-salāmu 'alaynā wa 'alā 'ibādillāhiṣ-ṣāliḥīn",
          th: "อัตตะฮียยาตุ ลิลลาฮิ วัศเศาะละวาตุ วัฏฏ็อยยิบาต, อัสสะลามุ อะลัยกะ อัยยุฮัน นะบียยุ วะเราะฮฺมะตุลลอฮิ วะบะเราะกาตุฮ, อัสสะลามุ อะลัยนา วะอะลา อิบาดิลลาฮิศ ศอลิฮีน",
        },
        meaning: {
          en: "All greetings, prayers and good things are for Allah. Peace be upon you, O Prophet, and Allah's mercy and blessings. Peace be upon us and upon the righteous servants of Allah.",
          th: "การคำนับ การละหมาด และสิ่งดีงามทั้งหลายเป็นของอัลลอฮ ขอความสันติจงมีแด่ท่าน โอ้ท่านนบี และความเมตตาของอัลลอฮและความจำเริญของพระองค์ ขอความสันติจงมีแด่เราและปวงบ่าวผู้ดีงามของอัลลอฮ",
        },
      },
      {
        arabic: "اَشْهَدُ اَنْ لَّا اِلٰهَ اِلَّا اللّٰه، وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُه",
        say: {
          en: "Ash-hadu an lā ilāha illallāh, wa ash-hadu anna Muḥammadan 'abduhu wa rasūluh",
          th: "อัชฮะดุ อัลลา อิลาฮะ อิลลัลลอฮ, วะอัชฮะดุ อันนะ มุฮัมมะดัน อับดุฮู วะเราะซูลุฮ",
        },
        meaning: {
          en: "I bear witness that there is no god but Allah, and that Muhammad is His servant and Messenger.",
          th: "ฉันขอปฏิญาณว่าไม่มีพระเจ้าอื่นใดนอกจากอัลลอฮ และมุฮัมมัดเป็นบ่าวและศาสนทูตของพระองค์",
        },
      },
    ],
  },
  {
    id: "st10",
    name: { en: "Salam (Ending)", th: "การให้สลาม (จบละหมาด)" },
    term: "Taslim",
    instruction: {
      en: "Turn your head to the right, then to the left, giving salam to end the prayer:",
      th: "ผินหน้าไปทางขวา แล้วทางซ้าย พร้อมให้สลามเพื่อจบละหมาด:",
    },
    recite: [
      {
        arabic: "اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰه",
        say: { en: "Assalāmu 'alaykum wa raḥmatullāh", th: "อัสสะลามุ อะลัยกุม วะเราะฮฺมะตุลลอฮ" },
        meaning: {
          en: "Peace and mercy of Allah be upon you",
          th: "ขอความสันติและความเมตตาของอัลลอฮจงมีแด่ท่าน",
        },
      },
    ],
  },
];

export const solatText = {
  navShort: { en: "Salah", th: "ละหมาด" },
  title: { en: "How to Pray — step by step", th: "วิธีละหมาด ทีละขั้นตอน" },
  intro: {
    en: "Learn each step of one rak'ah with the words to recite and how to say them. 🕌",
    th: "เรียนรู้แต่ละขั้นตอนของ 1 ร็อกอัต พร้อมบทที่ต้องอ่านและวิธีออกเสียง 🕌",
  },
  step: { en: "Step", th: "ขั้นที่" },
  pronounce: { en: "How to say it", th: "คำอ่าน" },
  meaning: { en: "Meaning", th: "ความหมาย" },
  prev: { en: "Back", th: "ย้อนกลับ" },
  next: { en: "Next", th: "ถัดไป" },
  restart: { en: "Start over", th: "เริ่มใหม่" },
  done: { en: "Masha'Allah! You've learned one full rak'ah 🎉", th: "มาชาอัลลอฮ! คุณได้เรียนครบ 1 ร็อกอัตแล้ว 🎉" },
} as const;
