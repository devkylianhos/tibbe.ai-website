import type { Metadata } from "next";
import { PremiumHome } from "@/components/PremiumHome";

export const metadata: Metadata = {
  title: "Tibbe — AI-operaties voor groeiende teams",
  description:
    "Tibbe bouwt custom AI-agents voor terugkerend werk over support, sales, administratie en rapportage — gekoppeld aan je bestaande stack.",
  alternates: { canonical: "/" },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tibbe.app/#organization",
      name: "Tibbe",
      url: "https://tibbe.app",
      logo: "https://tibbe.app/brand/tibbe-mark-512.png",
      description: "Tibbe ontwerpt en bouwt custom AI-operaties voor groeiende teams.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Parelweg 11",
        postalCode: "1812 RS",
        addressLocality: "Alkmaar",
        addressCountry: "NL",
      },
    },
    {
      "@type": "Service",
      provider: { "@id": "https://tibbe.app/#organization" },
      name: "Custom AI-operaties",
      description: "Ontwerp en bouw van AI-agents voor terugkerend werk over support, sales, administratie en rapportage.",
      areaServed: { "@type": "Country", name: "Nederland" },
      audience: { "@type": "BusinessAudience", audienceType: "Founders en operationele teams bij groeiende bedrijven" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <PremiumHome />
    </>
  );
}
