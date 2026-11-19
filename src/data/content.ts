import type { IconName } from "@/components/ui/Icon";
import type { FaqItem } from "@/components/ui/Faq";

/**
 * COPY DECK v1 (Mariam, 17 Nov 2026), applied 19 Nov 2026.
 * Rules from the deck: no bracketed values on the live site, only Safe claims, no features beyond
 * release R1, no competitor names, no slogans or "X, not Y", no em dashes.
 * Lines waiting for an owner are listed in docs/CONTENT-STATUS.md, never on the page.
 */

/** 6.1 Hero */
export const HERO = {
  eyebrow: "A bayanTech brand",
  title: "Interpreters for healthcare, legal and public-sector work, including the languages that are hard to find.",
  lead: "InterpretNext provides vetted interpreters for hospitals, courts, agencies and international organizations. We cover rare Middle Eastern, African and Asian languages and dialects, and we run every session on our own secure platform.",
};

/** Client logos stay empty until approved with written permission. */
export const CLIENT_LOGOS: { name: string; src: string }[] = [];

/**
 * 6.2 Proof strip. The deck's three numeric items ([N] languages, [N] interpreters, [N] hours) wait
 * for verified figures, so only the Safe statements show.
 */
export const PROOF: { icon: IconName; title: string; body: string }[] = [
  { icon: "retention", title: "Sessions are not recorded by default", body: "We keep only what we need to run and bill the session." },
  { icon: "tier-check", title: "Three interpreter tiers", body: "Silver, Gold and Platinum, matched to the subject and the stakes of each session." },
  { icon: "person-check", title: "A person reviews every assignment", body: "A project manager checks each match before it is confirmed." },
  { icon: "dialect", title: "Matched by dialect", body: "Tell us where the speaker is from and we match the dialect as well as the language." },
];

/** 6.3 Find the right service. "Phone" is left out until phone dial-in ships (R3). */
export const FINDER_COPY = {
  title: "Start with the situation",
  lead: "Tell us what is happening and we will suggest the service that fits. A team member confirms every booking.",
  assistantPrompt: "Not sure? Describe your situation in a sentence.",
  assistantButton: "Ask the assistant",
  assistantFirst: "Tell me who needs to talk to whom and about what. I will suggest a service, and a person on our team will confirm it with you.",
};

export const FINDER: { id: string; label: string; hint: string; service: string; body: string }[] = [
  {
    id: "conversation",
    label: "A conversation by video",
    hint: "Patient visits, claims calls, case interviews",
    service: "video-remote",
    body: "Remote interpreting for patient visits, claims calls, case interviews and service desks. You book a session, we assign an interpreter matched to the language, dialect and subject, and we send the meeting link.",
  },
  {
    id: "hearing",
    label: "A hearing, deposition or consultation",
    hint: "Legal and medical settings",
    service: "on-site",
    body: "Video interpreting with a qualified interpreter for legal and medical settings. For the highest-stakes sessions we can place an interpreter on site.",
  },
  {
    id: "event",
    label: "A conference or live event",
    hint: "Webinars, summits, hybrid events",
    service: "conference",
    body: "Simultaneous interpreting for webinars, summits and hybrid events, on request.",
  },
  {
    id: "document",
    label: "A document",
    hint: "Legal and medical paperwork",
    service: "documents",
    body: "Certified translation for legal and medical paperwork, handled by the bayanTech translation team.",
  },
];

/** 6.5 Hard-to-staff languages (replaces the scrolling ticker). */
export const HARD_LANGUAGES = {
  title: "Languages that take longer to find",
  body: "Some requests are hard to fill: Tigrinya in a clinic, Sudanese Arabic in a courtroom, Dari at a resettlement agency. bayanTech has recruited and managed interpreters in these languages for years. We match by dialect as well as language, so you get the right Arabic, not just any Arabic.",
};

/** 6.6 Our interpreters */
export const INTERPRETERS = {
  title: "How we choose who takes your session",
  body: "Every interpreter is reviewed by our localization team before their first assignment. We look at certifications, years of experience, subject expertise and, over time, client ratings. A project manager reviews each assignment before it is confirmed.",
  ai: "Tools we use for testing are AI-assisted. A person approves every result.",
};

/** 6.7 Secure platform (short) and section 8 controls. Only Safe lines; launch-day features are R1 in the matrix. */
export const PLATFORM = {
  title: "Your session runs on our platform",
  lead: "Many remote sessions run on general-purpose meeting tools. InterpretNext sessions run on a platform bayanTech built for interpreting. That lets us control who joins, what is stored and who can see it. Sessions are not recorded by default, interpreters see only the sessions they are assigned to, and they never see pricing.",
  features: [
    { icon: "retention" as IconName, title: "No recording", body: "Sessions are not recorded by default." },
    { icon: "access-control" as IconName, title: "Limited interpreter access", body: "Interpreters see only the sessions assigned to them and only the materials the project manager shares." },
    { icon: "privacy-policy" as IconName, title: "No pricing exposure", body: "Interpreters never see pricing or payment details." },
    { icon: "platform-access" as IconName, title: "Role-based access", body: "Clients, sales, project managers, interpreters and admins each see only what their role needs." },
  ],
};

