import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LaterList, ServiceGrid } from "@/components/shared/Blocks";
import { ServiceFinder } from "@/components/shared/ServiceFinder";

export const metadata: Metadata = {
  title: "Services",
  description: "Remote interpreting by video, on-site interpreting, conference and event interpreting on request, and document translation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Services"
        title="Interpreting services"
        lead="Book an interpreter matched to your language, dialect and subject, for scheduled video sessions and in-person meetings. Event interpreting is available on request, and the bayanTech translation team handles documents."
        actions={
          <>
            <Button href="/get-quote/" size="lg">Request a quote</Button>
            <Button href="#finder" variant="secondary" size="lg">Help me choose</Button>
          </>
        }
      />
      <Section labelledBy="launch-title">
        <SectionHeader id="launch-title" title="What you can book" lead="Every session is interpreted by a person. A team member confirms every booking." />
        <div className="mt-12">
          <ServiceGrid detailed />
        </div>
      </Section>
      <Section tone="subtle" id="finder" labelledBy="finder-title">
        <SectionHeader id="finder-title" title="Start with the situation" lead="Tell us what is happening and we will suggest the service that fits. A team member confirms every booking." />
        <div className="mt-12">
          <ServiceFinder />
        </div>
      </Section>
      <Section id="later" labelledBy="later-title">
        <SectionHeader
          id="later-title"
          title="Coming in later releases"
          lead="These are planned and are not available yet. Contact us for urgent requests and we will do our best."
        />
        <div className="mt-12">
          <LaterList />
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
