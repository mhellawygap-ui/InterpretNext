import type { IconName } from "@/components/ui/Icon";
import { LANGUAGES } from "./languages";

/** Launch-release modes only (see data/site.ts RELEASES). DRAFT copy. */
export const MODALITY_OPTIONS = [
  { id: "vri", icon: "vri" as IconName, title: "Video remote interpreting", tagline: "Scheduled video sessions", body: "An interpreter joins your video session through a secure link. Best for consultations, interviews and meetings." },
  { id: "onsite", icon: "on-site" as IconName, title: "On-site interpreting", tagline: "An interpreter in the room", body: "For hearings, clinical settings, delegations and site visits where presence matters." },
  { id: "rsi", icon: "rsi" as IconName, title: "Event interpreting", tagline: "Several languages, one audience", body: "Simultaneous interpreting for webinars, conferences and hybrid events." },
  { id: "docs", icon: "doc-translation" as IconName, title: "Document translation", tagline: "Written materials", body: "Consent forms, records, contracts and certificates." },
  { id: "unsure", icon: "unsure" as IconName, title: "Not sure yet", tagline: "Help me choose", body: "Describe your situation and we will recommend the right mix of services." },
] as const;
export type ModalityId = (typeof MODALITY_OPTIONS)[number]["id"];

export const SESSION_TYPES = [
  "Medical appointments",
  "Telehealth visits",
  "Mental health",
  "Court and legal",
  "Immigration interviews",
  "Social services",
  "Public meetings",
  "Business meetings",
  "HR and employee relations",
  "Other",
];

/** Read from the master language list so every form matches the directory. */
export const QUOTE_LANGUAGES = [...LANGUAGES.map((l) => l.name), "Other / not listed"];

export const ACCESSIBILITY_NEEDS = [
  "ASL / Sign Language",
  "CART / Live Captioning",
  "Wheelchair-accessible venue",
  "Hearing loop / assistive listening",
  "None",
];

export const URGENCY = [
  { id: "48h", icon: "within-48h" as IconName, title: "Within 48 hours", sub: "Short notice" },
  { id: "week", icon: "this-week" as IconName, title: "This week", sub: "Within 7 days" },
  { id: "month", icon: "this-month" as IconName, title: "This month", sub: "Within 30 days" },
  { id: "planning", icon: "planning" as IconName, title: "Planning ahead", sub: "No fixed date yet" },
];

export const SCHEDULING = [
  { id: "one-off", icon: "one-off" as IconName, title: "One-off", body: "A single session, hearing or event." },
  { id: "recurring", icon: "recurring" as IconName, title: "Recurring", body: "Regular sessions, such as weekly clinics or case reviews." },
  { id: "program", icon: "tiers" as IconName, title: "Ongoing program", body: "Language access across a team or organization." },
];

export const INTEGRATIONS = ["Video meeting platform", "Calendar invites", "Single sign-on (later release)", "Reporting exports (later release)", "None required"];

export const DECISION_TIMELINE = [
  "Immediately",
  "Within 1 week",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months / planning stage",
];

// Dropdown options are not specified in Figma (only "Select …" placeholders).
// TODO(content): confirm these option lists with sales.
export const COUNTRIES = ["United States", "Canada", "United Kingdom", "Ireland", "European Union (other)", "United Arab Emirates", "Saudi Arabia", "Egypt", "Australia", "Other"];
export const INDUSTRIES = ["Healthcare", "Legal", "Government & NGO", "Global Business", "Conferences & Events", "Education", "Insurance", "Other"];
export const DURATIONS = ["Under 15 minutes", "15–60 minutes", "1–4 hours", "Half day", "Full day", "Multi-day"];
export const VOLUMES = ["Under 100 minutes / month", "100–1,000 minutes / month", "1,000–10,000 minutes / month", "10,000+ minutes / month", "One-off session / event", "Not sure yet"];
export const FREQUENCIES = ["One-time", "Weekly", "Several times a week", "Daily", "Ongoing program"];
export const PLATFORMS = ["Zoom", "Microsoft Teams", "Webex", "Google Meet", "Our own telehealth platform", "Other", "None"];
export const ROLES = ["Language access / interpreter services lead", "Operations", "Procurement", "Clinical / medical staff", "Legal / compliance", "Event organizer", "Executive", "Other"];
export const HEAR_ABOUT = ["Search engine", "Referral / word of mouth", "LinkedIn", "Conference or event", "bayanTech", "Other"];
