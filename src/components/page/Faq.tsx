export type FaqItem = { q: string; a: string };

export function Faq({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <div>
      <h3 className="font-display-wonk text-2xl font-bold text-brand">{title}</h3>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card px-6">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-brand">
              {item.q}
              <span aria-hidden className="text-xl leading-none text-accent-1 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-[1.5] text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
