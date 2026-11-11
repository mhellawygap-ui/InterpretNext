"use client";

import { useEffect, useState, type FormEvent } from "react";
import { DOC_OPTIONS, LEGAL_DOCS } from "@/data/trust";

const EVENT = "interpretnext:request-doc";

/** Grid of legal document cards; request CTAs pre-tick the matching box in the form. */
export function LegalDocGrid() {
  const request = (doc: string | null) => {
    if (doc) window.dispatchEvent(new CustomEvent(EVENT, { detail: doc }));
    document.getElementById(doc ? "request-docs" : "accessibility")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LEGAL_DOCS.map((d) => (
        <li key={d.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
          <span aria-hidden className="text-2xl">{d.emoji}</span>
          <h3 className="mt-4 text-base font-semibold text-brand">{d.title}</h3>
          <p className="mt-2 text-sm leading-[1.5] text-muted">{d.body}</p>
          <button
            type="button"
            onClick={() => request(d.doc)}
            className="mt-auto w-fit pt-4 text-left text-sm font-medium text-accent-1 hover:underline"
          >
            {d.cta}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function DocRequestForm() {
  const [docs, setDocs] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onReq = (e: Event) => {
      const doc = (e as CustomEvent<string>).detail;
      setSent(false);
      setDocs((d) => (d.includes(doc) ? d : [...d, doc]));
    };
    window.addEventListener(EVENT, onReq);
    return () => window.removeEventListener(EVENT, onReq);
  }, []);

  const toggle = (doc: string) => setDocs((d) => (d.includes(doc) ? d.filter((x) => x !== doc) : [...d, doc]));

  // TODO(backend): no endpoint exists yet — wire this to the security team's inbox or CRM.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const input =
    "mt-2 h-11 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60";

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center">
        <p className="text-2xl" aria-hidden>✓</p>
        <p className="mt-2 text-lg font-semibold">Request received</p>
        <p className="mt-2 text-sm text-white/75">We respond within two business days with relevant documentation.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm underline">Send another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-7">
      <p className="text-base font-semibold">Request security documentation</p>
      <label className="mt-5 block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">
        Business email
        <input required type="email" name="email" autoComplete="email" placeholder="you@organization.com" className={input} />
      </label>
      <label className="mt-4 block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">
        Organization
        <input required name="organization" autoComplete="organization" placeholder="Company or agency name" className={input} />
      </label>
      <fieldset className="mt-4">
        <legend className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">Documents needed</legend>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {DOC_OPTIONS.map((d) => (
            <label key={d} className="flex items-center gap-2 text-[13px] text-white/85">
              <input type="checkbox" checked={docs.includes(d)} onChange={() => toggle(d)} className="size-4 accent-white" />
              {d}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="mt-6 h-11 w-full rounded-lg bg-white text-sm font-semibold text-brand hover:bg-lilac">
        Send request
      </button>
      <p className="mt-3 text-center text-[11px] text-white/60">We respond within two business days with relevant documentation.</p>
    </form>
  );
}
