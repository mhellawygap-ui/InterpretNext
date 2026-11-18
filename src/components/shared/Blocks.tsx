import Link from "next/link";
import { COMPARISON, ENGAGEMENTS, PLATFORM, SESSION_STEPS, TESTIMONIAL } from "@/data/content";
import { SECTORS } from "@/data/industries";
import { LATER, SERVICES, type ServiceItem } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

function Chevron() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 3 5 5-5 5" />
    </svg>
  );
}

/* ---------- Services ---------- */
export function ServiceCard({ s, detailed = false, featured = false }: { s: ServiceItem; detailed?: boolean; featured?: boolean }) {
  const href = detailed ? `/get-quote/?modality=${s.quote}` : `/services/#${s.id}`;
  return (
    <article
      id={detailed ? s.id : undefined}
      className={`group lift relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border p-7 md:p-8 ${
        featured ? "border-transparent bg-glow text-white" : "border-border bg-white"
      }`}
    >
      <Icon name={s.icon} size={featured ? 56 : 48} />
      <h3 className={`mt-6 font-semibold ${featured ? "font-display-wonk text-[28px] leading-tight" : "text-xl text-brand"}`}>{s.title}</h3>
      <p className={`mt-3 text-[15px] leading-[1.65] ${featured ? "max-w-[46ch] text-white/80" : "text-muted"}`}>{detailed || featured ? s.summary : s.bestFor}</p>
      {(detailed || featured) && (
        <ul className={`mt-5 flex flex-wrap gap-2 text-[13px] ${featured ? "text-white/90" : "text-brand"}`}>
          {s.useCases.map((u) => (
            <li key={u} className={`rounded-full px-3 py-1 ${featured ? "bg-white/10 ring-1 ring-white/20" : "bg-surface ring-1 ring-border"}`}>{u}</li>
          ))}
        </ul>
      )}
      {detailed && (
        <p className="mt-5 text-[15px] text-brand">
          <span className="font-semibold">Best for:</span> {s.bestFor}
        </p>
      )}
      <Link
        href={href}
        className={`mt-auto inline-flex items-center gap-1.5 pt-7 text-[15px] font-semibold after:absolute after:inset-0 after:content-[''] ${featured ? "text-white" : "text-accent-1"}`}
        aria-label={detailed ? `Request a quote for ${s.title}` : `Learn more about ${s.title}`}
      >
        {detailed ? "Request a quote" : "Learn more"} <Chevron />
      </Link>
    </article>
  );
}

/** Home: one featured service, the rest in a grid. Services page: uniform detailed grid. */
export function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 60} className="h-full">
            <ServiceCard s={s} detailed />
          </Reveal>
        ))}
      </div>
    );
  }
  const [first, ...rest] = SERVICES;
  const grid = rest.slice(0, 4);
  const last = rest[4];
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Reveal className="lg:row-span-2">
        <ServiceCard s={first} featured />
      </Reveal>
      {grid.map((s, i) => (
        <Reveal key={s.id} delay={(i % 2) * 60} className="h-full">
          <ServiceCard s={s} />
        </Reveal>
      ))}
      {last && (
        <Reveal className="lg:col-span-3">
          <article className="group lift relative flex flex-col gap-5 rounded-3xl border border-border bg-white p-7 sm:flex-row sm:items-center md:p-8">
            <Icon name={last.icon} size={48} />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-brand">{last.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{last.summary}</p>
            </div>
            <Link href={`/services/#${last.id}`} className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-semibold text-accent-1 after:absolute after:inset-0 after:content-['']" aria-label={`Learn more about ${last.title}`}>
              Learn more <Chevron />
            </Link>
          </article>
        </Reveal>
      )}
    </div>
  );
}

