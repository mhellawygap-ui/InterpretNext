import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AvailabilityBadge, type Availability } from "@/components/page/Chip";
import { LanguageExplorer } from "@/components/page/LanguageExplorer";
import { Highlight, PageHero } from "@/components/page/PageHero";
import { LanguagesArt } from "@/components/page/HeroArt";

export const metadata: Metadata = {
  title: "Languages",
  description:
    "200+ languages, including rare African and Middle Eastern dialects, with on-demand and scheduled availability listed for every language.",
};

const STATS: { value: string; label: string; icon: IconName }[] = [
  { value: "200+", label: "Languages & dialects", icon: "languages-200" },
  { value: "6", label: "World regions", icon: "regions" },
  { value: "OPI · VRI · RSI", label: "Interpretation modalities", icon: "modalities" },
  { value: "On-demand & scheduled", label: "Transparent availability", icon: "24-7" },
];

const AVAILABILITY_HELP: { value: Availability; body: string }[] = [
  { value: "On-demand", body: "Interpreter can typically be connected within minutes, any time of day. Subject to volume and language tier." },
  { value: "Scheduled", body: "Interpreter must be booked in advance—usually 24–48 hours. Reliable for planned consultations and events." },
  { value: "Limited", body: "Availability varies by time and volume. Contact us to confirm coverage and scheduling options." },
];

export default function LanguagesPage() {
  return (
    <>
      <PageHero
        eyebrow="InterpretNext · Language Coverage"
        title={
          <>
            Depth, not just <Highlight>numbers</Highlight>.
          </>
        }
        lead="We cover 200+ languages—including the rare dialects, regional variants, and underserved languages that mainstream providers consistently fail to staff reliably. On-demand and scheduled availability is listed transparently for every language."
        actions={
          <>
            <Button href="#find-a-language" variant="white">Find a language</Button>
            <Button href="/get-quote/?modality=unsure" variant="ghost-light">Discuss your use case</Button>
          </>
        }
        aside={<LanguagesArt />}
        footer={
          <ul aria-label="Coverage at a glance" className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <li key={s.label} className="flex items-center gap-3">
                <Icon name={s.icon} size={40} />
                <p className="flex flex-col">
                  <span className="font-display-wonk text-lg font-bold sm:text-xl">{s.value}</span>
                  <span className="mt-1 text-xs text-white/80">{s.label}</span>
                </p>
              </li>
            ))}
          </ul>
        }
      />

      <Container className="pb-8 lg:!px-[112px]">
        <LanguageExplorer />

        <section aria-labelledby="availability-title" className="mt-10">
          <h2 id="availability-title" className="text-lg font-semibold text-brand">Understanding availability</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {AVAILABILITY_HELP.map((a) => (
              <li key={a.value} className="rounded-xl border border-border bg-card p-5">
                <AvailabilityBadge value={a.value} />
                <p className="mt-3 text-sm leading-[1.5] text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="source-title" className="bg-banner mt-10 grid gap-8 rounded-[20px] px-6 py-10 text-white sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/60">Don&apos;t see your language?</p>
            <h2 id="source-title" className="font-display-wonk mt-3 text-[28px] leading-[1.15] font-bold sm:text-[31px]">
              We source what others can&apos;t staff.
            </h2>
            <p className="mt-4 text-base leading-[1.35] text-white/80">
              Our operations team regularly locates qualified interpreters for languages not listed here—including rare dialects, regional varieties, and low-resource languages. Tell us what you need.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button href="/get-quote/" variant="white" className="!h-12 w-full">Request a language</Button>
            <Button href="/get-quote/?modality=unsure" variant="ghost-light" className="!h-12 w-full">Talk to our language team</Button>
            <p className="text-center text-xs text-white/80">We respond within one business day with feasibility and scheduling options.</p>
          </div>
        </section>
      </Container>
    </>
  );
}
