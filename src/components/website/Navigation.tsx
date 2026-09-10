import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '../Logo'

const links = [
  ['Mogelijkheden', '#mogelijkheden'],
  ['Werkwijze', '#werkwijze'],
  ['In de praktijk', '#praktijk'],
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <header
      className={`web-nav ${scrolled ? 'web-nav--scrolled' : ''}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false)
          trigger.current?.focus()
        }
      }}
    >
      <div className="web-container web-nav__inner">
        <Link href="/" aria-label="Tibbe — homepage" className="web-brand">
          <Logo inverse />
        </Link>
        <nav aria-label="Hoofdnavigatie" className="web-nav__desktop">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="web-nav__cta" href="#contact" onClick={() => setOpen(false)}>
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
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobiele navigatie"
        className="web-nav__mobile"
        hidden={!open}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  )
}
