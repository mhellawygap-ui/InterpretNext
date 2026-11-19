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
  description: "What happens from your quote request to the follow-up: approval, assignment, meeting link, session, rating and invoice.",
};

const VARIANTS = [
  { icon: "vri" as const, title: "Remote session by video", points: ["You receive the meeting link and a calendar invite", "The session runs on our own secure platform", "The interpreter checks in before the session starts"] },
  { icon: "on-site" as const, title: "On-site session", points: ["We confirm the address, contact person and arrival time", "The interpreter checks in with your contact on arrival", "Travel is agreed in the quote"] },
  { icon: "conference" as const, title: "Conference or event, on request", points: ["Tell us the languages, the agenda and the venue or platform", "We confirm what we can staff before you approve", "Interpreters prepare with your presenters' materials"] },
];

const FAQ = [
  { q: "How much notice do you need?", a: "It depends on the language, dialect and subject. A specialist confirms the lead time in your quote, before you approve." },
  { q: "Can we share materials with the interpreter?", a: "Yes. Upload the glossary or background documents after you approve the quote. Your project manager decides which files the interpreter sees." },
  { q: "What if a session runs over?", a: "The interpreter checks out at the end, and we confirm the actual time before you are invoiced." },
  { q: "Is the session recorded?", a: "No. Sessions are not recorded by default." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        label="How a session works"
        title="From request to follow-up"
        lead="This is the flow every InterpretNext session follows, from the quote to the invoice."
        actions={<Button href="/get-quote/" size="lg">Request a quote</Button>}
      />
      <Section labelledBy="steps-title">
        <SectionHeader id="steps-title" title="Four steps" />
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
        title="Tell us about your next session"
        body="Send the languages, the date and the subject. We will reply with a quote and the interpreter profile we propose."
        actions={
          <>
            <Button href="/get-quote/" variant="on-dark" size="lg">Request a quote</Button>
            <Button href="/contact/" variant="on-dark-outline" size="lg">Talk to Sales</Button>
          </>
        }
      />
    </>
  );
}
