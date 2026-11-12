import { Container } from "@/components/ui/Container";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  { title: "Request access", body: "Call, click, or integrate via API — no contracts required to start." },
  { title: "Matched instantly", body: "Our system routes you to the right-tier interpreter for your language and domain." },
  { title: "Connect in seconds", body: "Average connection time under 10 seconds, 24 hours a day." },
  { title: "Track & report", body: "Session logs, billing, and quality reporting available in your dashboard." },
];

export function HowItWorks() {
  return (
    <section className="py-10">
      <Container>
        <SectionHeading
          title={
            <>
              From request <br className="hidden sm:block" />
              to <GradientText>resolution</GradientText>.
            </>
          }
          className="max-w-[618px]"
        />
        <ol className="relative mt-10 lg:mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:border-t lg:border-dashed lg:border-border lg:pt-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative lg:pr-8">
              <span className="text-base text-filter-pink lg:absolute lg:-top-[59px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[25px] font-medium leading-[1.2] text-foreground lg:mt-0">{s.title}</h3>
              <p className="mt-4 max-w-[250px] text-base leading-[1.2] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
