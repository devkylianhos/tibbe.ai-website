import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Database,
  FileCheck2,
  Headphones,
  LockKeyhole,
  Send,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import { AUDIT_URL, waLink } from "@/lib/site";
import styles from "./PremiumHome.module.css";

const integrations = [
  { name: "Stripe", slug: "stripe", color: "#635bff" },
  { name: "Notion", slug: "notion", color: "#ffffff" },
  { name: "Slack", slug: "slack", color: "#e01e5a" },
  { name: "HubSpot", slug: "hubspot", color: "#ff7a59" },
  { name: "Shopify", slug: "shopify", color: "#95bf47" },
  { name: "WooCommerce", slug: "woocommerce", color: "#96588a" },
  { name: "Gmail", slug: "gmail", color: "#ea4335" },
  { name: "Microsoft", slug: "microsoft", color: "#f25022" },
  { name: "Airtable", slug: "airtable", color: "#18bfff" },
  { name: "Google Sheets", slug: "googlesheets", color: "#34a853" },
  { name: "Meta", slug: "meta", color: "#0668e1" },
];

const workflows = [
  {
    number: "01",
    label: "Klant & support",
    title: "Van binnenkomende vraag naar een antwoord met de juiste context.",
    body: "Combineer inbox, klantgegevens en interne afspraken. Routinevragen kunnen door; uitzonderingen komen met context bij je team.",
    icon: Headphones,
    steps: ["Vraag herkennen", "Context verzamelen", "Antwoord of escalatie"],
  },
  {
    number: "02",
    label: "Sales & opvolging",
    title: "Breng opvolging samen tussen formulier, inbox en CRM.",
    body: "Signaleer nieuwe aanvragen en open eindjes, verrijk de context en zet een passende opvolging klaar in het kanaal dat je team al gebruikt.",
    icon: UserRoundCheck,
    steps: ["Signaal detecteren", "Lead verrijken", "Opvolging klaarzetten"],
  },
  {
    number: "03",
    label: "Backoffice & finance",
    title: "Terugkerend regelwerk wordt een controleerbare workflow.",
    body: "Laat gegevens tussen systemen controleren, documenten voorbereiden en afwijkingen markeren. Financiële acties blijven achter een expliciet beslispunt.",
    icon: FileCheck2,
    steps: ["Gegevens valideren", "Regels toepassen", "Goedkeuren en loggen"],
  },
  {
    number: "04",
    label: "Rapportage & coördinatie",
    title: "Van versnipperde updates naar één bruikbaar operatiebeeld.",
    body: "Bundel signalen uit je stack, licht afwijkingen toe en stuur vaste updates naar de juiste mensen — zonder handmatig knip- en plakwerk.",
    icon: BarChart3,
    steps: ["Bronnen uitlezen", "Afwijkingen duiden", "Update distribueren"],
  },
];

const process = [
  { step: "Audit", body: "We ontleden één kostbare workflow tot systemen, beslissingen, uitzonderingen en eigenaarschap." },
  { step: "Ontwerp", body: "We bepalen wat doorloopt, wat wacht op een mens en hoe iedere stap zichtbaar blijft." },
  { step: "Bouwen", body: "We realiseren de koppelingen en agent rondom je bestaande proces — niet andersom." },
  { step: "Inregelen", body: "We starten begrensd en scherpen de workflow aan op basis van echte uitzonderingen." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={styles.logo}>
      <BrandMark size={30} color={light ? "#78a0ff" : "#2b5fd9"} />
      <span>Tibbe</span>
    </span>
  );
}

