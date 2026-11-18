"use client";

import { useEffect, useRef, useState } from "react";

/** Counts a leading number up when it scrolls into view ("200+" → 0…200+). Text stays readable without JS. */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!m || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1100;
      const tick = (t: number) => {
        const k = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        setShown(`${Math.round(target * eased)}${m[2]}`);
        if (k < 1) requestAnimationFrame(tick);
      };
      setShown(`0${m[2]}`);
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
