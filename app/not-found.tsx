import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandTitle } from "@/components/brand-title";

export default function NotFound() {
  return <section className="not-found"><div className="shell"><p className="eyebrow">404 · Page not found</p><h1><BrandTitle>Page not found.</BrandTitle></h1><p>The page may have moved, or the link may be incomplete.</p><Link className="button button--primary" href="/"><ArrowLeft aria-hidden="true" size={17} /> Return home</Link></div></section>;
}
