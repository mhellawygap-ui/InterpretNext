import type { ReactNode } from "react";
import { Container } from "./Container";

const SCRIPTS = [
  { t: "مرحبا", lang: "ar", cls: "top-6 left-[6%] text-[72px]" },
  { t: "ሰላም", lang: "am", cls: "bottom-4 left-[22%] text-[56px]" },
  { t: "Hola", lang: "es", cls: "top-10 right-[8%] text-[64px]" },
  { t: "你好", lang: "zh", cls: "bottom-6 right-[24%] text-[52px]" },
];

/** Closing call to action: navy glow band with a faint multilingual texture. */
export function CtaBand({ title, body, actions }: { title: ReactNode; body?: ReactNode; actions: ReactNode }) {
  return (
    <section className="bg-glow relative overflow-hidden py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden select-none md:block">
        {SCRIPTS.map((s) => (
          <span key={s.t} lang={s.lang} className={`font-display-wonk drift absolute leading-none text-white/[0.06] ${s.cls}`}>{s.t}</span>
        ))}
      </div>
      <Container narrow className="relative text-center">
        <h2 className="font-display-wonk text-[32px] leading-[1.12] font-semibold md:text-[46px]">{title}</h2>
        {body && <p className="mx-auto mt-5 max-w-[56ch] text-[17px] leading-[1.65] text-white/80">{body}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>
      </Container>
    </section>
  );
}
