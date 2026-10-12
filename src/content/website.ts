export const siteConfig = { email: 'hello@tibbe.ai', name: 'Tibbe.ai' }

export const capabilities = [
  {
    id: 'administratie',
    name: 'Administratie',
    title: 'Van losse factuur naar helder voorstel.',
    description:
      'Laat gegevens vergelijken, afwijkingen signaleren en een vervolgactie voorbereiden. Jij beoordeelt wat afwijkt.',
    source: 'Inkoopfactuur',
    task: 'Vergelijk met de bestelling',
    result: 'Prijsverschil gevonden',
    outcome: 'Een onderbouwd voorstel, voordat er iets verandert.',
    icon: 'file',
    lines: [
      ['Bestelling', '€ 1.240,00'],
      ['Factuur', '€ 1.390,00'],
      ['Verschil', '+ € 150,00'],
    ],
  },
  {
    id: 'opvolging',
    name: 'Opvolging',
    title: 'Elk open eind krijgt een volgende stap.',
    description:
      'Breng openstaande acties bij elkaar en bereid gerichte opvolging voor. Met de juiste context bij de juiste persoon.',
    source: 'Openstaande aanvraag',
    task: 'Lees de laatste correspondentie',
    result: 'Vervolgbericht voorbereid',
    outcome: 'Een relevante vervolgstap zonder opnieuw alles uit te zoeken.',
    icon: 'mail',
    lines: [
      ['Aanvraag', 'Voorstel ontvangen'],
      ['Laatste contact', 'Vijf dagen geleden'],
      ['Volgende stap', 'Opvolging ter controle'],
    ],
  },
  {
    id: 'overzicht',
    name: 'Overzicht',
    title: 'Een update waar je iets mee kunt.',
    description:
      'Verzamel voortgang en uitzonderingen in één helder overzicht. Zie welk werk doorgaat en welke beslissing op jou wacht.',
    source: 'Procesupdates',
    task: 'Bundel wat aandacht vraagt',
    result: 'Dagoverzicht voorbereid',
    outcome: 'Context bij de uitzonderingen, rust bij de routine.',
    icon: 'chart',
    lines: [
      ['Routinewerk', 'Samengevat'],
      ['Uitzonderingen', 'Apart gemarkeerd'],
      ['Beslissingen', 'Met context'],
    ],
  },
  {
    id: 'controle',
    name: 'Controle',
    title: 'Elke actie laat een duidelijk spoor.',
    description:
      'Bekijk de bron, de gemaakte keuze en het resultaat naast elkaar. Een controlelog maakt de uitvoering navolgbaar.',
    source: 'Uitgevoerde taak',
    task: 'Vergelijk uitkomst met opdracht',
    result: 'Bewijs aan actie gekoppeld',
    outcome: 'Terugvinden wat er is gedaan, en waarom.',
    icon: 'shield',
    lines: [
      ['Bron', 'Vastgelegd'],
      ['Beslissing', 'Navolgbaar'],
      ['Uitkomst', 'Gecontroleerd'],
    ],
  },
] as const

export const processSteps = [
  { title: 'We luisteren.', label: 'JOUW BEDRIJF', copy: 'Waar komen klanten binnen? Wat kost je team tijd? We bekijken wat er nu gebeurt en wat beter kan.' },
  { title: 'Je krijgt een helder plan.', label: 'AFSPRAKEN VOORAF', copy: 'We spreken af wat we bouwen, wat het kost en wanneer het klaar is. Je weet wat bij de opdracht hoort.' },
  { title: 'We bouwen en testen.', label: 'SAMEN BEKIJKEN', copy: 'Je bekijkt het ontwerp en probeert de oplossing. We testen ook wat er gebeurt als informatie ontbreekt of iets misgaat.' },
  { title: 'Je team kan ermee werken.', label: 'OPLEVERING & VERVOLG', copy: 'Je krijgt uitleg en we spreken af hoe beheer, ondersteuning en eventuele verbeteringen worden geregeld.' },
]

export const faqs = [
  ['Moet ik iets van AI of automatisering weten?', 'Nee. Vertel ons hoe je bedrijf werkt en wat je wilt verbeteren. Wij leggen de mogelijkheden uit in gewone taal en laten zien wat een oplossing voor jouw team betekent.'],
  ['Kan ik ook alleen een website of webshop laten bouwen?', 'Ja. Je kunt met een website of webshop beginnen. Koppelingen en AI voegen we alleen toe als die passen bij je vraag en budget.'],
  ['Wat is het verschil tussen automatisering en AI?', 'Automatisering voert vaste stappen uit, zoals een aanvraag doorgeven aan je klantensysteem. AI kan helpen om een bericht te begrijpen, samen te vatten of een antwoord voor te bereiden. We bekijken per taak wat nodig is.'],
  ['Kunnen we onze huidige software blijven gebruiken?', 'Dat onderzoeken we eerst. We bekijken welke koppelingen mogelijk zijn, welke toegang nodig is en of je huidige abonnementen dat ondersteunen. Je hoeft dus niet vooraf alles te vervangen.'],
  ['Wat kost het en hoe lang duurt het?', 'Dat hangt af van wat we bouwen, de inhoud en de benodigde koppelingen. Na de kennismaking maken we een voorstel met de werkzaamheden, prijs en planning.'],
  ['Blijft mijn team in controle?', 'Ja. We spreken af wat vanzelf mag gebeuren en wat eerst goedkeuring nodig heeft. Belangrijke beslissingen en uitzonderingen leggen we bij je team.'],
  ['Is het voorbeeld op deze pagina een echte klantcase?', 'Nee. Het is een fictieve klantaanvraag die laat zien hoe een website, koppelingen en AI kunnen samenwerken. De demo verstuurt geen berichten en verwerkt geen echte klantgegevens.'],
]
