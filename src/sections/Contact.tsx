import { useRef, useState } from 'react'
import Link from 'next/link'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { Logo } from '../components/Logo'
import { SectionLabel } from '../components/website/Primitives'
import { siteConfig } from '../content/website'

export function Contact() {
  const [draft, setDraft] = useState('')
  const privacy = useRef<HTMLDialogElement>(null)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `Hoi Tibbe,\n\nIk ben ${data.get('name')} van ${data.get('company')}.\n\nIk wil graag het volgende proces bespreken:\n${data.get('process')}\n\nJe kunt mij bereiken op ${data.get('email')}.\n\nGroet,\n${data.get('name')}`
    setDraft(
      `mailto:${siteConfig.email}?subject=${encodeURIComponent('Kennismaking — ' + data.get('company'))}&body=${encodeURIComponent(body)}`,
    )
  }
  return (
    <>
      <section id="contact" className="web-section web-contact">
        <div className="web-container web-contact__grid">
          <div data-reveal>
            <SectionLabel>Begin met één proces</SectionLabel>
            <h2>
              Geef terugkerend
              <br />
              werk een
              <br />
              vaste plek.
            </h2>
            <p>
              Vertel ons wat er steeds op je bord belandt.
              <br />
              We kijken samen waar Tibbe kan helpen.
            </p>
            <a className="web-text-link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <ArrowUpRight size={18} />
            </a>
          </div>
          <form
            className="web-contact-form"
            onSubmit={handleSubmit}
            onChange={() => setDraft('')}
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
                  autoComplete="name"
                  placeholder="Voor- en achternaam"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                Je organisatie
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Bedrijfsnaam"
                  required
                  maxLength={120}
                />
              </label>
            </div>
            <label>
              Je e-mailadres
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jij@organisatie.nl"
                required
                maxLength={200}
              />
            </label>
            <label>
              Welk werk wil je uit handen geven?
              <textarea
                name="process"
                placeholder="Bijvoorbeeld: facturen controleren en afwijkingen opvolgen."
                rows={3}
                required
                maxLength={1800}
              />
            </label>
            <button className="web-action" type="submit">
              Maak mijn e-mail klaar <ArrowUpRight size={18} />
            </button>
            <p className="web-form-note">
              Je gegevens blijven in dit formulier tot je zelf de e-mail verstuurt.
            </p>
            {draft && (
              <div className="web-form-result" role="status">
                <p>
                  <Check size={17} /> Je e-mailconcept staat klaar.
                </p>
                <a href={draft}>
                  Open in je e-mailprogramma <ArrowUpRight size={16} />
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
      <footer className="web-footer">
        <div className="web-container">
          <div className="web-footer__top">
            <Link href="/" aria-label="Tibbe — homepage">
              <Logo inverse />
            </Link>
            <p>
              Calm intelligence.
              <br />
              Werk dat verdergaat.
            </p>
            <nav aria-label="Footernavigatie">
              <a href="#mogelijkheden">Mogelijkheden</a>
              <a href="#ervaring">Ervaar Tibbe</a>
              <a href="#contact">Contact</a>
            </nav>
            <nav aria-label="Informatie">
              <a href="#over">Over Tibbe</a>
              <a href="#vragen">Veelgestelde vragen</a>
              <a href="/app">
                Open de Tibbe-app <ArrowUpRight size={12} />
              </a>
            </nav>
          </div>
          <div className="web-footer__bottom">
            <span>© {new Date().getFullYear()} Tibbe.ai</span>
            <div>
              <a href="/privacy">Privacy</a>
              <a href="/voorwaarden">
                Voorwaarden <ArrowUpRight size={12} />
              </a>
            </div>
            <span>VEEL SYSTEEM. WEINIG RUIS.</span>
          </div>
        </div>
      </footer>
      <dialog ref={privacy} className="web-dialog" aria-labelledby="privacy-title">
        <div className="web-dialog__header">
          <SectionLabel>Over deze website</SectionLabel>
          <button aria-label="Privacy sluiten" onClick={() => privacy.current?.close()}>
            <X />
          </button>
        </div>
        <h2 id="privacy-title">Jouw gegevens.</h2>
        <p>
          Het kennismakingsformulier maakt lokaal een e-mailconcept. Deze website verstuurt je
          formulier niet naar een server. Pas wanneer je het concept in je e-mailprogramma
          verstuurt, deel je de inhoud met de ontvanger.
        </p>
        <p>
          Deze implementatie bevat geen analytics of trackingcookies. De interactieve voorbeelden
          gebruiken fictieve gegevens en voeren geen externe acties uit.
        </p>
        <p>
          Heb je een vraag over gegevens of wil je informatie over de dienstverlening? Mail naar{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <button className="web-action" onClick={() => privacy.current?.close()}>
          Begrepen <Check size={17} />
        </button>
      </dialog>
    </>
  )
}
