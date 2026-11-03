# Tibbe agencywebsite: wijzigingsversie

Datum: 2026-11-03. Opdracht: Kylian vroeg de bestaande website te verbeteren volgens de eerder besproken richting.
Repository: https://github.com/devkylianhos/tibbe.ai-website
Basiscommit: 4b591e523bd16a6ce13cea3d6ffa8904669a7874
Lokale branch: codex/tibbe-agency-keuzehulp

## Resultaat
- Homepage en metadata richten zich op AI-agents, automatisering en beheer voor het mkb. Websites en webshops blijven zelfstandig beschikbaar.
- Zesvragenkeuzehulp in de homepage met vier mogelijke uitkomsten: inventarisatie, procesverbetering, vaste automatisering of AI-proef.
- Antwoordknoppen, teruggaan, herstart, samenvatting en kopiëren met selecteerbare fallback. Veranderen van werkgebied wist de oude taak.
- Onbekende tijdsbesteding leidt ook naar inventarisatie. Automatisch uitvoeren is een voorkeur, geen toestemming of toezegging.
- Geen opslag, API, analytics-events of verzending van keuzehulpantwoorden. Vrije toelichting verschijnt alleen in de samenvatting, niet in de beslislogica.
- Drie samenwerkingsvormen: bouw, bouw + beheer, beheer bestaande oplossing. Geen fictieve prijzen, besparingen, inbegrepen uren of garanties toegevoegd.
- Navigatie, introducties, FAQ en contactteksten sluiten op de nieuwe richting aan.

## Ontwerpkeuzes en bronnen
De bestaande website is het vaste ontwerptarget: Schibsted Grotesk, ink/paper, deepwater-acties, dunne lijnen en bestaande logo/fotografie/motion. Geen nieuwe assets of afhankelijkheden.
- WEBSITE_DESIGN.md en src/styles/tokens.css: huisstijl en rollen van kleuren/typografie.
- Refero-design craft-details.md: zichtbare focus, native radiogroepen, labels, mobiel en foutafhandeling.
- Refero-design copywriting.md: concrete werkzaamheden en duidelijke vervolgstap.
- Refero live styles gaf NO_SUBSCRIPTION; geen installatie of aankoop gedaan.
- Cursusbesluiten uit N06: brede agentic agency, één proces, antwoordknoppen, direct advies zonder verplicht contactformulier, kernzin over werk dat vastloopt.
- Officiële Next use-client-documentatie geraadpleegd: https://nextjs.org/docs/app/api-reference/directives/use-client. De repository bevat geen node_modules/next/dist/docs; er zijn geen afhankelijkheden geïnstalleerd.

## Controle en resultaten
- Kylian gaf expliciet toestemming op 2026-11-03 om voor deze eigen repository de SkillSpector-voorwaarde te vervangen door bronreview, typecheck, tests, build en browsercontrole. Geen algemene wijziging van de cursusregels.
- npm ci --ignore-scripts: 372 packages uit ongewijzigd lockbestand. Geen lifecycle-scripts uitgevoerd.
- Next 16.3.4 meegeleverde use-client-handleiding gelezen na installatie.
- npm test: 13/13 geslaagd, inclusief 7 nieuwe advieslogica-tests.
- npm run lint: geslaagd.
- npm run build (webpack): geslaagd, inclusief volledige TypeScriptcontrole en 16 routes.
- Browser: zes vragen, AI-advies, teruggaan met behoud van antwoorden, gewijzigd softwareantwoord naar inventarisatieadvies, kopiëren en herstart gecontroleerd.
- Visueel: mobiele hero en keuzes op 390px, aanbod en tabletweergave bekeken. Vragen krijgen scroll-margin zodat focus niet achter de vaste navigatie verdwijnt.
- Clipboard-succes getest; geweigerde clipboardtoegang niet gesimuleerd. Geen volledige WCAG-audit of penetratietest.
- Geen echte berichten verzonden of klantkoppelingen geactiveerd. Productie niet gewijzigd.

## Bronreview, geen veiligheidscertificaat
Nieuwe broncode is zonder scripts, submodules of hooks gedownload. package.json heeft dev/build/start/lint/test; geen install-lifecycle script op projectniveau. Lockbestand blijft intact. De repo bevat geen meegeleverde GitHub workflows of eigen hooks. Afhankelijkheden zijn niet geïnstalleerd en niet volledig security-geaudit.
Bestaand netwerk: Google Analytics na toestemming in src/lib/analytics.ts; Composio in src/lib/portal.ts en src/app/api/koppelingen/connect/route.ts; mailto/WhatsApp na gebruikersactie. Geen nieuwe netwerktoegang of secrets toegevoegd.

De scanner is niet beschikbaar; er bestaat geen SkillSpector-scanrapport. De eigenaar heeft expliciet de hierboven genoemde vervangende controles voor deze repository goedgekeurd.

## Bestaande aandachtspunten, buiten deze marketingwijziging
- src/lib/session.ts gebruikt een onbewezen e-mailadres in een cookie als gebruikersidentiteit. De Composio-route vertrouwt daarop. Dit is geen geschikte authenticatie voor echte klantkoppelingen; echte identiteitsverificatie en een autorisatiecontrole vereisen een afzonderlijke implementatie vóór gebruik met klanten. Geen toegang of accounts getest.
- /voorwaarden bevat oudere beta- en Agent Team-prijzen en een resultaatgarantie. Niet overgenomen als prijs/garantie van het nieuwe aanbod. Bestaande contracttekst blijft ongewijzigd; eigenaar moet toepasselijkheid bevestigen voordat deze wijziging live gaat.
- Bestaande tests/pricing.test.mjs bewaakt historische prijsconstanten. Dat bewijst geen actuele prijsafspraak.

## Vervolg
Beoordeel de draft PR en preview. Bevestig de verhouding tot de oudere abonnementsvoorwaarden voordat de marketingwijziging live gaat. Pak de authenticatie van het bestaande portaal afzonderlijk aan vóór echte klantkoppelingen. Geen automatische merge of productiepublicatie.
