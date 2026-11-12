import Image from "next/image";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import { BrandIcon } from "@/components/ui/BrandIcon";

/**
 * Decorative vector illustrations for the gradient page heroes.
 * Static (no loops), aria-hidden, and only shown from the lg breakpoint so the
 * mobile hero stays short.
 */

function Frame({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative mx-auto hidden h-[340px] w-[360px] select-none lg:block">
      {children}
    </div>
  );
}

/** Soft glass-free tile on the gradient: translucent fill + visible 1px edge. */
function Tile({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`absolute rounded-2xl border border-white/35 bg-white/12 ${className}`}>{children}</div>;
}

function Bars({ className = "" }: { className?: string }) {
  const h = [10, 22, 14, 30, 18, 26, 12, 20, 8];
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {h.map((v, i) => (
        <span key={i} className="w-[3px] rounded-full bg-white/80" style={{ height: v }} />
      ))}
    </div>
  );
}

/* ---------- Services: one hub, every modality ---------- */
export function ServicesArt() {
  return (
    <Frame>
      <svg viewBox="0 0 360 340" className="absolute inset-0" fill="none">
        <circle cx="180" cy="170" r="118" stroke="white" strokeOpacity=".22" strokeDasharray="4 8" />
        <circle cx="180" cy="170" r="72" stroke="white" strokeOpacity=".3" />
        {[
          [62, 62],
          [298, 62],
          [62, 278],
          [298, 278],
        ].map(([x, y]) => (
          <path key={`${x}${y}`} d={`M180 170 Q ${(180 + x) / 2 + (x < 180 ? -20 : 20)} ${(170 + y) / 2} ${x} ${y}`} stroke="white" strokeOpacity=".45" strokeDasharray="3 6" strokeLinecap="round" />
        ))}
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-[112px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/40 bg-white/15">
        <span className="flex size-14 items-center justify-center rounded-full bg-lilac">
          <Image src={asset("/images/headphone.png")} alt="" width={32} height={32} />
        </span>
        <Bars className="mt-2 scale-75" />
      </div>
      <BrandIcon name="vri" size={64} className="absolute top-[30px] left-[30px] rounded-2xl shadow-[0_8px_24px_rgba(8,12,65,0.07)]" />
      <BrandIcon name="rsi" size={64} className="absolute top-[30px] right-[30px] rounded-2xl shadow-[0_8px_24px_rgba(8,12,65,0.07)]" />
      <BrandIcon name="on-site" size={64} className="absolute bottom-[30px] left-[30px] rounded-2xl shadow-[0_8px_24px_rgba(8,12,65,0.07)]" />
      <BrandIcon name="24-7" size={64} className="absolute right-[30px] bottom-[30px] rounded-2xl shadow-[0_8px_24px_rgba(8,12,65,0.07)]" />
    </Frame>
  );
}

/* ---------- Industries: stacked sector briefs ---------- */
function SectorCard({ icon, title, lines, className }: { icon: string; title: string; lines: number[]; className: string }) {
  return (
    <div className={`absolute w-[220px] rounded-2xl border border-white/40 p-4 shadow-[0_12px_32px_rgba(8,12,65,0.07)] ${className}`}>
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-blush">
          <Image src={asset(icon)} alt="" width={24} height={24} />
        </span>
        <span className="text-sm font-semibold text-white">{title}</span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {lines.map((w, i) => (
          <span key={i} className="h-1.5 rounded-full bg-white/40" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="rounded-full bg-white/90 px-2 text-xs font-semibold text-violet-ink">Certified</span>
        <span className="rounded-full border border-white/50 px-2 text-xs text-white">Matched</span>
      </div>
    </div>
  );
}

export function IndustriesArt() {
  return (
    <Frame>
      <SectorCard icon="/images/globe-with-meridians.png" title="Global Business" lines={[80, 60]} className="top-[0px] right-[0px] rotate-[5deg] bg-[#5b2fd0]" />
      <SectorCard icon="/images/balance-scale.png" title="Legal" lines={[90, 70]} className="top-[104px] left-[0px] -rotate-[4deg] bg-[#4a26b8]" />
      <SectorCard icon="/images/medical-symbol.png" title="Healthcare" lines={[85, 65, 45]} className="top-[196px] right-[12px] rotate-[2deg] bg-[#7a36d8]" />
      <svg viewBox="0 0 64 72" className="absolute bottom-[0px] left-[24px] h-[72px] w-[64px]" fill="none">
        <path d="M32 3 59 13v20c0 18-12 30-27 36C17 63 5 51 5 33V13L32 3Z" fill="white" fillOpacity=".95" />
        <path d="m20 36 8 8 16-17" stroke="#6528cb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Frame>
  );
}

/* ---------- Languages: wireframe globe with greetings ---------- */
function Bubble({ text, lang, dir, className }: { text: string; lang: string; dir?: "rtl"; className: string }) {
  return (
    <span lang={lang} dir={dir} className={`absolute rounded-2xl rounded-bl-sm border border-white/50 bg-white px-3.5 py-1.5 text-sm font-semibold text-brand shadow-[0_8px_24px_rgba(8,12,65,0.07)] ${className}`}>
      {text}
    </span>
  );
}

export function LanguagesArt() {
  return (
    <Frame>
      <svg viewBox="0 0 360 340" className="absolute inset-0" fill="none" stroke="white">
        <g strokeOpacity=".5">
          <circle cx="180" cy="176" r="124" />
          <ellipse cx="180" cy="176" rx="56" ry="124" />
          <ellipse cx="180" cy="176" rx="100" ry="124" strokeOpacity=".6" />
          <path d="M56 176h248M72 116h216M72 236h216M100 76h160M100 276h160" strokeOpacity=".6" />
        </g>
        <path d="M110 120c18-14 38-10 50 2s30 10 40-4" stroke="#ff7fb0" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />
        <circle cx="110" cy="120" r="5" fill="#ff7fb0" stroke="none" />
        <circle cx="200" cy="118" r="5" fill="#ff7fb0" stroke="none" />
        <circle cx="236" cy="222" r="5" fill="white" stroke="none" />
        <circle cx="132" cy="246" r="5" fill="white" stroke="none" />
      </svg>
      <Bubble text="مرحبا" lang="ar" dir="rtl" className="top-[56px] left-[40px]" />
      <Bubble text="Salaan" lang="so" className="top-[18px] right-[44px]" />
      <Bubble text="你好" lang="zh" className="top-[150px] right-[4px]" />
      <Bubble text="Hola" lang="es" className="top-[176px] left-[8px]" />
      <Bubble text="नमस्ते" lang="hi" className="right-[60px] bottom-[34px]" />
      <span className="absolute bottom-[6px] left-[54px] flex items-center gap-2 rounded-full bg-brand/80 px-3 py-1 text-xs font-semibold text-white">
        <span className="size-2 rounded-full bg-[#34d27a]" /> 200+ on standby
      </span>
    </Frame>
  );
}

/* ---------- Get Quote: four steps to a tailored proposal ---------- */
export function QuoteArt() {
  const rows = [
    { done: true, w: 70, label: "Modality" },
    { done: true, w: 85, label: "Languages" },
    { done: false, w: 60, label: "Timing" },
    { done: false, w: 75, label: "Details" },
  ];
  return (
    <Frame>
      <Tile className="top-[0px] left-[0px] w-[240px] bg-white/15 p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Your proposal</span>
          <span className="rounded-full bg-white/90 px-2 text-xs font-semibold text-violet-ink">2 / 4</span>
        </div>
        <ul className="mt-4 flex flex-col gap-3">
          {rows.map((r) => (
            <li key={r.label} className="flex items-center gap-3">
              <span className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${r.done ? "bg-[#34d27a] text-brand" : "border border-white/60 text-white"}`}>
                {r.done ? "✓" : ""}
              </span>
              <span className="flex-1">
                <span className="block text-xs text-white/90">{r.label}</span>
                <span className="mt-1 block h-1.5 rounded-full bg-white/35" style={{ width: `${r.w}%` }} />
              </span>
            </li>
          ))}
        </ul>
      </Tile>
      <div className="absolute right-[0px] bottom-[8px] w-[188px] rounded-2xl bg-white p-4 shadow-[0_12px_32px_rgba(8,12,65,0.07)]">
        <div className="flex items-center gap-2">
          <BrandIcon name="24-7" size={32} className="rounded-lg" />
          <span className="text-xs font-semibold text-brand">Specialist reply</span>
        </div>
        <p className="mt-2 font-display-wonk text-2xl font-bold text-brand">&lt; 1 day</p>
        <p className="text-xs text-muted">Tailored recommendation &amp; pricing</p>
      </div>
      <svg viewBox="0 0 80 80" className="absolute bottom-[16px] left-[24px] size-[80px]" fill="none">
        <circle cx="40" cy="40" r="32" stroke="white" strokeOpacity=".3" strokeWidth="8" />
        <circle cx="40" cy="40" r="32" stroke="#ff7fb0" strokeWidth="8" strokeLinecap="round" strokeDasharray="100 201" transform="rotate(-90 40 40)" />
        <text x="40" y="46" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">50%</text>
      </svg>
    </Frame>
  );
}
