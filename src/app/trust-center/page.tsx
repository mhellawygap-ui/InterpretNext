import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { DocRequestForm, LegalDocGrid } from "@/components/page/DocRequest";
import { ACCESS_ITEMS, PRIVACY, QUALITY_STEPS, SECURITY_ITEMS, STANDARDS, TIERS } from "@/data/trust";

export const metadata: Metadata = {
  title: "Trust Center",
  description: "How InterpretNext protects client data, vets interpreters and supports accessibility.",
};

const SECTIONS = [
  ["certifications", "Certifications"],
  ["security", "Security"],
  ["privacy", "Privacy"],
  ["quality", "Quality"],
  ["accessibility", "Accessibility"],
  ["legal-documents", "Legal documents"],
] as const;

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-[1.55] text-brand">
      <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-success-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
      {children}
    </li>
  );
}

export default function TrustCenterPage() {
  return (
    <>
      <PageIntro
        label="Trust Center"
        title="Security, privacy and quality"
        lead="How we protect client data, vet our interpreters and make our services accessible. InterpretNext is an interpreting brand by bayanTech."
        actions={
          <>
            <Button href="#request-docs" size="lg">Request documents</Button>
            <Button href="/contact/" variant="secondary" size="lg">Contact our team</Button>
          </>
        }
      >
        <nav aria-label="Trust Center sections" className="flex flex-wrap gap-2">
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="tap rounded-full border border-border px-4 py-2 text-sm font-medium text-brand hover:border-border-strong">{label}</a>
          ))}
        </nav>
      </PageIntro>

      <Section id="certifications" labelledBy="cert-title">
        <SectionHeader id="cert-title" label="Certifications" title="Standards we work to" lead="Certificates and agreements are available to verified business clients on request." />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {STANDARDS.map((s) => (
            <li key={s.name} className="flex gap-5 rounded-2xl border border-border bg-white p-7">
              <Icon name={s.icon} size={48} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-brand">{s.name}</h3>
                  <Badge tone={s.status === "Active" ? "success" : "warning"} dot>{s.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-subtle">Holder: {s.holder}</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-muted">{s.body}</p>
                <Link href="#request-docs" className="tap mt-4 inline-block text-[15px] font-semibold text-accent-1 hover:underline">Request evidence →</Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" id="security" labelledBy="sec-title">
        <SectionHeader id="sec-title" label="Security" title="Built for sensitive conversations" lead="Interpreted sessions can include health information, legal privilege and personal data. Our controls are designed around that." />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_ITEMS.map((s) => (
            <li key={s.title} className="flex gap-4">
              <Icon name={s.icon} size={44} />
              <div>
                <h3 className="font-semibold text-brand">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="privacy" labelledBy="priv-title">
        <SectionHeader id="priv-title" label="Privacy" title="How we handle your data" lead="We act as a data controller for our platform and billing, and as a data processor on behalf of clients." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-7">
            <h3 className="text-lg font-semibold text-brand">GDPR</h3>
            <ul className="mt-5 flex flex-col gap-3">{PRIVACY.gdpr.map((p) => <Check key={p}>{p}</Check>)}</ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-brand">Healthcare data</h3>
              <Badge tone="warning" dot>HIPAA in progress</Badge>
            </div>
            <ul className="mt-5 flex flex-col gap-3">{PRIVACY.healthcare.map((p) => <Check key={p}>{p}</Check>)}</ul>
          </div>
        </div>
      </Section>

      <Section tone="subtle" id="quality" labelledBy="qual-title">
        <SectionHeader id="qual-title" label="Quality" title="How we vet and match interpreters" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
          <ol className="grid gap-5 sm:grid-cols-2">
            {QUALITY_STEPS.map((q, i) => (
              <li key={q.title} className="rounded-2xl border border-border bg-white p-6">
                <span className="text-sm font-semibold text-subtle">0{i + 1}</span>
                <h3 className="mt-2 font-semibold text-brand">{q.title}</h3>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{q.body}</p>
              </li>
            ))}
          </ol>
          <div>
            <h3 className="text-lg font-semibold text-brand">Interpreter tiers</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {TIERS.map((t) => (
                <li key={t.name} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                  <Icon name={t.icon} size={44} />
                  <div>
                    <p className="font-semibold text-brand">Tier {t.level}: {t.name}</p>
                    <p className="text-sm text-subtle">{t.meta}</p>
                    <p className="mt-2 text-[15px] leading-[1.55] text-muted">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="accessibility" labelledBy="a11y-title">
        <SectionHeader id="a11y-title" label="Accessibility" title="Accessible services and an accessible website" lead="We provide sign language interpreting and live captioning, and we build our own website to WCAG 2.2 AA." />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ACCESS_ITEMS.map((a) => (
            <li key={a.title}>
              <Icon name={a.icon} size={44} />
              <h3 className="mt-5 font-semibold text-brand">{a.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[70ch] text-[15px] leading-[1.6] text-muted">
          Our sign language and captioning services help clients meet obligations under ADA Titles II and III and Section 508. If something on this site is hard to use, please <Link href="/contact/" className="font-semibold text-accent-1 hover:underline">tell us</Link>.
        </p>
      </Section>

      <Section tone="subtle" id="legal-documents" labelledBy="docs-title">
        <SectionHeader id="docs-title" label="Legal documents" title="Policies and agreements" lead="Some documents are shared only after a verified business request." />
        <div className="mt-12">
          <LegalDocGrid />
        </div>
      </Section>

      <Section id="request-docs" labelledBy="req-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,620px)] lg:gap-16">
          <SectionHeader
            id="req-title"
            title="Request security documentation"
            lead="Procurement teams often need certificates, a DPA or a completed security questionnaire before contracting. We reply to verified business requests within two business days."
          />
          <DocRequestForm />
        </div>
      </Section>
    </>
  );
}
