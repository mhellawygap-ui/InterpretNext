import type { IconName } from "@/components/ui/Icon";
import { FINDER_COPY } from "@/data/content";
import { availabilityDetail, findLanguage as lookupLanguage, LANGUAGES, type Language } from "@/data/languages";
import { SECTORS } from "@/data/industries";
import { SERVICES, type ServiceItem } from "@/data/services";

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
  expect?: "language" | "situation";
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
  | { type: "text"; text: string; expect?: "language" | "situation" };

const service = (id: string) => SERVICES.find((s) => s.id === id)!;

export const MAIN_CHIPS: Chip[] = [
  { label: "Suggest a service", intent: { type: "recommend" } },
  { label: "Check a language", intent: { type: "language-prompt" } },
  { label: "Compliance & security", intent: { type: "compliance" } },
  { label: "Talk to a person", intent: { type: "specialist" } },
];

export const GREETING: BotMessage = {
  from: "bot",
  text: "Hi, I'm the InterpretNext assistant. I'm automated. I can suggest a service, look up a language, or pass you to a person on our team. What do you need?",
  chips: MAIN_CHIPS,
};

const SITUATION_CHIPS: Chip[] = [
  { label: "A conversation by video", intent: { type: "situation", service: "video-remote" } },
  { label: "A hearing, deposition or consultation", intent: { type: "situation", service: "on-site" } },
  { label: "A conference or live event", intent: { type: "situation", service: "conference" } },
  { label: "A document", intent: { type: "situation", service: "documents" } },
];

/** Planned capabilities: answer honestly that they are not in the launch release. */
const LATER_REPLY: BotMessage = {
  from: "bot",
  text: "On-demand calls, phone dial-in and recording are planned for later releases. Today we offer scheduled sessions by video and on site, with event interpreting on request. Contact us for urgent requests and we will do our best.",
  actions: [
    { label: "See services at launch", href: "/services/", primary: true },
    { label: "Roadmap", href: "/services/#later" },
  ],
  chips: [{ label: "Suggest a service", intent: { type: "recommend" } }, { label: "Talk to a person", intent: { type: "specialist" } }],
};

