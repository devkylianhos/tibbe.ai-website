import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { webshopPage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Webshop laten maken of verbeteren | Tibbe',
  description: 'Laat je webshop bouwen of verbeteren door Tibbe. Van productpagina’s en bestellen tot passende koppelingen met je software. Bespreek je plannen met Kylian.',
  alternates: { canonical: '/webshops' },
  openGraph: { title: 'Webshop laten maken of verbeteren | Tibbe', description: 'Laat je webshop bouwen of verbeteren door Tibbe. Van productpagina’s en bestellen tot passende koppelingen met je software. Bespreek je plannen met Kylian.', url: '/webshops', locale: 'nl_NL', siteName: 'Tibbe', type: 'website' },
}

export default function Page() { return <ServicePage content={webshopPage} /> }
