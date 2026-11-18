import type { IconName } from "@/components/ui/Icon";
import type { FaqItem } from "@/components/ui/Faq";

/**
 * DRAFT COPY DECK. Placeholder copy written in buyer vocabulary (language access, interpreting,
 * human-led AI support). Replace with the approved copy deck; owners are listed in
 * docs/CONTENT-STATUS.md. Rules: no competitor names, no features outside the launch release,
 * no unverified numbers.
 */

export const HERO = {
  title: "Professional interpreting for conversations that matter",
  lead: "InterpretNext gives healthcare, legal and public-sector teams qualified interpreters in more than 200 languages and dialects, including hard-to-find African, Middle Eastern and Asian languages. Book video, on-site and event interpreting through one secure platform.",
};

/** Proof strip. CLIENT_LOGOS stays empty until logos are approved with written permission. */
export const CLIENT_LOGOS: { name: string; src: string }[] = [];
export const PROOF_SECTORS: { icon: IconName; label: string }[] = [
  { icon: "healthcare", label: "Healthcare" },
  { icon: "legal", label: "Legal" },
  { icon: "government", label: "Government & NGOs" },
  { icon: "global-business", label: "Enterprise" },
  { icon: "conferences", label: "Events" },
];

/** DRAFT (operations): "200+" must match the master list + sourcing capacity. */
export const KEY_FACTS: { icon: IconName; value: string; label: string }[] = [
  { icon: "languages-200", value: "200+", label: "languages and dialects through our network and on-request sourcing" },
  { icon: "rare", value: "Rare languages", label: "African, Middle Eastern and Asian languages that general providers often cannot staff" },
  { icon: "tiers", value: "3 tiers", label: "of interpreters, matched to the subject and the stakes of each assignment" },
  { icon: "modalities", value: "Video, on-site, events", label: "booked and managed through one platform" },
];

export const FINDER: { id: string; label: string; hint: string; service: string }[] = [
  { id: "visit", label: "A scheduled appointment or interview", hint: "One-to-one or small group", service: "video-remote" },
  { id: "room", label: "Someone needs to be in the room", hint: "Hearings, clinics, site visits", service: "on-site" },
  { id: "event", label: "An online event or meeting with several languages", hint: "Webinars, board meetings", service: "simultaneous" },
  { id: "hybrid", label: "A conference with people in the room and online", hint: "Summits, assemblies", service: "conference" },
  { id: "deaf", label: "Deaf or hard-of-hearing participants", hint: "Sign language, captioning", service: "sign-language" },
  { id: "docs", label: "Documents to translate", hint: "Forms, records, contracts", service: "documents" },
];

/** DRAFT (Eng. Ouf confirms technical lines; legal approves final wording). */
export const PLATFORM = {
  title: "A secure platform built for sensitive conversations",
  lead: "Book, join and manage interpreted sessions in one place. Access is limited to the people in each session, and session content is not stored.",
  features: [
    { icon: "encryption" as IconName, title: "Encrypted sessions", body: "Audio and video are encrypted in transit between participants and the interpreter." },
    { icon: "access-control" as IconName, title: "Role-based access", body: "Interpreters and staff see only what an assignment needs, and only while it is active." },
    { icon: "retention" as IconName, title: "No recording at launch", body: "Session content is not recorded or stored. Booking details are kept for billing and quality review." },
    { icon: "audit-log" as IconName, title: "Access logs", body: "Bookings, joins and changes are logged so your team can review who did what and when." },
  ],
  management: [
    { title: "One request form for every mode", body: "Ask for video, on-site, event or document work with the same short form." },
    { title: "Confirmed bookings with join links", body: "Each confirmed session comes with a calendar invite and a secure join link." },
    { title: "Interpreter briefings", body: "Share glossaries, agendas and case notes ahead of time so the interpreter arrives prepared." },
    { title: "Clear invoices", body: "Each invoice lists sessions, languages, duration and mode." },
  ],
};

/** DRAFT (product): platforms to be confirmed by Eng. Ouf before any are named. */
export const INTEGRATIONS: { icon: IconName; title: string; body: string; later?: boolean }[] = [
  { icon: "join", title: "Video meeting platforms", body: "Add an interpreter to the video tools your teams already use." },
  { icon: "this-week", title: "Calendars", body: "Confirmed sessions arrive as calendar invites with the join link." },
  { icon: "integrations", title: "Single sign-on", body: "Sign in to the client portal with your organization account.", later: true },
  { icon: "report", title: "Reporting exports", body: "Export session history for your language-access reporting.", later: true },
];

