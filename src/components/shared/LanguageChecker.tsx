"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { coverageDetail, coverageLabel, searchLanguages } from "@/data/languages";
import { Badge } from "@/components/ui/Badge";

const EXAMPLES = ["Tigrinya", "Dari", "Haitian Creole", "Karen"];

/** Language availability checker: search the master list by English, native or alternative name. */
export function LanguageChecker({ compact = false }: { compact?: boolean }) {
  const [q, setQ] = useState("");
  const id = useId();
  const results = useMemo(() => searchLanguages(q).slice(0, compact ? 4 : 8), [q, compact]);
  const query = q.trim();

  return (
    <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <label htmlFor={id} className="text-[17px] font-semibold text-brand">
        Check a language
      </label>
      <p className="mt-1 text-[15px] text-muted">Search by English name, native name or dialect.</p>
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
          placeholder="e.g. Tigrinya, ትግርኛ or Sudanese Arabic"
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
            {results.map((l) => (
              <li key={l.name} className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-brand">
                    {l.name} {l.native && l.native !== l.name && <span className="font-normal text-muted">· {l.native}</span>}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {l.region}. {coverageDetail(l.coverage)}
                  </p>
                </div>
                <Badge tone={l.coverage === "priority" ? "success" : "violet"} dot>
                  {coverageLabel(l.coverage)}
                </Badge>
              </li>
            ))}
          </ul>
        )}
        {query && results.length === 0 && (
          <div className="rounded-xl border border-dashed border-border-strong p-5">
            <p className="font-semibold text-brand">“{query}” is not in our published list yet.</p>
            <p className="mt-1 text-sm text-muted">We regularly source rare languages and dialects. Tell us what you need and we will confirm within one business day.</p>
            <Link href={`/languages/?request=${encodeURIComponent(query)}#request`} className="tap mt-3 inline-block text-sm font-semibold text-accent-1 hover:underline">
              Request {query} →
            </Link>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm font-semibold">
        <Link href="/languages/" className="tap text-accent-1 hover:underline">Browse languages by region →</Link>
        <Link href="/languages/#request" className="tap text-accent-1 hover:underline">Request a language →</Link>
      </div>
    </div>
  );
}
