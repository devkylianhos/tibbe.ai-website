# Tibbe.ai — website richting en specificatie

## 1. Merkinterpretatie

Bron: actuele Paper-pagina **Brandbook V2 — Tibbe Loop**, artboards 00–11, bekeken op 10 september 2026. De V2-tokens hebben voorrang op de oudere tokens die ook nog in het Paper-bestand staan. De oorspronkelijke HTML-export is een eerdere versie.

Tibbe maakt complex werk voorspelbaar: zichtbaar, navolgbaar en bestuurbaar. De persoonlijkheid is rustig, direct en behulpzaam. De centrale belofte is een digitale collega die werk uitvoert en uitlegt. Doelgroep voor deze website: ondernemers en operationele teams met terugkerend werk; dit is een ontwerpaanname, geen expliciet gedefinieerde sectorclaim.

Logo: bestaande Tibbe Loop, ongewijzigd; minimaal 24 px, vrije ruimte volgens 2× de lijndikte. Geen rotatie of extra kleuren. Grafisch systeem: een doorlopende lijn mag proces, relatie en overdracht tonen, nooit willekeurige versiering. Trust pattern: Observe → Analyze → Recommend → Approve → Execute → Verify. Toon voor uitvoering context, bron, impact en risico.

Schibsted Grotesk voor merk en UI; JetBrains Mono uitsluitend voor systeemlabels, nummers en metadata. Ink/paper vormen de basis. Deepwater markeert acties, lightwater ondersteunt op donker. De statuskleuren behouden hun betekenis. Fotografie en klantenbewijs zijn niet beschikbaar; daarom gebruikt de site eigen interfacevisualisaties en duidelijk gemarkeerde voorbeeldsituaties.

## 2. Referentieanalyse

