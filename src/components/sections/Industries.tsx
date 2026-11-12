import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const INDUSTRIES = [
  {
    icon: "healthcare" as IconName,
    title: "Healthcare",
    href: "/industries/#healthcare",
    body: "Hospitals, telehealth, and insurance providers needing HIPAA-compliant interpretation for patient communication.",
  },
  {
    icon: "legal" as IconName,
    title: "Legal",
    href: "/industries/#legal",
    body: "Depositions, immigration proceedings, and courtroom interpretation with certified legal-domain specialists.",
  },
  {
    icon: "government" as IconName,
    title: "Government & NGO",
    href: "/industries/#government",
    body: "Public services, social services, and international organizations communicating across language and culture.",
  },
  {
    icon: "global-business" as IconName,
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
              <Link href={item.href} className="block h-full rounded-2xl border border-border bg-card p-6 hover:shadow-[0_8px_24px_rgba(101,40,203,0.07)]">
              <div className="flex items-center gap-4">
                <Icon name={item.icon} size={48} />
                <h3 className="text-xl font-semibold leading-[1.2] text-foreground">{item.title}</h3>
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
