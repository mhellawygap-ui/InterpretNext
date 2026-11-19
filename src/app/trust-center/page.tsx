import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TierCards } from "@/components/shared/Blocks";
import { DocRequestForm, LegalDocGrid } from "@/components/page/DocRequest";
import { TRUST_SUMMARY } from "@/data/content";
import { ACCESS_ITEMS, IN_PROGRESS, QUALITY_STEPS, WE_DO } from "@/data/trust";

export const metadata: Metadata = {
  title: "Trust Center",
  description: "What InterpretNext does to protect sessions, what is in progress, and what your security team can ask us for.",
};

const SECTIONS = [
  ["what-we-do", "What we do"],
  ["in-progress", "In progress"],
  ["quality", "Interpreters"],
  ["accessibility", "Accessibility"],
  ["legal-documents", "Ask us for"],
] as const;

export default function TrustCenterPage() {
  return (
    <>
      <PageIntro
        label="Trust Center"
        title={TRUST_SUMMARY.title}
        lead={TRUST_SUMMARY.lead}
        actions={
          <>
            <Button href="#request-docs" size="lg">Request documents</Button>
            <Button href="/secure-platform/" variant="secondary" size="lg">Secure Platform</Button>
          </>
        }
      >
        <nav aria-label="Trust Center sections" className="flex flex-wrap gap-2">
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="tap rounded-full border border-border px-4 py-2 text-sm font-medium text-brand hover:border-border-strong">{label}</a>
          ))}
        </nav>
      </PageIntro>

      <Section id="what-we-do" labelledBy="do-title">
        <SectionHeader id="do-title" title="What we do" lead="Each of these is in place on launch day." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WE_DO.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 60} className="flex gap-4 rounded-2xl border border-border bg-white p-6">
              <Icon name={s.icon} size={44} />
              <div>
                <h3 className="font-semibold text-brand">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" id="in-progress" labelledBy="progress-title">
        <SectionHeader id="progress-title" title="In progress" lead="We say what is not finished yet, so your team can plan around it." />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {IN_PROGRESS.map((s) => (
            <li key={s.title} className="flex gap-5 rounded-2xl border border-border bg-white p-7">
              <Icon name={s.icon} size={48} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
                  <Badge tone={s.status === "In progress" ? "warning" : "neutral"} dot>{s.status}</Badge>
                </div>
                <p className="mt-3 text-[15px] leading-[1.6] text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="quality" labelledBy="qual-title">
        <SectionHeader
          id="qual-title"
          title="How we choose who takes your session"
          action={<Button href="/interpreters/" variant="secondary">About our interpreters</Button>}
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {QUALITY_STEPS.map((q, i) => (
            <li key={q.title} className="rounded-2xl border border-border bg-white p-6">
              <span className="text-sm font-semibold text-subtle">0{i + 1}</span>
              <h3 className="mt-2 font-semibold text-brand">{q.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{q.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <TierCards />
        </div>
      </Section>

      <Section tone="subtle" id="accessibility" labelledBy="a11y-title">
        <SectionHeader id="a11y-title" title="An accessible website" />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {ACCESS_ITEMS.map((a) => (
            <li key={a.title} className="flex gap-4">
              <Icon name={a.icon} size={44} />
              <div>
                <h3 className="font-semibold text-brand">{a.title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{a.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[70ch] text-[15px] leading-[1.6] text-muted">
          If something on this site is hard to use, please <Link href="/contact/" className="font-semibold text-accent-1 hover:underline">tell us</Link>.
        </p>
      </Section>

      <Section id="legal-documents" labelledBy="docs-title">
        <SectionHeader id="docs-title" title="What you can ask us for" lead="Some documents are shared only after a verified business request." />
        <div className="mt-12">
          <LegalDocGrid />
        </div>
      </Section>

      <Section tone="subtle" id="request-docs" labelledBy="req-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,620px)] lg:gap-16">
          <SectionHeader
            id="req-title"
            title="Request security documentation"
            lead="Your security team can read our one-page summary, policies and agreements before you sign. Tell us what you need and we will send it to your business email."
          />
          <DocRequestForm />
        </div>
      </Section>
    </>
  );
}
