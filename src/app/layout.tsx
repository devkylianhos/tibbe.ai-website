import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { CookieBanner } from "@/components/CookieBanner";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/website.css";
import "@/styles/founder.css";
import "@/styles/logo-motion.css";
import "@/styles/services-motion.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tibbe.app"),
  title: "Tibbe — Websites, webshops en AI voor het MKB",
  description:
    "Tibbe bouwt websites en webshops en verbindt ze met je dagelijkse werk. Slimme koppelingen en AI helpen je team bij aanvragen, bestellingen en klantvragen.",
  icons: { icon: "/tibbe-loop.svg" },
  openGraph: {
    title: "Tibbe — Websites, webshops en AI voor het MKB",
    description:
      "Websites en webshops die werken. Ook achter de schermen. Ontwerp, bouw en passende koppelingen, met AI waar dat helpt.",
    url: "https://tibbe.app",
    siteName: "Tibbe",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
