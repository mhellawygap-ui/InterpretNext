import Link from "next/link";
import { PLATFORM, SESSION_STEPS, TESTIMONIAL } from "@/data/content";
import { RELEASES } from "@/data/site";
import { TIERS } from "@/data/trust";
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
      <div className="flex items-start justify-between gap-3">
        <Icon name={s.icon} size={featured ? 56 : 48} />
        {RELEASES[s.release]?.status === "request" && <Badge tone={featured ? undefined : "violet"}>On request</Badge>}
      </div>
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

/** Home: one featured service, the rest beside it. Services page: uniform detailed grid. */
export function ServiceGrid({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 2) * 60} className="h-full">
            <ServiceCard s={s} detailed />
          </Reveal>
        ))}
      </div>
    );
  }
  const [first, ...rest] = SERVICES;
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Reveal className="lg:row-span-2">
        <ServiceCard s={first} featured />
      </Reveal>
      {rest.map((s, i) => (
        <Reveal key={s.id} delay={(i % 2) * 60} className={`h-full ${i === rest.length - 1 && rest.length % 2 === 1 ? "lg:col-span-2" : ""}`}>
          <ServiceCard s={s} />
        </Reveal>
      ))}
    </div>
  );
}

export function LaterList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
        <span aria-hidden className="absolute top-[27px] right-[12.5%] left-[12.5%] hidden h-[2px] bg-border md:block" />
        <span aria-hidden className="steps-fill bg-logo absolute top-[27px] right-[12.5%] left-[12.5%] hidden h-[2px] origin-left md:block" />
        {SESSION_STEPS.map((s, i) => (
          <li key={s.title} className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
            <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-[0_8px_20px_-12px_rgba(91,43,209,0.5)]">
              <Icon name={s.icon} size={40} />
            </span>
            <div className="md:mt-5">
              <p className="text-[13px] font-semibold text-accent-1">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted md:mx-auto md:max-w-[30ch]">{s.body}</p>
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
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {SECTORS.map((s, i) => (
        <Reveal as="li" key={s.id} delay={(i % 3) * 50}>
          <Link href={`/industries/#${s.id}`} className="group lift flex h-full flex-col rounded-3xl border border-border bg-white p-7">
            <div className="flex items-center justify-between">
              <Icon name={s.icon} size={44} />
              <span className="text-accent-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"><Chevron /></span>
            </div>
            <p className="mt-6 text-lg font-semibold text-brand">{s.label}</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-muted">{s.intro}</p>
          </Link>
        </Reveal>
      ))}
      <Reveal as="li" delay={100}>
        <div className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-border-strong bg-surface/60 p-7">
          <div>
            <p className="text-lg font-semibold text-brand">Not on this list?</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-muted">Tell us who needs to talk to whom and about what. We will tell you whether we can help.</p>
          </div>
          <Link href="/contact/" className="tap mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-accent-1 hover:underline">Talk to Sales <Chevron /></Link>
        </div>
      </Reveal>
    </ul>
  );
}

/* ---------- Interpreter tiers (copy deck 6.6) ---------- */
export function TierCards({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {TIERS.map((t, i) => (
        <Reveal as="li" key={t.name} delay={i * 70} className={`relative flex h-full flex-col rounded-3xl p-7 ${dark ? "bg-white/[0.06] ring-1 ring-white/12" : "border border-border bg-white"}`}>
          <div className="flex items-center justify-between">
            <Icon name={t.icon} size={44} />
            <span aria-hidden className="flex gap-1">
              {[1, 2, 3].map((n) => (
                <span key={n} className={`h-1.5 w-5 rounded-full ${n <= t.level ? "bg-logo" : dark ? "bg-white/15" : "bg-border"}`} />
              ))}
            </span>
          </div>
          <p className={`font-display-wonk mt-6 text-[26px] font-semibold ${dark ? "text-white" : "text-brand"}`}>{t.name}</p>
          <p className={`mt-1 text-sm font-semibold ${dark ? "text-white/70" : "text-accent-1"}`}>{t.meta}</p>
          <p className={`mt-3 text-[15px] leading-[1.6] ${dark ? "text-white/75" : "text-muted"}`}>{t.body}</p>
          <span className="sr-only">Tier {t.level} of 3</span>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------- Proof from clients: only an approved, named quote (copy deck 6.10) ---------- */
export function Testimonial() {
  if (!TESTIMONIAL) return null;
  const initials = TESTIMONIAL.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  return (
    <Reveal>
      <figure className="bg-glow relative overflow-hidden rounded-[28px] p-8 text-white md:p-14">
        <blockquote className="font-display-wonk relative max-w-[34ch] text-[26px] leading-[1.3] font-medium md:text-[34px]">{TESTIMONIAL.quote}</blockquote>
        <figcaption className="relative mt-10 flex items-center gap-4">
          <span aria-hidden className="bg-logo flex size-12 items-center justify-center rounded-full text-base font-semibold">{initials}</span>
          <span>
            <span className="block font-semibold">{TESTIMONIAL.name}</span>
            <span className="text-white/70">{TESTIMONIAL.role}, {TESTIMONIAL.org}</span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
