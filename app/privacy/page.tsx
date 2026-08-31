import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return <><PageHero eyebrow="Privacy" title="Clear data practices should precede public forms." description="This prototype does not transmit or store form submissions on a server." note="An approved production policy must define data collection, purpose, retention, access, processors and candidate/founder rights." /><LegalBody title="Prototype privacy position" sections={[["What this V1 does", "Pitch drafts are stored only in your browser’s local storage when you choose Save draft. Demo submissions clear that draft and transmit nothing."], ["What production must disclose", "BSIC should identify its data controller, lawful basis, retention periods, service providers, security controls and contact route for privacy requests."], ["Founder and candidate information", "Investment and recruiting data require distinct access controls, retention rules and confirmation language before launch."]]} /></>;
}

function LegalBody({ title, sections }: { title: string; sections: string[][] }) {
  return <section className="section section--white legal-body"><div className="shell"><h2>{title}</h2>{sections.map(([heading, copy]) => <div key={heading}><h3>{heading}</h3><p>{copy}</p></div>)}</div></section>;
}
