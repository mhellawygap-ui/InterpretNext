import Image from "next/image";
import { asset } from "@/lib/asset";

export const BRAND_ICONS = {
  vri: { src: "/images/brand/vri.webp", label: "VRI — Video Remote Interpreting" },
  rsi: { src: "/images/brand/rsi.webp", label: "RSI — Remote Simultaneous Interpreting" },
  "on-site": { src: "/images/brand/on-site.webp", label: "On-site interpreting" },
  "24-7": { src: "/images/brand/coverage-24-7.webp", label: "24/7 coverage" },
  nda: { src: "/images/brand/nda.webp", label: "NDA — signed confidentiality" },
} as const;

export type BrandIconName = keyof typeof BRAND_ICONS;

/**
 * Brand app-tile icon. Decorative by default (the visible text next to it names the
 * concept); pass `labelled` when the icon stands alone.
 */
export function BrandIcon({
  name,
  size = 40,
  labelled = false,
  className = "",
}: {
  name: BrandIconName;
  size?: number;
  labelled?: boolean;
  className?: string;
}) {
  const icon = BRAND_ICONS[name];
  return (
    <Image
      src={asset(icon.src)}
      alt={labelled ? icon.label : ""}
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
