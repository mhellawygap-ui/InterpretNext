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
      successBody="Our language team will tell you whether we can staff it, and the lead time."
      fields={[
        { name: "language", label: "Language", required: true, placeholder: "Example: Tigrinya" },
        { name: "where", label: "Dialect or region", placeholder: "Example: Eritrean, or where the speaker is from" },
        { name: "mode", label: "Service type", type: "select", options: ["Remote interpreting (video)", "On-site interpreting", "Conference or event interpreting", "Document translation", "Not sure yet"] },
        { name: "volume", label: "Expected volume", type: "select", options: ["One session", "A few sessions", "Weekly or more", "An ongoing program", "Not sure yet"] },
        { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email", placeholder: "name@organization.com" },
        { name: "org", label: "Organization", required: true, autoComplete: "organization" },
        { name: "notes", label: "Anything else we should know", type: "textarea", placeholder: "Subject, setting or dates" },
      ]}
    />
  );
}
