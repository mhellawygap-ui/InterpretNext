import Image from "next/image";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

/**
 * InterpretNext icon system
 * =========================
 * ONE visual language: a rounded-square tile (26% radius) with a top-left → bottom-right
 * gradient and a white glyph — the style of the brand-supplied VRI / RSI / On-site /
 * 24/7 / NDA tiles, which are used as-is (rasters) and matched by every other icon.
 *
 * COLOR ENCODES THE DIMENSION (vertical). Rules:
 *  1. Every icon belongs to exactly one family below; never borrow a glyph across families.
 *  2. Within one section, either every item gets an icon from the same family, or none do.
 *  3. Never mix families inside a single strip/row (e.g. a services strip holds services only).
 *  4. Services keep one hue per modality (product identity, as in the supplied VRI/RSI/On-site
 *     set) and tiers keep their metal; every other family shares one gradient.
 */

export type IconFamily = "service" | "industry" | "trust" | "capability" | "tier" | "help";

type Glyph = { glyph: ReactNode } | { raster: string };
type Def = Glyph & { family: IconFamily; label: string; gradient?: [string, string] };

const FAMILY_GRADIENT: Record<Exclude<IconFamily, "service" | "tier">, [string, string]> = {
  industry: ["#a35cff", "#d01f6a"], // brand violet → magenta
  trust: ["#1d86ee", "#002284"], // matches the supplied NDA tile
  capability: ["#5ccf6f", "#02552e"], // matches the supplied 24/7 tile
  help: ["#8b80ff", "#3a2a9e"], // neutral brand indigo for support / "not sure"
};

/* ---------- glyphs (24×24, white) ---------- */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 2.3, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const F = { fill: "currentColor", stroke: "none" } as const;

