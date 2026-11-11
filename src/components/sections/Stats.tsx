import { Container } from "@/components/ui/Container";

const STATS = [
  { value: "200+", label: "Languages & Dialects Covered", small: true },
  { value: "24/7", label: "On-demand availability, every day" },
  { value: "<10s", label: "Average connection time" },
  { value: "3", label: "Interpreter tiers, certification-matched" },
];

export function Stats() {
  return (
    <section aria-label="Key figures" className="border-b border-border py-6">
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-[293px_308px_239px_1fr]">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse items-center gap-4 px-4 py-4 text-center lg:min-h-[118px] lg:justify-center ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <dt className={`${s.small ? "text-[13px]" : "text-base"} leading-[1.2] text-muted`}>
                {s.label}
              </dt>
              <dd className="font-display-wonk text-gradient text-[39px] font-bold leading-[1.2]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
