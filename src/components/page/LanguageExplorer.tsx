"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { scrollToEl } from "@/lib/motion";
import {
  AVAILABILITIES,
  DOMAINS,
  LANGUAGES,
  MODALITIES,
  REGION_CARDS,
  REGIONS,
  domainsFor,
  type Region,
} from "@/data/languages";
import { AvailabilityBadge, Chip } from "./Chip";
import { SectionTitle } from "./SectionTitle";

type FilterRowProps<T extends string> = {
  label: string;
  options: readonly T[];
  value: T | "All";
  onChange: (v: T | "All") => void;
  activeClass: string;
};

function FilterRow<T extends string>({ label, options, value, onChange, activeClass }: FilterRowProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold tracking-[0.06em] uppercase text-muted">{label}:</span>
      {(["All", ...options] as (T | "All")[]).map((o) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o)}
            className={`tap h-9 rounded-full border px-3 text-[13px] ${
              on ? `${activeClass} border-transparent text-white` : "border-border bg-card text-foreground hover:border-accent-1"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

const countBy = (r: Region) => LANGUAGES.filter((l) => l.region === r).length;

export function LanguageExplorer() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region | "All">("All");
  const [modality, setModality] = useState<(typeof MODALITIES)[number] | "All">("All");
  const [availability, setAvailability] = useState<(typeof AVAILABILITIES)[number] | "All">("All");
  const [domain, setDomain] = useState<(typeof DOMAINS)[number] | "All">("All");
  const directoryRef = useRef<HTMLElement>(null);

  // Deep links from the nav: /languages/?region=African#find-a-language
  useEffect(() => {
    const read = () => {
      const r = new URLSearchParams(window.location.search).get("region");
      if (r && (REGIONS as readonly string[]).includes(r)) setRegion(r as Region);
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LANGUAGES.filter(
      (l) =>
        (region === "All" || l.region === region) &&
        (modality === "All" || l.modalities.includes(modality)) &&
        (availability === "All" || l.availability === availability) &&
        (domain === "All" || domainsFor(l).includes(domain)) &&
        (!q || l.name.toLowerCase().includes(q) || l.native?.toLowerCase().includes(q)),
    );
  }, [query, region, modality, availability, domain]);

  const browse = (r: Region) => {
    setRegion(r);
    setQuery("");
    history.replaceState(null, "", `?region=${encodeURIComponent(r)}#find-a-language`);
    scrollToEl(directoryRef.current);
  };

  const reset = () => {
    setQuery("");
    setRegion("All");
    setModality("All");
    setAvailability("All");
    setDomain("All");
  };

  return (
    <>
      <section aria-labelledby="regions-title" className="pt-10">
        <SectionTitle
          title={<span id="regions-title">Where we run deepest</span>}
          lead="Our differentiation is rare-language depth—especially African and Middle Eastern language families that large providers underserve."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_CARDS.map((c) => (
            <li key={c.region} className="relative isolate flex min-h-[312px] flex-col overflow-hidden rounded-2xl p-6 text-white">
              <Image src={asset(c.image)} alt="" fill sizes="(min-width: 1024px) 420px, 100vw" className="-z-20 object-cover" />
              <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(40,20,140,0.92) 0%, rgba(101,40,203,0.72) 50%, rgba(243,47,126,0.85) 100%)" }}
              />
              <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.08em] uppercase">
                {countBy(c.region)} languages
              </span>
              <h3 className="font-display-wonk mt-2 text-[25px] font-bold">{c.region}</h3>
              <p className="mt-2 text-[15px] leading-[1.3] text-white/90">{c.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.chips.map((l) => (
                  <li key={l} className="rounded-full border border-white/40 px-2.5 py-0.5 text-xs">{l}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => browse(c.region)}
                className="tap mt-auto w-fit pt-5 text-left text-[13px] font-medium text-white/80 hover:text-white hover:underline"
              >
                Browse {c.region.toLowerCase()} languages →
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="find-a-language"
        ref={directoryRef}
        aria-labelledby="find-title"
        className="mt-14 scroll-mt-28 rounded-2xl border border-border bg-[#f4f2fa] p-4 shadow-[0_2px_16px_rgba(8,12,65,0.05)] sm:p-8"
      >
        <h2 id="find-title" className="font-display-wonk text-[25px] font-bold text-brand">Find a language</h2>
        <label className="relative mt-6 block">
          <span className="sr-only">Search languages</span>
          <svg aria-hidden viewBox="0 0 24 24" className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by language, dialect, or native name…"
            className="h-12 w-full rounded-lg border border-border bg-card pr-4 pl-11 text-sm outline-none focus:border-accent-1 focus:ring-2 focus:ring-accent-1/20"
          />
        </label>
        <div className="mt-5 flex flex-col gap-3">
          <FilterRow label="Region" options={REGIONS} value={region} onChange={setRegion} activeClass="bg-brand" />
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <FilterRow label="Modality" options={MODALITIES} value={modality} onChange={setModality} activeClass="bg-accent-1" />
            <FilterRow label="Availability" options={AVAILABILITIES} value={availability} onChange={setAvailability} activeClass="bg-filter-magenta" />
          </div>
          <FilterRow label="Domain" options={DOMAINS} value={domain} onChange={setDomain} activeClass="bg-filter-pink" />
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? "language" : "languages"} found
        </p>

        {results.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-border bg-card p-8 text-center">
            <p className="font-semibold text-brand">No languages match these filters.</p>
            <p className="mt-1 text-sm text-muted">Try fewer filters, or ask us—we source languages that aren&apos;t listed.</p>
            <div className="mt-4 flex justify-center gap-3">
              <button type="button" onClick={reset} className="h-11 rounded-lg border border-brand px-4 text-sm font-medium text-brand">Clear all filters</button>
              <a href={asset("/get-quote/")} className="inline-flex h-11 items-center rounded-lg bg-brand px-4 text-sm font-medium text-white">Request a language</a>
            </div>
          </div>
        ) : (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((l) => (
              <li key={l.name} className="flex flex-col rounded-xl border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-brand">{l.name}</p>
                    <p className="mt-0.5 h-5 truncate text-[13px] text-muted">{l.native}</p>
                  </div>
                  {l.featured && (
                    <span className="shrink-0 rounded-full bg-lilac px-2 py-0.5 text-xs font-semibold tracking-[0.06em] uppercase text-accent-1">
                      Featured
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <AvailabilityBadge value={l.availability} />
                  {l.speakers && <span className="text-xs text-muted">{l.speakers}</span>}
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Modalities">
                  {l.modalities.map((m) => (
                    <li key={m}><Chip className="!h-5 !px-2 !text-xs">{m}</Chip></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
