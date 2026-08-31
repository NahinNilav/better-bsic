import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return <><PageHero eyebrow="Accessibility" title="Institutional quality includes equal access." description="The redesign is built around readable type, keyboard access, semantic structure, reduced motion and clear focus states." note="A production statement should name a response owner, supported standards and a tested accommodation route." /><section className="section section--white legal-body"><div className="shell"><h2>V1 accessibility baseline</h2><div><h3>Navigate</h3><p>Skip link, landmark structure, consistent navigation, visible focus indicators and keyboard-operated mobile navigation.</p></div><div><h3>Read</h3><p>Responsive typography, restrained line length, high-contrast text and content that remains visible without animation.</p></div><div><h3>Interact</h3><p>Large targets, explicit labels, native validation, status announcements and reduced-motion support.</p></div></div></section></>;
}