const phone = <path {...F} d="M20.9 16.4v3.1a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1 3.7 2 2 0 0 1 3 1.5h3.1a2 2 0 0 1 2 1.7c.13 1 .37 1.94.7 2.8a2 2 0 0 1-.45 2.1L7 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.7 2z" />;
const globe = (<g {...S}><circle cx="12" cy="12" r="9.5" /><path d="M12 2.5a14 14 0 0 0 0 19 14 14 0 0 0 0-19M2.5 12h19" /></g>);
const languages = (<g {...S}><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" /></g>);
const shield = "M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z";
const file = "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z";
const access = (<><circle cx="12" cy="4.2" r="2" {...F} /><path {...S} d="M4.5 8.5 12 10l7.5-1.5M12 10v5M8.5 21.5 12 15l3.5 6.5" /></>);
const hand = (<g {...S}><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15" /></g>);
const calendar = (<><rect x="3" y="4" width="18" height="18" rx="2.5" {...S} /><path {...S} d="M16 2v4M8 2v4M3 10h18" /></>);
function medal(n: number) {
  return (
    <>
      <path {...S} d="M7.5 14 3.6 6.5 6 2.5h4l2 4.5 2-4.5h4l2.4 4" />
      <circle cx="12" cy="16" r="6" {...F} />
      <text x="12" y="18.9" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#2a1f66" fontFamily="system-ui, sans-serif">{n}</text>
    </>
  );
}
const lock = (<><rect x="4" y="11" width="16" height="11" rx="2.5" {...S} /><path {...S} d="M8 11V7a4 4 0 0 1 8 0v4" /></>);

const DEFS = {
  /* --- services: each modality its own hue (uploaded tiles for VRI / RSI / On-site) --- */
  opi: { family: "service", label: "Over-the-phone interpreting", gradient: ["#ff74b0", "#c2125a"], glyph: phone },
  vri: { family: "service", label: "Video remote interpreting", raster: "/images/brand/vri.webp" },
  rsi: { family: "service", label: "Remote simultaneous interpreting", raster: "/images/brand/rsi.webp" },
  "on-site": { family: "service", label: "On-site interpreting", raster: "/images/brand/on-site.webp" },
  conference: {
    family: "service", label: "Conference & hybrid", gradient: ["#b48cff", "#5b22d4"],
    glyph: (<><rect x="9" y="2" width="6" height="11" rx="3" {...F} /><path {...S} d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4M8 22h8" /></>),
  },
  asl: { family: "service", label: "ASL & sign language", gradient: ["#ffd24a", "#df8a00"], glyph: hand },
  captioning: {
    family: "service", label: "Live captioning (CART)", gradient: ["#ffd24a", "#df8a00"],
    glyph: (<g {...S}><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M7 15h4M14 15h3M7 11h2M12 11h5" /></g>),
  },
  "doc-translation": {
    family: "service", label: "Document translation", gradient: ["#9aa8c2", "#334155"],
    glyph: (<g {...S}><path d={file} /><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8M8 9h2" /></g>),
  },
  "ai-speech": {
    family: "service", label: "AI speech translation", gradient: ["#5a63b8", "#0b1050"],
    glyph: (<><path {...S} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path {...F} d="m12 5.6 1.1 2.6 2.6 1.1-2.6 1.1-1.1 2.6-1.1-2.6-2.6-1.1 2.6-1.1z" /></>),
  },
  ims: {
    family: "service", label: "Interpreter management system", gradient: ["#ff8b7b", "#cf3122"],
    glyph: (<g {...S}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></g>),
  },

  /* --- industries: one hue, glyph per sector --- */
  healthcare: { family: "industry", label: "Healthcare", glyph: (<g {...S}><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" /><path d="M3.2 12h6.3l.5-1 2 4.5 2-7 1.5 3.5h5.3" /></g>) },
  legal: { family: "industry", label: "Legal", glyph: (<g {...S}><path d="m16 16 3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1ZM2 16l3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></g>) },
  government: { family: "industry", label: "Government & NGO", glyph: (<g {...S}><path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z" /></g>) },
  "global-business": { family: "industry", label: "Global business", glyph: globe },
  conferences: { family: "industry", label: "Conferences & events", glyph: (<g {...S}><path d="M2 3h20M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3M7 21l5-5 5 5M8 11l3-3 2 2 3-3" /></g>) },
  "on-site-elite": { family: "industry", label: "On-site elite", glyph: (<g {...S}><rect x="2" y="7" width="20" height="14" rx="2.5" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></g>) },
  accessibility: { family: "industry", label: "Accessibility", glyph: access },
  "ai-powered": { family: "industry", label: "AI-powered", glyph: (<g {...S}><rect x="5" y="5" width="14" height="14" rx="2.5" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></g>) },

  /* --- trust & compliance: NDA blue --- */
  nda: { family: "trust", label: "NDA — signed confidentiality", raster: "/images/brand/nda.webp" },
  hipaa: { family: "trust", label: "HIPAA", glyph: (<g {...S}><path d={shield} /><path d="M12 8.5v6M9 11.5h6" /></g>) },
  "iso-17100": { family: "trust", label: "ISO 17100", glyph: (<g {...S}><circle cx="12" cy="8.5" r="6.5" /><path d="m15.5 13.8 1.5 8.2-5-3-5 3 1.5-8.2M9.3 8.6l1.8 1.8 3.6-3.6" /></g>) },
  "iso-27001": { family: "trust", label: "ISO 27001", glyph: (<>{lock}<circle cx="12" cy="16.5" r="1.6" {...F} /></>) },
  gdpr: {
    family: "trust", label: "GDPR",
    glyph: (<g {...F}>{Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6; return <circle key={i} cx={12 + 8.5 * Math.sin(a)} cy={12 - 8.5 * Math.cos(a)} r="1.3" />; })}<path {...S} d="m8.5 12 2.4 2.4 4.6-4.8" /></g>),
  },
  ata: { family: "trust", label: "ATA membership", glyph: (<g {...S}><path d="M3.9 8.6a4 4 0 0 1 4.7-4.8 4 4 0 0 1 6.8 0 4 4 0 0 1 4.8 4.8 4 4 0 0 1 0 6.8 4 4 0 0 1-4.8 4.7 4 4 0 0 1-6.8 0 4 4 0 0 1-4.7-4.7 4 4 0 0 1 0-6.8ZM9 12l2 2 4-4" /></g>) },
  "privacy-policy": { family: "trust", label: "Privacy policy", glyph: (<g {...S}><path d={shield} /><circle cx="12" cy="11" r="2" /><path d="M8.5 16.5a4 4 0 0 1 7 0" /></g>) },
  terms: { family: "trust", label: "Terms of service", glyph: (<g {...S}><path d={file} /><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h5M8 9h2" /></g>) },
  dpa: { family: "trust", label: "Data processing agreement", glyph: (<g {...S}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="m9 13 2 2 4-4" /></g>) },
  "accessibility-statement": { family: "trust", label: "Accessibility statement", glyph: access },
  subprocessors: { family: "trust", label: "Subprocessor list", glyph: (<g {...S}><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.8 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></g>) },
  disclosure: { family: "trust", label: "Responsible disclosure", glyph: (<g {...S}><path d={shield} /><path d="M12 8v4.5M12 16h.01" /></g>) },
  baa: { family: "trust", label: "Business associate agreement", glyph: (<g {...S}><path d={file} /><path d="M14 2v4a2 2 0 0 0 2 2h4M12 11v6M9 14h6" /></g>) },
  "sign-language": { family: "trust", label: "ASL interpretation", glyph: hand },
  captions: { family: "trust", label: "Live captioning", glyph: (<g {...S}><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M7 15h4M14 15h3M7 11h2M12 11h5" /></g>) },
  "platform-access": { family: "trust", label: "Platform accessibility", glyph: (<g {...S}><rect x="2" y="3" width="20" height="14" rx="2.5" /><path d="M8 21h8M12 17v4M9 10l2 2 4-4" /></g>) },
  "reduced-motion": { family: "trust", label: "Reduced motion", glyph: (<g {...S}><circle cx="12" cy="12" r="9.5" /><path d="M10 9v6M14 9v6" /></g>) },

  /* --- capabilities & process: 24/7 green --- */
  "24-7": { family: "capability", label: "24/7 coverage", raster: "/images/brand/coverage-24-7.webp" },
  "languages-200": { family: "capability", label: "200+ languages", glyph: languages },
  regions: { family: "capability", label: "World regions", glyph: globe },
  speed: { family: "capability", label: "Fast connection", glyph: (<path {...F} d="M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.5l-1.9 6A1 1 0 0 0 13 10h7a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.5l1.9-6A1 1 0 0 0 11 14z" />) },
  tiers: { family: "capability", label: "Interpreter tiers", glyph: (<g {...S}><path d="M12.8 2.2a2 2 0 0 0-1.6 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0l8.6-3.9a1 1 0 0 0 0-1.8ZM22 17.6l-9.2 4.2a2 2 0 0 1-1.6 0L2 17.6M22 12.6l-9.2 4.2a2 2 0 0 1-1.6 0L2 12.6" /></g>) },
  modalities: { family: "capability", label: "Interpretation modalities", glyph: (<g {...S}><rect x="2" y="4" width="14" height="10" rx="2" /><path d="m16 8 6-3v8l-6-3M6 20h8M10 14v6" /></g>) },
  "right-now": { family: "capability", label: "Right now", glyph: (<path {...F} d="M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.5l-1.9 6A1 1 0 0 0 13 10h7a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.5l1.9-6A1 1 0 0 0 11 14z" />) },
  "this-week": { family: "capability", label: "This week", glyph: (<>{calendar}<path {...S} d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></>) },
  "this-month": { family: "capability", label: "This month", glyph: (<>{calendar}<path {...S} d="m9 16 2 2 4-4" /></>) },
  planning: { family: "capability", label: "Planning ahead", glyph: (<g {...S}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" /></g>) },
  scheduled: { family: "capability", label: "Scheduled", glyph: (<>{calendar}<path {...S} d="m9 16 2 2 4-4" /></>) },
  "on-demand": { family: "capability", label: "On-demand", glyph: (<path {...F} d="M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.5l-1.9 6A1 1 0 0 0 13 10h7a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.5l1.9-6A1 1 0 0 0 11 14z" />) },
  email: { family: "capability", label: "Email", glyph: (<g {...S}><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7" /></g>) },
  routing: { family: "capability", label: "Specialist routing", glyph: (<g {...S}><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="1.5" {...F} /></g>) },
  callback: { family: "capability", label: "We get in touch", glyph: phone },

  /* --- interpreter tiers: one medal glyph, metal per tier --- */
  silver: { family: "tier", label: "Silver tier", gradient: ["#d5dae3", "#69748a"], glyph: medal(2) },
  gold: { family: "tier", label: "Gold tier", gradient: ["#ffd45e", "#c27c00"], glyph: medal(1) },
  platinum: { family: "tier", label: "Platinum tier", gradient: ["#c8b6ff", "#4b2fc0"], glyph: medal(3) },

  /* --- help / support --- */
  unsure: { family: "help", label: "Not sure", glyph: (<g {...S}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" /></g>) },
  support: { family: "help", label: "Support", glyph: (<g {...S}><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></g>) },
} satisfies Record<string, Def>;

export type IconName = keyof typeof DEFS;

export function iconLabel(name: IconName) {
  return DEFS[name].label;
}

/**
 * Brand tile icon. Decorative by default (adjacent text names the concept);
 * pass `labelled` when the icon stands alone.
 */
export function Icon({
  name,
  size = 40,
  labelled = false,
  className = "",
}: {
  name: IconName;
  size?: number;
  labelled?: boolean;
  className?: string;
}) {
  const def: Def = DEFS[name];
  const a11y = labelled ? { role: "img", "aria-label": def.label } : { "aria-hidden": true as const };
  if ("raster" in def) {
    return (
      <Image
        src={asset(def.raster)}
        alt={labelled ? def.label : ""}
        width={size}
        height={size}
        className={`shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  const [from, to] = def.gradient ?? FAMILY_GRADIENT[def.family as Exclude<IconFamily, "service" | "tier">];
  return (
    <span
      {...a11y}
      className={`inline-flex shrink-0 items-center justify-center text-white ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.26,
        backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} overflow="visible">
        {def.glyph}
      </svg>
    </span>
  );
}
