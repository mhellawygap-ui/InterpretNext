import type { ReactNode } from "react";
import { Container } from "./Container";

/** Inner-page intro: lavender wash, page label, H1, lead, actions and optional media. */
export function PageIntro({
  label,
  title,
  lead,
  actions,
  media,
  children,
}: {
  label: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-wash relative overflow-hidden border-b border-border pt-14 pb-16 md:pt-20 md:pb-24">
      <svg aria-hidden className="pointer-events-none absolute -top-24 -right-24 hidden size-[420px] text-accent-1/10 lg:block" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
        {[30, 50, 70, 90].map((r) => <circle key={r} cx="100" cy="100" r={r} />)}
      </svg>
      <Container className="relative">
        <div className={media ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16" : "max-w-[820px]"}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-accent-1 ring-1 ring-border">{label}</p>
            <h1 className="font-display-wonk mt-5 text-[40px] leading-[1.06] font-semibold tracking-[-0.015em] text-brand md:text-[58px]">{title}</h1>
            <div className="mt-6 max-w-[60ch] text-lg leading-[1.65] text-muted">{lead}</div>
            {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
            {children && <div className="mt-10">{children}</div>}
          </div>
          {media && <div>{media}</div>}
        </div>
      </Container>
    </section>
  );
}
