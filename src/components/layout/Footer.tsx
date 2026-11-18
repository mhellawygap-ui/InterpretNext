import Link from "next/link";
import { COMPANY, CONTACT } from "@/data/site";
import { CONTACT_HREF, FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-deep text-white/75">
      <div className="mx-auto max-w-[1264px] px-6 pt-16 pb-10 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div className="max-w-[300px]">
            <Link href="/" className="font-display-wonk text-2xl font-semibold text-white">
              Interpret<span className="text-accent-2">Next</span>
            </Link>
            <p className="mt-4 text-sm leading-[1.6]">
              {COMPANY.tagline}. Professional interpreting in more than 200 languages for healthcare, legal and public-sector teams.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              {CONTACT.email && (
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
                </li>
              )}
              {CONTACT.phone && (
                <li>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">{CONTACT.phone}</a>
                </li>
              )}
              {CONTACT.address && <li>{CONTACT.address}</li>}
              <li>
                <Link href={CONTACT_HREF} className="tap font-semibold text-white underline-offset-4 hover:underline">
                  Contact our team →
                </Link>
              </li>
            </ul>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="tap hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 InterpretNext. {COMPANY.tagline}.</p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="tap hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
