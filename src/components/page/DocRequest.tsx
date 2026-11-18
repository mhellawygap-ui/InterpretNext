"use client";

import { useEffect, useState, type FormEvent } from "react";
import { DOC_OPTIONS, LEGAL_DOCS } from "@/data/trust";
import { Icon } from "@/components/ui/Icon";
import { scrollToEl } from "@/lib/motion";

const EVENT = "interpretnext:request-doc";
const DRAFT_KEY = "interpretnext:doc-request-draft";
const EMAIL = /^\S+@\S+\.\S+$/;

/** Legal document cards; request links pre-tick the matching box in the form below. */
export function LegalDocGrid() {
  const request = (doc: string | null) => {
    if (doc) window.dispatchEvent(new CustomEvent(EVENT, { detail: doc }));
    scrollToEl(document.getElementById(doc ? "request-docs" : "accessibility"));
  };
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {LEGAL_DOCS.map((d) => (
        <li key={d.title} className="flex flex-col rounded-2xl border border-border bg-white p-6">
          <Icon name={d.icon} size={44} />
          <h3 className="mt-5 font-semibold text-brand">{d.title}</h3>
          <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{d.body}</p>
          <button type="button" onClick={() => request(d.doc)} className="tap mt-auto w-fit pt-5 text-left text-[15px] font-semibold text-accent-1 hover:underline">
            {d.cta} →
          </button>
        </li>
      ))}
    </ul>
  );
}

export function DocRequestForm() {
  const [docs, setDocs] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [errors, setErrors] = useState<{ email?: string; org?: string }>({});
  const [sent, setSent] = useState(false);
  const [restored, setRestored] = useState(false);

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
    const onReq = (e: Event) => {
      const doc = (e as CustomEvent<string>).detail;
      setSent(false);
      setDocs((d) => (d.includes(doc) ? d : [...d, doc]));
    };
    window.addEventListener(EVENT, onReq);
    return () => window.removeEventListener(EVENT, onReq);
  }, []);

  useEffect(() => {
    if (!restored || sent) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ email, org, docs }));
    } catch {
      /* ignore */
    }
  }, [email, org, docs, restored, sent]);

  const check = (field: "email" | "org", v: string) => {
    if (field === "email" && !EMAIL.test(v)) return "Enter a business email like name@organization.com.";
    if (field === "org" && !v.trim()) return "Enter your organization so we can verify the request.";
    return undefined;
  };

  // TODO(backend): no endpoint yet — send to the security team inbox.
  const submit = (e: FormEvent) => {
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

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-border bg-white p-8">
        <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-mint text-xl text-success-ink">✓</span>
        <p className="mt-4 text-xl font-semibold text-brand">Request received</p>
        <p className="mt-2 text-base text-muted">We reply to verified business requests within two business days.</p>
        <button type="button" onClick={() => setSent(false)} className="tap mt-6 text-sm font-semibold text-accent-1 hover:underline">Send another request</button>
      </div>
    );
  }

  const input = "mt-2 h-12 w-full rounded-xl border bg-white px-4 text-base outline-none placeholder:text-subtle focus:border-accent-1 focus:ring-4 focus:ring-accent-1/10";
  return (
    <form noValidate onSubmit={submit} className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="doc-email" className="text-[15px] font-semibold text-brand">Business email</label>
          <input
            id="doc-email" type="email" autoComplete="email" placeholder="name@organization.com" value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((x) => ({ ...x, email: undefined })); }}
            onFocus={() => setErrors((x) => ({ ...x, email: undefined }))}
            onBlur={() => setErrors((x) => ({ ...x, email: check("email", email) }))}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "doc-email-err" : undefined}
            className={`${input} ${errors.email ? "border-[#c0124f]" : "border-border-strong"}`}
          />
          {errors.email && <p id="doc-email-err" role="alert" className="mt-1.5 text-[13px] font-medium text-[#a3104a]">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="doc-org" className="text-[15px] font-semibold text-brand">Organization</label>
          <input
            id="doc-org" autoComplete="organization" value={org}
            onChange={(e) => { setOrg(e.target.value); setErrors((x) => ({ ...x, org: undefined })); }}
            onFocus={() => setErrors((x) => ({ ...x, org: undefined }))}
            onBlur={() => setErrors((x) => ({ ...x, org: check("org", org) }))}
            aria-invalid={!!errors.org} aria-describedby={errors.org ? "doc-org-err" : undefined}
            className={`${input} ${errors.org ? "border-[#c0124f]" : "border-border-strong"}`}
          />
          {errors.org && <p id="doc-org-err" role="alert" className="mt-1.5 text-[13px] font-medium text-[#a3104a]">{errors.org}</p>}
        </div>
      </div>
      <fieldset className="mt-6">
        <legend className="text-[15px] font-semibold text-brand">Documents needed</legend>
        <div className="mt-3 grid gap-1 sm:grid-cols-2">
          {DOC_OPTIONS.map((d) => (
            <label key={d} className="flex min-h-11 items-center gap-3 text-[15px] text-brand">
              <input
                type="checkbox"
                checked={docs.includes(d)}
                onChange={() => setDocs((x) => (x.includes(d) ? x.filter((y) => y !== d) : [...x, d]))}
                className="size-5 accent-[#5b2bd1]"
              />
              {d}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="tap mt-6 inline-flex h-12 items-center rounded-[10px] bg-brand px-6 text-base font-semibold text-white hover:bg-[#1c2270]">
        Send request
      </button>
      <p className="mt-4 text-[13px] text-subtle">We reply to verified business requests within two business days.</p>
    </form>
  );
}
