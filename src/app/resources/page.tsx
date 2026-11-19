import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ, PROCUREMENT_FAQ } from "@/data/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "How a session works, how pricing works, a security summary for IT teams, and answers to common questions.",
};

const GUIDES: { icon: IconName; title: string; body: string; href: string; cta: string }[] = [
  { icon: "request", title: "How a session works", body: "The four steps every session follows, from the quote to the invoice.", href: "/how-it-works/", cta: "Read the steps" },
  { icon: "pricing", title: "How pricing works", body: "What affects the price and what every booking includes.", href: "/pricing/", cta: "See what affects the price" },
  { icon: "report", title: "Security summary for IT teams", body: "A one-page summary of how we protect sessions, for your security review.", href: "/trust-center/#request-docs", cta: "Request the summary" },
  { icon: "languages-200", title: "Check a language", body: "Search our language list by name, native name, dialect or country.", href: "/languages/#check", cta: "Search languages" },
];

const ALL_FAQ = [...FAQ, ...PROCUREMENT_FAQ.filter((p) => !FAQ.some((f) => f.q === p.q))];

export default function ResourcesPage() {
  return (
    <>
      <PageIntro label="Resources" title="Guides and answers" lead="Short, plain explanations for the people who book, approve and secure interpreting in your organization." />
      <Section labelledBy="guides-title">
        <h2 id="guides-title" className="sr-only">Guides</h2>
        <ul className="grid gap-5 sm:grid-cols-2">
          {GUIDES.map((g, i) => (
            <Reveal as="li" key={g.title} delay={(i % 2) * 60}>
              <Link href={g.href} className="group lift flex h-full gap-5 rounded-3xl border border-border bg-white p-7">
                <Icon name={g.icon} size={48} />
                <span className="flex flex-col">
                  <span className="text-lg font-semibold text-brand">{g.title}</span>
                  <span className="mt-1.5 text-[15px] leading-[1.6] text-muted">{g.body}</span>
                  <span className="mt-4 text-[15px] font-semibold text-accent-1">{g.cta} →</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section tone="subtle" id="faq" labelledBy="faq-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader id="faq-title" title="Questions and answers" lead="Booking, languages, interpreters, data and payment." />
            <div className="mt-8">
              <Button href="/contact/" variant="secondary">Ask us something else</Button>
            </div>
          </div>
          <Faq items={ALL_FAQ} />
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
