import type { ServicePageContent } from '../components/ServicePage'

export const websitePage: ServicePageContent = {
  visual: 'website',
  audience: 'Voor dienstverleners en MKB-bedrijven die beter willen uitleggen wat ze doen, of toe zijn aan een nieuwe website.',
  deliverables: ['Een pagina-indeling en afspraken over teksten en beelden', 'Een ontwerp dat je vooraf beoordeelt', 'Bouw voor desktop en mobiel, met de afgesproken contactroute', 'Testen van de belangrijkste routes en uitleg bij oplevering'],
  scope: 'Het aantal pagina’s, nieuwe teksten of fotografie en koppelingen bepalen de omvang. Hosting, beheer en extra functies leggen we apart vast.',
  label: 'Websites voor het MKB', title: 'Een website die laat zien waarom klanten voor jou kiezen',
  cta: 'Bespreek je website', sectionTitle: 'Van jouw aanbod naar een duidelijke website',
  questions: [
    ['Kunnen jullie mijn bestaande website vernieuwen?', 'Ja. We bekijken wat behouden kan blijven en wat beter moet. Denk aan de indeling, teksten, mobiele weergave en contactroute. Voor de bouw spreken we af welke pagina’s worden vernieuwd.'],
    ['Moet ik zelf teksten en beelden aanleveren?', 'We inventariseren wat er al is. In het voorstel staat welke inhoud jij aanlevert en wat Tibbe verzorgt. Nieuwe fotografie of extra teksten nemen we mee in de omvang.'],
    ['Kan ik later koppelingen of AI toevoegen?', 'Ja. Een website kan een complete opdracht zijn. Als je later aanvragen wilt doorzetten of opvolging wilt automatiseren, bekijken we welke uitbreiding bij je website en software past.'],
  ],
  intro: 'We ontwerpen en bouwen een website die bij je bedrijf past. Bezoekers begrijpen wat je doet en vinden gemakkelijk de weg naar een aanvraag of afspraak.',
  parts: [
    { title: 'Helder verhaal.', copy: 'We brengen je aanbod en de vragen van je klanten in kaart. Dat wordt de basis voor de inhoud en de indeling van je website.' },
    { title: 'Sterk ontwerp.', copy: 'Een herkenbare uitstraling, leesbare teksten en een prettige ervaring op mobiel. Je bekijkt het ontwerp voordat we verder bouwen.' },
    { title: 'Bouw en oplevering.', copy: 'We bouwen de afgesproken pagina’s, controleren de contactroute en mobiele weergave en geven uitleg bij oplevering. Koppelingen zijn een mogelijke uitbreiding.' },
  ],
  exampleTitle: 'Van bezoeker naar aanvraag.', exampleCopy: 'Een installatiebedrijf wil dat klanten gemakkelijker een gerichte offerte aanvragen.',
  steps: ['De bezoeker vindt de dienst en vult een duidelijk formulier in.', 'De aanvraag komt met de ingevulde gegevens bij de juiste collega.', 'Als dat helpt, vat AI de aanvraag samen. Je team bepaalt het antwoord.'],
}
export const webshopPage: ServicePageContent = {
  visual: 'shop',
  audience: 'Voor winkels en merken die online willen starten of een bestaande webshop willen verbeteren.',
  deliverables: ['Een passende winkelstructuur en productpresentatie', 'Ontwerp en bouw van de afgesproken winkelpagina’s', 'Inrichting en controle van de afgesproken bestelroute', 'Uitleg over producten, bestellingen en dagelijks gebruik'],
  scope: 'We kiezen het platform op basis van je assortiment en manier van werken. Betalingen, verzending, voorraadkoppelingen en migratie onderzoeken we vooraf. Platform- en transactiekosten hangen af van de gekozen aanbieders.',
  label: 'Webshops voor het MKB', title: 'Een webshop waarin klanten prettig bestellen',
  cta: 'Bespreek je webshop', sectionTitle: 'Van product kiezen tot bestelling afhandelen',
  questions: [
    ['Welk webshopplatform past bij mijn bedrijf?', 'Dat hangt af van je assortiment, bestaande systemen en wat je zelf wilt beheren. We bekijken die eisen voordat we een platform voorstellen. Platform- en transactiekosten maken we afzonderlijk inzichtelijk.'],
    ['Kunnen jullie een bestaande webshop verbeteren?', 'Ja. We bekijken eerst waar klanten of je team vastlopen. De opdracht kan gaan over productpagina’s, de bestelroute of de afhandeling van orders. Een volledige herbouw is niet altijd nodig.'],
    ['Kan de webshop aansluiten op voorraad en boekhouding?', 'We onderzoeken de koppelmogelijkheden en welke gegevens moeten worden uitgewisseld. In het voorstel staat wat wordt gekoppeld, wat daarvoor nodig is en wie eventuele fouten opvolgt.'],
  ],
  intro: 'We bouwen of verbeteren je webshop en verbinden die met het werk na een bestelling. Van duidelijke productpagina’s tot orderverwerking en hulp bij klantvragen.',
  parts: [
    { title: 'Een heldere winkel.', copy: 'Een ontwerp dat bij je merk past, overzichtelijke producten en een duidelijke route naar bestellen. Ook op een klein scherm.' },
    { title: 'Orders op hun plek.', copy: 'We onderzoeken hoe je webshop aansluit op je voorraad-, boekhoud- of verzendsoftware. Zo hoef je gegevens minder vaak zelf over te nemen.' },
    { title: 'Hulp bij klantvragen.', copy: 'AI kan een antwoord voorbereiden met de beschikbare product- of orderinformatie. We spreken af wat je team controleert en hoe uitzonderingen worden opgepakt.' },
  ],
  exampleTitle: 'Van bestelling naar overzicht.', exampleCopy: 'Een klant bestelt in je webshop. Je team wil de order afhandelen zonder gegevens opnieuw over te typen.',
  steps: ['De klant bekijkt het product en rondt de bestelling af.', 'Een koppeling geeft de benodigde gegevens door aan de afgesproken software.', 'Bij een klantvraag kan AI een antwoord voorbereiden. Je team behandelt wat extra aandacht vraagt.'],
}
export const automationPage: ServicePageContent = {
  visual: 'workflow',
  audience: 'Voor teams die steeds dezelfde gegevens overnemen, aanvragen verdelen of achter opvolging aan moeten.',
  deliverables: ['Een uitgewerkte werkstroom met begin, einde en verantwoordelijke', 'De afgesproken koppelingen en eventuele AI-ondersteuning', 'Tests met normale aanvragen, ontbrekende gegevens en fouten', 'Uitleg over goedkeuren, uitzonderingen en dagelijks gebruik'],
  scope: 'Beschikbare koppelingen, toegangsrechten en de kwaliteit van gegevens bepalen wat mogelijk is. We benoemen software- en gebruikskosten apart en spreken af wie storingen en wijzigingen oppakt.',
  label: 'Automatisering & AI', title: 'Automatiseer het werk dat steeds terugkomt',
  cta: 'Bespreek je werkproces', sectionTitle: 'Van losse handelingen naar een vaste werkwijze',
  questions: [
    ['Met welk proces kunnen we het beste beginnen?', 'Kies een taak die vaak terugkomt en waarvan je de stappen kunt laten zien. Bijvoorbeeld aanvragen vastleggen, offertes opvolgen of ordergegevens overnemen. Samen bepalen we waar een eerste koppeling zinvol is.'],
    ['Hebben we hiervoor altijd AI nodig?', 'Nee. Een vaste regel kan genoeg zijn om gegevens door te geven of een herinnering te maken. AI zetten we in als een stap vraagt om tekst begrijpen, samenvatten of een antwoord voorbereiden.'],
    ['Wat gebeurt er als informatie ontbreekt of iets misgaat?', 'We testen zulke situaties vooraf. We spreken af welke acties stoppen, wie een melding krijgt en wanneer iemand een voorstel moet goedkeuren. Ook beheer en het opvolgen van storingen leggen we vast.'],
  ],
  intro: 'We verbinden terugkerende stappen in je dagelijkse werk. Vaste regels regelen de routine. AI helpt bij het begrijpen van informatie en het voorbereiden van antwoorden.',
  parts: [
    { title: 'Eerst het werk begrijpen.', copy: 'We bekijken één taak die steeds terugkomt. Waar begint die, welke informatie is nodig en wie beslist wat er daarna gebeurt?' },
    { title: 'Je software verbinden.', copy: 'We onderzoeken de mogelijkheden van je huidige systemen. Aanvragen, klantgegevens en herinneringen krijgen een afgesproken route.' },
    { title: 'Controle inbouwen.', copy: 'We testen ook ontbrekende gegevens en fouten. Je team weet wanneer het moet ingrijpen en welke acties eerst goedkeuring nodig hebben.' },
  ],
  exampleTitle: 'Een offerte die aandacht krijgt.', exampleCopy: 'Een aanvraag blijft tussen de e-mails liggen. Je wilt dat je team ziet wie de volgende stap oppakt.',
  steps: ['Een aanvraag wordt vastgelegd en aan een collega toegewezen.', 'AI kan het bericht samenvatten en een conceptantwoord voorbereiden.', 'Je collega controleert het voorstel. Een herinnering helpt om de opvolging bij te houden.'],
}
export const startPage: ServicePageContent = {
  label: 'Start met Tibbe', title: 'Bespreek wat je wilt bouwen of verbeteren',
  cta: 'Maak kennis met Kylian', sectionTitle: 'Zo komen we tot een passende opdracht',
  intro: 'Een nieuwe website, een webshop of minder handmatig werk? Vertel ons waar je tegenaan loopt. Je hoeft vooraf niet te weten welke techniek je nodig hebt.',
  parts: [
    { title: 'Vertel je plannen.', copy: 'We bespreken je bedrijf, je klanten en wat je wilt verbeteren. Een bestaande website of een voorbeeld uit je dagelijkse werk helpt om het concreet te maken.' },
    { title: 'Kies waar je begint.', copy: 'We bepalen samen wat de eerste opdracht wordt. Je kunt klein beginnen en later uitbreiden als dat bij je bedrijf past.' },
    { title: 'Weet waar je aan toe bent.', copy: 'Je ontvangt een voorstel met de werkzaamheden, prijs en planning. Eventuele kosten voor software, beheer en ondersteuning bespreken we apart.' },
  ],
  exampleTitle: 'Begin met één knelpunt.', exampleCopy: 'Je hebt nog geen duidelijk beeld van de oplossing. Je weet wel dat nieuwe aanvragen nu te veel losse handelingen kosten.',
  steps: ['Je laat zien hoe een aanvraag nu binnenkomt.', 'We bekijken samen welke stap beter kan.', 'Je beoordeelt een voorstel voordat de bouw begint.'],
}
