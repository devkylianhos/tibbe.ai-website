import Image from 'next/image'
import { ActionLink, SectionLabel } from '../components/website/Primitives'

export function Founder() {
  return (
    <section id="oprichter" className="web-section web-founder" aria-labelledby="founder-title">
      <div className="web-container web-founder__grid">
        <figure className="web-founder__portrait" data-reveal>
          <Image
            src="/kylian-founder.jpg"
            alt="Kylian, oprichter van Tibbe"
            width={1633}
            height={2449}
            sizes="(max-width: 600px) 90vw, (max-width: 960px) 42vw, 480px"
          />
          <figcaption><strong>Kylian</strong><span>Oprichter van Tibbe</span></figcaption>
        </figure>
        <div className="web-founder__copy" data-reveal>
          <SectionLabel>De ondernemer achter Tibbe</SectionLabel>
          <h2 id="founder-title">Goed werk begint<br />met een gesprek.</h2>
          <p className="web-founder__lead">Achter Tibbe staat Kylian. Ondernemer, partner van Kitchen Royal en oprichter van Tibbe.</p>
          <p>Een AI-operator begint bij het begrijpen van jouw werk. Wat komt steeds terug? Waar blijven dingen liggen? En welke beslissingen wil je zelf blijven nemen?</p>
          <p>Daar begint de kennismaking. Bij jouw bedrijf, je team en één concreet proces.</p>
          <ActionLink href="#contact">Maak kennis met Kylian</ActionLink>
        </div>
      </div>
    </section>
  )
}
