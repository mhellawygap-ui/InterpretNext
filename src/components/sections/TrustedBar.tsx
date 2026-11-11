import { Container } from "@/components/ui/Container";

const SECTORS = [
  "Healthcare Networks",
  "Legal Counsel",
  "Government Agencies",
  "Global Enterprises",
  "NGO’s & Summits",
];

export function TrustedBar() {
  return (
    <section aria-label="Trusted across" className="bg-brand py-[36px] text-border">
      <Container className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-base font-medium uppercase">Trusted across</p>
        <ul className="font-display flex flex-wrap gap-x-10 gap-y-2 text-base font-semibold">
          {SECTORS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