export function LaterList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LATER.map((l) => (
        <li key={l.title} className="rounded-3xl border border-dashed border-border-strong bg-white/70 p-6">
          <div className="flex items-center justify-between">
            <Icon name={l.icon} size={40} />
            <Badge>Later release</Badge>
          </div>
          <p className="mt-5 font-semibold text-brand">{l.title}</p>
          <p className="mt-1.5 text-sm leading-[1.6] text-muted">{l.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ---------- How a session works: a real sequence, so it is numbered and connected ---------- */
export function SessionSteps() {
  return (
    <Reveal>
      <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
        <span aria-hidden className="absolute top-[27px] right-[10%] left-[10%] hidden h-[2px] bg-border md:block" />
        <span aria-hidden className="steps-fill bg-logo absolute top-[27px] right-[10%] left-[10%] hidden h-[2px] origin-left md:block" />
        {SESSION_STEPS.map((s, i) => (
          <li key={s.title} className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
            <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-[0_8px_20px_-12px_rgba(91,43,209,0.5)]">
              <Icon name={s.icon} size={40} />
            </span>
            <div className="md:mt-5">
              <p className="text-[13px] font-semibold text-accent-1">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted md:mx-auto md:max-w-[26ch]">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/* ---------- Platform features ---------- */
export function PlatformFeatures({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {PLATFORM.features.map((f, i) => (
        <Reveal as="li" key={f.title} delay={(i % 2) * 70} className={`flex gap-4 rounded-3xl p-6 ${dark ? "bg-white/[0.06] ring-1 ring-white/12" : "border border-border bg-white"}`}>
          <Icon name={f.icon} size={44} />
          <div>
            <p className={`font-semibold ${dark ? "text-white" : "text-brand"}`}>{f.title}</p>
            <p className={`mt-1.5 text-[15px] leading-[1.6] ${dark ? "text-white/75" : "text-muted"}`}>{f.body}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------- Industries ---------- */
export function IndustryGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SECTORS.map((s, i) => (
        <Reveal as="li" key={s.id} delay={(i % 4) * 50}>
          <Link href={`/industries/#${s.id}`} className="group lift flex h-full flex-col rounded-3xl border border-border bg-white p-6">
            <div className="flex items-center justify-between">
              <Icon name={s.icon} size={44} />
              {s.later ? <Badge>Later release</Badge> : <span className="text-accent-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"><Chevron /></span>}
            </div>
            <p className="mt-6 font-semibold text-brand">{s.label}</p>
            <p className="mt-1.5 text-sm leading-[1.6] text-muted">{s.title}</p>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------- Category comparison ---------- */
function Mark({ v, highlight }: { v: "yes" | "varies" | "no"; highlight?: boolean }) {
  if (v === "yes")
    return (
      <span className={`inline-flex size-7 items-center justify-center rounded-full ${highlight ? "bg-white text-accent-1" : "bg-mint text-success-ink"}`}>
        <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
        <span className="sr-only">Yes</span>
      </span>
    );
  if (v === "varies") return <span className="text-sm text-muted">Varies</span>;
  return (
    <span className="text-subtle">
      <span aria-hidden>–</span>
      <span className="sr-only">No</span>
    </span>
  );
}

export function ComparisonTable() {
  return (
    <Reveal>
      <div role="region" aria-label="Comparison table, scrolls sideways on small screens" tabIndex={0} className="relative overflow-x-auto rounded-3xl border border-border bg-white">
        <table className="w-full min-w-[760px] text-left">
          <caption className="sr-only">How InterpretNext compares with other types of language provider</caption>
          <thead>
            <tr>
              <th scope="col" className="px-6 py-5 text-sm font-semibold text-muted">Capability</th>
              {COMPARISON.columns.map((c, i) => (
                <th key={c} scope="col" className={`px-5 py-5 text-center text-sm font-semibold ${i === 0 ? "bg-accent-1 text-white" : "text-muted"}`}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map((r, ri) => (
              <tr key={r.label} className="border-t border-border">
                <th scope="row" className="px-6 py-4 text-[15px] font-medium text-brand">{r.label}</th>
                {r.values.map((v, i) => (
                  <td key={i} className={`px-5 py-4 text-center ${i === 0 ? `bg-accent-1 ${ri === COMPARISON.rows.length - 1 ? "" : "border-b border-white/15"}` : ""}`}>
                    <Mark v={v} highlight={i === 0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[13px] text-subtle">{COMPARISON.note}</p>
    </Reveal>
  );
}

/* ---------- Testimonial + engagements ---------- */
export function Testimonial() {
  return (
    <Reveal>
      <figure className="bg-glow relative overflow-hidden rounded-[28px] p-8 text-white md:p-14">
        <blockquote className="font-display-wonk relative max-w-[30ch] text-[26px] leading-[1.3] font-medium md:max-w-[34ch] md:text-[34px]">
          {TESTIMONIAL.quote}
        </blockquote>
        <figcaption className="relative mt-10 flex items-center gap-4">
          <span aria-hidden className="bg-logo flex size-12 items-center justify-center rounded-full text-base font-semibold">DP</span>
          <span>
            <span className="block font-semibold">{TESTIMONIAL.name}</span>
            <span className="text-white/70">{TESTIMONIAL.org}</span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function Engagements() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {ENGAGEMENTS.map((e, i) => (
        <Reveal as="li" key={e.title} delay={i * 60} className="rounded-3xl border border-border bg-white p-7">
          <div className="flex items-center gap-3">
            <Icon name={e.icon} size={40} />
            <span className="text-sm font-semibold text-muted">{e.sector}</span>
          </div>
          <p className="mt-6 text-lg font-semibold text-brand">{e.title}</p>
          <p className="mt-2 text-[15px] leading-[1.65] text-muted">{e.body}</p>
        </Reveal>
      ))}
    </ul>
  );
}
