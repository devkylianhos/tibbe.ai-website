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
  title: "Tibbe — AI-operators voor werk dat verdergaat",
  description:
    "Tibbe bouwt en beheert AI-systemen voor marketing en operatie: advertenties, video, klantenservice, campagnes en automatisering. Met jouw team aan het stuur.",
  icons: { icon: "/tibbe-loop.svg" },
  openGraph: {
    title: "Tibbe — AI-operators voor werk dat verdergaat",
    description:
      "AI-operators die zelfstandig werk uitvoeren. Met duidelijke grenzen, menselijke goedkeuring en volledig inzicht.",
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
