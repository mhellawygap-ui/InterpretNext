import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "white" | "subtle" | "navy" | "glow";

const TONES: Record<Tone, string> = {
  white: "bg-background",
  subtle: "bg-surface",
  navy: "bg-brand-deep text-white",
  glow: "bg-glow text-white",
};

/** Page section with consistent vertical rhythm (96px desktop / 64px mobile). */
export function Section({
  id,
  tone = "white",
  children,
  className = "",
  labelledBy,
  narrow,
  tight = false,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  narrow?: boolean;
  /** 64px desktop instead of 96px */
  tight?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${TONES[tone]} ${tight ? "py-14 md:py-16" : "py-16 md:py-24"} scroll-mt-24 ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

/** Section heading: optional small label, a Fraunces H2 and a lead paragraph. */
export function SectionHeader({
  id,
  label,
  title,
  lead,
  align = "left",
  action,
  dark = false,
  className = "",
}: {
  id?: string;
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`flex flex-col gap-6 ${action && !center ? "md:flex-row md:items-end md:justify-between" : ""} ${className}`}>
      <div className={center ? "mx-auto max-w-[720px] text-center" : "max-w-[720px]"}>
        {label && (
          <p className={`text-sm font-semibold ${dark ? "text-white/80" : "text-accent-1"}`}>{label}</p>
        )}
        <h2
          id={id}
          className={`font-display-wonk text-[32px] leading-[1.12] font-semibold tracking-[-0.01em] md:text-[44px] ${label ? "mt-3" : ""} ${dark ? "text-white" : "text-brand"}`}
        >
          {title}
        </h2>
        {lead && <p className={`mt-4 text-[17px] leading-[1.6] ${dark ? "text-white/80" : "text-muted"}`}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
