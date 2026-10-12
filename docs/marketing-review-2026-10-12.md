# Marketingreview Tibbe — 12 oktober 2026

Gebruikte collectie: https://github.com/coreyhaines31/marketingskills
Toegepast: product-marketing, CRO (inclusief form-reference), copywriting, copy-editing en SEO-audit. De collectie is voor deze review gelezen; niet als geheel geïnstalleerd. Advertenties, koude acquisitie, e-mailcampagnes en betaalde experimenten vallen buiten deze websiteopdracht.

## Uitgangspunt
MKB-agency: websites, webshops en het werk erachter. AI ondersteunt. Primair doel is een projectbespreking met Kylian. De bestaande vormgeving, drie diensten en pagina’s blijven behouden. Hero zonder afsluitende punten en footer zonder blauwe contactstrook blijven zoals goedgekeurd.

Kylian bevestigde op 12 oktober dat er nog geen aan te leveren klantprojecten, klantreacties of vastgesteld minimumprojectbudget zijn. Geen claims of cijfers toegevoegd. Er zijn geen verkeersdata, conversiedata of Search Console-resultaten onderzocht. Dit zijn inhoudelijke verbeteringen, geen bewezen conversiestijgingen.

## Bevindingen en uitgevoerde wijzigingen
| Prioriteit | Bewijs vóór wijziging | Aanpassing |
|---|---|---|
| Hoog | Diensten deelden de kop ‘Een helder plan. Een passende oplossing.’ en dezelfde CTA | Eigen dienstgerichte H1, sectiekop en contactknop op websites, webshops, automatisering en startpagina |
| Hoog | Concrete bezwaren stonden vooral in de FAQ op de homepage | Per dienst drie vragen over bestaande systemen, inhoud, platformkeuze en controle, met antwoorden op de eigen pagina |
| Hoog | Uitleg van mailto-werkwijze stond pas onder het formulier | Uitleg vóór de velden; resultaat van kennismaking beschreven; bestaande WhatsApp-route als alternatief toegevoegd |
| Middel | Footer ‘Maak kennis met Kylian’ ging naar ‘Waarom Tibbe’ | Link verwijst nu naar het oprichtersblok |
| Middel | Publieke routes hadden geen expliciete canonical | Zelfverwijzende canonical op alle acht publieke marketing-/informatiepagina’s |
| Middel | Inloggen en portaal hadden geen noindex-metadata | noindex/nofollow toegevoegd; dit is geen vervanging voor toegangsbeveiliging |
| Middel | Algemene zoekresultaatteksten op dienstpagina’s | Titel, beschrijving en Open Graph gericht op de dienst en bezoekintentie |
| Laag | Sitemap miste /launch en gebruikte buildtijd als wijzigingsdatum | /launch toegevoegd, kunstmatige lastModified verwijderd |

## Bewust behouden na beoordeling
- Homepagebelofte en drie duidelijke dienstkeuzes passen bij de doelgroep; niet opnieuw herschreven zonder aanleiding.
- Oprichtersblok ondersteunt persoonlijk contact. Er is geen nieuwe biografie verzonnen.
- Demo blijft expliciet fictief en voert geen externe acties uit.
- Twee verplichte contactvelden blijven: naam en vraag. Organisatie en e-mail zijn optioneel; versturen gebeurt vanuit het eigen e-mailprogramma.
- Privacy-, cookie- en voorwaardeninhoud is niet herschreven als marketingtekst. Alleen hun metadata is verduidelijkt.
- Bestaande losse analyticswijzigingen uit eerder werk zijn behouden, maar niet als resultaat van deze review aangemerkt.

## Nog te besluiten of te onderbouwen
1. **Voorwaarden (hoog):** /voorwaarden bevat oude AI-abonnementen van €750/€1.250 en een 14-dagengarantie, terwijl de agency opdrachten op voorstel aanbiedt. Kylian moet bevestigen of die dienst en afspraken nog bestaan. Niet stilzwijgend uit bestaande voorwaarden geschrapt.
2. **Bewijs (hoog):** zodra er toestemming en echt werk beschikbaar zijn, voeg een project toe met klantvraag, oplevering en aantoonbare uitkomst. Tot die tijd geen klantlogo’s, reviews of omzetclaims.
3. **Contact (middel):** een rechtstreeks verzendend formulier kan de extra mailto-stap wegnemen. Dat vraagt een gekozen afleverroute en geteste ontvangst; niet in deze review aangesloten.
4. **Meting (middel):** contactklik en gemaakt concept zijn geen ontvangen aanvraag. Gebruik daadwerkelijk ontvangen, relevante aanvragen als uiteindelijke maatstaf.
5. **SEO (middel):** rendered DOM bevat geen JSON-LD op de onderzochte routes. Basisorganisatie-/serviceschema kan later worden toegevoegd met bevestigde bedrijfsgegevens. Zoekvolume, posities, backlinks, indexatiestatus en Core Web Vitals zijn niet gemeten; geen ranking- of prestatiescore toegekend.

## Copykeuzes en latere experimenten
- Homepage behouden: ‘Websites en webshops die werken / Ook achter de schermen’. Helder aanbod plus samenhang.
- Mogelijk alternatief: ‘Je website, webshop en opvolging goed geregeld’. Hypothese: maakt het gezamenlijke aanbod nog explicieter, maar is minder onderscheidend.
- Mogelijk alternatief: ‘Van je nieuwe website tot de opvolging van je eerste aanvraag’. Hypothese: maakt de werkwijze tastbaar, maar geeft webshops minder nadruk.
- CTA toegepast per dienst: ‘Bespreek je website’, ‘Bespreek je webshop’, ‘Bespreek je werkproces’. Sluit aan op de pagina die iemand leest.
- Alternatief voor later: ‘Leg je plannen voor aan Kylian’. Persoonlijker, maar minder direct dienstgericht.
- Test geen varianten tegelijk zonder voldoende verkeer en vooraf gekozen meetpunt. Er is nu geen A/B-test gestart.

## Controle
- Productiebuild en ESLint geslaagd.
- /, /websites, /webshops, /automatisering, /launch, /privacy, /voorwaarden, /cookies, /app/login: HTTP 200, één H1, geen browserfouten.
- Axe WCAG A/AA-controle: geen meldingen op deze negen routes. Dit is geen volledige handmatige toegankelijkheidsaudit.
- Geen horizontale overflow op desktop en 320/390px; webshophero visueel gecontroleerd op desktop en mobiel.
- Interne ankerlinks, canonicals en noindex van inloggen gecontroleerd in browser.
- Formulier maakt een mailto-concept voor kylian@tibbe.app. Er is geen bericht verstuurd.

Wijzigingen zijn lokaal, niet gepusht of gepubliceerd.
