import { Navigation } from './website/Navigation'
import { Hero } from '../sections/Hero'
import { Capabilities } from '../sections/Capabilities'
import { Experience } from '../sections/Experience'
import { FAQ, Process, Trust } from '../sections/Story'
import { MotionSurface } from './website/MotionSurface'
import { WebsiteMotionProvider } from './website/MotionProvider'
import '@/styles/premium-motion.css'
import '@/styles/particle-visuals.css'
import '@/styles/agency.css'
import { Contact } from '../sections/Contact'
import { Founder } from '../sections/Founder'

export function Website() {
  return (
    <WebsiteMotionProvider>
      <MotionSurface />
      <div className="web-scroll-progress" aria-hidden="true" />
      <a className="web-skip" href="#main-content">
        Naar de inhoud
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Capabilities />
        <Trust />
        <Process />
        <Experience />
        <Founder />
        <FAQ />
        <Contact />
      </main>
    </WebsiteMotionProvider>
  )
}
