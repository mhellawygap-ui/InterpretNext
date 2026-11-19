import type { ReactNode } from "react";

/**
 * InterpretNext icon system (v2 — line icons)
 * ===========================================
 * One visual language: a 24px line glyph (1.75 stroke, round caps) on a soft rounded tile.
 * The tile tint + glyph color encode the dimension (vertical):
 *
 *   service     violet   modalities (VRI, RSI, on-site, conference, ASL, documents, …)
 *   industry    rose     the 5 sectors
 *   trust       blue     certifications, legal documents, security, accessibility obligations
 *   capability  green    languages, availability, timing, process steps
 *   tier        metal    Silver / Gold / Platinum
 *   help        indigo   support and "not sure" entry points
 *
 * Rules: (1) every icon belongs to one family; (2) in a section, every item gets an icon from the
 * same family or none do; (3) never mix families inside one row; (4) no emoji or 3D artwork.
 */

export type IconFamily = "service" | "industry" | "trust" | "capability" | "tier" | "help";

const FAMILY: Record<Exclude<IconFamily, "tier">, { bg: string; fg: string }> = {
  service: { bg: "#f1ecfc", fg: "#4a1fb0" },
  industry: { bg: "#fdedf3", fg: "#a3104a" },
  trust: { bg: "#eaf2fd", fg: "#134e9c" },
  capability: { bg: "#e8f6ee", fg: "#0c652c" },
  help: { bg: "#eeedfb", fg: "#352a9a" },
};

type Def = { family: IconFamily; label: string; glyph: ReactNode; tint?: { bg: string; fg: string } };

/* ---------- glyphs (24×24, stroke = currentColor) ---------- */
const file = "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z";
const fileFold = "M14 2v6h6";
const shield = "M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z";
const phone = "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z";
const calendar = <><rect x="3" y="4.5" width="18" height="16.5" rx="2.5" /><path d="M16 2.5v4M8 2.5v4M3 10h18" /></>;
const globe = <><circle cx="12" cy="12" r="9.5" /><path d="M12 2.5a14 14 0 0 0 0 19 14 14 0 0 0 0-19M2.5 12h19" /></>;
const hand = <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15" />;
const access = <><circle cx="12" cy="4.5" r="1.8" /><path d="M5 8.5 12 10l7-1.5M12 10v5M8.8 21.5 12 15l3.2 6.5" /></>;
const bolt = <path d="M13 2 4 14h7l-1 8 9-12h-7z" />;
const medal = <><path d="M7.2 14.5 3.5 7l2.5-4.5h3.5L12 8M16.8 14.5 20.5 7 18 2.5h-3.5L13 6" /><circle cx="12" cy="16" r="5.5" /><path d="m12 13.6.8 1.6 1.7.2-1.3 1.2.3 1.7-1.5-.8-1.5.8.3-1.7-1.3-1.2 1.7-.2z" /></>;
const lock = <><rect x="4" y="11" width="16" height="10.5" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>;

