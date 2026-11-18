import type { ReactNode } from "react";
import { Container } from "./Container";

/** Inner-page hero: white, a short page label, H1, lead, actions and optional media. */
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
    <section className="border-b border-border bg-background pt-12 pb-16 md:pt-20 md:pb-24">
      <Container>
        <div className={media ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16" : "max-w-[800px]"}>
          <div>
            <p className="text-sm font-semibold text-accent-1">{label}</p>
            <h1 className="font-display-wonk mt-4 text-[38px] leading-[1.08] font-semibold tracking-[-0.015em] text-brand md:text-[56px]">{title}</h1>
            <div className="mt-6 max-w-[620px] text-lg leading-[1.6] text-muted">{lead}</div>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
            {children && <div className="mt-10">{children}</div>}
          </div>
          {media && <div>{media}</div>}
        </div>
      </Container>
    </section>
  );
}
