import Image from "next/image";
import { asset } from "@/lib/asset";

const GREETINGS = [
  { t: "سلام", lang: "ar", cls: "top-[4%] left-[2%] text-[64px]" },
  { t: "ሰላም", lang: "am", cls: "top-[30%] -right-[2%] text-[56px]" },
  { t: "你好", lang: "zh", cls: "bottom-[8%] left-[6%] text-[60px]" },
  { t: "नमस्ते", lang: "hi", cls: "top-[56%] left-[-4%] text-[44px]" },
  { t: "Salaan", lang: "so", cls: "top-[2%] right-[10%] text-[40px]" },
  { t: "Bonjour", lang: "fr", cls: "bottom-[2%] right-[4%] text-[44px]" },
];

const BARS = [0.5, 0.9, 0.6, 1, 0.7, 0.95, 0.55, 0.8, 0.45];

/**
 * Hero signature: an example interpreted exchange (Arabic → English) bridged by an interpreter.
 * Static illustration (no live data): plays a one-time entrance and a gentle voice waveform;
 * fully static under reduced motion.
 */
export function HeroBridge() {
  return (
    <figure className="relative mx-auto w-full max-w-[520px]" aria-label="Example: an interpreter bridges a patient speaking Arabic and a clinician speaking English">
      {/* script texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        {GREETINGS.map((g) => (
          <span key={g.t} lang={g.lang} className={`font-display-wonk absolute leading-none font-medium text-white/[0.07] ${g.cls}`}>
            {g.t}
          </span>
        ))}
      </div>

      <div className="relative flex flex-col gap-5 py-6">
        {/* connector */}
        <div aria-hidden className="seq-line-y absolute top-14 bottom-14 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#a78bfa] via-[#7c3aed] to-[#e0336f]" />

        {/* speaker 1 */}
        <div className="seq-1 relative mr-10 rounded-2xl rounded-tl-md border border-white/15 bg-[#161c62] p-5 text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] sm:mr-16">
          <p className="text-[13px] font-medium text-white/70">Patient · Arabic (Levantine)</p>
          <p lang="ar" dir="rtl" className="mt-2 text-right text-[22px] leading-snug font-medium">مرحباً، عندي موعد مع الطبيب اليوم.</p>
        </div>

        {/* interpreter node */}
        <div className="seq-2 relative mx-auto flex items-center gap-4 rounded-full border border-white/20 bg-[#141a5e] py-2.5 pr-6 pl-2.5 text-white shadow-[0_20px_50px_-20px_rgba(124,58,237,0.7)]">
          <span className="relative inline-flex">
            <span aria-hidden className="ring absolute inset-0 rounded-full border-2 border-[#a78bfa]" />
            <Image src={asset("/images/brand/assistant-avatar.webp")} alt="" width={52} height={52} className="relative size-[52px] rounded-full border-2 border-white/80 bg-white" />
          </span>
          <span>
            <span className="block text-[15px] font-semibold">Your interpreter</span>
            <span className="flex h-5 items-end gap-[3px]" aria-hidden>
              {BARS.map((h, i) => (
                <span key={i} className="wave-bar w-[3px] rounded-full bg-gradient-to-t from-[#7c3aed] to-[#f472b6]" style={{ height: `${h * 18}px`, animationDelay: `${i * 90}ms` }} />
              ))}
            </span>
          </span>
        </div>

        {/* speaker 2 */}
        <div className="seq-3 relative ml-10 rounded-2xl rounded-br-md bg-white p-5 text-brand shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)] sm:ml-16">
          <p className="text-[13px] font-medium text-muted">Clinician · English</p>
          <p className="mt-2 text-[20px] leading-snug font-medium">“Hello, I have an appointment with the doctor today.”</p>
        </div>
      </div>
      <figcaption className="relative mt-2 text-center text-[13px] text-white/60">Example of an interpreted conversation</figcaption>
    </figure>
  );
}
