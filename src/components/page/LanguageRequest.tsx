"use client";

import { useEffect, useState } from "react";
import { LeadForm } from "@/components/shared/LeadForm";

/** Request-a-language form. Pre-fills the language from /languages/?request=… links. */
export function LanguageRequest() {
  const [initial, setInitial] = useState<Record<string, string>>({});
  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("request");
    if (r) setInitial({ language: r });
  }, []);
  return (
    <LeadForm
      id="request-language"
      initial={initial}
      submitLabel="Send request"
      successTitle="Request received"
      successBody="Our language team will confirm feasibility and lead time within one business day."
      fields={[
        { name: "language", label: "Language or dialect", required: true, placeholder: "e.g. Tigrinya (Eritrean)" },
        { name: "where", label: "Where it is spoken", placeholder: "Country or region" },
        { name: "mode", label: "How you need it", type: "select", options: ["Video remote interpreting", "On-site interpreting", "Event interpreting", "Document translation", "Not sure yet"] },
        { name: "date", label: "Date needed", type: "date" },
        { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email", placeholder: "name@organization.com" },
        { name: "org", label: "Organization", required: true, autoComplete: "organization" },
        { name: "notes", label: "Anything else we should know", type: "textarea", placeholder: "Subject, setting or number of sessions" },
      ]}
    />
  );
}
