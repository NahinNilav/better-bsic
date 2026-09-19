import type { Metadata } from "next";
import { CreditBadge } from "@/components/credit-badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BSIC — Bangladesh Startup Investment Company",
    template: "%s — BSIC",
  },
  description:
    "Bangladesh Startup Investment Company backs ambitious technology founders with institutional capital and global co-investment.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/bsic-logo.png",
    shortcut: "/bsic-logo.png",
    apple: "/bsic-logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bangladesh Startup Investment Company PLC",
  alternateName: "BSIC",
  url: "https://www.bsic.vc",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CreditBadge />
      </body>
    </html>
  );
}
