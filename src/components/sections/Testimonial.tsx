import { Container } from "@/components/ui/Container";

export function Testimonial() {
  return (
    <section aria-label="Customer testimonial" className="py-10">
      <Container>
        <figure className="rounded-2xl bg-brand p-8 text-white">
          <blockquote className="font-display-wonk max-w-[1139px] text-xl font-bold leading-[1.2] sm:text-[31px]">
            We needed a partner who could find Tigrinya and Amharic interpreters in minutes, not
            days. InterpretNext was the only provider that didn&apos;t ask us to compromise on
            either speed or language coverage.
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span className="bg-brand-gradient flex size-[57px] shrink-0 items-center justify-center rounded-full text-xl font-semibold">
              DM
            </span>
            <span>
              <span className="block text-xl font-medium leading-[1.2]">Director of Patient Access</span>
              <span className="mt-1 block text-[13px] leading-[1.2]">Regional Healthcare Network</span>
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
