"use client";

import { useState } from "react";
import { LANGUAGES } from "@/data/languages";

/**
 * Two slow rows of languages from the master list (so the ribbon never names a language the
 * directory does not have). Pauses on hover or with the button; static under reduced motion.
 */
export function LanguageRibbon() {
  const [paused, setPaused] = useState(false);
  const half = Math.ceil(LANGUAGES.length / 2);
  const rows = [LANGUAGES.slice(0, half), LANGUAGES.slice(half)];
  return (
    <div className="marquee relative" data-paused={paused}>
      <div className="flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        {rows.map((row, r) => (
          <ul key={r} className={`marquee-track flex w-max gap-3 ${r === 1 ? "reverse" : ""}`}>
            {[...row, ...row].map((l, i) => (
              <li
                key={`${l.name}-${i}`}
                aria-hidden={i >= row.length}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] whitespace-nowrap ${
                  l.coverage === "rare" ? "border-[#e0336f]/30 bg-[#fdeef3] text-[#a3104a]" : "border-border bg-white text-brand"
                }`}
              >
                <span className="font-medium">{l.name}</span>
                {l.native && l.native !== l.name && <span className={l.coverage === "rare" ? "" : "text-muted"}>{l.native}</span>}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[13px] text-muted">
        <p className="flex items-center gap-4">
          <span className="flex items-center gap-2"><span aria-hidden className="size-2.5 rounded-full border border-border-strong bg-white" />Core network</span>
          <span className="flex items-center gap-2"><span aria-hidden className="size-2.5 rounded-full bg-[#e0336f]/70" />Rare, sourced on request</span>
        </p>
        <button type="button" aria-pressed={paused} onClick={() => setPaused((v) => !v)} className="tap rounded-full border border-border px-3 py-1 font-medium text-brand hover:border-border-strong motion-reduce:hidden">
          {paused ? "Play" : "Pause"} the language list
        </button>
      </div>
    </div>
  );
}
