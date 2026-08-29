import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Database,
  Headphones,
  LockKeyhole,
  PackageCheck,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { AUDIT_URL, waLink } from "@/lib/site";
import styles from "./PremiumHome.module.css";

const integrations = [
  "Shopify",
  "WooCommerce",
  "Gmail",
  "Klaviyo",
  "Mollie",
  "Meta",
  "Slack",
  "Notion",
];

const workflows = [
  {
    number: "01",
    label: "Klantenservice",
    title: "Van binnenkomende vraag naar een gecontroleerd antwoord.",
    body: "Tibbe leest context uit je shop, orderhistorie en beleid. Routinevragen worden afgehandeld; uitzonderingen komen met een helder voorstel bij je team.",
    icon: Headphones,
    steps: ["Vraag herkennen", "Klantcontext ophalen", "Antwoord of escalatie"],
  },
  {
    number: "02",
    label: "Orders & retouren",
    title: "Een orderprobleem wordt een traceerbare workflow.",
    body: "Adreswijziging, vertraging of retour: elke stap volgt je eigen regels. Acties met financiële of klantimpact wachten op goedkeuring.",
    icon: PackageCheck,
    steps: ["Order valideren", "Regels toepassen", "Actie vastleggen"],
  },
  {
    number: "03",
    label: "Retention & follow-up",
    title: "Opvolging op het juiste moment, niet als losse campagne.",
    body: "Tibbe signaleert open eindjes in de klantreis en zet passende follow-up klaar in je bestaande kanalen, op basis van gedrag en afgesproken grenzen.",
    icon: RotateCcw,
    steps: ["Signaal detecteren", "Context beoordelen", "Follow-up klaarzetten"],
  },
];

