import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PitchForm } from "@/components/pitch-form";
import { BrandTitle } from "@/components/brand-title";

export const metadata: Metadata = {
  title: "Pitch BSIC",
  description: "A structured founder intake for Bangladesh-linked technology companies.",
};

export default function PitchPage() {
  return (
    <section className="form-page pitch-page">
      <div className="shell form-page__grid">
        <div className="form-page__intro">
          <p className="eyebrow eyebrow--line">Founder intake</p>
          <h1><BrandTitle>Start with fit, not friction.</BrandTitle></h1>
          <p className="lede">A concise, first-party intake for Bangladesh-linked technology companies raising an institutional round.</p>
          <div className="eligibility-card">
            <p className="mono-label">Before you begin</p>
            <h2>Best suited to companies that can show:</h2>
            <ul>
              <li><CheckCircle2 aria-hidden="true" /> Material Bangladesh relevance</li>
              <li><CheckCircle2 aria-hidden="true" /> Technology-enabled scale</li>
              <li><CheckCircle2 aria-hidden="true" /> Meaningful operating traction</li>
              <li><CheckCircle2 aria-hidden="true" /> A credible institutional round</li>
            </ul>
          </div>
          <p className="prototype-note">Prototype: save/resume works on this device. Submission is simulated and sends no data.</p>
        </div>
        <PitchForm />
      </div>
    </section>
  );
}
