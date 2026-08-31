import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PitchForm } from "@/components/pitch-form";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Pitch BSIC",
  description: "Tell BSIC about your round, your lead investor and your company.",
};

export default function PitchPage() {
  return (
    <section className="form-page pitch-page">
      <div className="shell form-page__grid">
        <div className="form-page__intro">
          <p className="eyebrow eyebrow--line">Founder intake</p>
          <h1><BrandTitle>Pitch BSIC.</BrandTitle></h1>
          <p className="lede">For Bangladesh-linked technology companies raising an institutionally led round. Three steps, and you can save and come back.</p>
          <div className="eligibility-card">
            <p className="mono-label">Before you begin</p>
            <h2>What BSIC looks for</h2>
            <ul>
              <li><CheckCircle2 aria-hidden="true" /> A credible institutional lead, committed or in discussion</li>
              <li><CheckCircle2 aria-hidden="true" /> Bangladesh as a material market or operating base</li>
              <li><CheckCircle2 aria-hidden="true" /> A technology-enabled model at late-seed or Series A</li>
              <li><CheckCircle2 aria-hidden="true" /> Operating traction you can evidence</li>
            </ul>
          </div>
          <p className="prototype-note">Prototype: drafts save to this device. Submitting sends nothing.</p>
        </div>
        <PitchForm />
      </div>
    </section>
  );
}
