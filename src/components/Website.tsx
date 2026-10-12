'use client'

import { Navigation } from './website/Navigation'
import { Hero } from '../sections/Hero'
import { Capabilities } from '../sections/Capabilities'
import { Experience } from '../sections/Experience'
import { FAQ, Problem, Process, Trust } from '../sections/Story'
import { ServiceCases } from '../sections/ServiceCases'
import { MotionSurface } from './website/MotionSurface'
import { WebsiteMotionProvider } from './website/MotionProvider'
import '@/styles/premium-motion.css'
import { Contact } from '../sections/Contact'
import { Founder } from '../sections/Founder'
import { Integrations } from '../sections/Integrations'

export function Website() {
  return (
    <WebsiteMotionProvider>
      <MotionSurface />
      <div className="web-scroll-progress" aria-hidden="true" />
      <a className="web-skip" href="#main-content">
        Naar de inhoud
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Integrations />
        <Problem />
        <Capabilities />
        <Process />
        <Experience />
        <ServiceCases />
        <Trust />
        <Founder />
        <FAQ />
        <Contact />
      </main>
    </WebsiteMotionProvider>
  )
}
