import type { Availability } from "@/components/page/Chip";

export const REGIONS = ["African", "Middle Eastern", "Asian", "European", "Americas", "Oceania"] as const;
export type Region = (typeof REGIONS)[number];
export const MODALITIES = ["OPI", "VRI", "RSI", "On-site"] as const;
export type Modality = (typeof MODALITIES)[number];
export const AVAILABILITIES: Availability[] = ["On-demand", "Scheduled", "Limited"];
export const DOMAINS = ["Medical", "Legal", "Government", "Business", "Events", "Accessibility"] as const;
export type Domain = (typeof DOMAINS)[number];

export type Language = {
  name: string;
  native?: string;
  region: Region;
  availability: Availability;
  speakers?: string;
  modalities: Modality[];
  featured?: boolean;
};

const O = "On-demand" as const, S = "Scheduled" as const, L = "Limited" as const;
const B: Modality[] = ["OPI", "VRI"];
const BO: Modality[] = ["OPI", "VRI", "On-site"];
const ALL: Modality[] = ["OPI", "VRI", "RSI", "On-site"];
const P: Modality[] = ["OPI"];

// Order, availability, speaker counts and modalities are transcribed from the Figma directory.
export const LANGUAGES: Language[] = [
  { name: "Amharic", native: "አማርኛ", region: "African", availability: O, speakers: "57M+", modalities: BO, featured: true },
  { name: "Tigrinya", native: "ትግርኛ", region: "African", availability: O, speakers: "9M+", modalities: B, featured: true },
  { name: "Somali", native: "Soomaali", region: "African", availability: O, speakers: "21M+", modalities: BO, featured: true },
  { name: "Oromo", native: "Afaan Oromoo", region: "African", availability: O, speakers: "45M+", modalities: B, featured: true },
  { name: "Hausa", native: "Harshen Hausa", region: "African", availability: S, speakers: "80M+", modalities: B },
  { name: "Yoruba", native: "Yorùbá", region: "African", availability: S, speakers: "45M+", modalities: B },
  { name: "Igbo", native: "Ásụ̀sụ̀ Ìgbò", region: "African", availability: S, speakers: "44M+", modalities: B },
  { name: "Swahili", native: "Kiswahili", region: "African", availability: O, speakers: "200M+", modalities: ["OPI", "VRI", "On-site", "RSI"] },
  { name: "Wolof", native: "Wollof", region: "African", availability: S, speakers: "12M+", modalities: P },
  { name: "Fula / Fulani", native: "Fulfulde", region: "African", availability: L, speakers: "40M+", modalities: P },
  { name: "Dinka", native: "Thuɔŋjäŋ", region: "African", availability: L, speakers: "2M+", modalities: P },
  { name: "Nuer", native: "Thok Naath", region: "African", availability: L, speakers: "1.5M+", modalities: P },
  { name: "Kinyarwanda", native: "Ikinyarwanda", region: "African", availability: S, speakers: "12M+", modalities: B },
  { name: "Lingala", native: "Lingála", region: "African", availability: S, speakers: "25M+", modalities: P },
  { name: "Arabic (MSA)", native: "اللغة العربية", region: "Middle Eastern", availability: O, speakers: "310M+", modalities: ALL, featured: true },
  { name: "Arabic (Gulf)", native: "عربي خليجي", region: "Middle Eastern", availability: O, modalities: BO, featured: true },
  { name: "Arabic (Levantine)", native: "عربي شامي", region: "Middle Eastern", availability: O, modalities: BO, featured: true },
  { name: "Arabic (Egyptian)", native: "مصري", region: "Middle Eastern", availability: O, modalities: BO },
  { name: "Arabic (Maghrebi)", native: "دارجة", region: "Middle Eastern", availability: S, modalities: B },
  { name: "Farsi / Persian", native: "فارسی", region: "Middle Eastern", availability: O, speakers: "80M+", modalities: BO, featured: true },
  { name: "Dari", native: "دری", region: "Middle Eastern", availability: O, speakers: "25M+", modalities: B },
  { name: "Pashto", native: "پښتو", region: "Middle Eastern", availability: O, speakers: "50M+", modalities: B },
  { name: "Kurdish (Kurmanji)", native: "Kurmancî", region: "Middle Eastern", availability: S, speakers: "15M+", modalities: B },
  { name: "Kurdish (Sorani)", native: "سۆرانی", region: "Middle Eastern", availability: S, speakers: "6M+", modalities: B },
  { name: "Turkish", native: "Türkçe", region: "Middle Eastern", availability: O, speakers: "88M+", modalities: ALL },
  { name: "Urdu", native: "اردو", region: "Middle Eastern", availability: O, speakers: "230M+", modalities: BO },
  { name: "Hebrew", native: "עברית", region: "Middle Eastern", availability: S, speakers: "9M+", modalities: BO },
  { name: "Mandarin Chinese", native: "普通话", region: "Asian", availability: O, speakers: "920M+", modalities: ALL, featured: true },
  { name: "Cantonese", native: "廣東話", region: "Asian", availability: O, speakers: "85M+", modalities: BO, featured: true },
  { name: "Japanese", native: "日本語", region: "Asian", availability: O, speakers: "125M+", modalities: ALL },
  { name: "Korean", native: "한국어", region: "Asian", availability: O, speakers: "77M+", modalities: ALL },
  { name: "Hindi", native: "हिन्दी", region: "Asian", availability: O, speakers: "600M+", modalities: BO, featured: true },
  { name: "Vietnamese", native: "Tiếng Việt", region: "Asian", availability: O, speakers: "97M+", modalities: BO },
  { name: "Tagalog / Filipino", native: "Wikang Filipino", region: "Asian", availability: O, speakers: "90M+", modalities: BO },
  { name: "Burmese", native: "မြန်မာဘာသာ", region: "Asian", availability: S, speakers: "42M+", modalities: B },
  { name: "Khmer", native: "ភាសាខ្មែរ", region: "Asian", availability: S, speakers: "16M+", modalities: B },
  { name: "Thai", native: "ภาษาไทย", region: "Asian", availability: O, speakers: "61M+", modalities: BO },
  { name: "Bengali", native: "বাংলা", region: "Asian", availability: O, speakers: "230M+", modalities: B },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", region: "Asian", availability: S, speakers: "125M+", modalities: B },
  { name: "Nepali", native: "नेपाली", region: "Asian", availability: S, speakers: "17M+", modalities: B },
  { name: "Sinhalese", native: "සිංහල", region: "Asian", availability: L, speakers: "17M+", modalities: P },
  { name: "Lao", native: "ພາສາລາວ", region: "Asian", availability: L, speakers: "30M+", modalities: P },
  { name: "Hmong", native: "Hmoob", region: "Asian", availability: S, speakers: "4M+", modalities: B },
  { name: "Indonesian", native: "Bahasa Indonesia", region: "Asian", availability: O, speakers: "270M+", modalities: ["OPI", "VRI", "On-site", "RSI"] },
  { name: "Spanish", native: "Español", region: "European", availability: O, speakers: "500M+", modalities: ALL, featured: true },
  { name: "French", native: "Français", region: "European", availability: O, speakers: "280M+", modalities: ALL, featured: true },
  { name: "Portuguese", native: "Português", region: "European", availability: O, speakers: "250M+", modalities: ALL },
  { name: "Russian", native: "Русский", region: "European", availability: O, speakers: "255M+", modalities: ["OPI", "VRI", "On-site", "RSI"] },
  { name: "German", native: "Deutsch", region: "European", availability: O, speakers: "132M+", modalities: ALL },
  { name: "Italian", native: "Italiano", region: "European", availability: O, speakers: "68M+", modalities: ALL },
  { name: "Polish", native: "Polski", region: "European", availability: O, speakers: "45M+", modalities: BO },
  { name: "Ukrainian", native: "Українська", region: "European", availability: O, speakers: "37M+", modalities: BO },
  { name: "Romanian", native: "Română", region: "European", availability: O, speakers: "26M+", modalities: BO },
  { name: "Dutch", native: "Nederlands", region: "European", availability: O, speakers: "24M+", modalities: ["OPI", "VRI", "On-site", "RSI"] },
  { name: "Greek", native: "Ελληνικά", region: "European", availability: S, speakers: "13M+", modalities: BO },
  { name: "Albanian", native: "Shqip", region: "European", availability: S, speakers: "8M+", modalities: B },
  { name: "Czech", native: "Čeština", region: "European", availability: S, speakers: "10M+", modalities: BO },
  { name: "Haitian Creole", native: "Kreyòl ayisyen", region: "Americas", availability: O, speakers: "12M+", modalities: BO, featured: true },
  { name: "Portuguese (Brazilian)", native: "Português Brasileiro", region: "Americas", availability: O, speakers: "215M+", modalities: ALL },
  { name: "Quechua", native: "Qhichwa", region: "Americas", availability: L, speakers: "10M+", modalities: P },
  { name: "Guaraní", native: "Avañe'ẽ", region: "Americas", availability: L, speakers: "6M+", modalities: P },
  { name: "Samoan", native: "Gagana Samoa", region: "Oceania", availability: S, speakers: "500K+", modalities: B },
  { name: "Tongan", native: "lea faka-Tonga", region: "Oceania", availability: L, speakers: "200K+", modalities: P },
];

