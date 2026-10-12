'use client'

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { SectionLabel } from '../components/website/Primitives'
import { siteConfig } from '../content/website'
import { waLink } from '@/lib/site'

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
              Vertel wat je wilt bouwen of waar het werk vastloopt. Samen bepalen we een passende eerste stap. Daarna ontvang je een voorstel met de werkzaamheden, prijs en planning.
            </p>
            <a className="web-text-link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <p className="web-form-note">Je kunt je vraag ook <a href={waLink()}>via WhatsApp bespreken</a>.</p>
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
            <p className="web-form-note">Vul je naam en vraag in. Je krijgt een e-mailconcept dat je zelf controleert en verstuurt.</p>
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
