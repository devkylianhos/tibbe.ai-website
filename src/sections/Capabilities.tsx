import { ArrowUpRight } from 'lucide-react'

const services = [
  { title: 'Websites', href: '/websites', copy: 'Een herkenbare uitstraling en een heldere route naar contact.' },
  { title: 'Webshops', href: '/webshops', copy: 'Prettig kiezen, eenvoudig bestellen en overzichtelijk afhandelen.' },
  { title: 'Automatisering & AI', href: '/automatisering', copy: 'Minder handwerk bij aanvragen, bestellingen en klantvragen.' },
]
export function Capabilities() {
  return <section id="mogelijkheden" className="web-section compact-services"><div className="web-container">
    <div className="web-section-intro"><h2>Wat wil jij<br />verbeteren?</h2><p>Begin met wat je nodig hebt. We verbinden de volgende stap wanneer je daar klaar voor bent.</p></div>
    <div className="compact-services__links">{services.map(service => <a key={service.href} href={service.href}><div><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowUpRight size={24} aria-hidden="true" /></a>)}</div>
    <p className="compact-services__note">Ook voor alleen een website of webshop. Je krijgt vooraf een voorstel met prijs en planning.</p>
  </div></section>
}
