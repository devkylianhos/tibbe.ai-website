import Image from 'next/image'
import { ActionLink } from '../components/website/Primitives'

export function Founder() {
  return (
    <section id="oprichter" className="web-section web-founder" aria-labelledby="founder-title">
      <span id="over" className="agency-anchor" aria-hidden="true" />
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
          <h2 id="founder-title">Goed werk begint<br />met een gesprek.</h2>
          <p className="web-founder__lead">Je bespreekt je project met Kylian, oprichter van Tibbe.</p>
          <p>We bekijken wat je wilt bouwen en hoe je bedrijf werkt. Je krijgt een concreet voorstel en weet waar je aan toe bent.</p>
          <ActionLink href="#contact">Maak kennis met Kylian</ActionLink>
        </div>
      </div>
    </section>
  )
}
