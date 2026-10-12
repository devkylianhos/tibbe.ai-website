import type { Metadata } from 'next'
import { Website } from '@/components/Website'

export const metadata: Metadata = {
  title: 'Ontdek Tibbe — AI-systemen voor jouw bedrijf',
  alternates: { canonical: 'https://tibbe.app/over-tibbe' },
}

export default function AboutTibbe() {
  return <Website />
}
