import { useState } from 'react'
import { MotionToggle } from '../components/website/MotionProvider'
import { ParticleVisual } from '../components/website/ParticleVisual'
import { Logo } from '../components/Logo'
import { ArrowDown, ArrowUpRight, Check, FileText, GitBranch, ShieldCheck } from 'lucide-react'
import { ActionLink, SectionLabel } from '../components/website/Primitives'

const stages = [
  {
    title: 'Een factuur vraagt aandacht.',
    text: 'Tibbe vergelijkt de factuur met de oorspronkelijke bestelling.',
    meta: 'BRON / INKOOPFACTUUR',
    icon: FileText,
  },
  {
    title: 'Een voorstel, met context.',
    text: 'Er is een prijsverschil. Jij ziet de bron en beslist wat er gebeurt.',
    meta: 'GRENS / JOUW GOEDKEURING',
    icon: GitBranch,
  },
  {
    title: 'Een resultaat dat je kunt volgen.',
    text: 'De uitkomst wordt gecontroleerd en aan de actie gekoppeld.',
    meta: 'UITKOMST / CONTROLELOG',
    icon: ShieldCheck,
  },
]

export function Hero() {
  const [stage, setStage] = useState(0)
  const StageIcon = stages[stage].icon
  return (
    <>
      <section className="web-hero" aria-labelledby="hero-title">
        <ParticleVisual />
        <div className="web-container web-hero__grid">
          <div className="web-hero__copy">
            <SectionLabel>Jouw AI-operator</SectionLabel>
            <h1 id="hero-title">
              <span className="motion-line"><span>Werk gaat door.</span></span>
              <span className="motion-line"><span>Jij houdt koers.</span></span>
            </h1>
            <p className="web-hero__lead">
              Tibbe bouwt en beheert AI-systemen voor marketing en operatie.
              Van advertenties en video tot klantenservice en automatisering.
              Jij bepaalt de richting en keurt belangrijke stappen goed.
            </p>
            <div className="web-actions">
              <ActionLink>Plan een kennismaking</ActionLink>
              <a className="web-text-link" href="#ervaring">
                Ervaar Tibbe <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="web-hero__motion-note"><p className="web-hero__note">Veel systeem. Weinig ruis.</p><MotionToggle /></div>
          </div>
          <div
            className="operator-stage"
            data-stage={stage}
            aria-label="Illustratieve werkstroom van signaal naar bewijs"
          >
            <div className="operator-stage__light" aria-hidden="true" />
            <div className="operator-stage__heading">
              <span>TIBBE / CONTINUOUS WORK</span>
              <span>INTERACTIEF VOORBEELD</span>
            </div>
            <svg className="operator-path" viewBox="0 0 560 500" fill="none" aria-hidden="true">
              <path
                className="operator-path__base"
                d="M70 105H420C510 105 510 385 420 385H150C40 385 40 248 150 248H330"
              />
              <path
                className="operator-path__line"
                d="M70 105H420C510 105 510 385 420 385H150C40 385 40 248 150 248H330"
              />
              <circle cx="70" cy="105" r="6" />
              <circle cx="420" cy="385" r="6" />
              <circle cx="330" cy="248" r="6" />
            </svg>
            <div className="operator-node operator-node--source">
              <FileText size={17} />
              <div>
                <small>01 / SIGNAAL</small>
                <strong>Factuur ontvangen</strong>
              </div>
              <Check size={15} />
            </div>
            <div className="operator-core">
              <Logo inverse compact className="operator-core__mark" />
              <span>tibbe</span>
              <small>CONTEXT → ACTIE</small>
            </div>
            <div className="operator-card" key={stage}>
              <div className="operator-card__label">
                <StageIcon size={16} />
                {stages[stage].meta}
              </div>
              <h2>{stages[stage].title}</h2>
              <p>{stages[stage].text}</p>
              <a href="#ervaring">
                Bekijk de werkstroom <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="operator-stage__selector" aria-label="Kies een processtap">
              {['Signaal', 'Besluit', 'Bewijs'].map((label, index) => (
                <button key={label} aria-pressed={stage === index} onClick={() => setStage(index)}>
                  <span>0{index + 1}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="web-container web-hero__bottom">
          <span>RUST AAN DE VOORKANT. EEN SYSTEEM ERACHTER.</span>
          <a href="#mogelijkheden">
            Ontdek wat Tibbe doet <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="web-principle-strip">
        <div className="web-container">
          <span>Ontworpen voor controle.</span>
          <span>
            <Check size={16} /> Context bij iedere actie
          </span>
          <span>
            <Check size={16} /> Goedkeuring waar nodig
          </span>
          <span>
            <Check size={16} /> Een navolgbaar resultaat
          </span>
        </div>
      </div>
    </>
  )
}
