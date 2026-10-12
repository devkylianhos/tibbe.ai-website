'use client'

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { ViewportVideo } from '../components/website/ViewportVideo'
import { MotionToggle } from '../components/website/MotionProvider'
import { Logo } from '../components/Logo'
import { SectionLabel } from '../components/website/Primitives'
import { siteConfig } from '../content/website'

export function Contact() {
  const [draft, setDraft] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const privacy = useRef<HTMLDialogElement>(null)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `Hoi Tibbe,\n\nIk ben ${data.get('name')}${data.get('company') ? ' van ' + data.get('company') : ''}.\n\nIk wil graag het volgende bespreken:\n${data.get('process')}\n\nJe kunt mij bereiken op ${data.get('email') || 'dit e-mailadres'}.\n\nGroet,\n${data.get('name')}`
    setDraft(
      `mailto:${siteConfig.email}?subject=${encodeURIComponent('Kennismaking — ' + (data.get('company') || data.get('name')))}&body=${encodeURIComponent(body)}`,
    )
  }
  return (
    <>
      <section id="contact" className="web-section web-contact">
        <div className="web-container web-contact__grid">
          <div data-reveal>
            <SectionLabel>Een gesprek over jouw project</SectionLabel>
            <h2>
              Bespreek je project
              <br />
              met Kylian.
            </h2>
            <p>
              We bekijken wat je wilt bouwen of verbeteren, waar je nu staat en welke eerste stap daarbij past. Je hoeft nog geen technische oplossing te hebben.
            </p>
            <a className="web-text-link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
          <form
            className="web-contact-form"
            onSubmit={handleSubmit}
            onInvalid={(event) => {
              const field = event.target
              if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return
              const message = field.name === 'email' ? 'Vul een geldig e-mailadres in, zoals naam@bedrijf.nl.'
                : field.name === 'name' ? 'Vul je naam in.' : 'Vertel kort wat je wilt bouwen of verbeteren.'
              setErrors(previous => ({ ...previous, [field.name]: message }))
            }}
            onChange={(event) => {
              setDraft('')
              const field = event.target
              if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return
              setErrors(previous => ({ ...previous, [field.name]: '' }))
            }}
            data-reveal
          >
            <div className="web-form-title">
              <span>KENNISMAKEN</span>
              <span>01 / EERSTE STAP</span>
            </div>
            <div className="web-form-row">
              <label>
                Je naam
                <input
                  name="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  autoComplete="name"
                  placeholder="Voor- en achternaam"
                  required
                  maxLength={100}
                />
                {errors.name && <span id="contact-name-error" className="web-field-error">{errors.name}</span>}
              </label>
              <label>
                Je organisatie (optioneel)
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Bedrijfsnaam"
                  maxLength={120}
                />
              </label>
            </div>
            <label>
              Je e-mailadres (optioneel)
              <input
                name="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                type="email"
                spellCheck={false}
                autoComplete="email"
                placeholder="jij@organisatie.nl"
                maxLength={200}
              />
              {errors.email && <span id="contact-email-error" className="web-field-error">{errors.email}</span>}
            </label>
            <label>
              Wat wil je laten bouwen of verbeteren?
              <textarea
                name="process"
                aria-invalid={Boolean(errors.process)}
                aria-describedby={errors.process ? 'contact-process-error' : undefined}
                placeholder="Bijvoorbeeld: een nieuwe website en een betere opvolging van aanvragen."
                rows={3}
                required
                maxLength={1800}
              />
              {errors.process && <span id="contact-process-error" className="web-field-error">{errors.process}</span>}
            </label>
            <button className="web-action" type="submit">
              Maak mijn e-mail klaar <ArrowUpRight aria-hidden="true" size={18} />
            </button>
            <p className="web-form-note">
              Dit formulier maakt een e-mailconcept voor je kennismaking. Je verstuurt het zelf via je e-mailprogramma; er is nog geen afspraak geboekt.
            </p>
            {draft && (
              <div className="web-form-result" role="status">
                <p>
                  <Check aria-hidden="true" size={17} /> Je e-mailconcept staat klaar.
                </p>
                <a href={draft}>
                  Open in je e-mailprogramma <ArrowUpRight aria-hidden="true" size={16} />
                </a>
                <small>
                  Er is nog niets verstuurd. Controleer je bericht en verstuur het vanuit je eigen
                  e-mailprogramma.
                </small>
              </div>
            )}
          </form>
        </div>
      </section>
      <footer className="web-footer web-footer--scenic">
        <div className="web-container">
          <div className="web-footer__top">
            {/* Native anchor intentionally restores top on repeated same-page clicks. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/#top" aria-label="Tibbe — homepage">
              <Logo />
            </a>
            <p>
              Sterk online.
              <br />
              Goed georganiseerd.
            </p>
            <nav aria-label="Footernavigatie">
              <a href="/websites">Websites</a>
              <a href="/webshops">Webshops</a>
              <a href="/automatisering">Automatisering &amp; AI</a>
              <a href="#ervaring">Ervaar Tibbe</a>
              <a href="#contact">Contact</a>
            </nav>
            <nav aria-label="Informatie">
              <a href="#over">Over Tibbe</a>
              <a href="#vragen">Veelgestelde vragen</a>
              <a href="/app">
                Open de Tibbe-app <ArrowUpRight aria-hidden="true" size={12} />
              </a>
            </nav>
          </div>
          <div className="web-footer__bottom">
            <span>© {new Date().getFullYear()} Tibbe.ai</span>
            <div>
              <a href="/privacy">Privacy</a>
              <a href="/cookies">Cookies</a>
              <a href="/voorwaarden">
                Voorwaarden <ArrowUpRight aria-hidden="true" size={12} />
              </a>
            </div>
            <span>VEEL SYSTEEM. WEINIG RUIS.</span>
          </div>
        </div>
        <div className="web-container web-footer__motion"><MotionToggle /></div>
        <div className="web-footer__scene" aria-hidden="true">
          <ViewportVideo src="/visuals/tibbe-horses.mp4" poster="/visuals/tibbe-horses.jpg" />
        </div>
      </footer>
      <dialog ref={privacy} className="web-dialog" aria-labelledby="privacy-title">
        <div className="web-dialog__header">
          <SectionLabel>Over deze website</SectionLabel>
          <button aria-label="Privacy sluiten" onClick={() => privacy.current?.close()}>
            <X aria-hidden="true" />
          </button>
        </div>
        <h2 id="privacy-title">Jouw gegevens.</h2>
        <p>
          Het kennismakingsformulier maakt lokaal een e-mailconcept. Deze website verstuurt je
          formulier niet naar een server. Pas wanneer je het concept in je e-mailprogramma
          verstuurt, deel je de inhoud met de ontvanger.
        </p>
        <p>
          Google Analytics wordt alleen na jouw toestemming geladen. Je kunt je keuze wijzigen via de cookiepagina. De interactieve voorbeelden
          gebruiken fictieve gegevens en voeren geen externe acties uit.
        </p>
        <p>
          Heb je een vraag over gegevens of wil je informatie over de dienstverlening? Mail naar{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <button className="web-action" onClick={() => privacy.current?.close()}>
          Begrepen <Check aria-hidden="true" size={17} />
        </button>
      </dialog>
    </>
  )
}
