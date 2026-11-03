'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Copy } from 'lucide-react'
import { ActionLink, SectionLabel } from '@/components/website/Primitives'
import { answerLabel, getAdvice, optionsFor, questions, updateAnswer, type Answers, type Control } from '@/content/process-advice'

export function ProcessChooser() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [control, setControl] = useState<Control>('review')
  const [note, setNote] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const [copyFallback, setCopyFallback] = useState(false)
  const panel = useRef<HTMLDivElement>(null)
  const focusOnChange = useRef(false)
  const complete = step === questions.length
  const question = questions[step]
  const advice = getAdvice(answers, control)
  const summary = [
    'Tibbe · Mijn eerste advies', advice.title, advice.reason,
    ...questions.map(({ key, label }) => `${label}: ${answerLabel(key, answers)}`),
    `Mogelijke werkstroom: ${advice.flow}`, `Controle: ${advice.control}`,
    `Toelichting (niet verwerkt in het advies): ${note || 'Niet ingevuld'}`,
    `Volgende stap: ${advice.next}`,
    'Voorlopige richting. Haalbaarheid, kosten en tijdwinst zijn nog niet vastgesteld.',
  ].join('\n\n')
  function move(next: number) {
    focusOnChange.current = true
    setCopyStatus('')
    setCopyFallback(false)
    setStep(next)
  }
  useEffect(() => {
    if (focusOnChange.current) {
      panel.current?.querySelector<HTMLElement>('[data-question-title]')?.focus()
      focusOnChange.current = false
    }
  }, [step])
  async function copy() {
    try {
      await navigator.clipboard.writeText(summary)
      setCopyStatus('Je advies is gekopieerd.')
      setCopyFallback(false)
    } catch {
      setCopyStatus('Kopiëren lukt hier niet. Selecteer en kopieer de tekst hieronder.')
      setCopyFallback(true)
    }
  }
  return <section id="keuzehulp" className="web-section process-chooser" aria-labelledby="chooser-title">
    <div className="web-container process-chooser__layout">
      <div className="process-chooser__intro">
        <SectionLabel>Jouw eerste stap</SectionLabel>
        <h2 id="chooser-title">Waar loopt<br />het werk vast?</h2>
        <p>Je hoeft nog niet te weten welke techniek je nodig hebt. Kies je antwoorden en ontdek een eerste richting.</p>
        <ul><li><Check size={17} aria-hidden="true" /> 6 vragen over jouw werk</li><li><Check size={17} aria-hidden="true" /> Direct advies, zonder contactgegevens</li><li><Check size={17} aria-hidden="true" /> Daarna zelf kiezen of je contact opneemt</li></ul>
        <p className="process-chooser__privacy">Je antwoorden blijven in deze keuzehulp en worden niet opgeslagen of verstuurd. Bij vernieuwen van de pagina begin je opnieuw.</p>
        <noscript><p>Schakel JavaScript in om de vragen te beantwoorden, of <a href="#contact">bespreek je proces direct met Kylian</a>.</p></noscript>
      </div>
      <div className="process-chooser__panel" ref={panel}>
        <div className="process-chooser__progress"><span>{complete ? 'Jouw eerste advies' : `Vraag ${step + 1} van ${questions.length}`}</span><span>{complete ? 'Voltooid' : question.label}</span></div>
        <progress value={step} max={questions.length} aria-label="Beantwoorde vragen" />
        {complete ? <div className="process-chooser__result">
          <h3 tabIndex={-1} data-question-title>{advice.title}</h3>
          <p>{advice.reason}</p>
          <div className="process-chooser__flow"><span>MOGELIJKE WERKSTROOM</span><p>{advice.flow}</p></div>
          <h4>Maak het concreet</h4><p>{advice.next}</p>
          <h4>Wie houdt de controle?</h4><p>{advice.control}</p>
          <p className="process-chooser__hint">Dit is een eerste richting op basis van je keuzes, geen technische haalbaarheidscheck of offerte. Kosten en tijdwinst zijn nog niet vastgesteld.</p>
          <details><summary>Bekijk je antwoorden</summary><dl>{questions.map(({ key, label }) => <div key={key}><dt>{label}</dt><dd>{answerLabel(key, answers)}</dd></div>)}<div><dt>Controle</dt><dd>{control === 'review' ? 'Eerst beoordelen door mijn team' : 'Waar passend automatisch uitvoeren'}</dd></div><div><dt>Toelichting</dt><dd>{note || 'Niet ingevuld'}</dd></div></dl></details>
          <div className="process-chooser__actions"><ActionLink href="#contact">Bespreek met Kylian</ActionLink><button type="button" className="process-chooser__text-button" onClick={copy}><Copy size={16} aria-hidden="true" /> Kopieer mijn advies</button></div>
          <p className="process-chooser__hint">Je antwoorden gaan niet automatisch mee naar het contactformulier. Kopieer ze als je ze wilt delen.</p>
          <p role="status">{copyStatus}</p>
          {copyFallback && <textarea readOnly aria-label="Advies om zelf te kopiëren" value={summary} rows={10} onFocus={event => event.currentTarget.select()} />}
          <div className="process-chooser__navigation"><button type="button" className="process-chooser__text-button" onClick={() => move(step - 1)}><ArrowLeft size={16} aria-hidden="true" /> Antwoorden aanpassen</button><button type="button" className="process-chooser__text-button" onClick={() => { setAnswers({}); setNote(''); setControl('review'); move(0) }}>Opnieuw beginnen</button></div>
        </div> : <form onSubmit={event => { event.preventDefault(); if (answers[question.key]) move(step + 1) }}>
          <h3 id="chooser-question" tabIndex={-1} data-question-title>{question.title}</h3>
          <p id="chooser-hint" className="process-chooser__hint">{question.hint}</p>
          <fieldset aria-labelledby="chooser-question" aria-describedby="chooser-hint">
            {optionsFor(question.key, answers).map(([value, label]) => <label className="process-chooser__option" key={`${question.key}-${value}`}><input type="radio" name={question.key} value={value} required checked={answers[question.key] === value} onChange={() => setAnswers(previous => updateAnswer(previous, question.key, value))} /><span>{label}</span></label>)}
          </fieldset>
          {step === questions.length - 1 && <>
            <fieldset className="process-chooser__control"><legend>Hoe wil je de controle regelen?</legend>{([['review', 'Eerst beoordelen door mijn team'], ['auto', 'Waar passend automatisch uitvoeren']] as const).map(([value, label]) => <label key={value} className="process-chooser__option"><input type="radio" name="control" value={value} checked={control === value} onChange={() => setControl(value)} /><span>{label}</span></label>)}</fieldset>
            <label className="process-chooser__note">Software of toelichting (optioneel)<textarea value={note} maxLength={600} rows={3} onChange={event => setNote(event.target.value)} placeholder="Bijvoorbeeld: orders staan in Shopify, klantvragen komen via e-mail." /></label>
            <p className="process-chooser__hint">Je toelichting komt in de samenvatting. Dit advies volgt alleen uit je antwoordknoppen. Vul geen gevoelige gegevens in.</p>
          </>}
          <div className="process-chooser__navigation"><button type="button" className="process-chooser__text-button" disabled={step === 0} onClick={() => move(step - 1)}><ArrowLeft size={16} aria-hidden="true" /> Vorige</button><button type="submit" className="web-action" disabled={!answers[question.key]}>{step === questions.length - 1 ? 'Bekijk mijn advies' : 'Volgende vraag'}<ArrowRight size={17} aria-hidden="true" /></button></div>
        </form>}
      </div>
    </div>
  </section>
}
