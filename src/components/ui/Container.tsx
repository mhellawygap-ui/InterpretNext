import type { ReactNode } from "react";

/** Content column: 1200px max, 24px gutters on phones, 32px from md. */
export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return (
    <div className={`mx-auto w-full px-6 md:px-8 ${narrow ? "max-w-[880px]" : "max-w-[1264px]"} ${className}`}>{children}</div>
  );
}
