import { MotionToggle } from '../components/website/MotionProvider'
import { ParticleLogo } from '../components/website/ParticleLogo'
import '@/styles/particle-logo.css'
import { ArrowDown, Check } from 'lucide-react'
import { ActionLink, SectionLabel } from '../components/website/Primitives'

export function Hero() {
  return (
    <>
      <section id="top" className="web-hero web-hero--cinema agency-hero hero--particle-logo" aria-labelledby="hero-title">
        <div className="web-container web-hero__grid">
          <div className="web-hero__copy">
            <SectionLabel>AI-agents & automatisering voor het MKB</SectionLabel>
            <h1 id="hero-title">
              <span className="motion-line"><span>Minder terugkerend</span></span>
              <span className="motion-line"><span>werk</span></span>
              <span className="agency-hero__second">Meer tijd voor je bedrijf</span>
            </h1>
            <p className="web-hero__lead">
              We kijken waar het werk vastloopt en bouwen een oplossing die bij je bedrijf past. Van AI-agents tot softwarekoppelingen: we beginnen bij één proces en regelen het beheer.
            </p>
            <div className="web-actions">
              <ActionLink href="#keuzehulp">Ontdek jouw eerste stap</ActionLink>
              <ActionLink secondary>Bespreek je werkproces</ActionLink>
            </div>
            <p className="web-hero__note">Beantwoord 6 vragen. Krijg direct een eerste advies, zonder contactgegevens.</p>
          </div>
          <ParticleLogo />
        </div>
        <div className="web-container web-hero__bottom">
          <span>AI-AGENTS · AUTOMATISERING · BEHEER</span>
          <a href="#mogelijkheden">
            Ontdek wat Tibbe doet <ArrowDown size={14} aria-hidden="true" />
          </a>
          <MotionToggle />
        </div>
      </section>
      <div className="web-principle-strip">
        <div className="web-container">
          <span>Eén proces als eerste stap.</span>
          <span>
            <Check aria-hidden="true" size={16} /> Passend bij jouw bedrijf
          </span>
          <span>
            <Check aria-hidden="true" size={16} /> Eerst je software onderzoeken
          </span>
          <span>
            <Check aria-hidden="true" size={16} /> Je team houdt de regie
          </span>
        </div>
      </div>
    </>
  )
}
