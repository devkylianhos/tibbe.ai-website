import { MotionToggle } from '../components/website/MotionProvider'
import { ParticleVisual } from '../components/website/ParticleVisual'
import { ArrowDown, Check } from 'lucide-react'
import { ActionLink, SectionLabel } from '../components/website/Primitives'

export function Hero() {
  return (
    <>
      <section className="web-hero web-hero--cinema" aria-labelledby="hero-title">
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
            </div>
            <p className="web-hero__note">Veel systeem. Weinig ruis.</p>
          </div>
        </div>
        <div className="web-container web-hero__bottom">
          <span>AI-SYSTEMEN / MARKETING & OPERATIE</span>
          <a href="#mogelijkheden">
            Ontdek wat Tibbe doet <ArrowDown size={14} aria-hidden="true" />
          </a>
          <MotionToggle />
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
