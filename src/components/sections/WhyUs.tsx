import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const ITEMS = [
  { icon: "healthcare" as IconName, title: "HIPAA-Compliant OPI & VRI for Healthcare", badge: "HIPAA" },
  { icon: "legal" as IconName, title: "Certified Legal & Court Interpretation", badge: "ISO 17100" },
  { icon: "global-business" as IconName, title: "Rare African & ME Dialect Coverage", badge: "200+" },
];

export function WhyUs() {
  return (
    <section className="py-10">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,504px)_minmax(0,1fr)] lg:gap-8">
        <SectionHeading
          eyebrow="Why InterpretNext?"
          title={
            <>
              Built specifically for buyers who need <GradientText>certainty</GradientText>.
            </>
          }
          lead={
            <>
              Healthcare, legal, and government buyers don&apos;t search for &quot;translation&quot;
              — they search for an interpretation partner who can guarantee compliance, speed, and
              rare-language coverage. That&apos;s the only thing InterpretNext does.
            </>
          }
        />
        <div className="rounded-2xl border border-border bg-card px-6 pt-4 pb-7 shadow-[0_4px_24px_rgba(8,12,65,0.07)] w-full lg:ml-auto lg:max-w-[716px]">
          <h3 className="px-4 text-xl font-medium leading-[1.2] text-foreground">Interpretation Services</h3>
          <hr className="mt-4 border-border" />
          <ul className="mt-4 flex flex-col gap-4">
            {ITEMS.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-lg border border-border bg-background/50 px-4 py-4"
              >
                <Icon name={item.icon} size={40} />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] leading-[1.2] text-muted">What we’re built for</p>
                  <p className="mt-4 text-base font-medium leading-[1.2] text-foreground">{item.title}</p>
                </div>
                <span className="inline-flex h-9 shrink-0 items-center rounded-full border border-accent-1/40 bg-lilac/40 px-4 text-sm font-semibold text-violet-ink">
                  {item.badge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
