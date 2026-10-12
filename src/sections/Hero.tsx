import { MotionToggle } from '../components/website/MotionProvider'
import { ParticleVisual } from '../components/website/ParticleVisual'
import { ArrowDown, Check } from 'lucide-react'
import { ActionLink, SectionLabel } from '../components/website/Primitives'

export function Hero() {
  return (
    <>
      <section id="top" className="web-hero web-hero--cinema agency-hero" aria-labelledby="hero-title">
        <ParticleVisual />
        <div className="web-container web-hero__grid">
          <div className="web-hero__copy">
            <SectionLabel>Jouw digitale partner voor het MKB</SectionLabel>
            <h1 id="hero-title">
              <span className="motion-line"><span>Websites en webshops</span></span>
              <span className="motion-line"><span>die werken.</span></span>
              <span className="agency-hero__second">Ook achter de schermen.</span>
            </h1>
            <p className="web-hero__lead">
              We ontwerpen en bouwen je website of webshop. En koppelen aanvragen, bestellingen en klantvragen aan je dagelijkse werk. Met automatisering en AI waar dat echt helpt.
            </p>
            <div className="web-actions">
              <ActionLink>Bespreek je project</ActionLink>
            </div>
            <p className="web-hero__note">Met Kylian. Over jouw plannen en een passende eerste stap.</p>
          </div>
        </div>
        <div className="web-container web-hero__bottom">
          <span>WEBSITES · WEBSHOPS · AUTOMATISERING</span>
          <a href="#mogelijkheden">
            Ontdek wat Tibbe doet <ArrowDown size={14} aria-hidden="true" />
          </a>
          <MotionToggle />
        </div>
      </section>
      <div className="web-principle-strip">
        <div className="web-container">
          <span>Van eerste contact tot opvolging.</span>
          <span>
            <Check size={16} /> Passend bij jouw bedrijf
          </span>
          <span>
            <Check size={16} /> Aangesloten op je software
          </span>
          <span>
            <Check size={16} /> Je team houdt de regie
          </span>
        </div>
      </div>
    </>
  )
}
