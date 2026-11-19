/**
 * Site-wide facts. Anything marked DRAFT is a placeholder until the owner confirms it.
 * Full tracking list: docs/CONTENT-STATUS.md
 */

export const COMPANY = {
  brand: "InterpretNext",
  parent: "bayanTech",
  /** DRAFT (legal): how the brand relationship is described. */
  tagline: "A bayanTech brand",
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
 * Release matrix, from the Portal Roles Matrix v3 (R1 = launch, R2 = next, R3 = later).
 * Only "launch" and "request" items may appear in copy. "request" = offered on request until
 * Operations and Eng. Ouf confirm it (simultaneous interpreting). Flip a status and every page updates.
 */
export type ReleaseStatus = "launch" | "request" | "later";

export const RELEASES: Record<string, { label: string; status: ReleaseStatus; matrix?: string }> = {
  "scheduled-video": { label: "Scheduled remote interpreting by video", status: "launch", matrix: "R1" },
  "on-site": { label: "On-site interpreting", status: "launch", matrix: "R1" },
  "conference-hybrid": { label: "Simultaneous interpreting for conferences and events", status: "request", matrix: "R3 (RSI console)" },
  "document-translation": { label: "Document translation (bayanTech translation team)", status: "launch" },
  "language-sourcing": { label: "Language requests for languages we do not list yet", status: "launch" },
  "online-booking": { label: "Online quote, approval, assignment, meeting link, rating and invoice", status: "launch", matrix: "R1" },
  "on-demand": { label: "On-demand instant interpreter calls", status: "later", matrix: "R2" },
  "two-factor": { label: "Two-factor sign-in for staff and interpreters", status: "later", matrix: "R2" },
  "phone-dial-in": { label: "Phone dial-in (over-the-phone interpreting)", status: "later", matrix: "R3" },
  "session-recording": { label: "Session recording, transcripts and AI summaries", status: "later", matrix: "R3" },
  "client-portal-analytics": { label: "Reports and analytics in the client portal", status: "later", matrix: "R2" },
};

export const isLaunch = (key: keyof typeof RELEASES) => RELEASES[key]?.status === "launch";
