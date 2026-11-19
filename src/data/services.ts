import type { IconName } from "@/components/ui/Icon";
import { RELEASES, type ReleaseStatus } from "./site";

/** Copy deck v1, section 6.3, limited to what release R1 delivers (Portal Roles Matrix). */

export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  icon: IconName;
  release: keyof typeof RELEASES;
  /** Situation this service answers, as the visitor would describe it (service finder). */
  situation: string;
  summary: string;
  bestFor: string;
  useCases: string[];
  /** value passed to /get-quote/?modality= */
  quote: "vri" | "rsi" | "onsite" | "docs" | "unsure";
};

export const SERVICES: ServiceItem[] = [
  {
    id: "video-remote",
    title: "Remote interpreting by video",
    short: "Video",
    icon: "vri",
    release: "scheduled-video",
    situation: "A conversation by video",
    summary: "You book a session, we assign an interpreter matched to the language, dialect and subject, and we send the meeting link. Sessions run on our own secure platform.",
    bestFor: "Patient visits, claims calls, case interviews and service desks.",
    useCases: ["Patient visits", "Claims calls", "Case interviews", "Service desks"],
    quote: "vri",
  },
  {
    id: "on-site",
    title: "On-site interpreting",
    short: "On-site",
    icon: "on-site",
    release: "on-site",
    situation: "A hearing, deposition or consultation",
    summary: "For the highest-stakes sessions we place an interpreter in the room, matched to the language, dialect and subject, and briefed with the materials you share.",
    bestFor: "Hearings, depositions and medical consultations where presence matters.",
    useCases: ["Hearings", "Depositions", "Medical consultations", "Negotiations"],
    quote: "onsite",
  },
  {
    id: "conference",
    title: "Conference and event interpreting",
    short: "Events",
    icon: "conference",
    release: "conference-hybrid",
    situation: "A conference or live event",
    summary: "Simultaneous interpreting for webinars, summits and hybrid events, on request. Tell us the languages and the agenda and we confirm what we can staff.",
    bestFor: "Webinars, summits, board meetings and hybrid events with several languages.",
    useCases: ["Webinars", "Summits", "Hybrid events", "Board meetings"],
    quote: "rsi",
  },
  {
    id: "documents",
    title: "Document translation",
    short: "Documents",
    icon: "doc-translation",
    release: "document-translation",
    situation: "A document",
    summary: "Certified translation for legal and medical paperwork, handled by the bayanTech translation team.",
    bestFor: "Consent forms, records, contracts and official certificates.",
    useCases: ["Consent forms", "Medical records", "Contracts", "Certificates"],
    quote: "docs",
  },
];

/** Planned capabilities (Portal Roles Matrix R2/R3): shown only as "later release", never promised. */
export const LATER: { icon: IconName; title: string; body: string; release: keyof typeof RELEASES }[] = [
  { icon: "on-demand-video", title: "On-demand video interpreting", body: "Connect to an available interpreter without booking ahead.", release: "on-demand" },
  { icon: "opi", title: "Phone interpreting", body: "Dial in to an interpreter by phone.", release: "phone-dial-in" },
  { icon: "recording", title: "Recording and transcripts", body: "Only with written consent from everyone on the call, and a retention period agreed in advance.", release: "session-recording" },
];

export const releaseStatus = (s: { release: keyof typeof RELEASES }): ReleaseStatus => RELEASES[s.release].status;
export const serviceById = (id: string) => SERVICES.find((s) => s.id === id);
