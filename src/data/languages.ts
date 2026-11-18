/**
 * MASTER LANGUAGE LIST — DRAFT (operations will supply the approved list).
 * Every language feature on the site (directory, search/checker, assistant, quote form) reads
 * from this one list, so replacing it here updates the whole site.
 *
 * - One region per language (Spanish → Americas, Urdu → South Asia).
 * - No speaker counts.
 * - coverage: "priority" = staffed in our core network;
 *             "rare"     = sourced on request; we confirm feasibility and lead time first.
 */

export const REGIONS = [
  "Africa",
  "Middle East & North Africa",
  "South Asia",
  "East & Southeast Asia",
  "Europe",
  "Americas",
  "Pacific",
] as const;
export type Region = (typeof REGIONS)[number];

export type Coverage = "priority" | "rare";

export type Language = {
  name: string;
  native?: string;
  region: Region;
  coverage: Coverage;
  /** Other names or spellings people search for */
  aka?: string[];
};

const P = "priority" as const, R = "rare" as const;

export const LANGUAGES: Language[] = [
  // Africa
  { name: "Amharic", native: "አማርኛ", region: "Africa", coverage: P },
  { name: "Somali", native: "Soomaali", region: "Africa", coverage: P },
  { name: "Swahili", native: "Kiswahili", region: "Africa", coverage: P },
  { name: "Hausa", native: "Harshen Hausa", region: "Africa", coverage: P },
  { name: "Yoruba", native: "Yorùbá", region: "Africa", coverage: P },
  { name: "Igbo", native: "Asụsụ Igbo", region: "Africa", coverage: P },
  { name: "Tigrinya", native: "ትግርኛ", region: "Africa", coverage: R },
  { name: "Oromo", native: "Afaan Oromoo", region: "Africa", coverage: R },
  { name: "Wolof", native: "Wolof", region: "Africa", coverage: R },
  { name: "Fula", native: "Fulfulde", region: "Africa", coverage: R, aka: ["Fulani", "Pulaar"] },
  { name: "Mandinka", native: "Mandinka", region: "Africa", coverage: R },
  { name: "Dinka", native: "Thuɔŋjäŋ", region: "Africa", coverage: R },
  { name: "Nuer", native: "Thok Naath", region: "Africa", coverage: R },
  { name: "Zaghawa", native: "Beria", region: "Africa", coverage: R },
  { name: "Kinyarwanda", native: "Ikinyarwanda", region: "Africa", coverage: R },
  { name: "Lingala", native: "Lingála", region: "Africa", coverage: R },

  // Middle East & North Africa
  { name: "Arabic (Modern Standard)", native: "العربية الفصحى", region: "Middle East & North Africa", coverage: P, aka: ["Arabic", "MSA"] },
  { name: "Arabic (Gulf)", native: "عربي خليجي", region: "Middle East & North Africa", coverage: P },
  { name: "Arabic (Levantine)", native: "عربي شامي", region: "Middle East & North Africa", coverage: P, aka: ["Syrian", "Lebanese", "Jordanian", "Palestinian"] },
  { name: "Arabic (Egyptian)", native: "مصري", region: "Middle East & North Africa", coverage: P },
  { name: "Arabic (Sudanese)", native: "عربي سوداني", region: "Middle East & North Africa", coverage: R, aka: ["Sudanese"] },
  { name: "Arabic (Maghrebi)", native: "الدارجة", region: "Middle East & North Africa", coverage: R, aka: ["Darija", "Moroccan", "Algerian", "Tunisian"] },
  { name: "Farsi", native: "فارسی", region: "Middle East & North Africa", coverage: P, aka: ["Persian"] },
  { name: "Turkish", native: "Türkçe", region: "Middle East & North Africa", coverage: P },
  { name: "Hebrew", native: "עברית", region: "Middle East & North Africa", coverage: P },
  { name: "Kurdish (Kurmanji)", native: "Kurmancî", region: "Middle East & North Africa", coverage: R },
  { name: "Kurdish (Sorani)", native: "سۆرانی", region: "Middle East & North Africa", coverage: R },
  { name: "Chaldean Neo-Aramaic", native: "ܣܘܪܝܬ", region: "Middle East & North Africa", coverage: R, aka: ["Chaldean", "Assyrian"] },

  // South Asia
  { name: "Hindi", native: "हिन्दी", region: "South Asia", coverage: P },
  { name: "Urdu", native: "اردو", region: "South Asia", coverage: P },
  { name: "Bengali", native: "বাংলা", region: "South Asia", coverage: P, aka: ["Bangla"] },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", region: "South Asia", coverage: P },
  { name: "Dari", native: "دری", region: "South Asia", coverage: P },
  { name: "Pashto", native: "پښتو", region: "South Asia", coverage: P },
  { name: "Nepali", native: "नेपाली", region: "South Asia", coverage: R },
  { name: "Sinhala", native: "සිංහල", region: "South Asia", coverage: R, aka: ["Sinhalese"] },
  { name: "Rohingya", native: "Ruáingga", region: "South Asia", coverage: R },

  // East & Southeast Asia
  { name: "Mandarin", native: "普通话", region: "East & Southeast Asia", coverage: P, aka: ["Chinese"] },
  { name: "Cantonese", native: "廣東話", region: "East & Southeast Asia", coverage: P },
  { name: "Vietnamese", native: "Tiếng Việt", region: "East & Southeast Asia", coverage: P },
  { name: "Korean", native: "한국어", region: "East & Southeast Asia", coverage: P },
  { name: "Japanese", native: "日本語", region: "East & Southeast Asia", coverage: P },
  { name: "Tagalog", native: "Wikang Tagalog", region: "East & Southeast Asia", coverage: P, aka: ["Filipino"] },
  { name: "Thai", native: "ภาษาไทย", region: "East & Southeast Asia", coverage: P },
  { name: "Indonesian", native: "Bahasa Indonesia", region: "East & Southeast Asia", coverage: P },
  { name: "Burmese", native: "မြန်မာဘာသာ", region: "East & Southeast Asia", coverage: R, aka: ["Myanmar"] },
  { name: "Karen", native: "ကညီ", region: "East & Southeast Asia", coverage: R },
  { name: "Khmer", native: "ភាសាខ្មែរ", region: "East & Southeast Asia", coverage: R, aka: ["Cambodian"] },
  { name: "Lao", native: "ພາສາລາວ", region: "East & Southeast Asia", coverage: R },
  { name: "Hmong", native: "Hmoob", region: "East & Southeast Asia", coverage: R },
  { name: "Uyghur", native: "ئۇيغۇرچە", region: "East & Southeast Asia", coverage: R },

  // Europe
  { name: "French", native: "Français", region: "Europe", coverage: P },
  { name: "Portuguese (European)", native: "Português", region: "Europe", coverage: P },
  { name: "Russian", native: "Русский", region: "Europe", coverage: P },
  { name: "Ukrainian", native: "Українська", region: "Europe", coverage: P },
  { name: "German", native: "Deutsch", region: "Europe", coverage: P },
  { name: "Italian", native: "Italiano", region: "Europe", coverage: P },
  { name: "Polish", native: "Polski", region: "Europe", coverage: P },
  { name: "Romanian", native: "Română", region: "Europe", coverage: P },
  { name: "Greek", native: "Ελληνικά", region: "Europe", coverage: P },
  { name: "Albanian", native: "Shqip", region: "Europe", coverage: R },

  // Americas
  { name: "Spanish", native: "Español", region: "Americas", coverage: P },
  { name: "Portuguese (Brazilian)", native: "Português brasileiro", region: "Americas", coverage: P },
  { name: "Haitian Creole", native: "Kreyòl ayisyen", region: "Americas", coverage: P },
  { name: "American Sign Language", native: "ASL", region: "Americas", coverage: P, aka: ["ASL", "Sign language"] },
  { name: "Mam", native: "Qyol Mam", region: "Americas", coverage: R },
  { name: "K'iche'", native: "K'iche'", region: "Americas", coverage: R, aka: ["Quiché"] },
  { name: "Q'anjob'al", native: "Q'anjob'al", region: "Americas", coverage: R },
  { name: "Mixtec", native: "Tu'un savi", region: "Americas", coverage: R },
  { name: "Quechua", native: "Runa Simi", region: "Americas", coverage: R },

  // Pacific
  { name: "Samoan", native: "Gagana Sāmoa", region: "Pacific", coverage: R },
  { name: "Tongan", native: "Lea faka-Tonga", region: "Pacific", coverage: R },
  { name: "Chuukese", native: "Chuuk", region: "Pacific", coverage: R },
  { name: "Marshallese", native: "Kajin M̧ajeļ", region: "Pacific", coverage: R },
];

