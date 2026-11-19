"use client";

import Link from "next/link";
import { scrollToEl } from "@/lib/motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  COUNTRIES,
  DECISION_TIMELINE,
  DURATIONS,
  FREQUENCIES,
  HEAR_ABOUT,
  INDUSTRIES,
  MODALITY_OPTIONS,
  QUOTE_LANGUAGES,
  ROLES,
  SCHEDULING,
  SUBJECTS,
  TIME_ZONES,
  URGENCY,
  VOLUMES,
  type ModalityId,
} from "@/data/quote";

const STEPS = ["Service", "Language and dialect", "Date and timing", "Your details"];
const STEP_LABELS = ["Choose a service", "Language and dialect", "Date and timing", "Your details"];

type Form = {
  modality: ModalityId | "";
  subject: string;
  language: string;
  otherLanguage: string;
  country: string;
  industry: string;
  urgency: string;
  startDate: string;
  startTime: string;
  timeZone: string;
  duration: string;
  volume: string;
  frequency: string;
  scheduling: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  decision: string;
  hearAbout: string;
  consent: boolean;
};

const EMPTY: Form = {
  modality: "",
  subject: "",
  language: "",
  otherLanguage: "",
  country: "",
  industry: "",
  urgency: "",
  startDate: "",
  startTime: "",
  timeZone: "",
  duration: "",
  volume: "",
  frequency: "",
  scheduling: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  role: "",
  decision: "",
  hearAbout: "",
  consent: false,
};

type Errors = Partial<Record<keyof Form, string>>;

const DRAFT_KEY = "interpretnext:quote-draft-v2";

const REGION_TO_COUNTRY: Record<string, string> = {
  US: "United States", CA: "Canada", GB: "United Kingdom", IE: "Ireland", AE: "United Arab Emirates",
  SA: "Saudi Arabia", EG: "Egypt", AU: "Australia",
};

/** The visitor's time zone, used as the default for the session time zone. */
function localTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  } catch {
    return "";
  }
}

/** Best-guess default for the country dropdown from the browser locale. */
function countryFromLocale(): string {
  try {
    const region = new Intl.Locale(navigator.language).maximize().region ?? "";
    return REGION_TO_COUNTRY[region] ?? "";
  } catch {
    return "";
  }
}

function validate(step: number, f: Form): Errors {
  const e: Errors = {};
  if (step === 0 && !f.modality) e.modality = "Choose a service, or choose “Not sure yet”.";
  if (step === 1 && !f.language.trim()) e.language = "Enter the language and, if you know it, the dialect. For example: Arabic, Sudanese.";
  if (step === 2 && !f.urgency) e.urgency = "Tell us whether this is urgent.";
  if (step === 3) {
    if (!f.firstName.trim()) e.firstName = "Enter your first name so the specialist can address you.";
    if (!f.lastName.trim()) e.lastName = "Enter your last name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter an email like name@organization.com. We send your quote there.";
    if (!f.organization.trim()) e.organization = "Enter your organization so we route you to the right team.";
    if (!f.consent) e.consent = "Accept the privacy terms so we can contact you about this quote.";
  }
  return e;
}

/* ---------- small form primitives ---------- */

function Label({ children, optional, htmlFor }: { children: ReactNode; optional?: boolean; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-brand">
      {children} {optional && <span className="font-normal text-muted">(optional)</span>}
    </label>
  );
}

function FieldError({ msg, id }: { msg?: string; id?: string }) {
  return msg ? (
    <p id={id} role="alert" className="mt-1.5 text-xs text-accent-2">
      {msg}
    </p>
  ) : null;
}

const inputCls =
  "mt-2 h-11 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-accent-1 focus:ring-2 focus:ring-accent-1/20";

function TextField({
  id, label, optional, value, onChange, placeholder, type = "text", error, autoComplete, onBlur, onFocus,
}: {
  id: string; label: string; optional?: boolean; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; error?: string; autoComplete?: string;
  onBlur?: () => void; onFocus?: () => void;
}) {
  return (
    <div>
      <Label htmlFor={id} optional={optional}>{label}</Label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${inputCls} ${error ? "!border-accent-2" : ""}`}
      />
      <FieldError id={`${id}-err`} msg={error} />
    </div>
  );
}

function SelectField({
  id, label, optional, value, onChange, options, placeholder,
}: {
  id: string; label: string; optional?: boolean; value: string; onChange: (v: string) => void;
  options: string[]; placeholder: string;
}) {
  return (
    <div>
      <Label htmlFor={id} optional={optional}>{label}</Label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputCls} ${value ? "" : "text-muted"}`}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}


