import { ArrowUpRight } from 'lucide-react'

const services = [
  { title: 'AI-agents & automatisering', href: '/automatisering', copy: 'Klantvragen voorbereiden, aanvragen opvolgen en gegevens verwerken. Met afspraken over wat je team controleert.' },
  { title: 'Websites', href: '/websites', copy: 'Een duidelijk verhaal en een contactroute die aansluit op de opvolging in je bedrijf.' },
  { title: 'Webshops', href: '/webshops', copy: 'Van product kiezen tot order afhandelen. Een winkel die past bij je klanten en je team.' },
]

export function Capabilities() {
  return <section id="mogelijkheden" className="web-section compact-services"><div className="web-container">
    <div className="web-section-intro"><h2>Wat wil jij<br />verbeteren?</h2><p>Een agentic agency bouwt en beheert AI-agents en automatiseringen voor je bedrijf. We beginnen bij het werk: klantvragen, marketing, orders of interne informatie.</p></div>
    <div className="compact-services__links">{services.map(service => <a key={service.href} href={service.href}><div><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowUpRight size={24} aria-hidden="true" /></a>)}</div>
    <p className="compact-services__note">Ook een website of webshop kan een zelfstandige opdracht zijn. De techniek volgt uit wat je bedrijf nodig heeft.</p>
  </div></section>
}
