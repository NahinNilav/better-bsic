import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <><PageHero eyebrow="Terms" title="Prototype terms and content status." description="This V1 is a redesign concept for management review, not an investment solicitation or public application system." note="Production terms require approval from BSIC’s legal, regulatory and governance stakeholders." /><section className="section section--white legal-body"><div className="shell"><h2>Important context</h2><div><h3>No investment offer</h3><p>Information on this prototype is general institutional information and does not constitute an offer, recommendation or commitment to invest.</p></div><div><h3>No submitted record</h3><p>Frontend-only forms provide interaction previews. They do not create an application, enquiry, candidate record or investment relationship.</p></div><div><h3>Source approval</h3><p>All capital, governance, impact, portfolio and policy claims should be reviewed and approved before public launch.</p></div></div></section></>;
}
