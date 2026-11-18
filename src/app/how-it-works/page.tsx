import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SessionSteps } from "@/components/shared/Blocks";

export const metadata: Metadata = {
  title: "How a session works",
  description: "What happens from your interpreting request to the follow-up, for video, on-site and event sessions.",
};

const VARIANTS = [
  { icon: "vri" as const, title: "Video remote session", points: ["You receive a secure join link with the confirmation", "Share it with the other participants", "The interpreter joins a few minutes early to check audio"] },
  { icon: "on-site" as const, title: "On-site session", points: ["We confirm the address, contact person and arrival time", "The interpreter arrives early and checks in with your contact", "Travel is agreed in the quote"] },
  { icon: "rsi" as const, title: "Event with several languages", points: ["We agree the program, languages and channels", "Interpreter teams prepare with your presenters' materials", "A coordinator supports the event on the day"] },
];

const FAQ = [
  { q: "How much notice do you need?", a: "Core-network languages can usually be scheduled with standard notice. Rare languages and large events need more time, which we confirm when you request." },
  { q: "Can we share materials with the interpreter?", a: "Yes. Glossaries, agendas and case notes help the interpreter prepare. They are handled under the interpreter's confidentiality agreement." },
  { q: "What if a session runs over?", a: "Tell the interpreter at the start if you expect it may. We confirm extensions where the interpreter is available." },
  { q: "Is the session recorded?", a: "No. Session recording is not part of the launch release, and session content is not stored." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        label="How a session works"
        title="From request to follow-up"
        lead="Here is what happens when you book an interpreter with InterpretNext, and what to expect for video, on-site and event sessions."
        actions={<Button href="/get-quote/" size="lg">Request a quote</Button>}
      />
      <Section labelledBy="steps-title">
        <SectionHeader id="steps-title" title="Five steps" />
        <div className="mt-12">
          <SessionSteps />
        </div>
      </Section>
      <Section tone="subtle" labelledBy="variants-title">
        <SectionHeader id="variants-title" title="What changes by setting" />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {VARIANTS.map((v) => (
            <li key={v.title} className="rounded-2xl border border-border bg-white p-7">
              <Icon name={v.icon} size={48} />
              <p className="mt-6 text-lg font-semibold text-brand">{v.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {v.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-[1.55] text-muted">
                    <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-accent-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
      <Section narrow labelledBy="hiw-faq-title">
        <SectionHeader id="hiw-faq-title" title="Questions about sessions" />
        <div className="mt-10">
          <Faq items={FAQ} />
        </div>
      </Section>
      <CtaBand
        title="Ready to book your first session?"
        actions={
          <>
            <Button href="/get-quote/" variant="on-dark" size="lg">Request a quote</Button>
            <Button href="/contact/" variant="on-dark-outline" size="lg">Contact our team</Button>
          </>
        }
      />
    </>
  );
}
