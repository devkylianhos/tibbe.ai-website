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
  title: "Tibbe — AI-agents en automatisering voor het MKB",
  description:
    "Tibbe helpt mkb-bedrijven terugkerend werk verbeteren met AI-agents en automatisering. Begin met één proces, met duidelijke uitleg, controle en beheer.",
  icons: { icon: "/tibbe-loop.svg" },
  openGraph: {
    title: "Tibbe — AI-agents en automatisering voor het MKB",
    description:
      "Minder terugkerend werk. Meer tijd voor je bedrijf. Ontdek met de keuzehulp waar je kunt beginnen met AI-agents en automatisering.",
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
