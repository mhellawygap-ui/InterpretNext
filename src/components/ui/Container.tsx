import type { ReactNode } from "react";

/** Content column: 1240px wide at the 1440px design width (100px gutters). */
export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** The service-finder band uses a wider 1346px column (43px gutters). */
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-8 ${
        wide ? "max-w-[1432px] lg:px-11" : "max-w-[1440px] lg:px-[100px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
