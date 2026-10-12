import { ViewportVideo } from './ViewportVideo'

export function ParticleVisual() {
  return <div className="tibbe-particle-visual" aria-hidden="true">
    <ViewportVideo src="/visuals/tibbe-particle-wave.mp4" poster="/visuals/tibbe-particle-wave.jpg" />
  </div>
}
