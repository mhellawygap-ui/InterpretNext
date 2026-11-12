import type { IconName } from "@/components/ui/Icon";
import { LANGUAGES, type Language } from "@/data/languages";
import { SECTORS } from "@/data/industries";
import { SERVICE_GROUPS, type ServiceItem } from "@/data/services";

/**
 * Rule-based assistant. There is no AI backend yet, so every answer comes from the
 * site's own content (services, sectors, language directory, trust center) and the
 * assistant says plainly that it is automated, with a human hand-off always available.
 * TODO(backend): swap `respond()` for a call to a real assistant API when one exists.
 */

export type Action = { label: string; href: string; primary?: boolean };
export type Chip = { label: string; intent: Intent };
export type Card =
  | { kind: "service"; service: ServiceItem }
  | { kind: "language"; language: Language }
  | { kind: "trust"; items: { icon: IconName; title: string; href: string }[] };

export type BotMessage = {
  from: "bot";
  text: string;
  card?: Card;
  actions?: Action[];
  chips?: Chip[];
  /** When set, the next free-text reply is treated as this kind of question. */
  expect?: "language";
};
export type UserMessage = { from: "user"; text: string };
export type Message = BotMessage | UserMessage;

export type Intent =
  | { type: "menu" }
  | { type: "recommend" }
  | { type: "situation"; service: string }
  | { type: "language-prompt" }
  | { type: "compliance" }
  | { type: "specialist" }
  | { type: "text"; text: string; expect?: "language" };

const SERVICES = SERVICE_GROUPS.flatMap((g) => g.items);
const service = (id: string) => SERVICES.find((s) => s.id === id)!;

export const MAIN_CHIPS: Chip[] = [
  { label: "Recommend a service", intent: { type: "recommend" } },
  { label: "Check a language", intent: { type: "language-prompt" } },
  { label: "Compliance & security", intent: { type: "compliance" } },
  { label: "Talk to a specialist", intent: { type: "specialist" } },
];

export const GREETING: BotMessage = {
  from: "bot",
  text: "Hi, I'm the InterpretNext assistant. I can recommend the right service, check whether we cover a language, or connect you with a specialist. What do you need?",
  chips: MAIN_CHIPS,
};

const SITUATION_CHIPS: Chip[] = [
  { label: "A phone call", intent: { type: "situation", service: "opi" } },
  { label: "A video or face-to-face visit", intent: { type: "situation", service: "vri" } },
  { label: "A live event or webinar", intent: { type: "situation", service: "rsi" } },
  { label: "Someone must be in the room", intent: { type: "situation", service: "on-site" } },
  { label: "Deaf or hard-of-hearing participants", intent: { type: "situation", service: "asl" } },
  { label: "Documents to translate", intent: { type: "situation", service: "document-translation" } },
];

function serviceReply(id: string, lead?: string): BotMessage {
  const s = service(id);
  return {
    from: "bot",
    text: lead ?? `For that, I'd recommend ${s.title.replace(/^(OPI|VRI|RSI)-/, "")}.`,
    card: { kind: "service", service: s },
    actions: [
      { label: "Get a quote", href: `/get-quote/?modality=${s.quote}`, primary: true },
      { label: "Read more", href: `/services/#${s.id}` },
    ],
    chips: [
      { label: "Check a language", intent: { type: "language-prompt" } },
      { label: "Something else", intent: { type: "recommend" } },
    ],
  };
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/** Whole-word (or whole-phrase) match, so "klingon" never matches "on". */
function hasWord(text: string, phrase: string) {
  const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^\\p{L}])${esc}($|[^\\p{L}])`, "u").test(text);
}

export function findLanguage(q: string): Language | undefined {
  const n = normalize(q);
  if (n.length < 2) return undefined;
  return (
    LANGUAGES.find((l) => normalize(l.name) === n || normalize(l.native ?? "") === n) ??
    LANGUAGES.find((l) => normalize(l.name).split(/[\s/()]+/).includes(n)) ??
    LANGUAGES.find((l) => hasWord(n, normalize(l.name)) || (n.length >= 4 && normalize(l.name).startsWith(n))) ??
    LANGUAGES.find((l) => normalize(l.name).split(/[\s/()]+/).some((w) => w.length > 3 && hasWord(n, w))) ??
    LANGUAGES.find((l) => l.native && n.includes(normalize(l.native)))
  );
}

function languageReply(q: string): BotMessage {
  const l = findLanguage(q);
  if (!l) {
    return {
      from: "bot",
      text: `"${q}" isn't in our public directory yet, but our operations team regularly sources rare dialects and low-resource languages. Tell us what you need and we'll confirm feasibility within one business day.`,
      actions: [
        { label: "Request this language", href: "/get-quote/", primary: true },
        { label: "Browse all languages", href: "/languages/#find-a-language" },
      ],
      chips: [{ label: "Check another language", intent: { type: "language-prompt" } }, ...MAIN_CHIPS.slice(0, 1)],
    };
  }
  const when =
    l.availability === "On-demand"
      ? "can usually be connected within minutes, any time of day"
      : l.availability === "Scheduled"
        ? "is booked in advance, usually 24–48 hours ahead"
        : "has limited availability, so we confirm coverage and timing with you first";
  return {
    from: "bot",
    text: `Yes, we cover ${l.name}. It ${when}.`,
    card: { kind: "language", language: l },
    actions: [
      { label: `Get a ${l.name} quote`, href: "/get-quote/", primary: true },
      { label: `See ${l.region} languages`, href: `/languages/?region=${encodeURIComponent(l.region)}#find-a-language` },
    ],
    chips: [{ label: "Check another language", intent: { type: "language-prompt" } }, { label: "Recommend a service", intent: { type: "recommend" } }],
  };
}

