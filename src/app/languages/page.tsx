import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LanguageChecker } from "@/components/shared/LanguageChecker";
import { LanguageRequest } from "@/components/page/LanguageRequest";
import { Reveal } from "@/components/motion/Reveal";
import { LANGUAGES, PUBLIC_COUNT, REGIONS, REGION_SUMMARY, isHardToStaff, regionSlug, type Region } from "@/data/languages";

export const metadata: Metadata = {
  title: "Languages and dialects",
  description: "Search our language list by name, native name, dialect or country, browse languages by region, and request a language we do not list yet.",
};

/** A greeting in a language of each region, used as a quiet watermark. */
const GREETING: Record<Region, { word: string; lang: string }> = {
  "Middle East & North Africa": { word: "سلام", lang: "ar" },
  "East Africa": { word: "ሰላም", lang: "am" },
  "West Africa": { word: "Sannu", lang: "ha" },
  "Central & Southern Africa": { word: "Sawubona", lang: "zu" },
  "South Asia": { word: "नमस्ते", lang: "hi" },
  "Central Asia & Caucasus": { word: "Salom", lang: "uz" },
  "East & Southeast Asia": { word: "你好", lang: "zh" },
  Europe: { word: "Bonjour", lang: "fr" },
  Americas: { word: "Hola", lang: "es" },
  "Pacific & Oceania": { word: "Talofa", lang: "sm" },
};

const DIALECTS = [
  { name: "Arabic", body: "Egyptian, Levantine, Gulf, Maghrebi and Sudanese, as well as Iraqi, Yemeni and Modern Standard Arabic." },
  { name: "Swahili", body: "Kenyan, Tanzanian, Ugandan and Congolese variants, including Kiunguja and Kimvita." },
  { name: "Amharic", body: "Regional variants, matched to where the speaker is from." },
  { name: "Oromo", body: "West Central, Borana and Eastern (Harar) Oromo." },
  { name: "Tigrinya", body: "Eritrean and Ethiopian variants." },
];

export default function LanguagesPage() {
  return (
    <>
      <PageIntro
        label="Languages"
        title="Languages and dialects"
        lead={
          <>
            {PUBLIC_COUNT !== null && <>We staff interpreters in {PUBLIC_COUNT} languages and dialects. </>}
            Search for yours below. If it is not listed, ask us. Many of our requests are for languages that other providers cannot staff.
          </>
        }
        actions={
          <>
            <Button href="#request" size="lg">Request a language</Button>
            <Button href="#regions" variant="secondary" size="lg">Browse by region</Button>
          </>
        }
        media={
          <div id="check" className="scroll-mt-28">
            <LanguageChecker />
          </div>
        }
      />

      <Section tight tone="subtle" labelledBy="availability-title">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
          <h2 id="availability-title" className="font-display-wonk text-[26px] leading-tight font-semibold text-brand">How availability is shown</h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            <li>
              <Badge tone="success" dot>Scheduled sessions</Badge>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">Book a scheduled session through a quote.</p>
            </li>
            <li>
              <Badge tone="neutral" dot>On-demand coming</Badge>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">On-demand access is planned for a later release.</p>
            </li>
            <li>
              <Badge tone="violet" dot>On request</Badge>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">We source an interpreter for each request and confirm the lead time first.</p>
            </li>
            <li>
              <Badge tone="violet" dot>Ask us to confirm availability</Badge>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">Send a request with the dialect, the date and the subject, and we will tell you whether we can staff it.</p>
            </li>
          </ul>
        </div>
      </Section>

      <Section id="regions" labelledBy="regions-title">
        <SectionHeader
          id="regions-title"
          title="Languages by region"
          lead={
            <>
              Each language appears once, in one region. Languages marked with <span aria-hidden className="mx-0.5 inline-block size-2 rounded-full bg-accent-2 align-middle" /> usually take longer to find.
            </>
          }
        />
        <nav aria-label="Regions" className="mt-8 flex flex-wrap gap-2">
          {REGIONS.map((r) => (
            <a key={r} href={`#${regionSlug(r)}`} className="tap rounded-full border border-border px-4 py-2 text-sm font-medium text-brand hover:border-border-strong">{r}</a>
          ))}
        </nav>
        <div className="mt-12 flex flex-col gap-5">
          {REGIONS.map((r) => {
            const list = LANGUAGES.filter((l) => l.region === r);
            if (list.length === 0) return null;
            const greet = GREETING[r];
            return (
              <Reveal key={r}>
                <section id={regionSlug(r)} aria-labelledby={`${regionSlug(r)}-title`} className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-white p-7 md:p-9">
                  <span aria-hidden lang={greet.lang} className="font-display-wonk pointer-events-none absolute -top-2 right-6 text-[64px] leading-none text-accent-1/[0.08] select-none md:text-[84px]">{greet.word}</span>
                  <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-12">
                    <div>
                      <h3 id={`${regionSlug(r)}-title`} className="font-display-wonk text-[26px] leading-tight font-semibold text-brand">{r}</h3>
                      <p className="mt-3 text-[15px] leading-[1.6] text-muted">{REGION_SUMMARY[r]}</p>
                    </div>
                    <ul className="columns-1 gap-8 sm:columns-2 xl:columns-3">
                      {list.map((l) => (
                        <li key={l.id} className="break-inside-avoid py-1.5 text-[15px] leading-snug text-brand">
                          {l.name}
                          {l.native && l.native !== l.name && (
                            <span lang={l.iso} className="text-muted"> · {l.native}</span>
                          )}
                          {isHardToStaff(l) && (
                            <>
                              <span aria-hidden className="ml-1.5 inline-block size-1.5 -translate-y-0.5 rounded-full bg-accent-2" />
                              <span className="sr-only"> (usually takes longer to find)</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="subtle" labelledBy="dialects-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,620px)] lg:gap-16">
          <SectionHeader id="dialects-title" title="Dialects matter" lead="Tell us where the speaker is from and we match the dialect." />
          <ul className="divide-y divide-border rounded-3xl border border-border bg-white">
            {DIALECTS.map((d) => (
              <li key={d.name} className="grid gap-1 px-6 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="font-semibold text-brand">{d.name}</p>
                <p className="text-[15px] leading-[1.6] text-muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="request" labelledBy="request-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)] lg:gap-16">
          <SectionHeader
            id="request-title"
            title="Request a language"
            lead={
              <>
                Tell us the language, the dialect or region, the service and how often you need it. We will tell you whether we can staff it. Prefer to talk? <Link href="/contact/" className="font-semibold text-accent-1 hover:underline">Contact Sales</Link>.
              </>
            }
          />
          <LanguageRequest />
        </div>
      </Section>
    </>
  );
}
