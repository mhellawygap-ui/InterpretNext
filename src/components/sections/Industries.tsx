import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const INDUSTRIES = [
  {
    icon: "/images/medical-symbol.png",
    title: "Healthcare",
    href: "/industries/#healthcare",
    body: "Hospitals, telehealth, and insurance providers needing HIPAA-compliant interpretation for patient communication.",
  },
  {
    icon: "/images/balance-scale.png",
    title: "Legal",
    href: "/industries/#legal",
    body: "Depositions, immigration proceedings, and courtroom interpretation with certified legal-domain specialists.",
  },
  {
    icon: "/images/bank.png",
    title: "Government & NGO",
    href: "/industries/#government",
    body: "Public services, social services, and international organizations communicating across language and culture.",
  },
  {
    icon: "/images/globe-with-meridians.png",
    title: "Global Business",
    href: "/industries/#global-business",
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
            <li key={item.title}>
              <Link href={item.href} className="block h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(101,40,203,0.15)]">
              <div className="flex items-center gap-4">
                <IconTile src={item.icon} />
                <h3 className="text-xl font-semibold leading-[1.2] text-foreground xl:whitespace-nowrap">{item.title}</h3>
              </div>
              <p className="mt-6 text-base leading-[1.2] text-muted">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
