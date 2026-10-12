import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { startPage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Start met Tibbe — Tibbe',
  description: 'Bespreek je website, webshop of automatisering. Een concrete eerste stap met duidelijke afspraken over prijs en planning.',
  openGraph: { title: 'Start met Tibbe — Tibbe', description: 'Bespreek je website, webshop of automatisering. Een concrete eerste stap met duidelijke afspraken over prijs en planning.', url: '/launch' },
}

export default function Page() { return <ServicePage content={startPage} /> }
