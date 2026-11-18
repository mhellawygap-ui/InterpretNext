import type { IconName } from "@/components/ui/Icon";
import { RELEASES, type ReleaseStatus } from "./site";

/** DRAFT copy (copy deck): written in buyer vocabulary; replace with the approved deck text. */

export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  icon: IconName;
  release: keyof typeof RELEASES;
  summary: string;
  bestFor: string;
  useCases: string[];
  /** value passed to /get-quote/?modality= */
  quote: "vri" | "rsi" | "onsite" | "docs" | "unsure";
};

export const SERVICES: ServiceItem[] = [
  {
    id: "video-remote",
    title: "Video remote interpreting",
    short: "VRI",
    icon: "vri",
    release: "scheduled-video",
    summary: "A qualified interpreter joins your scheduled video session through a secure link, so both sides can see and hear each other clearly.",
    bestFor: "Consultations, interviews and meetings where facial expression and visual context matter.",
    useCases: ["Medical consultations", "Legal interviews", "Case management", "Sign language"],
    quote: "vri",
  },
  {
    id: "on-site",
    title: "On-site interpreting",
    short: "On-site",
    icon: "on-site",
    release: "on-site",
    summary: "An interpreter attends in person, briefed on your terminology and the people in the room.",
    bestFor: "Hearings, clinical settings, delegations and site visits where presence matters.",
    useCases: ["Court hearings", "Clinical settings", "Delegations", "Site visits"],
    quote: "onsite",
  },
  {
    id: "simultaneous",
    title: "Remote simultaneous interpreting",
    short: "RSI",
    icon: "rsi",
    release: "simultaneous-events",
    summary: "Interpreters work in real time on separate language channels, so a multilingual audience follows one live program.",
    bestFor: "Webinars, board meetings and online events with several languages.",
    useCases: ["Webinars", "Board meetings", "Town halls", "Training"],
    quote: "rsi",
  },
  {
    id: "conference",
    title: "Conference and hybrid events",
    short: "Events",
    icon: "conference",
    release: "conference-hybrid",
    summary: "Interpreter teams, booth or remote set-up and language coordination for audiences in the room and online.",
    bestFor: "Conferences, summits and assemblies that combine in-person and remote attendees.",
    useCases: ["Conferences", "Summits", "General assemblies", "Press events"],
    quote: "rsi",
  },
  {
    id: "sign-language",
    title: "Sign language and captioning",
    short: "ASL & CART",
    icon: "asl",
    release: "sign-language",
    summary: "Credentialed sign language interpreters and real-time captioning for Deaf and hard-of-hearing participants.",
    bestFor: "Appointments, hearings, events and workplace meetings that must be accessible.",
    useCases: ["ASL interpreting", "Live captioning (CART)", "Events", "Workplace"],
    quote: "vri",
  },
  {
    id: "documents",
    title: "Document translation",
    short: "Documents",
    icon: "doc-translation",
    release: "document-translation",
    summary: "Professional translation of the documents that come with an interpreted case, by linguists who know the subject.",
    bestFor: "Consent forms, records, contracts and official certificates.",
    useCases: ["Consent forms", "Medical records", "Contracts", "Certificates"],
    quote: "docs",
  },
];

/** Planned capabilities: shown only as "later release", never promised as available. */
export const LATER: { icon: IconName; title: string; body: string; release: keyof typeof RELEASES }[] = [
  { icon: "opi", title: "Over-the-phone interpreting", body: "Dial-in access to an interpreter by phone.", release: "phone-dial-in" },
  { icon: "on-demand-video", title: "On-demand video interpreting", body: "Instant connection to an available interpreter without booking.", release: "on-demand" },
  { icon: "ai-speech", title: "Human-led AI speech translation", body: "AI translation for lower-stakes sessions, reviewed by interpreters.", release: "ai-speech" },
  { icon: "recording", title: "Session recording", body: "Optional recording with retention controls, where contracts allow.", release: "session-recording" },
];

export const releaseStatus = (s: { release: keyof typeof RELEASES }): ReleaseStatus => RELEASES[s.release].status;
export const serviceById = (id: string) => SERVICES.find((s) => s.id === id);
