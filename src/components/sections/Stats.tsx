import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";

const STATS = [
  { value: "200+", label: "Languages & Dialects Covered", small: true, icon: "languages-200" as IconName },
  { value: "24/7", label: "On-demand availability, every day", icon: "24-7" as IconName },
  { value: "<10s", label: "Average connection time", icon: "speed" as IconName },
  { value: "3", label: "Interpreter tiers, certification-matched", icon: "tiers" as IconName },
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
              <dd className="flex items-center gap-3">
                <Icon name={s.icon} size={40} />
                <span className="font-display-wonk text-gradient text-[39px] font-bold leading-[1.2]">{s.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
