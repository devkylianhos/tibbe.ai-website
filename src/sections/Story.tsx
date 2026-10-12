import { ArrowDownRight, ArrowRight, Check, Fingerprint, ListChecks, ScanLine } from 'lucide-react'
import { ActionLink, SectionLabel } from '../components/website/Primitives'
import { faqs, processSteps } from '../content/website'

export function Problem() {
  return (
    <section className="web-section web-problem">
      <div className="web-container web-problem__grid" data-reveal>
        <div>
          <SectionLabel number="01">Herkenbaar?</SectionLabel>
          <h2>
            Een nieuwe klant.
            <br />
            En dan?
          </h2>
          <ArrowDownRight className="web-editorial-arrow" size={76} strokeWidth={1} />
        </div>
        <div className="web-problem__body">
          <p className="web-large-copy">
            Een aanvraag in je mailbox.
            <br />
            Een bestelling in je webshop.
            <br />
            En de rest gebeurt met de hand.
          </p>
          <p>
            Gegevens overtypen. Uitzoeken wie antwoord geeft. Onthouden welke offerte nog openstaat.
            Het kost je team aandacht, elke dag opnieuw.
          </p>
          <p>
            Tibbe bouwt de verbinding tussen je online bedrijf en je dagelijkse werk.
            Van een heldere website tot een aanvraag die bij de juiste collega terechtkomt.
          </p>
          <a className="web-text-link" href="#mogelijkheden">
            Bekijk wat we bouwen <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
export function Process() {
  return (
    <section id="werkwijze" className="web-section web-process">
      <div className="web-container">
        <div className="web-section-intro" data-reveal>
          <div>
            <SectionLabel number="04">Zo werken we samen</SectionLabel>
            <h2>
              Eerst begrijpen.
              <br />
              Dan bouwen.
            </h2>
          </div>
          <p>
            Je hoeft zelf geen technische kennis te hebben. We maken samen duidelijk wat er nodig is, wat je krijgt en hoe je ermee werkt.
          </p>
        </div>
        <ol className="web-process__steps" data-reveal>
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <div className="web-process__marker">
                <span>0{index + 1}</span>
                <ArrowRight size={16} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              <small>{step.label}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
export function UseCases() {
  return (
    <section id="praktijk" className="web-section web-usecases">
      <div className="web-container">
        <div className="web-section-intro" data-reveal>
          <div>
            <SectionLabel number="05">In de praktijk</SectionLabel>
            <h2>
              Minder achter
              <br />
              werk aan.
            </h2>
          </div>
          <p>
            Een duidelijkere volgende stap.
            <br />
            Meer ruimte voor het werk van je team.
          </p>
        </div>
        <div className="web-outcomes" data-reveal>
          {[
            ['Administratie', 'Handmatig gegevens vergelijken', 'Afwijkingen met bron en voorstel'],
            [
              'Opvolging',
              'Zoeken naar de laatste afspraak',
              'Een vervolgactie met de juiste context',
            ],
            [
              'Operatie',
              'Losse updates bij elkaar zoeken',
              'Eén overzicht van wat aandacht vraagt',
            ],
          ].map(([title, before, after], index) => (
            <article key={title}>
              <span className="web-mono">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{before}</p>
              <ArrowRight size={20} />
              <strong>{after}</strong>
            </article>
          ))}
        </div>
        <article className="web-case" data-reveal>
          <div>
            <SectionLabel>Uitgelicht / voorbeeldsituatie</SectionLabel>
            <h3>
              Een factuur klopt niet.
              <br />
              Je volgende stap wel.
            </h3>
            <p>
              Een operationeel team ontvangt een factuur met een afwijkend bedrag. In plaats van
              alle informatie opnieuw bij elkaar te zoeken, beoordeelt het team één onderbouwd
              voorstel.
            </p>
            <ActionLink secondary href="#ervaring">
              Probeer deze werkstroom
            </ActionLink>
          </div>
          <div className="web-case__sequence">
            <div>
              <span>DE VRAAG</span>
              <p>Waarom is het bedrag hoger?</p>
            </div>
            <div>
              <span>HET WERK VAN TIBBE</span>
              <p>Bronnen vergelijken. Verschil aanwijzen. Opvolging voorstellen.</p>
            </div>
            <div>
              <span>DE UITKOMST</span>
              <p>Jij beslist met de relevante informatie voor je.</p>
            </div>
            <small>Illustratief scenario, geen klantcase of gemeten resultaat.</small>
          </div>
        </article>
      </div>
    </section>
  )
}
export function Trust() {
  return (
    <section id="over" className="web-section web-trust">
      <div className="web-container">
        <div className="web-trust__intro" data-reveal>
          <SectionLabel number="05">AI met duidelijke afspraken</SectionLabel>
          <h2>
            Veel systeem.
            <br />
            Weinig ruis.
          </h2>
          <p>
            AI helpt bij het voorbereiden van werk. We spreken af welke informatie gebruikt mag worden,
            wat vanzelf mag gaan en waar je team eerst naar kijkt.
          </p>
        </div>
        <div className="web-trust__grid" data-reveal>
          {[
            {
              Icon: ScanLine,
              title: 'Je begrijpt wat er gebeurt.',
              copy: 'We laten zien hoe de oplossing werkt en waar de informatie vandaan komt. Je krijgt uitleg in gewone taal.',
            },
            {
              Icon: Fingerprint,
              title: 'Jij bepaalt de grenzen.',
              copy: 'We spreken af welke gegevens gebruikt worden en welke stappen je eerst wilt goedkeuren. Bij twijfel gaat een vraag naar je team.',
            },
            {
              Icon: ListChecks,
              title: 'Hulp op de juiste plek.',
              copy: 'Een vaste regel is soms genoeg. We zetten AI in waar het helpt om informatie te begrijpen of een voorstel te maken.',
            },
          ].map(({ Icon, title, copy }) => (
            <article key={title}>
              <Icon size={28} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="web-control-strip">
          <span>CONTROLE IS ONDERDEEL VAN HET WERK.</span>
          <span>
            <Check size={15} /> Bron
          </span>
          <span>
            <Check size={15} /> Besluit
          </span>
          <span>
            <Check size={15} /> Resultaat
          </span>
        </div>
      </div>
    </section>
  )
}
export function FAQ() {
  return (
    <section id="vragen" className="web-section web-faq">
      <div className="web-container web-faq__grid">
        <div data-reveal>
          <SectionLabel number="06">Heldere antwoorden</SectionLabel>
          <h2>
            Goed om
            <br />
            te weten.
          </h2>
        </div>
        <div data-reveal>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
