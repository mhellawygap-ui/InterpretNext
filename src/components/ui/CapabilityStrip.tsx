import { BrandIcon, type BrandIconName } from "./BrandIcon";

const DEFAULT_ITEMS: { icon: BrandIconName; title: string; sub: string }[] = [
  { icon: "vri", title: "VRI", sub: "Video remote" },
  { icon: "rsi", title: "RSI", sub: "Simultaneous" },
  { icon: "on-site", title: "On-site", sub: "In the room" },
  { icon: "24-7", title: "24/7", sub: "Coverage" },
  { icon: "nda", title: "NDA", sub: "Signed confidentiality" },
];

/**
 * Row of brand icons + short labels. Replaces the text-only pills in heroes.
 * `tone="dark"` for gradient heroes, `tone="light"` for the white home hero.
 */
export function CapabilityStrip({
  items = DEFAULT_ITEMS,
  tone = "dark",
  label = "What we offer",
  grid = false,
}: {
  grid?: boolean;
  items?: { icon: BrandIconName; title: string; sub: string }[];
  tone?: "dark" | "light";
  label?: string;
}) {
  const dark = tone === "dark";
  return (
    <ul aria-label={label} className={grid ? "grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-4" : "flex flex-wrap gap-x-6 gap-y-4"}>
      {items.map((i) => (
        <li key={i.icon} className="flex items-center gap-3">
          <BrandIcon name={i.icon} size={36} />
          <span className="leading-[1.2]">
            <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-brand"}`}>{i.title}</span>
            <span className={`block text-xs ${dark ? "text-white/80" : "text-muted"}`}>{i.sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
