'use client'

import { useEffect, useRef } from 'react'
import { BOOKING_URL } from '@/lib/site'
import './cinematic.css'

const VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_123836_11a3c5e0-713f-4bef-a8e9-7dd93bdea3b0.mp4'
const POSTER = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/693205bf-8048-456a-879e-4e0a1b85a098.webp'
const columns = [
  { title: 'OPLOSSINGEN', links: [['Marketing & content', '/over-tibbe#mogelijkheden'], ['Klantenservice', '/webshops'], ['Administratie', '/over-tibbe#mogelijkheden'], ['Slimme opvolging', '/over-tibbe#praktijk']] },
  { title: 'ONTDEK TIBBE', links: [['Hoe het werkt', '/over-tibbe#werkwijze'], ['Koppelingen', '/over-tibbe#koppelingen'], ['Voor webshops', '/webshops'], ['Over Tibbe', '/over-tibbe#oprichter']] },
  { title: 'MEER INFO', links: [['Veelgestelde vragen', '/over-tibbe#vragen'], ['Privacy', '/privacy'], ['Cookies', '/cookies'], ['Voorwaarden', '/voorwaarden']] },
]

export function CinematicHome() {
  const root = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const element = root.current
    if (!element) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const animations: Animation[] = []
    const syncMotion = () => {
      if (preference.matches) {
        video.current?.pause()
        animations.forEach((animation) => animation.cancel())
      } else {
        void video.current?.play().catch(() => {})
      }
    }
    syncMotion()
    preference.addEventListener('change', syncMotion)
    if (!preference.matches && !element.dataset.entered && typeof Element.prototype.animate === 'function') {
      element.dataset.entered = 'true'
      const small = window.matchMedia('(max-width: 648px)').matches
      const d = small ? .62 : 1
      const t = small ? .85 : 1
      const soft = 'cubic-bezier(.22,.65,.28,1)'
      const animate = (selector: string, frames: Keyframe[], duration: number, delay: number, easing = soft) => {
        element.querySelectorAll(selector).forEach((target) => {
          animations.push(target.animate(frames, { duration, delay: delay * t, easing, fill: 'both' }))
        })
      }
      const rise = (selector: string, y: number, duration: number, delay: number) => animate(selector, [{ opacity: 0, transform: `translateY(${y * d}px)` }, { opacity: 1, transform: 'none' }], duration, delay)
      rise('.eyebrow', 12, 560, 60)
      animate('.headline', [{ transform: 'translate3d(0,118%,0)' }, { transform: 'none' }], 950, 170, 'cubic-bezier(.16,1,.3,1)')
      rise('.lede', 14, 660, 430)
      animate('.cta', [{ opacity: 0, transform: `translateY(${12 * d}px) scale(.985)` }, { opacity: 1, transform: 'none' }], 580, 620, 'cubic-bezier(.33,1,.68,1)')
      rise('.mark, .wordmark', 10, 540, 600)
      rise('.tagline', 10, 540, 670)
      for (let i = 0; i < 3; i++) rise(`.c${i + 1}`, 14, 580, 720 + i * 70)
      animate('.rule', [{ transform: 'scaleX(0)', transformOrigin: 'left center' }, { transform: 'scaleX(1)', transformOrigin: 'left center' }], 720, 980, 'cubic-bezier(.16,1,.3,1)')
      rise('.legal', 8, 500, 1120)
      for (let i = 0; i < 3; i++) rise(`.socials a:nth-child(${i + 1})`, 8, 500, 1170 + i * 60)
      void Promise.all(animations.map((animation) => animation.finished)).then(() => animations.forEach((animation) => animation.cancel())).catch(() => {})
    }
    return () => {
      preference.removeEventListener('change', syncMotion)
      animations.forEach((animation) => animation.cancel())
    }
  }, [])

  return (
    <div className="cinema cinema-tibbe" ref={root}>
      <div className="bg">
        <video ref={video} autoPlay muted loop playsInline poster={POSTER} preload="metadata" aria-label="Geschilderd berglandschap: een wandelaar met een roze rugzak kijkt uit over besneeuwde toppen boven de wolken">
          <source src={VIDEO} type="video/mp4" />
        </video>
      </div>
      <div className="scrim" />
      <main className="stage" id="main-content">
        <p className="eyebrow abs">Klaar voor jouw volgende stap</p>
        <div className="headline-mask abs"><h1 className="headline">Meer ruimte voor morgen.</h1></div>
        <p className="lede abs">Van marketing en klantenservice tot het werk dat elke dag terugkomt. Tibbe bouwt AI-systemen die doorwerken. Jij houdt de regie.</p>
        <a className="cta abs" href={BOOKING_URL}><span>Maak kennis</span></a>
      </main>
      <footer className="footer">
        <div className="finner">
          <div className="brandrow">
            <svg className="mark abs" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M45.13 1.28H54.87V42.42L45.13 38.09ZM79.47 12.10L87.90 20.53L58.80 49.62L53.45 38.13ZM98.72 45.13V54.87H57.58L61.91 45.13ZM87.90 79.47L79.47 87.90L50.38 58.80L61.87 53.45ZM54.87 98.72H45.13V57.58L54.87 61.91ZM20.53 87.90L12.10 79.47L41.20 50.38L46.55 61.87ZM1.28 54.87V45.13H42.42L38.09 54.87ZM12.10 20.53L20.53 12.10L49.62 41.20L38.13 46.55Z" />
            </svg>
            <span className="wordmark abs">Tibbe</span>
          </div>
          <p className="tagline abs">Laat het dagelijkse werk doorgaan. Maak ruimte voor de ideeën die jouw bedrijf verder brengen.</p>
          <nav className="nav" aria-label="Meer over Tibbe">
            {columns.map((column, i) => <div className={`col c${i + 1} abs`} key={column.title}>
              <h3>{column.title}</h3>
              <ul>{column.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
            </div>)}
          </nav>
          <div className="rule abs" />
          <div className="footrow">
            <p className="legal abs">© {new Date().getFullYear()} Tibbe. Alle rechten voorbehouden.</p>
            <div className="socials abs">
              <a href={BOOKING_URL} aria-label="Neem contact op via WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.49 0 .13 5.35.13 11.94c0 2.1.55 4.15 1.59 5.96L.03 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.48h.01C18.66 23.84 24 18.49 24 11.91c0-3.18-1.24-6.18-3.48-8.43ZM12.08 21.83a9.86 9.86 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 0 1-1.51-5.28c0-5.47 4.46-9.92 9.94-9.92a9.87 9.87 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.99 9.88ZM17.52 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.11.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg></a>
              <a href="https://github.com/devkylianhos/tibbe.ai-website" aria-label="Tibbe op GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" /></svg></a>
              <a href="/app" aria-label="Inloggen bij Tibbe"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 }}><path d="M14 3h6v18h-6M3 12h12M10 7l5 5-5 5" /></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
