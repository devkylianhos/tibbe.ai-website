/* Native hash links intentionally support repeated same-page navigation. */
/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'
import { MotionToggle } from './website/MotionProvider'
import { ViewportVideo } from './website/ViewportVideo'
import { siteConfig } from '@/content/website'
import { waLink } from '@/lib/site'
import '@/styles/particle-visuals.css'

export function Footer() {
  return (
      <footer className="web-footer web-footer--scenic">
        <div className="web-container">
          <div className="web-footer__top">
            <div className="web-footer__brand">
              <a href="/#top" aria-label="Tibbe — homepage"><Logo /></a>
              <p>Websites en webshops die werken. Ook achter de schermen. Met automatisering en AI waar dat je bedrijf helpt.</p>
              <div className="web-footer__channels">
                <a href={`mailto:${siteConfig.email}`} aria-label="E-mail Kylian"><Mail size={20} aria-hidden="true" /></a>
                <a href={waLink()} aria-label="Neem contact op via WhatsApp"><MessageCircle size={20} aria-hidden="true" /></a>
              </div>
            </div>
            <nav aria-label="Diensten">
              <h2>Diensten</h2>
              <a href="/websites">Websites</a>
              <a href="/webshops">Webshops</a>
              <a href="/automatisering">Automatisering &amp; AI</a>
            </nav>
            <nav aria-label="Over Tibbe">
              <h2>Over Tibbe</h2>
              <a href="/#oprichter">Maak kennis met Kylian</a>
              <a href="/#werkwijze">Onze werkwijze</a>
              <a href="/#ervaring">In de praktijk</a>
              <a href="/#vragen">Veelgestelde vragen</a>
            </nav>
            <nav aria-label="Contact">
              <h2>Contact</h2>
              <a href="/#contact">Bespreek je project</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={waLink()}>WhatsApp <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a href="/app">Tibbe-app <ArrowUpRight aria-hidden="true" size={14} /></a>
            </nav>
          </div>
          <div className="web-footer__bottom">
            <span>© {new Date().getFullYear()} Tibbe</span>
            <div>
              <a href="/privacy">Privacy</a>
              <a href="/cookies">Cookies</a>
              <a href="/voorwaarden">
                Voorwaarden <ArrowUpRight aria-hidden="true" size={12} />
              </a>
            </div>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
        <div className="web-container web-footer__motion"><MotionToggle /></div>
        <div className="web-footer__scene" aria-hidden="true">
          <ViewportVideo src="/visuals/tibbe-horses.mp4" poster="/visuals/tibbe-horses.jpg" />
        </div>
      </footer>
  )
}
