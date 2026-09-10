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
          <h2 id="integrations-heading">Koppel met de tools die je al gebruikt.</h2>
          <span className="web-mono">JOUW TOOLS. ÉÉN WERKSTROOM.</span>
        </div>
        <ul className={styles.logos} aria-label="Voorbeelden van koppelbare tools">
          {tools.map(({ name, slug }) => (
            <li key={slug} className={styles.logo}>
              <Image src={`/integrations/${slug}.svg`} width={32} height={32} alt="" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <p>We stemmen de koppelingen af op jouw processen, toegangsrechten en abonnementen.</p>
          <a href="#contact">Bespreek jouw koppeling <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