const process = [
  {
    step: "Audit",
    body: "We brengen één kostbare workflow terug tot beslissingen, uitzonderingen en systemen.",
  },
  {
    step: "Bouwen",
    body: "We koppelen de tools, modelleren je regels en maken de approvals expliciet.",
  },
  {
    step: "Live",
    body: "De agent start begrensd. Je team ziet wat loopt, wat wacht en waarom.",
  },
  {
    step: "Verbeteren",
    body: "Op basis van echte uitzonderingen scherpen we de workflow gecontroleerd aan.",
  },
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
    <div className={styles.approvalPanel} aria-label="Voorbeeld van een Tibbe operationeel dashboard">
      <div className={styles.panelBar}>
        <div className={styles.panelTitle}>
          <span className={styles.statusDot} aria-hidden="true" />
          Operatieoverzicht
        </div>
        <span className={styles.panelEnv}>productie</span>
      </div>

      <div className={styles.panelBody}>
        <aside className={styles.panelSidebar} aria-label="Dashboardnavigatie">
          <div className={styles.sideActive}>Inbox</div>
          <div>Workflows</div>
          <div>Goedkeuringen</div>
          <div>Logboek</div>
        </aside>

        <div className={styles.panelMain}>
          <div className={styles.panelHeading}>
            <div>
              <span className={styles.microLabel}>WACHT OP BESLUIT</span>
              <h2>Retour buiten termijn</h2>
            </div>
            <span className={styles.timeLabel}><Clock3 size={13} /> zojuist</span>
          </div>

          <div className={styles.contextStrip}>
            <span>Order #NL-1842</span>
            <span>Retourbeleid: 30 dagen</span>
            <span>Ontvangen: dag 33</span>
          </div>

          <div className={styles.agentNote}>
            <div className={styles.agentMark}><BrandMark size={20} color="#78a0ff" /></div>
            <div>
              <strong>Voorstel van Tibbe</strong>
              <p>Accepteer als coulance. De bestelling is ongebruikt en de klant meldde de vertraging eerder per e-mail.</p>
            </div>
          </div>

          <div className={styles.approvalActions}>
            <span className={styles.approveButton}><Check size={15} /> Goedkeuren</span>
            <span className={styles.adjustButton}>Aanpassen</span>
            <span className={styles.detailsButton}>Context bekijken <ChevronRight size={14} /></span>
          </div>

          <div className={styles.auditLog}>
            <div className={styles.auditTitle}>Audit trail</div>
            <div className={styles.auditRow}>
              <CircleCheck size={14} />
              <span>Order en retourbeleid gecontroleerd</span>
              <time>09:41</time>
            </div>
            <div className={styles.auditRow}>
              <CircleCheck size={14} />
              <span>Eerdere klantcommunicatie gevonden</span>
              <time>09:41</time>
            </div>
            <div className={styles.auditRowPending}>
              <Clock3 size={14} />
              <span>Actie wacht op goedkeuring</span>
              <time>nu</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PremiumHome() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#inhoud">Ga naar inhoud</a>

      <header className={styles.header}>
        <div className={styles.shell}>
          <a href="#top" aria-label="Tibbe home"><Logo light /></a>
          <nav className={styles.nav} aria-label="Hoofdnavigatie">
            <a href="#workflows">Workflows</a>
            <a href="#hoe-het-werkt">Hoe het werkt</a>
            <a href="#vertrouwen">Vertrouwen</a>
          </nav>
          <a className={styles.navCta} href={AUDIT_URL} target="_blank" rel="noopener noreferrer">
            Plan een gratis workflow-audit <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main id="inhoud">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.shell} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>AI-OPERATIES VOOR E-COMMERCE · IN JOUW EIGEN OMGEVING</div>
              <h1 id="hero-title">Je webshop groeit.<br /><em>Je operatie groeit niet mee.</em></h1>
              <p className={styles.heroLead}>
                Tibbe bouwt AI-agents voor klantenservice, orders en retention — gekoppeld aan je bestaande systemen, met menselijke goedkeuring waar het telt.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryCta} href={AUDIT_URL} target="_blank" rel="noopener noreferrer">
                  Plan een gratis workflow-audit <ArrowUpRight size={17} />
                </a>
                <a className={styles.secondaryCta} href="#operatie">
                  Bekijk hoe het werkt <ArrowRight size={17} />
                </a>
              </div>
              <p className={styles.heroNote}>Niet alleen antwoorden: geselecteerde acties uitvoeren in Shopify of WooCommerce, retouren en retention — met approvals en logs.</p>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.visualCaption}>
                <span>ILLUSTRATIEF DASHBOARD · OPERATIONELE LAAG</span>
                <span>REGELS · APPROVALS · LOGBOEK</span>
              </div>
              <ApprovalPanel />
            </div>
          </div>
        </section>

        <section className={styles.integrationRail} aria-labelledby="integration-title">
          <div className={styles.shell}>
            <p id="integration-title">WERKT BOVENOP DE TOOLS DIE JE TEAM AL GEBRUIKT</p>
            <ul>
              {integrations.map((integration) => <li key={integration}>{integration}</li>)}
            </ul>
          </div>
        </section>

        <section className={styles.workflows} id="workflows" aria-labelledby="workflows-title">
          <div className={styles.shell}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionIndex}>01 — EERSTE WORKFLOWS</span>
              <div>
                <h2 id="workflows-title">Begin waar je operatie<br />elke dag vertraagt.</h2>
                <p>Niet alles tegelijk automatiseren. Eerst één workflow strak krijgen — met duidelijke grenzen, context en eigenaarschap.</p>
              </div>
            </div>

            <div className={styles.workflowList}>
              {workflows.map(({ number, label, title, body, icon: Icon, steps }) => (
                <article className={styles.workflowRow} key={number}>
                  <div className={styles.workflowNumber}>{number}</div>
                  <div className={styles.workflowIcon}><Icon size={22} strokeWidth={1.6} /></div>
                  <div className={styles.workflowCopy}>
                    <span>{label}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <ol className={styles.workflowSteps} aria-label={`Stappen voor ${label}`}>
                    {steps.map((step, index) => (
                      <li key={step}><span>{index + 1}</span>{step}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.operations} id="operatie" aria-labelledby="operations-title">
          <div className={`${styles.shell} ${styles.operationsGrid}`}>
            <div className={styles.operationsCopy}>
              <span className={styles.sectionIndexLight}>02 — CONTROLELAAG</span>
              <h2 id="operations-title">Autonomie waar het kan. Een besluit waar het moet.</h2>
              <p>
                Tibbe voert niet blind taken uit. Je bedrijfsregels bepalen wat automatisch doorloopt en wat expliciet bij een mens terechtkomt.
              </p>
              <ul>
                <li><Check size={16} /> Uitzonderingen komen met context en voorstel</li>
                <li><Check size={16} /> Klant- en geldacties kunnen een approval vereisen</li>
                <li><Check size={16} /> Elke stap blijft terug te lezen in het logboek</li>
              </ul>
            </div>
            <div className={styles.flowDiagram} aria-label="Operationele flow van signaal tot gelogde actie">
              <div className={styles.flowHeader}>
                <span>WORKFLOW · RETOURVERZOEK</span>
                <span className={styles.livePill}>ACTIEF</span>
              </div>
              <div className={styles.flowTrack}>
                <div className={styles.flowNode}>
                  <span className={styles.nodeIcon}><Send size={16} /></span>
                  <div><small>INGANG</small><strong>Klantverzoek</strong><p>E-mail ontvangen en geclassificeerd</p></div>
                  <span className={styles.nodeState}>verwerkt</span>
                </div>
                <div className={styles.connector} aria-hidden="true" />
                <div className={styles.flowNode}>
                  <span className={styles.nodeIcon}><Database size={16} /></span>
                  <div><small>CONTEXT</small><strong>Order + beleid</strong><p>Bronnen gecontroleerd in eigen omgeving</p></div>
                  <span className={styles.nodeState}>verwerkt</span>
                </div>
                <div className={styles.connector} aria-hidden="true" />
                <div className={`${styles.flowNode} ${styles.flowNodeActive}`}>
                  <span className={styles.nodeIcon}><ShieldCheck size={16} /></span>
                  <div><small>BESLISPUNT</small><strong>Menselijke approval</strong><p>Uitzondering buiten retourtermijn</p></div>
                  <span className={styles.nodeStateActive}>wacht</span>
                </div>
                <div className={styles.connectorMuted} aria-hidden="true" />
                <div className={`${styles.flowNode} ${styles.flowNodeMuted}`}>
                  <span className={styles.nodeIcon}><CircleCheck size={16} /></span>
                  <div><small>ACTIE</small><strong>Retour aanmaken</strong><p>Na akkoord uitvoeren en loggen</p></div>
                  <span className={styles.nodeState}>daarna</span>
                </div>
              </div>
              <div className={styles.flowFooter}><LockKeyhole size={14} /> Alle stappen worden gelogd · rechten per koppeling begrensd</div>
            </div>
          </div>
        </section>

        <section className={styles.processSection} id="hoe-het-werkt" aria-labelledby="process-title">
          <div className={styles.shell}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionIndex}>03 — VAN PROCES NAAR PRODUCTIE</span>
              <div>
                <h2 id="process-title">Niet beginnen bij AI.<br />Beginnen bij de operatie.</h2>
                <p>We bouwen rondom hoe je team werkelijk werkt: systemen, overdrachten, uitzonderingen en beslissingen.</p>
              </div>
            </div>
            <ol className={styles.processList}>
              {process.map((item, index) => (
                <li key={item.step}>
                  <span className={styles.processNumber}>0{index + 1}</span>
                  <div><h3>{item.step}</h3><p>{item.body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.trustSection} id="vertrouwen" aria-labelledby="trust-title">
          <div className={`${styles.shell} ${styles.trustGrid}`}>
            <div className={styles.trustIntro}>
              <span className={styles.sectionIndex}>04 — EIGENAARSCHAP & VERTROUWEN</span>
              <h2 id="trust-title">Jouw operatie.<br />Jouw regels.<br /><em>Jouw controle.</em></h2>
            </div>
            <div className={styles.trustDetails}>
              <article>
                <LockKeyhole size={21} />
                <div><h3>Afgeschermde omgeving</h3><p>Geselecteerde workflows draaien in een eigen klantomgeving. Koppelingen krijgen alleen de rechten die voor de afgesproken taak nodig zijn.</p></div>
              </article>
              <article>
                <ShieldCheck size={21} />
                <div><h3>Goedkeuring ingebouwd</h3><p>Je bepaalt vooraf welke beslissingen zelfstandig mogen en waar je team de eindcontrole houdt.</p></div>
              </article>
              <article>
                <Database size={21} />
                <div><h3>Monitoring en logboek</h3><p>Acties, gebruikte context en beslismomenten worden gemonitord en blijven zichtbaar in het operationele logboek.</p></div>
              </article>
              <article>
                <Headphones size={21} />
                <div><h3>Een aanspreekbaar Nederlands team</h3><p>Tibbe wordt gebouwd door Kylian, partner van Kitchen Royal in Alkmaar. Je weet wie de workflow inricht en wie je belt bij een uitzondering.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.offer} aria-labelledby="offer-title">
          <div className={`${styles.shell} ${styles.offerGrid}`}>
            <div>
              <span className={styles.sectionIndex}>05 — DE EERSTE STAP</span>
              <h2 id="offer-title">Een workflow-audit vóór we iets bouwen.</h2>
            </div>
            <div className={styles.offerBody}>
              <p>In 30 minuten leggen we één operationeel proces open. Je krijgt zicht op waar AI gecontroleerd kan uitvoeren, waar approvals nodig zijn en welke koppelingen de workflow vraagt.</p>
              <ul>
                <li><Check size={16} /> Eén concrete e-commerceworkflow</li>
                <li><Check size={16} /> Beslispunten en uitzonderingen in kaart</li>
                <li><Check size={16} /> Workflowkaart plus helder build/no-buildadvies</li>
              </ul>
              <a className={styles.offerCta} href={AUDIT_URL} target="_blank" rel="noopener noreferrer">
                Plan een gratis workflow-audit <ArrowUpRight size={17} />
              </a>
              <small>Gratis en zonder verplichting. Eerst valideren we scope en haalbaarheid; exacte bouwkosten volgen pas bij een passend advies.</small>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-title">
          <div className={styles.shell}>
            <span>JE WEBSHOP IS AL EEN SYSTEEM</span>
            <h2 id="final-title">Laat je operatie dat ook worden.</h2>
            <p>Breng je rommeligste workflow mee. We laten zien waar Tibbe kan uitvoeren — en waar je team aan het roer blijft.</p>
            <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer">
              Plan een gratis workflow-audit <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerTop}`}>
          <div>
            <a href="#top" aria-label="Terug naar boven"><Logo light /></a>
            <p>AI-operaties voor Nederlandse e-commercebedrijven.</p>
          </div>
          <div className={styles.footerLinks}>
            <div><strong>Product</strong><a href="#workflows">Workflows</a><a href="#hoe-het-werkt">Hoe het werkt</a><a href="#vertrouwen">Vertrouwen</a></div>
            <div><strong>Contact</strong><a href={AUDIT_URL} target="_blank" rel="noopener noreferrer">Gratis workflow-audit</a><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="/app">Inloggen</a></div>
            <div><strong>Juridisch</strong><a href="/privacy">Privacy</a><a href="/voorwaarden">Voorwaarden</a><a href="/cookies">Cookies</a></div>
          </div>
        </div>
        <div className={`${styles.shell} ${styles.footerBottom}`}>
          <span>© {new Date().getFullYear()} Tibbe</span>
          <span>Partner van Kitchen Royal · Alkmaar, NL · KvK 80015298</span>
        </div>
      </footer>
    </div>
  );
}
