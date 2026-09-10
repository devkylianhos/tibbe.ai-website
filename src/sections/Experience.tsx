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
    <section id="ervaring" className="web-experience web-section">
      <div className="web-container">
        <div className="web-section-intro" data-reveal>
          <div>
            <SectionLabel number="04">Jij aan het stuur</SectionLabel>
            <h2>
              Dit is het moment
              <br />
              waarop jij beslist.
            </h2>
          </div>
          <div>
            <p>
              Een afwijking is pas bruikbaar als je begrijpt wat er speelt. Bekijk de context. Kies
              wat er daarna gebeurt.
            </p>
            <span className="web-demo-label">Interactieve demo · geen echte acties</span>
          </div>
        </div>
        <div className="experience-console" data-reveal>
          <div className="experience-console__bar">
            <span>
              <Image src="/tibbe-loop.svg" width={25} height={25} alt="" /> MISSION CONTROL
            </span>
            <span>
              VOORBEELDOMGEVING <i />
            </span>
          </div>
          <div className="experience-console__body">
            <aside className="experience-log">
              <SectionLabel>Werklog / FACTUUR-024</SectionLabel>
              <ol>
                <li className="is-complete">
                  <Check size={14} />
                  <div>
                    Factuur ontvangen<small>Bron gekoppeld</small>
                  </div>
                  <time>09:41</time>
                </li>
                <li className="is-complete">
                  <Check size={14} />
                  <div>
                    Bestelling vergeleken<small>Prijsverschil gevonden</small>
                  </div>
                  <time>09:41</time>
                </li>
                <li className={decided ? 'is-complete' : 'is-current'}>
                  {decided ? <Check size={14} /> : <span className="log-dot" />}
                  <div>
                    {decided ? 'Beslissing vastgelegd' : 'Wacht op jouw besluit'}
                    <small>{decided ? 'Met besliscontext' : 'Uitvoering gepauzeerd'}</small>
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
                <span className="web-mono">01 / ADMINISTRATIE</span>
              </div>
              <h3>Dit bedrag wijkt af.</h3>
              <p className="experience-summary">
                De factuur is € 150 hoger dan de bestelling. Ik stel voor om de leverancier om een
                specificatie te vragen.
              </p>
              <dl className="experience-amounts">
                <div>
                  <dt>Bestelling</dt>
                  <dd>
                    € 1.240<span>,00</span>
                  </dd>
                </div>
                <div>
                  <dt>Factuur</dt>
                  <dd>
                    € 1.390<span>,00</span>
                  </dd>
                </div>
                <div>
                  <dt>Verschil</dt>
                  <dd>
                    + € 150<span>,00</span>
                  </dd>
                </div>
              </dl>
              <button
                className="experience-source"
                aria-expanded={evidence}
                aria-controls="source-evidence"
                onClick={() => setEvidence(!evidence)}
              >
                <FileText size={18} />
                <span>Bekijk bron en voorgestelde actie</span>
                <ChevronRight size={18} className={evidence ? 'is-open' : ''} />
              </button>
              <div id="source-evidence" hidden={!evidence} className="experience-evidence">
                <dl>
                  <div>
                    <dt>Bronnen</dt>
                    <dd>Voorbeeldfactuur INV-024 en bestelling PO-018</dd>
                  </div>
                  <div>
                    <dt>Verandering</dt>
                    <dd>Een verduidelijkingsverzoek voorbereiden voor de leverancier.</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>
                      Geen betaling of wijziging van de bestelling. In deze demo wordt geen e-mail
                      verstuurd.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="experience-outcome" role="status" aria-live="polite">
                {decision === 'approved' ? (
                  <p>
                    <Check size={19} /> Goedgekeurd. De vervolgstap is gesimuleerd en je besluit
                    staat in het werklog.
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
          <span>Context → keuze → actie → bewijs.</span>
          <a href="/app">
            Open de Tibbe-app <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
