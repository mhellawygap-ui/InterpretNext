import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-4 text-base font-medium leading-[1.2] whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-accent-1",
  outline:
    "border-[0.5px] border-brand bg-transparent text-brand hover:bg-brand/5",
};

type ButtonProps = ComponentProps<typeof Link> & { variant?: Variant };

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
