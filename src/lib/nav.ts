import { CLIENT_PORTAL_URL } from "@/data/site";
import { SERVICES } from "@/data/services";
import { SECTORS } from "@/data/industries";

/** Single source of truth for routes, header menus and footer. */

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const QUOTE_HREF = "/get-quote/";
export const CONTACT_HREF = "/contact/";
export const LOGIN_HREF = CLIENT_PORTAL_URL ?? "/client-login/";

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      ...SERVICES.map((s) => ({ label: s.title, href: `/services/#${s.id}`, description: s.bestFor })),
      { label: "Coming in later releases", href: "/services/#later" },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: SECTORS.map((s) => ({ label: s.label, href: `/industries/#${s.id}` })),
  },
  { label: "Languages", href: "/languages/" },
  {
    label: "Platform",
    href: "/platform/",
    children: [
      { label: "Secure platform", href: "/platform/", description: "Encryption, access control and data handling" },
      { label: "How a session works", href: "/how-it-works/", description: "From request to follow-up" },
      { label: "Integrations", href: "/platform/#integrations", description: "Works with the tools you use" },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  {
    label: "Company",
    href: "/about/",
    children: [
      { label: "About InterpretNext", href: "/about/" },
      { label: "Trust Center", href: "/trust-center/" },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  { title: "Services", links: SERVICES.map((s) => ({ label: s.title, href: `/services/#${s.id}` })) },
  { title: "Industries", links: SECTORS.filter((s) => !s.later).map((s) => ({ label: s.label, href: `/industries/#${s.id}` })) },
  {
    title: "Platform",
    links: [
      { label: "Secure platform", href: "/platform/" },
      { label: "How a session works", href: "/how-it-works/" },
      { label: "Integrations", href: "/platform/#integrations" },
      { label: "Languages", href: "/languages/" },
      { label: "Pricing", href: "/pricing/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About InterpretNext", href: "/about/" },
      { label: "Trust Center", href: "/trust-center/" },
      { label: "Contact", href: CONTACT_HREF },
      { label: "Client login", href: LOGIN_HREF },
      { label: "Request a quote", href: QUOTE_HREF },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy", href: "/trust-center/#legal-documents" },
  { label: "Terms", href: "/trust-center/#legal-documents" },
  { label: "Accessibility", href: "/trust-center/#accessibility" },
  { label: "Security", href: "/trust-center/#security" },
];
