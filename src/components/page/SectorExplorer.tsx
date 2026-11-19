"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { SECTORS, type Sector } from "@/data/industries";
import { serviceById } from "@/data/services";
import { scrollToEl } from "@/lib/motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";

function SectorPanel({ s }: { s: Sector }) {
  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <Icon name={s.icon} size={44} />
            <p className="text-sm font-semibold text-muted">{s.label}</p>
            {s.later && <Badge>Later release</Badge>}
          </div>
          <h2 className="font-display-wonk mt-6 text-[30px] leading-[1.15] font-semibold text-brand md:text-[40px]">{s.title}</h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-muted">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-quote/">Request a quote</Button>
            <Button href="/contact/" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-7">
          <h3 className="text-[17px] font-semibold text-brand">What we cover</h3>
          <ul className="mt-5 flex flex-col gap-3.5">
            {s.cover.map((c) => (
              <li key={c} className="flex gap-3 text-[15px] text-brand">
                <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-accent-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-brand">Challenges we solve</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {s.challenges.map((c) => (
            <li key={c.title} className="rounded-2xl border border-border bg-white p-6">
              <p className="font-semibold text-brand">{c.title}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-brand">Services for this sector</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.modes.map((m) => {
            const svc = serviceById(m.service)!;
            return (
              <li key={m.service}>
                <Link href={`/services/#${svc.id}`} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 hover:border-border-strong">
                  <Icon name={svc.icon} size={44} />
                  <p className="mt-5 font-semibold text-brand">{svc.title}</p>
                  <p className="mt-1.5 text-sm leading-[1.55] text-muted">{m.use}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-7">
          <h3 className="font-semibold text-brand">Interpreter qualifications</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-muted">{s.qualifications}</p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-7">
          <h3 className="font-semibold text-brand">Compliance and confidentiality</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-muted">{s.compliance}</p>
          <Link href="/trust-center/" className="tap mt-4 inline-block text-[15px] font-semibold text-accent-1 hover:underline">Visit the Trust Center →</Link>
        </div>
      </div>

      <div className="max-w-[880px]">
        <h3 className="text-xl font-semibold text-brand">Frequently asked questions</h3>
        <div className="mt-4">
          <Faq items={s.faqs} />
        </div>
      </div>
    </div>
  );
}

export function SectorExplorer() {
  const [activeId, setActiveId] = useState(SECTORS[0].id);
  const tablistRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // /industries/#legal opens the Legal tab.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (SECTORS.some((s) => s.id === id)) {
        setActiveId(id);
        requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ block: "start" }));
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = useCallback((id: string, scroll = false) => {
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
    if (scroll) scrollToEl(sectionRef.current);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = SECTORS.findIndex((s) => s.id === activeId);
    const map: Record<string, number> = { ArrowRight: (i + 1) % SECTORS.length, ArrowLeft: (i - 1 + SECTORS.length) % SECTORS.length, Home: 0, End: SECTORS.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    select(SECTORS[map[e.key]].id);
    tablistRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[map[e.key]]?.focus();
  };

  const active = SECTORS.find((s) => s.id === activeId) ?? SECTORS[0];

  return (
    <div ref={sectionRef} className="scroll-mt-24">
      <div ref={tablistRef} role="tablist" aria-label="Sectors" onKeyDown={onKeyDown} className="flex flex-wrap gap-2 border-b border-border pb-6">
        {SECTORS.map((s) => {
          const on = s.id === activeId;
          return (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={on}
              aria-controls="sector-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => select(s.id)}
              className={`tap inline-flex h-10 items-center gap-2 rounded-full border px-4 text-[15px] font-medium ${on ? "border-brand bg-brand text-white" : "border-border bg-white text-brand hover:border-border-strong"}`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      <div id="sector-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="pt-12">
        <SectorPanel s={active} />
      </div>
    </div>
  );
}
