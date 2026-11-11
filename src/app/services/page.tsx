import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import { AssistantBanner } from "@/components/page/AssistantBanner";
import { Chip } from "@/components/page/Chip";
import { Highlight, PageHero } from "@/components/page/PageHero";
import { SERVICE_GROUPS, type ServiceItem } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "OPI, VRI, RSI, On-Site Elite, conference, ASL, document translation, AI speech translation and interpreter management.",
};

function ServiceCard({ s }: { s: ServiceItem }) {
  return (
    <details id={s.id} open className="group scroll-mt-32 rounded-2xl border border-border bg-card">
      <summary className="flex cursor-pointer list-none items-start gap-4 p-4 sm:p-6 [&::-webkit-details-marker]:hidden">
        <IconTile src={s.icon} unoptimized={s.animated} />
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold leading-[1.2] text-foreground">{s.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <li key={t}><Chip className="!text-xs">{t}</Chip></li>
            ))}
          </ul>
        </div>
        <svg aria-hidden viewBox="0 0 24 24" className="mt-2 size-6 shrink-0 text-border transition-transform group-not-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">Toggle details</span>
      </summary>
      <div className="flex flex-col gap-6 px-4 pb-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-[820px]">
          <p className="text-xl font-medium leading-[1.2] text-foreground">{s.bestFor}</p>
          <p className="mt-3 text-base leading-[1.35] text-muted">{s.body}</p>
        </div>
        <Link
          href={`/get-quote/?modality=${s.quote}`}
          className="inline-flex h-[35px] w-full shrink-0 items-center justify-center rounded-[13px] bg-brand text-[13px] font-semibold text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:bg-accent-1 sm:w-[204px]"
          aria-label={`Request ${s.title}`}
        >
          Request Service
        </Link>
      </div>
    </details>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="InterpretNext · Services"
        title={
          <>
            Interpretation <Highlight>services</Highlight> designed for every way you connect.
          </>
        }
        lead="Every conversation has its own setting, pace, and communication needs. InterpretNext offers flexible interpretation services that match the moment—from remote and on-site interpreting to specialized solutions built around your requirements."
        actions={
          <>
            <Button href="#remote-interpretations" variant="white">Explore Services</Button>
            <Button href="/get-quote/?modality=unsure" variant="ghost-light">Discuss your use case</Button>
          </>
        }
        footer={
          <ul className="flex flex-wrap gap-2">
            <li><Pill tone="lilac">Healthcare Language Access</Pill></li>
            <li><Pill tone="blush">Legal-Certified Interpreters</Pill></li>
            <li><Pill tone="sky">Rare Language Coverage</Pill></li>
          </ul>
        }
      />

      <Container className="pb-16 lg:!px-[96px]">
        {SERVICE_GROUPS.map((g) => {
          const id = g.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "");
          return (
            <section key={g.title} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
              <h2 id={`${id}-title`} className="pt-8 pb-6 text-center text-base font-medium text-accent-1">
                {g.title}
              </h2>
              <div className="flex flex-col gap-4">
                {g.items.map((s) => (
                  <ServiceCard key={s.id} s={s} />
                ))}
              </div>
            </section>
          );
        })}
        <div className="mt-10">
          <AssistantBanner />
        </div>
      </Container>
    </>
  );
}
