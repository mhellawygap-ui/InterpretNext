import type { Metadata } from "next";
import { Icon, ICON_NAMES, iconFamily, iconLabel, type IconFamily } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Icon system", robots: { index: false } };

const FAMILIES: { id: IconFamily; title: string; rule: string }[] = [
  { id: "service", title: "Services", rule: "Violet. Interpreting modes and related services." },
  { id: "industry", title: "Industries", rule: "Rose. The sectors we serve." },
  { id: "trust", title: "Trust and compliance", rule: "Blue. Certifications, security, legal documents and accessibility." },
  { id: "capability", title: "Capabilities and process", rule: "Green. Languages, timing, pricing drivers and process steps." },
  { id: "tier", title: "Interpreter tiers", rule: "Metal. Silver, Gold and Platinum." },
  { id: "help", title: "Help", rule: "Indigo. Support, contact and account entry points." },
];

export default function IconSystemPage() {
  return (
    <Section>
      <SectionHeader
        label="Design system"
        title="Icon system"
        lead="One line style (24px grid, 1.75 stroke) on a soft tile. The tile color names the dimension. In a section, every item gets an icon from the same family or none do, and one row never mixes families."
      />
      {FAMILIES.map((f) => (
        <section key={f.id} className="mt-14">
          <h2 className="text-xl font-semibold text-brand">{f.title}</h2>
          <p className="mt-1 text-[15px] text-muted">{f.rule}</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {ICON_NAMES.filter((n) => iconFamily(n) === f.id).map((n) => (
              <li key={n} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center">
                <Icon name={n} size={52} />
                <span className="text-[13px] text-muted">{iconLabel(n)}</span>
                <code className="text-xs text-accent-1">{n}</code>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Section>
  );
}
