import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Gradient hero card used at the top of every inner page.
 * Put the highlighted word(s) of `title` in <Highlight>.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  footer,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  /** Pills, stats or step indicators under the actions */
  footer?: ReactNode;
  /** Right-hand column (e.g. trust status panel) */
  aside?: ReactNode;
}) {
  return (
    <section className="pt-6 pb-6 lg:pt-8">
      <Container className="lg:!px-[112px]">
        <div className="bg-hero relative overflow-hidden rounded-2xl px-6 py-10 text-white sm:px-10 lg:px-6 lg:py-10">
          <div className={aside ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center" : ""}>
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/70">{eyebrow}</p>
              <h1 className="font-display-wonk mt-5 max-w-[860px] text-[36px] leading-[1.15] font-bold sm:text-[52px] lg:text-[56px]">
                {title}
              </h1>
              <div className="mt-6 max-w-[600px] text-base leading-[1.35] text-white/85">{lead}</div>
              {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
              {footer && <div className="mt-8">{footer}</div>}
            </div>
            {aside}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-accent-2">{children}</span>;
}
