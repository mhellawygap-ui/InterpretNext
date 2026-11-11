import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const INDUSTRIES = [
  {
    icon: "/images/medical-symbol.png",
    title: "Healthcare",
    body: "Hospitals, telehealth, and insurance providers needing HIPAA-compliant interpretation for patient communication.",
  },
  {
    icon: "/images/balance-scale.png",
    title: "Legal",
    body: "Depositions, immigration proceedings, and courtroom interpretation with certified legal-domain specialists.",
  },
  {
    icon: "/images/bank.png",
    title: "Government & NGO",
    body: "Public services, social services, and international organizations communicating across language and culture.",
  },
  {
    icon: "/images/globe-with-meridians.png",
    title: "Global Business",
    body: "Negotiations, summits, and enterprise meetings where every word in the room needs to land correctly.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-28 pt-10 pb-10">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for where precision can&apos;t be <GradientText>optional</GradientText>.
            </>
          }
          className="max-w-[615px]"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:-mx-1">
          {INDUSTRIES.map((item) => (
            <li key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <IconTile src={item.icon} />
                <h3 className="text-xl font-semibold leading-[1.2] text-foreground xl:whitespace-nowrap">{item.title}</h3>
              </div>
              <p className="mt-6 text-base leading-[1.2] text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
