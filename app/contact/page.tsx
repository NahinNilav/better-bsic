import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach BSIC as a co-investor, ecosystem partner, shareholder institution or journalist.",
};

type ContactPageProps = { searchParams: Promise<{ for?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { for: audience = "general" } = await searchParams;
  return (
    <section className="form-page contact-page">
      <div className="shell form-page__grid">
        <div className="form-page__intro">
          <p className="eyebrow eyebrow--line">Contact BSIC</p>
          <h1><BrandTitle>Built together. Starting now.</BrandTitle></h1>
          <p className="lede">For shareholder banks, founders, ecosystem partners and international venture capital firms interested in co-investing — we welcome your engagement.</p>
          <div className="contact-routes">
            <div><span>Office</span><strong>Dhaka, Bangladesh</strong></div>
            <div><span>Founders</span><strong>Use the Pitch BSIC form</strong></div>
            <div><span>Company</span><strong>Bangladesh Startup Investment Company PLC</strong></div>
          </div>
        </div>
        <ContactForm initialAudience={audience} />
      </div>
    </section>
  );
}
