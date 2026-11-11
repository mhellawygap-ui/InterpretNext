import { Container } from "@/components/ui/Container";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const STANDARDS = [
  { name: "HIPAA", body: "PHI handling & signed BAAs for every healthcare engagement" },
  { name: "ISO 17100", body: "The international standard for translation & interpretation quality" },
  { name: "ISO 27001", body: "Information security management for sensitive engagements" },
  { name: "NDA", body: "Signed confidentiality on every linguist, every session" },
];

export function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-28 py-10">
      <Container>
        <SectionHeading
          eyebrow="Compliance"
          title={
            <>
              The floor every contract starts <GradientText>above</GradientText>.
            </>
          }
          className="max-w-[618px]"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:-mx-1">
          {STANDARDS.map((s) => (
            <li key={s.name} className="rounded-2xl border border-accent-1 bg-card px-3 py-6 text-center">
              <p className="font-display-wonk text-[31px] font-bold leading-[1.2] text-accent-1">{s.name}</p>
              <p className="mx-auto mt-6 max-w-[263px] text-base leading-[1.2] text-muted">{s.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
