/* Tibbe site content — single source of truth.
   Homepagepositionering: custom AI-operaties voor groeiende teams.
   Oudere contentcollecties hieronder ondersteunen nog secundaire routes. */

/* Contact loopt via WhatsApp (nog geen mail).
   Nummer in internationaal formaat zonder + of spaties. */
export const WHATSAPP_NUMBER = "31683127504";

export function waLink(
  text = "Hoi, ik ben geïnteresseerd in Tibbe en wil graag kennismaken.",
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* Primaire CTA "Plan een kennismaking" gaat naar WhatsApp */
export const BOOKING_URL = waLink();

/* Premium operations-homepage: één concrete CTA met passende vooringevulde tekst. */
export const AUDIT_URL = waLink(
  "Hoi, ik wil graag een gratis workflow-audit voor een proces in mijn bedrijf plannen.",
);

/* Oprichter — vul je naam in, dan verschijnt hij overal.
   Foto komt later; zolang photo leeg is tonen we een initialen-avatar. */
export const FOUNDER = {
  name: "Kylian",
  role: "Oprichter van Tibbe, partner van Kitchen Royal",
  photo: "", // TODO: pad naar foto, bv. "/images/oprichter.jpg"
};

/* Betaplekken — houd dit eerlijk bij terwijl je verkoopt */
export const BETA_SEATS_TOTAL = 10;
export const BETA_SEATS_TAKEN = 3; // TODO: bijwerken per verkochte plek

/* Launchmoment — de dag dat de instap van 250 naar 500 euro gaat */
export const LAUNCH_DATE = "2026-09-01T10:00:00+02:00"; // TODO: echte launchdatum

export const nav = [
  { label: "Workflows", href: "/#workflows" },
  { label: "Hoe het werkt", href: "/#hoe-het-werkt" },
  { label: "Vertrouwen", href: "/#vertrouwen" },
];

/* Zeven taken van je AI-werknemer */
export const services = [
  {
    tag: "Content",
    title: "Schrijft je teksten",
    body: "Blogs, productteksten, nieuwsbrieven. Jij noemt het onderwerp, Tibbe schrijft het in jouw woorden.",
  },
  {
    tag: "Inbox",
    title: "Beantwoordt je klantenmail",
    body: "Vragen over levertijd, openingstijden of retouren beantwoordt hij zelf. Lastige mails legt hij eerst aan jou voor.",
  },
  {
    tag: "Facturen",
    title: "Stuurt facturen en herinneringen",
    body: "Netjes en op tijd. Betaalt iemand niet, dan stuurt hij een vriendelijke herinnering. Jij hoeft er niet meer achteraan.",
  },
  {
    tag: "Socials",
    title: "Beheert je social media",
    body: "Posts bedacht, gemaakt en ingepland voor Instagram, Facebook of LinkedIn. Komt er een reactie of berichtje binnen, dan staat het antwoord voor je klaar.",
  },
  {
    tag: "Data",
    title: "Laat zien hoe je zaak ervoor staat",
    body: "Eén overzicht met je omzet, wat er vandaag gedaan is en wat er nog op je wacht. Altijd actueel.",
  },
  {
    tag: "Research",
    title: "Zoekt dingen voor je uit",
    body: "Wat vraagt de concurrent? Welke leverancier is goedkoper? Jij stelt de vraag, hij komt met een helder antwoord.",
  },
  {
    tag: "Administratie",
    title: "Houdt je administratie bij",
    body: "Bestellingen verwerkt, afspraken bevestigd, bonnetjes en overzichten op orde. Alles netjes klaargezet, ook voor je boekhouder.",
  },
];

/* Voor wie — laat verschillende bedrijven zich herkennen */
export const audiences = [
  {
    label: "Webshops",
    body: "Klantvragen, retouren en reviews worden afgehandeld terwijl jij verkoopt.",
  },
  {
    label: "Bureaus",
    body: "Klantupdates en rapportjes staan klaar voordat iemand erom vraagt.",
  },
  {
    label: "Coaches en consultants",
    body: "Je mail en facturen zijn geregeld terwijl jij met klanten bezig bent.",
  },
  {
    label: "Praktijken",
    body: "Afspraken bevestigd, herinneringen verstuurd, administratie bij. Niks blijft liggen.",
  },
  {
    label: "Horeca en retail",
    body: "Reserveringen en berichten beantwoord, ook als jij op de vloer staat.",
  },
  {
    label: "Zzp en klein team",
    body: "Het geregel dat je avonden opeet, uit handen. Zodat je weer aan je werk toekomt.",
  },
];

/* Zo werkt het — het automatiseringsverhaal */
export const howSteps = [
  {
    title: "Jij zegt wat er moet gebeuren",
    body: "Gewoon zoals je het tegen een collega zou zeggen. \"Stuur elke maandag een update naar mijn klanten.\" Meer is het niet.",
  },
  {
    title: "Tibbe gaat aan de slag",
    body: "Ook 's avonds en in het weekend. Wat elke week terugkomt, doet hij vanzelf. Komt er iets nieuws binnen, dan pakt hij het meteen op.",
  },
  {
    title: "Jij zegt ja of nee",
    body: "Gaat er iets naar een klant of gaat het om geld, dan vraagt hij het eerst aan jou. Alles wat hij doet kun je teruglezen en terugdraaien.",
  },
  {
    title: "Elke week doet hij meer",
    body: "Wat één keer goed ging, doet hij voortaan uit zichzelf. Zo neemt hij steeds meer van je bord.",
  },
];

/* Webshop-pagina: gespecialiseerde agents per rol */
export const webshopAgents = [
  {
    role: "Site Agent",
    title: "Past je live site direct aan",
    body: "Gekoppeld aan je platform past hij prijzen, banners, productteksten en kortingscodes aan op je live shop. Elke wijziging eerst langs jou.",
    visual: "site" as const,
  },
  {
    role: "Lead Agent",
    title: "Wint verlaten winkelwagens terug",
    body: "Klant laat zijn mandje staan, kort daarna volgt een persoonlijke follow-up met een unieke kortingscode. Geen handwerk, wel omzet terug.",
    visual: "cart" as const,
  },
  {
    role: "Review Agent",
    title: "Haalt reviews vanzelf binnen",
    body: "Na elke levering een reviewverzoek op het juiste moment en in jouw toon. Negatieve reviews escaleren intern voordat ze publiek gaan.",
    visual: "review" as const,
  },
  {
    role: "Creative Agent",
    title: "Maakt beeld en video uit je catalogus",
    body: "Banners, productfoto-varianten, story-creatives en korte video-ads, gegenereerd uit je bestaande producten. Klaar om te plaatsen.",
    visual: "creative" as const,
  },
  {
    role: "Service Agent",
    title: "Doet je klantenservice, dag en nacht",
    body: "Standaardvragen, retouren en beschikbaarheid via WhatsApp, mail en chat. In jouw stem, en alleen wat menselijk oordeel vraagt komt bij jou.",
    visual: "service" as const,
  },
];

/* Hoe het werkt, in een week */
export const week = [
  {
    day: "Dag 1",
    title: "Kennismaking",
    body: "We leren je bedrijf kennen en nemen de call op als leerbasis voor je werknemer.",
  },
  {
    day: "Dag 2 tot 4",
    title: "Bouwen en trainen",
    body: "We trainen je werknemer op jouw diensten, toon en branding tot het klopt.",
  },
  {
    day: "Dag 4",
    title: "Eigen omgeving",
    body: "Een afgeschermde omgeving in de cloud. Wij regelen hosting en koppelingen.",
  },
  {
    day: "Dag 5",
    title: "Aan het werk",
    body: "Je werknemer draait en jij ziet alles terug in je dashboard.",
  },
  {
    day: "Doorlopend",
    title: "Slimmer worden",
    body: "Elke call en elke werkweek maakt hem scherper op jouw bedrijf.",
  },
];

/* Koppelingen om te tonen */
export const integrations = [
  "Gmail",
  "Slack",
  "Notion",
  "Shopify",
  "WooCommerce",
  "Klaviyo",
  "Mollie",
  "Meta",
  "Instagram",
  "TikTok",
];

/* Techniek en vertrouwen */
export const trust = [
  {
    eyebrow: "Gekoppeld aan je tools",
    title: "Alles in één brein, altijd actueel",
    body: "Tibbe plugt in op je e-mail, je kanalen en de tools waar je bedrijf al op draait. Van Gmail en Slack tot Shopify en Mollie, samen in één werknemer.",
    align: "left" as const,
  },
  {
    eyebrow: "Jij houdt de regie",
    title: "Jij keurt goed wat telt",
    body: "Tibbe doet het werk, jij zet de laatste stap. Alles is gelogd en omkeerbaar, dus je ziet precies wat er gebeurt en draait het terug als je wilt.",
    align: "right" as const,
  },
  {
    eyebrow: "Gehost door ons · 24/7",
    title: "Eigen werknemer, afgeschermde omgeving",
    body: "Elke klant krijgt een eigen werknemer in een afgeschermde omgeving. Een aparte bewakingsbot vanuit ons team houdt alles in de gaten, dag en nacht.",
    align: "left" as const,
  },
];

/* FAQ — elke vraag zoals iemand hem echt stelt, elk antwoord zonder vaktaal */
export const faq = [
  {
    q: "Wat is Tibbe nou precies?",
    a: "Een medewerker die op de computer werkt, maar dan eentje die nooit naar huis gaat. Hij beantwoordt je mail, stuurt je facturen, schrijft je teksten en regelt het werk dat elke week terugkomt. Jij zegt wat er moet gebeuren, hij doet het.",
  },
  {
    q: "Kan hij ook mijn social media en administratie doen?",
    a: "Ja, allebei. Hij bedenkt en maakt posts, plant ze in en zet antwoorden op reacties voor je klaar. En je administratie houdt hij bij: bestellingen, afspraken, bonnetjes en overzichten, netjes op orde voor je boekhouder. Jij zegt overal ja of nee tegen.",
  },
  {
    q: "Wat doet hij op de eerste dag al?",
    a: "In de kennismaking koppelen we samen je mail, je agenda en je WhatsApp. Diezelfde dag pakt hij zijn eerste taken op: je inbox opschonen, klanten opvolgen, een factuur achterna. Je ziet binnen een paar uur al resultaat, niet pas over weken.",
  },
  {
    q: "Ik ben niet technisch. Is dat een probleem?",
    a: "Nee. Je hoeft niks te installeren en niks in te stellen. In één gesprek zetten wij alles voor je klaar, live, terwijl jij meekijkt. Moet er ergens een wachtwoord in, dan typ jij dat zelf. Wij zien het nooit.",
  },
  {
    q: "Is mijn bedrijfsinformatie wel veilig?",
    a: "Ja. Jouw Tibbe draait op een eigen plek die alleen van jou is. Niks wordt gedeeld met andere bedrijven. Alles wat hij doet kun je teruglezen en terugdraaien, en gaat er iets naar een klant of om geld, dan vraagt hij het eerst aan jou.",
  },
  {
    q: "Ik gebruik al ChatGPT. Wat is het verschil?",
    a: "ChatGPT wacht tot jij iets typt en geeft dan antwoord. Tibbe werkt zelf door, ook als je laptop dicht is. Hij zit in je mail en je agenda en handelt dingen af. Een chatbot antwoordt. Tibbe werkt.",
  },
  {
    q: "Neemt hij mijn mensen hun werk af?",
    a: "Hij neemt het saaie, terugkerende werk over: mail, facturen, geregel. Zo houden jij en je team tijd over voor het werk dat echt aandacht verdient. Jij bepaalt wat hij doet, en jij zegt overal ja of nee tegen.",
  },
  {
    q: "Wat kost het?",
    a: "Tijdens de beta 250 euro per maand (zonder btw), en die prijs blijft, zolang je klant blijft. Later wordt het 500 euro per maand. De kosten van de AI zelf komen daar nog bij. Je zit nergens aan vast: elke maand opzegbaar.",
  },
  {
    q: "En als het me niks oplevert?",
    a: "Dan krijg je je geld terug. Levert Tibbe je in de eerste 14 dagen niet meer op dan hij kost, dan betaal je niks. Zo simpel.",
  },
  {
    q: "Groeit hij mee als mijn bedrijf verandert?",
    a: "Ja. Krijg je nieuwe klanten, nieuwe taken of een nieuwe manier van werken, dan leert hij dat erbij. En wat bij andere bedrijven goed werkt, komt ook bij jou terecht. Jouw gegevens blijven wel altijd bij jou.",
  },
  {
    q: "Oké. Wat gebeurt er in zo'n kennismaking?",
    a: "Een half uur, via WhatsApp of een belletje. Je vertelt wat er nu blijft liggen, we koppelen live je mail en agenda, en we kiezen samen de eerste klus die Tibbe diezelfde dag voor je doet. Kom met je rommeligste proces.",
  },
];
