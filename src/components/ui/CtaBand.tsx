import type { ReactNode } from "react";
import { Container } from "./Container";

/** Closing call to action: solid navy band, centered. */
export function CtaBand({ title, body, actions }: { title: ReactNode; body?: ReactNode; actions: ReactNode }) {
  return (
    <section className="bg-brand-deep py-16 text-white md:py-24">
      <Container narrow className="text-center">
        <h2 className="font-display-wonk text-[30px] leading-[1.15] font-semibold md:text-[40px]">{title}</h2>
        {body && <p className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.6] text-white/80">{body}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>
      </Container>
    </section>
  );
}
