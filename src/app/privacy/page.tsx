import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacyverklaring — Tibbe",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacyverklaring" updated="12 juli 2026">
      <div className="legal-note">
        Tibbe is een dienst van <strong>Tibbe</strong>,
        Parelweg 11, 1812 RS Alkmaar, KvK 80015298. Vragen over je gegevens? Mail{" "}
        <a href="https://wa.me/31683127504?text=Hoi%2C%20ik%20heb%20een%20vraag%20over%20mijn%20gegevens%20bij%20Tibbe." target="_blank" rel="noopener">ons via WhatsApp</a>.
      </div>

      <p>
        Deze verklaring legt uit welke persoonsgegevens we verwerken als je onze
        website gebruikt of klant bij ons wordt, waarom we dat doen en welke
        rechten je hebt. We houden het zo kort en helder als kan.
      </p>

      <h2>Welke gegevens we verwerken</h2>
      <ul>
        <li>
          <strong>Contactgegevens.</strong> Naam, e-mailadres en telefoonnummer die
          je achterlaat als je een kennismaking plant of je aanmeldt voor de
          launchlijst.
        </li>
        <li>
          <strong>Accountgegevens.</strong> Het e-mailadres waarmee je inlogt op je
          Tibbe-dashboard.
        </li>
        <li>
          <strong>Koppelingen.</strong> Als je tools koppelt, verwerken we de
          toegang die je daarvoor geeft. De inloggegevens zelf zie je alleen jij;
          die lopen via de beveiligde koppeling en raken ons dashboard niet.
        </li>
        <li>
          <strong>Werkinhoud.</strong> De content, berichten en gegevens die je
          agent voor je verwerkt, in jouw eigen afgeschermde omgeving.
        </li>
        <li>
          <strong>Betaalgegevens.</strong> Bij een abonnement verloopt de betaling
          via onze betaalprovider. Wij bewaren geen volledige kaartgegevens.
        </li>
        <li>
          <strong>Technische gegevens.</strong> Basale, geanonimiseerde gegevens
          om de site te laten werken. We volgen je niet over websites heen.
        </li>
      </ul>

      <h2>Waarom we het verwerken</h2>
      <ul>
        <li>Om je aanvraag of kennismaking af te handelen.</li>
        <li>Om de dienst te leveren en je agent te laten draaien (uitvoering van de overeenkomst).</li>
        <li>Om onze dienst veilig te houden en te verbeteren (gerechtvaardigd belang).</li>
        <li>Om te voldoen aan wettelijke verplichtingen, zoals de administratie.</li>
      </ul>

      <h2>Met wie we gegevens delen</h2>
      <p>
        We verkopen je gegevens nooit. We werken met een klein aantal
        verwerkers die ons helpen de dienst te leveren:
      </p>
      <table>
        <thead>
          <tr>
            <th>Partij</th>
            <th>Waarvoor</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Vercel</td><td>Hosting van de website</td></tr>
          <tr><td>Anthropic (Claude)</td><td>Het AI-model achter je agent</td></tr>
          <tr><td>Composio</td><td>Beveiligde koppelingen met je tools</td></tr>
          <tr><td>Stripe</td><td>Betalingen (bij een abonnement)</td></tr>
        </tbody>
      </table>
      <p>
        Met elke verwerker hebben we afspraken over de bescherming van je
        gegevens. Waar gegevens buiten de EU worden verwerkt, gebeurt dat met
        passende waarborgen.
      </p>

      <h2>Hoe lang we het bewaren</h2>
      <p>
        We bewaren je gegevens niet langer dan nodig. Contactgegevens van een
        aanvraag bewaren we tot twee jaar na het laatste contact. Klantgegevens
        bewaren we zolang je klant bent en daarna zolang de wet ons verplicht
        (bijvoorbeeld zeven jaar voor de administratie). Stop je als klant, dan
        gaat je werkinhoud met je mee en verwijderen we je afgeschermde omgeving.
      </p>

      <h2>Jouw rechten</h2>
      <p>
        Je hebt het recht om je gegevens in te zien, te corrigeren of te laten
        verwijderen, en om bezwaar te maken tegen de verwerking. Stuur een mail
        naar <a href="https://wa.me/31683127504?text=Hoi%2C%20ik%20heb%20een%20vraag%20over%20mijn%20gegevens%20bij%20Tibbe." target="_blank" rel="noopener">ons via WhatsApp</a> en we regelen
        het. Ben je het ergens niet mee eens, dan kun je een klacht indienen bij
        de Autoriteit Persoonsgegevens.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        We passen deze verklaring aan als onze dienst verandert. De datum
        bovenaan laat zien wanneer we hem voor het laatst hebben bijgewerkt.
      </p>
    </LegalShell>
  );
}
