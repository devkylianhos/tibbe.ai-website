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
          <SectionLabel>Jouw kennismaking met Tibbe</SectionLabel>
          <h2 id="founder-title">Goed werk begint<br />met een gesprek.</h2>
          <p className="web-founder__lead">Je bespreekt je project met Kylian, oprichter van Tibbe.</p>
          <p>Een goede website of slimme koppeling begint bij het begrijpen van jouw bedrijf. Hoe vinden klanten je? Wat gebeurt er na een aanvraag? En waar is je team onnodig veel tijd aan kwijt?</p>
          <p>In het gesprek maken we je vraag concreet: wat moet de oplossing doen, wat heb je al en waar wil je beginnen? Daarna kun je een voorstel beoordelen op inhoud, prijs en planning.</p>
          <ActionLink href="#contact">Maak kennis met Kylian</ActionLink>
        </div>
      </div>
    </section>
  )
}
