import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { HeroMedia } from "@/components/shared/HeroMedia";
import { PlatformFeatures } from "@/components/shared/Blocks";
import { PLATFORM_CONTROLS, PLATFORM_PAGE } from "@/data/content";

export const metadata: Metadata = {
  title: "Secure Platform",
  description: "InterpretNext runs sessions on a platform bayanTech built for interpreting: no recording by default, limited interpreter access, role-based access and an audit trail.",
};

export default function SecurePlatformPage() {
  return (
    <>
      <PageIntro
        label="Secure Platform"
        title={PLATFORM_PAGE.title}
        lead={PLATFORM_PAGE.lead}
        actions={
          <>
            <Button href="/get-quote/" size="lg">Request a quote</Button>
            <Button href="/trust-center/#request-docs" variant="secondary" size="lg">Security summary for IT</Button>
          </>
        }
        media={<HeroMedia />}
      />

      <Section tone="glow" labelledBy="protect-title">
        <SectionHeader dark id="protect-title" title="What this means for you" lead="Every line below describes what the platform does on launch day." />
        <div className="mt-12">
          <PlatformFeatures dark />
        </div>
      </Section>

      <Section labelledBy="controls-title">
        <SectionHeader id="controls-title" title="Controls in place at launch" action={<Button href="/trust-center/" variant="secondary">Trust Center</Button>} />
        <Reveal className="mt-12">
          <div role="region" aria-label="Platform controls, scrolls sideways on small screens" tabIndex={0} className="relative overflow-x-auto rounded-3xl border border-border bg-white">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Platform controls and what we say about each</caption>
              <thead>
                <tr className="text-sm text-muted">
                  <th scope="col" className="px-6 py-4 font-semibold">Control</th>
                  <th scope="col" className="px-6 py-4 font-semibold">What we do</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORM_CONTROLS.map((c) => (
                  <tr key={c.title} className="border-t border-border align-top">
                    <th scope="row" className="px-6 py-5">
                      <span className="flex items-center gap-3 text-[15px] font-semibold text-brand">
                        <Icon name={c.icon} size={36} />
                        {c.title}
                      </span>
                    </th>
                    <td className="px-6 py-5 text-[15px] leading-[1.6] text-muted">{c.body}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-[13px] font-semibold whitespace-nowrap text-success-ink">
                        <span aria-hidden className="size-1.5 rounded-full bg-current" />
                        At launch
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section tone="subtle" labelledBy="keep-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 id="keep-title" className="font-display-wonk text-[30px] leading-tight font-semibold text-brand md:text-[36px]">What we keep</h2>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.65] text-muted">{PLATFORM_PAGE.keep}</p>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.65] text-muted">Sessions are not recorded by default.</p>
          </Reveal>
          <Reveal delay={80} className="rounded-3xl border border-border bg-white p-7 md:p-8">
            <Icon name="security" size={48} />
            <h3 className="mt-6 text-xl font-semibold text-brand">For your IT and security team</h3>
            <p className="mt-2 text-[15px] leading-[1.65] text-muted">Request a one-page security summary you can share before you sign. Our team sends it to your business email.</p>
            <div className="mt-6">
              <Button href="/trust-center/#request-docs">Request the summary</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Tell us about your next session"
        body="Send the languages, the date and the subject. We will reply with a quote and the interpreter profile we propose."
        actions={
          <>
            <Button href="/get-quote/" variant="on-dark" size="lg">Request a quote</Button>
            <Button href="/contact/" variant="on-dark-outline" size="lg">Talk to Sales</Button>
          </>
        }
      />
    </>
  );
}
