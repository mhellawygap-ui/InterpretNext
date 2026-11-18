import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LanguageChecker } from "@/components/shared/LanguageChecker";
import { LanguageRequest } from "@/components/page/LanguageRequest";
import { LANGUAGES, REGIONS, REGION_SUMMARY, coverageDetail, type Region } from "@/data/languages";

export const metadata: Metadata = {
  title: "Languages",
  description: "Priority languages by region, rare languages sourced on request, and a form to request any language or dialect.",
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
        <div className="mt-12 divide-y divide-border border-y border-border">
          {REGIONS.map((r) => {
            const list = LANGUAGES.filter((l) => l.region === r);
            const core = list.filter((l) => l.coverage === "priority");
            const rare = list.filter((l) => l.coverage === "rare");
            return (
              <section key={r} id={slug(r)} aria-labelledby={`${slug(r)}-title`} className="grid scroll-mt-24 gap-6 py-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
                <div>
                  <h3 id={`${slug(r)}-title`} className="text-xl font-semibold text-brand">{r}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-muted">{REGION_SUMMARY[r]}</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  {core.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-success-ink">Core network</p>
                      <ul className="mt-3 grid gap-2 text-[15px] text-brand">
                        {core.map((l) => (
                          <li key={l.name}>{l.name}{l.native && l.native !== l.name && <span className="text-subtle"> · {l.native}</span>}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {rare.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-violet-ink">Rare languages, sourced on request</p>
                      <ul className="mt-3 grid gap-2 text-[15px] text-brand">
                        {rare.map((l) => (
                          <li key={l.name}>{l.name}{l.native && l.native !== l.name && <span className="text-subtle"> · {l.native}</span>}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Section tone="subtle" id="request" labelledBy="request-title">
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
