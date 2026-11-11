export const STATUS_OVERVIEW = [
  { name: "ISO 17100 Certification", sub: "Bayantech / Teqneyat Group", status: "Active" },
  { name: "ISO 27001 Information Security", sub: "Bayantech / Teqneyat Group", status: "Active" },
  { name: "GDPR Compliance", sub: "EU/EEA data handling", status: "Active" },
  { name: "HIPAA / BAA Readiness", sub: "Healthcare clients — in review", status: "In Progress" },
  { name: "ATA Membership", sub: "Professional standards body", status: "Active" },
] as const;

export const STANDARDS = [
  {
    name: "ISO 17100:2015",
    status: "Active",
    holder: "Bayantech / Teqneyat Group",
    body: "Translation and related services quality management—applicable to InterpretNext managed services as a Bayantech brand.",
    note: "Scope confirmation and entity mapping required before publication.",
  },
  {
    name: "ISO 27001",
    status: "Active",
    holder: "Bayantech / Teqneyat Group",
    body: "Information security management system for data handling, storage, and access controls across operational systems.",
    note: "Applicable entities and scope to be confirmed with legal and security teams.",
  },
  {
    name: "HIPAA Alignment",
    status: "In Progress",
    holder: "InterpretNext / Bayantech",
    body: "Healthcare data handling, PHI flow controls, subcontractor agreements, and Business Associate Agreement (BAA) readiness for US healthcare clients.",
    note: "BAA readiness status to be confirmed with legal and compliance before publishing.",
  },
  {
    name: "ATA Membership",
    status: "Active",
    holder: "Bayantech",
    body: "American Translators Association membership for professional standards in translation and interpretation.",
  },
  {
    name: "GDPR Compliance",
    status: "Active",
    holder: "InterpretNext / Bayantech",
    body: "Data protection regulation compliance for EU/EEA client data, including data processing agreements and subprocessor controls.",
  },
] as const;

export const PILLARS = [
  { n: "01", id: "security", title: "Security", image: "/images/trust/security.jpg", body: "Data encryption, access controls, platform security, and incident response protocols." },
  { n: "02", id: "privacy", title: "Privacy", image: "/images/trust/privacy.jpg", body: "GDPR alignment, PHI handling, DPA availability, and subprocessor transparency." },
  { n: "03", id: "quality", title: "Quality", image: "/images/trust/quality.jpg", body: "Interpreter governance, credentialing, language assessment, and QA monitoring." },
  { n: "04", id: "accessibility", title: "Accessibility", image: "/images/trust/accessibility.jpg", body: "WCAG 2.2 AA compliance, ASL access, CART, and inclusive service delivery." },
];

export const SECURITY_ITEMS = [
  { title: "Data encryption", body: "All interpretation sessions—OPI, VRI, and RSI—are transmitted over encrypted channels. Data at rest is encrypted using AES-256. Encryption standards are reviewed periodically." },
  { title: "Access controls", body: "Role-based access control limits interpreter and staff access to the minimum required for the engagement. Client data is never accessible to interpreters outside the active session." },
  { title: "Incident response", body: "A documented incident response plan covers detection, containment, notification, and post-incident review. Affected clients are notified within regulatory timelines." },
  { title: "Subcontractor controls", body: "Technology subprocessors are reviewed for security posture and must meet InterpretNext's minimum security requirements. The subprocessor list is available on request." },
  { title: "Vulnerability management", body: "Regular security reviews are applied to platform infrastructure. A responsible disclosure policy allows external researchers to report vulnerabilities safely." },
  { title: "Audit logging", body: "Session metadata—language, modality, timestamp, duration—is logged for billing, QA, and compliance. Session content is not retained unless contractually required." },
];

export const SECURITY_STATS = [
  { value: "AES-256", label: "Encryption standard" },
  { value: "Zero", label: "Content retained by default" },
  { value: "RBAC", label: "Access model" },
];

export const GDPR_ITEMS = [
  "Data processing agreements (DPAs) available for EU/EEA clients",
  "EU Standard Contractual Clauses (SCCs) for international transfers",
  "Data subject access request process documented",
  "Retention and deletion policies applied by data category",
  "Subprocessor list maintained and updated quarterly",
];

export const HEALTHCARE_ITEMS = [
  "Business Associate Agreement (BAA) available for qualified US healthcare clients",
  "PHI is not retained after session completion without explicit contractual agreement",
  "Interpreter access to patient information is limited to active session duration",
  "Subcontractor PHI obligations flow-down is documented",
  "Incident notification follows HIPAA Breach Notification Rule timelines",
];

export const DATA_FLOW = [
  { title: "Client initiates session", body: "Request authenticated. Session metadata logged." },
  { title: "Interpreter matched & connected", body: "Match by language, domain, availability. Encrypted channel established." },
  { title: "Session in progress", body: "Audio/video encrypted in transit. No content stored by default." },
  { title: "Session ends", body: "Metadata retained for billing & QA. Content deleted per retention policy." },
];

