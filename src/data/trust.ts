import type { IconName } from "@/components/ui/Icon";

/**
 * Trust Center content, from Copy Deck v1 (sections 3, 6.9 and 8). Confirmed items only.
 * Waiting for an owner (never shown until confirmed): ISO 27001 (certified or "aligned with"),
 * ISO 18841 wording, encryption and media path, hosting provider and region, BAA availability,
 * final HIPAA wording. See docs/CONTENT-STATUS.md.
 */

export type TrustItem = { icon: IconName; title: string; body: string };

/** What we do: Safe rows. Audit trail, idle sign-out and upload checks are R1 launch features. */
export const WE_DO: TrustItem[] = [
  { icon: "nda", title: "Confidentiality terms", body: "Every interpreter accepts our confidentiality terms before their first assignment." },
  { icon: "retention", title: "No recording by default", body: "Sessions are not recorded by default." },
  { icon: "access-control", title: "Role-based access", body: "Clients, sales, project managers, interpreters and admins each see only what their role needs." },
  { icon: "platform-access", title: "Limited interpreter access", body: "Interpreters see only the sessions assigned to them and only the materials the project manager shares. They never see pricing." },
  { icon: "audit-log", title: "Audit trail", body: "Access and changes are logged, so we can show who viewed or changed what and when." },
  { icon: "security", title: "Idle sign-out", body: "Inactive sessions end automatically." },
  { icon: "disclosure", title: "Upload checks", body: "Files are checked for type, size and malware before they are shared." },
];

/** In progress. One HIPAA wording everywhere (claims register). */
export const IN_PROGRESS: (TrustItem & { status: string })[] = [
  { icon: "hipaa", title: "HIPAA", status: "In progress", body: "Built around HIPAA safeguards. Ask us about business associate agreements for healthcare clients." },
  { icon: "security", title: "Two-factor sign-in", status: "Later release", body: "Planned for staff and interpreters in the next release." },
];

export const QUALITY_STEPS: { title: string; body: string }[] = [
  { title: "Review before the first assignment", body: "Our localization team reviews every interpreter's certifications, years of experience and subject expertise." },
  { title: "Confidentiality", body: "Every interpreter accepts our confidentiality terms before their first assignment." },
  { title: "Matched to the session", body: "A project manager picks an interpreter matched to your language, dialect and subject." },
  { title: "Reviewed before it is confirmed", body: "A project manager reviews each assignment before it is confirmed." },
  { title: "Rated after every session", body: "You rate each session, and ratings inform future assignments over time." },
  { title: "AI-assisted, human-approved", body: "Tools we use for testing are AI-assisted. A person approves every result." },
];

/** Copy deck 6.6. Ordered by level: 1 Silver, 2 Gold, 3 Platinum. */
export const TIERS: { icon: IconName; level: number; name: string; meta: string; body: string }[] = [
  { icon: "silver", level: 1, name: "Silver", meta: "Qualified bilingual", body: "Qualified bilingual interpreters for general sessions." },
  { icon: "gold", level: 2, name: "Gold", meta: "5+ years, specialist subjects", body: "Five or more years of experience, trained in specialist subjects such as government, business and technical work." },
  { icon: "platinum", level: 3, name: "Platinum", meta: "10+ years, medical or legal", body: "Ten or more years, with medical or legal subject expertise and relevant certifications. Used for the most sensitive sessions." },
];

export const ACCESS_ITEMS: { icon: IconName; title: string; body: string }[] = [
  { icon: "platform-access", title: "Accessible website", body: "We aim for WCAG 2.2 AA: keyboard navigation, visible focus and readable contrast." },
  { icon: "reduced-motion", title: "Reduced motion", body: "The site respects your device's reduced-motion setting." },
];

export const LEGAL_DOCS: { icon: IconName; title: string; body: string; cta: string; doc: string | null }[] = [
  { icon: "privacy-policy", title: "Privacy policy", body: "How we collect, use, store and protect personal data.", cta: "Request the policy", doc: "Privacy policy and DPA" },
  { icon: "terms", title: "Terms of service", body: "The terms for our interpreting services and platform.", cta: "Request the terms", doc: "Privacy policy and DPA" },
  { icon: "dpa", title: "Data processing agreement", body: "How we process personal data for enterprise clients, including EU clauses.", cta: "Request the DPA", doc: "Privacy policy and DPA" },
  { icon: "accessibility-statement", title: "Accessibility statement", body: "Our accessibility commitment and current conformance.", cta: "Read about accessibility", doc: null },
  { icon: "subprocessors", title: "Subprocessor list", body: "Third parties we use to deliver the service, with their roles.", cta: "Request the list", doc: "Subprocessor list" },
  { icon: "security", title: "Security summary for IT teams", body: "A one-page summary of how we protect sessions, for your security review.", cta: "Request the summary", doc: "One-page security summary" },
  { icon: "baa", title: "Business associate agreement", body: "For US healthcare clients. Ask us about availability.", cta: "Ask about BAAs", doc: "BAA (healthcare)" },
  { icon: "nda", title: "Non-disclosure agreement", body: "Our standard NDA for procurement and sensitive engagements.", cta: "Request the NDA", doc: "NDA" },
];

export const DOC_OPTIONS = ["One-page security summary", "Privacy policy and DPA", "BAA (healthcare)", "Security questionnaire", "Subprocessor list", "NDA"] as const;
