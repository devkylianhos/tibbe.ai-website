import { Globe, Workflow, Sparkles, ArrowDown, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '../components/website/Primitives'

const services = [
  { Icon: Globe, title: 'Je website of webshop.', label: 'EEN GOEDE EERSTE INDRUK',
    copy: 'Een heldere website waarop klanten begrijpen wat je doet. Of een webshop waarin ze gemakkelijk hun producten vinden en bestellen.',
    items: ['Ontwerp dat bij je bedrijf past', 'Prettig te gebruiken op mobiel', 'Een duidelijke weg naar contact of bestellen'] },
  { Icon: Workflow, title: 'Het werk erachter.', label: 'MINDER HANDMATIG OVERZETTEN',
    copy: 'We verbinden je website en de software die je gebruikt. Een aanvraag of bestelling komt op de juiste plek, met een duidelijke volgende stap.',
    items: ['Aanvragen en orders bij elkaar', 'Klantgegevens doorgeven aan je software', 'Herinneringen en opvolging volgens afspraak'] },
  { Icon: Sparkles, title: 'AI die je team helpt.', label: 'HULP BIJ LEZEN EN VOORBEREIDEN',
    copy: 'AI kan een klantvraag samenvatten, ontbrekende informatie signaleren of een antwoord voorbereiden. Je team houdt de belangrijke beslissingen in handen.',
    items: ['Lange berichten kort samengevat', 'Antwoordvoorstellen met de juiste informatie', 'Goedkeuring voordat een belangrijke actie volgt'] },
]

export function Capabilities() {
  return <section id="mogelijkheden" className="web-section web-capabilities">
    <div className="web-container">
      <div className="web-section-intro" data-reveal>
        <div><SectionLabel number="02">Wat we voor je bouwen</SectionLabel><h2>Van je website<br />tot het werk erachter.</h2></div>
        <p>Drie onderdelen die samenwerken. Je kunt beginnen met één website, webshop of terugkerende taak. We bepalen samen wat je nodig hebt.</p>
      </div>
      <div className="agency-services" data-motion-stagger>
        {services.map(({ Icon, title, label, copy, items }, index) => <article key={title}>
          <div className="agency-services__top"><span>0{index + 1}</span><Icon size={30} strokeWidth={1.3} aria-hidden="true" /></div>
          <p className="agency-services__label">{label}</p>
          <h3>{title}</h3><p>{copy}</p>
          <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="agency-services__links">{index === 0 ? <><a href="/websites">Websites <ArrowUpRight size={14} /></a><a href="/webshops">Webshops <ArrowUpRight size={14} /></a></> : <a href="/automatisering">{index === 1 ? 'Bekijk automatisering' : 'Zo zetten we AI in'} <ArrowUpRight size={14} /></a>}</div>
        </article>)}
      </div>
      <div className="agency-services__foot"><p>Automatiseren betekent simpelweg: afgesproken stappen vanzelf laten uitvoeren. AI helpt waar informatie eerst begrepen moet worden.</p><a className="web-text-link" href="#ervaring">Bekijk een voorbeeld <ArrowDown size={17} aria-hidden="true" /></a></div>
    </div>
  </section>
}
