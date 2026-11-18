import type { FaqItem } from "@/components/ui/Faq";
import type { IconName } from "@/components/ui/Icon";

/** DRAFT copy (copy deck). Modes reference launch services only (see data/site.ts RELEASES). */

export type Sector = {
  id: string;
  icon: IconName;
  label: string;
  title: string;
  intro: string;
  cover: string[];
  challenges: { title: string; body: string }[];
  /** service ids from data/services.ts */
  modes: { service: string; use: string }[];
  qualifications: string;
  compliance: string;
  faqs: FaqItem[];
  /** sector is built on a later-release capability */
  later?: boolean;
};

export const SECTORS: Sector[] = [
  {
    id: "healthcare",
    icon: "healthcare",
    label: "Healthcare",
    title: "Language access for patient care",
    intro: "Hospitals, clinics and telehealth teams use InterpretNext for scheduled appointments, consent conversations and follow-up care, in the language and dialect each patient speaks.",
    cover: ["Hospital and clinic appointments", "Telehealth visits", "Mental and behavioral health", "Patient education and discharge"],
    challenges: [
      { title: "Rare-language gaps", body: "Patients who speak Tigrinya, Dari or Karen often wait longest for a qualified interpreter." },
      { title: "Clinical accuracy", body: "Dosage, allergies and consent need an interpreter who knows medical terminology." },
      { title: "Documented language access", body: "Title VI and accreditation reviews expect a consistent, documented language-access program." },
    ],
    modes: [
      { service: "video-remote", use: "Consultations, consent and follow-up visits" },
      { service: "on-site", use: "Surgical briefings and end-of-life conversations" },
      { service: "sign-language", use: "Deaf and hard-of-hearing patients" },
      { service: "documents", use: "Consent forms and discharge instructions" },
    ],
    qualifications: "Medical interpreters are assessed on healthcare terminology, confidentiality and the clinical areas they cover, and are reviewed on an ongoing basis.",
    compliance: "HIPAA readiness in progress, including Business Associate Agreements. Contact us for the current status.",
    faqs: [
      { q: "How much notice do you need?", a: "Most core-network languages can be scheduled with standard notice. For rare languages we confirm feasibility and lead time when you request." },
      { q: "Do your interpreters have clinical experience?", a: "Medical assignments go to interpreters assessed on healthcare terminology and matched by clinical area." },
    ],
  },
  {
    id: "legal",
    icon: "legal",
    label: "Legal",
    title: "Interpreting for legal proceedings",
    intro: "Law firms, courts and immigration teams book interpreters matched by language, dialect and legal specialty for interviews, depositions and hearings.",
    cover: ["Court and tribunal hearings", "Depositions", "Immigration and asylum interviews", "Client consultations"],
    challenges: [
      { title: "Credentials", body: "Proceedings can be challenged when the interpreter is bilingual staff without legal training." },
      { title: "Dialect matters", body: "Arabic, Somali or Tigrinya dialects affect meaning under oath." },
      { title: "Confidentiality", body: "Privileged conversations need interpreters bound by confidentiality and strict protocol." },
    ],
    modes: [
      { service: "on-site", use: "Hearings, depositions and cross-examination" },
      { service: "video-remote", use: "Remote hearings and client consultations" },
      { service: "simultaneous", use: "Multi-party proceedings and arbitration" },
      { service: "documents", use: "Contracts, evidence and certificates" },
    ],
    qualifications: "Legal interpreters are matched by specialty (immigration, criminal, civil or corporate) and by jurisdiction where credentials are required.",
    compliance: "Confidentiality agreement for every interpreter. We can sign matter-specific NDAs.",
    faqs: [
      { q: "Can you provide credentialed court interpreters?", a: "Tell us the jurisdiction, language and date. We confirm a match with the required credentials before you book." },
      { q: "Do you support immigration interviews?", a: "Yes, in person or by video, including rare African and Middle Eastern dialects." },
    ],
  },
  {
    id: "government",
    icon: "government",
    label: "Government & NGOs",
    title: "Reach every community you serve",
    intro: "Public health departments, social services and NGOs use InterpretNext for case work, outreach and community meetings with people who speak limited English.",
    cover: ["Social services and case management", "Public health outreach", "Refugee and resettlement services", "Community meetings and town halls"],
    challenges: [
      { title: "Underserved languages", body: "Residents who speak Haitian Creole, Burmese or Somali are often left without quality interpreting." },
      { title: "Legal obligations", body: "Limited English proficiency requirements create real exposure for agencies without a plan." },
      { title: "Sensitive situations", body: "Case work with vulnerable people needs interpreters trained in public-service protocols." },
    ],
    modes: [
      { service: "video-remote", use: "Case management and benefit interviews" },
      { service: "on-site", use: "Field visits and sensitive case support" },
      { service: "simultaneous", use: "Town halls and public meetings" },
    ],
    qualifications: "Interpreters in public-service settings are trained in confidentiality, mandatory reporting and culturally informed communication.",
    compliance: "Language-access documentation available for your reporting.",
    faqs: [
      { q: "Do you cover languages for refugee services?", a: "Yes. Rare African, Middle Eastern and Asian languages are our focus, including Dari, Pashto, Tigrinya and Rohingya." },
      { q: "Can you support public meetings?", a: "Yes, with simultaneous interpreting for people in the room and online." },
    ],
  },
  {
    id: "global-business",
    icon: "global-business",
    label: "Enterprise",
    title: "Interpreting for international business",
    intro: "Corporate teams use InterpretNext for negotiations, leadership meetings and HR conversations across languages and time zones.",
    cover: ["Negotiations and due diligence", "Leadership and board meetings", "HR and employee relations", "Training and onboarding"],
    challenges: [
      { title: "High stakes", body: "A misread point in a negotiation can cost a deal." },
      { title: "Neutrality", body: "HR and performance conversations need a trained, neutral interpreter." },
      { title: "Scale", body: "Global teams need consistent quality across many languages." },
    ],
    modes: [
      { service: "video-remote", use: "Meetings and HR conversations" },
      { service: "simultaneous", use: "All-hands and multilingual board meetings" },
      { service: "on-site", use: "Negotiations and executive visits" },
    ],
    qualifications: "Business interpreters are screened for finance, legal and HR subject knowledge. Specialist matching is available for technical fields.",
    compliance: "Confidentiality agreements as standard. NDAs and data processing agreements on request.",
    faqs: [
      { q: "Can you support due diligence meetings?", a: "Yes, with interpreters experienced in finance and legal agreements, under NDA." },
      { q: "Can interpreters join our own video platform?", a: "Yes. Tell us which platform you use when you request." },
    ],
  },
  {
    id: "conferences",
    icon: "conferences",
    label: "Conferences & events",
    title: "Multilingual events that run smoothly",
    intro: "Event teams use InterpretNext for summits, assemblies and webinars that need several language channels in the room and online.",
    cover: ["Conferences and summits", "Hybrid events", "NGO and diplomatic assemblies", "Press conferences"],
    challenges: [
      { title: "Live pressure", body: "Interpreting problems during a keynote cannot be fixed afterwards." },
      { title: "Hybrid audiences", body: "People in the room and online need the same language channels." },
      { title: "Coordination", body: "Several languages mean several interpreter teams working to one program." },
    ],
    modes: [
      { service: "conference", use: "Booths and teams for in-person and hybrid events" },
      { service: "simultaneous", use: "Webinars and online conferences" },
      { service: "sign-language", use: "Accessible sessions and captioning" },
    ],
    qualifications: "Conference interpreters have formal simultaneous training and experience matched to your event type.",
    compliance: "Event data handling reviewed with your team before the event.",
    faqs: [
      { q: "How many languages can you run at one event?", a: "We plan interpreter teams per language channel. Tell us your languages and agenda for a staffing plan." },
      { q: "Do you provide booth equipment?", a: "Equipment can be included in an on-site event proposal. Share your venue details." },
    ],
  },
  {
    id: "on-site",
    icon: "on-site-elite",
    label: "On-site elite",
    title: "Interpreters who travel with you",
    intro: "Senior interpreters for delegations, trade missions and site visits, briefed in advance and experienced in protocol.",
    cover: ["Delegation and escort interpreting", "Trade missions and exhibitions", "Site visits and inspections"],
    challenges: [
      { title: "Protocol", body: "Executive and diplomatic settings need discretion and professional conduct." },
      { title: "Travel", body: "Multi-day assignments need interpreters who can travel and adapt." },
      { title: "Subject knowledge", body: "Technical visits need interpreters who know the field." },
    ],
    modes: [{ service: "on-site", use: "Escort, consecutive and whispered interpreting" }],
    qualifications: "Screened for conduct, travel availability and subject experience. Glossary preparation and security clearance coordination available.",
    compliance: "Confidentiality agreements as standard.",
    faqs: [{ q: "Can you cover a week-long trade mission?", a: "Yes. Share the itinerary and languages and we plan the interpreter team." }],
  },
  {
    id: "accessibility",
    icon: "accessibility",
    label: "Accessibility",
    title: "Accessible communication for Deaf and hard-of-hearing people",
    intro: "Sign language interpreting and real-time captioning for appointments, hearings, events and workplace meetings.",
    cover: ["American Sign Language interpreting", "Live captioning (CART)"],
    challenges: [
      { title: "ADA obligations", body: "Missing interpreters or captions in covered settings creates legal exposure." },
      { title: "Late requests", body: "Accessibility needs are often raised close to the date." },
      { title: "Hybrid gaps", body: "Online and hybrid meetings often lack captions by default." },
    ],
    modes: [
      { service: "sign-language", use: "ASL interpreting and live captioning" },
      { service: "video-remote", use: "Remote ASL for appointments and meetings" },
      { service: "on-site", use: "Hearings, events and workplace sessions" },
    ],
    qualifications: "ASL interpreters hold national certification. Captioners meet real-time accuracy standards.",
    compliance: "Supports ADA Title II and III obligations.",
    faqs: [{ q: "Do you provide captions for events?", a: "Yes, real-time captioning for in-person, hybrid and online events." }],
  },
  {
    id: "ai-powered",
    icon: "ai-powered",
    label: "AI-supported interpreting",
    title: "Human-led AI support, in a later release",
    intro: "We are building AI speech translation that interpreters oversee, for lower-stakes sessions where speed and volume matter. It is not part of the launch release.",
    cover: ["AI speech translation with interpreter review", "Terminology and glossary support"],
    challenges: [
      { title: "Volume", body: "Some sessions need faster turnaround than human-only staffing allows." },
      { title: "Terminology", body: "AI without domain glossaries makes errors in medical and legal language." },
      { title: "Oversight", body: "Sensitive sessions still need a qualified human interpreter." },
    ],
    modes: [{ service: "video-remote", use: "Human interpreting remains the default for every session" }],
    qualifications: "Glossaries are built by specialist interpreters, and human reviewers meet the same standards as live interpreters.",
    compliance: "Model use and data retention will be documented before release.",
    faqs: [{ q: "Is AI translation available now?", a: "No. It is planned for a later release. All launch sessions use human interpreters." }],
    later: true,
  },
];
