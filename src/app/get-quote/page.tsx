import type { Metadata } from "next";
import { QuoteFlow } from "@/components/page/QuoteFlow";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Four short steps. A specialist responds within one business day with a tailored interpretation recommendation and pricing.",
};

export default function GetQuotePage() {
  return <QuoteFlow />;
}
