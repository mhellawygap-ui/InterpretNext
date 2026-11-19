import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HeroBridge } from "@/components/motion/HeroBridge";
import { Reveal } from "@/components/motion/Reveal";
import { HeroMedia } from "@/components/shared/HeroMedia";
import { HardLanguages } from "@/components/shared/HardLanguages";
import { ServiceFinder } from "@/components/shared/ServiceFinder";
import { IndustryGrid, PlatformFeatures, SessionSteps, Testimonial, TierCards } from "@/components/shared/Blocks";
import {
  CLIENT_LOGOS,
  CLOSING,
  FAQ,
  FINDER_COPY,
  HARD_LANGUAGES,
  HERO,
  INTERPRETERS,
  PLATFORM,
  PROOF,
  TESTIMONIAL,
  TRUST_SUMMARY,
} from "@/data/content";
import { HERO_VIDEO } from "@/data/site";

/** Homepage, in the order of Copy Deck v1 section 6. */
export default function Home() {
  return (
    <>
      {/* 6.1 Hero */}
      <section className="bg-glow relative overflow-hidden text-white">
        <Container className="grid grid-cols-1 items-center gap-14 pt-14 pb-20 md:pt-20 md:pb-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3.5 py-1.5 text-[13px] font-semibold text-white/85 ring-1 ring-white/15">
              <span aria-hidden className="bg-logo size-2 rounded-full" />
              {HERO.eyebrow}
            </p>
            <h1 className="font-display-wonk mt-6 text-[36px] leading-[1.08] font-semibold tracking-[-0.02em] md:text-[52px]">{HERO.title}</h1>
            <p className="mt-7 max-w-[58ch] text-lg leading-[1.65] text-white/80">{HERO.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/get-quote/" variant="on-dark" size="lg">Request a quote</Button>
              <Button href="#how-it-works" variant="on-dark-outline" size="lg">See how a session works</Button>
            </div>
          </div>
          {HERO_VIDEO ? <HeroMedia /> : <HeroBridge />}
        </Container>
      </section>

      {/* 6.2 Proof strip: Safe statements only until the numbers are verified */}
      <section aria-labelledby="proof-title" className="border-b border-border bg-white">
        <h2 id="proof-title" className="sr-only">Why teams choose InterpretNext</h2>
        <Container>
          {CLIENT_LOGOS.length > 0 && (
            <ul className="flex flex-wrap items-center gap-10 border-b border-border py-8">
              {CLIENT_LOGOS.map((l) => (
                // eslint-disable-next-line @next/next/no-img-element
                <li key={l.name}><img src={l.src} alt={l.name} className="h-7 w-auto opacity-80 grayscale" /></li>
              ))}
            </ul>
          )}
          <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {PROOF.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="flex gap-4 py-8 sm:pr-6 lg:px-6 lg:first:pl-0">
                <Icon name={p.icon} size={40} />
                <div>
                  <p className="font-semibold leading-snug text-brand">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-[1.55] text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6.3 Find the right service */}
      <Section labelledBy="finder-title">
        <SectionHeader
          id="finder-title"
          title={FINDER_COPY.title}
          lead={FINDER_COPY.lead}
          action={<Button href="/services/" variant="secondary">All services</Button>}
        />
        <Reveal className="mt-12">
          <ServiceFinder />
        </Reveal>
      </Section>

      {/* 6.4 Industries */}
      <Section tone="subtle" labelledBy="industries-title">
        <SectionHeader id="industries-title" title="Who we work with" action={<Button href="/industries/" variant="secondary">All industries</Button>} />
        <div className="mt-12">
          <IndustryGrid />
        </div>
      </Section>

      {/* 6.5 Hard-to-staff languages */}
      <Section id="languages" labelledBy="languages-title">
        <SectionHeader id="languages-title" title={HARD_LANGUAGES.title} lead={HARD_LANGUAGES.body} className="max-w-[760px]" />
        <div className="mt-12">
          <HardLanguages />
        </div>
      </Section>

      {/* 6.6 Our interpreters */}
      <Section tone="subtle" labelledBy="interpreters-title">
        <SectionHeader
          id="interpreters-title"
          title={INTERPRETERS.title}
          lead={INTERPRETERS.body}
          action={<Button href="/interpreters/" variant="secondary">About our interpreters</Button>}
        />
        <div className="mt-12">
          <TierCards />
        </div>
        <p className="mt-6 flex items-center gap-2 text-[15px] text-muted">
          <svg aria-hidden viewBox="0 0 24 24" className="size-5 shrink-0 text-accent-1" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
          {INTERPRETERS.ai}
        </p>
      </Section>

      {/* 6.7 Secure platform (short) */}
      <Section tone="glow" labelledBy="platform-title">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <div>
            <SectionHeader dark id="platform-title" title={PLATFORM.title} lead={PLATFORM.lead} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/secure-platform/" variant="on-dark">How we protect your sessions</Button>
            </div>
          </div>
          <PlatformFeatures dark />
        </div>
      </Section>

      {/* 6.8 How it works */}
      <Section id="how-it-works" labelledBy="session-title">
        <SectionHeader
          id="session-title"
          title="How a session works"
          lead="Every session follows the same four steps, from the quote to the invoice."
          action={<Button href="/how-it-works/" variant="secondary">See the details</Button>}
        />
        <div className="mt-14">
          <SessionSteps />
        </div>
      </Section>

      {/* 6.9 Trust Center summary */}
      <Section tone="subtle" labelledBy="trust-title">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <SectionHeader id="trust-title" title={TRUST_SUMMARY.title} lead={TRUST_SUMMARY.lead} action={<Button href="/trust-center/" variant="secondary">Open the Trust Center</Button>} className="md:!flex-col md:!items-start" />
          <ul className="flex flex-col gap-3">
            {TRUST_SUMMARY.items.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 60} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
                <Icon name={t.icon} size={44} />
                <p className="font-semibold leading-snug text-brand">{t.title}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6.10 Proof from clients: rendered only with an approved, named quote */}
      {TESTIMONIAL && (
        <Section labelledBy="clients-title">
          <h2 id="clients-title" className="sr-only">What our clients say</h2>
          <Testimonial />
        </Section>
      )}

      {/* 6.11 FAQ */}
      <Section labelledBy="faq-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader id="faq-title" title="Questions we are asked" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/resources/#faq" variant="secondary">More answers</Button>
            </div>
          </div>
          <Faq items={FAQ} />
        </div>
      </Section>

      {/* 6.12 Closing call to action */}
      <CtaBand
        title={CLOSING.title}
        body={CLOSING.body}
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
