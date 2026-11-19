"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { HERO_VIDEO } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

/** Example bookings shown in the still visual. Static illustration: no live counts or timers. */
const SESSIONS = [
  { from: "Arabic (Levantine)", to: "English", mode: "Video", when: "Tue 10:00", status: "Confirmed" as const, icon: "vri" as const },
  { from: "French", to: "English", mode: "On-site", when: "Wed 14:30", status: "Confirmed" as const, icon: "on-site" as const },
  { from: "Arabic (Sudanese)", to: "English", mode: "Video", when: "Thu 09:00", status: "Interpreter matched" as const, icon: "vri" as const },
];

function ProductStill() {
  return (
    <figure aria-label="Example: upcoming interpreted sessions in the InterpretNext platform" className="rounded-3xl border border-border bg-surface p-4 md:p-6">
      <div className="rounded-2xl border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="text-[15px] font-semibold text-brand">Upcoming sessions</p>
          <span className="rounded-full bg-surface px-2.5 py-0.5 text-[12px] font-semibold text-muted ring-1 ring-border">Example</span>
        </div>
        <ul className="divide-y divide-border">
          {SESSIONS.map((s) => (
            <li key={s.from + s.when} className="flex items-center gap-4 px-5 py-4">
              <Icon name={s.icon} size={40} />
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-brand sm:truncate">
                  {s.from} <span aria-hidden className="text-subtle">→</span>
                  <span className="sr-only"> to </span> {s.to}
                </p>
                <p className="text-[13px] text-muted">
                  {s.mode} · {s.when}
                </p>
                <span className="mt-2 block sm:hidden">
                  <Badge tone={s.status === "Confirmed" ? "success" : "violet"} dot>{s.status}</Badge>
                </span>
              </div>
              <span className="hidden sm:block">
                <Badge tone={s.status === "Confirmed" ? "success" : "violet"} dot>{s.status}</Badge>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4">
        <Icon name="nda" size={36} />
        <p className="text-[13px] leading-snug text-muted">
          <span className="font-semibold text-brand">Briefing shared with your interpreter.</span> Glossary and agenda attached, confidentiality terms accepted.
        </p>
      </div>
    </figure>
  );
}

/**
 * Hero media: plays the brand video when one is configured (data/site.ts HERO_VIDEO) and the
 * visitor has not asked for reduced motion; otherwise shows the still product visual.
 */
export function HeroMedia() {
  const [reduce, setReduce] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const on = () => setReduce(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  if (!HERO_VIDEO) return <ProductStill />;
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface">
      {reduce ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset(HERO_VIDEO.poster)} alt="" className="aspect-[4/3] w-full object-cover" />
      ) : (
        <video className="aspect-[4/3] w-full object-cover" src={asset(HERO_VIDEO.src)} poster={asset(HERO_VIDEO.poster)} autoPlay muted loop playsInline aria-hidden />
      )}
    </div>
  );
}
