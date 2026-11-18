import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PRICING, PROCUREMENT_FAQ } from "@/data/content";

export const metadata: Metadata = {
  title: "How pricing works",
  description: "What affects the price of interpreting, what every booking includes, and answers to common procurement questions.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro
        label="Pricing"
        title="How pricing works"
        lead="Every quote is tailored to your languages, settings and volume. Here is what shapes the price and what every booking includes."
        actions={<Button href="/get-quote/" size="lg">Request a quote</Button>}
      />
      <Section labelledBy="drivers-title">
        <SectionHeader id="drivers-title" title="What affects the price" />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.drivers.map((d) => (
            <li key={d.title}>
              <Icon name={d.icon} size={44} />
              <p className="mt-5 font-semibold text-brand">{d.title}</p>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{d.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="subtle" labelledBy="included-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader id="included-title" title="Included in every booking" lead="No subscription fees at launch. You pay for the interpreting you book." />
          <ul className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-white">
            {PRICING.included.map((p) => (
              <li key={p} className="flex gap-3 px-6 py-4 text-[15px] text-brand">
                <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-success-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section labelledBy="quote-steps-title">
        <SectionHeader id="quote-steps-title" title="How to get a quote" />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Tell us what you need", "Languages, settings, dates and expected volume. It takes about two minutes."],
            ["Get a recommendation", "A specialist replies within one business day with the right services and pricing."],
            ["Confirm and book", "Accept the quote and book sessions as you need them."],
          ].map(([t, b], i) => (
            <li key={t} className="rounded-2xl border border-border bg-white p-7">
              <span className="text-sm font-semibold text-subtle">Step {i + 1}</span>
              <p className="mt-3 text-lg font-semibold text-brand">{t}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">{b}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="subtle" narrow id="procurement-faq" labelledBy="pfaq-title">
        <SectionHeader id="pfaq-title" title="Procurement questions" />
        <div className="mt-10">
          <Faq items={PROCUREMENT_FAQ} />
        </div>
      </Section>
      <CtaBand
        title="Get a tailored quote"
        body="Share your languages, settings and volume. We reply within one business day."
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
