import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { StatusBadge } from "@/components/page/Chip";
import { DocRequestForm, LegalDocGrid } from "@/components/page/DocRequest";
import { Highlight, PageHero } from "@/components/page/PageHero";
import { SectionTitle } from "@/components/page/SectionTitle";
import {
  ACCESS_SERVICES,
  ACCESS_STANDARDS,
  DATA_FLOW,
  GDPR_ITEMS,
  HEALTHCARE_ITEMS,
  PILLARS,
  QUALITY_STEPS,
  SECURITY_ITEMS,
  SECURITY_STATS,
  STANDARDS,
  STATUS_OVERVIEW,
  TIERS,
} from "@/data/trust";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "How InterpretNext protects client data, governs its interpreter network, and maintains quality standards across every engagement.",
};

const n2 = (i: number) => String(i + 1).padStart(2, "0");

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 flex gap-2 rounded-lg border border-[#f5dca6] bg-[#fff8e6] px-4 py-3 text-xs leading-[1.5] text-warning-ink">
      <span aria-hidden>⚠</span>
      <span>{children}</span>
    </p>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-sm leading-[1.4] text-muted">
          <span aria-hidden className="text-success-ink">✓</span>
          {i}
        </li>
      ))}
    </ul>
  );
}

function StatusPanel() {
  return (
    <div className="rounded-2xl border border-white/40 bg-brand/40 p-5">
      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/60">Trust status overview</p>
      <ul className="mt-3 divide-y divide-white/10">
        {STATUS_OVERVIEW.map((s) => (
          <li key={s.name} className="flex items-center justify-between gap-3 py-3">
            <Icon name={s.icon} size={32} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{s.name}</p>
              <p className="text-xs text-white/70">{s.sub}</p>
            </div>
            <StatusBadge value={s.status} />
          </li>
        ))}
      </ul>
      <Link href="#request-docs" className="mt-3 flex min-h-11 items-center justify-center text-sm text-white/80 hover:text-white">
        Contact security team →
      </Link>
    </div>
  );
}

