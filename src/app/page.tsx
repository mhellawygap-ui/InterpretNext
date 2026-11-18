import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CountUp } from "@/components/motion/CountUp";
import { HeroBridge } from "@/components/motion/HeroBridge";
import { LanguageRibbon } from "@/components/motion/LanguageRibbon";
import { Reveal } from "@/components/motion/Reveal";
import { HeroMedia } from "@/components/shared/HeroMedia";
import { LanguageChecker } from "@/components/shared/LanguageChecker";
import { ServiceFinder } from "@/components/shared/ServiceFinder";
import {
  ComparisonTable,
  Engagements,
  IndustryGrid,
  PlatformFeatures,
  ServiceGrid,
  SessionSteps,
  Testimonial,
} from "@/components/shared/Blocks";
import { CLIENT_LOGOS, HERO, KEY_FACTS, PROCUREMENT_FAQ, PROOF_SECTORS } from "@/data/content";
import { HERO_VIDEO } from "@/data/site";

const HERO_TRUST = [
  { icon: "iso-27001", text: "ISO 27001 information security" },
  { icon: "gdpr", text: "GDPR data processing" },
  { icon: "nda", text: "Confidentiality on every session" },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-glow relative overflow-hidden text-white">
        <Container className="grid grid-cols-1 items-center gap-14 pt-14 pb-20 md:pt-20 md:pb-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
          <div>
            <h1 className="font-display-wonk text-[42px] leading-[1.04] font-semibold tracking-[-0.02em] md:text-[64px]">{HERO.title}</h1>
            <p className="mt-7 max-w-[56ch] text-lg leading-[1.65] text-white/80">{HERO.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/get-quote/" variant="on-dark" size="lg">Request a quote</Button>
              <Button href="#check-a-language" variant="on-dark-outline" size="lg">Check a language</Button>
            </div>
            <ul aria-label="Security and compliance" className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/12 pt-7">
              {HERO_TRUST.map((t) => (
                <li key={t.icon} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <Icon name={t.icon} size={32} />
                  {t.text}
                </li>
              ))}
            </ul>
          </div>
          {HERO_VIDEO ? <HeroMedia /> : <HeroBridge />}
        </Container>
      </section>

      {/* Proof strip */}
      <section aria-label="Who we work with" className="border-b border-border bg-white py-9">
        <Container className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[15px] font-medium text-muted">Built for language-access teams in</p>
          {CLIENT_LOGOS.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-10">
              {CLIENT_LOGOS.map((l) => (
                // eslint-disable-next-line @next/next/no-img-element
                <li key={l.name}><img src={l.src} alt={l.name} className="h-7 w-auto opacity-80 grayscale" /></li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-wrap items-center gap-x-9 gap-y-3">
              {PROOF_SECTORS.map((s) => (
                <li key={s.label} className="flex items-center gap-2.5 text-[15px] font-semibold text-brand">
                  <Icon name={s.icon} size={34} />
                  {s.label}
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {/* Key facts */}
      <Section tone="subtle" tight labelledBy="facts-title">
        <h2 id="facts-title" className="sr-only">InterpretNext at a glance</h2>
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {KEY_FACTS.map((f, i) => (
            <Reveal as="li" key={f.value} delay={i * 70} className="bg-white p-7 md:p-8">
              <Icon name={f.icon} size={44} />
              <p className="font-display-wonk mt-6 text-[30px] leading-tight font-semibold text-brand">
                <CountUp value={f.value} />
              </p>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">{f.label}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section labelledBy="services-title">
        <SectionHeader
          id="services-title"
          title="Interpreting for every setting"
          lead="Video, on-site and event interpreting, with sign language, captioning and document translation for the same case."
          action={<Button href="/services/" variant="secondary">All services</Button>}
        />
        <div className="mt-12">
          <ServiceGrid />
        </div>
        <p className="mt-8 text-[15px] text-muted">
          Coming in later releases: phone interpreting, on-demand video, human-led AI speech translation and session recording.{" "}
          <Link href="/services/#later" className="tap font-semibold text-accent-1 hover:underline">See the roadmap</Link>
        </p>
      </Section>

      {/* Languages */}
      <Section tone="subtle" id="check-a-language" labelledBy="languages-title">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <SectionHeader
            id="languages-title"
            title="More than 200 languages, including the hard-to-find ones"
            lead="Our core network covers widely spoken languages by region. For rare languages and dialects, we source qualified interpreters on request and confirm feasibility before you book."
          />
          <Reveal>
            <LanguageChecker compact />
          </Reveal>
        </div>
        <div className="mt-14">
          <LanguageRibbon />
        </div>
      </Section>

      {/* Service finder */}
      <Section labelledBy="finder-title">
        <SectionHeader id="finder-title" title="Find the right service" lead="Tell us what is happening and we will point you to the service that fits." />
        <Reveal className="mt-12">
          <ServiceFinder />
        </Reveal>
      </Section>

      {/* Secure platform */}
      <Section tone="glow" labelledBy="platform-title">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <div>
            <SectionHeader
              dark
              id="platform-title"
              title="A secure platform for sensitive conversations"
              lead="Book, join and manage interpreted sessions in one place. Access is limited to the people in each session, and session content is not stored."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/platform/" variant="on-dark">About the platform</Button>
              <Button href="/trust-center/#security" variant="on-dark-outline">Security details</Button>
            </div>
          </div>
          <PlatformFeatures dark />
        </div>
      </Section>

      {/* How a session works */}
      <Section labelledBy="session-title">
        <SectionHeader
          id="session-title"
          title="How a session works"
          lead="From your request to the follow-up, in five steps."
          action={<Button href="/how-it-works/" variant="secondary">See the details</Button>}
        />
        <div className="mt-14">
          <SessionSteps />
        </div>
      </Section>

      {/* Industries */}
      <Section tone="subtle" labelledBy="industries-title">
        <SectionHeader
          id="industries-title"
          title="Built around your sector"
          lead="Each sector has its own terminology, obligations and risks. We match interpreters to the context as well as the language."
          action={<Button href="/industries/" variant="secondary">All industries</Button>}
        />
        <div className="mt-12">
          <IndustryGrid />
        </div>
      </Section>

      {/* Comparison */}
      <Section labelledBy="compare-title">
        <SectionHeader id="compare-title" title="How we compare" lead="What you get with InterpretNext compared with other ways teams source interpreting." />
        <div className="mt-12">
          <ComparisonTable />
        </div>
      </Section>

      {/* Testimonial + engagements */}
      <Section tone="subtle" labelledBy="clients-title">
        <h2 id="clients-title" className="sr-only">What our clients say</h2>
        <Testimonial />
        <h3 className="font-display-wonk mt-16 text-[26px] font-semibold text-brand">Typical engagements</h3>
        <div className="mt-6">
          <Engagements />
        </div>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader id="faq-title" title="Questions from procurement teams" lead="Pricing, vetting, confidentiality and data handling." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/pricing/" variant="secondary">How pricing works</Button>
              <Button href="/trust-center/" variant="secondary">Trust Center</Button>
            </div>
          </div>
          <Faq items={PROCUREMENT_FAQ.slice(0, 6)} />
        </div>
      </Section>

      <CtaBand
        title="Tell us about your next interpreted session"
        body="Share your languages, settings and volume. A specialist replies within one business day with a recommendation and pricing."
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
