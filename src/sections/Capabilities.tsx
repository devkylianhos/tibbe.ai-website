import { Globe, Workflow, ShoppingBag, ArrowDown, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '../components/website/Primitives'

const services = [
  { Icon: Globe, title: 'Ik wil een betere website.', label: 'WEBSITES', href: '/websites', link: 'Bekijk websites',
    copy: 'Voor bedrijven die hun aanbod helder willen laten zien en bezoekers naar een aanvraag of afspraak willen helpen.',
    items: ['Inhoud en indeling voor jouw aanbod', 'Ontwerp en bouw, ook voor mobiel', 'Een duidelijke contactroute'],
    example: 'Bijvoorbeeld: een dienstverlener met een verouderde site en een onduidelijk aanbod.' },
  { Icon: ShoppingBag, title: 'Ik wil een sterke webshop.', label: 'WEBSHOPS', href: '/webshops', link: 'Bekijk webshops',
    copy: 'Voor ondernemers die online willen verkopen of hun bestaande winkel prettiger willen laten werken.',
    items: ['Overzichtelijke product- en winkelpagina’s', 'Een passende bestel- en betaalroute', 'Afspraken over voorraad en orderverwerking'],
    example: 'Bijvoorbeeld: een winkel die online wil verkopen zonder orders steeds over te typen.' },
  { Icon: Workflow, title: 'Ik wil minder handmatig werk.', label: 'AUTOMATISERING & AI', href: '/automatisering', link: 'Bekijk automatisering',
    copy: 'Voor teams die aanvragen, gegevens en klantvragen nu met veel losse handelingen verwerken.',
    items: ['Eén terugkerende taak in kaart', 'Koppelingen tussen je bestaande systemen', 'AI waar het helpt, met controle door je team'],
    example: 'Bijvoorbeeld: een aanvraag vastleggen en een antwoord klaarzetten voor controle.' },
]

export function Capabilities() {
  return <section id="mogelijkheden" className="web-section web-capabilities">
    <div className="web-container">
      <div className="web-section-intro" data-reveal>
        <div><SectionLabel number="01">Wat we voor je bouwen</SectionLabel><h2>Wat wil jij<br />verbeteren?</h2></div>
        <p>Kies waar je nu behoefte aan hebt. Een website of webshop kan een complete opdracht zijn. Koppelingen en AI zijn een uitbreiding als die je verder helpen.</p>
      </div>
      <div className="agency-services" data-motion-stagger>
        {services.map(({ Icon, title, label, copy, items, example, href, link }, index) => <article key={title}>
          <div className="agency-services__top"><span>0{index + 1}</span><Icon size={30} strokeWidth={1.3} aria-hidden="true" /></div>
          <p className="agency-services__label">{label}</p>
          <h3>{title}</h3><p>{copy}</p>
          <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="agency-services__example">{example}</p>
          <div className="agency-services__links"><a href={href}>{link} <ArrowUpRight size={14} /></a></div>
        </article>)}
      </div>
      <div className="agency-services__foot"><p>Automatiseren betekent simpelweg: afgesproken stappen vanzelf laten uitvoeren. AI helpt waar informatie eerst begrepen moet worden.</p><a className="web-text-link" href="#ervaring">Bekijk een voorbeeld <ArrowDown size={17} aria-hidden="true" /></a></div>
    </div>
  </section>
}
