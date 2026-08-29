import type { Metadata } from "next";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tibbe.app"),
  title: "Tibbe — AI-operaties voor e-commerce",
  description:
    "Tibbe bouwt AI-agents voor Nederlandse e-commercebedrijven: geselecteerde workflows voor klantenservice, orders en retention, met approvals en een traceerbaar logboek.",
  applicationName: "Tibbe",
  icons: { icon: "/brand/favicon.svg" },
  openGraph: {
    title: "Tibbe — AI-operaties voor e-commerce",
    description:
      "AI-agents die niet alleen antwoorden, maar geselecteerde e-commerceworkflows uitvoeren — met approvals en een traceerbaar logboek.",
    url: "https://tibbe.app",
    siteName: "Tibbe",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/brand/tibbe-mark-512.png",
        width: 512,
        height: 512,
        alt: "Tibbe merkteken",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tibbe — AI-operaties voor e-commerce",
    description:
      "Geselecteerde workflows voor klantenservice, orders en retention, met approvals en logboek.",
    images: ["/brand/tibbe-mark-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${sourceSerif.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
