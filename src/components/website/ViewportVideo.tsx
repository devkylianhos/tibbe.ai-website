'use client'

import { useEffect, useRef } from 'react'
import { useWebsiteMotion } from './MotionProvider'

/** Decorative media: the poster also renders without JavaScript or animation. */
export function ViewportVideo({ src, poster }: { src: string; poster: string }) {
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
        if (!video.getAttribute('src')) video.src = src
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
  }, [enabled, src])

  return <video ref={videoRef} muted loop playsInline preload="none" disablePictureInPicture
    poster={poster} tabIndex={-1} aria-hidden="true" />
}
