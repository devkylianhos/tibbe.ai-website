import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { automationPage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Automatisering en AI voor het MKB | Tibbe',
  description: 'Automatiseer aanvragen, opvolging en terugkerend werk. Tibbe verbindt je software en gebruikt AI waar het helpt. Je team houdt controle over belangrijke acties.',
  alternates: { canonical: '/automatisering' },
  openGraph: { title: 'Automatisering en AI voor het MKB | Tibbe', description: 'Automatiseer aanvragen, opvolging en terugkerend werk. Tibbe verbindt je software en gebruikt AI waar het helpt. Je team houdt controle over belangrijke acties.', url: '/automatisering', locale: 'nl_NL', siteName: 'Tibbe', type: 'website' },
}

export default function Page() { return <ServicePage content={automationPage} /> }