/**
 * The Figma file has a Domain filter but no per-language domain data.
 * TODO(content): replace this derivation with real domain coverage per language.
 */
export function domainsFor(l: Language): Domain[] {
  const d: Domain[] = ["Medical", "Legal", "Government"];
  if (l.modalities.includes("On-site")) d.push("Business");
  if (l.modalities.includes("RSI")) d.push("Events");
  return d;
}

export const REGION_CARDS: {
  region: Region;
  image: string;
  body: string;
  chips: string[];
}[] = [
  { region: "African", image: "/images/regions/african.jpg", body: "Our deepest coverage—including rare East, West, and Central African languages that most providers cannot reliably staff.", chips: ["Amharic", "Tigrinya", "Somali", "Swahili", "Oromo"] },
  { region: "Middle Eastern", image: "/images/regions/middle-eastern.jpg", body: "Strong Arabic dialect differentiation—Gulf, Levantine, Egyptian, Maghrebi—plus Farsi, Dari, Pashto, and Kurdish variants.", chips: ["Arabic (MSA)", "Arabic (Gulf)", "Farsi", "Urdu", "Turkish"] },
  { region: "Asian", image: "/images/regions/asian.jpg", body: "Mandarin, Cantonese, Japanese, Korean and Southeast Asian languages including Hmong, Burmese, and Khmer.", chips: ["Mandarin", "Hindi", "Japanese", "Korean", "Vietnamese"] },
  { region: "European", image: "/images/regions/european.jpg", body: "Full European coverage spanning major and Eastern European languages with RSI-ready interpreter teams for live events.", chips: ["Spanish", "French", "Russian", "German", "Ukrainian"] },
  { region: "Americas", image: "/images/regions/americas.jpg", body: "Spanish dialects, Haitian Creole, Brazilian Portuguese, and indigenous languages of the Americas.", chips: ["Spanish", "Haitian Creole", "Portuguese (BR)", "Quechua"] },
  { region: "Oceania", image: "/images/regions/oceania.jpg", body: "Pacific Islander languages including Samoan, Tongan, and other Pacific community languages for healthcare and government.", chips: ["Samoan", "Tongan"] },
];
