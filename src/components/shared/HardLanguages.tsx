"use client";

import Link from "next/link";
import { useState } from "react";
import { HARD_TO_STAFF_EXAMPLES } from "@/data/languages";
import { LanguageChecker } from "@/components/shared/LanguageChecker";

/** Copy deck 6.5: one static block with a search field. No ticker, no speaker counts, no flags. */
export function HardLanguages() {
  const [q, setQ] = useState("");
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-16">
      <div>
        <p className="text-[15px] font-semibold text-brand">Examples we are often asked for</p>
        <dl className="mt-5 grid gap-5 sm:grid-cols-2">
          {HARD_TO_STAFF_EXAMPLES.map((g) => (
            <div key={g.region}>
              <dt className="text-sm font-medium text-muted">{g.region}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <button
                    key={i.label}
                    type="button"
                    onClick={() => setQ(i.query)}
                    aria-pressed={q === i.query}
                    className={`tap rounded-full px-3.5 py-1.5 text-[14px] font-medium ring-1 transition-colors ${
                      q === i.query ? "bg-brand text-white ring-brand" : "bg-white text-brand ring-border hover:ring-accent-1"
                    }`}
                  >
                    {i.label}
                  </button>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold">
          <Link href="/languages/#check" className="tap text-accent-1 hover:underline">Check a language →</Link>
          <Link href="/languages/#request" className="tap text-accent-1 hover:underline">Request a language we do not list yet →</Link>
        </p>
      </div>
      <LanguageChecker compact query={q} onQueryChange={setQ} />
    </div>
  );
}
