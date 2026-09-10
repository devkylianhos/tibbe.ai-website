# Tibbe.ai — website QA

Gecontroleerd op 10 september 2026. Bron van de visuele controle: Paper V2, `WEBSITE_DESIGN.md`, en de gerenderde lokale implementatie.

## Uitgevoerde controles

- TypeScript, ESLint, tests en de Next.js-productiebuild slagen.
- Browser: homepage, desktop hero, capability-paneel, tablet hero, mobiele hero, mobiele approval en contactformulier visueel bekeken.
- Effectieve CSS-breedtes 375, 430, 768, 1024, 1440 en 1920 gecontroleerd. Pagina-scrollbreedte gelijk aan viewportbreedte; geen horizontale pagina-overloop. De browserschaal moest opnieuw gekalibreerd worden; de genoemde afmetingen zijn gemeten via `innerWidth`.
- Alle interne homepage-ankers verwijzen naar bestaande elementen.
- Hero-selector wisselt tussen signaal, besluit en bewijs. Langere teksten overlappen de selector niet na de responsive correctie.
- Capability-selector wisselt inhoud. ArrowRight selecteert de volgende tab en `aria-selected` wijzigt mee; Home/End en de overige pijltjestoetsen zijn geïmplementeerd.
- Bronpaneel opent en toont factuur/bestelling, voorgestelde verandering en impact.
- Goedkeuren, afwijzen en opnieuw starten werken in de demo. Uitkomst en werklog wijzigen; er wordt geen externe actie uitgevoerd.
- Focus gaat na een beslissing naar de beschikbare vervolgknop. Uitkomst heeft een live region.
- Mobiel menu opent; Escape sluit het en brengt focus terug naar de menuknop.
- FAQ opent met native details/summary.
- Privacydialog opent en sluit via Escape; native dialog verzorgt focusbeperking.
- Contactformulier getest met fictieve gegevens: correct geadresseerd en URL-gecodeerd e-mailconcept, geen daadwerkelijke verzending. Aanpassen van een veld verwijdert het oude concept. Required- en e-mailvalidatie gebruiken HTML-formvalidatie.
- Geen browser-consolefouten of waarschuwingen aangetroffen in de schone preview tijdens de eindcontrole.
- Fontbestanden worden lokaal gebundeld met `font-display: swap`.
- Reduced-motion is in CSS en in de JavaScript-reveal ingesteld. De inhoud blijft standaard zichtbaar; animatie is een verbetering, geen voorwaarde om de site te lezen.

## Visuele verbeteringen uit QA

De absolute hero-compositie gaf op mobiel overlap bij langere tekst. Mobiel gebruikt nu een inhoudsafhankelijk raster en de tablet-layout schakelt eerder naar één kolom. Te kleine technische labels zijn vergroot. De homepage verwijst contextueel naar het bestaande klantportaal op `/app`.

De ruimtelijke motionlaag is na implementatie visueel gecontroleerd: de hero gebruikt muisgestuurde perspectiefdiepte, twee merkring-orbits en een subtiele lichtbron; het capability-paneel reageert op cursorpositie; de Mission Control-console gebruikt een rustige fysieke hover. Op tablet, touch en reduced-motion worden de perspectieftransformaties verwijderd of teruggebracht.

## Toegankelijkheid en performance

Semantische headings, labels, skiplink, expliciete focusstates, tabbediening, native dialog/details en tekst plus symbolen bij status. De primaire tekst-, CTA- en statuskleurcombinaties voldoen berekend aan 4.5:1. Dit is geen volledige onafhankelijke WCAG-certificering. Reduced motion is via broncontrole beoordeeld, niet met een aangepaste OS-instelling.

Fonts worden lokaal geladen en de 3D-effecten bestaan uit GPU-vriendelijke CSS-transforms, opacity en kleine pointer-updates; er is geen video of WebGL-pakket toegevoegd. Het klantportaal wordt via de bestaande aparte route geladen. De productie-afhankelijkheden zijn gecontroleerd met `npm audit --omit=dev`: 0 bekende kwetsbaarheden. Geen claim van gemeten Core Web Vitals: daarvoor is real-user monitoring nodig.

## Grenzen vóór livegang

- `hello@tibbe.ai` is overgenomen uit de bestaande starter en moet bevestigd worden.
- Formulier levert een e-mailconcept, geen server-side leadopslag of agenda-afspraak.
- `/app` is het bestaande klantportaal en blijft afhankelijk van de bestaande authenticatie en backendconfiguratie.
- Klantbewijs, sociale profielen, juridische bedrijfsgegevens en definitieve voorwaarden zijn niet aangeleverd. Er zijn geen fictieve klanten, certificaten of prestatiecijfers toegevoegd.
- Publicatie loopt via de bestaande GitHub- en Vercel-koppeling van tibbe.app.

## Kwaliteitscheck

- [x] Actuele Tibbe-identiteit herkenbaar; logo en V2-kleuren behouden.
- [x] Eigen compositie met een functioneel doorlopend pad.
- [x] Referentie gebruikt voor ritme en interactie, geen assets of copy overgenomen.
- [x] Concrete propositie, duidelijke CTA's en merkconforme Nederlandse copy.
- [x] Geen verzonnen klantresultaten of testimonials.
- [x] Doelgerichte secties, bewuste typografie en witruimte.
- [x] Interactieve approval als onderscheidende productervaring.
- [x] Responsive gedrag, focus, contrast en motion-afbouw meegenomen.
- [x] Herbruikbare componenten en gescheiden content.
- [x] Build en bovenstaande browsercontroles geslaagd.