export const QUALITY_STEPS = [
  { title: "Vetting & credentialing", body: "Every interpreter undergoes identity verification, credential validation, and reference checks before joining the network. Medical and legal interpreters must hold domain-relevant certifications or demonstrate equivalent assessed competency." },
  { title: "Language assessment", body: "Interpreters are assessed in both working languages by qualified assessors—not self-reported fluency. Assessments include domain-specific terminology testing for medical, legal, and technical contexts." },
  { title: "Background checks", body: "All interpreters undergo background screening commensurate with their service context. Healthcare interpreters serving regulated environments receive enhanced checks including criminal record verification." },
  { title: "Confidentiality & ethics", body: "Every interpreter signs a confidentiality agreement and acknowledges our code of conduct, covering impartiality, non-disclosure, professional conduct, and mandatory reporting obligations." },
  { title: "Ongoing quality monitoring", body: "Call quality review, client satisfaction tracking, and periodic re-assessment are applied to all active interpreters. Performance data informs matching algorithms and corrective action processes." },
  { title: "Corrective action & removal", body: "A documented corrective action process is triggered by quality flags, client complaints, or compliance concerns. Interpreters may be suspended or removed pending investigation with no impact to service continuity." },
];

export const TIERS = [
  { icon: "/images/2nd-place-medal.png", name: "Silver", body: "Assessed bilingual fluency, confidentiality agreement, background check." },
  { icon: "/images/1st-place-medal.png", name: "Gold", body: "Domain certification or equivalent assessed competency, enhanced background check, QA track record." },
  { icon: "/images/3rd-place-medal.png", name: "Platinum", body: "Multiple domain certifications, regulatory credential (court-certified, CHI, CMI), leadership track record." },
];

export const ACCESS_SERVICES = [
  { emoji: "🤟", title: "ASL Interpretation", body: "RID-certified interpreters for Deaf and hard-of-hearing participants via VRI or in-person." },
  { emoji: "📝", title: "CART / Live Captioning", body: "Certified CART providers for real-time transcription at events, webinars, and hearings." },
  { emoji: "💻", title: "Platform accessibility", body: "WCAG 2.2 AA target across web, with keyboard navigation, visible focus, and readable contrast." },
  { emoji: "🎧", title: "Reduced-motion support", body: "Respects prefers-reduced-motion for users sensitive to animation and parallax effects." },
];

export const ACCESS_STANDARDS = [
  { title: "ADA Title II & III", body: "Public and private entities covered by the Americans with Disabilities Act are required to provide effective communication access. InterpretNext ASL and CART services support this obligation." },
  { title: "WCAG 2.2 AA", body: "Our website and client-facing platform target WCAG 2.2 Level AA compliance. Our accessibility statement documents current conformance and known gaps." },
  { title: "Section 508", body: "For government and federally-funded clients, our platform and documentation are designed with Section 508 requirements in mind." },
];

export const LEGAL_DOCS = [
  { emoji: "🔒", title: "Privacy Policy", body: "How we collect, use, store, and protect personal data across our interpretation services and platforms.", cta: "Read policy →", doc: "Privacy Policy & DPA" },
  { emoji: "📋", title: "Terms of Service", body: "The terms governing your use of InterpretNext interpretation services, platform access, and service agreements.", cta: "Read terms →", doc: "Privacy Policy & DPA" },
  { emoji: "🗂️", title: "Data Processing Agreement", body: "The DPA covering how InterpretNext processes personal data on behalf of enterprise clients, including EU SCCs.", cta: "Request DPA →", doc: "Privacy Policy & DPA" },
  { emoji: "♿", title: "Accessibility Statement", body: "Our commitment to WCAG 2.2 AA compliance, accessible interpretation delivery, and inclusive service design.", cta: "Read statement →", doc: null },
  { emoji: "🔗", title: "Subprocessor List", body: "A current list of third-party subprocessors used in delivering interpretation services, including data handling roles.", cta: "View subprocessors →", doc: "Subprocessor List" },
  { emoji: "🛡️", title: "Responsible Disclosure", body: "How to report a security vulnerability or privacy concern to our security team. We respond within 48 hours.", cta: "Report a vulnerability →", doc: "Security Questionnaire" },
  { emoji: "🏥", title: "Business Associate Agreement", body: "HIPAA-required BAA for US healthcare clients. Confirms InterpretNext's obligations as a business associate handling PHI.", cta: "Request BAA →", doc: "BAA (Healthcare)" },
  { emoji: "🤝", title: "Non-Disclosure Agreement", body: "Standard NDA for enterprise procurement, legal engagements, and sensitive client relationships.", cta: "Request NDA →", doc: "NDA" },
] as const;

export const DOC_OPTIONS = [
  "Privacy Policy & DPA",
  "ISO Certificates",
  "BAA (Healthcare)",
  "Security Questionnaire",
  "Subprocessor List",
  "NDA",
] as const;
