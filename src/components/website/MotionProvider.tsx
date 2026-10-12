'use client'

import { createContext, useContext, useState, useSyncExternalStore } from 'react'
import { Pause, Play } from 'lucide-react'

const MotionContext = createContext({ enabled: false, reduced: true, paused: false, toggle: () => {} })
const query = '(prefers-reduced-motion: reduce)'
const subscribe = (notify: () => void) => {
  const media = window.matchMedia(query)
  media.addEventListener('change', notify)
  return () => media.removeEventListener('change', notify)
}

export function WebsiteMotionProvider({ children }: { children: React.ReactNode }) {
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => true)
  const [paused, setPaused] = useState(false)
  const enabled = !reduced && !paused
  return <MotionContext.Provider value={{ enabled, reduced, paused, toggle: () => setPaused(value => !value) }}>
    <div className="tibbe-web" data-motion={enabled ? 'running' : 'paused'}>{children}</div>
  </MotionContext.Provider>
}

export const useWebsiteMotion = () => useContext(MotionContext)

export function MotionToggle() {
  const { enabled, reduced, paused, toggle } = useWebsiteMotion()
  return <button className="web-motion-toggle" type="button" onClick={toggle} disabled={reduced}
    aria-pressed={paused || reduced} aria-label={reduced ? 'Animaties uit volgens je systeemvoorkeur' : enabled ? 'Animaties pauzeren' : 'Animaties hervatten'}>
    {enabled ? <Pause size={12} /> : <Play size={12} />}
    <span>{reduced ? 'Verminderde beweging' : enabled ? 'Animaties pauzeren' : 'Animaties hervatten'}</span>
  </button>
}