const COMPLIANCE: BotMessage = {
  from: "bot",
  text: "InterpretNext operates under Bayantech / Teqneyat Group certifications, with signed confidentiality on every session. Certificates, DPAs and BAAs are available on request for procurement.",
  card: {
    kind: "trust",
    items: [
      { icon: "hipaa", title: "HIPAA-aligned workflows", href: "/trust-center/#privacy" },
      { icon: "iso-17100", title: "ISO 17100 quality", href: "/trust-center/#certifications" },
      { icon: "iso-27001", title: "ISO 27001 security", href: "/trust-center/#security" },
      { icon: "nda", title: "NDA on every linguist", href: "/trust-center/#legal-documents" },
    ],
  },
  actions: [
    { label: "Request documentation", href: "/trust-center/#request-docs", primary: true },
    { label: "Open the Trust Center", href: "/trust-center/" },
  ],
  chips: MAIN_CHIPS.filter((c) => c.intent.type !== "compliance"),
};

const SPECIALIST: BotMessage = {
  from: "bot",
  text: "Happy to hand you over. Share a few details and a specialist replies within one business day with a recommendation and pricing — sooner if it's urgent.",
  actions: [
    { label: "Talk to a specialist", href: "/get-quote/?modality=unsure", primary: true },
    { label: "Get a quote", href: "/get-quote/" },
  ],
  chips: MAIN_CHIPS.filter((c) => c.intent.type !== "specialist"),
};

const KEYWORD_SERVICES: [RegExp, string][] = [
  [/\b(phone|call|telephone|opi|hotline|helpdesk)\b/, "opi"],
  [/\b(video|vri|zoom|teams|telehealth|virtual)\b/, "vri"],
  [/\b(conference|webinar|summit|event|rsi|simultaneous|channels?)\b/, "rsi"],
  [/\b(on[- ]?site|in person|in-person|delegation|site visit|escort|factory)\b/, "on-site"],
  [/\b(asl|sign language|deaf|hard of hearing|cart|caption)/, "asl"],
  [/\b(document|translate|translation|contract|certificate|records?)\b/, "document-translation"],
  [/\b(ai|machine|automatic|transcription)\b/, "ai-speech"],
  [/\b(schedul\w*|ims|management system|coordinat\w*)\b/, "ims"],
];

export function respond(intent: Intent): BotMessage {
  switch (intent.type) {
    case "menu":
      return { from: "bot", text: "Here's what I can help with.", chips: MAIN_CHIPS };
    case "recommend":
      return { from: "bot", text: "What's happening? Pick the closest match.", chips: SITUATION_CHIPS };
    case "situation":
      return serviceReply(intent.service);
    case "language-prompt":
      return { from: "bot", text: "Which language or dialect do you need? Type it below — for example Tigrinya, Dari or Haitian Creole.", expect: "language" };
    case "compliance":
      return COMPLIANCE;
    case "specialist":
      return SPECIALIST;
    case "text": {
      const t = normalize(intent.text);
      if (intent.expect === "language") return languageReply(intent.text.trim());
      if (/^(hi|hello|hey|salam|good (morning|afternoon|evening))\b/.test(t))
        return { from: "bot", text: "Hello! What can I help you with today?", chips: MAIN_CHIPS };
      if (/\b(price|pricing|cost|quote|rate|how much|budget)\b/.test(t))
        return { ...SPECIALIST, text: "Pricing depends on languages, modality and volume, so we tailor every quote. It takes about two minutes and a specialist replies within one business day." };
      if (/\b(human|person|agent|specialist|sales|someone|contact|call me)\b/.test(t)) return SPECIALIST;
      if (/\b(hipaa|iso|gdpr|nda|baa|dpa|security|secure|complian\w*|privacy|confidential\w*)\b/.test(t)) return COMPLIANCE;
      const lang = findLanguage(intent.text);
      if (lang) return languageReply(lang.name);
      for (const [re, id] of KEYWORD_SERVICES) if (re.test(t)) return serviceReply(id);
      const SECTOR_WORDS: Record<string, string[]> = {
        healthcare: ["healthcare", "health", "medical"],
        legal: ["legal", "law"],
        government: ["government", "public sector", "municipal"],
        "global-business": ["global business", "enterprise"],
        conferences: ["conferences", "conference events"],
        "on-site": ["on-site elite", "vip"],
        accessibility: ["accessibility", "accessible"],
        "ai-powered": ["ai-powered", "ai powered"],
      };
      const sector = SECTORS.find((s) => (SECTOR_WORDS[s.id] ?? []).some((w) => hasWord(t, w)));
      if (sector || /\b(court|hospital|clinic|patient|lawyer|attorney|ngo|agency|business|corporate)\b/.test(t)) {
        const s = sector ?? SECTORS.find((x) => (/(court|lawyer|attorney)/.test(t) ? x.id === "legal" : /(hospital|clinic|patient)/.test(t) ? x.id === "healthcare" : /(ngo|agency)/.test(t) ? x.id === "government" : x.id === "global-business"))!;
        return {
          from: "bot",
          text: `We have a dedicated ${s.label} program: ${s.title}`,
          actions: [
            { label: `See ${s.label} interpreting`, href: `/industries/#${s.id}`, primary: true },
            { label: "Get a quote", href: "/get-quote/" },
          ],
          chips: [{ label: "Recommend a service", intent: { type: "recommend" } }, { label: "Check a language", intent: { type: "language-prompt" } }],
        };
      }
      return {
        from: "bot",
        text: "I'm an automated assistant, so I couldn't match that one. Try one of these, or hand it to a specialist — they reply within one business day.",
        chips: MAIN_CHIPS,
      };
    }
  }
}

export function intentLabel(intent: Intent, chipLabel: string) {
  return intent.type === "text" ? intent.text : chipLabel;
}
