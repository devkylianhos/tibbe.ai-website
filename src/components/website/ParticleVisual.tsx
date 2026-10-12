'use client'

import { useEffect, useRef } from 'react'
import { useWebsiteMotion } from './MotionProvider'

/** Decorative media: the poster also renders without JavaScript or animation. */
export function ParticleVisual() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { enabled } = useWebsiteMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || !enabled) return
    let visible = false
    let disposed = false
    const sync = () => {
      if (visible && !document.hidden && !disposed) {
        // Defer the video download until motion is allowed and the hero is visible.
        if (!video.getAttribute('src')) video.src = '/visuals/tibbe-particle-wave.mp4'
        void video.play().then(() => {
          if (disposed || document.hidden || !visible) video.pause()
        }).catch(() => { /* The poster remains visible when autoplay is unavailable. */ })
      } else video.pause()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    }, { threshold: .05 })
    observer.observe(video)
    document.addEventListener('visibilitychange', sync)
    return () => {
      disposed = true
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
      video.pause()
    }
  }, [enabled])

  return <div className="tibbe-particle-visual" aria-hidden="true">
    <video ref={videoRef} muted loop playsInline preload="none"
      poster="/visuals/tibbe-particle-wave.jpg" tabIndex={-1} />
  </div>
}
