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
  title: "Tibbe — AI-operaties voor groeiende teams",
  description:
    "Tibbe bouwt custom AI-agents voor terugkerend werk over support, sales, administratie en rapportage — gekoppeld aan je bestaande stack.",
  applicationName: "Tibbe",
  icons: { icon: "/brand/favicon.svg" },
  openGraph: {
    title: "Tibbe — AI-operaties voor groeiende teams",
    description:
      "Custom AI-agents voor terugkerend werk tussen de systemen waarop je operatie al draait.",
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
    title: "Tibbe — AI-operaties voor groeiende teams",
    description:
      "Custom AI-agents voor support, sales, administratie en rapportage, met approvals waar een mens nodig blijft.",
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
