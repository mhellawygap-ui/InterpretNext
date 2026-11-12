"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { asset } from "@/lib/asset";
import { scrollToEl } from "@/lib/motion";
import { SECTORS, type Sector } from "@/data/industries";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { Chip } from "./Chip";
import { CtaBanner } from "./CtaBanner";
import { Faq } from "./Faq";
import { SectionTitle } from "./SectionTitle";

const MODALITY_ICONS: Record<string, BrandIconName> = { VRI: "vri", RSI: "rsi", "On-site": "on-site" };

function ModalityIcon({ badge }: { badge: string }) {
  const name = MODALITY_ICONS[badge];
  if (name) return <BrandIcon name={name} size={36} />;
  if (badge === "OPI")
    return <Image src={asset("/images/icons/telephone.png")} alt="" width={36} height={36} className="size-9 rounded-lg bg-blush p-1.5" />;
  return null;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display-wonk text-2xl font-bold text-brand">{children}</h3>;
}

function SectorPanel({ s }: { s: Sector }) {
  const cols = s.modalities.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div className="flex flex-col gap-14">
      {/* Hero card */}
      <div className="grid overflow-hidden rounded-[20px] lg:grid-cols-2">
        <div className="bg-gradient-to-r from-brand to-accent-1 px-6 py-10 text-white sm:px-10">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/70">
            <span aria-hidden>{s.emoji}</span> {s.label}
          </p>
          <h3 className="font-display-wonk mt-4 text-[30px] leading-[1.1] font-bold sm:text-[36px]">{s.title}</h3>
          <p className="mt-5 text-base leading-[1.6] text-white/80">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-quote/?modality=unsure" variant="white" className="!h-10 !text-sm">Discuss your program</Button>
            <Button href="/get-quote/" variant="ghost-light" className="!h-10 !text-sm">Request a quote</Button>
          </div>
        </div>
        <div className="relative min-h-[260px]">
          <Image
            src={asset(s.image)}
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section aria-label="What we cover">
        <H3>What we cover</H3>
        <ul className="mt-6 grid gap-3 md:grid-cols-2 md:gap-x-14">
          {s.cover.map((c) => (
            <li key={c} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground sm:text-lg">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent-1" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Challenges we solve">
        <H3>Challenges we solve</H3>
        <p className="mt-2 text-sm text-muted">The risks that bring {s.programName} buyers to us.</p>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {s.challenges.map((c) => (
            <li key={c.title} className="rounded-2xl border border-border bg-card p-5">
              <span aria-hidden className="block size-1.5 rounded-full bg-accent-1" />
              <p className="mt-4 text-lg font-semibold text-brand">{c.title}</p>
              <p className="mt-1 text-sm leading-[1.4] text-muted">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Recommended modalities">
        <H3>Recommended modalities</H3>
        <p className="mt-2 text-sm text-muted">Choose the right interpretation model for your context.</p>
        <ul className={`mt-6 grid gap-3 sm:grid-cols-2 ${cols}`}>
          {s.modalities.map((m) => (
            <li key={m.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <ModalityIcon badge={m.badge} />
                <Chip className="!h-6 !text-xs">{m.badge}</Chip>
              </div>
              <p className="mt-3 text-lg font-semibold text-brand">{m.title}</p>
              <p className="mt-1 text-sm leading-[1.4] text-muted">{m.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="flex items-center gap-2 text-lg font-semibold text-brand">
            <span aria-hidden className="text-accent-1">✦</span> Interpreter qualifications
          </p>
          <p className="mt-3 text-sm leading-[1.5] text-muted">{s.qualifications}</p>
        </div>
        <div className="rounded-2xl border border-[#cfe9d6] bg-[#eef8f0] p-6">
          <p className="flex items-center gap-2 text-lg font-semibold text-brand">
            <span aria-hidden className="text-success-ink">✓</span> Compliance &amp; trust
          </p>
          <p className="mt-3 text-sm leading-[1.5] text-muted">{s.compliance}</p>
          <Link href="/trust-center/" className="tap mt-4 inline-block text-sm font-medium text-success-ink hover:underline">
            Visit Trust Center →
          </Link>
        </div>
      </div>

      <Faq items={s.faqs} title="Frequently asked questions" />

      <CtaBanner
        title={`Ready to talk about your ${s.programName} program?`}
        body="Tell us your languages, volume, and workflow. We'll recommend the right interpretation model for your specific context."
        actions={
          <>
            <Button href="/get-quote/" variant="white">Get a tailored quote</Button>
            <Button href="/get-quote/?modality=unsure" variant="ghost-light">Book a consultation</Button>
          </>
        }
      />
    </div>
  );
}

export function SectorExplorer() {
  const [activeId, setActiveId] = useState(SECTORS[0].id);
  const tablistRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Sync with #hash so nav/footer links like /industries/#legal open the right tab.
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
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % SECTORS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + SECTORS.length) % SECTORS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = SECTORS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    select(SECTORS[next].id);
    tablistRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  };

  const active = SECTORS.find((s) => s.id === activeId) ?? SECTORS[0];

  return (
    <>
      <section id="sectors" ref={sectionRef} className="scroll-mt-28 pt-10">
        <SectionTitle
          align="center"
          eyebrow="Industry expertise"
          title="Choose your sector"
          lead="Interpretation requirements differ dramatically by industry. Select yours to see the relevant services, qualifications, and compliance framework."
        />
        <div
          ref={tablistRef}
          role="tablist"
          aria-label="Sectors"
          onKeyDown={onKeyDown}
          className="mx-auto mt-10 flex max-w-[780px] flex-wrap justify-center gap-2"
        >
          {SECTORS.map((s) => {
            const selected = s.id === activeId;
            return (
              <button
                key={s.id}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls="sector-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(s.id)}
                className={`tap inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium ${
                  selected ? "border-brand bg-brand text-white" : "border-border bg-card text-foreground hover:border-accent-1"
                }`}
              >
                <span aria-hidden>{s.emoji}</span>
                {s.label}
              </button>
            );
          })}
        </div>
        <div id="sector-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="mt-10">
          <SectorPanel s={active} />
        </div>
      </section>

      <section aria-labelledby="glance-title" className="pt-20 pb-16">
        <SectionTitle
          align="center"
          title={<span id="glance-title">All industries at a glance</span>}
          lead="Eight specialized verticals, one interpretation partner."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s) => {
            const extra = s.cover.length - 2;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => select(s.id, true)}
                  className="flex h-full w-full flex-col items-start rounded-2xl border border-border bg-card p-5 text-left hover:shadow-[0_8px_24px_rgba(101,40,203,0.07)]"
                >
                  <span aria-hidden className="text-2xl">{s.emoji}</span>
                  <span className="mt-4 text-base font-semibold text-brand">{s.glance.title}</span>
                  <span className="mt-2 text-sm leading-[1.4] text-muted">{s.glance.tagline}</span>
                  <span className="mt-4 flex flex-wrap items-center gap-1.5">
                    {s.cover.slice(0, 2).map((c) => (
                      <span key={c} className="inline-block max-w-[150px] truncate rounded-full bg-lilac-strong/60 px-2 text-xs leading-5 font-medium text-accent-1">{c}</span>
                    ))}
                    {extra > 0 && <span className="text-xs text-muted">+{extra} more</span>}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
