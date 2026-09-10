import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { capabilities } from '../content/services'
import { SectionLabel } from '../components/website/Primitives'

export function ServiceCases() {
  const [active, setActive] = useState<string | null>('creative')
  return (
    <section id="praktijk" className="web-section service-cases">
      <div className="web-container">
        <div className="web-section-intro" data-reveal>
          <div>
            <SectionLabel number="05">Wat wil je uit handen geven?</SectionLabel>
            <h2>Begin waar<br />het werk vastloopt.</h2>
          </div>
          <p>Van een advertentie tot een klantvraag. Ontdek hoe Tibbe het werk kan organiseren.</p>
        </div>
        <div className="service-cases__list">
          {capabilities.map((service, index) => (
            <article className="service-case" key={service.id} data-open={active === service.id} data-reveal>
              <h3>
                <button aria-expanded={active === service.id} aria-controls={`case-${service.id}`}
                  onClick={() => setActive(active === service.id ? null : service.id)}>
                  <span className="web-mono">0{index + 1}</span>
                  <span>{service.name}</span>
                  <ArrowDown size={22} aria-hidden="true" />
                </button>
              </h3>
              <div id={`case-${service.id}`} className="service-case__body" hidden={active !== service.id}>
                <p className="service-case__problem">{service.problem}</p>
                <div><p>{service.application}</p>
                  <a href="#contact" className="web-text-link">Bespreek deze toepassing <ArrowUpRight size={17} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="service-cases__note">Voorbeeldtoepassingen. De precieze oplevering, koppelingen en beslisruimte bepalen we samen.</p>
      </div>
    </section>
  )
}
