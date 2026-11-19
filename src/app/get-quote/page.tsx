import type { Metadata } from "next";
import { QuoteFlow } from "@/components/page/QuoteFlow";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us what you need. A specialist replies with a quote and a proposed interpreter profile.",
};

export default function GetQuotePage() {
  return <QuoteFlow />;
}
