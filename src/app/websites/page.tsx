import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { websitePage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Website laten maken voor het MKB | Tibbe',
  description: 'Laat een website maken die je aanbod helder laat zien. Tibbe verzorgt ontwerp, bouw en een duidelijke contactroute. Bespreek je website met Kylian.',
  alternates: { canonical: '/websites' },
  openGraph: { title: 'Website laten maken voor het MKB | Tibbe', description: 'Laat een website maken die je aanbod helder laat zien. Tibbe verzorgt ontwerp, bouw en een duidelijke contactroute. Bespreek je website met Kylian.', url: '/websites', locale: 'nl_NL', siteName: 'Tibbe', type: 'website' },
}

export default function Page() { return <ServicePage content={websitePage} /> }