[187n.ai](https://187n.ai/) is bekeken in tekst én gerenderd in de browser. Relevante principes: zeer lichte navigatie, grote typografische momenten, ruimtelijke hero, uitgesproken licht/donkerwisselingen, een genummerde selector naast een productpaneel, controleregels zichtbaar in de interface, en herhaalde contextuele contactacties. De referentie gaat van propositie via werkzaamheden en besturing naar contact.

We nemen deze principes over, geen teksten, logo's, beelden, resultaten, aanbod of garanties. Tibbe gebruikt een eigen asymmetrische compositie en het merkgebonden doorlopende pad. Refero live research gaf NO_SUBSCRIPTION; de meegeleverde Refero-richtlijnen voor typografie, motion en visuele QA zijn als aanvullende craft-bron gebruikt.

## 3. Creatieve richting: Werk in beweging. Rust in beeld.

1. Donker, rustig hero-canvas met een groot, direct Nederlands statement.
2. Het Tibbe-pad verbindt een binnengekomen signaal met voorstel en aantoonbaar resultaat.
3. Lichte, ruime middensecties geven uitleg en vergelijking ademruimte.
4. UI is echt HTML: scherpe tekst, bereikbare knoppen en begrijpelijke states.
5. Een interactieve goedkeuring is de signature: de bezoeker ziet waarom Tibbe wacht en beslist zelf.
6. Typografie draagt de compositie; mono draagt de systeeminformatie.
7. Dunne lijnen, rechte panelen, beperkte radius en weinig schaduw.
8. Bewijs komt uit zichtbare proceslogica; geen verzonnen klantlogo's of metrics.

### Vastgelegde ontwerpkeuzes

| Keuze                                   | Bron                               | Rol                              |
| --------------------------------------- | ---------------------------------- | -------------------------------- |
| Ink/paper, Loop en fonts                | Paper V2                           | Onveranderde merkidentiteit      |
| Doorlopende workflow in hero            | Continuous path-artboard           | Proces, geen decoratie           |
| Genummerde capability-selector          | 187n.ai                            | Eén onderwerp en paneel tegelijk |
| Goedkeuring als onderbreking            | Trust pattern-artboard             | Mens beslist vóór gevolg         |
| 120/200/320 ms motion                   | Refero motion                      | Feedback en continuïteit         |
| Voorbeeldcase in plaats van testimonial | Gebrek aan goedgekeurd klantbewijs | Geen schijnbewijs                |

## 4. Sitemap

- `/`: volledige Nederlandse marketinghomepage.
  - `#mogelijkheden`, `#werkwijze`, `#ervaring`, `#praktijk`, `#over`, `#vragen`, `#contact`.
- `/app`: bestaand klantportaal, met eigen authenticatie en routes.
- Privacy: toegankelijk dialoogvenster met uitsluitend het gedrag van deze website.
- Voorwaarden: opvragen via contact; definitieve voorwaarden vereisen bedrijfsinformatie.

Uitbreidingen na beschikbare inhoud: afzonderlijke klantcases, resources en oplossingpagina's. Geen lege routes in de oplevering.

## 5. Homepage-architectuur

| Sectie         | Doel en headline                              | Copy / visual                                                       | Interactie / CTA                                 | Mobiel                                        |
| -------------- | --------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------- |
| Navigatie      | Oriëntatie                                    | Logo, Mogelijkheden, Werkwijze, In de praktijk                      | Plan een kennismaking; menu                      | Compact logo, contact en menu                 |
| Hero           | Propositie: Werk gaat door. Jij houdt koers.  | AI-operator voor terugkerend werk; signaal → voorstel → bewijs      | Kennismaking; ontdek de demo; klik processtap    | Eigen verticale compositie, vereenvoudigd pad |
| Trust          | Onzekerheid verlagen                          | Context, menselijke goedkeuring, controlelog                        | Link naar ervaring                               | Verticale regels                              |
| Probleem       | Het werk tussen je tools.                     | Overdracht, controle, opvolging; redactionele tweekolom             | Door naar mogelijkheden                          | Kop en operationele lijst stapelen            |
| Capabilities   | Eén operator. Meerdere taken.                 | Vier getypeerde voorbeeldworkflows                                  | Selector wisselt copy en voorbeeldpaneel         | Horizontaal scrollbare tabs, paneel eronder   |
| Werkwijze      | Van eerste signaal tot aantoonbaar resultaat. | Vier stappen met het volledige zesdelige trust pattern              | Door naar interactieve ervaring                  | Doorlopende verticale proceslijn              |
| Ervaring       | Dit is het moment waarop jij beslist.         | Voorbeeldfactuur, bron, verschil, voorstel en statuslog             | Controleer voorstel; goedkeuren, afwijzen, reset | Evidence en acties verticaal                  |
| Praktijk       | Minder achter werk aan.                       | Drie kwalitatieve toepassingen en één uitgewerkte voorbeeldsituatie | Scenario's bij capabilities; gesprek             | Lijsten, geen brede tabellen                  |
| Waarom / trust | Veel systeem. Weinig ruis.                    | Uitleg, grenzen, log; geen onbewezen certificaten                   | Lees concrete controleregels                     | Stapeling met duidelijke dividers             |
| FAQ            | Goed om te weten.                             | Scope, controle, tools, starten                                     | Native accordions                                | Volledige breedte                             |
| Contact        | Geef terugkerend werk een vaste plek.         | Korte intake over team en werk                                      | Maakt e-mailconcept, verzendt niet automatisch   | Alle velden en CTA volledige breedte          |
| Footer         | Afsluiting                                    | Logo, navigatie, contact, privacy, voorwaarden op aanvraag          | Werkende lokale links en mail                    | Twee compacte kolommen                        |

## 6. Webdesignsysteem

Kleuren volgen `src/styles/tokens.css` exact. Success #246747, warning #855600, error #AD3434 met bestaande lichte achtergronden. Donkere secundaire tekst is een menging van paper/ink met voldoende contrast. Geen statusgroen voor willekeurige decoratie.

Type: display XL 112 px, display L 82 px, sectietitel 64–72 px, H2 48 px, H3 28 px, lead 20 px, body 18/16 px, small 14 px, label 11–12 px. Fluid en breakpoint-aanpassingen; hero mobiel circa 52 px. Display tracking −0.045em, labels +0.1em. Body leading 1.6, display circa 1.0.

Maximale contentbreedte 1320 px. 12/8/4 kolommen als onderliggend raster. Gutters desktop 48–72 px, mobiel 22 px. Spacing gebaseerd op 4, 8, 12, 16, 24, 32, 48, 64, 80, 120. Panelen radius 4–8 px, buttons 4 px; divider 1 px. Schaduw alleen op verhoogde interfacepanelen en dialogen. Lucide-icons met consistente 1.5–2 px stroke; geen emoji.

Herbruikbaar: navigatie, CTA-links, section labels, productpaneel, scenario-selector, approval-demo, proceslijst, accordions, contactformulier, modal. Standaard, hover, active, focus; daarnaast approval pending/approved/rejected en form validatie/voorbereid.

## 7. Motion

- Hero: eenmalige opkomst 320 ms, pointer-gestuurde perspectiefdiepte en twee langzame merkring-orbits rond de operator-core.
- CTA-pijl: 3 px verschuiving op hover in 120 ms.
- Secties: eenmalige opacity/translate 16 px met IntersectionObserver; standaardinhoud blijft zonder animatie zichtbaar.
- Tabs: paneelwissel 200 ms met vaste minimale hoogte; het productpaneel krijgt lichte cursor-gestuurde diepte en specular lighting.
- Proces: gebruikersgestuurde selectie; geen auto-rotatie.
- Approval: statuswissel direct na lokale demoactie; zichtbare uitkomst en live region. De console krijgt alleen op precieze pointers een beheerste 3D-hover.
- Navigatie: achtergrond en border worden sterker na scrollen.
- Reduced motion: geen orbits, perspectiefverplaatsingen, vloeiend scrollen of entry-animaties. Tablet en touch krijgen een vlakke, stabiele compositie.

## 8–10. Implementatie en responsive

De website draait in de bestaande Next.js + React + TypeScript-app achter tibbe.app. CSS-tokens en componentstyles verzorgen de motion zonder zwaar WebGL-pakket. Content staat los van presentatie. Het klantportaal blijft op `/app`. Fonts worden lokaal gebundeld. Native dialog/details/form-semantiek, focus states en skiplink.

375/430: gestapelde hero met volledig leesbare interface; 768: tweekolomsdetails waar ruimte is; 1024: kleinere desktopverdeling; 1440/1920: content blijft begrensd. Formulier bereidt een e-mailconcept voor en claimt nooit een verzonden aanvraag. Er is geen backend of analytics toegevoegd. Contactadres uit de bestaande starter moet vóór livegang bevestigd worden.

## 11. QA

Build, browsercontroles en definitieve bevindingen worden vastgelegd in `WEBSITE_QA.md`.
