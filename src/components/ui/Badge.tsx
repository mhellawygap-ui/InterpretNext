import type { ReactNode } from "react";

type Tone = "neutral" | "violet" | "success" | "warning" | "info";

const TONES: Record<Tone, string> = {
  neutral: "bg-surface text-muted ring-border",
  violet: "bg-lilac text-violet-ink ring-lilac-strong",
  success: "bg-mint text-success-ink ring-[#cdebd9]",
  warning: "bg-amber text-warning-ink ring-[#f3dfb3]",
  info: "bg-sky text-info-ink ring-[#cfe0f8]",
};

/** Small status label. Use for real status only (release, certification state, availability) — not decoration. */
export function Badge({ children, tone = "neutral", dot = false }: { children: ReactNode; tone?: Tone; dot?: boolean }) {
  return (
    <span className={`inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold whitespace-nowrap ring-1 ring-inset ${TONES[tone]}`}>
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
