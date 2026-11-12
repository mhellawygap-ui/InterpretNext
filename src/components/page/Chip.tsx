import type { ReactNode } from "react";

/** Small lilac tag used for use-cases, modalities and language chips. */
export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-full bg-lilac-strong/60 px-2.5 text-[13px] font-medium whitespace-nowrap text-violet-ink ${className}`}
    >
      {children}
    </span>
  );
}

export type Availability = "On-demand" | "Scheduled" | "Limited";

const AVAILABILITY_STYLES: Record<Availability, string> = {
  "On-demand": "bg-[#e7f7ec] text-success-ink",
  Scheduled: "bg-[#e6f0ff] text-info-ink",
  Limited: "bg-[#fff3dc] text-warning-ink",
};

export function AvailabilityBadge({ value }: { value: Availability }) {
  return (
    <span className={`inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 text-xs font-medium ${AVAILABILITY_STYLES[value]}`}>
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {value}
    </span>
  );
}

export function StatusBadge({ value }: { value: "Active" | "In Progress" }) {
  const active = value === "Active";
  return (
    <span
      className={`inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold ${
        active ? "bg-[#e7f7ec] text-success-ink" : "bg-[#fff3dc] text-warning-ink"
      }`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {value}
    </span>
  );
}