export const REGION_SUMMARY: Record<Region, string> = {
  Africa: "East, West and Central African languages, including many that general providers cannot staff.",
  "Middle East & North Africa": "Arabic by dialect, plus Farsi, Turkish, Hebrew and Kurdish.",
  "South Asia": "Hindi, Urdu, Bengali, Punjabi, Dari, Pashto and regional languages.",
  "East & Southeast Asia": "Chinese, Korean, Japanese and Southeast Asian languages, including Karen and Hmong.",
  Europe: "Major and Eastern European languages, with event-ready interpreter teams.",
  Americas: "Spanish, Brazilian Portuguese, Haitian Creole, ASL and Indigenous languages of Latin America.",
  Pacific: "Pacific Islander languages for healthcare and public services.",
};

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/['’]/g, "").trim();
}

/** Search by English name, native name or alternative name. */
export function searchLanguages(query: string): Language[] {
  const q = norm(query);
  if (!q) return [];
  return LANGUAGES.filter((l) =>
    [l.name, l.native ?? "", ...(l.aka ?? [])].some((v) => norm(v).includes(q) || (q.length >= 3 && q.includes(norm(v)) && norm(v).length >= 3)),
  );
}

export const coverageLabel = (c: Coverage) => (c === "priority" ? "Core network" : "Sourced on request");
export const coverageDetail = (c: Coverage) =>
  c === "priority"
    ? "Interpreters in our core network. Book video, on-site or event sessions with standard notice."
    : "We source qualified interpreters for this language on request and confirm feasibility and lead time before you book.";
