'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from '../Logo'

const links = [
  ['Mogelijkheden', '#mogelijkheden'],
  ['Werkwijze', '#werkwijze'],
  ['In de praktijk', '#praktijk'],
]

export function Navigation({ homeLinks = false, surface = 'overlay' }: { homeLinks?: boolean; surface?: 'overlay' | 'solid' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])
  return (
    <header
      className={`web-nav ${scrolled || surface === 'solid' ? 'web-nav--scrolled' : ''}`}
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          setOpen(false)
          trigger.current?.focus()
        }
      }}
    >
      <div className="web-container web-nav__inner">
        {/* Native anchor intentionally restores top on repeated same-page clicks. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/#top" aria-label="Tibbe — homepage" className="web-brand" onClick={() => setOpen(false)}>
          <Logo inverse />
        </a>
        <nav aria-label="Hoofdnavigatie" className="web-nav__desktop">
          {links.map(([label, href]) => (
            <a key={href} href={homeLinks ? `/${href}` : href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="web-nav__cta" href={homeLinks ? "/#contact" : "#contact"} onClick={() => setOpen(false)}>
          Kennismaken <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={trigger}
          className="web-menu-toggle"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobiele navigatie"
        className="web-nav__mobile"
        hidden={!open}
      >
        {links.map(([label, href]) => (
          <a key={href} href={homeLinks ? `/${href}` : href} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  )
}
