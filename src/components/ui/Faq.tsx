export type FaqItem = { q: string; a: string };

/** Accordion list of questions (native <details>, keyboard accessible). */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold text-brand [&::-webkit-details-marker]:hidden">
            {item.q}
            <svg aria-hidden viewBox="0 0 24 24" className="size-5 shrink-0 text-accent-1 transition-transform duration-200 group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="max-w-[70ch] pb-6 text-base leading-[1.65] text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