export default function TrustCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="InterpretNext · Trust Center"
        title={
          <>
            Security, quality and governance for <Highlight>high-stakes</Highlight> interpretation.
          </>
        }
        lead="InterpretNext is a brand of Bayantech / Teqneyat Group. This Trust Center documents how we protect client data, govern our interpreter network, and maintain quality standards across every interpretation engagement."
        actions={
          <>
            <Button href="#certifications" variant="white">Explore certifications</Button>
            <Button href="/get-quote/?modality=unsure" variant="ghost-light">Discuss your use case</Button>
          </>
        }
        aside={<StatusPanel />}
      />

      <Container className="lg:!px-[112px]">
        {/* Certifications */}
        <section id="certifications" className="mt-4 scroll-mt-28 rounded-2xl border border-border bg-[#f4f2fa] p-5 shadow-[0_2px_16px_rgba(8,12,65,0.05)] sm:p-8">
          <SectionTitle
            title="Standards we operate under"
            lead="Certifications listed below apply to Bayantech / Teqneyat Group as the operating entity behind InterpretNext. Entity mapping, scope, and certificate numbers are confirmed with legal before publication."
            action={<Button href="#request-docs" className="shrink-0 !h-11 !text-sm">Request certificates</Button>}
          />
          <ul className="mt-8 flex flex-col gap-3">
            {STANDARDS.map((s) => (
              <li key={s.name} className="rounded-xl bg-card p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex max-w-[680px] gap-4">
                    <Icon name={s.icon} size={48} />
                    <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display-wonk text-xl font-bold text-brand">{s.name}</h3>
                      <StatusBadge value={s.status} />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-accent-1">Certificate holder: {s.holder}</p>
                    <p className="mt-2 text-sm leading-[1.5] text-muted">{s.body}</p>
                    </div>
                  </div>
                  <Link href="#request-docs" className="tap inline-flex h-9 w-fit shrink-0 items-center rounded-lg border border-lilac-strong px-4 text-xs font-medium text-accent-1 hover:bg-lilac/50">
                    Request evidence
                  </Link>
                </div>
                {"note" in s && s.note && <Warning>{s.note}</Warning>}
              </li>
            ))}
          </ul>
        </section>

        {/* Pillars */}
        <section aria-labelledby="pillars-title" className="pt-16">
          <SectionTitle align="center" title={<span id="pillars-title">Four pillars of operational trust</span>} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <li key={p.id}>
                <Link href={`#${p.id}`} className="group relative isolate flex min-h-[240px] flex-col overflow-hidden rounded-2xl p-5 text-white">
                  <Image src={asset(p.image)} alt="" fill sizes="(min-width: 1024px) 300px, 50vw" className="-z-20 object-cover transition-transform group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 -z-10" style={{ backgroundImage: "linear-gradient(180deg, rgba(40,20,140,0.9) 0%, rgba(101,40,203,0.75) 55%, rgba(243,47,126,0.85) 100%)" }} />
                  <span className="text-xs text-white/60">{p.n}</span>
                  <span className="font-display-wonk mt-auto text-2xl font-bold">{p.title}</span>
                  <span className="mt-2 text-sm leading-[1.35] text-white/85">{p.body}</span>
                  <span className="mt-4 text-xs text-white/70 group-hover:text-white">View section →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Security */}
        <section id="security" className="mt-16 scroll-mt-28 border-t border-border pt-16">
          <SectionTitle eyebrow="Security" title="Built for sensitive conversations." />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="relative isolate flex min-h-[460px] flex-col overflow-hidden rounded-2xl p-7 text-white">
              <Image src={asset("/images/trust/security-posture.jpg")} alt="" fill sizes="(min-width: 1024px) 500px, 100vw" className="-z-20 object-cover" />
              <div aria-hidden className="absolute inset-0 -z-10" style={{ backgroundImage: "linear-gradient(180deg, rgba(8,12,65,0.85) 0%, rgba(101,40,203,0.65) 55%, rgba(243,47,126,0.8) 100%)" }} />
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/60">Security posture</p>
              <p className="font-display-wonk mt-auto text-2xl leading-[1.25] font-bold">
                Interpretation sessions carry PHI, attorney-client privilege, and government data. Our security model is built around that reality.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {SECURITY_STATS.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs text-white/60">{s.label}</dt>
                    <dd className="font-display-wonk text-lg font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <ol className="divide-y divide-border">
                {SECURITY_ITEMS.map((s, i) => (
                  <li key={s.title} className="flex gap-4 py-5 first:pt-0">
                    <span className="font-display-wonk w-8 shrink-0 text-xl font-bold text-muted">{n2(i)}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-brand">{s.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex justify-end">
                <Button href="#request-docs" className="!h-10 !text-sm">Contact security team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="mt-16 scroll-mt-28 border-t border-border pt-16">
          <SectionTitle
            align="center"
            eyebrow="Privacy"
            title="How we handle your data"
            lead="InterpretNext processes data as both a data controller (platform and billing) and a data processor (on behalf of clients). Our obligations in each role are documented separately."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold text-brand">GDPR compliance</h3>
              <CheckList items={GDPR_ITEMS} />
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold text-brand">Healthcare data handling</h3>
              <CheckList items={HEALTHCARE_ITEMS} />
              <Warning>
                HIPAA status requires legal and compliance review before being stated as a guarantee. Contact us to discuss your specific compliance requirements.
              </Warning>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-brand">Session data flow</h3>
            <ol className="mt-5 grid gap-3 md:grid-cols-4">
              {DATA_FLOW.map((d, i) => (
                <li key={d.title} className="relative rounded-xl bg-[#f4f2fa] p-4">
                  <span className="text-xs font-semibold text-accent-1">{n2(i)}</span>
                  <p className="mt-1 text-sm font-semibold text-brand">{d.title}</p>
                  <p className="mt-1.5 text-xs leading-[1.5] text-muted">{d.body}</p>
                  {i < DATA_FLOW.length - 1 && (
                    <span aria-hidden className="absolute top-1/2 -right-3 hidden -translate-y-1/2 text-accent-1 md:block">→</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quality */}
        <section id="quality" className="mt-16 scroll-mt-28 border-t border-border pt-16">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
            <div>
              <SectionTitle eyebrow="Quality" title="Certification-matched, not randomly assigned." />
              <p className="mt-6 text-sm leading-[1.5] text-muted">
                Every interpreter in the InterpretNext network goes through a structured vetting process. Domain matching, language assessment, and ongoing QA are not optional additions—they are baseline requirements.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {TIERS.map((t) => (
                  <li key={t.name} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <Icon name={t.icon} size={36} />
                    <div>
                      <p className="text-sm font-semibold text-brand">{t.name}</p>
                      <p className="mt-1 text-xs leading-[1.5] text-muted">{t.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted italic">Tier definitions subject to confirmation with operations.</p>
            </div>
            <ol className="flex flex-col gap-3">
              {QUALITY_STEPS.map((q, i) => (
                <li key={q.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f4f2fa] text-xs font-semibold text-accent-1">{n2(i)}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-brand">{q.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-muted">{q.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="mt-16 scroll-mt-28 border-t border-border pt-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle eyebrow="Accessibility" title="Inclusive communication is infrastructure." />
              <p className="mt-6 text-sm leading-[1.5] text-muted">
                Accessibility at InterpretNext covers two dimensions: the accessibility of our own platform and content (WCAG 2.2 AA), and the accessibility services we deliver to end users—ASL interpretation and CART live captioning.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ACCESS_SERVICES.map((a) => (
                <li key={a.title} className="rounded-xl border border-border bg-card p-4">
                  <Icon name={a.icon} size={40} />
                  <p className="mt-3 text-sm font-semibold text-brand">{a.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.45] text-muted">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-brand">Standards and obligations</h3>
            <ul className="mt-5 grid gap-6 md:grid-cols-3">
              {ACCESS_STANDARDS.map((a) => (
                <li key={a.title}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand">
                    <span aria-hidden className="size-1.5 rounded-full bg-accent-1" />
                    {a.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.5] text-muted">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Legal documents */}
        <section id="legal-documents" className="mt-16 scroll-mt-28 border-t border-border pt-16">
          <SectionTitle
            eyebrow="Legal documents"
            title="Governance on paper"
            lead="Documents available for review, download, or countersignature. Some documents require a verified business request."
            action={<Button href="#request-docs" className="shrink-0 !h-11 !text-sm">Request documentation package</Button>}
          />
          <LegalDocGrid />
        </section>

        {/* Security team */}
        <section id="request-docs" className="bg-banner mt-16 mb-10 grid scroll-mt-28 gap-10 rounded-[20px] px-6 py-10 text-white sm:px-10 lg:grid-cols-2 lg:px-10 lg:py-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/60">Security team</p>
            <h2 className="font-display-wonk mt-4 text-[30px] leading-[1.2] font-bold sm:text-[36px]">Need documentation for procurement?</h2>
            <p className="mt-5 text-sm leading-[1.6] text-white/80">
              Enterprise procurement teams often need certificates, DPAs, BAAs, and security questionnaire responses before contracting. Our team responds to verified business requests within two business days.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["ISO certificates", "On request"],
                ["Security questionnaires", "Supported"],
                ["BAA (healthcare)", "Available"],
                ["Response time", "2 business days"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col-reverse rounded-xl border border-white/20 px-4 py-3">
                  <dd className="mt-1 text-sm font-semibold">{v}</dd>
                  <dt className="text-xs tracking-[0.08em] uppercase text-white/60">{k}</dt>
                </div>
              ))}
            </dl>
          </div>
          <DocRequestForm />
        </section>
      </Container>
    </>
  );
}
