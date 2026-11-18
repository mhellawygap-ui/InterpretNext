import Link from "next/link";
import { COMPARISON, ENGAGEMENTS, PLATFORM, SESSION_STEPS, TESTIMONIAL } from "@/data/content";
import { SECTORS } from "@/data/industries";
import { LATER, SERVICES, type ServiceItem } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

/* ---------- Services ---------- */
export function ServiceCard({ s, detailed = false }: { s: ServiceItem; detailed?: boolean }) {
  return (
    <article id={detailed ? s.id : undefined} className="flex scroll-mt-28 flex-col rounded-2xl border border-border bg-white p-7 hover:border-border-strong">
      <Icon name={s.icon} size={48} />
      <h3 className="mt-6 text-xl font-semibold text-brand">{s.title}</h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-muted">{detailed ? s.summary : s.bestFor}</p>
      {detailed && (
        <>
          <p className="mt-4 text-[15px] text-brand">
            <span className="font-semibold">Best for:</span> {s.bestFor}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-muted">
            {s.useCases.map((u) => (
              <li key={u} className="flex items-center gap-2">
                <span aria-hidden className="size-1 rounded-full bg-accent-1" />
                {u}
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-[15px] font-semibold">
        {!detailed && (
          <Link href={`/services/#${s.id}`} className="tap text-accent-1 hover:underline" aria-label={`Learn more about ${s.title}`}>
            Learn more →
          </Link>
        )}
        {detailed && (
          <Link href={`/get-quote/?modality=${s.quote}`} className="tap text-accent-1 hover:underline" aria-label={`Request a quote for ${s.title}`}>
            Request a quote →
          </Link>
        )}
      </div>
    </article>
  );
}

export function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <ServiceCard key={s.id} s={s} detailed={detailed} />
      ))}
    </div>
  );
}

export function LaterList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LATER.map((l) => (
        <li key={l.title} className="rounded-2xl border border-dashed border-border-strong bg-white p-6">
          <div className="flex items-center justify-between">
            <Icon name={l.icon} size={40} />
            <Badge>Later release</Badge>
          </div>
          <p className="mt-5 font-semibold text-brand">{l.title}</p>
          <p className="mt-1.5 text-sm leading-[1.55] text-muted">{l.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ---------- How a session works ---------- */
export function SessionSteps() {
  return (
    <ol className="grid gap-8 md:grid-cols-5 md:gap-6">
      {SESSION_STEPS.map((s, i) => (
        <li key={s.title} className="relative">
          <div className="flex items-center gap-3">
            <Icon name={s.icon} size={44} />
            <span className="text-sm font-semibold text-subtle">Step {i + 1}</span>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-brand">{s.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Platform features ---------- */
export function PlatformFeatures() {
  return (
    <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      {PLATFORM.features.map((f) => (
        <li key={f.title} className="flex gap-4">
          <Icon name={f.icon} size={44} />
          <div>
            <p className="font-semibold text-brand">{f.title}</p>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{f.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Industries ---------- */
export function IndustryGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SECTORS.map((s) => (
        <li key={s.id}>
          <Link href={`/industries/#${s.id}`} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 hover:border-border-strong">
            <div className="flex items-center justify-between">
              <Icon name={s.icon} size={44} />
              {s.later && <Badge>Later release</Badge>}
            </div>
            <p className="mt-5 font-semibold text-brand">{s.label}</p>
            <p className="mt-1.5 text-sm leading-[1.55] text-muted">{s.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Category comparison ---------- */
function Mark({ v }: { v: "yes" | "varies" | "no" }) {
  if (v === "yes")
    return (
      <span className="inline-flex items-center gap-1.5 text-success-ink">
        <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
        <span className="sr-only">Yes</span>
      </span>
    );
  if (v === "varies") return <span className="text-sm text-muted">Varies</span>;
  return (
    <span className="text-subtle">
      <span aria-hidden>—</span>
      <span className="sr-only">No</span>
    </span>
  );
}

export function ComparisonTable() {
  return (
    <div>
      <div role="region" aria-label="Comparison table, scrolls sideways on small screens" tabIndex={0} className="relative overflow-x-auto rounded-2xl border border-border bg-white">
        <table className="w-full min-w-[720px] text-left">
          <caption className="sr-only">How InterpretNext compares with other types of language provider</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="px-6 py-5 text-sm font-semibold text-muted">Capability</th>
              {COMPARISON.columns.map((c, i) => (
                <th key={c} scope="col" className={`px-4 py-5 text-sm font-semibold ${i === 0 ? "bg-lilac/50 text-brand" : "text-muted"}`}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {COMPARISON.rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-6 py-4 text-[15px] font-medium text-brand">{r.label}</th>
                {r.values.map((v, i) => (
                  <td key={i} className={`px-4 py-4 ${i === 0 ? "bg-lilac/50" : ""}`}><Mark v={v} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[13px] text-subtle">{COMPARISON.note}</p>
    </div>
  );
}

/* ---------- Testimonial + engagements ---------- */
export function Testimonial() {
  return (
    <figure className="rounded-2xl border border-border bg-white p-8 md:p-12">
      <svg aria-hidden viewBox="0 0 32 32" className="size-8 text-accent-1" fill="currentColor"><path d="M13 6H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5c0 3-1.5 5-5 6v3c6-1 9-5 9-11V8a2 2 0 0 0-2-2Zm15 0h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5c0 3-1.5 5-5 6v3c6-1 9-5 9-11V8a2 2 0 0 0-2-2Z" /></svg>
      <blockquote className="font-display-wonk mt-6 text-[24px] leading-[1.35] font-medium text-brand md:text-[28px]">“{TESTIMONIAL.quote}”</blockquote>
      <figcaption className="mt-8 text-[15px]">
        <span className="block font-semibold text-brand">{TESTIMONIAL.name}</span>
        <span className="text-muted">{TESTIMONIAL.org}</span>
      </figcaption>
    </figure>
  );
}

export function Engagements() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {ENGAGEMENTS.map((e) => (
        <li key={e.title} className="rounded-2xl border border-border bg-white p-6">
          <div className="flex items-center gap-3">
            <Icon name={e.icon} size={40} />
            <span className="text-sm font-semibold text-muted">{e.sector}</span>
          </div>
          <p className="mt-5 font-semibold text-brand">{e.title}</p>
          <p className="mt-2 text-[15px] leading-[1.6] text-muted">{e.body}</p>
        </li>
      ))}
    </ul>
  );
}
