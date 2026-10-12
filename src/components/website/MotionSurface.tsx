'use client'

import { useEffect, useRef } from 'react'
import { useWebsiteMotion } from './MotionProvider'

// MotionSites: Nexora's staggered entrance and Pixel Grid Hover's eased reveals.
// The existing Tibbe layout, copy, palette, and interaction targets stay intact.
export function MotionSurface() {
  const { enabled } = useWebsiteMotion()
  const seen = useRef(new WeakSet<Element>())
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.tibbe-web')
    if (!root || !enabled || !('IntersectionObserver' in window)) return
    const cleanups: (() => void)[] = []
    const active = new Set<Animation>()
    const ease = 'cubic-bezier(.22,1,.36,1)'
    const animate = (element: Element, frames: Keyframe[], duration: number, delay = 0) => {
      if (typeof element.animate !== 'function') return
      const animation = element.animate(frames, { duration, delay, easing: ease, fill: 'backwards' })
      active.add(animation)
      void animation.finished.then(() => { active.delete(animation); animation.cancel() }).catch(() => {})
    }
    const rise = (element: Element, index = 0, distance = 24) => animate(element,
      [{ opacity: .12, transform: `translateY(${distance}px)` }, { opacity: 1, transform: 'none' }], 700, index * 85)

    const hero = root.querySelector('.web-hero')
    if (hero && !seen.current.has(hero)) {
      seen.current.add(hero)
      hero.querySelectorAll('.web-hero__copy > .web-label, .web-hero__lead, .web-actions, .web-hero__motion-note').forEach((el, i) => rise(el, i + 1, 16))
      hero.querySelectorAll('.motion-line > span').forEach((el, i) => animate(el,
        [{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }], 950, 100 + i * 130))
      const stage = hero.querySelector('.operator-stage')
      if (stage) animate(stage, [{ opacity: 0, transform: 'translateY(30px) scale(.97)' }, { opacity: 1, transform: 'none' }], 950, 350)
    }

    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        reveal.unobserve(target)
        if (seen.current.has(target)) return
        seen.current.add(target)
        const children = target.matches('.web-process__steps, .web-trust__grid, [data-motion-stagger]')
          ? target.children
          : target.matches('.web-section-intro, .web-problem__grid') ? target.children : [target]
        Array.from(children).forEach((child, i) => rise(child, i))
        target.querySelectorAll('h2').forEach((heading) => animate(heading,
          [{ clipPath: 'inset(0 0 100% 0)', transform: 'translateY(18px)' }, { clipPath: 'inset(0 0 0% 0)', transform: 'none' }], 850, 80))
      })
    }, { threshold: .12, rootMargin: '0px 0px -35px 0px' })
    root.querySelectorAll('[data-reveal], [data-motion-stagger]').forEach(el => reveal.observe(el))
    cleanups.push(() => reveal.disconnect())

    const activity = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => target.setAttribute('data-motion-visible', String(isIntersecting)))
    }, { rootMargin: '60px' })
    root.querySelectorAll('.web-hero, .web-capabilities, .web-process, #koppelingen').forEach(el => activity.observe(el))
    cleanups.push(() => activity.disconnect())

    // One passive listener and one scheduled frame, never a continuous scroll loop.
    const process = root.querySelector<HTMLElement>('.web-process__steps')
    const arrow = root.querySelector<HTMLElement>('.web-editorial-arrow')
    let scrollFrame = 0
    const scroll = () => {
      if (scrollFrame) return
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0
        if (process) {
          const rect = process.getBoundingClientRect()
          const progress = Math.max(0, Math.min(1, (innerHeight * .86 - rect.top) / (innerHeight * .52)))
          process.style.setProperty('--process-progress', String(progress))
          Array.from(process.children).forEach((child, i) => child.setAttribute('data-step-lit', String(progress >= i / process.children.length)))
        }
        if (arrow && matchMedia('(min-width: 961px)').matches) {
          const rect = arrow.getBoundingClientRect()
          if (rect.top < innerHeight && rect.bottom > 0) arrow.style.rotate = `${Math.max(-10, Math.min(10, (rect.top / innerHeight - .5) * 20))}deg`
        }
      })
    }
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('resize', scroll)
    scroll()
    cleanups.push(() => {
      cancelAnimationFrame(scrollFrame)
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', scroll)
      process?.style.removeProperty('--process-progress')
      process?.querySelectorAll('[data-step-lit]').forEach(el => el.removeAttribute('data-step-lit'))
      arrow?.style.removeProperty('rotate')
    })

    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      root.querySelectorAll<HTMLElement>('.service-case, .web-trust__grid article, .web-contact-form, .web-action').forEach((element) => {
        let frame = 0
        const move = (event: PointerEvent) => {
          cancelAnimationFrame(frame)
          frame = requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect()
            element.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
            element.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
            if (element.classList.contains('web-action')) {
              element.style.translate = `${(event.clientX - rect.left - rect.width / 2) * .075}px ${(event.clientY - rect.top - rect.height / 2) * .12}px`
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
          element.style.removeProperty('--pointer-x')
          element.style.removeProperty('--pointer-y')
        })
      })
    }
    const visibility = () => active.forEach(animation => document.hidden ? animation.pause() : animation.play())
    document.addEventListener('visibilitychange', visibility)
    return () => {
      cleanups.forEach(cleanup => cleanup())
      active.forEach(animation => animation.cancel())
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [enabled])
  return null
}
