import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  RotateCcw,
  ShieldCheck,
  X,
} from 'lucide-react'
import { SectionLabel } from '../components/website/Primitives'

type Decision = 'pending' | 'approved' | 'rejected'
export function Experience() {
  const [decision, setDecision] = useState<Decision>('pending')
  const [evidence, setEvidence] = useState(false)
  const actions = useRef<HTMLDivElement>(null)
  const interacted = useRef(false)
  const choose = (next: Decision) => {
    interacted.current = true
    setDecision(next)
  }
  useEffect(() => {
    if (interacted.current) actions.current?.querySelector('button')?.focus({ preventScroll: true })
  }, [decision])
  const decided = decision !== 'pending'
  return (
    <section id="ervaring" className="web-experience web-section agency-example">
      <span id="praktijk" className="agency-anchor" aria-hidden="true" />
      <div className="web-container">
        <div className="web-section-intro" data-reveal>
          <div>
            <SectionLabel number="03">Zo werkt het in de praktijk</SectionLabel>
            <h2>
              Een aanvraag binnen.
              <br />
              Een volgende stap klaar.
            </h2>
          </div>
          <div>
            <p>
              Stel: je hebt een installatiebedrijf. Een klant vraagt via je website een offerte aan.
              De aanvraag komt bij je team en AI helpt een antwoord voor te bereiden. Probeer hieronder wat er gebeurt.
            </p>
            <span className="web-demo-label">Interactieve demo · geen echte acties</span>
          </div>
        </div>
        <div className="experience-console" data-reveal>
          <div className="experience-console__bar">
            <span>
              <Image src="/tibbe-loop.svg" width={25} height={25} alt="" /> VAN WEBSITE NAAR OPVOLGING
            </span>
            <span>
              VOORBEELDOMGEVING <i />
            </span>
          </div>
          <div className="experience-console__body">
            <aside className="experience-log">
              <SectionLabel>Klantaanvraag / voorbeeld</SectionLabel>
              <ol>
                <li className="is-complete">
                  <Check size={14} />
                  <div>
                    Aanvraag via je website<small>Offerte voor een laadpaal</small>
                  </div>
                  <time>09:41</time>
                </li>
                <li className="is-complete">
                  <Check size={14} />
                  <div>
                    Bij je team binnengekomen<small>AI bereidt een vervolgvraag voor</small>
                  </div>
                  <time>09:41</time>
                </li>
                <li className={decided ? 'is-complete' : 'is-current'}>
                  {decided ? <Check size={14} /> : <span className="log-dot" />}
                  <div>
                    {decided ? 'Beslissing vastgelegd' : 'Wacht op jouw besluit'}
                    <small>{decided ? 'Jouw keuze is bewaard' : 'Er is nog niets verstuurd'}</small>
                  </div>
                </li>
                <li className={decision === 'approved' ? 'is-complete' : ''}>
                  {decision === 'approved' ? <Check size={14} /> : <span className="log-dot" />}
                  <div>
                    {decision === 'rejected' ? 'Actie gestopt' : 'Vervolgactie'}
                    <small>
                      {decision === 'approved'
                        ? 'In deze demo gesimuleerd'
                        : decision === 'rejected'
                          ? 'Niets uitgevoerd'
                          : 'Pas na goedkeuring'}
                    </small>
                  </div>
                </li>
              </ol>
              <div className="experience-log__note">
                <ShieldCheck size={18} />
                <p>
                  De grens is helder.
                  <br />
                  Tibbe wacht op jou.
                </p>
              </div>
            </aside>
            <div className="experience-decision">
              <div className="experience-decision__top">
                <span
                  className={`web-status ${decision === 'approved' ? 'web-status--success' : decision === 'rejected' ? 'web-status--neutral' : 'web-status--warning'}`}
                >
                  {decided ? <Check size={13} /> : <span />}
                  {decision === 'approved'
                    ? 'Goedgekeurd'
                    : decision === 'rejected'
                      ? 'Afgewezen'
                      : 'Jouw goedkeuring nodig'}
                </span>
                <span className="web-mono">01 / KLANTAANVRAAG</span>
              </div>
              <h3>Nog één vraag voor de offerte.</h3>
              <p className="experience-summary">
                De klant wil een laadpaal laten plaatsen. Het adres is bekend, maar een foto van de
                meterkast ontbreekt. AI heeft een bericht voorbereid om die op te vragen.
              </p>
              <dl className="experience-amounts agency-request">
                <div><dt>De vraag</dt><dd>Laadpaal plaatsen</dd></div>
                <div><dt>Al bekend</dt><dd>Adres en contactgegevens</dd></div>
                <div><dt>Nog nodig</dt><dd>Foto van de meterkast</dd></div>
              </dl>
              <button
                className="experience-source"
                aria-expanded={evidence}
                aria-controls="source-evidence"
                onClick={() => setEvidence(!evidence)}
              >
                <FileText size={18} />
                <span>Bekijk de aanvraag en het conceptbericht</span>
                <ChevronRight size={18} className={evidence ? 'is-open' : ''} />
              </button>
              <div id="source-evidence" hidden={!evidence} className="experience-evidence">
                <dl>
                  <div>
                    <dt>Bronnen</dt>
                    <dd>Fictief websiteformulier: “Ik wil graag een offerte voor een laadpaal bij mijn huis.”</dd>
                  </div>
                  <div>
                    <dt>Conceptbericht</dt>
                    <dd>“Bedankt voor je aanvraag. Kun je een foto van je meterkast sturen? Dan kunnen we je aanvraag verder bekijken.”</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>
                      Jij controleert het bericht voordat het wordt verstuurd. Deze demo verstuurt niets.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="experience-outcome" role="status" aria-live="polite">
                {decision === 'approved' ? (
                  <p>
                    <Check size={19} /> Goedgekeurd. De vervolgstap is gesimuleerd en je besluit
                    staat in het overzicht.
                  </p>
                ) : decision === 'rejected' ? (
                  <p>
                    <X size={19} /> Afgewezen. Het voorstel is gestopt; er is niets uitgevoerd.
                  </p>
                ) : (
                  <p>Jouw besluit geldt alleen voor deze voorgestelde actie.</p>
                )}
              </div>
              <div className="experience-decision__actions" ref={actions}>
                {!decided ? (
                  <>
                    <button className="web-action" onClick={() => choose('approved')}>
                      Voorstel goedkeuren <Check size={17} />
                    </button>
                    <button className="web-quiet-button" onClick={() => choose('rejected')}>
                      Afwijzen <X size={16} />
                    </button>
                  </>
                ) : (
                  <button
                    className="web-action web-action--secondary"
                    onClick={() => {
                      choose('pending')
                      setEvidence(false)
                    }}
                  >
                    <RotateCcw size={16} /> Demo opnieuw
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="experience-caption">
          <span>Website → je team → AI-voorstel → jouw akkoord.</span>
          <a href="#contact">
            Bespreek jouw situatie <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
