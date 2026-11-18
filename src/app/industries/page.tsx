import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectorExplorer } from "@/components/page/SectorExplorer";

export const metadata: Metadata = {
  title: "Industries",
  description: "Interpreting for healthcare, legal, government and NGOs, enterprise, conferences and events, on-site assignments and accessibility.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        label="Industries"
        title="Interpreting matched to your sector"
        lead="Every sector has its own terminology, obligations and risks. Choose yours to see the services, interpreter qualifications and compliance that apply."
        actions={
          <>
            <Button href="/get-quote/" size="lg">Request a quote</Button>
            <Button href="#sectors" variant="secondary" size="lg">Explore sectors</Button>
          </>
        }
      />
      <section id="sectors" aria-label="Sectors" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <SectorExplorer />
        </Container>
      </section>
      <CtaBand
        title="Plan language access for your organization"
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
