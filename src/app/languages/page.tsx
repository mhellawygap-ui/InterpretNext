import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LanguageChecker } from "@/components/shared/LanguageChecker";
import { LanguageRequest } from "@/components/page/LanguageRequest";
import { Reveal } from "@/components/motion/Reveal";
import { LanguageRibbon } from "@/components/motion/LanguageRibbon";
import { LANGUAGES, REGIONS, REGION_SUMMARY, coverageDetail, type Region } from "@/data/languages";

export const metadata: Metadata = {
  title: "Languages",
  description: "Priority languages by region, rare languages sourced on request, and a form to request any language or dialect.",
};

const GREETING: Record<Region, { word: string; lang: string }> = {
  Africa: { word: "ሰላም", lang: "am" },
  "Middle East & North Africa": { word: "سلام", lang: "ar" },
  "South Asia": { word: "नमस्ते", lang: "hi" },
  "East & Southeast Asia": { word: "你好", lang: "zh" },
  Europe: { word: "Bonjour", lang: "fr" },
  Americas: { word: "Hola", lang: "es" },
  Pacific: { word: "Talofa", lang: "sm" },
};

const slug = (r: Region) => r.toLowerCase().replace(/&/g, "and").replace(/[^a-z]+/g, "-");

export default function LanguagesPage() {
  return (
    <>
      <PageIntro
        label="Languages"
        title="More than 200 languages and dialects"
        lead="Below are our priority languages by region, including rare languages that we source on request. If you do not see yours, ask us and we will confirm within one business day."
        actions={
          <>
            <Button href="#request" size="lg">Request a language</Button>
            <Button href="#regions" variant="secondary" size="lg">Browse by region</Button>
          </>
        }
        media={<LanguageChecker />}
      />

      <Section tight tone="subtle" labelledBy="coverage-title">
        <h2 id="coverage-title" className="sr-only">How coverage works</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          <li className="flex gap-4">
            <Icon name="languages-200" size={44} />
            <div>
              <p className="flex items-center gap-3 font-semibold text-brand">Core network <Badge tone="success" dot>Standard notice</Badge></p>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{coverageDetail("priority")}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <Icon name="rare" size={44} />
            <div>
              <p className="flex items-center gap-3 font-semibold text-brand">Sourced on request <Badge tone="violet" dot>We confirm lead time</Badge></p>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{coverageDetail("rare")}</p>
            </div>
          </li>
        </ul>
      </Section>

      <Section id="regions" labelledBy="regions-title">
        <SectionHeader id="regions-title" title="Priority languages by region" lead="A selection of the languages we cover most often. The full network is larger." />
        <nav aria-label="Regions" className="mt-8 flex flex-wrap gap-2">
          {REGIONS.map((r) => (
            <a key={r} href={`#${slug(r)}`} className="tap rounded-full border border-border px-4 py-2 text-sm font-medium text-brand hover:border-border-strong">{r}</a>
          ))}
        </nav>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {REGIONS.map((r, i) => {
            const list = LANGUAGES.filter((l) => l.region === r);
            const core = list.filter((l) => l.coverage === "priority");
            const rare = list.filter((l) => l.coverage === "rare");
            const greet = GREETING[r];
            return (
              <Reveal key={r} delay={(i % 2) * 60} className={r === "Pacific" ? "lg:col-span-2" : ""}>
                <section id={slug(r)} aria-labelledby={`${slug(r)}-title`} className="relative h-full scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-white p-7 md:p-8">
                  <span aria-hidden lang={greet.lang} className="font-display-wonk pointer-events-none absolute -top-2 right-6 text-[64px] leading-none text-accent-1/[0.09] select-none md:text-[80px]">{greet.word}</span>
                  <h3 id={`${slug(r)}-title`} className="font-display-wonk relative text-[26px] font-semibold text-brand">{r}</h3>
                  <p className="relative mt-2 max-w-[48ch] text-[15px] leading-[1.6] text-muted">{REGION_SUMMARY[r]}</p>
                  <div className="relative mt-6 grid gap-6 sm:grid-cols-2">
                    {core.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-success-ink">Core network</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {core.map((l) => (
                            <li key={l.name} className="rounded-full bg-surface px-3 py-1 text-[14px] text-brand ring-1 ring-border">{l.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {rare.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-violet-ink">Rare, sourced on request</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {rare.map((l) => (
                            <li key={l.name} className="rounded-full bg-blush px-3 py-1 text-[14px] text-blush-ink ring-1 ring-[#f6cdd9]">{l.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="subtle" tight labelledBy="ribbon-title">
        <h2 id="ribbon-title" className="sr-only">All listed languages</h2>
        <LanguageRibbon />
      </Section>

      <Section id="request" labelledBy="request-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)] lg:gap-16">
          <SectionHeader
            id="request-title"
            title="Request a language"
            lead={
              <>
                Our language team regularly sources rare languages, regional dialects and low-resource languages. Tell us what you need and we will reply within one business day with feasibility and lead time. Prefer to talk? <Link href="/contact/" className="font-semibold text-accent-1 hover:underline">Contact our team</Link>.
              </>
            }
          />
          <LanguageRequest />
        </div>
      </Section>
    </>
  );
}
