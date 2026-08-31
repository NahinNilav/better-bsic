import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Disclosures" };

export default function DisclosuresPage() {
  return <><PageHero eyebrow="Disclosures" title="Facts should be separated from forecasts." description="Institutional credibility depends on clear sourcing, methodology and approval for every material public claim." note="This prototype intentionally omits the current site’s unsourced modeled impact outcomes from its primary experience." /><section className="section section--white legal-body"><div className="shell"><h2>Recommended disclosure framework</h2><div><h3>Capital and structure</h3><p>Confirm fund size, paid-up and authorised capital, shareholder contributions and facility terms against approved corporate records.</p></div><div><h3>Investment criteria</h3><p>Publish only thresholds and policies formally approved by the Board and Investment Committee.</p></div><div><h3>Impact and performance</h3><p>Label forecasts clearly, explain methodology and keep actual portfolio performance separate from modeled outcomes.</p></div></div></section></>;
}
