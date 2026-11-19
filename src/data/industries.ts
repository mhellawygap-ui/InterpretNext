import type { FaqItem } from "@/components/ui/Faq";
import type { IconName } from "@/components/ui/Icon";

/** Copy deck v1, section 6.4. Modes reference launch services only (see data/site.ts RELEASES). */

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
    title: "Interpreting for patient care",
    intro: "Hospitals, telehealth providers and insurers. Qualified medical interpreters for patient visits, consent discussions and discharge instructions.",
    cover: ["Patient visits and telehealth", "Consent discussions", "Discharge instructions", "Insurance and claims calls"],
    challenges: [
      { title: "Languages that take longer to find", body: "Patients who speak Tigrinya, Dari or Karen often wait longest for a qualified interpreter." },
      { title: "Clinical accuracy", body: "Dosage, allergies and consent need an interpreter who knows medical terminology." },
      { title: "The right dialect", body: "We ask where the patient is from and match the dialect as well as the language." },
    ],
    modes: [
      { service: "video-remote", use: "Patient visits, consent and follow-up" },
      { service: "on-site", use: "The most sensitive conversations, in the room" },
      { service: "documents", use: "Consent forms and discharge paperwork" },
    ],
    qualifications: "Medical sessions go to interpreters with medical subject expertise. Platinum-tier interpreters have ten or more years of experience and relevant certifications.",
    compliance: "Every interpreter accepts our confidentiality terms before their first assignment. Ask us about HIPAA and business associate agreements.",
    faqs: [
      { q: "How much notice do you need?", a: "Request a quote with the language, date, time zone and subject. A specialist confirms the lead time for your language before you approve." },
      { q: "Do you record sessions?", a: "No. Sessions are not recorded by default." },
    ],
  },
  {
    id: "legal",
    icon: "legal",
    label: "Legal",
    title: "Interpreting for legal work",
    intro: "Depositions, immigration hearings and attorney-client meetings. Interpreters with court and legal experience, matched to the case type.",
    cover: ["Depositions", "Immigration hearings and interviews", "Attorney-client meetings", "Legal document translation"],
    challenges: [
      { title: "Legal experience", body: "Proceedings can be challenged when the interpreter has no legal training." },
      { title: "Dialect matters", body: "Arabic, Somali or Tigrinya dialects can change meaning under oath." },
      { title: "Confidentiality", body: "Privileged conversations need interpreters bound by confidentiality terms." },
    ],
    modes: [
      { service: "video-remote", use: "Remote hearings and client meetings" },
      { service: "on-site", use: "Depositions and hearings in person" },
      { service: "documents", use: "Contracts, evidence and certificates" },
    ],
    qualifications: "Legal sessions go to interpreters with court and legal experience, matched to the case type. A project manager reviews each assignment before it is confirmed.",
    compliance: "Every interpreter accepts our confidentiality terms before their first assignment. We can sign matter-specific NDAs.",
    faqs: [
      { q: "Can you provide credentialed court interpreters?", a: "Tell us the jurisdiction, language and date. We confirm a match with the required credentials before you book." },
      { q: "Do you support immigration interviews?", a: "Yes, by video or in person, including Middle Eastern and African languages and dialects." },
    ],
  },
  {
    id: "government",
    icon: "government",
    label: "Government and public sector",
    title: "Interpreting for public services",
    intro: "Social services, schools and public safety. Interpreters for people with limited English proficiency, in languages local agencies often cannot staff.",
    cover: ["Social services and case work", "Schools and parent meetings", "Public safety", "Community meetings"],
    challenges: [
      { title: "Languages local agencies cannot staff", body: "Residents who speak Haitian Creole, Burmese or Somali are often left without a qualified interpreter." },
      { title: "Limited English proficiency", body: "Agencies need a dependable way to serve every resident in their own language." },
      { title: "Sensitive situations", body: "Case work with vulnerable people needs interpreters who follow strict confidentiality." },
    ],
    modes: [
      { service: "video-remote", use: "Case work and benefit interviews" },
      { service: "on-site", use: "Home visits and sensitive case support" },
      { service: "documents", use: "Notices, letters and forms" },
    ],
    qualifications: "Interpreters are reviewed by our localization team before their first assignment, for certifications, experience and subject expertise.",
    compliance: "Every interpreter accepts our confidentiality terms before their first assignment.",
    faqs: [
      { q: "Do you cover languages for refugee and resettlement services?", a: "Yes. Middle Eastern, African and Asian languages are our focus, including Dari, Pashto, Tigrinya and Rohingya." },
      { q: "Can you support public meetings?", a: "Yes. Simultaneous interpreting for meetings and events is available on request." },
    ],
  },
  {
    id: "ngos",
    icon: "global-business",
    label: "NGOs and international organizations",
    title: "Interpreting for field programs and multilateral work",
    intro: "Field programs, multilateral meetings and humanitarian work in Middle Eastern, African and Asian languages.",
    cover: ["Field programs and interviews", "Multilateral meetings", "Humanitarian response", "Program documents"],
    challenges: [
      { title: "Rare languages", body: "Field work often needs Nuer, Zaghawa or Sudanese Arabic, which general providers rarely cover." },
      { title: "Remote locations", body: "Teams need interpreters who can join by video from wherever the work happens." },
      { title: "Sensitive testimony", body: "Interviews with affected people need interpreters who follow strict confidentiality." },
    ],
    modes: [
      { service: "video-remote", use: "Field interviews and partner calls" },
      { service: "conference", use: "Multilateral meetings, on request" },
      { service: "documents", use: "Reports and program material" },
    ],
    qualifications: "bayanTech has recruited and managed interpreters in Middle Eastern and African languages for years. We match by dialect as well as language.",
    compliance: "Every interpreter accepts our confidentiality terms before their first assignment.",
    faqs: [
      { q: "Can interpreters join from another country?", a: "Yes. Remote sessions run on our own platform, and the interpreter receives the meeting link before the session." },
      { q: "Can you staff several languages for one program?", a: "Yes. Share the languages, dates and locations, and a project manager plans the assignments." },
    ],
  },
  {
    id: "business",
    icon: "conferences",
    label: "Business and events",
    title: "Interpreting for meetings and events",
    intro: "Negotiations, board meetings and multilingual conferences.",
    cover: ["Negotiations", "Board and leadership meetings", "Multilingual conferences", "Training sessions"],
    challenges: [
      { title: "High stakes", body: "A misread point in a negotiation can cost a deal." },
      { title: "Subject knowledge", body: "Technical and financial meetings need an interpreter who knows the field." },
      { title: "Several languages at once", body: "Conferences need interpreter teams working to one program." },
    ],
    modes: [
      { service: "video-remote", use: "Meetings and negotiations" },
      { service: "on-site", use: "Negotiations and executive visits" },
      { service: "conference", use: "Conferences and hybrid events, on request" },
    ],
    qualifications: "Gold-tier interpreters have five or more years of experience and training in specialist subjects such as government, business and technical work.",
    compliance: "Every interpreter accepts our confidentiality terms before their first assignment. NDAs on request.",
    faqs: [
      { q: "Can you support due diligence meetings?", a: "Yes, with interpreters experienced in finance and legal subjects, under NDA." },
      { q: "Do you provide simultaneous interpreting for events?", a: "Yes, on request. Tell us the languages, the agenda and the venue or platform." },
    ],
  },
];
