'use client'

import { useEffect, useRef } from 'react'
import { RotateCw } from 'lucide-react'
import { useWebsiteMotion } from './MotionProvider'

const mark = 'M22 8V46C22 53 28 56 35 56C47 56 55 48 55 38C55 28 48 22 38 22H12'
type Dot = { x: number; y: number; homeX: number; homeY: number; vx: number; vy: number; radius: number; color: string }

/** A bounded, on-demand canvas: no animation loop when settled or offscreen. */
export function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const burstRef = useRef<() => void>(() => {})
  const { enabled } = useWebsiteMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const fine = window.matchMedia('(pointer: fine)')
    let dots: Dot[] = []
    let width = 0
    let height = 0
    let frame = 0
    let last = 0
    let visible = true
    let pointer: { x: number; y: number } | null = null
    const colors = ['#4fa3c4', '#72bdd4', '#9cd9e6', '#398ba9']
    let seed = 17
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646 }

    function paint() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      for (const dot of dots) {
        ctx.fillStyle = dot.color
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    function tick(time: number) {
      frame = 0
      const dt = Math.min((time - (last || time - 16.67)) / 16.67, 2)
      last = time
      let moving = false
      const reach = Math.min(width * .19, 100)
      for (const dot of dots) {
        if (pointer) {
          const dx = dot.x - pointer.x
          const dy = dot.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < reach) {
            const force = (1 - distance / reach) * 2.8
            dot.vx += (dx / (distance || 1)) * force * dt
            dot.vy += (dy / (distance || 1)) * force * dt
          }
        }
        dot.vx = (dot.vx + (dot.homeX - dot.x) * .028 * dt) * Math.pow(.85, dt)
        dot.vy = (dot.vy + (dot.homeY - dot.y) * .028 * dt) * Math.pow(.85, dt)
        dot.x += dot.vx * dt
        dot.y += dot.vy * dt
        if (Math.abs(dot.x - dot.homeX) + Math.abs(dot.y - dot.homeY) + Math.abs(dot.vx) + Math.abs(dot.vy) > .08) moving = true
      }
      paint()
      if (moving && visible && !document.hidden && enabled) frame = requestAnimationFrame(tick)
      else last = 0
    }
    function start() {
      if (!frame && visible && !document.hidden && enabled) frame = requestAnimationFrame(tick)
    }
    function reset() {
      cancelAnimationFrame(frame)
      frame = 0
      last = 0
      pointer = null
      for (const dot of dots) { dot.x = dot.homeX; dot.y = dot.homeY; dot.vx = 0; dot.vy = 0 }
      paint()
    }
    function burst() {
      if (!enabled || !visible || document.hidden) return
      // Restart from the mark so repeated clicks never accumulate runaway velocity.
      reset()
      for (const dot of dots) {
        const angle = Math.atan2(dot.homeY - height / 2, dot.homeX - width / 2)
        const speed = (10 + random() * 16) * Math.min(width / 500, 1)
        dot.vx = Math.cos(angle + .28) * speed
        dot.vy = Math.sin(angle + .28) * speed
      }
      start()
    }
    burstRef.current = burst
    function resize() {
      if (!canvas || !ctx) return
      reset()
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const mask = document.createElement('canvas').getContext('2d')
      if (!mask) return
      const shape = new Path2D(mark)
      mask.lineWidth = 8
      mask.lineCap = 'round'
      mask.lineJoin = 'round'
      const size = Math.min(width, height) * .84
      const step = width < 400 ? .68 : .46
      seed = 17
      dots = []
      for (let y = 3; y < 61; y += step) for (let x = 5; x < 61; x += step) {
        const sx = x + random() * step
        const sy = y + random() * step
        if (!mask.isPointInStroke(shape, sx, sy)) continue
        const homeX = (width - size) / 2 + sx / 64 * size
        const homeY = (height - size) / 2 + sy / 64 * size
        dots.push({ x: homeX, y: homeY, homeX, homeY, vx: 0, vy: 0, radius: .7 + random() * (width < 400 ? .75 : 1.1), color: colors[Math.floor(random() * colors.length)] })
      }
      paint()
      canvas.dataset.ready = 'true'
    }
    function move(event: PointerEvent) {
      if (!enabled || !fine.matches || event.pointerType === 'touch' || !canvas) return
      const bounds = canvas.getBoundingClientRect()
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
      start()
    }
    function leave() { pointer = null; start() }
    function visibility() { if (document.hidden) reset() }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (!visible) reset() })
    intersection.observe(canvas)
    canvas.addEventListener('click', burst)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', leave)
    document.addEventListener('visibilitychange', visibility)
    fine.addEventListener('change', reset)
    return () => {
      burstRef.current = () => {}
      cancelAnimationFrame(frame)
      observer.disconnect()
      intersection.disconnect()
      canvas.removeEventListener('click', burst)
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', visibility)
      fine.removeEventListener('change', reset)
    }
  }, [enabled])

  return <div className="particle-logo">
    <div className="particle-logo__art" aria-hidden="true">
      <canvas ref={canvasRef} />
      <svg viewBox="0 0 64 64"><path d={mark} fill="none" stroke="#4fa3c4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
    <div className="particle-logo__controls">
      <p className="particle-logo__hint">{enabled ? 'Beweeg door het logo. Of laat het even los.' : 'Alles komt samen bij Tibbe'}</p>
      <button type="button" className="particle-logo__burst" disabled={!enabled} onClick={() => burstRef.current()}>
        <RotateCw size={15} aria-hidden="true" /> Speel met het logo
      </button>
    </div>
  </div>
}