export const SESSION_STEPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "request", title: "Request", body: "Tell us the language, the mode (video, on-site or event), the date and the subject." },
  { icon: "match", title: "Match", body: "We assign an interpreter whose tier and subject knowledge fit the assignment." },
  { icon: "this-month", title: "Confirm", body: "You receive a confirmation with the interpreter details and, for video, a secure join link." },
  { icon: "join", title: "Interpret", body: "The interpreter joins on time, briefed on your terminology and the people involved." },
  { icon: "report", title: "Follow up", body: "You receive a session summary and invoice, and can rate the session." },
];

export const COMPARISON = {
  columns: ["InterpretNext", "General translation agencies", "AI-only translation tools", "Bilingual staff"],
  rows: [
    { label: "Qualified interpreters matched by subject and tier", values: ["yes", "varies", "no", "no"] },
    { label: "Rare African, Middle Eastern and Asian languages", values: ["yes", "varies", "varies", "no"] },
    { label: "Signed confidentiality for every interpreter", values: ["yes", "varies", "no", "varies"] },
    { label: "One secure platform for booking and joining sessions", values: ["yes", "varies", "yes", "no"] },
    { label: "Human judgment on every interpreted session", values: ["yes", "yes", "no", "yes"] },
    { label: "Tailored quote with clear pricing drivers", values: ["yes", "varies", "yes", "no"] },
  ] as { label: string; values: ("yes" | "varies" | "no")[] }[],
  note: "We compare categories of provider, not named companies. Individual providers may differ.",
};

/** DRAFT (marketing): this is the quote from the Figma file; replace with an approved, attributed testimonial. */
export const TESTIMONIAL = {
  quote: "We needed a partner who could find Tigrinya and Amharic interpreters quickly. InterpretNext covered both languages without asking us to compromise on quality.",
  name: "Director of Patient Access",
  org: "Regional healthcare network",
};

/** DRAFT: illustrative engagements (no client names or results) until approved case studies exist. */
export const ENGAGEMENTS: { icon: IconName; sector: string; title: string; body: string }[] = [
  { icon: "healthcare", sector: "Healthcare", title: "Rare-language interpreting for patient intake", body: "A health network books scheduled video interpreting in Tigrinya, Dari and Somali for intake and follow-up appointments." },
  { icon: "legal", sector: "Legal", title: "Interviews and hearings with dialect matching", body: "A legal team books on-site interpreters matched by dialect for client interviews and hearings." },
  { icon: "government", sector: "Government & NGOs", title: "Multilingual community meetings", body: "A public agency runs town halls with simultaneous interpreting in four languages, in person and online." },
];

export const PRICING = {
  drivers: [
    { icon: "languages-200" as IconName, title: "Language", body: "Core-network languages and rare languages that we source on request are priced differently." },
    { icon: "modalities" as IconName, title: "Mode", body: "Video, on-site and simultaneous event interpreting each have their own rates." },
    { icon: "this-week" as IconName, title: "Duration and volume", body: "Session length, frequency and monthly volume shape the price." },
    { icon: "within-48h" as IconName, title: "Notice", body: "Sessions booked with more notice cost less than short-notice requests." },
    { icon: "tiers" as IconName, title: "Interpreter tier", body: "Specialist medical and legal assignments use higher-tier interpreters." },
    { icon: "regions" as IconName, title: "Travel", body: "On-site assignments may include travel time and expenses." },
  ],
  included: [
    "Interpreter matching by language, dialect, subject and tier",
    "Pre-session briefing with your materials",
    "Signed confidentiality agreement for every interpreter",
    "Secure join link for video sessions",
    "Session summary and itemised invoice",
  ],
};

export const PROCUREMENT_FAQ: FaqItem[] = [
  { q: "How do we get a quote?", a: "Send a request with your languages, modes and expected volume. A specialist replies within one business day with a recommendation and pricing." },
  { q: "What affects the price?", a: "Language, mode (video, on-site or event), duration and volume, notice period, interpreter tier and any travel for on-site work. There are no subscription fees at launch." },
  { q: "How are interpreters vetted?", a: "Identity and credential checks, language assessment in both working languages, background screening for regulated settings, and ongoing quality review." },
  { q: "Do interpreters sign confidentiality agreements?", a: "Yes. Every interpreter signs a confidentiality agreement and follows our code of conduct. We can also sign your NDA." },
  { q: "Can you support HIPAA requirements?", a: "Our HIPAA readiness work is in progress, including Business Associate Agreements for US healthcare clients. Contact us for the current status before you contract." },
  { q: "Which languages can you cover?", a: "More than 200 languages and dialects through our core network and on-request sourcing. Check a language on our Languages page or ask us for one that is not listed." },
  { q: "How do participants join a video session?", a: "Each confirmed booking includes a secure join link that you share with participants." },
  { q: "What happens to session data?", a: "Session content is not recorded or stored. Booking details are kept for billing and quality review under our retention policy." },
];
