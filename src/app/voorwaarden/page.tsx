import { siteConfig } from "@/content/website";
import Link from 'next/link';
import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { AGENT_TEAM_MONTHLY_PRICE, BETA_MONTHLY_PRICE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — Tibbe", description: "Lees de voorwaarden van Tibbe over dienstverlening, afspraken en verantwoordelijkheden.",
  alternates: { canonical: "/voorwaarden" },
  openGraph: { title: "Algemene voorwaarden — Tibbe", description: "Lees de voorwaarden van Tibbe over dienstverlening, afspraken en verantwoordelijkheden.", url: "/voorwaarden" },
};

export default function VoorwaardenPage() {
  return (
    <LegalShell title="Algemene voorwaarden" updated="12 oktober 2026">
      <div className="legal-note">
        Deze voorwaarden beschrijven het AI-abonnement van Tibbe, geleverd door{" "}
        <strong>Tibbe</strong>, Parelweg 11,
        1812 RS Alkmaar, KvK 80015298. Vragen? Neem contact op met{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </div>

      <p>Zoek je informatie over een website, webshop of automatiseringsproject? De werkzaamheden, prijs en planning daarvan bespreken we in een afzonderlijk voorstel. <Link href="/#contact">Bespreek je project</Link>.</p>

      <h2>1. De AI-dienst</h2>
      <p>
        Het AI-abonnement van Tibbe ondersteunt terugkerend werk voor je bedrijf.
        Je krijgt een eigen agent in een afgeschermde omgeving die wij hosten. Wat
        naar buiten gaat of zwaar telt, gebeurt met jouw goedkeuring.
      </p>

      <h2>2. Abonnement en opzeggen</h2>
      <p>
        Je gaat een maandabonnement aan. Tijdens de beta is de prijs {BETA_MONTHLY_PRICE} euro
        excl. btw per maand, en die prijs blijft staan zolang je klant blijft. Bij
        de volledige launch kost het normale Agent Team {AGENT_TEAM_MONTHLY_PRICE} euro excl. btw per maand. Token usage
        en het Claude-abonnement komen daar nog bij. Je kunt maandelijks opzeggen;
        je opzegging gaat in aan het einde van de lopende maand.
      </p>

      <h2>3. Garantie</h2>
      <p>
        Levert Tibbe in de eerste 14 dagen niet meer op dan je betaalt, dan krijg
        je je geld terug. We spreken vooraf samen af wat een resultaat is, zodat
        dit voor ons allebei helder is.
      </p>

      <h2>4. Jouw verantwoordelijkheid</h2>
      <ul>
        <li>Je zorgt dat je de tools mag koppelen die je aan Tibbe verbindt.</li>
        <li>Je keurt goed wat naar buiten gaat; je blijft verantwoordelijk voor je eigen communicatie en verplichtingen.</li>
        <li>Je gebruikt Tibbe niet voor onwettige doeleinden.</li>
      </ul>

      <h2>5. Onze verantwoordelijkheid</h2>
      <p>
        We leveren de dienst met zorg en houden je omgeving afgeschermd en
        bewaakt. We kunnen geen specifiek resultaat garanderen buiten de garantie
        in artikel 3. Onze aansprakelijkheid is beperkt tot het bedrag dat je in
        de drie maanden voor een gebeurtenis hebt betaald, voor zover de wet dat
        toestaat.
      </p>

      <h2>6. Je gegevens</h2>
      <p>
        Hoe we met persoonsgegevens omgaan lees je in onze{" "}
        <a href="/privacy">privacyverklaring</a>. Je data blijft van jou. Stop je
        als klant, dan gaat je werkinhoud met je mee en verwijderen we je
        omgeving.
      </p>

      <h2>7. Wijzigingen</h2>
      <p>
        We kunnen deze voorwaarden aanpassen. Bij een belangrijke wijziging laten
        we het je op tijd weten. Blijf je de dienst gebruiken, dan geldt de nieuwe
        versie.
      </p>

      <h2>8. Toepasselijk recht</h2>
      <p>
        Op deze voorwaarden is Nederlands recht van toepassing. Geschillen leggen
        we voor aan de bevoegde rechter in Nederland.
      </p>
    </LegalShell>
  );
}
