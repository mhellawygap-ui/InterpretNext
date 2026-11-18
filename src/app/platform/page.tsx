import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HeroMedia } from "@/components/shared/HeroMedia";
import { PlatformFeatures } from "@/components/shared/Blocks";
import { INTEGRATIONS, PLATFORM } from "@/data/content";
import { SECURITY_ITEMS } from "@/data/trust";

export const metadata: Metadata = {
  title: "Secure platform",
  description: "Book, join and manage interpreted sessions on a secure platform with encryption, role-based access and no session recording.",
};

export default function PlatformPage() {
  return (
    <>
      <PageIntro
        label="Secure platform"
        title={PLATFORM.title}
        lead={PLATFORM.lead}
        actions={
          <>
            <Button href="/get-quote/" size="lg">Request a quote</Button>
            <Button href="/trust-center/#security" variant="secondary" size="lg">Security details</Button>
          </>
        }
        media={<HeroMedia />}
      />

      <Section labelledBy="protect-title">
        <SectionHeader id="protect-title" title="How the platform protects your sessions" lead="Interpreted sessions carry health information, legal privilege and personal data. The platform is designed around that." />
        <div className="mt-12">
          <PlatformFeatures />
        </div>
      </Section>

      <Section tone="subtle" labelledBy="manage-title">
        <SectionHeader id="manage-title" title="Booking and session management" lead="One place to request, confirm and review your interpreting." />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM.management.map((m, i) => (
            <li key={m.title} className="rounded-2xl border border-border bg-white p-6">
              <span className="text-sm font-semibold text-subtle">0{i + 1}</span>
              <p className="mt-3 font-semibold text-brand">{m.title}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">{m.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="integrations" labelledBy="integrations-title">
        <SectionHeader id="integrations-title" title="Works with the tools you already use" lead="Interpreters join your existing meetings, and confirmed sessions arrive in your calendar." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INTEGRATIONS.map((i) => (
            <li key={i.title} className="rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center justify-between">
                <Icon name={i.icon} size={44} />
                {i.later && <Badge>Later release</Badge>}
              </div>
              <p className="mt-5 font-semibold text-brand">{i.title}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">{i.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" labelledBy="controls-title">
        <SectionHeader id="controls-title" title="Security controls" action={<Button href="/trust-center/" variant="secondary">Trust Center</Button>} />
        <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_ITEMS.map((s) => (
            <li key={s.title} className="flex gap-4">
              <Icon name={s.icon} size={44} />
              <div>
                <p className="font-semibold text-brand">{s.title}</p>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Need security documentation for procurement?"
        body="Request certificates, our DPA or a completed security questionnaire."
        actions={
          <>
            <Button href="/trust-center/#request-docs" variant="on-dark" size="lg">Request documents</Button>
            <Button href="/contact/" variant="on-dark-outline" size="lg">Contact our team</Button>
          </>
        }
      />
    </>
  );
}
