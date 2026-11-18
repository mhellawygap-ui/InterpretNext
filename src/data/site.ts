/**
 * Site-wide facts. Anything marked DRAFT is a placeholder until the owner confirms it.
 * Full tracking list: docs/CONTENT-STATUS.md
 */

export const COMPANY = {
  brand: "InterpretNext",
  parent: "bayanTech",
  /** DRAFT (legal): how the brand relationship is described. */
  tagline: "An interpreting brand by bayanTech",
};

/**
 * Contact details. DRAFT (operations): left empty on purpose so no unverified phone number or
 * email is published. Footer and contact page render each line only when it is set.
 */
export const CONTACT: { email?: string; phone?: string; address?: string; hours?: string } = {
  // email: "sales@interpretnext.com",
  // phone: "+1 000 000 0000",
  // address: "",
  // hours: "Monday to Friday, 9:00–18:00",
};

/**
 * Client portal. DRAFT (product): no URL yet, so "Client login" opens /client-login/,
 * which explains access at launch. Set the URL to link straight to the portal.
 */
export const CLIENT_PORTAL_URL: string | null = null;

/**
 * Hero video. DRAFT (marketing): add a 10–15 s silent loop (MP4/H.264, ≤ 3 MB) and a poster frame
 * in public/videos/. Until then the hero shows the still product visual.
 * The video never plays when the visitor prefers reduced motion.
 */
export const HERO_VIDEO: { src: string; poster: string } | null = null;

/**
 * Release matrix. DRAFT (product / Eng. Ouf): what ships at launch vs later.
 * Only "launch" items may be promised in copy. Flip a status here and every page updates.
 */
export type ReleaseStatus = "launch" | "later";

export const RELEASES: Record<string, { label: string; status: ReleaseStatus }> = {
  "scheduled-video": { label: "Scheduled video remote interpreting", status: "launch" },
  "on-site": { label: "On-site interpreting", status: "launch" },
  "simultaneous-events": { label: "Remote simultaneous interpreting for events", status: "launch" },
  "conference-hybrid": { label: "Conference and hybrid event interpreting", status: "launch" },
  "sign-language": { label: "Sign language interpreting and live captioning", status: "launch" },
  "document-translation": { label: "Document translation", status: "launch" },
  "language-sourcing": { label: "Rare-language sourcing on request", status: "launch" },
  "online-booking": { label: "Online quote and booking requests", status: "launch" },
  "on-demand": { label: "On-demand instant interpreter calls", status: "later" },
  "phone-dial-in": { label: "Phone dial-in (over-the-phone interpreting)", status: "later" },
  "session-recording": { label: "Session recording", status: "later" },
  "ai-speech": { label: "Human-led AI speech translation", status: "later" },
  "client-portal-analytics": { label: "Usage reporting in the client portal", status: "later" },
};

export const isLaunch = (key: keyof typeof RELEASES) => RELEASES[key]?.status === "launch";