function serviceReply(id: string, lead?: string): BotMessage {
  const s = service(id);
  return {
    from: "bot",
    text: lead ?? `For that, I'd suggest ${s.title.toLowerCase()}. A person on our team will confirm it with you.`,
    card: { kind: "service", service: s },
    actions: [
      { label: "Request a quote", href: `/get-quote/?modality=${s.quote}`, primary: true },
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

/** Finds a language named anywhere in a sentence ("do you have tigrinya?"), using the master list. */
export function findLanguage(q: string): Language | undefined {
  const n = normalize(q);
  if (n.length < 2) return undefined;
  const direct = lookupLanguage(q);
  if (direct) return direct;
  const words = (s: string) => normalize(s).split(/[\s/()-]+/).filter((w) => w.length > 2);
  return (
    LANGUAGES.find((l) => hasWord(n, normalize(l.name))) ??
    LANGUAGES.find((l) => l.aka.some((a) => a.length > 2 && hasWord(n, normalize(a)))) ??
    LANGUAGES.find((l) => words(l.name).some((w) => w.length > 3 && hasWord(n, w))) ??
    LANGUAGES.find((l) => l.native && l.native.length > 1 && n.includes(normalize(l.native)))
  );
}

function languageReply(q: string): BotMessage {
  const l = findLanguage(q);
  if (!l) {
    return {
      from: "bot",
      text: `"${q}" isn't in our language list yet. Send a request with the dialect or where the speaker is from, and we will tell you whether we can staff it.`,
      actions: [
        { label: "Request a language", href: `/languages/?request=${encodeURIComponent(q)}#request`, primary: true },
        { label: "Browse languages", href: "/languages/#regions" },
      ],
      chips: [{ label: "Check another language", intent: { type: "language-prompt" } }, ...MAIN_CHIPS.slice(0, 1)],
    };
  }
  return {
    from: "bot",
    text: `${l.name} is on our language list. ${availabilityDetail(l)}`,
    card: { kind: "language", language: l },
    actions: [
      { label: `Ask about ${l.name}`, href: `/languages/?request=${encodeURIComponent(l.name)}#request`, primary: true },
      { label: "Request a quote", href: "/get-quote/" },
    ],
    chips: [{ label: "Check another language", intent: { type: "language-prompt" } }, { label: "Suggest a service", intent: { type: "recommend" } }],
  };
}

const COMPLIANCE: BotMessage = {
  from: "bot",
  text: "Sessions run on a platform bayanTech built for interpreting. Sessions are not recorded by default, interpreters see only the sessions assigned to them, and every interpreter accepts our confidentiality terms. For HIPAA, the platform is built around HIPAA safeguards.",
  card: {
    kind: "trust",
    items: [
      { icon: "retention", title: "No recording by default", href: "/secure-platform/" },
      { icon: "access-control", title: "Role-based access", href: "/secure-platform/" },
      { icon: "nda", title: "Confidentiality terms", href: "/trust-center/" },
      { icon: "hipaa", title: "Built around HIPAA safeguards", href: "/trust-center/#in-progress" },
    ],
  },
  actions: [
    { label: "Request the security summary", href: "/trust-center/#request-docs", primary: true },
    { label: "Open the Trust Center", href: "/trust-center/" },
  ],
  chips: MAIN_CHIPS.filter((c) => c.intent.type !== "compliance"),
};

const SPECIALIST: BotMessage = {
  from: "bot",
  text: "Happy to pass you to a person. Request a quote with the languages, the date and the subject, and a specialist will reply with a quote and the interpreter profile we propose.",
  actions: [
    { label: "Request a quote", href: "/get-quote/?modality=unsure", primary: true },
    { label: "Contact Sales", href: "/contact/" },
  ],
  chips: MAIN_CHIPS.filter((c) => c.intent.type !== "specialist"),
};

const KEYWORD_SERVICES: [RegExp, string][] = [
  [/\b(document|translate|translation|contract|certificate|records?|paperwork|forms?)\b/, "documents"],
  [/\b(webinar|online event|simultaneous|rsi|conference|summit|assembly|hybrid|event)\b/, "conference"],
  [/\b(on[- ]?site|in person|in-person|in the room|hearing|deposition|court|delegation|site visit)\b/, "on-site"],
  [/\b(video|vri|telehealth|virtual|appointment|interview|patient|visit|claims?|consultation|meeting|call)\b/, "video-remote"],
];
const LATER_WORDS = /\b(phone|dial|telephone|opi|hotline|on-?demand|instant|right now|immediately|record\w*|transcript\w*)\b/;
const SIGN_WORDS = /\b(asl|sign language|deaf|hard of hearing|cart|caption\w*)\b/;

export function respond(intent: Intent): BotMessage {
  switch (intent.type) {
    case "menu":
      return { from: "bot", text: "Here's what I can help with.", chips: MAIN_CHIPS };
    case "recommend":
      return { from: "bot", text: `${FINDER_COPY.assistantFirst} Or pick the closest match.`, chips: SITUATION_CHIPS, expect: "situation" };
    case "situation":
      return serviceReply(intent.service);
    case "language-prompt":
      return { from: "bot", text: "Which language or dialect do you need? Type it below, for example Tigrinya, Dari or Sudanese Arabic.", expect: "language" };
    case "compliance":
      return COMPLIANCE;
    case "specialist":
      return SPECIALIST;
    case "text": {
      const t = normalize(intent.text);
      if (intent.expect === "language") return languageReply(intent.text.trim());
      if (SIGN_WORDS.test(t))
        return {
          ...SPECIALIST,
          text: "Sign language interpreting is not on our published service list yet. Tell us what you need and our team will confirm whether we can provide it.",
        };
      if (/\b(ai|machine|automatic|artificial intelligence)\b/.test(t) && !/\b(said|again)\b/.test(t))
        return { from: "bot", text: "AI supports our testing and scheduling. Interpreting is done by people, and a person approves every test result.", chips: MAIN_CHIPS };
      if (/^(hi|hello|hey|salam|good (morning|afternoon|evening))\b/.test(t))
        return { from: "bot", text: "Hello! What can I help you with today?", chips: MAIN_CHIPS };
      if (/\b(price|pricing|cost|quote|rate|how much|budget)\b/.test(t))
        return { ...SPECIALIST, text: "Pricing depends on the language and dialect, the service, the duration, the notice and the interpreter tier, so every quote is tailored. You can pay by card or invoice." };
      if (/\b(human|person|agent|specialist|sales|someone|contact)\b/.test(t)) return SPECIALIST;
      if (/\b(hipaa|iso|gdpr|nda|baa|dpa|security|secure|complian\w*|privacy|confidential\w*)\b/.test(t)) return COMPLIANCE;
      const lang = findLanguage(intent.text);
      if (lang) return languageReply(lang.name);
      if (LATER_WORDS.test(t)) return LATER_REPLY;
      for (const [re, id] of KEYWORD_SERVICES) if (re.test(t)) return serviceReply(id);
      if (intent.expect === "situation") return { ...SPECIALIST, text: "Thanks. That one is best handled by a person on our team. Request a quote and describe the situation, and a specialist will suggest the right service." };
      const SECTOR_WORDS: Record<string, string[]> = {
        healthcare: ["healthcare", "health", "medical", "hospital", "clinic", "insurer"],
        legal: ["legal", "law", "lawyer", "attorney", "immigration"],
        government: ["government", "public sector", "municipal", "school", "social services", "agency"],
        ngos: ["ngo", "ngos", "humanitarian", "international organization", "un"],
        business: ["business", "corporate", "negotiation", "board"],
      };
      const sector = SECTORS.find((s) => (SECTOR_WORDS[s.id] ?? []).some((w) => hasWord(t, w)));
      if (sector) {
        return {
          from: "bot",
          text: `${sector.label}: ${sector.intro}`,
          actions: [
            { label: `See ${sector.label}`, href: `/industries/#${sector.id}`, primary: true },
            { label: "Request a quote", href: "/get-quote/" },
          ],
          chips: [{ label: "Suggest a service", intent: { type: "recommend" } }, { label: "Check a language", intent: { type: "language-prompt" } }],
        };
      }
      return {
        from: "bot",
        text: "I'm an automated assistant, so I couldn't match that one. Try one of these, or ask a person on our team.",
        chips: MAIN_CHIPS,
      };
    }
  }
}

export function intentLabel(intent: Intent, chipLabel: string) {
  return intent.type === "text" ? intent.text : chipLabel;
}
