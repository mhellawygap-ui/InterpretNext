"use client";

import { useEffect, useId, useState, type FormEvent } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "date";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  /** span both columns */
  full?: boolean;
  hint?: string;
};

const EMAIL = /^\S+@\S+\.\S+$/;

function errorFor(f: Field, v: string) {
  if (f.required && !v.trim()) return `Enter ${f.label.toLowerCase()}.`;
  if (f.type === "email" && v && !EMAIL.test(v)) return "Enter an email like name@organization.com.";
  return undefined;
}

/**
 * Generic lead form (request a language, contact, portal access).
 * Validates on blur, clears on focus, keeps a draft in localStorage, never disables submit.
 * TODO(backend): no endpoint yet — wire `onSubmit` to the CRM / inbox.
 */
export function LeadForm({
  id,
  fields,
  submitLabel,
  successTitle,
  successBody,
  initial = {},
}: {
  id: string;
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  initial?: Record<string, string>;
}) {
  const uid = useId();
  const draftKey = `interpretnext:form:${id}`;
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [sent, setSent] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let v: Record<string, string> = {};
    try {
      v = JSON.parse(localStorage.getItem(draftKey) ?? "{}");
    } catch {
      /* ignore */
    }
    setValues({ ...v, ...Object.fromEntries(Object.entries(initial).filter(([, x]) => x)) });
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftKey, JSON.stringify(initial)]);

  useEffect(() => {
    if (!ready || sent) return;
    try {
      localStorage.setItem(draftKey, JSON.stringify(values));
    } catch {
      /* ignore */
    }
  }, [values, ready, sent, draftKey]);

  const set = (name: string, v: string) => {
    setValues((x) => ({ ...x, [name]: v }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string | undefined> = {};
    fields.forEach((f) => (next[f.name] = errorFor(f, values[f.name] ?? "")));
    setErrors(next);
    const first = fields.find((f) => next[f.name]);
    if (first) {
      document.getElementById(`${uid}-${first.name}`)?.focus();
      return;
    }
    try {
      localStorage.removeItem(draftKey);
    } catch {
      /* ignore */
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-border bg-white p-8">
        <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-mint text-xl text-success-ink">✓</span>
        <p className="mt-4 text-xl font-semibold text-brand">{successTitle}</p>
        <p className="mt-2 text-base text-muted">{successBody}</p>
        <button
          type="button"
          onClick={() => {
            setValues({});
            setSent(false);
          }}
          className="tap mt-6 text-sm font-semibold text-accent-1 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  const input =
    "mt-2 w-full rounded-xl border bg-white px-4 text-base text-foreground outline-none placeholder:text-subtle focus:border-accent-1 focus:ring-4 focus:ring-accent-1/10";

  return (
    <form noValidate onSubmit={submit} className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const fid = `${uid}-${f.name}`;
          const err = errors[f.name];
          const common = {
            id: fid,
            name: f.name,
            value: values[f.name] ?? "",
            autoComplete: f.autoComplete,
            "aria-invalid": !!err,
            "aria-describedby": err ? `${fid}-err` : f.hint ? `${fid}-hint` : undefined,
            onFocus: () => setErrors((x) => ({ ...x, [f.name]: undefined })),
            onBlur: () => setErrors((x) => ({ ...x, [f.name]: errorFor(f, values[f.name] ?? "") })),
          };
          const cls = `${input} ${err ? "border-[#c0124f]" : "border-border-strong"}`;
          return (
            <div key={f.name} className={f.full || f.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={fid} className="text-[15px] font-semibold text-brand">
                {f.label} {!f.required && <span className="font-normal text-subtle">(optional)</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea {...common} rows={4} placeholder={f.placeholder} onChange={(e) => set(f.name, e.target.value)} className={`${cls} py-3`} />
              ) : f.type === "select" ? (
                <select {...common} onChange={(e) => set(f.name, e.target.value)} className={`${cls} h-12`}>
                  <option value="">Select…</option>
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input {...common} type={f.type ?? "text"} placeholder={f.placeholder} onChange={(e) => set(f.name, e.target.value)} className={`${cls} h-12`} />
              )}
              {f.hint && !err && (
                <p id={`${fid}-hint`} className="mt-1.5 text-[13px] text-subtle">{f.hint}</p>
              )}
              {err && (
                <p id={`${fid}-err`} role="alert" className="mt-1.5 text-[13px] font-medium text-[#a3104a]">{err}</p>
              )}
            </div>
          );
        })}
      </div>
      <button type="submit" className="tap mt-6 inline-flex h-12 items-center rounded-[10px] bg-brand px-6 text-base font-semibold text-white hover:bg-[#1c2270]">
        {submitLabel}
      </button>
      <p className="mt-4 text-[13px] text-subtle">We use these details only to respond to your request.</p>
    </form>
  );
}
