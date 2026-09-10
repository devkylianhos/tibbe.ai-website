import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  FileText,
  Mail,
  ChartNoAxesCombined,
  ShieldCheck,
  Check,
  CornerDownRight,
} from 'lucide-react'
import { capabilities } from '../content/services'
import { ActionLink, SectionLabel } from '../components/website/Primitives'

const icons = { file: FileText, mail: Mail, chart: ChartNoAxesCombined, shield: ShieldCheck }

export function Capabilities() {
  const [selected, setSelected] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const capability = capabilities[selected]
  const Icon = icons[capability.icon]
  const movePreview = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--preview-rx', `${-y * 3.5}deg`)
    event.currentTarget.style.setProperty('--preview-ry', `${x * 4.5}deg`)
    event.currentTarget.style.setProperty('--preview-light-x', `${(x + 0.5) * 100}%`)
    event.currentTarget.style.setProperty('--preview-light-y', `${(y + 0.5) * 100}%`)
  }
  const resetPreview = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--preview-rx', '0deg')
    event.currentTarget.style.setProperty('--preview-ry', '0deg')
  }
  return (
    <section id="mogelijkheden" className="web-section web-capabilities">
      <div className="web-container">
        <div className="web-section-intro" data-reveal>
          <div>
            <SectionLabel number="02">Wat Tibbe doet</SectionLabel>
            <h2>
              Van creatie
              <br />
              tot uitvoering.
            </h2>
          </div>
          <p>
            Zeven diensten voor marketing en operatie.
            <br />
            Kies waar jouw team hulp kan gebruiken.
          </p>
        </div>
        <div className="capability-layout" data-reveal>
          <div className="capability-tabs" role="tablist" aria-label="Mogelijkheden">
            {capabilities.map((item, index) => (
              <button
                key={item.id}
                ref={(el) => {
                  tabs.current[index] = el
                }}
                role="tab"
                id={`capability-tab-${index}`}
                aria-selected={selected === index}
                aria-controls="capability-panel"
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => {
                  const next =
                    event.key === 'Home'
                      ? 0
                      : event.key === 'End'
                        ? capabilities.length - 1
                        : ['ArrowRight', 'ArrowDown'].includes(event.key)
                          ? (index + 1) % capabilities.length
                          : ['ArrowLeft', 'ArrowUp'].includes(event.key)
                            ? (index + capabilities.length - 1) % capabilities.length
                            : null
                  if (next !== null) {
                    event.preventDefault()
                    setSelected(next)
                    tabs.current[next]?.focus()
                  }
                }}
              >
                <span>0{index + 1}</span>
                {item.name}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            ))}
            <p className="capability-tabs__note">
              De inzet wordt afgestemd op jouw proces, bronnen en afspraken.
            </p>
          </div>
          <div
            id="capability-panel"
            className="capability-panel"
            role="tabpanel"
            aria-labelledby={`capability-tab-${selected}`}
            tabIndex={0}
          >
            <div className="capability-panel__copy" key={`${selected}-copy`}>
              <SectionLabel>Voorbeeld / 0{selected + 1}</SectionLabel>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ActionLink secondary href="#contact">
                Bespreek jouw proces
              </ActionLink>
            </div>
            <div
              className="capability-preview"
              key={selected}
              onPointerMove={movePreview}
              onPointerLeave={resetPreview}
            >
              <div className="capability-preview__top">
                <span>WERKSTROOM</span>
                <span>ILLUSTRATIE</span>
              </div>
              <div className="capability-preview__source">
                <Icon size={23} />
                <div>
                  <small>INPUT</small>
                  <strong>{capability.source}</strong>
                </div>
                <CornerDownRight size={18} />
              </div>
              <div className="capability-preview__task">
                <span className="tiny-loop">
                  <Image src="/tibbe-loop.svg" alt="" width={26} height={26} />
                </span>
                {capability.task}
              </div>
              <dl>
                {capability.lines.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="capability-preview__result">
                <Check size={16} />
                {capability.result}
              </div>
              <p>{capability.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