/** Section 8 table, Safe rows only. Encryption, hosting and BAA wait for Eng. Ouf; two-factor sign-in is R2. */
export const PLATFORM_CONTROLS: { icon: IconName; title: string; body: string }[] = [
  ...PLATFORM.features,
  { icon: "audit-log", title: "Audit trail", body: "Access and changes are logged, so we can show who viewed or changed what and when." },
  { icon: "security", title: "Idle sign-out", body: "Inactive sessions end automatically." },
  { icon: "nda", title: "Confidentiality", body: "Every interpreter accepts our confidentiality terms before their first assignment." },
  { icon: "disclosure", title: "Upload checks", body: "Files are checked for type, size and malware before they are shared." },
];

export const PLATFORM_PAGE = {
  title: "Secure interpreting on a platform we built",
  lead: "Interpreted conversations carry medical history, case details and personal data. InterpretNext runs sessions on a platform built by bayanTech for interpreting. That means we decide what is stored, who can see it and for how long.",
  keep: "We keep the details we need to run and bill the session: date, duration, languages, the roles involved and the quality rating.",
};

/** 6.8 How it works: the R1 golden path, true on day one. */
export const SESSION_STEPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "request", title: "Request a quote", body: "Tell us the languages, the date and time with your time zone, the subject and how long you need. Sales can also fill this in for you after a call." },
  { icon: "this-month", title: "Approve and share materials", body: "Approve the quote online. Then upload the glossary or background documents your interpreter should see." },
  { icon: "match", title: "We assign and confirm", body: "A project manager picks an interpreter matched to your language, dialect and subject. You receive the meeting link and calendar invite." },
  { icon: "join", title: "Session, then follow-up", body: "The interpreter checks in and out, we confirm the actual time, you rate the session and pay by card or invoice." },
];

/** 6.9 Trust Center summary: confirmed items only. */
export const TRUST_SUMMARY = {
  title: "Compliance and security in plain terms",
  lead: "We list what we do, what is in progress and what you can ask us for. Your security team can read it before you sign.",
  items: [
    { icon: "nda" as IconName, title: "Confidentiality terms accepted by every interpreter before their first assignment" },
    { icon: "audit-log" as IconName, title: "Role-based access and an audit log" },
    { icon: "hipaa" as IconName, title: "Built around HIPAA safeguards" },
  ],
};

/** 6.10 Proof from clients. Left out until one approved, named quote exists. Never anonymous. */
export const TESTIMONIAL: { quote: string; name: string; role: string; org: string } | null = null;

/** 6.12 Closing call to action */
export const CLOSING = {
  title: "Tell us about your next session",
  body: "Send the languages, the date and the subject. We will reply with a quote and the interpreter profile we propose.",
};

export const PRICING = {
  drivers: [
    { icon: "languages-200" as IconName, title: "Language and dialect", body: "Widely spoken languages and languages that take longer to find are priced differently." },
    { icon: "modalities" as IconName, title: "Service", body: "Remote, on-site and event interpreting each have their own rates." },
    { icon: "this-week" as IconName, title: "Duration and volume", body: "Session length, frequency and monthly volume shape the price." },
    { icon: "within-48h" as IconName, title: "Notice and timing", body: "Short-notice and after-hours sessions can cost more." },
    { icon: "tiers" as IconName, title: "Interpreter tier", body: "Medical and legal sessions use higher-tier interpreters." },
    { icon: "regions" as IconName, title: "Travel", body: "On-site assignments may include travel time and expenses." },
  ],
  included: [
    "An interpreter matched to your language, dialect and subject",
    "A project manager who reviews the assignment",
    "Confidentiality terms accepted by every interpreter",
    "A meeting link and calendar invite for remote sessions",
    "A session rating, and payment by card or invoice",
  ],
};

/** 6.11 FAQ. Pricing and integrations answers wait for Sales and Eng. Ouf. */
export const FAQ: FaqItem[] = [
  { q: "Which languages do you cover?", a: "See the Languages page. If your language is not listed, send a request and we will tell you whether we can staff it." },
  { q: "How do I book a session?", a: "Request a quote. A specialist replies with the quote and the interpreter profile we propose, and you approve online." },
  { q: "Can I get an interpreter immediately?", a: "Scheduled sessions are available now. On-demand access is planned for a later release. Contact us for urgent requests and we will do our best." },
  { q: "Do you record sessions?", a: "No. Sessions are not recorded by default." },
  { q: "Who can see my documents?", a: "Your project manager decides which files the interpreter sees. The interpreter sees only the sessions assigned to them." },
  { q: "How are interpreters chosen?", a: "Every interpreter is reviewed by our localization team before their first assignment, for certifications, years of experience and subject expertise. A project manager reviews each assignment before it is confirmed." },
  { q: "Do you use AI?", a: "AI supports our testing and scheduling. Interpreting is done by people." },
];

/** Kept for the pricing page; same rules as FAQ. */
export const PROCUREMENT_FAQ: FaqItem[] = [
  FAQ[1],
  { q: "What affects the price?", a: "The language and dialect, the service, the duration and volume, the notice period, the interpreter tier and any travel for on-site work." },
  { q: "How do we pay?", a: "By card or by invoice." },
  FAQ[5],
  { q: "Do interpreters accept confidentiality terms?", a: "Yes. Every interpreter accepts our confidentiality terms before their first assignment. We can also sign your NDA." },
  { q: "Can you support HIPAA requirements?", a: "Our platform is built around HIPAA safeguards. Ask us about business associate agreements before you contract." },
  FAQ[3],
];
