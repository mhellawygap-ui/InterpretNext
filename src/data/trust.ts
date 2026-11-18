import type { IconName } from "@/components/ui/Icon";

/**
 * DRAFT (legal approves all wording). Visitor-facing only — internal notes live in
 * docs/CONTENT-STATUS.md, never on the page.
 * - ISO 17100 is held until compliance confirms what can be stated for interpreting.
 * - HIPAA reads "In progress" everywhere.
 */

export type Standard = {
  icon: IconName;
  name: string;
  status: "Active" | "In progress";
  holder: string;
  body: string;
};

export const STANDARDS: Standard[] = [
  { icon: "iso-27001", name: "ISO 27001", status: "Active", holder: "bayanTech", body: "Information security management covering how data is handled, stored and accessed." },
  { icon: "gdpr", name: "GDPR", status: "Active", holder: "InterpretNext by bayanTech", body: "Data processing agreements and subprocessor controls for clients with EU and EEA data." },
  { icon: "hipaa", name: "HIPAA", status: "In progress", holder: "InterpretNext by bayanTech", body: "Readiness for US healthcare clients, including Business Associate Agreements and PHI handling." },
  { icon: "ata", name: "ATA membership", status: "Active", holder: "bayanTech", body: "Membership of the American Translators Association and its professional standards." },
];

export const SECURITY_ITEMS: { icon: IconName; title: string; body: string }[] = [
  { icon: "encryption", title: "Encryption", body: "Video sessions are encrypted in transit. Stored booking data is encrypted at rest." },
  { icon: "access-control", title: "Access control", body: "Role-based access limits interpreters and staff to what an assignment needs, while it is active." },
  { icon: "retention", title: "No session recording", body: "Session content is not recorded or stored at launch. Booking details are kept for billing and quality review." },
  { icon: "audit-log", title: "Audit logging", body: "Bookings, joins and changes are logged for billing, quality and compliance." },
  { icon: "disclosure", title: "Incident response", body: "A documented plan covers detection, containment, notification and review." },
  { icon: "subprocessors", title: "Subprocessor review", body: "Technology subprocessors are reviewed against our security requirements. The list is available on request." },
];

export const PRIVACY = {
  gdpr: [
    "Data processing agreements for EU and EEA clients",
    "Standard Contractual Clauses for international transfers",
    "A documented process for data subject requests",
    "Retention and deletion rules by data category",
  ],
  healthcare: [
    "Business Associate Agreements for US healthcare clients (in progress)",
    "Interpreter access to patient information limited to the session",
    "No retention of session content",
    "Breach notification in line with HIPAA timelines",
  ],
};

export const QUALITY_STEPS: { title: string; body: string }[] = [
  { title: "Vetting and credentials", body: "Identity checks, credential validation and references before an interpreter joins the network." },
  { title: "Language assessment", body: "Assessed in both working languages by qualified assessors, including subject terminology." },
  { title: "Background checks", body: "Screening suited to the setting, with enhanced checks for regulated healthcare work." },
  { title: "Confidentiality and ethics", body: "Every interpreter signs a confidentiality agreement and our code of conduct." },
  { title: "Quality monitoring", body: "Session reviews, client feedback and periodic reassessment." },
  { title: "Corrective action", body: "A documented process for quality concerns, without disrupting your service." },
];

/** Ordered by level: 1 Silver, 2 Gold, 3 Platinum. */
export const TIERS: { icon: IconName; level: number; name: string; meta: string; body: string; points: string[] }[] = [
  { icon: "silver", level: 1, name: "Silver", meta: "Qualified bilingual", body: "Assessed fluency, confidentiality agreement and background check.", points: ["General interpreting", "High-volume scheduled sessions", "Vetted and background-checked"] },
  { icon: "gold", level: 2, name: "Gold", meta: "Specialist, 5+ years", body: "Domain certification or equivalent assessment and a quality track record.", points: ["Video, on-site and events", "Government and business subjects", "Subject-matter trained"] },
  { icon: "platinum", level: 3, name: "Platinum", meta: "Medical and legal specialist, 10+ years", body: "Several domain credentials and a senior track record.", points: ["High-stakes assignments", "Credentialed medical and legal specialists", "Senior interpreter oversight"] },
];

export const ACCESS_ITEMS: { icon: IconName; title: string; body: string }[] = [
  { icon: "sign-language", title: "Sign language interpreting", body: "Certified interpreters for Deaf and hard-of-hearing participants, by video or in person." },
  { icon: "captions", title: "Live captioning", body: "Real-time captions for events, webinars and hearings." },
  { icon: "platform-access", title: "Accessible website", body: "We aim for WCAG 2.2 AA: keyboard navigation, visible focus and readable contrast." },
  { icon: "reduced-motion", title: "Reduced motion", body: "The site respects your device's reduced-motion setting." },
];

export const LEGAL_DOCS: { icon: IconName; title: string; body: string; cta: string; doc: string | null }[] = [
  { icon: "privacy-policy", title: "Privacy policy", body: "How we collect, use, store and protect personal data.", cta: "Request the policy", doc: "Privacy policy and DPA" },
  { icon: "terms", title: "Terms of service", body: "The terms for our interpreting services and platform.", cta: "Request the terms", doc: "Privacy policy and DPA" },
  { icon: "dpa", title: "Data processing agreement", body: "How we process personal data for enterprise clients, including EU clauses.", cta: "Request the DPA", doc: "Privacy policy and DPA" },
  { icon: "accessibility-statement", title: "Accessibility statement", body: "Our accessibility commitment and current conformance.", cta: "Read about accessibility", doc: null },
  { icon: "subprocessors", title: "Subprocessor list", body: "Third parties we use to deliver the service, with their roles.", cta: "Request the list", doc: "Subprocessor list" },
  { icon: "disclosure", title: "Responsible disclosure", body: "How to report a security concern to our team.", cta: "Report a concern", doc: "Security questionnaire" },
  { icon: "baa", title: "Business associate agreement", body: "For US healthcare clients, once HIPAA readiness is complete.", cta: "Ask about BAAs", doc: "BAA (healthcare)" },
  { icon: "nda", title: "Non-disclosure agreement", body: "Our standard NDA for procurement and sensitive engagements.", cta: "Request the NDA", doc: "NDA" },
];

export const DOC_OPTIONS = ["Privacy policy and DPA", "ISO 27001 certificate", "BAA (healthcare)", "Security questionnaire", "Subprocessor list", "NDA"] as const;
