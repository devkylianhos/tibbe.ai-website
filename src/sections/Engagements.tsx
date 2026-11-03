import { ArrowUpRight, Check } from 'lucide-react'
import { SectionLabel } from '@/components/website/Primitives'

const engagements = [
  { title: 'Bouw', label: 'Eén afgebakende opdracht', copy: 'Je wilt één proces verbeteren en het daarna zelf beheren.', billing: 'Eenmalige projectprijs', items: ['Proces en gewenste uitkomst vastleggen', 'Afgesproken koppelingen en eventuele AI', 'Testen, documentatie en uitleg bij oplevering'], next: 'Bespreek een bouwproject' },
  { title: 'Bouw + beheer', label: 'Voor een proces dat blijft draaien', copy: 'Je wilt de oplossing laten bouwen én Tibbe betrekken bij het dagelijks beheer.', billing: 'Eenmalige bouw + maandelijks beheer', items: ['Alles uit de afgesproken bouwopdracht', 'Monitoring en onderhoud volgens afspraak', 'Duidelijk aanspreekpunt bij vragen en storingen'], next: 'Bespreek bouw en beheer' },
  { title: 'Beheer bestaande oplossing', label: 'Eerst samen beoordelen', copy: 'Je hebt al een automatisering of agent en zoekt iemand die het beheer kan overnemen.', billing: 'Eerst een beoordeling en voorstel', items: ['Techniek, toegang en documentatie beoordelen', 'Eventueel herstel of inrichting apart begroten', 'Beheerafspraken op basis van de beoordeling'], next: 'Bespreek je bestaande oplossing' },
]
export function Engagements() {
  return <section id="aanbod" className="web-section engagements" aria-labelledby="engagements-title"><div className="web-container">
    <div className="web-section-intro"><div><SectionLabel>Samenwerken met Tibbe</SectionLabel><h2 id="engagements-title">Klein beginnen.<br />Goed blijven werken.</h2></div><p>We kiezen samen één concreet proces. Je krijgt vooraf duidelijkheid over de opdracht, wie het beheert en welke kosten terugkomen.</p></div>
    <div className="engagements__grid">{engagements.map((item, index) => <article key={item.title}><span className="engagements__number">0{index + 1}</span><p className="engagements__label">{item.label}</p><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.items.map(point => <li key={point}><Check size={16} aria-hidden="true" />{point}</li>)}</ul><div className="engagements__footer"><p className="engagements__billing">{item.billing}</p><a href="#contact">{item.next}<ArrowUpRight size={17} aria-hidden="true" /></a></div></article>)}</div>
    <div className="engagements__terms"><h3>Heldere afspraken vooraf</h3><p>Prijs, inbegrepen werkzaamheden, bereikbaarheid en looptijd staan in je voorstel. Software, AI-gebruik en hosting benoemen we apart. Nieuwe functies vallen niet automatisch onder beheer. Je zit nergens aan vast door hier een richting te kiezen.</p></div>
  </div></section>
}
