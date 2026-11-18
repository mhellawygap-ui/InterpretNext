import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
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

const HERO_TRUST = [
  { icon: "iso-27001", text: "ISO 27001 information security" },
  { icon: "gdpr", text: "GDPR data processing" },
  { icon: "nda", text: "Confidentiality on every session" },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-12 pb-16 md:pt-20 md:pb-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-16">
          <div>
            <h1 className="font-display-wonk text-[40px] leading-[1.06] font-semibold tracking-[-0.02em] text-brand md:text-[60px]">{HERO.title}</h1>
            <p className="mt-6 max-w-[600px] text-lg leading-[1.6] text-muted">{HERO.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-quote/" size="lg">Request a quote</Button>
              <Button href="#check-a-language" variant="secondary" size="lg">Check a language</Button>
            </div>
            <ul aria-label="Security and compliance" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
              {HERO_TRUST.map((t) => (
                <li key={t.icon} className="flex items-center gap-2.5 text-sm font-medium text-muted">
                  <Icon name={t.icon} size={28} />
                  {t.text}
                </li>
              ))}
            </ul>
          </div>
          <HeroMedia />
        </Container>
      </section>

      {/* Proof strip */}
      <section aria-label="Who we work with" className="border-y border-border bg-surface py-8">
        <Container className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold text-muted">Built for language-access teams in</p>
          {CLIENT_LOGOS.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-10">
              {CLIENT_LOGOS.map((l) => (
                // eslint-disable-next-line @next/next/no-img-element
                <li key={l.name}><img src={l.src} alt={l.name} className="h-7 w-auto opacity-80 grayscale" /></li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {PROOF_SECTORS.map((s) => (
                <li key={s.label} className="flex items-center gap-2.5 text-[15px] font-semibold text-brand">
                  <Icon name={s.icon} size={32} />
                  {s.label}
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {/* Key facts */}
      <Section tight labelledBy="facts-title">
        <h2 id="facts-title" className="sr-only">InterpretNext at a glance</h2>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_FACTS.map((f) => (
            <li key={f.value}>
              <Icon name={f.icon} size={44} />
              <p className="font-display-wonk mt-5 text-[26px] leading-tight font-semibold text-brand">{f.value}</p>
              <p className="mt-2 text-[15px] leading-[1.55] text-muted">{f.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section tone="subtle" labelledBy="services-title">
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

      {/* Service finder */}
      <Section labelledBy="finder-title">
        <SectionHeader id="finder-title" title="Find the right service" lead="Tell us what is happening and we will point you to the service that fits." />
        <div className="mt-12">
          <ServiceFinder />
        </div>
      </Section>

      {/* Language checker */}
      <Section tone="subtle" id="check-a-language" labelledBy="languages-title">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <SectionHeader
            id="languages-title"
            title="More than 200 languages, including the hard-to-find ones"
            lead="Our core network covers widely spoken languages by region. For rare languages and dialects, we source qualified interpreters on request and confirm feasibility before you book."
          />
          <LanguageChecker compact />
        </div>
      </Section>

      {/* Secure platform */}
      <Section labelledBy="platform-title">
        <SectionHeader
          id="platform-title"
          title="A secure platform for sensitive conversations"
          lead="Book, join and manage interpreted sessions in one place. Access is limited to the people in each session, and session content is not stored."
          action={<Button href="/platform/" variant="secondary">About the platform</Button>}
        />
        <div className="mt-12">
          <PlatformFeatures />
        </div>
      </Section>

      {/* How a session works */}
      <Section tone="subtle" labelledBy="session-title">
        <SectionHeader
          id="session-title"
          title="How a session works"
          lead="From your request to the follow-up, in five steps."
          action={<Button href="/how-it-works/" variant="secondary">See the details</Button>}
        />
        <div className="mt-12">
          <SessionSteps />
        </div>
      </Section>

      {/* Industries */}
      <Section labelledBy="industries-title">
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
      <Section tone="subtle" labelledBy="compare-title">
        <SectionHeader id="compare-title" title="How we compare" lead="What you get with InterpretNext compared with other ways teams source interpreting." />
        <div className="mt-12">
          <ComparisonTable />
        </div>
      </Section>

      {/* Testimonial + engagements */}
      <Section labelledBy="clients-title">
        <SectionHeader id="clients-title" title="What our clients say" />
        <div className="mt-12">
          <Testimonial />
        </div>
        <h3 className="mt-16 text-xl font-semibold text-brand">Typical engagements</h3>
        <div className="mt-6">
          <Engagements />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="subtle" labelledBy="faq-title" narrow>
        <SectionHeader
          id="faq-title"
          title="Questions from procurement teams"
          lead="Pricing, vetting, confidentiality and data handling."
        />
        <div className="mt-10">
          <Faq items={PROCUREMENT_FAQ.slice(0, 6)} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/pricing/" variant="secondary">How pricing works</Button>
          <Button href="/trust-center/" variant="secondary">Trust Center</Button>
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
