import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { GradientText } from "@/components/ui/SectionHeading";

function FloatingTag({ code, label, className }: { code: string; label: string; className: string }) {
  return (
    <div
      className={`absolute z-10 flex h-[43px] items-center gap-2 rounded-lg border border-border bg-card px-3.5 text-[13px] leading-[1.2] text-foreground shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${className}`}
    >
      <span className="font-bold">{code}</span>
      <span className="font-medium opacity-90">{label}</span>
    </div>
  );
}

function LiveCard() {
  return (
    <div className="relative mx-auto w-full max-w-[546px] pt-4 pb-6 lg:mx-0">
      <FloatingTag code="ET" label="Amharic - Available" className="-top-0 left-0 sm:-left-8" />
      <div
        className="relative min-h-[323px] overflow-hidden rounded-2xl px-6 pt-[45px] pb-7 text-white"
        style={{
          backgroundImage:
            "linear-gradient(237.76deg, #f32f7e 0%, #6528cb 9.7%, #080c41 19.4%)",
        }}
      >
        <div className="flex items-center justify-between">
          <Eyebrow dot className="!text-[13px] !text-white">
            Live interpretation
          </Eyebrow>
          <span className="text-[13px] font-medium text-border tabular-nums">00 : 04 : 32</span>
        </div>

        <Pill tone="muted" size="sm" className="mt-4">
          VRI · Health Care · Video Remote
        </Pill>

        <p className="mt-4 flex items-center gap-2 text-[25px] font-semibold leading-[1.2]">
          <span>EN</span>
          <span aria-hidden className="relative block h-[28px] w-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/arrow-alt1.svg" alt="" width={16} height={16} className="absolute top-0 left-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/arrow-alt.svg" alt="" width={16} height={16} className="absolute top-[11px] left-0" />
          </span>
          <span lang="ar" dir="rtl">السودانية</span>
          <span className="sr-only">to Sudanese Arabic</span>
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/frame12.svg" alt="" width={101} height={60} className="mt-5" />

        <div className="mt-[35px] flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] font-medium leading-[1.2] text-border">
            Interpreter: <strong className="font-bold text-white">Platinum Tier</strong> · Medical SME
          </p>
          <Pill tone="lilac" size="sm">Connected in 9s</Pill>
        </div>
      </div>
      <FloatingTag code="AG" label="Mandarine - 12 Online" className="right-0 bottom-0 sm:-right-6" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="py-12 lg:pt-12 lg:pb-8">
      <Container className="grid items-center gap-12 lg:grid-cols-[520px_1fr] lg:gap-[125px]">
        <div>
          <Eyebrow dot>A Bayantech specialized brand</Eyebrow>
          <h1 className="font-display-wonk mt-6 max-w-[500px] text-[44px] font-bold leading-[1.2] text-black sm:text-[61px]">
            A specialized <GradientText>interpretation</GradientText> brand, built for{" "}
            <GradientText>precision</GradientText>.
          </h1>
          <p className="mt-6 max-w-[485px] text-lg font-medium leading-[1.2] text-muted sm:text-xl">
            OPI, VRI, RSI, and On-Site interpretation across 200+ languages — with exclusive
            coverage of rare African, Middle Eastern, and Asian dialects most providers
            don&apos;t have.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="#get-started" variant="outline">Get Quote</Button>
            <Button href="#get-started">Request Demo</Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Highlights">
            <li><Pill tone="lilac">OPI · VRI · RSI · On-site</Pill></li>
            <li><Pill tone="blush">HIPAA · ISO 17100 · ISO 27001</Pill></li>
            <li><Pill tone="sky">24/7 Coverage</Pill></li>
          </ul>
        </div>
        <LiveCard />
      </Container>
    </section>
  );
}