const DEFS = {
  /* services */
  opi: { family: "service", label: "Over-the-phone interpreting", glyph: <path d={phone} /> },
  vri: { family: "service", label: "Video remote interpreting", glyph: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /><circle cx="12" cy="9" r="2.2" /><path d="M8.3 14a3.7 3.7 0 0 1 7.4 0" /></> },
  rsi: { family: "service", label: "Remote simultaneous interpreting", glyph: <path d="M12 5v14M8.5 8.5v7M15.5 8.5v7M5 10.5v3M19 10.5v3M2 12h0M22 12h0" /> },
  "on-site": { family: "service", label: "On-site interpreting", glyph: <><circle cx="12" cy="6" r="2.5" /><circle cx="5" cy="9" r="2" /><circle cx="19" cy="9" r="2" /><path d="M3 21v-1.5A3.5 3.5 0 0 1 6.5 16M21 21v-1.5a3.5 3.5 0 0 0-3.5-3.5M8 21v-3a4 4 0 0 1 8 0v3" /></> },
  conference: { family: "service", label: "Conference & hybrid", glyph: <><rect x="9" y="2.5" width="6" height="11" rx="3" /><path d="M5 10.5v1a7 7 0 0 0 14 0v-1M12 18.5v3M8.5 21.5h7" /></> },
  asl: { family: "service", label: "ASL & sign language", glyph: hand },
  captioning: { family: "service", label: "Live captioning (CART)", glyph: <><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M7 15h4M14 15h3M7 11h2M12 11h5" /></> },
  "doc-translation": { family: "service", label: "Document translation", glyph: <><path d={file} /><path d={fileFold} /><path d="M8 13h8M8 17h5" /></> },
  "ai-speech": { family: "service", label: "AI speech translation", glyph: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="m12 6.5.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" /></> },
  "on-demand-video": { family: "service", label: "On-demand video interpreting", glyph: <><rect x="2" y="5" width="14" height="12" rx="2" /><path d="m16 9 6-3v10l-6-3M9.5 7.5 7 11.5h3l-1 3.5" /></> },
  recording: { family: "service", label: "Session recording", glyph: <><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="3.5" /></> },
  ims: { family: "service", label: "Interpreter management system", glyph: <><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></> },

  /* industries */
  healthcare: { family: "industry", label: "Healthcare", glyph: <><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" /><path d="M3.2 12h6.3l.5-1 2 4.5 2-7 1.5 3.5h5.3" /></> },
  legal: { family: "industry", label: "Legal", glyph: <path d="m16 16 3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1ZM2 16l3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /> },
  government: { family: "industry", label: "Government and public sector", glyph: <path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z" /> },
  "global-business": { family: "industry", label: "NGOs and international organizations", glyph: globe },
  conferences: { family: "industry", label: "Business and events", glyph: <path d="M2 3h20M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3M7 21l5-5 5 5M8 11l3-3 2 2 3-3" /> },
  "on-site-elite": { family: "industry", label: "On-site elite", glyph: <><rect x="2" y="7" width="20" height="14" rx="2.5" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></> },
  accessibility: { family: "industry", label: "Accessibility", glyph: access },
  "ai-powered": { family: "industry", label: "AI-supported interpreting", glyph: <><rect x="5" y="5" width="14" height="14" rx="2.5" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></> },

  /* trust */
  nda: { family: "trust", label: "NDA — signed confidentiality", glyph: <><path d={file} /><path d={fileFold} /><path d="M8 11h5M8 14.5h3" /><rect x="13" y="16" width="6" height="5" rx="1" /><path d="M14.5 16v-1a1.5 1.5 0 0 1 3 0v1" /></> },
  hipaa: { family: "trust", label: "HIPAA", glyph: <><path d={shield} /><path d="M12 8.5v6M9 11.5h6" /></> },
  "iso-17100": { family: "trust", label: "ISO 17100", glyph: <><circle cx="12" cy="8.5" r="6" /><path d="m15.3 13.6 1.4 8.4-4.7-2.8L7.3 22l1.4-8.4M9.6 8.6l1.6 1.6 3.2-3.2" /></> },
  "iso-27001": { family: "trust", label: "ISO 27001", glyph: <>{lock}<path d="M12 15v2.5" /></> },
  gdpr: { family: "trust", label: "GDPR", glyph: <><path d={shield} /><path d="m8.8 12 2.3 2.3 4.3-4.6" /></> },
  ata: { family: "trust", label: "Professional membership", glyph: <path d="M3.9 8.6a4 4 0 0 1 4.7-4.8 4 4 0 0 1 6.8 0 4 4 0 0 1 4.8 4.8 4 4 0 0 1 0 6.8 4 4 0 0 1-4.8 4.7 4 4 0 0 1-6.8 0 4 4 0 0 1-4.7-4.7 4 4 0 0 1 0-6.8ZM9 12l2 2 4-4" /> },
  security: { family: "trust", label: "Security", glyph: <><path d={shield} /><rect x="9" y="11" width="6" height="5" rx="1" /><path d="M10.5 11v-1.2a1.5 1.5 0 0 1 3 0V11" /></> },
  encryption: { family: "trust", label: "Encryption", glyph: <>{lock}<circle cx="12" cy="16" r="1.4" /></> },
  "access-control": { family: "trust", label: "Access control", glyph: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-1a6 6 0 0 1 9.5-4.9M16 15.5l1.5 1.5 3.5-3.5" /></> },
  "audit-log": { family: "trust", label: "Audit logging", glyph: <><path d={file} /><path d={fileFold} /><path d="M8 13h2M12 13h4M8 17h2M12 17h4" /></> },
  retention: { family: "trust", label: "Data retention", glyph: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3" /><path d="m15 18 2 2 4-4" /></> },
  hosting: { family: "trust", label: "Hosting", glyph: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></> },
  "privacy-policy": { family: "trust", label: "Privacy policy", glyph: <><path d={shield} /><circle cx="12" cy="11" r="2" /><path d="M8.5 16.5a4 4 0 0 1 7 0" /></> },
  terms: { family: "trust", label: "Terms of service", glyph: <><path d={file} /><path d={fileFold} /><path d="M8 13h8M8 17h5" /></> },
  dpa: { family: "trust", label: "Data processing agreement", glyph: <><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="m9 13 2 2 4-4" /></> },
  "accessibility-statement": { family: "trust", label: "Accessibility statement", glyph: access },
  subprocessors: { family: "trust", label: "Subprocessor list", glyph: <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.8 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /> },
  disclosure: { family: "trust", label: "Responsible disclosure", glyph: <><path d={shield} /><path d="M12 8v4.5M12 16h.01" /></> },
  baa: { family: "trust", label: "Business associate agreement", glyph: <><path d={file} /><path d={fileFold} /><path d="M12 11v6M9 14h6" /></> },
  "sign-language": { family: "trust", label: "ASL interpreting", glyph: hand },
  captions: { family: "trust", label: "Live captioning", glyph: <><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M7 15h4M14 15h3M7 11h2M12 11h5" /></> },
  "tier-check": { family: "trust", label: "Interpreter tiers", glyph: <path d="M12.8 2.2a2 2 0 0 0-1.6 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0l8.6-3.9a1 1 0 0 0 0-1.8ZM22 17.6l-9.2 4.2a2 2 0 0 1-1.6 0L2 17.6M22 12.6l-9.2 4.2a2 2 0 0 1-1.6 0L2 12.6" /> },
  "person-check": { family: "trust", label: "Reviewed by a person", glyph: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-1a6 6 0 0 1 12 0v1M16 11l2 2 4-4" /></> },
  dialect: { family: "trust", label: "Matched by dialect", glyph: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8M8 13h5" /></> },
  "platform-access": { family: "trust", label: "Platform accessibility", glyph: <><rect x="2" y="3" width="20" height="14" rx="2.5" /><path d="M8 21h8M12 17v4M9 10l2 2 4-4" /></> },
  "reduced-motion": { family: "trust", label: "Reduced motion", glyph: <><circle cx="12" cy="12" r="9.5" /><path d="M10 9v6M14 9v6" /></> },

  /* capabilities & process */
  "24-7": { family: "capability", label: "Around-the-clock support", glyph: <><circle cx="12" cy="12" r="9.5" /><path d="M12 7v5l3.5 2" /></> },
  "languages-200": { family: "capability", label: "Languages", glyph: <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" /> },
  regions: { family: "capability", label: "World regions", glyph: globe },
  rare: { family: "capability", label: "Rare languages", glyph: <><circle cx="11" cy="11" r="7.5" /><path d="m21 21-4.6-4.6M11 7.5v7M7.5 11h7" /></> },
  speed: { family: "capability", label: "Fast turnaround", glyph: bolt },
  tiers: { family: "capability", label: "Interpreter tiers", glyph: <path d="M12.8 2.2a2 2 0 0 0-1.6 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0l8.6-3.9a1 1 0 0 0 0-1.8ZM22 17.6l-9.2 4.2a2 2 0 0 1-1.6 0L2 17.6M22 12.6l-9.2 4.2a2 2 0 0 1-1.6 0L2 12.6" /> },
  modalities: { family: "capability", label: "Interpreting modes", glyph: <><rect x="2" y="4" width="14" height="10" rx="2" /><path d="m16 8 6-3v8l-6-3M6 20h8M10 14v6" /></> },
  request: { family: "capability", label: "Request", glyph: <><path d={file} /><path d={fileFold} /><path d="M12 11v6M9 14h6" /></> },
  match: { family: "capability", label: "Match", glyph: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-1a6 6 0 0 1 12 0v1M16 11l2 2 4-4" /></> },
  join: { family: "capability", label: "Join", glyph: <><rect x="2" y="5" width="14" height="12" rx="2" /><path d="m16 9 6-3v10l-6-3" /></> },
  report: { family: "capability", label: "Report", glyph: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" /> },
  "within-48h": { family: "capability", label: "Within 48 hours", glyph: bolt },
  "this-week": { family: "capability", label: "This week", glyph: <>{calendar}<path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></> },
  "this-month": { family: "capability", label: "This month", glyph: <>{calendar}<path d="m9 16 2 2 4-4" /></> },
  planning: { family: "capability", label: "Planning ahead", glyph: <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" /> },
  "one-off": { family: "capability", label: "One-off", glyph: <>{calendar}<path d="M12 13v4" /></> },
  recurring: { family: "capability", label: "Recurring", glyph: <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /> },
  email: { family: "capability", label: "Email", glyph: <><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7" /></> },
  routing: { family: "capability", label: "Specialist routing", glyph: <><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="1.5" /></> },
  callback: { family: "capability", label: "We get in touch", glyph: <path d={phone} /> },
  integrations: { family: "capability", label: "Integrations", glyph: <path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z" /> },
  pricing: { family: "capability", label: "Pricing", glyph: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></> },

  /* tiers */
  silver: { family: "tier", label: "Silver tier", glyph: medal, tint: { bg: "#eef0f4", fg: "#4b5466" } },
  gold: { family: "tier", label: "Gold tier", glyph: medal, tint: { bg: "#fff3d6", fg: "#7a4d00" } },
  platinum: { family: "tier", label: "Platinum tier", glyph: medal, tint: { bg: "#efeafe", fg: "#40269e" } },

  /* help */
  unsure: { family: "help", label: "Not sure", glyph: <><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" /></> },
  support: { family: "help", label: "Support", glyph: <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /> },
  contact: { family: "help", label: "Contact", glyph: <><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7" /></> },
  login: { family: "help", label: "Client login", glyph: <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" /> },
  building: { family: "help", label: "Company", glyph: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" /></> },
} satisfies Record<string, Def>;

export type IconName = keyof typeof DEFS;

export function iconLabel(name: IconName) {
  return DEFS[name].label;
}
export function iconFamily(name: IconName): IconFamily {
  return DEFS[name].family;
}
export const ICON_NAMES = Object.keys(DEFS) as IconName[];

/**
 * Line icon on a tinted tile. Decorative by default (adjacent text names the concept);
 * pass `labelled` when the icon stands alone. `bare` drops the tile.
 */
export function Icon({
  name,
  size = 44,
  labelled = false,
  bare = false,
  className = "",
}: {
  name: IconName;
  size?: number;
  labelled?: boolean;
  bare?: boolean;
  className?: string;
}) {
  const def: Def = DEFS[name];
  const { bg, fg } = def.tint ?? FAMILY[def.family as Exclude<IconFamily, "tier">];
  const a11y = labelled ? { role: "img" as const, "aria-label": def.label } : { "aria-hidden": true as const };
  const glyphSize = bare ? size : Math.round(size * 0.5);
  return (
    <span
      {...a11y}
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size, borderRadius: bare ? 0 : Math.round(size * 0.27), background: bare ? "transparent" : bg, color: fg }}
    >
      <svg viewBox="0 0 24 24" width={glyphSize} height={glyphSize} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        {def.glyph}
      </svg>
    </span>
  );
}
