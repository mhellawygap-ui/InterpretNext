import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

export function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-28 pt-16 pb-4">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading
          align="center"
          title={
            <>
              Let&apos;s talk about <br className="hidden sm:block" />
              your next <GradientText>conversation</GradientText>.
            </>
          }
          lead="Tell us your languages, your volume, and your compliance needs — we'll have a tailored proposal back within 24 hours."
          className="max-w-[618px]"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button href="/get-quote/" variant="outline">Talk to sales</Button>
          <Button href="/get-quote/?modality=unsure">Request demo</Button>
        </div>
      </Container>
    </section>
  );
}
