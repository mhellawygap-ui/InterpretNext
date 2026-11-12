import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon, iconLabel, type IconName } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/page/SectionTitle";

export const metadata: Metadata = { title: "Icon system", robots: { index: false } };

const FAMILIES: { title: string; rule: string; names: IconName[] }[] = [
  {
    title: "Services",
    rule: "One hue per modality (product identity). VRI, RSI and On-site are the supplied brand tiles.",
    names: ["opi", "vri", "rsi", "on-site", "conference", "asl", "doc-translation", "ai-speech", "ims"],
  },
  {
    title: "Industries",
    rule: "One shared violet → magenta gradient; the glyph names the sector.",
    names: ["healthcare", "legal", "government", "global-business", "conferences", "on-site-elite", "accessibility", "ai-powered"],
  },
  {
    title: "Trust & compliance",
    rule: "One shared blue gradient, matched to the supplied NDA tile. Certifications, legal documents and accessibility obligations.",
    names: ["hipaa", "iso-17100", "iso-27001", "nda", "gdpr", "ata", "privacy-policy", "terms", "dpa", "accessibility-statement", "subprocessors", "disclosure", "baa", "sign-language", "captions", "platform-access", "reduced-motion"],
  },
  {
    title: "Capabilities & process",
    rule: "One shared green gradient, matched to the supplied 24/7 tile. Stats, timing, availability and next steps.",
    names: ["24-7", "languages-200", "regions", "speed", "tiers", "modalities", "right-now", "this-week", "this-month", "planning", "on-demand", "scheduled", "email", "routing", "callback"],
  },
  { title: "Interpreter tiers", rule: "One medal glyph; the tile color is the tier metal.", names: ["silver", "gold", "platinum"] },
  { title: "Help", rule: "Support and “not sure” entry points.", names: ["unsure", "support"] },
];

export default function IconSystemPage() {
  return (
    <Container className="py-16 lg:!px-[112px]">
      <SectionTitle
        eyebrow="Design system"
        title="Icon system"
        lead="One tile style everywhere. Color tells the visitor which dimension an icon belongs to. In a section, either every item has an icon from the same family or none do, and a single row never mixes families."
      />
      {FAMILIES.map((f) => (
        <section key={f.title} className="mt-12">
          <h2 className="text-xl font-semibold text-brand">{f.title}</h2>
          <p className="mt-1 text-sm text-muted">{f.rule}</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {f.names.map((n) => (
              <li key={n} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center">
                <Icon name={n} size={56} />
                <span className="text-xs text-muted">{iconLabel(n)}</span>
                <code className="text-xs text-accent-1">{n}</code>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Container>
  );
}
