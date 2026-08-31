import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact BSIC as a founder, co-investor, ecosystem partner, institution or member of the media.",
};

type ContactPageProps = { searchParams: Promise<{ for?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { for: audience = "general" } = await searchParams;
  return (
    <section className="form-page contact-page">
      <div className="shell form-page__grid">
        <div className="form-page__intro">
          <p className="eyebrow eyebrow--line">Contact BSIC</p>
          <h1><BrandTitle>Begin with the right conversation.</BrandTitle></h1>
          <p className="lede">A single, structured entry point for co-investment, ecosystem, shareholder, media and recruiting enquiries.</p>
          <div className="contact-routes">
            <div><span>Office</span><strong>Dhaka, Bangladesh</strong></div>
            <div><span>Founder submissions</span><strong>Use the dedicated Pitch BSIC flow</strong></div>
            <div><span>Response routing</span><strong>Selected by enquiry type</strong></div>
          </div>
        </div>
        <ContactForm initialAudience={audience} />
      </div>
    </section>
  );
}
