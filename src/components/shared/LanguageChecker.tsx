"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { availabilityDetail, availabilityLabel, availabilityTone, regionSlug, searchLanguages, varietyText } from "@/data/languages";
import { Badge } from "@/components/ui/Badge";

const EXAMPLES = ["Tigrinya", "Sudanese Arabic", "Dari", "Krio"];

/** Language availability checker: search the master list by English, native or alternative name. */
/** Pass `query`/`onQueryChange` to control the search from outside (for example from example chips). */
export function LanguageChecker({ compact = false, query: controlled, onQueryChange }: { compact?: boolean; query?: string; onQueryChange?: (q: string) => void }) {
  const [own, setOwn] = useState("");
  const q = controlled ?? own;
  const setQ = (v: string) => (onQueryChange ? onQueryChange(v) : setOwn(v));
  const id = useId();
  const results = useMemo(() => searchLanguages(q).slice(0, compact ? 4 : 8), [q, compact]);
  const query = q.trim();

  return (
    <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <label htmlFor={id} className="text-[17px] font-semibold text-brand">
        Check a language
      </label>
      <p className="mt-1 text-[15px] text-muted">Search by English name, native name, dialect or country.</p>
      <div className="relative mt-4">
        <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-subtle" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          id={id}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Example: Tigrinya, ትግርኛ or Sudanese Arabic"
          autoComplete="off"
          className="h-13 w-full rounded-xl border border-border-strong bg-white pr-4 pl-12 text-base outline-none focus:border-accent-1 focus:ring-4 focus:ring-accent-1/10"
        />
      </div>

      {!query && (
        <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted">
          Try:
          {EXAMPLES.map((e) => (
            <button key={e} type="button" onClick={() => setQ(e)} className="tap rounded-full border border-border px-3 py-1 text-sm text-brand hover:border-accent-1">
              {e}
            </button>
          ))}
        </p>
      )}

      <div aria-live="polite" className="mt-5">
        {query && results.length > 0 && (
          <ul className="divide-y divide-border rounded-xl border border-border">
            {results.map((l) => {
              const v = varietyText(l, 4);
              return (
                <li key={l.id} className="flex flex-col gap-3 px-4 py-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <p className="font-semibold text-brand">
                      {l.name} {l.native && l.native !== l.name && <span className="font-normal text-muted" lang={l.iso}>· {l.native}</span>}
                    </p>
                    <Badge tone={availabilityTone(l)} dot>
                      {availabilityLabel(l)}
                    </Badge>
                  </div>
                  <p className="text-sm leading-[1.55] text-muted">
                    <Link href={`/languages/#${regionSlug(l.region)}`} className="font-medium text-brand hover:underline">{l.region}</Link>
                    {v && <>. Varieties: {v}</>}
                  </p>
                  <p className="text-sm leading-[1.55] text-muted">{availabilityDetail(l)}</p>
                  <Link href={`/languages/?request=${encodeURIComponent(l.name)}#request`} className="tap w-fit text-sm font-semibold text-accent-1 hover:underline">
                    Ask about {l.name} →
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {query && results.length === 0 && (
          <div className="rounded-xl border border-dashed border-border-strong p-5">
            <p className="font-semibold text-brand">“{query}” is not in our published list yet.</p>
            <p className="mt-1 text-sm text-muted">Tell us the language and where the speaker is from, and we will tell you whether we can staff it.</p>
            <Link href={`/languages/?request=${encodeURIComponent(query)}#request`} className="tap mt-3 inline-block text-sm font-semibold text-accent-1 hover:underline">
              Request a language we do not list yet →
            </Link>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm font-semibold">
        <Link href="/languages/#regions" className="tap text-accent-1 hover:underline">Browse languages by region →</Link>
        <Link href="/languages/#request" className="tap text-accent-1 hover:underline">Request a language →</Link>
      </div>
    </div>
  );
}
