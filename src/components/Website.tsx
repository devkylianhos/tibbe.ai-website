'use client'

import { useEffect } from 'react'
import { Navigation } from './website/Navigation'
import { Hero } from '../sections/Hero'
import { Capabilities } from '../sections/Capabilities'
import { Experience } from '../sections/Experience'
import { FAQ, Problem, Process, Trust } from '../sections/Story'
import { ServiceCases } from '../sections/ServiceCases'
import { MotionSurface } from './website/MotionSurface'
import { Contact } from '../sections/Contact'
import { Founder } from '../sections/Founder'

export function Website() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { opacity: 0, transform: 'translateY(16px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 320, easing: 'cubic-bezier(0,0,.2,1)' },
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return (
    <div className="tibbe-web">
      <MotionSurface />
      <div className="web-scroll-progress" aria-hidden="true" />
      <a className="web-skip" href="#main-content">
        Naar de inhoud
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
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
    </div>
  )
}
