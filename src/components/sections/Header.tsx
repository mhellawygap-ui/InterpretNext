"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Languages", href: "#languages" },
  { label: "Trust Center", href: "#compliance" },
];

function Chevron() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/images/arrow.svg" alt="" width={24} height={24} className="shrink-0" />;
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:h-[114px] lg:px-[80px]">
        <Link href="/" aria-label="InterpretNext home" className="relative block h-[80px] w-[160px] shrink-0 overflow-hidden lg:h-[114px] lg:w-[218px]">
          {/* The source logo artwork has generous padding; it is cropped by the link box. */}
          <Image
            src="/images/logo.png"
            alt="InterpretNext — Understand. Connect. Advance."
            width={218}
            height={145}
            priority
            className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-base font-medium text-foreground hover:text-accent-1"
            >
              {item.label}
              <Chevron />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link href="#login" className="mr-4 text-base font-medium text-accent-1 underline">
            Client Login
          </Link>
          <Button href="#get-started" variant="outline">Get Quote</Button>
          <Button href="#get-started">Request Demo</Button>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-lg border border-border xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="text-xl leading-none text-brand">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-card px-4 pb-6 sm:px-8 xl:hidden">
          <nav aria-label="Mobile" className="flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link href="#login" className="py-3 text-base font-medium text-accent-1 underline">
              Client Login
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button href="#get-started" variant="outline" className="flex-1">Get Quote</Button>
            <Button href="#get-started" className="flex-1">Request Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
