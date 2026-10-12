import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { webshopPage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Webshops bouwen en verbinden — Tibbe',
  description: 'Van productpagina tot orderverwerking. Tibbe bouwt webshops en koppelt ze aan je software, met AI als ondersteuning.',
  openGraph: { title: 'Webshops bouwen en verbinden — Tibbe', description: 'Van productpagina tot orderverwerking. Tibbe bouwt webshops en koppelt ze aan je software, met AI als ondersteuning.', url: '/webshops' },
}

export default function Page() { return <ServicePage content={webshopPage} /> }
