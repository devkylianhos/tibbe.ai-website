import { ArrowDownRight, ArrowRight, Check, Fingerprint, ListChecks, ScanLine } from 'lucide-react'
import { ActionLink, SectionLabel } from '../components/website/Primitives'
import { faqs, processSteps } from '../content/website'

export function Problem() {
  return (
    <section className="web-section web-problem">
      <div className="web-container web-problem__grid" data-reveal>
        <div>
          <SectionLabel number="01">Waar werk blijft liggen</SectionLabel>
          <h2>
            Het werk
            <br />
            tussen je tools.
          </h2>
          <ArrowDownRight className="web-editorial-arrow" size={76} strokeWidth={1} />
        </div>
        <div className="web-problem__body">
          <p className="web-large-copy">
            De campagne wacht op beeld.
            <br />
            De klant wacht op antwoord.
            <br />
            Je team wacht op de volgende stap.
          </p>
          <p>
            Het zijn de kleine overdrachten die je dag versnipperen. Informatie verzamelen. Gegevens
            vergelijken. Weer een bericht sturen.
          </p>
          <p>
            Tibbe verbindt die stappen tot één werkstroom. Je team krijgt de context en de
            beslissingen die ertoe doen.
          </p>
          <a className="web-text-link" href="#mogelijkheden">
            Geef het werk een vervolg <ArrowRight size={17} />
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
            <SectionLabel number="03">Eén doorlopend systeem</SectionLabel>
            <h2>
              Van eerste signaal tot
              <br />
              aantoonbaar resultaat.
            </h2>
          </div>
          <p>
            Een vaste manier van werken.
            <br />
            Een helder antwoord bij elke stap.
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
          <SectionLabel number="06">De manier van Tibbe</SectionLabel>
          <h2>
            Veel systeem.
            <br />
            Weinig ruis.
          </h2>
          <p>
            Autonomie werkt als de grenzen helder zijn. Daarom horen uitleg, goedkeuring en controle
            bij dezelfde ervaring.
          </p>
        </div>
        <div className="web-trust__grid" data-reveal>
          {[
            {
              Icon: ScanLine,
              title: 'Altijd navolgbaar.',
              copy: 'Elke belangrijke actie heeft context. Je kunt terug naar de bron en ziet waarom een voorstel is gedaan.',
            },
            {
              Icon: Fingerprint,
              title: 'Jouw grenzen gelden.',
              copy: 'Welke bronnen Tibbe gebruikt en welke acties toestemming vragen, leg je vooraf vast.',
            },
            {
              Icon: ListChecks,
              title: 'Collega, geen tool.',
              copy: 'Een concrete terugkoppeling over het werk. Met aandacht voor de uitzonderingen die jouw besluit nodig hebben.',
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
          <SectionLabel number="07">Heldere antwoorden</SectionLabel>
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
