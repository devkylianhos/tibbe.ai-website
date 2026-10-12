import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { automationPage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Automatisering en AI voor het MKB — Tibbe',
  description: 'Minder overtypen en betere opvolging. Tibbe verbindt je software en zet AI in waar het je team helpt.',
  openGraph: { title: 'Automatisering en AI voor het MKB — Tibbe', description: 'Minder overtypen en betere opvolging. Tibbe verbindt je software en zet AI in waar het je team helpt.', url: '/automatisering' },
}

export default function Page() { return <ServicePage content={automationPage} /> }
