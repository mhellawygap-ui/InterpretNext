import Link from "next/link";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-4 bg-brand-deep text-white/70">
      <div className="mx-auto max-w-[1440px] px-4 pt-16 pb-12 sm:px-8 lg:px-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-[24px]">
          <div>
            <Link href="/" className="tap font-display-wonk text-[22px] leading-[33px] font-bold text-white">
              Interpret<span className="text-accent-2">Next</span>
            </Link>
            <p className="mt-3 max-w-[257px] text-[13px] leading-[1.6]">
              A Bayantech / Teqneyat Group brand. Specialist interpretation for high-stakes
              communication across 200+ languages—including the dialects most providers
              don&apos;t cover.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/70">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="tap hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 InterpretNext / Bayantech. All rights reserved.</p>
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
