"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { PRIMARY_NAV, QUOTE_HREF, type NavGroup } from "@/lib/nav";
import { Button } from "@/components/ui/Button";

function Chevron({ open }: { open?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/images/arrow.svg")}
      alt=""
      width={24}
      height={24}
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    />
  );
}

function isActive(pathname: string, href: string) {
  const path = href.split(/[?#]/)[0];
  return path !== "/" && pathname.startsWith(path.replace(/\/$/, ""));
}

function NavDropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = isActive(pathname, group.href);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={group.href}
        className={`flex min-h-11 items-center gap-1 text-base font-medium hover:text-accent-1 ${active ? "text-accent-1" : "text-foreground"}`}
        aria-current={active ? "page" : undefined}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {group.label}
        <Chevron open={open} />
      </Link>
      {open && (
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-1">
          <ul className="min-w-[240px] rounded-xl border border-border bg-card p-2 shadow-[0_12px_32px_rgba(8,12,65,0.07)]">
            {group.children.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm text-foreground hover:bg-lilac/60 hover:text-accent-1"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:h-[114px] lg:px-[80px]">
        <Link href="/" aria-label="InterpretNext home" className="relative block h-[80px] w-[160px] shrink-0 overflow-hidden lg:h-[114px] lg:w-[218px]">
          {/* The source logo artwork has generous padding; it is cropped by the link box. */}
          <Image
            src={asset("/images/logo.png")}
            alt="InterpretNext — Understand. Connect. Advance."
            width={218}
            height={145}
            priority
            className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 xl:flex">
          {PRIMARY_NAV.map((g) => (
            <NavDropdown key={g.label} group={g} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          {/* TODO(content): no client portal URL yet */}
          <Link href="/#top" className="tap mr-4 text-base font-medium text-accent-1 underline">
            Client login
          </Link>
          <Button href={QUOTE_HREF} variant="outline">Get quote</Button>
          <Button href={`${QUOTE_HREF}?modality=unsure`}>Request demo</Button>
        </div>

        <button
          type="button"
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border px-3 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
                    onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="text-lg leading-none text-brand">{open ? "✕" : "☰"}</span>
          <span className="text-sm font-medium text-brand">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-border bg-card px-4 pb-6 sm:px-8 xl:hidden">
          <nav aria-label="Mobile" className="flex flex-col py-2">
            {PRIMARY_NAV.map((g) => (
              <details key={g.label} className="group border-b border-border/60">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-base font-medium text-foreground">
                  {g.label}
                  <span className="transition-transform group-open:rotate-180"><Chevron /></span>
                </summary>
                <ul className="pb-3 pl-3">
                  <li>
                    <Link href={g.href} className="flex min-h-11 items-center text-sm font-medium text-accent-1">
                      All {g.label.toLowerCase()}
                    </Link>
                  </li>
                  {g.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center text-sm text-muted">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <Link href="/#top" className="flex min-h-12 items-center text-base font-medium text-accent-1 underline">
              Client login
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button href={QUOTE_HREF} variant="outline" className="flex-1">Get quote</Button>
            <Button href={`${QUOTE_HREF}?modality=unsure`} className="flex-1">Request demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
