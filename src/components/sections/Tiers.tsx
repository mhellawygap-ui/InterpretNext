import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const TIERS = [
  {
    icon: "silver" as IconName,
    name: "Silver",
    meta: "Qualified Bilingual",
    points: ["General OPI & volume support", "High-capacity base layer", "Vetted & background-checked"],
  },
  {
    icon: "gold" as IconName,
    name: "Gold",
    meta: "Specialized . 5+ Years",
    points: ["All modalities (OPI/VRI/RSI)", "Government & business domains", "Subject-matter trained"],
    featured: true,
  },
  {
    icon: "platinum" as IconName,
    name: "Platinum",
    meta: "Medical & Legal SME · 10+ YEARS",
    points: ["Reserved for high-stakes calls", "Domain-certified specialists", "Premium-rate assignment tier"],
  },
];

export function Tiers() {
  return (
    <section className="py-10">
      <Container>
        <SectionHeading
          title={
            <>
              Certification-matched, not <GradientText>randomly assigned</GradientText>.
            </>
          }
          lead="Every interpreter is tiered by experience, certification, and domain expertise — so the person on the call always matches the stakes of the conversation."
          className="max-w-[618px]"
        />
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <li
              key={t.name}
              className={`rounded-2xl border border-border px-6 pt-6 pb-8 ${
                t.featured ? "bg-brand text-white" : "bg-card text-foreground"
              }`}
            >
              <div className="flex items-center gap-6">
                <Icon name={t.icon} size={48} />
                <div>
                  <h3 className={`font-display-wonk text-[31px] font-bold leading-[1.2] ${t.featured ? "text-white" : "text-black"}`}>
                    {t.name}
                  </h3>
                  <p className={`mt-2 text-[13px] leading-[1.2] ${t.featured ? "text-white" : "text-muted"}`}>{t.meta}</p>
                </div>
              </div>
              <ul className={`mt-6 divide-y ${t.featured ? "divide-border" : "divide-border"}`}>
                {t.points.map((p) => (
                  <li key={p} className="py-4 text-base leading-[1.2] first:pt-0 last:pb-0">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
