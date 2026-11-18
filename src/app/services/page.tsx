import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LaterList, ServiceGrid } from "@/components/shared/Blocks";
import { ServiceFinder } from "@/components/shared/ServiceFinder";

export const metadata: Metadata = {
  title: "Services",
  description: "Video remote, on-site and simultaneous interpreting, conference interpreting, sign language and captioning, and document translation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Services"
        title="Interpreting services for every setting"
        lead="Book a qualified interpreter for scheduled video sessions, in-person meetings and multilingual events, with sign language, captioning and document translation for the same case."
        actions={
          <>
            <Button href="/get-quote/" size="lg">Request a quote</Button>
            <Button href="#finder" variant="secondary" size="lg">Help me choose</Button>
          </>
        }
      />
      <Section labelledBy="launch-title">
        <SectionHeader id="launch-title" title="Available at launch" lead="Every service below is delivered by qualified human interpreters, matched to your subject and setting." />
        <div className="mt-12">
          <ServiceGrid detailed />
        </div>
      </Section>
      <Section tone="subtle" id="finder" labelledBy="finder-title">
        <SectionHeader id="finder-title" title="Not sure which service fits?" lead="Pick the situation and we will recommend a service." />
        <div className="mt-12">
          <ServiceFinder />
        </div>
      </Section>
      <Section id="later" labelledBy="later-title">
        <SectionHeader
          id="later-title"
          title="Coming in later releases"
          lead="These capabilities are planned and are not part of the launch release. Ask us if you would like to be notified when they are available."
        />
        <div className="mt-12">
          <LaterList />
        </div>
      </Section>
      <CtaBand
        title="Plan your interpreting with a specialist"
        body="Tell us your languages, settings and volume. We reply within one business day."
        actions={
          <>
            <Button href="/get-quote/" variant="on-dark" size="lg">Request a quote</Button>
            <Button href="/contact/" variant="on-dark-outline" size="lg">Contact our team</Button>
          </>
        }
      />
    </>
  );
}