function ChoiceCard({
  selected, onClick, children, className = "",
}: { selected: boolean; onClick: () => void; children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`relative flex flex-col items-start rounded-xl border p-4 text-left ${
        selected ? "border-accent-1 bg-lilac/40 ring-1 ring-accent-1" : "border-border bg-card hover:border-accent-1"
      } ${className}`}
    >
      {selected && (
        <span aria-hidden className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-accent-1 text-xs text-white">✓</span>
      )}
      {children}
    </button>
  );
}

function StepHeader({ n, title, lead }: { n: number; title: string; lead: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-1">Step {n}</p>
      <h2 className="font-display-wonk mt-2 text-[30px] leading-[1.15] font-bold text-brand sm:text-[36px]">{title}</h2>
      <p className="mt-3 text-[15px] leading-[1.45] text-muted">{lead}</p>
    </div>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <div aria-hidden className="flex items-center gap-1.5">
      {STEPS.map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full ${
            i < step ? "w-6 bg-[#22a45a]" : i === step ? "w-6 bg-accent-1" : "w-1.5 bg-border"
          }`}
        />
      ))}
    </div>
  );
}


/* ---------- main ---------- */

export function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [f, setF] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const cardRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setF((prev) => ({ ...prev, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  /** Validate one field on blur (never while the user is still typing). */
  const blurCheck = (k: keyof Form) => () => {
    const msg = validate(step, f)[k];
    if (msg) setErrors((e) => ({ ...e, [k]: msg }));
  };
  const clearOnFocus = (k: keyof Form) => () => setErrors((e) => ({ ...e, [k]: undefined }));

  const [restored, setRestored] = useState(false);

  // Restore an unfinished draft, infer the country from the browser locale,
  // and honour ?modality=… deep links from the Services pages.
  useEffect(() => {
    let next: Form = EMPTY;
    let nextStep = 0;
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const d = JSON.parse(raw) as { f: Form; step: number };
        next = { ...EMPTY, ...d.f };
        nextStep = Math.min(Math.max(d.step ?? 0, 0), 3);
      }
    } catch {
      /* storage unavailable — start fresh */
    }
    if (!next.country) next = { ...next, country: countryFromLocale() };
    if (!next.timeZone) next = { ...next, timeZone: localTimeZone() };
    const m = new URLSearchParams(window.location.search).get("modality");
    if (m && MODALITY_OPTIONS.some((o) => o.id === m)) next = { ...next, modality: m as ModalityId };
    setF(next);
    setStep(nextStep);
    setRestored(true);
  }, []);

  // Auto-save the draft so a refresh or accidental navigation loses nothing.
  useEffect(() => {
    if (!restored || done) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ f, step }));
    } catch {
      /* ignore */
    }
  }, [f, step, restored, done]);

  const startOver = () => {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* ignore */
    }
    setF({ ...EMPTY, country: countryFromLocale(), timeZone: localTimeZone() });
    setErrors({});
    setStep(0);
  };

  const go = (next: number) => {
    setStep(next);
    setErrors({});
    requestAnimationFrame(() => scrollToEl(cardRef.current));
  };

  const next = () => {
    const e = validate(step, f);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (step < 3) go(step + 1);
    else {
      // TODO(backend): no endpoint exists yet — POST `f` to the CRM / sales inbox here.
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {
        /* ignore */
      }
      setDone(true);
      requestAnimationFrame(() => scrollToEl(document.body));
    }
  };

  const modalityTitle = MODALITY_OPTIONS.find((o) => o.id === f.modality)?.title;

  if (done) {
    const langs = [f.language.trim(), f.otherLanguage.trim()].filter(Boolean).join("; ");
    const when = [f.startDate, f.startTime, f.timeZone].filter(Boolean).join(" ");
    const rows: [string, string][] = [
      ["Service", modalityTitle ?? "—"],
      ["Language", langs || "—"],
      ["Subject", f.subject || "—"],
      ["When", when || "—"],
      ["Duration", f.duration || "—"],
      ["Urgent", URGENCY.find((u) => u.id === f.urgency)?.title ?? "—"],
      ["Contact", `${f.firstName} ${f.lastName} · ${f.email}`],
      ["Organization", f.organization || "—"],
    ];
    return (
      <Container className="py-10 lg:!px-[112px]">
        <div role="status" className="mx-auto max-w-[740px] rounded-2xl bg-[#f4f2fa] px-6 py-12 text-center sm:px-14">
          <span aria-hidden className="bg-brand-gradient mx-auto flex size-[72px] items-center justify-center rounded-full text-3xl text-white">✓</span>
          <h1 className="font-display-wonk mt-6 text-[32px] leading-[1.15] font-bold text-brand sm:text-[39px]">Thank you. Your request is with our team.</h1>
          <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.5] text-muted">
            A specialist will reply with a quote and the interpreter profile we propose.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-left">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted">What we received</p>
            <dl className="mt-4 grid grid-cols-[110px_1fr] gap-x-4 gap-y-2.5 text-sm">
              {rows.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-brand">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-10 text-xs font-semibold tracking-[0.12em] uppercase text-muted">What happens next</p>
          <ul className="mt-5 flex flex-col gap-5 text-left">
            {([
              ["routing", "A specialist reviews it", "Your request goes to our sales and project team, and to no one else."],
              ["email", "You receive a quote", "With the interpreter profile we propose for your language, dialect and subject."],
              ["callback", "You approve online", "Then share any materials, and we assign the interpreter and send the meeting link."],
            ] as [IconName, string, string][]).map(([e, t, b]) => (
              <li key={t} className="flex gap-4">
                <Icon name={e} size={36} />
                <div>
                  <p className="text-sm font-semibold text-brand">{t}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{b}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex h-11 items-center rounded-lg bg-brand px-5 text-sm font-semibold text-white hover:bg-accent-1">Back to InterpretNext</Link>
            <Link href="/services/" className="inline-flex h-11 items-center rounded-lg border border-lilac-strong bg-card px-5 text-sm font-semibold text-accent-1">Explore services</Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <>
      <PageIntro
        label="Request a quote"
        title="Tell us what you need"
        lead="Tell us what you need. A specialist replies with a quote and a proposed interpreter profile."
      >
        <ol className="flex flex-wrap items-center gap-2" aria-label="Quote steps">
          {STEPS.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span
                aria-current={i === step ? "step" : undefined}
                className={`rounded-full border px-3 py-1.5 text-[13px] font-medium ${
                  i === step ? "border-brand bg-brand text-white" : i < step ? "border-[#cdebd9] bg-mint text-success-ink" : "border-border text-muted"
                }`}
              >
                {i + 1}. {s}
              </span>
              {i < STEPS.length - 1 && <span aria-hidden className="text-subtle">›</span>}
            </li>
          ))}
        </ol>
      </PageIntro>

      <Container className="pb-12 lg:!px-[160px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:gap-7">
          <div ref={cardRef} className="scroll-mt-32">
            <div className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3.5">
              <div className="flex items-center gap-4">
                <Progress step={step} />
                <span className="text-sm text-muted">Step {step + 1} of 4</span>
              </div>
              <span className="text-sm font-semibold text-brand">{STEP_LABELS[step]}</span>
            </div>

            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                next();
              }}
              className="mt-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              {step === 0 && (
                <div className="flex flex-col gap-8">
                  <StepHeader
                    n={1}
                    title="What do you need?"
                    lead={'Choose the service that fits your situation. If you are not sure, choose "Not sure yet" and we will recommend one.'}
                  />
                  <div>
                    <div role="radiogroup" aria-label="Modality" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {MODALITY_OPTIONS.map((m) => (
                        <ChoiceCard key={m.id} selected={f.modality === m.id} onClick={() => set("modality", m.id)}>
                          <Icon name={m.icon} size={44} />
                          <span className="mt-3 text-base font-semibold text-brand">{m.title}</span>
                          <span className="mt-1 text-[13px] font-semibold text-accent-1">{m.tagline}</span>
                          <span className="mt-2 text-sm leading-[1.4] text-muted">{m.body}</span>
                        </ChoiceCard>
                      ))}
                    </div>
                    <FieldError msg={errors.modality} />
                  </div>
                  <div className="rounded-xl bg-[#f4f2fa] p-5">
                    <p className="text-sm font-semibold text-brand">Subject area</p>
                    <div role="radiogroup" aria-label="Subject area" className="mt-4 flex flex-wrap gap-2">
                      {SUBJECTS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          role="radio"
                          aria-checked={f.subject === s}
                          onClick={() => set("subject", s)}
                          className={`min-h-11 rounded-full border px-4 py-2 text-sm ${f.subject === s ? "border-accent-1 bg-white text-brand ring-1 ring-accent-1" : "border-border bg-white text-foreground hover:border-accent-1"}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-col gap-7">
                  <StepHeader n={2} title="Language and dialect" lead="Tell us the language and, if you know it, the dialect or where the speaker is from. We match the dialect as well as the language." />
                  <div>
                    <Label htmlFor="language">Language and dialect</Label>
                    <input
                      id="language"
                      list="quote-languages"
                      value={f.language}
                      onChange={(e) => set("language", e.target.value)}
                      onBlur={blurCheck("language")}
                      onFocus={clearOnFocus("language")}
                      placeholder="Example: Arabic, Sudanese"
                      autoComplete="off"
                      aria-invalid={!!errors.language}
                      aria-describedby={errors.language ? "language-error" : "language-hint"}
                      className={inputCls}
                    />
                    <datalist id="quote-languages">
                      {QUOTE_LANGUAGES.map((l) => (
                        <option key={l} value={l} />
                      ))}
                    </datalist>
                    <p id="language-hint" className="mt-1.5 text-xs text-muted">Start typing to pick from our language list, or write your own.</p>
                    <FieldError id="language-error" msg={errors.language} />
                  </div>
                  <TextField
                    id="other-language"
                    label="Another language for the same session"
                    optional
                    value={f.otherLanguage}
                    onChange={(v) => set("otherLanguage", v)}
                    placeholder="Example: Tigrinya, Eritrean"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField id="country" label="Country or location" value={f.country} onChange={(v) => set("country", v)} options={COUNTRIES} placeholder="Select country…" />
                    <SelectField id="industry" label="Your industry or sector" value={f.industry} onChange={(v) => set("industry", v)} options={INDUSTRIES} placeholder="Select industry…" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-7">
                  <StepHeader n={3} title="Date and timing" lead="Tell us when the session is, in your time zone, and how long you need." />
                  <div>
                    <p className="text-sm font-semibold text-brand">Is this urgent?</p>
                    <div role="radiogroup" aria-label="Urgency" className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {URGENCY.map((u) => (
                        <ChoiceCard key={u.id} selected={f.urgency === u.id} onClick={() => set("urgency", u.id)}>
                          <Icon name={u.icon} size={36} />
                          <span className="mt-2 text-sm font-semibold text-brand">{u.title}</span>
                          <span className="text-xs text-muted">{u.sub}</span>
                        </ChoiceCard>
                      ))}
                    </div>
                    <FieldError msg={errors.urgency} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField id="start-date" label="Date" optional type="date" value={f.startDate} onChange={(v) => set("startDate", v)} />
                    <TextField id="start-time" label="Time" optional type="time" value={f.startTime} onChange={(v) => set("startTime", v)} />
                    <SelectField id="time-zone" label="Time zone" value={f.timeZone} onChange={(v) => set("timeZone", v)} options={TIME_ZONES.includes(f.timeZone) || !f.timeZone ? TIME_ZONES : [f.timeZone, ...TIME_ZONES]} placeholder="Select time zone…" />
                    <SelectField id="duration" label="Expected duration" value={f.duration} onChange={(v) => set("duration", v)} options={DURATIONS} placeholder="Select duration…" />
                    <SelectField id="volume" label="Estimated monthly volume" value={f.volume} onChange={(v) => set("volume", v)} options={VOLUMES} placeholder="Select volume…" />
                    <SelectField id="frequency" label="How often do you need interpretation?" value={f.frequency} onChange={(v) => set("frequency", v)} options={FREQUENCIES} placeholder="Select frequency…" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand">Is this a one-off or ongoing need?</p>
                    <div role="radiogroup" aria-label="Scheduling" className="mt-3 grid gap-3 sm:grid-cols-3">
                      {SCHEDULING.map((s) => (
                        <ChoiceCard key={s.id} selected={f.scheduling === s.id} onClick={() => set("scheduling", s.id)}>
                          <Icon name={s.icon} size={36} />
                          <span className="mt-2 text-sm font-semibold text-brand">{s.title}</span>
                          <span className="mt-1 text-xs leading-[1.45] text-muted">{s.body}</span>
                        </ChoiceCard>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <StepHeader n={4} title="Your details" lead="We use your business contact to route your quote to the right team and set a realistic response timeline." />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField onBlur={blurCheck("firstName")} onFocus={clearOnFocus("firstName")} id="first-name" label="First name" autoComplete="given-name" value={f.firstName} onChange={(v) => set("firstName", v)} placeholder="Alex" error={errors.firstName} />
                    <TextField onBlur={blurCheck("lastName")} onFocus={clearOnFocus("lastName")} id="last-name" label="Last name" autoComplete="family-name" value={f.lastName} onChange={(v) => set("lastName", v)} placeholder="Johnson" error={errors.lastName} />
                    <TextField onBlur={blurCheck("email")} onFocus={clearOnFocus("email")} id="email" label="Business email" type="email" autoComplete="email" value={f.email} onChange={(v) => set("email", v)} placeholder="alex@organization.com" error={errors.email} />
                    <TextField id="phone" label="Phone number" optional type="tel" autoComplete="tel" value={f.phone} onChange={(v) => set("phone", v)} placeholder="+1 (555) 000-0000" />
                    <TextField onBlur={blurCheck("organization")} onFocus={clearOnFocus("organization")} id="organization" label="Organization name" autoComplete="organization" value={f.organization} onChange={(v) => set("organization", v)} placeholder="Your hospital, firm, or company" error={errors.organization} />
                    <SelectField id="role" label="Your role" value={f.role} onChange={(v) => set("role", v)} options={ROLES} placeholder="Select role…" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand">When do you expect to make a decision?</p>
                    <div role="radiogroup" aria-label="Decision timeline" className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {DECISION_TIMELINE.map((d) => (
                        <button
                          key={d}
                          type="button"
                          role="radio"
                          aria-checked={f.decision === d}
                          onClick={() => set("decision", d)}
                          className={`min-h-11 rounded-lg border px-3 py-2 text-left text-[13px] ${
                            f.decision === d ? "border-accent-1 bg-lilac/40 text-brand ring-1 ring-accent-1" : "border-border bg-card text-foreground hover:border-accent-1"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                  <SelectField id="hear-about" label="How did you hear about InterpretNext?" optional value={f.hearAbout} onChange={(v) => set("hearAbout", v)} options={HEAR_ABOUT} placeholder="Select…" />
                  <div className={`rounded-xl bg-[#f4f2fa] p-5 ${errors.consent ? "ring-1 ring-accent-2" : ""}`}>
                    <label className="flex gap-3 text-[13px] leading-[1.55] text-muted">
                      <input
                        type="checkbox"
                        checked={f.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                        className="mt-0.5 size-4 shrink-0 accent-[#6528cb]"
                      />
                      <span>
                        I agree to InterpretNext&apos;s{" "}
                        <Link href="/trust-center/#legal-documents" className="text-accent-1 underline">Privacy Policy</Link> and consent to being contacted about my quote request. I understand my data will be handled in line with applicable privacy laws.
                      </span>
                    </label>
                    <FieldError msg={errors.consent} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <p className="mt-6 flex items-center gap-2 text-[13px] text-muted">
                  <svg aria-hidden viewBox="0 0 24 24" className="size-4 shrink-0 text-accent-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10.5" rx="2.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                  Your request is confidential and is seen only by our sales and project team.
                </p>
              )}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                {step > 0 ? (
                  <button type="button" onClick={() => go(step - 1)} className="tap text-sm font-medium text-brand hover:text-accent-1">
                    ← Back
                  </button>
                ) : (
                  <span aria-hidden className="invisible text-sm">← Back</span>
                )}
                <button type="submit" className="inline-flex h-11 items-center rounded-lg bg-brand px-5 text-sm font-semibold text-white hover:bg-accent-1">
                  {step < 3 ? "Continue →" : "Send request →"}
                </button>
              </div>
            </form>
            <div aria-hidden className="mt-5 flex justify-center">
              <Progress step={step} />
            </div>
          </div>

          <aside className="flex flex-col gap-5 lg:pt-0">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="flex items-center gap-3 text-sm font-semibold text-brand"><Icon name="support" size={36} /> Need help?</p>
              <p className="mt-2 text-[13px] leading-[1.5] text-muted">Prefer to speak with someone instead? Book a consultation directly.</p>
              <button
                type="button"
                onClick={() => {
                  set("modality", "unsure");
                  go(0);
                }}
                className="mt-4 h-11 w-full rounded-lg border border-border text-sm font-medium text-accent-1 hover:border-accent-1"
              >
                Book a consultation
              </button>
            </div>
            <button type="button" onClick={startOver} className="tap w-fit text-left text-sm font-medium text-accent-1 underline">
              Clear this form and start over
            </button>
            <p className="text-[13px] leading-[1.5] text-muted">
              InterpretNext is an interpreting brand by bayanTech. Submitting this form does not constitute a binding contract. A specialist will confirm scope, pricing, and availability before any agreement is made.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
