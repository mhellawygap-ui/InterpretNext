"use client";

import { useEffect, useState, type FormEvent } from "react";
import { DOC_OPTIONS, LEGAL_DOCS } from "@/data/trust";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { scrollToEl } from "@/lib/motion";

const EVENT = "interpretnext:request-doc";

/** Grid of legal document cards; request CTAs pre-tick the matching box in the form. */
export function LegalDocGrid() {
  const request = (doc: string | null) => {
    if (doc) window.dispatchEvent(new CustomEvent(EVENT, { detail: doc }));
    scrollToEl(document.getElementById(doc ? "request-docs" : "accessibility"));
  };
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LEGAL_DOCS.map((d) => (
        <li key={d.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
          {"brand" in d ? <BrandIcon name="nda" size={40} /> : <span aria-hidden className="text-2xl">{d.emoji}</span>}
          <h3 className="mt-4 text-base font-semibold text-brand">{d.title}</h3>
          <p className="mt-2 text-sm leading-[1.5] text-muted">{d.body}</p>
          <button
            type="button"
            onClick={() => request(d.doc)}
            className="tap mt-auto w-fit pt-4 text-left text-sm font-medium text-accent-1 hover:underline"
          >
            {d.cta}
          </button>
        </li>
      ))}
    </ul>
  );
}

const DRAFT_KEY = "interpretnext:doc-request-draft";

export function DocRequestForm() {
  const [docs, setDocs] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [errors, setErrors] = useState<{ email?: string; org?: string }>({});
  const [sent, setSent] = useState(false);
  const [restored, setRestored] = useState(false);

  // Draft auto-save: a refresh never loses what was typed.
  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(DRAFT_KEY) ?? "null");
      if (d) {
        setEmail(d.email ?? "");
        setOrg(d.org ?? "");
        setDocs((cur) => Array.from(new Set([...(d.docs ?? []), ...cur])));
      }
    } catch {
      /* ignore */
    }
    setRestored(true);
  }, []);
  useEffect(() => {
    if (!restored || sent) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ email, org, docs }));
    } catch {
      /* ignore */
    }
  }, [email, org, docs, restored, sent]);

  const check = (field: "email" | "org", value: string) => {
    if (field === "email" && !/^\S+@\S+\.\S+$/.test(value))
      return "Enter a business email like you@organization.com so we can send the documents.";
    if (field === "org" && !value.trim()) return "Enter your organization so we can verify the request.";
    return undefined;
  };

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
    const next = { email: check("email", email), org: check("org", org) };
    setErrors(next);
    if (next.email || next.org) {
      document.getElementById(next.email ? "doc-email" : "doc-org")?.focus();
      return;
    }
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* ignore */
    }
    setSent(true);
  };

  const input =
    "mt-2 h-11 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/60";

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center">
        <p className="text-2xl" aria-hidden>✓</p>
        <p className="mt-2 text-lg font-semibold">Request received</p>
        <p className="mt-2 text-sm text-white/75">We respond within two business days with relevant documentation.</p>
        <button type="button" onClick={() => setSent(false)} className="tap mt-6 text-sm underline">Send another request</button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-7">
      <p className="text-base font-semibold">Request security documentation</p>
      <label htmlFor="doc-email" className="mt-5 block text-xs font-semibold tracking-[0.08em] uppercase text-white/80">
        Business email
      </label>
      <input
        id="doc-email" type="email" name="email" autoComplete="email" placeholder="you@organization.com"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setErrors((x) => ({ ...x, email: undefined })); }}
        onFocus={() => setErrors((x) => ({ ...x, email: undefined }))}
        onBlur={() => setErrors((x) => ({ ...x, email: check("email", email) }))}
        aria-invalid={!!errors.email} aria-describedby={errors.email ? "doc-email-err" : undefined}
        className={`${input} ${errors.email ? "!border-white" : ""}`}
      />
      {errors.email && <p id="doc-email-err" role="alert" className="mt-1.5 text-xs font-medium text-white">⚠ {errors.email}</p>}
      <label htmlFor="doc-org" className="mt-4 block text-xs font-semibold tracking-[0.08em] uppercase text-white/80">
        Organization
      </label>
      <input
        id="doc-org" name="organization" autoComplete="organization" placeholder="e.g. Riverside Health"
        value={org}
        onChange={(e) => { setOrg(e.target.value); setErrors((x) => ({ ...x, org: undefined })); }}
        onFocus={() => setErrors((x) => ({ ...x, org: undefined }))}
        onBlur={() => setErrors((x) => ({ ...x, org: check("org", org) }))}
        aria-invalid={!!errors.org} aria-describedby={errors.org ? "doc-org-err" : undefined}
        className={`${input} ${errors.org ? "!border-white" : ""}`}
      />
      {errors.org && <p id="doc-org-err" role="alert" className="mt-1.5 text-xs font-medium text-white">⚠ {errors.org}</p>}
      <fieldset className="mt-4">
        <legend className="text-xs font-semibold tracking-[0.08em] uppercase text-white/70">Documents needed</legend>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {DOC_OPTIONS.map((d) => (
            <label key={d} className="flex min-h-11 items-center gap-2 text-[13px] text-white/90">
              <input type="checkbox" checked={docs.includes(d)} onChange={() => toggle(d)} className="size-5 accent-white" />
              {d}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="mt-6 h-11 w-full rounded-lg bg-white text-sm font-semibold text-brand hover:bg-lilac">
        Send request
      </button>
      <p className="mt-3 text-center text-xs text-white/60">We respond within two business days with relevant documentation.</p>
    </form>
  );
}
