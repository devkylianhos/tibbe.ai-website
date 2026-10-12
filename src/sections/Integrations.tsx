import Image from 'next/image'
import styles from './Integrations.module.css'

const tools = [
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Google', slug: 'google' },
  { name: 'Notion', slug: 'notion' },
]

export function Integrations() {
  return (
    <section id="koppelingen" className={styles.section} aria-labelledby="integrations-heading">
      <div className="web-container" data-reveal>
        <div className={styles.heading}>
          <h2 id="integrations-heading">Aangesloten op de software die je gebruikt.</h2>
          <span className="web-mono">VAN WEBSITE TOT KLANTGEGEVENS.</span>
        </div>
        <ul data-motion-stagger className={styles.logos} aria-label="Voorbeelden van software om te koppelen">
          {tools.map(({ name, slug }) => (
            <li key={slug} className={styles.logo}>
              <Image src={`/integrations/${slug}.svg`} width={32} height={32} alt="" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <p>We onderzoeken welke koppelingen passen bij jouw bedrijf en wat met je huidige software en abonnementen mogelijk is.</p>
          <a href="#contact">Bespreek jouw koppeling <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
