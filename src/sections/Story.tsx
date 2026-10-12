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
          <ArrowDownRight aria-hidden="true" className="web-editorial-arrow" size={76} strokeWidth={1} />
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
            Bekijk wat we bouwen <ArrowRight aria-hidden="true" size={17} />
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
            <SectionLabel number="03">Zo werken we samen</SectionLabel>
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
                <ArrowRight aria-hidden="true" size={16} />
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
              <ArrowRight aria-hidden="true" size={20} />
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
          <SectionLabel number="02">Waarom Tibbe</SectionLabel>
          <h2>
            Goed gebouwd.
            <br />
            Goed doordacht.
          </h2>
          <p>
            We kijken naar wat je klanten online nodig hebben én wat je team daarna moet doen. Zo sluiten ontwerp, techniek en het dagelijkse werk op elkaar aan.
          </p>
        </div>
        <div className="web-trust__grid" data-reveal>
          {[
            {
              Icon: ScanLine,
              title: 'Je weet wat je krijgt.',
              copy: 'Je beoordeelt vooraf de inhoud van de opdracht, prijs en planning. Tijdens de bouw bekijk je het ontwerp en probeer je de oplossing.',
            },
            {
              Icon: Fingerprint,
              title: 'Ook de volgende stap klopt.',
              copy: 'Een aanvraag of bestelling stopt niet bij je website. We bespreken waar die terechtkomt, wie opvolgt en welke koppelingen nodig zijn.',
            },
            {
              Icon: ListChecks,
              title: 'AI heeft een duidelijke taak.',
              copy: 'Een vaste regel is soms genoeg. We zetten AI in waar het helpt om informatie te begrijpen of een voorstel te maken.',
            },
          ].map(({ Icon, title, copy }) => (
            <article key={title}>
              <Icon aria-hidden="true" size={28} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="web-control-strip">
          <span>AFSPRAKEN VOORDAT WE BOUWEN.</span>
          <span>
            <Check aria-hidden="true" size={15} /> Omvang
          </span>
          <span>
            <Check aria-hidden="true" size={15} /> Budget
          </span>
          <span>
            <Check aria-hidden="true" size={15} /> Planning
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
            Prijs, planning
            <br />
            en praktische vragen.
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
