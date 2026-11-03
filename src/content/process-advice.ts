export const areas = [
  ['service', 'Klantvragen beantwoorden'],
  ['sales', 'Aanvragen en opvolging'],
  ['orders', 'Orders en administratie'],
  ['content', 'Marketing en content'],
  ['knowledge', 'Interne informatie zoeken'],
] as const
export type Area = typeof areas[number][0]
export type Control = 'review' | 'auto'
export type QuestionKey = 'area' | 'task' | 'frequency' | 'time' | 'bottleneck' | 'software'
export type Answers = Partial<Record<QuestionKey, string>>
export type Option = readonly [string, string]
export const tasks: Record<Area, readonly string[]> = {
  service: ['Vragen indelen en doorzetten', 'Informatie zoeken voor een antwoord', 'Antwoorden voorbereiden'],
  sales: ['Aanvragen vastleggen', 'Nieuwe aanvragen opvolgen', 'Informatie voor een offerte verzamelen'],
  orders: ['Gegevens tussen systemen overnemen', 'Orderstatussen bijwerken', 'Afwijkingen in documenten signaleren'],
  content: ['Onderwerpen en bronnen verzamelen', 'Contentconcepten voorbereiden', 'Feedback en goedkeuring organiseren'],
  knowledge: ['De juiste documenten vinden', 'Veelgestelde interne vragen beantwoorden', 'Informatie uit documenten verzamelen'],
}
export const questions: readonly { key: QuestionKey; label: string; title: string; hint: string; options?: readonly Option[] }[] = [
  { key: 'area', label: 'Werkgebied', title: 'Welk werk wil je verbeteren?', hint: 'Kies één werkgebied om mee te beginnen.', options: areas },
  { key: 'task', label: 'Terugkerende taak', title: 'Wat doe je steeds opnieuw?', hint: 'Kies de taak die het meeste aandacht vraagt.' },
  { key: 'frequency', label: 'Frequentie', title: 'Hoe vaak komt dit werk terug?', hint: 'Een schatting is genoeg.', options: [['daily', 'Dagelijks'], ['weekly', 'Wekelijks'], ['rare', 'Maandelijks of minder'], ['unknown', 'Dat weet ik nog niet']] },
  { key: 'time', label: 'Tijd per week', title: 'Hoeveel tijd kost dit per week?', hint: 'Tel de tijd van je team bij elkaar op. Dit is geen schatting van mogelijke besparing.', options: [['low', 'Minder dan 1 uur'], ['medium', '1 tot 5 uur'], ['high', 'Meer dan 5 uur'], ['unknown', 'Dat weet ik nog niet']] },
  { key: 'bottleneck', label: 'Knelpunt', title: 'Wat zit vooral in de weg?', hint: 'Waar zou een verbetering het meeste verschil maken?', options: [['time', 'Het kost te veel tijd'], ['copy', 'We voeren gegevens dubbel in'], ['errors', 'Er ontstaan fouten'], ['backlog', 'Werk blijft liggen'], ['find', 'Informatie is moeilijk te vinden']] },
  { key: 'software', label: 'Software', title: 'Waar gebeurt dit werk nu?', hint: 'De precieze koppelmogelijkheden onderzoeken we later.', options: [['mail', 'Vooral e-mail en spreadsheets'], ['apps', 'In meerdere bedrijfsapps'], ['single', 'In één bedrijfssysteem'], ['unknown', 'Dat moet ik nog uitzoeken']] },
]
export function optionsFor(key: QuestionKey, answers: Answers): readonly Option[] {
  if (key === 'task') return [...(tasks[answers.area as Area] || []).map(task => [task, task] as const), ['unknown', 'Dat wil ik eerst scherper krijgen']]
  return questions.find(question => question.key === key)?.options || []
}
export function updateAnswer(answers: Answers, key: QuestionKey, value: string): Answers {
  const next = { ...answers, [key]: value }
  if (key === 'area' && value !== answers.area) delete next.task
  return next
}
export function answerLabel(key: QuestionKey, answers: Answers) {
  return optionsFor(key, answers).find(([value]) => value === answers[key])?.[1] || 'Niet ingevuld'
}
export function getAdvice(answers: Answers, control: Control) {
  const incomplete = questions.some(({ key }) => !optionsFor(key, answers).some(([value]) => value === answers[key]))
  const uncertain = incomplete || [answers.task, answers.frequency, answers.time, answers.software].includes('unknown')
  const small = answers.frequency === 'rare' || answers.time === 'low'
  const fixed = answers.bottleneck === 'copy' || ['Aanvragen vastleggen', 'Orderstatussen bijwerken', 'Feedback en goedkeuring organiseren'].includes(answers.task || '')
  const kind = uncertain ? 'inventory' : small ? 'process' : fixed ? 'automation' : 'ai'
  const directions = {
    inventory: ['Breng eerst dit proces in kaart.', 'Er is nog iets onduidelijk over de taak, de tijd of je software. Maak eerst zichtbaar hoe het werk nu verloopt voordat je kiest wat je gaat bouwen.'],
    process: ['Begin met een kleine procesverbetering.', 'Je noemt weinig tijdsbesteding of werk dat minder vaak voorkomt. Onderzoek eerst of een sjabloon, werkafspraak of bestaande softwarefunctie voldoende helpt.'],
    automation: ['Onderzoek een vaste automatisering.', 'Je keuzes wijzen op herhaalbare stappen. Onderzoek eerst of vaste regels en een koppeling voldoende zijn. Een AI-agent is niet automatisch nodig.'],
    ai: ['Verken AI-ondersteuning voor deze taak.', 'Deze taak kan vragen om het begrijpen of opzoeken van informatie. Begin met een kleine proef waarin AI voorbereidt en je team de uitkomst controleert.'],
  }
  const flows: Record<Area, string> = {
    service: 'Klantvraag → relevante informatie → conceptantwoord → controle',
    sales: 'Aanvraag → gegevens verzamelen → opvolging voorbereiden → controle',
    orders: 'Gegevens → controle → overdracht → afwijkingen naar je team',
    content: 'Bronnen → concept → feedback → goedkeuring',
    knowledge: 'Vraag → toegestane bronnen → antwoord met bronverwijzing → controle',
  }
  return {
    kind, title: directions[kind][0], reason: directions[kind][1],
    flow: flows[answers.area as Area] || 'Breng de stappen, bronnen en verantwoordelijken in kaart.',
    next: 'Neem drie voorbeelden uit je dagelijkse werk. Leg vast wie de taak uitvoert, welke informatie nodig is en waar het proces eindigt. Deel geen gevoelige klantgegevens in een eerste bericht.',
    control: control === 'review' ? 'Je team beoordeelt het resultaat voordat een vervolghandeling plaatsvindt.' : 'Automatische uitvoering is je voorkeur. Welke acties geschikt zijn, bepalen we na tests en afspraken over toegang en uitzonderingen.',
  }
}
