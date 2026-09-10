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
  {
    title: 'Begrijpt de context.',
    label: 'Observe · Analyze',
    copy: 'Tibbe verzamelt signalen, leest de context en brengt impact en risico in beeld.',
  },
  {
    title: 'Maakt een voorstel.',
    label: 'Recommend · Approve',
    copy: 'Je ziet wat er moet gebeuren en waarom. Waar jouw besluit nodig is, wacht Tibbe.',
  },
  {
    title: 'Voert het werk uit.',
    label: 'Execute',
    copy: 'De afgesproken actie wordt uitgevoerd binnen de grenzen die je hebt bepaald.',
  },
  {
    title: 'Laat het resultaat zien.',
    label: 'Verify',
    copy: 'Het resultaat en het bewijs komen samen in een navolgbaar controlelog.',
  },
]

export const faqs = [
  [
    'Wat bedoelen jullie met een AI-operator?',
    'Een digitale collega die terugkerend werk volgt, een volgende stap voorbereidt en afgesproken acties uitvoert. Het verschil zit in de uitvoering én de uitleg: je ziet wat er gebeurt, waarom en met welk resultaat.',
  ],
  [
    'Wat blijft er bij mijn team?',
    'Jullie bepalen de opdracht, de grenzen en de beslissingen die menselijke goedkeuring vragen. Tibbe maakt die beslismomenten zichtbaar met de context die nodig is om verder te kunnen.',
  ],
  [
    'Kan Tibbe met onze huidige tools werken?',
    'Dat bekijken we aan de hand van jullie proces en de beschikbare toegang. We spreken vooraf af welke bronnen nodig zijn, wat technisch mogelijk is en welke acties toegestaan zijn.',
  ],
  [
    'Hoe beginnen we?',
    'Met één terugkerend proces. In een kennismaking brengen we het werk, de uitzonderingen en de gewenste uitkomst in kaart. Op basis daarvan bepalen we een passende eerste stap.',
  ],
  [
    'Zijn de voorbeelden op deze website echte klantdata?',
    'Nee. De factuur, werkstromen en activiteit op deze pagina zijn illustratieve voorbeelden van het merkconcept. Er worden geen echte facturen verwerkt, berichten verstuurd of betalingen uitgevoerd.',
  ],
]
