import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TIERS } from "@/data/trust";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About InterpretNext",
  description: "InterpretNext is an interpreting brand by bayanTech, focused on high-stakes conversations and rare languages.",
};

/** DRAFT (marketing/legal): company story to be replaced with approved copy. */
const VALUES = [
  { title: "Accuracy first", body: "We match interpreters to the subject and the stakes, so meaning is carried accurately." },
  { title: "Every language matters", body: "We invest in rare and underserved languages so no one is left without a qualified interpreter." },
  { title: "Confidential by default", body: "Every interpreter signs a confidentiality agreement, and session content is not stored." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title="An interpreting brand by bayanTech"
        lead="InterpretNext brings bayanTech's language expertise to live interpreting. We focus on conversations where accuracy matters most, in healthcare, legal and public services, and on the languages other providers find hardest to staff."
        actions={
          <>
            <Button href="/contact/" size="lg">Contact our team</Button>
            <Button href="/trust-center/" variant="secondary" size="lg">Trust Center</Button>
          </>
        }
      />
      <Section labelledBy="values-title">
        <SectionHeader id="values-title" title="What we stand for" />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <li key={v.title} className="rounded-2xl border border-border bg-white p-7">
              <p className="text-lg font-semibold text-brand">{v.title}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="subtle" labelledBy="network-title">
        <SectionHeader id="network-title" title="Our interpreter network" lead="Interpreters are vetted, assessed and grouped into three tiers, so each assignment gets the right level of experience." action={<Button href="/trust-center/#quality" variant="secondary">How we vet interpreters</Button>} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <li key={t.name} className="rounded-2xl border border-border bg-white p-7">
              <div className="flex items-center gap-4">
                <Icon name={t.icon} size={44} />
                <div>
                  <p className="text-lg font-semibold text-brand">{t.name}</p>
                  <p className="text-sm text-muted">{t.meta}</p>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-[1.6] text-muted">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand
        title="Talk to our team"
        actions={
          <>
            <Button href="/contact/" variant="on-dark" size="lg">Contact us</Button>
            <Button href="/get-quote/" variant="on-dark-outline" size="lg">Request a quote</Button>
          </>
        }
      />
    </>
  );
}
