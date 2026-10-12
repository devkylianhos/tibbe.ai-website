import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { startPage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Bespreek je website, webshop of automatisering | Tibbe',
  description: 'Maak kennis met Kylian van Tibbe. Bespreek wat je wilt bouwen of verbeteren en ontvang een voorstel met de werkzaamheden, prijs en planning.',
  alternates: { canonical: '/launch' },
  openGraph: { title: 'Bespreek je website, webshop of automatisering | Tibbe', description: 'Maak kennis met Kylian van Tibbe. Bespreek wat je wilt bouwen of verbeteren en ontvang een voorstel met de werkzaamheden, prijs en planning.', url: '/launch', locale: 'nl_NL', siteName: 'Tibbe', type: 'website' },
}

export default function Page() { return <ServicePage content={startPage} /> }
