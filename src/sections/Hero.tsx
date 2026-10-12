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
            <SectionLabel>Websites, webshops & AI voor het MKB</SectionLabel>
            <h1 id="hero-title">
              <span className="motion-line"><span>Van klantvraag</span></span>
              <span className="motion-line"><span>naar actie.</span></span>
            </h1>
            <p className="web-hero__lead">
              We bouwen websites en webshops en verbinden ze met het werk erachter.
              Slimme koppelingen en AI helpen je team om aanvragen, bestellingen en klantvragen op te volgen.
            </p>
            <div className="web-actions">
              <ActionLink>Bespreek jouw plannen</ActionLink>
            </div>
            <p className="web-hero__note">Begin met wat jouw bedrijf nu nodig heeft.</p>
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
