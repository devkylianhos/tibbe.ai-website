import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { CookieSettingsButton } from "@/components/CookieBanner";
export const metadata: Metadata = { title: "Cookiebeleid — Tibbe" };
export default function CookiesPage() {
  return (
    <LegalShell title="Cookiebeleid" updated="11 september 2026">
      <p>Deze website gebruikt functionele opslag. Er zijn geen analytics- of marketingcookies ingeschakeld. De cookiemelding is informatief: met ‘Begrepen’ zet je geen tracking aan.</p>
      <h2>Wat we opslaan</h2>
      <p><strong>Je sessie — tibbe_uid.</strong> Wanneer je inlogt in de Tibbe-app, bewaart deze cookie je sessie gedurende maximaal 30 dagen. Bij uitloggen wordt de cookie verwijderd.</p>
      <p><strong>De cookiemelding — tibbe-cookie-notice-v1.</strong> We bewaren in de lokale opslag van je browser dat je de melding hebt gesloten. Dit is geen cookie en wordt niet naar onze server verstuurd. Het blijft bewaard totdat je de websitegegevens in je browser wist.</p>
      <h2>De melding opnieuw bekijken</h2>
      <p>Je kunt de melding hieronder opnieuw openen. Wil je de opgeslagen bevestiging verwijderen? Wis dan de websitegegevens van tibbe.app in je browser.</p>
      <CookieSettingsButton />
      <h2>Meer weten</h2>
      <p>Meer over persoonsgegevens lees je in onze <a href="/privacy">privacyverklaring</a>.</p>
    </LegalShell>
  );
}
