import type { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { websitePage } from '@/content/service-pages'

export const metadata: Metadata = {
  title: 'Websites voor het MKB — Tibbe',
  description: 'Een website die bij je bedrijf past, met een duidelijke route naar aanvragen en een aansluiting op je dagelijkse werk.',
  openGraph: { title: 'Websites voor het MKB — Tibbe', description: 'Een website die bij je bedrijf past, met een duidelijke route naar aanvragen en een aansluiting op je dagelijkse werk.', url: '/websites' },
}

export default function Page() { return <ServicePage content={websitePage} /> }
