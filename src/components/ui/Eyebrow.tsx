import { asset } from "@/lib/asset";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  dot = false,
  className = "",
}: {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2 text-base uppercase leading-[1.2] text-accent-1 ${className}`}
    >
      {dot && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset("/images/ellipse1.svg")} alt="" width={13} height={13} className="shrink-0" />
      )}
      {children}
    </p>
  );
}
