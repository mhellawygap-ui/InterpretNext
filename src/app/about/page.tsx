import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TierCards } from "@/components/shared/Blocks";

export const metadata: Metadata = {
  title: "About bayanTech",
  description: "InterpretNext is a bayanTech brand: interpreters for healthcare, legal and public-sector work, including the languages that are hard to find.",
};

/** Built only from statements in Copy Deck v1. A fuller company story waits for approved copy. */
const VALUES = [
  { title: "Languages that are hard to find", body: "bayanTech has recruited and managed interpreters in Middle Eastern, African and Asian languages for years. We match by dialect as well as language." },
  { title: "A platform we built", body: "InterpretNext sessions run on a platform bayanTech built for interpreting, so we control who joins, what is stored and who can see it." },
  { title: "People make the decisions", body: "A project manager reviews every assignment. AI supports our testing and scheduling, and a person approves every result." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About bayanTech"
        title="InterpretNext is a bayanTech brand"
        lead="InterpretNext provides vetted interpreters for hospitals, courts, agencies and international organizations. It brings bayanTech's experience with rare Middle Eastern, African and Asian languages and dialects to live interpreting."
        actions={
          <>
            <Button href="/contact/" size="lg">Contact us</Button>
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
        <SectionHeader id="network-title" title="Our interpreters" lead="Every interpreter is reviewed by our localization team before their first assignment, and grouped into three tiers." action={<Button href="/interpreters/" variant="secondary">How we choose interpreters</Button>} />
        <div className="mt-12">
          <TierCards />
        </div>
      </Section>
      <CtaBand
        title="Tell us about your next session"
        body="Send the languages, the date and the subject. We will reply with a quote and the interpreter profile we propose."
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
