import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectorExplorer } from "@/components/page/SectorExplorer";

export const metadata: Metadata = {
  title: "Industries",
  description: "Interpreting for healthcare, legal, government and public-sector work, NGOs and international organizations, and business and events.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        label="Industries"
        title="Who we work with"
        lead="Each sector has its own terminology and risks. Choose yours to see the services, the interpreters we assign and how we handle confidentiality."
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
