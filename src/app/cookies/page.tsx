import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { CookieSettingsButton } from "@/components/CookieBanner";
export const metadata: Metadata = {
  title: "Cookiebeleid — Tibbe", description: "Bekijk welke cookies Tibbe gebruikt en pas je toestemming voor Google Analytics aan.",
  alternates: { canonical: "/cookies" },
  openGraph: { title: "Cookiebeleid — Tibbe", description: "Bekijk welke cookies Tibbe gebruikt en pas je toestemming voor Google Analytics aan.", url: "/cookies" },
};
export default function CookiesPage() {
  return (
    <LegalShell title="Cookiebeleid" updated="5 oktober 2026">
      <p>Deze website gebruikt functionele opslag. Google Analytics wordt alleen geladen als je kiest voor ‘Analytics toestaan’. Kies je ‘Alleen noodzakelijk’, dan wordt Analytics niet geladen. We gebruiken geen advertentiecookies.</p>
      <h2>Wat we opslaan</h2>
      <p><strong>Je sessie — tibbe_uid.</strong> Wanneer je inlogt in de Tibbe-app, bewaart deze cookie je sessie gedurende maximaal 30 dagen. Bij uitloggen wordt de cookie verwijderd.</p>
      <p><strong>Je cookievoorkeur — tibbe-analytics-consent-v1.</strong> We bewaren je keuze in de lokale opslag van je browser. Deze voorkeur wordt niet naar onze server verstuurd en blijft bewaard totdat je hem wijzigt of je websitegegevens wist.</p>
      <p><strong>Google Analytics — _ga en _ga_*.</strong> Na toestemming gebruikt Google Analytics cookies om bezoeken en gebruik van de website te meten. Daarbij ontvangt Google onder meer informatie over bezochte pagina’s, je browser en apparaat. Advertentiepersonalisatie en Google Signals staan in deze integratie uit.</p>
      <h2>Je keuze wijzigen</h2>
      <p>Je kunt hieronder je voorkeur wijzigen of toestemming intrekken door ‘Alleen noodzakelijk’ te kiezen. De meting wordt dan uitgeschakeld en de Analytics-cookies op dit domein worden verwijderd. Eerder verstuurde gegevens worden daarmee niet automatisch verwijderd.</p>
      <CookieSettingsButton />
      <h2>Meer weten</h2>
      <p>Meer over persoonsgegevens lees je in onze <a href="/privacy">privacyverklaring</a>.</p>
    </LegalShell>
  );
}
