import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

/**
 * Eyebrow + Fraunces display heading used by every content section.
 * Wrap the highlighted words of `title` in <GradientText>.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
  titleClassName = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display-wonk ${eyebrow ? "mt-8" : ""} text-[34px] font-bold leading-[1.2] text-black sm:text-[49px] ${titleClassName}`}
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-6 text-lg font-medium leading-[1.2] text-muted sm:text-xl">{lead}</p>
      )}
    </div>
  );
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="text-gradient">{children}</span>;
}
