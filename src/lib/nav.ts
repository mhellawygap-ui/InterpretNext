/** Single source of truth for site routes, the header dropdowns and the footer. */

export type NavLink = { label: string; href: string };
export type NavGroup = NavLink & { children: NavLink[] };

export const QUOTE_HREF = "/get-quote/";

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "OPI · Over the Phone", href: "/services/#opi" },
      { label: "VRI · Video Remote", href: "/services/#vri" },
      { label: "RSI · Simultaneous", href: "/services/#rsi" },
      { label: "On-Site Elite", href: "/services/#on-site" },
      { label: "Conference & Hybrid", href: "/services/#conference" },
      { label: "ASL & Sign Language VRI", href: "/services/#asl" },
      { label: "Document Translation", href: "/services/#document-translation" },
      { label: "AI Speech Translation", href: "/services/#ai-speech" },
      { label: "Interpreter Management System", href: "/services/#ims" },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Healthcare", href: "/industries/#healthcare" },
      { label: "Legal", href: "/industries/#legal" },
      { label: "Government & NGO", href: "/industries/#government" },
      { label: "Global Business", href: "/industries/#global-business" },
      { label: "Conferences & Events", href: "/industries/#conferences" },
      { label: "On-Site Elite", href: "/industries/#on-site" },
      { label: "Accessibility", href: "/industries/#accessibility" },
      { label: "AI-Powered", href: "/industries/#ai-powered" },
    ],
  },
  {
    label: "Languages",
    href: "/languages/",
    children: [
      { label: "All languages", href: "/languages/#find-a-language" },
      { label: "African", href: "/languages/?region=African#find-a-language" },
      { label: "Middle Eastern", href: "/languages/?region=Middle+Eastern#find-a-language" },
      { label: "Asian", href: "/languages/?region=Asian#find-a-language" },
      { label: "European", href: "/languages/?region=European#find-a-language" },
      { label: "Americas", href: "/languages/?region=Americas#find-a-language" },
      { label: "Oceania", href: "/languages/?region=Oceania#find-a-language" },
    ],
  },
  {
    label: "Trust Center",
    href: "/trust-center/",
    children: [
      { label: "Certifications", href: "/trust-center/#certifications" },
      { label: "Security", href: "/trust-center/#security" },
      { label: "Privacy", href: "/trust-center/#privacy" },
      { label: "Quality", href: "/trust-center/#quality" },
      { label: "Accessibility", href: "/trust-center/#accessibility" },
      { label: "Legal documents", href: "/trust-center/#legal-documents" },
    ],
  },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "OPI · Over the Phone", href: "/services/#opi" },
      { label: "VRI · Video Remote", href: "/services/#vri" },
      { label: "RSI · Simultaneous", href: "/services/#rsi" },
      { label: "On-Site Elite", href: "/services/#on-site" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/industries/#healthcare" },
      { label: "Legal", href: "/industries/#legal" },
      { label: "Government & NGO", href: "/industries/#government" },
      { label: "Global Business", href: "/industries/#global-business" },
    ],
  },
  {
    title: "Company",
    links: [
      // TODO(content): no About / Careers / Case Studies pages are designed yet.
      { label: "About Bayantech", href: "/#top" },
      { label: "Interpreter Network", href: "/trust-center/#quality" },
      { label: "Compliance & Security", href: "/trust-center/" },
      { label: "Language Coverage", href: "/languages/" },
      { label: "Contact Sales", href: QUOTE_HREF },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy", href: "/trust-center/#legal-documents" },
  { label: "Terms", href: "/trust-center/#legal-documents" },
  { label: "Accessibility", href: "/trust-center/#accessibility" },
  { label: "Trust Center", href: "/trust-center/" },
];
