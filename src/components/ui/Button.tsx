import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "on-dark" | "on-dark-outline" | "link";
type Size = "md" | "lg";

const base =
  "tap inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold leading-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-[#1c2270]",
  secondary: "border border-border-strong bg-white text-brand hover:border-brand",
  "on-dark": "bg-white text-brand hover:bg-lilac",
  "on-dark-outline": "border border-white/50 text-white hover:bg-white/10",
  link: "!h-auto !px-0 text-accent-1 hover:underline underline-offset-4",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type ButtonProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  return <Link className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}
