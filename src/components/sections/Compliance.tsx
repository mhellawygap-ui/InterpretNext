import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const STANDARDS = [
  { icon: "hipaa" as IconName, name: "HIPAA", body: "PHI handling & signed BAAs for every healthcare engagement" },
  { icon: "iso-17100" as IconName, name: "ISO 17100", body: "The international standard for translation & interpretation quality" },
  { icon: "iso-27001" as IconName, name: "ISO 27001", body: "Information security management for sensitive engagements" },
  { icon: "nda" as IconName, name: "NDA", body: "Signed confidentiality on every linguist, every session" },
];

export function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-28 py-10">
      <Container>
        <SectionHeading
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
              <Icon name={s.icon} size={48} className="mx-auto" />
              <p className="font-display-wonk mt-4 text-[31px] font-bold leading-[1.2] text-accent-1">{s.name}</p>
              <p className="mx-auto mt-3 max-w-[263px] text-base leading-[1.2] text-muted">{s.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
