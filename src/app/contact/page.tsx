import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/shared/LeadForm";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the InterpretNext team about interpreting, languages, pricing or security documentation.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Talk to our team"
        lead="Ask about interpreting for your organization, a specific language, pricing or security documentation. We reply within one business day."
      />
      <Section labelledBy="contact-title">
        <h2 id="contact-title" className="sr-only">Contact form</h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-16">
          <LeadForm
            id="contact"
            submitLabel="Send message"
            successTitle="Message sent"
            successBody="Thank you. A member of our team will reply within one business day."
            fields={[
              { name: "name", label: "Full name", required: true, autoComplete: "name" },
              { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email", placeholder: "name@organization.com" },
              { name: "org", label: "Organization", required: true, autoComplete: "organization" },
              { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
              { name: "topic", label: "Topic", type: "select", full: true, options: ["Interpreting for my organization", "A specific language", "Pricing", "Security and compliance documents", "Interpreter careers", "Something else"] },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
          />
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Icon name="contact" size={44} />
              <div>
                <p className="font-semibold text-brand">Sales and partnerships</p>
                {CONTACT.email ? (
                  <a href={`mailto:${CONTACT.email}`} className="text-[15px] text-accent-1 hover:underline">{CONTACT.email}</a>
                ) : (
                  <p className="text-[15px] text-muted">Use the form and we will reply within one business day.</p>
                )}
                {CONTACT.phone && <p className="text-[15px] text-muted">{CONTACT.phone}</p>}
              </div>
            </div>
            <div className="flex gap-4">
              <Icon name="support" size={44} />
              <div>
                <p className="font-semibold text-brand">Need a quote?</p>
                <p className="text-[15px] text-muted">The quote form gets a specialist recommendation fastest.</p>
                <Link href="/get-quote/" className="tap mt-1 inline-block text-[15px] font-semibold text-accent-1 hover:underline">Request a quote →</Link>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon name="building" size={44} />
              <div>
                <p className="font-semibold text-brand">InterpretNext</p>
                <p className="text-[15px] text-muted">An interpreting brand by bayanTech.</p>
                {CONTACT.address && <p className="text-[15px] text-muted">{CONTACT.address}</p>}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
