import { CLIENT_PORTAL_URL } from "@/data/site";
import { SERVICES } from "@/data/services";
import { SECTORS } from "@/data/industries";
import { REGIONS, regionSlug } from "@/data/languages";

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
  {
    label: "Languages",
    href: "/languages/",
    children: [
      { label: "Check a language", href: "/languages/#check", description: "Search by name, native name or dialect" },
      ...REGIONS.map((r) => ({ label: r, href: `/languages/#${regionSlug(r)}` })),
    ],
  },
  { label: "Secure Platform", href: "/secure-platform/" },
  { label: "Interpreters", href: "/interpreters/" },
  { label: "Trust Center", href: "/trust-center/" },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "How a session works", href: "/how-it-works/", description: "From request to follow-up" },
      { label: "How pricing works", href: "/pricing/", description: "What affects the price" },
      { label: "Questions and answers", href: "/resources/#faq" },
      { label: "Security summary for IT teams", href: "/trust-center/#request-docs" },
    ],
  },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  { title: "Services", links: SERVICES.map((s) => ({ label: s.title, href: `/services/#${s.id}` })) },
  { title: "Industries", links: SECTORS.map((s) => ({ label: s.label, href: `/industries/#${s.id}` })) },
  {
    title: "Platform and languages",
    links: [
      { label: "Languages", href: "/languages/" },
      { label: "Secure Platform", href: "/secure-platform/" },
      { label: "Trust Center", href: "/trust-center/" },
      { label: "How a session works", href: "/how-it-works/" },
      { label: "How pricing works", href: "/pricing/" },
    ],
  },
  {
    title: "Interpreters",
    links: [
      { label: "How we choose interpreters", href: "/interpreters/" },
      { label: "Apply to join", href: "/interpreters/#apply" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About bayanTech", href: "/about/" },
      { label: "Contact", href: CONTACT_HREF },
      { label: "Client login", href: LOGIN_HREF },
      { label: "Request a quote", href: QUOTE_HREF },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy", href: "/trust-center/#legal-documents" },
  { label: "Terms", href: "/trust-center/#legal-documents" },
  { label: "Cookies", href: "/trust-center/#legal-documents" },
  { label: "Accessibility", href: "/trust-center/#accessibility" },
];
