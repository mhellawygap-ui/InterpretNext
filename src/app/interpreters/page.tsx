import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TierCards } from "@/components/shared/Blocks";
import { LeadForm } from "@/components/shared/LeadForm";
import { INTERPRETERS } from "@/data/content";
import { QUALITY_STEPS } from "@/data/trust";

export const metadata: Metadata = {
  title: "Interpreters",
  description: "How InterpretNext chooses who takes your session: localization review, three tiers, project manager review on every assignment. Interpreters can apply to join.",
};

const WORKING = [
  { icon: "this-month" as const, title: "Scheduled assignments", body: "You set your availability and leave, and project managers offer assignments that match your languages, dialects and subjects." },
  { icon: "join" as const, title: "One platform", body: "Accept assignments, read the materials the project manager shares, join the session and check in and out in one place." },
  { icon: "match" as const, title: "Only what you need", body: "You see only the sessions assigned to you and the materials shared with you." },
];

export default function InterpretersPage() {
  return (
    <>
      <PageIntro
        label="Interpreters"
        title={INTERPRETERS.title}
        lead={INTERPRETERS.body}
        actions={
          <>
            <Button href="/get-quote/" size="lg">Request a quote</Button>
            <Button href="#apply" variant="secondary" size="lg">Apply to join</Button>
          </>
        }
      />

      <Section labelledBy="tiers-title">
        <SectionHeader id="tiers-title" title="Three tiers, written plainly" lead="We match the tier to the subject and the stakes of each session." />
        <div className="mt-12">
          <TierCards />
        </div>
        <p className="mt-6 text-[15px] text-muted">{INTERPRETERS.ai}</p>
      </Section>

      <Section tone="subtle" labelledBy="steps-title">
        <SectionHeader id="steps-title" title="From review to rating" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {QUALITY_STEPS.map((q, i) => (
            <Reveal as="li" key={q.title} delay={(i % 3) * 60} className="rounded-2xl border border-border bg-white p-6">
              <span className="text-sm font-semibold text-subtle">0{i + 1}</span>
              <h3 className="mt-2 font-semibold text-brand">{q.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{q.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="apply" labelledBy="apply-title">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)] lg:gap-16">
          <div>
            <SectionHeader
              id="apply-title"
              title="Interpret with us"
              lead="We are always looking for qualified interpreters, especially in Middle Eastern, African and Asian languages and dialects. Our localization team reviews every application."
            />
            <ul className="mt-10 flex flex-col gap-6">
              {WORKING.map((w) => (
                <li key={w.title} className="flex gap-4">
                  <Icon name={w.icon} size={44} />
                  <div>
                    <p className="font-semibold text-brand">{w.title}</p>
                    <p className="mt-1 text-[15px] leading-[1.6] text-muted">{w.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            id="apply-form"
            submitLabel="Send application"
            successTitle="Application received"
            successBody="Thank you. Our localization team will review your application and contact you by email."
            fields={[
              { name: "name", label: "Full name", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "languages", label: "Languages and dialects", required: true, full: true, placeholder: "Example: Arabic (Sudanese) and English" },
              { name: "years", label: "Years of interpreting experience", type: "select", options: ["Less than 2", "2 to 5", "5 to 10", "10 or more"] },
              { name: "subjects", label: "Subject expertise", type: "select", options: ["Medical", "Legal", "Government and public services", "Business and technical", "General"] },
              { name: "certs", label: "Certifications", full: true, placeholder: "Example: court or medical interpreter certification" },
              { name: "notes", label: "Anything else we should know", type: "textarea" },
            ]}
          />
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
