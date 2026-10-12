'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check, RotateCcw, ShoppingBag, Inbox, Users, FileText, LayoutDashboard, X } from 'lucide-react'
import '@/styles/showcase.css'

export type ShowcaseKind = 'website' | 'shop' | 'workflow' | 'dashboard'
const choices: { key: ShowcaseKind; title: string; caption: string; href: string }[] = [
  { key: 'website', title: 'Een sterke eerste indruk', caption: 'Een herkenbaar ontwerp. Een heldere route naar contact.', href: '/websites' },
  { key: 'shop', title: 'Hier kopen jouw klanten', caption: 'Kies een product, voeg het toe en bekijk je winkelmandje.', href: '/webshops' },
  { key: 'workflow', title: 'Dit werk gaat vanzelf', caption: 'Zie hoe een aanvraag wordt vastgelegd en een antwoord klaarstaat.', href: '/automatisering' },
  { key: 'dashboard', title: 'Hier houdt je team overzicht', caption: 'Bekijk open offertes en bepaal welke klant aandacht nodig heeft.', href: '/automatisering' },
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
const products = [
  { name: 'Stoel Forma', detail: 'Crème · zacht gestoffeerd', image: 'chair.jpg', price: 249 },
  { name: 'Interieuradvies', detail: 'Een plan voor jouw woonkamer', image: 'interior.jpg', price: 99 },
]
const euros = (value: number) => new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)
function ShopExample() {
  const [selected, setSelected] = useState(0)
  const [cart, setCart] = useState([0, 0])
  const [open, setOpen] = useState(false)
  const product = products[selected]
  const count = cart.reduce((sum, n) => sum + n, 0)
  const total = cart.reduce((sum, n, i) => sum + n * products[i].price, 0)
  return <div className="demo-store">
    <div className="demo-appbar"><strong>studio linn</strong><button type="button" onClick={() => setOpen(!open)} aria-expanded={open}><ShoppingBag size={18} aria-hidden="true" /> Mandje ({count})</button></div>
    <div className="linn-shop">
      <div className="linn-shop__photo"><Image src={`/visuals/studio-linn/${product.image}`} alt={product.name === 'Stoel Forma' ? 'Crèmekleurige gestoffeerde stoel' : 'Woonkamer als voorbeeld voor interieuradvies'} fill sizes="(max-width: 760px) 90vw, 650px" /></div>
      <div className="linn-shop__info">
        {open ? <div className="demo-cart"><div className="demo-cart__title"><h4>Jouw mandje</h4><button type="button" aria-label="Winkelmandje sluiten" onClick={() => setOpen(false)}><X size={20} aria-hidden="true" /></button></div>
          {count === 0 ? <p>Je mandje is leeg. Kies een product om het te proberen.</p> : products.map((item, i) => cart[i] > 0 && <div className="demo-cart__item" key={item.name}><Image src={`/visuals/studio-linn/${item.image}`} alt="" width={64} height={72} /><div><strong>{item.name}</strong><span>{cart[i]} × {euros(item.price)}</span><button type="button" onClick={() => setCart(cart.map((n, index) => index === i ? 0 : n))}>Verwijder {item.name.toLowerCase()}</button></div></div>)}
          <div className="demo-cart__total"><span>Totaal</span><strong>{euros(total)}</strong></div><p className="demo-help">Dit is een voorbeeld. Je betaalt en bestelt niets.</p><button className="linn-button" type="button" onClick={() => setOpen(false)}>Verder kijken <ArrowRight size={18} aria-hidden="true" /></button>
        </div> : <><span className="linn-wordmark">De collectie / voorbeeldwinkel</span><h4>{product.name}</h4><p>{product.detail}</p><strong className="linn-shop__price">{euros(product.price)} <small>voorbeeldprijs</small></strong>
          <div className="demo-product-picker" aria-label="Kies een product">{products.map((item, i) => <button key={item.name} type="button" aria-pressed={selected === i} onClick={() => setSelected(i)}><Image src={`/visuals/studio-linn/${item.image}`} alt="" width={58} height={58} /><span>{item.name}</span></button>)}</div>
          <button className="linn-button" type="button" onClick={() => setCart(cart.map((n, i) => i === selected ? n + 1 : n))}><ShoppingBag size={18} aria-hidden="true" /> Voeg toe aan mandje</button>
          <p className="demo-help" role="status">{count ? `${count} ${count === 1 ? 'product' : 'producten'} toegevoegd aan je voorbeeldmandje.` : 'Probeer het: kies een product en voeg het toe.'}</p>
          {count > 0 && <button className="demo-text-button" type="button" onClick={() => setOpen(true)}>Bekijk je mandje <ArrowRight size={16} aria-hidden="true" /></button>}
        </>}
      </div>
    </div>
  </div>
}
const flowStages = ['Nieuwe aanvraag', 'Klant vastgelegd', 'Antwoord klaar', 'Goedgekeurd']
function WorkflowExample() {
  const [step, setStep] = useState(0)
  return <div className="demo-automation">
    <div className="demo-appbar"><strong>studio linn <span>/ werkstroom</span></strong><span className="demo-badge">Demo · geen echte acties</span></div>
    <div className="demo-automation__body">
      <ol className="demo-flow-rail">{flowStages.map((name, i) => <li key={name} aria-current={step === i ? 'step' : undefined} data-complete={step > i}><span>{step > i ? <Check size={18} aria-hidden="true" /> : i + 1}</span><div>{name}<small>{['Via je website', 'In je klantoverzicht', 'Door AI voorbereid', 'Door jouw team'][i]}</small></div></li>)}</ol>
      <div className="demo-workspace" key={step}>
        <div className="demo-workspace__title">{step === 0 ? <Inbox size={22} aria-hidden="true" /> : step === 1 ? <Users size={22} aria-hidden="true" /> : <FileText size={22} aria-hidden="true" />}<strong>{['Inbox', 'Klantoverzicht', 'Conceptantwoord', 'Klaar voor opvolging'][step]}</strong></div>
        {step === 0 ? <><div className="demo-person"><span>SV</span><div><strong>Sanne Vermeer</strong><small>Aanvraag via het contactformulier</small></div><span className="demo-badge">Nieuw</span></div><h4>Advies voor mijn woonkamer</h4><p>Hoi, ik wil mijn woonkamer opnieuw inrichten. Kunnen jullie me helpen met een plan voor de indeling en kleuren?</p><p className="demo-help">Nu staat de vraag nog alleen in de inbox.</p></> : step === 1 ? <><div className="demo-person"><span>SV</span><div><strong>Sanne Vermeer</strong><small>Automatisch aangemaakt</small></div><Check size={20} aria-hidden="true" /></div><dl className="demo-record"><div><dt>Interesse</dt><dd>Interieuradvies</dd></div><div><dt>Ruimte</dt><dd>Woonkamer</dd></div><div><dt>Vraag</dt><dd>Indeling en kleuren</dd></div><div><dt>Volgende stap</dt><dd>Foto en afmetingen opvragen</dd></div></dl><p className="demo-help">De gegevens uit het bericht staan op hun plek.</p></> : <><div className="demo-mail-to">Aan: Sanne Vermeer <span className="demo-badge">{step === 3 ? 'Goedgekeurd' : 'Wacht op jouw controle'}</span></div><h4>Re: advies voor je woonkamer</h4><p>Hoi Sanne, bedankt voor je aanvraag. We denken graag mee over de indeling en kleuren. Kun je een foto en de afmetingen van je woonkamer delen?</p><div className="demo-approval"><Check size={20} aria-hidden="true" /><span>{step === 3 ? 'Je hebt het voorbeeld goedgekeurd. Er is niets verstuurd.' : 'Jij leest mee en keurt het antwoord goed.'}</span></div></>}
      </div>
    </div>
    <div className="demo-controls"><button type="button" className="linn-button" onClick={() => setStep((step + 1) % 4)}>{['Probeer de automatisering', 'Bereid het antwoord voor', 'Keur het voorbeeld goed', 'Opnieuw proberen'][step]} {step === 3 ? <RotateCcw size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}</button><span role="status">Stap {step + 1} van 4 · {flowStages[step]}</span></div>
  </div>
}
const sampleQuotes = [
  { name: 'Sanne Vermeer', subject: 'Interieuradvies woonkamer', amount: 99, status: 'Opvolgen' },
  { name: 'Milan de Groot', subject: 'Vier stoelen Forma', amount: 996, status: 'Verstuurd' },
  { name: 'Noor Bakker', subject: 'Interieuradvies werkkamer', amount: 99, status: 'Opvolgen' },
]
function DashboardExample() {
  const [filter, setFilter] = useState<'all' | 'follow'>('all')
  const [done, setDone] = useState<string[]>([])
  const remaining = sampleQuotes.filter(item => item.status === 'Opvolgen' && !done.includes(item.name))
  const rows = filter === 'follow' ? remaining : sampleQuotes
  return <div className="demo-dashboard">
    <div className="demo-appbar"><strong><LayoutDashboard size={20} aria-hidden="true" /> Studio Linn overzicht</strong><span className="demo-badge">Fictieve bedrijfsgegevens</span></div>
    <div className="demo-dashboard__body"><div className="demo-dashboard__heading"><div><h4>Goedemorgen, team</h4><p>{remaining.length ? `${remaining.length} offertes vragen om opvolging.` : 'De opvolging is bijgewerkt.'}</p></div><button type="button" className="demo-text-button" onClick={() => { setDone([]); setFilter('all') }}><RotateCcw size={16} aria-hidden="true" /> Herstel demo</button></div>
      <div className="demo-metrics"><button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}><span>Open offertes <ArrowUpRight size={16} aria-hidden="true" /></span><strong>3</strong><small>{euros(1194)} aan voorstellen</small></button><button type="button" aria-pressed={filter === 'follow'} onClick={() => setFilter('follow')}><span>Opvolging nodig <ArrowUpRight size={16} aria-hidden="true" /></span><strong>{remaining.length}</strong><small>Bekijk wie aandacht nodig heeft</small></button><div><span>Opvolging afgerond</span><strong>{done.length}</strong><small>Door jouw team bijgewerkt</small></div></div>
      <div className="demo-table-heading"><h5>{filter === 'all' ? 'Open offertes' : 'Opvolging nodig'}</h5><span>Voorbeeldbedragen</span></div>
      <div className="demo-quote-list">{rows.length ? rows.map(item => <div className="demo-quote" key={item.name}><div><strong>{item.name}</strong><small>{item.subject}</small></div><span>{euros(item.amount)}</span><span className="demo-badge">{done.includes(item.name) ? 'Opgevolgd' : item.status}</span><button type="button" disabled={done.includes(item.name) || item.status !== 'Opvolgen'} onClick={() => setDone([...done, item.name])} aria-label={`Markeer opvolging ${item.name} als klaar`}>{done.includes(item.name) ? 'Afgerond' : item.status === 'Opvolgen' ? 'Markeer als klaar' : 'Wacht op klant'}</button></div>) : <div className="demo-empty"><Check size={28} aria-hidden="true" /><p>Alle opvolgtaken zijn afgerond.</p></div>}</div>
      <p className="demo-help" role="status">{done.length ? `${done.length} ${done.length > 1 ? 'opvolgtaken' : 'opvolgtaak'} afgerond in dit voorbeeld.` : 'Probeer het: klik op ‘Opvolging nodig’ en werk een taak bij.'}</p>
    </div>
  </div>
}
export function ServiceShowcase({ only }: { only?: ShowcaseKind }) {
  const [selected, setSelected] = useState<ShowcaseKind>('shop')
  const prefix = useId()
  const visible = only ? choices.filter(choice => choice.key === only) : choices.filter(choice => choice.key !== 'website')
  return <div className="service-showcase">
    {!only && <div className="showcase-choices" aria-label="Kies een voorbeeld">{visible.map((choice, i) => <button key={choice.key} type="button" aria-pressed={selected === choice.key} aria-controls={`${prefix}-${choice.key}`} onClick={() => setSelected(choice.key)}><span>0{i + 1}</span>{['Webshop', 'Automatisering', 'Dashboard'][i]}<ArrowUpRight size={18} aria-hidden="true" /></button>)}</div>}
    {visible.map(choice => <section id={`${prefix}-${choice.key}`} key={choice.key} className={`showcase-panel ${only || selected === choice.key ? 'is-selected' : ''}`} aria-label={choice.title}>
      <div className="showcase-panel__caption"><h3>{choice.title}</h3><p>{choice.caption}</p></div>
      {choice.key === 'website' ? <WebsiteExample /> : choice.key === 'shop' ? <ShopExample /> : choice.key === 'workflow' ? <WorkflowExample /> : <DashboardExample />}
      <div className="showcase-panel__foot"><span>Studio Linn is een fictief merk. Concept door Tibbe, geen klantproject.</span>{!only && <a href={choice.href}>Bekijk de dienst <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
    </section>)}
  </div>
}
