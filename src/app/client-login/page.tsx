import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/shared/LeadForm";

export const metadata: Metadata = {
  title: "Client login",
  description: "Access to the InterpretNext client portal.",
  robots: { index: false },
};

/** DRAFT (product): replace with a redirect to the portal once CLIENT_PORTAL_URL is set in data/site.ts. */
export default function ClientLoginPage() {
  return (
    <>
      <PageIntro
        label="Client login"
        title="Client portal"
        lead="The InterpretNext client portal opens with our launch release. Clients receive their access details from their account manager. To request access for your team, send us your details below."
      />
      <Section narrow labelledBy="access-title">
        <h2 id="access-title" className="sr-only">Request portal access</h2>
        <LeadForm
          id="portal-access"
          submitLabel="Request access"
          successTitle="Request received"
          successBody="We will contact you with access details for your organization."
          fields={[
            { name: "name", label: "Full name", required: true, autoComplete: "name" },
            { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email", placeholder: "name@organization.com" },
            { name: "org", label: "Organization", required: true, autoComplete: "organization", full: true },
          ]}
        />
      </Section>
    </>
  );
}
