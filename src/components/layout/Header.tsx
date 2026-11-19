"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { LOGIN_HREF, PRIMARY_NAV, QUOTE_HREF, type NavItem } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

function Caret({ open = false }: { open?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={`size-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  const path = href.split(/[?#]/)[0].replace(/\/$/, "");
  return path !== "" && pathname.replace(/\/$/, "").startsWith(path);
}

function NavEntry({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const active = isActive(pathname, item.href) || !!item.children?.some((c) => isActive(pathname, c.href));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls = `flex h-10 items-center gap-0.5 rounded-lg px-2 text-[15px] whitespace-nowrap font-medium hover:bg-surface ${active ? "text-brand" : "text-muted hover:text-brand"}`;

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={linkCls} aria-current={active ? "page" : undefined}>
          {item.label}
        </Link>
      </li>
    );
  }

  const wide = item.children.some((c) => c.description);
  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link href={item.href} className={linkCls} aria-haspopup="true" aria-expanded={open}>
        {item.label}
        <Caret open={open} />
      </Link>
      {open && (
        <div className="absolute top-full left-0 z-50 pt-2">
          <ul className={`grid gap-1 rounded-2xl border border-border bg-white p-2 shadow-[0_16px_40px_rgba(11,16,69,0.06)] ${wide ? "w-[560px] grid-cols-2" : "w-[260px]"}`}>
            {item.children.map((c) => (
              <li key={c.href + c.label}>
                <Link href={c.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 hover:bg-surface">
                  <span className="block text-[15px] font-medium text-brand">{c.label}</span>
                  {c.description && <span className="mt-0.5 block text-[13px] leading-snug text-muted">{c.description}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <ScrollProgress />
      <div className="mx-auto flex h-[72px] max-w-[1328px] items-center justify-between gap-3 px-6 md:px-8">
        <Link href="/" aria-label="InterpretNext home" className="relative block h-[72px] w-[144px] shrink-0 overflow-hidden">
          <Image
            src={asset("/images/logo.png")}
            alt="InterpretNext"
            width={218}
            height={145}
            priority
            className="absolute top-1/2 -left-[6px] h-auto w-[142px] max-w-none -translate-y-1/2"
          />
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 xl:block">
          <ul className="flex items-center gap-0.5">
            {PRIMARY_NAV.map((item) => (
              <NavEntry key={item.label} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
          <Link href={LOGIN_HREF} className="flex h-10 items-center rounded-lg px-2 text-[15px] font-medium whitespace-nowrap text-muted hover:bg-surface hover:text-brand">
            Client login
          </Link>
          <Button href={QUOTE_HREF}>Request a quote</Button>
        </div>

        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-[10px] border border-border-strong px-4 text-[15px] font-medium text-brand xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-white px-6 pb-8 xl:hidden">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-border">
              {PRIMARY_NAV.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <details className="group">
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-base font-semibold text-brand [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <span className="transition-transform group-open:rotate-180"><Caret /></span>
                      </summary>
                      <ul className="pb-3">
                        {[{ label: `${item.label} overview`, href: item.href }, ...item.children].map((c) => (
                          <li key={c.href + c.label}>
                            <Link href={c.href} className="flex min-h-11 items-center text-[15px] text-muted hover:text-brand">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link href={item.href} className="flex min-h-14 items-center text-base font-semibold text-brand">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link href={LOGIN_HREF} className="flex min-h-14 items-center text-base font-semibold text-brand">
                  Client login
                </Link>
              </li>
            </ul>
          </nav>
          <Button href={QUOTE_HREF} size="lg" className="mt-4 w-full">Request a quote</Button>
        </div>
      )}
    </header>
  );
}
