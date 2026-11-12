import type { ReactNode } from "react";

/** Eyebrow + Fraunces heading in brand navy, used across inner pages. */
export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "left",
  action,
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  const center = align === "center";
  return (
    <div className={`${action ? "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" : ""} ${className}`}>
      <div className={center ? "mx-auto max-w-[720px] text-center" : "max-w-[720px]"}>
        {eyebrow && <p className="text-sm font-medium tracking-[0.04em] uppercase text-accent-1">{eyebrow}</p>}
        <Tag className={`font-display-wonk ${eyebrow ? "mt-3" : ""} text-[30px] leading-[1.2] font-bold text-brand sm:text-[39px]`}>{title}</Tag>
        {lead && <p className="mt-4 text-base leading-[1.45] text-muted">{lead}</p>}
      </div>
      {action}
    </div>
  );
}
