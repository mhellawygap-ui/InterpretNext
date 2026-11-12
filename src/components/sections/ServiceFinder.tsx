"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  id: string;
  icon: string;
  animated?: boolean;
  situation: string;
  situationHint: string;
  name: string;
  code: string;
  bestFor: string;
  description: string;
  useCases: string[];
  cta: string;
  /** Pre-selects the modality on /get-quote/ */
  quote: string;
};

// Only the "Phone Call" detail panel is specified in Figma.
// TODO(content): replace the copy for the other three services with approved text.
const SERVICES: Service[] = [
  {
    id: "opi",
    icon: "/images/telephone-receiver.gif",
    animated: true,
    situation: "Phone Call",
    situationHint: "Fast, voice-only conversations",
    name: "Over-the-Phone Interpretation",
    code: "OPI",
    bestFor: "Best for fast, voice-only conversations",
    description:
      "Connects you to a live interpreter in seconds — no video, no app, no scheduling. Built for healthcare intake lines, insurance calls, emergency dispatch, and customer support desks that can't afford to wait.",
    useCases: ["Healthcare intake", "Insurance claims", "Emergency services", "Helpdesk & CX"],
    cta: "Request OPI service",
    quote: "opi",
  },
  {
    id: "vri",
    icon: "/images/brand/vri.webp",
    situation: "Video or In Person",
    situationHint: "Appointments, meetings, and consultations",
    name: "Video Remote & On-Site Interpretation",
    code: "VRI · On-Site",
    bestFor: "Best for face-to-face visits and visual context",
    description:
      "See and be seen. A certified interpreter joins by video in seconds, or on-site for sessions where presence matters — ideal for clinical consultations, legal meetings, and sign-language needs.",
    useCases: ["Clinical visits", "Legal meetings", "Social services", "Sign language"],
    cta: "Request VRI service",
    quote: "vri",
  },
  {
    id: "rsi",
    icon: "/images/brand/rsi.webp",
    situation: "Conference or Event",
    situationHint: "Live events and large audiences",
    name: "Remote Simultaneous Interpretation",
    code: "RSI",
    bestFor: "Best for live events and multilingual audiences",
    description:
      "Real-time interpretation streamed to every attendee in their language, on any platform — for summits, board meetings, webinars, and hybrid events at any scale.",
    useCases: ["Summits", "Board meetings", "Webinars", "Hybrid events"],
    cta: "Request RSI service",
    quote: "rsi",
  },
  {
    id: "docs",
    icon: "/images/page-facing-up.png",
    situation: "Document or Content",
    situationHint: "Written and recorded materials",
    name: "Translation & Transcription",
    code: "Docs",
    bestFor: "Best for written and recorded materials",
    description:
      "Certified translation of documents and accurate transcription of recordings, handled by the same domain-matched linguists — with full confidentiality on every file.",
    useCases: ["Medical records", "Court filings", "Recordings", "Compliance docs"],
    cta: "Request a quote",
    quote: "unsure",
  },
];

export function ServiceFinder() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section id="services" className="scroll-mt-28 pt-16 pb-10">
      <Container wide>
        <SectionHeading
          eyebrow="Find your service"
          title={
            <>
              Tell us what’s happening.
              <br className="hidden sm:block" /> We’ll recommend the{" "}
              <GradientText>right service</GradientText>.
            </>
          }
          lead="Instead of choosing between technical formats, start with what's actually happening a phone call, a face-to-face visit, a live event, or someone in the room. We'll show you which service fits."
          className="max-w-[850px] lg:px-3"
          titleClassName="!mt-4"
        />

        <div role="tablist" aria-label="What's happening?" className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s) => {
            const selected = s.id === activeId;
            return (
              <button
                key={s.id}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActiveId(s.id)}
                className={`flex min-h-[152px] flex-col justify-center gap-4 rounded-[20px] border px-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1 ${
                  selected
                    ? "bg-brand-gradient border-background text-background"
                    : "border-accent-1 bg-[rgba(245,241,253,0.4)] hover:bg-lilac/50"
                }`}
              >
                <Image src={asset(s.icon)} alt="" width={40} height={40} unoptimized={s.animated} className={s.icon.includes("/brand/") ? "size-10" : "size-8"} />
                <span className="flex flex-col gap-2 leading-[1.2]">
                  <span className={`text-xl font-semibold ${selected ? "" : "text-brand"}`}>{s.situation}</span>
                  <span className={`text-base font-medium ${selected ? "" : "text-muted"}`}>{s.situationHint}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-14 flex flex-col gap-8 rounded-[20px] border-[0.5px] border-accent-1/60 bg-[rgba(245,241,253,0.4)] p-6 lg:flex-row lg:items-center lg:justify-between lg:pr-8"
        >
          <div className="max-w-[876px]">
            <div className="flex items-center gap-4">
              <IconTile src={active.icon} size={63} radius={9} unoptimized={active.animated} />
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-semibold leading-[1.2] text-foreground sm:text-[25px]">{active.name}</h3>
                <span className="inline-flex h-5 items-center rounded-full bg-lilac-strong/60 px-2.5 text-xs font-medium text-accent-1">
                  {active.code}
                </span>
              </div>
            </div>
            <p className="mt-8 text-xl font-medium leading-[1.2] text-foreground">{active.bestFor}</p>
            <p className="mt-3 text-base leading-[1.5] text-muted">{active.description}</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {active.useCases.map((u) => (
                <li key={u} className="inline-flex h-6 items-center rounded-full bg-lilac-strong/60 px-2.5 text-[13px] font-medium text-accent-1">
                  {u}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-3 rounded-xl border-[0.5px] border-lilac-strong bg-white p-6 text-center lg:w-[308px]">
            <IconTile src="/images/headphone.png" size={64} radius={32} tone="lilac" />
            <p className="text-xl font-semibold text-black">Ready to connect?</p>
            <p className="max-w-[268px] text-[13px] text-[#46464d]">
              Our network of professional linguists is available immediately.
            </p>
            <Link
              href={`/get-quote/?modality=${active.quote}`}
              className="tap inline-flex h-10 w-[204px] items-center justify-center rounded-[13px] bg-brand text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(8,12,65,0.06)] hover:bg-accent-1"
            >
              {active.cta}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[15px] border-[0.5px] border-accent-1 bg-brand px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-lilac">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/ai2.svg")} alt="" width={32} height={32} />
            </span>
            <div className="text-white">
              <p className="text-xl font-medium leading-[1.2]">Not sure which one you need?</p>
              <p className="mt-3 text-[13px] leading-[1.2]">
                Describe your situation and our assistant will recommend the right service in seconds.
              </p>
            </div>
          </div>
          <Link
            href="/get-quote/?modality=unsure"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl border-[0.2px] border-accent-1 bg-background px-6 text-[13px] font-semibold shadow-[0_2px_8px_rgba(8,12,65,0.06)] sm:w-[214px]"
          >
            <span className="text-gradient">Ask the assistant</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