function ApprovalPanel() {
  return (
    <div className={styles.approvalPanel} aria-label="Illustratief operationeel dashboard van Tibbe">
      <div className={styles.panelBar}>
        <div className={styles.panelTitle}><span className={styles.statusDot} aria-hidden="true" /> Operatieoverzicht</div>
        <span className={styles.panelEnv}>live workflow</span>
      </div>
      <div className={styles.panelBody}>
        <aside className={styles.panelSidebar} aria-label="Dashboardnavigatie">
          <div className={styles.sideActive}>Beslissingen</div><div>Workflows</div><div>Signalen</div><div>Logboek</div>
        </aside>
        <div className={styles.panelMain}>
          <div className={styles.panelHeading}>
            <div><span className={styles.microLabel}>WACHT OP BESLUIT</span><h2>Nieuwe aanvraag mist budget</h2></div>
            <span className={styles.timeLabel}><Clock3 size={13} /> zojuist</span>
          </div>
          <div className={styles.contextStrip}><span>HubSpot · nieuwe lead</span><span>Gmail · 2 berichten</span><span>Regel: budget onbekend</span></div>
          <div className={styles.agentNote}>
            <div className={styles.agentMark}><BrandMark size={20} color="#78a0ff" /></div>
            <div><strong>Voorstel van Tibbe</strong><p>Vraag eerst naar budget en gewenste startdatum. De use-case past, maar twee kwalificatievelden ontbreken nog.</p></div>
          </div>
          <div className={styles.approvalActions}>
            <span className={styles.approveButton}><Check size={15} /> Goedkeuren</span>
            <span className={styles.adjustButton}>Aanpassen</span>
            <span className={styles.detailsButton}>Context bekijken <ChevronRight size={14} /></span>
          </div>
          <div className={styles.auditLog}>
            <div className={styles.auditTitle}>Workflowlogboek</div>
            <div className={styles.auditRow}><CircleCheck size={14} /><span>CRM-record en e-mailthread gekoppeld</span><time>09:41</time></div>
            <div className={styles.auditRow}><CircleCheck size={14} /><span>Kwalificatieregels gecontroleerd</span><time>09:41</time></div>
            <div className={styles.auditRowPending}><Clock3 size={14} /><span>Opvolging wacht op goedkeuring</span><time>nu</time></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className={styles.integrationSet} aria-hidden={hidden || undefined}>
      {integrations.map(({ name, slug, color }) => (
        <li key={name} style={{ "--integration-color": color } as CSSProperties}>
          <span className={styles.integrationMark}><Image src={`/integrations/${slug}.svg`} alt="" width={23} height={23} loading="eager" /></span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function PremiumHome() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#inhoud">Ga naar inhoud</a>
      <header className={styles.header}>
        <div className={styles.shell}>
          <a href="#top" aria-label="Tibbe home"><Logo light /></a>
          <nav className={styles.nav} aria-label="Hoofdnavigatie"><a href="#workflows">Workflows</a><a href="#hoe-het-werkt">Aanpak</a><a href="#vertrouwen">Controle</a></nav>
          <a className={styles.navCta} href={AUDIT_URL} target="_blank" rel="noopener noreferrer">Plan een gratis workflow-audit <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <main id="inhoud">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.shell} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>AI-OPERATIES VOOR GROEIENDE TEAMS · GEBOUWD ROND JOUW PROCESSEN</div>
              <h1 id="hero-title">Je bedrijf groeit.<br /><em>Je operatie groeit niet mee.</em></h1>
              <p className={styles.heroLead}>Tibbe bouwt AI-agents die terugkerend werk uitvoeren over support, sales, administratie en rapportage. Gekoppeld aan je bestaande stack, met approvals waar een mens nodig blijft.</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryCta} href={AUDIT_URL} target="_blank" rel="noopener noreferrer">Plan een gratis workflow-audit <ArrowUpRight size={17} /></a>
                <a className={styles.secondaryCta} href="#operatie">Bekijk de controlelaag <ArrowRight size={17} /></a>
              </div>
              <div className={styles.heroProof} aria-label="Inhoud van de gratis workflow-audit">
                <span>30 minuten</span><span>Workflowkaart</span><span>Risico&apos;s</span><span>Build/no-buildadvies</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.visualCaption}><span>ILLUSTRATIEF DASHBOARD · OPERATIONELE LAAG</span><span>CONTEXT · BESLUIT · LOGBOEK</span></div>
              <ApprovalPanel />
            </div>
          </div>
        </section>

        <section className={styles.integrationRail} aria-labelledby="integration-title">
          <div className={styles.shell}>
            <Reveal><div className={styles.integrationHeading}><span className={styles.sectionIndexLight}>COMPATIBELE TOOLS</span><h2 id="integration-title">Koppelt met de tools waarop je operatie al draait.</h2><p>Voor deze en vergelijkbare tools kunnen we koppelingen bouwen. Beschikbaarheid hangt af van API-toegang en de afgesproken scope.</p></div></Reveal>
          </div>
          <div className={styles.marqueeViewport} tabIndex={0} aria-label="Integraties; scroll horizontaal om alle tools te bekijken">
            <div className={styles.marqueeTrack}><IntegrationSet /><IntegrationSet hidden /></div>
          </div>
        </section>

        <section className={styles.workflows} id="workflows" aria-labelledby="workflows-title">
          <div className={styles.shell}>
            <Reveal><div className={styles.sectionIntro}><span className={styles.sectionIndex}>01 — WAAR WE BOUWEN</span><div><h2 id="workflows-title">Begin waar werk tussen systemen blijft hangen.</h2><p>Niet breed automatiseren, maar één terugkerende workflow goed ontwerpen: met de juiste context, duidelijke grenzen en een eigenaar voor uitzonderingen.</p></div></div></Reveal>
            <div className={styles.workflowList}>
              {workflows.map(({ number, label, title, body, icon: Icon, steps }, index) => (
                <Reveal key={number} delay={index * 0.04}>
                  <article className={styles.workflowRow}>
                    <div className={styles.workflowNumber}>{number}</div><div className={styles.workflowIcon}><Icon size={22} strokeWidth={1.6} /></div>
                    <div className={styles.workflowCopy}><span>{label}</span><h3>{title}</h3><p>{body}</p></div>
                    <ol className={styles.workflowSteps} aria-label={`Stappen voor ${label}`}>{steps.map((step, stepIndex) => <li key={step}><span>{stepIndex + 1}</span>{step}</li>)}</ol>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.operations} id="operatie" aria-labelledby="operations-title">
          <div className={`${styles.shell} ${styles.operationsGrid}`}>
            <Reveal><div className={styles.operationsCopy}><span className={styles.sectionIndexLight}>02 — CONTROLELAAG</span><h2 id="operations-title">Automatisch waar het kan. Een besluit waar het moet.</h2><p>De agent beweegt tussen je systemen volgens vooraf afgesproken regels. Zodra context ontbreekt of impact groter wordt, verschuift de workflow naar een mens.</p><ul><li><Check size={16} /> Uitzonderingen komen met context en voorstel</li><li><Check size={16} /> Klant- en geldacties kunnen een approval vereisen</li><li><Check size={16} /> Iedere uitgevoerde stap blijft terug te lezen</li></ul></div></Reveal>
            <Reveal delay={0.1}>
              <div className={styles.flowDiagram} aria-label="Operationele flow van signaal tot gelogde actie">
                <div className={styles.flowHeader}><span>WORKFLOW · NIEUWE AANVRAAG</span><span className={styles.livePill}><i aria-hidden="true" /> ACTIEF</span></div>
                <div className={styles.flowTrack}>
                  <div className={styles.flowNode}><span className={styles.nodeIcon}><Send size={16} /></span><div><small>INGANG</small><strong>Aanvraag ontvangen</strong><p>Formulier en e-mailthread gekoppeld</p></div><span className={styles.nodeState}>verwerkt</span></div>
                  <div className={styles.connector} aria-hidden="true"><i /></div>
                  <div className={styles.flowNode}><span className={styles.nodeIcon}><Database size={16} /></span><div><small>CONTEXT</small><strong>CRM + teamregels</strong><p>Velden en kwalificatiecriteria gecontroleerd</p></div><span className={styles.nodeState}>verwerkt</span></div>
                  <div className={styles.connector} aria-hidden="true"><i /></div>
                  <div className={`${styles.flowNode} ${styles.flowNodeActive}`}><span className={styles.nodeIcon}><ShieldCheck size={16} /></span><div><small>BESLISPUNT</small><strong>Menselijke approval</strong><p>Budget ontbreekt; voorstel staat klaar</p></div><span className={styles.nodeStateActive}>wacht</span></div>
                  <div className={styles.connectorMuted} aria-hidden="true" />
                  <div className={`${styles.flowNode} ${styles.flowNodeMuted}`}><span className={styles.nodeIcon}><CircleCheck size={16} /></span><div><small>ACTIE</small><strong>Opvolging versturen</strong><p>Na akkoord uitvoeren en loggen</p></div><span className={styles.nodeState}>daarna</span></div>
                </div>
                <div className={styles.flowFooter}><LockKeyhole size={14} /> Illustratieve flow · inrichting verschilt per proces en koppeling</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.processSection} id="hoe-het-werkt" aria-labelledby="process-title">
          <div className={styles.shell}>
            <Reveal><div className={styles.sectionIntro}><span className={styles.sectionIndex}>03 — VAN PROCES NAAR PRODUCTIE</span><div><h2 id="process-title">Niet beginnen bij AI.<br />Beginnen bij de operatie.</h2><p>Een custom build begint bij hoe het werk werkelijk loopt: systemen, overdrachten, uitzonderingen en beslissingen.</p></div></div></Reveal>
            <ol className={styles.processList}>{process.map((item, index) => <li key={item.step}><span className={styles.processNumber}>0{index + 1}</span><div><h3>{item.step}</h3><p>{item.body}</p></div></li>)}</ol>
          </div>
        </section>

        <section className={styles.trustSection} id="vertrouwen" aria-labelledby="trust-title">
          <div className={`${styles.shell} ${styles.trustGrid}`}>
            <Reveal><div className={styles.trustIntro}><span className={styles.sectionIndex}>04 — EIGENAARSCHAP & CONTROLE</span><h2 id="trust-title">Jouw proces.<br />Jouw regels.<br /><em>Jouw besluit.</em></h2></div></Reveal>
            <div className={styles.trustDetails}>
              <article><LockKeyhole size={21} /><div><h3>Scope vóór software</h3><p>We bepalen eerst welke bronnen, acties en uitzonderingen werkelijk nodig zijn. Pas daarna ontwerpen we de koppelingen.</p></div></article>
              <article><ShieldCheck size={21} /><div><h3>Goedkeuring ingebouwd</h3><p>Je bepaalt vooraf welke stappen mogen doorlopen en waar je team de eindcontrole houdt.</p></div></article>
              <article><Database size={21} /><div><h3>Zichtbaar operationeel gedrag</h3><p>Gebruikte context, beslismomenten en uitgevoerde stappen worden onderdeel van het operationele overzicht.</p></div></article>
              <article><Headphones size={21} /><div><h3>Een aanspreekbaar Nederlands team</h3><p>Tibbe wordt gebouwd door Kylian, partner van Kitchen Royal in Alkmaar. Je weet wie je workflow ontwerpt en onderhoudt.</p></div></article>
            </div>
          </div>
        </section>

        <section className={styles.offer} aria-labelledby="offer-title">
          <div className={`${styles.shell} ${styles.offerGrid}`}>
            <Reveal><div><span className={styles.sectionIndex}>05 — DE EERSTE STAP</span><h2 id="offer-title">Een workflow-audit vóór we iets bouwen.</h2></div></Reveal>
            <div className={styles.offerBody}><p>In 30 minuten leggen we één terugkerend proces open. Je krijgt zicht op de systeemoverdrachten, beslispunten en koppelingen die een werkbare oplossing vragen.</p><ul><li><Check size={16} /> Eén concrete cross-system workflow</li><li><Check size={16} /> Beslispunten en uitzonderingen in kaart</li><li><Check size={16} /> Een helder build/no-buildadvies</li></ul><a className={styles.offerCta} href={AUDIT_URL} target="_blank" rel="noopener noreferrer">Plan een gratis workflow-audit <ArrowUpRight size={17} /></a><small>Gratis en zonder verplichting. Exacte scope en bouwkosten volgen alleen bij een passend advies.</small></div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-title"><div className={styles.shell}><span>JE STACK IS AL EEN SYSTEEM</span><h2 id="final-title">Laat je operatie ertussen werken.</h2><p>Breng je meest terugkerende, versnipperde workflow mee. We maken zichtbaar wat gekoppeld kan worden — en waar je team aan het roer blijft.</p><a href={AUDIT_URL} target="_blank" rel="noopener noreferrer">Plan een gratis workflow-audit <ArrowUpRight size={18} /></a></div></section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerTop}`}><div><a href="#top" aria-label="Terug naar boven"><Logo light /></a><p>Custom AI-operaties voor groeiende teams met terugkerend werk tussen systemen.</p></div><div className={styles.footerLinks}><div><strong>Product</strong><a href="#workflows">Workflows</a><a href="#hoe-het-werkt">Aanpak</a><a href="#vertrouwen">Controle</a></div><div><strong>Contact</strong><a href={AUDIT_URL} target="_blank" rel="noopener noreferrer">Gratis workflow-audit</a><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="/app">Inloggen</a></div><div><strong>Juridisch</strong><a href="/privacy">Privacy</a><a href="/voorwaarden">Voorwaarden</a><a href="/cookies">Cookies</a></div></div></div>
        <div className={`${styles.shell} ${styles.footerBottom}`}><span>© {new Date().getFullYear()} Tibbe</span><span>Partner van Kitchen Royal · Alkmaar, NL · KvK 80015298</span></div>
      </footer>
    </div>
  );
}
