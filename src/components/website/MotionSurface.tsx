import { useEffect } from 'react'

export function MotionSurface() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const cleanups: (() => void)[] = []
    const setup = () => {
      cleanups.splice(0).forEach((cleanup) => cleanup())
      if (media.matches || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
      document.querySelectorAll<HTMLElement>('.service-case, .web-trust__grid article, .web-contact-form, .web-action').forEach((element) => {
        let frame = 0
        const move = (event: PointerEvent) => {
          cancelAnimationFrame(frame)
          frame = requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect()
            element.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
            element.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
            if (element.classList.contains('web-action')) {
              const x = (event.clientX - rect.left - rect.width / 2) * .055
              const y = (event.clientY - rect.top - rect.height / 2) * .1
              element.style.translate = `${x}px ${y}px`
            }
          })
        }
        const leave = () => { cancelAnimationFrame(frame); element.style.translate = '' }
        element.addEventListener('pointermove', move)
        element.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          leave()
          element.removeEventListener('pointermove', move)
          element.removeEventListener('pointerleave', leave)
        })
      })
    }
    setup()
    media.addEventListener('change', setup)
    return () => { cleanups.splice(0).forEach((cleanup) => cleanup()); media.removeEventListener('change', setup) }
  }, [])
  return null
}
