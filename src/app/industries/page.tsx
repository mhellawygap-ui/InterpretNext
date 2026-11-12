import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { Highlight, PageHero } from "@/components/page/PageHero";
import { IndustriesArt } from "@/components/page/HeroArt";
import { SectorExplorer } from "@/components/page/SectorExplorer";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Specialist interpretation for healthcare, legal, government & NGO, global business, conferences, on-site, accessibility and AI-powered programs.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="InterpretNext · Industries"
        title={
          <>
            Interpretation built for your <Highlight>industry&apos;s</Highlight> stakes.
          </>
        }
        lead="Every sector has its own compliance requirements, terminology, and consequences when communication breaks down. InterpretNext matches specialist interpreters to the exact context—not just the language."
        actions={
          <>
            <Button href="#sectors" variant="white">Explore industries</Button>
            <Button href="/get-quote/?modality=unsure" variant="ghost-light">Discuss your use case</Button>
          </>
        }
        aside={<IndustriesArt />}
        footer={
          <CapabilityStrip />
        }
      />
      <Container className="lg:!px-[160px]">
        <SectorExplorer />
      </Container>
    </>
  );
}
