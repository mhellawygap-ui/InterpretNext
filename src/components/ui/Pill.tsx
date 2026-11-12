import type { ReactNode } from "react";

type Tone = "lilac" | "blush" | "sky" | "muted";

const tones: Record<Tone, string> = {
  lilac: "bg-lilac border-lilac text-violet-ink",
  blush: "bg-blush border-blush text-blush-ink",
  sky: "bg-sky border-sky-border text-sky-ink",
  muted: "bg-muted/20 border-transparent text-border font-semibold",
};

export function Pill({
  children,
  tone = "lilac",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[13.3px] border-[0.5px] px-2.5 leading-[1.2] ${
        size === "sm" ? "h-6 text-xs" : "h-7 text-[13px]"
      } ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
