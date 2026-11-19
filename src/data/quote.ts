import type { IconName } from "@/components/ui/Icon";
import { LANGUAGES } from "./languages";

/** Copy deck section 9. Phone is left out until phone dial-in ships (R3). */
export const MODALITY_OPTIONS = [
  { id: "vri", icon: "vri" as IconName, title: "Remote interpreting (video)", tagline: "Scheduled video sessions", body: "An interpreter joins your session on our secure platform. You receive the meeting link." },
  { id: "onsite", icon: "on-site" as IconName, title: "On-site interpreting", tagline: "An interpreter in the room", body: "For hearings, depositions and consultations where presence matters." },
  { id: "rsi", icon: "conference" as IconName, title: "Conference or event interpreting", tagline: "On request", body: "Simultaneous interpreting for webinars, summits and hybrid events." },
  { id: "docs", icon: "doc-translation" as IconName, title: "Document translation", tagline: "Written materials", body: "Certified translation for legal and medical paperwork." },
  { id: "unsure", icon: "unsure" as IconName, title: "Not sure yet", tagline: "Help me choose", body: "Describe your situation and we will suggest the service that fits." },
] as const;
export type ModalityId = (typeof MODALITY_OPTIONS)[number]["id"];

export const SUBJECTS = ["Medical", "Legal", "Technical", "Other"];

/** Suggestions for the "Language and dialect" field, read from the master list. */
export const QUOTE_LANGUAGES = LANGUAGES.map((l) => l.name);

export const TIME_ZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Africa/Cairo",
  "Africa/Nairobi",
  "Africa/Lagos",
  "Asia/Riyadh",
  "Asia/Dubai",
  "Asia/Karachi",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Australia/Sydney",
  "UTC",
];

export const URGENCY = [
  { id: "48h", icon: "within-48h" as IconName, title: "Yes, within 48 hours", sub: "Short notice" },
  { id: "week", icon: "this-week" as IconName, title: "This week", sub: "Within 7 days" },
  { id: "month", icon: "this-month" as IconName, title: "This month", sub: "Within 30 days" },
  { id: "planning", icon: "planning" as IconName, title: "Planning ahead", sub: "No fixed date yet" },
];

export const SCHEDULING = [
  { id: "one-off", icon: "one-off" as IconName, title: "One-off", body: "A single session, hearing or event." },
  { id: "recurring", icon: "recurring" as IconName, title: "Recurring", body: "Regular sessions, such as weekly clinics or case reviews." },
  { id: "program", icon: "tiers" as IconName, title: "Ongoing program", body: "Language access across a team or organization." },
];

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
export const INDUSTRIES = ["Healthcare", "Legal", "Government and public sector", "NGO or international organization", "Business and events", "Education", "Insurance", "Other"];
export const DURATIONS = ["Under 15 minutes", "15–60 minutes", "1–4 hours", "Half day", "Full day", "Multi-day"];
export const VOLUMES = ["Under 100 minutes / month", "100–1,000 minutes / month", "1,000–10,000 minutes / month", "10,000+ minutes / month", "One-off session / event", "Not sure yet"];
export const FREQUENCIES = ["One-time", "Weekly", "Several times a week", "Daily", "Ongoing program"];
export const ROLES = ["Language access / interpreter services lead", "Operations", "Procurement", "Clinical / medical staff", "Legal / compliance", "Event organizer", "Executive", "Other"];
export const HEAR_ABOUT = ["Search engine", "Referral / word of mouth", "LinkedIn", "Conference or event", "bayanTech", "Other"];
