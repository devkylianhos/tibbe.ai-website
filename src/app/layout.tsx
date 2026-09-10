import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/website.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tibbe.app"),
  title: "Tibbe — AI-operators voor werk dat verdergaat",
  description:
    "Tibbe bouwt betrouwbare AI-operators die terugkerend werk uitvoeren binnen duidelijke grenzen. Jij houdt overzicht en keurt belangrijke acties goed.",
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
      </body>
    </html>
  );
}
