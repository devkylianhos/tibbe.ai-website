import type { Metadata } from "next";
import { PremiumHome } from "@/components/PremiumHome";

export const metadata: Metadata = {
  title: "Tibbe — AI-operaties voor e-commerce",
  description:
    "Tibbe bouwt AI-agents voor klantenservice, orders en retention. Gekoppeld aan je e-commerce-stack, met approvals en een traceerbaar logboek.",
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tibbe",
  url: "https://tibbe.app",
  logo: "https://tibbe.app/brand/tibbe-mark-512.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parelweg 11",
    postalCode: "1812 RS",
    addressLocality: "Alkmaar",
    addressCountry: "NL",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <PremiumHome />
    </>
  );
}
