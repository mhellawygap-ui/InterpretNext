import Link from "next/link";
import { asset } from "@/lib/asset";

/** "Not sure which one you need?" strip — gradient version used on inner pages. */
export function AssistantBanner() {
  return (
    <div className="bg-banner flex flex-col gap-4 rounded-[15px] px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-[15px]">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-lilac">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/ai2.svg")} alt="" width={32} height={32} />
        </span>
        <div className="text-white">
          <p className="text-xl font-medium leading-[1.2]">Not sure which one you need?</p>
          <p className="mt-3 text-[13px] leading-[1.2]">
            Describe your situation and our assistant will recommend the right service in seconds.
          </p>
        </div>
      </div>
      <Link
        href="/get-quote/?modality=unsure"
        className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-background px-6 text-[13px] font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] sm:w-[214px]"
      >
        <span className="text-gradient">Ask the Assistant</span>
      </Link>
    </div>
  );
}
