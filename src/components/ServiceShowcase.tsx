'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check, Mail, RotateCcw, ShoppingBag } from 'lucide-react'
import '@/styles/showcase.css'

export type ShowcaseKind = 'website' | 'shop' | 'workflow'
const choices: { key: ShowcaseKind; title: string; caption: string; href: string }[] = [
  { key: 'website', title: 'Een sterke eerste indruk', caption: 'Een herkenbaar ontwerp. Een heldere route naar contact.', href: '/websites' },
  { key: 'shop', title: 'Van kijken naar kiezen', caption: 'Een winkelervaring die je producten de ruimte geeft.', href: '/webshops' },
  { key: 'workflow', title: 'Ook de opvolging klopt', caption: 'Van een losse aanvraag naar een voorstel dat je team controleert.', href: '/automatisering' },
]

function WebsiteExample() {
  const [room, setRoom] = useState(false)
  return <div className="linn-site">
    <div className="linn-site__nav"><strong>studio linn</strong><span>Interieur met karakter</span></div>
    <div className="linn-site__scene">
      <Image src="/visuals/studio-linn/interior.jpg" alt="Lichte woonkamer met natuurlijke materialen, in een fictief websiteontwerp" fill sizes="(max-width: 760px) 90vw, 1100px" />
      <div className="linn-site__copy"><span>{room ? 'Een plek om thuis te komen' : 'Ruimte voor het dagelijks leven'}</span><p>{room ? 'Licht. Rust.\nHelemaal eigen.' : 'Mooi wonen\nbegint bij jou.'}</p><button type="button" onClick={() => setRoom(!room)}>{room ? 'Terug naar het ontwerp' : 'Ontdek de ruimte'} <ArrowUpRight size={18} aria-hidden="true" /></button></div>
    </div>
    <div className="linn-site__strip"><span>Van eerste idee tot jouw interieur</span><span>Ontwerp · Materialen · Advies</span></div>
  </div>
}
function ShopExample() {
  const [quantity, setQuantity] = useState('1')
  const [added, setAdded] = useState(false)
  const id = useId()
  return <div className="linn-shop">
    <div className="linn-shop__photo"><Image src="/visuals/studio-linn/chair.jpg" alt="Crèmekleurige stoel in het fictieve winkelvoorbeeld" fill sizes="(max-width: 760px) 90vw, 550px" /></div>
    <div className="linn-shop__info"><span className="linn-wordmark">studio linn / collectie</span><h4>Een eigen plek<br />in huis</h4><p>Stoel Forma · crème</p><strong className="linn-shop__price">€ 249 <small>voorbeeldprijs</small></strong>
      <label htmlFor={id}>Aantal</label><select id={id} value={quantity} onChange={e => { setQuantity(e.target.value); setAdded(false) }}><option value="1">1 stoel</option><option value="2">2 stoelen</option><option value="4">4 stoelen</option></select>
      <button type="button" className="linn-button" onClick={() => setAdded(!added)}>{added ? <RotateCcw size={18} aria-hidden="true" /> : <ShoppingBag size={18} aria-hidden="true" />}{added ? 'Opnieuw proberen' : 'Voeg toe aan voorbeeldmandje'}</button>
      <p className="linn-shop__status" role="status">{added ? `${quantity} ${quantity === '1' ? 'stoel' : 'stoelen'} in je voorbeeldmandje · € ${Number(quantity) * 249}` : 'Probeer de winkelervaring. Je bestelt niets.'}</p>
    </div>
  </div>
}
function WorkflowExample() {
  const [step, setStep] = useState(0)
  return <div className="linn-flow">
    <div className="linn-flow__heading"><span className="linn-wordmark">studio linn / achter de schermen</span><span>Jij houdt de regie</span></div>
    <div className="linn-flow__steps">
      <div className="linn-flow__step"><Mail size={24} aria-hidden="true" /><span>Aanvraag ontvangen</span><p>“Kunnen jullie me helpen met de inrichting van mijn woonkamer?”</p><small>Voorbeeldbericht van een bezoeker</small></div>
      <ArrowRight className="linn-flow__arrow" aria-hidden="true" />
      <div className="linn-flow__step" data-active={step > 0}><span className="linn-flow__number">02</span><span>Antwoord voorbereiden</span><p>{step > 0 ? '“Bedankt voor je aanvraag. Kun je een foto en de afmetingen van je woonkamer delen?”' : 'De vraag wordt samengevat. AI zet een passend concept klaar.'}</p><small>Concept, nog niet verstuurd</small></div>
      <ArrowRight className="linn-flow__arrow" aria-hidden="true" />
      <div className="linn-flow__step" data-active={step > 1}><Check size={24} aria-hidden="true" /><span>Jij controleert</span><p>{step > 1 ? 'Je hebt het voorbeeld goedgekeurd. In een echte werkstroom volgt nu de afgesproken actie.' : 'Bekijk het antwoord en bepaal wat er naar de klant gaat.'}</p><small>Menselijke goedkeuring</small></div>
    </div>
    <div className="linn-flow__action"><button className="linn-button" type="button" onClick={() => setStep((step + 1) % 3)}>{['Bereid een concept voor', 'Keur het voorbeeld goed', 'Opnieuw proberen'][step]} <ArrowRight size={18} aria-hidden="true" /></button><span role="status">{['Stap 1 van 3', 'Stap 2 van 3', 'Stap 3 van 3 · niets verstuurd'][step]}</span></div>
  </div>
}
export function ServiceShowcase({ only }: { only?: ShowcaseKind }) {
  const [selected, setSelected] = useState<ShowcaseKind>('website')
  const prefix = useId()
  const visible = only ? choices.filter(choice => choice.key === only) : choices
  return <div className="service-showcase">
    {!only && <div className="showcase-choices" aria-label="Kies een voorbeeld">{choices.map((choice, i) => <button key={choice.key} type="button" aria-pressed={selected === choice.key} aria-controls={`${prefix}-${choice.key}`} onClick={() => setSelected(choice.key)}><span>0{i + 1}</span>{['Website', 'Webshop', 'Automatisering'][i]}<ArrowUpRight size={18} aria-hidden="true" /></button>)}</div>}
    {visible.map(choice => <section id={`${prefix}-${choice.key}`} key={choice.key} className={`showcase-panel ${only || selected === choice.key ? 'is-selected' : ''}`} aria-label={choice.title}>
      <div className="showcase-panel__caption"><h3>{choice.title}</h3><p>{choice.caption}</p></div>
      {choice.key === 'website' ? <WebsiteExample /> : choice.key === 'shop' ? <ShopExample /> : <WorkflowExample />}
      <div className="showcase-panel__foot"><span>Studio Linn is een fictief merk. Concept door Tibbe, geen klantproject.</span>{!only && <a href={choice.href}>Bekijk de dienst <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
    </section>)}
  </div>
}
