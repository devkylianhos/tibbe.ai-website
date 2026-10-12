import Link from 'next/link'
import { ServiceShowcase, type ShowcaseKind } from './ServiceShowcase'
import { Navigation } from './website/Navigation'
import { WebsiteMotionProvider, MotionToggle } from './website/MotionProvider'
import { ParticleVisual } from './website/ParticleVisual'
import { MotionSurface } from './website/MotionSurface'
import { Footer } from './Footer'
import { ActionLink, SectionLabel } from './website/Primitives'
import { ArrowRight } from 'lucide-react'
import '@/styles/premium-motion.css'
import '@/styles/particle-visuals.css'
import '@/styles/agency.css'

export type ServicePageContent = {
  label: string; title: string; intro: string;
  visual?: ShowcaseKind;
  cta: string; sectionTitle: string; questions?: readonly (readonly [string, string])[];
  audience?: string; deliverables?: readonly string[]; scope?: string;
  parts: readonly { title: string; copy: string }[];
  exampleTitle: string; exampleCopy: string; steps: readonly string[];
}

export function ServicePage({ content }: { content: ServicePageContent }) {
  return <WebsiteMotionProvider>
    <MotionSurface /><a className="web-skip" href="#main-content">Naar de inhoud</a><Navigation homeLinks />
    <main id="main-content" tabIndex={-1}>
      <section className="web-hero web-hero--cinema service-page-hero">
        <ParticleVisual />
        <div className="web-container web-hero__grid"><div className="web-hero__copy">
          <SectionLabel>{content.label}</SectionLabel><h1>{content.title}</h1>
          <p className="web-hero__lead">{content.intro}</p>
          <div className="web-actions"><ActionLink href="/#contact">{content.cta}</ActionLink></div>
        </div></div>
        <div className="web-container web-hero__bottom"><Link href="/#mogelijkheden">Bekijk wat Tibbe bouwt <ArrowRight aria-hidden="true" size={14} /></Link><MotionToggle /></div>
      </section>
      <section className="web-section web-capabilities"><div className="web-container">
        <div className="web-section-intro" data-reveal><div><h2>{content.sectionTitle}</h2></div><p>{content.audience || "We beginnen bij je bedrijf en je klanten. Je krijgt vooraf duidelijkheid over de werkzaamheden, prijs en planning."}</p></div>
        {content.visual ? <ServiceShowcase only={content.visual} /> : <div className="service-start-steps">{content.parts.map(part => <article key={part.title}><h3>{part.title}</h3><p>{part.copy}</p></article>)}</div>}
      </div></section>
      {content.deliverables && <section className="web-section web-faq service-delivery"><div className="web-container web-faq__grid">
        <div><h2>Dit krijg je</h2><p className="service-delivery__note">De precieze omvang staat vooraf in je voorstel.</p></div>
        <div><ul className="service-delivery__list">{content.deliverables.map(item => <li key={item}>{item}</li>)}</ul><details><summary>Over de omvang en kosten<span aria-hidden="true">+</span></summary><p>{content.scope}</p></details><details><summary>Meer over onze aanpak<span aria-hidden="true">+</span></summary>{content.parts.map(part => <p key={part.title}><strong>{part.title}</strong> {part.copy}</p>)}</details></div>
      </div></section>}
      {content.questions && <section className="web-section web-faq"><div className="web-container web-faq__grid">
        <div><h2>Voordat we<br />beginnen</h2></div>
        <div>{content.questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </div></section>}
      <section className="web-section"><div className="web-container service-page-contact" data-reveal><h2>Vertel ons wat<br />je wilt verbeteren.</h2><p>Bespreek je plannen met Kylian. Samen bepalen we een eerste stap, met duidelijke afspraken over prijs en planning.</p><ActionLink href="/#contact">{content.cta}</ActionLink></div></section>
    </main><Footer />
  </WebsiteMotionProvider>
}
