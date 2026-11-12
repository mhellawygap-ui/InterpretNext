import { Icon, type IconName } from "./Icon";

export type StripItem = { icon: IconName; title: string; sub: string };

/** Rule: a strip holds ONE icon family. Use a preset or build one from a single family. */
export const SERVICE_STRIP: StripItem[] = [
  { icon: "opi", title: "OPI", sub: "Over the phone" },
  { icon: "vri", title: "VRI", sub: "Video remote" },
  { icon: "rsi", title: "RSI", sub: "Simultaneous" },
  { icon: "on-site", title: "On-site", sub: "In the room" },
];

export const TRUST_STRIP: StripItem[] = [
  { icon: "hipaa", title: "HIPAA", sub: "Aligned workflows" },
  { icon: "iso-17100", title: "ISO 17100", sub: "Interpreting quality" },
  { icon: "iso-27001", title: "ISO 27001", sub: "Information security" },
  { icon: "nda", title: "NDA", sub: "Signed confidentiality" },
];

export function IconStrip({
  items,
  label,
  tone = "dark",
  size = 36,
  columns,
}: {
  items: StripItem[];
  label: string;
  /** dark = on gradient heroes, light = on the page canvas */
  tone?: "dark" | "light";
  size?: number;
  /** fixed grid columns from sm up (default: wrapping row) */
  columns?: 2 | 3 | 4;
}) {
  const dark = tone === "dark";
  const layout = columns
    ? `grid grid-cols-2 gap-x-6 gap-y-4 ${columns === 4 ? "sm:grid-cols-4" : columns === 3 ? "sm:grid-cols-3" : ""}`
    : "flex flex-wrap gap-x-6 gap-y-4";
  return (
    <ul aria-label={label} className={layout}>
      {items.map((i) => (
        <li key={i.icon} className="flex items-center gap-3">
          <Icon name={i.icon} size={size} />
          <span className="leading-[1.25]">
            <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-brand"}`}>{i.title}</span>
            <span className={`block text-xs ${dark ? "text-white/80" : "text-muted"}`}>{i.sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
