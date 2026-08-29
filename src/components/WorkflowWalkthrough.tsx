"use client";

import Image from "next/image";
import { Check, CircleCheck, Clock3, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import styles from "./PremiumHome.module.css";

const stages = [
  {
    label: "Signaal",
    eyebrow: "Nieuwe aanvraag",
    title: "Een formulier en e-mail komen binnen.",
    description: "Tibbe herkent dat beide berichten bij dezelfde aanvraag horen en start de afgesproken workflow.",
    systems: [
      { name: "HubSpot", slug: "hubspot" },
      { name: "Gmail", slug: "gmail" },
    ],
    facts: ["Dienst: procesautomatisering", "Startdatum genoemd", "Budget ontbreekt"],
    boundary: "Er wordt nog niets verstuurd of aangepast.",
    log: "Signaal ontvangen · bronnen gekoppeld",
  },
  {
    label: "Context",
    eyebrow: "Bronnen & regels",
    title: "De relevante context komt op één plek.",
    description: "CRM-velden, de e-mailthread en interne kwalificatieregels worden samengebracht voor dezelfde beslissing.",
    systems: [
      { name: "Notion", slug: "notion" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "Gmail", slug: "gmail" },
    ],
    facts: ["Bestaande relatie: nee", "Regel: budget vereist", "Thread: 2 berichten"],
    boundary: "Alleen vooraf afgesproken bronnen worden gebruikt.",
    log: "Context verzameld · regels gecontroleerd",
  },
  {
    label: "Voorstel",
    eyebrow: "Agentvoorstel",
    title: "Tibbe bereidt de volgende stap voor.",
    description: "De workflow stelt een korte vervolgvraag op over budget en gewenste startdatum, met de gebruikte context erbij.",
    systems: [
      { name: "HubSpot", slug: "hubspot" },
      { name: "Gmail", slug: "gmail" },
    ],
    facts: ["Conceptantwoord klaar", "Reden zichtbaar", "Geen externe actie"],
    boundary: "Het voorstel wacht; een mens houdt de eindcontrole.",
    log: "Voorstel opgesteld · approval aangevraagd",
  },
  {
    label: "Goedkeuring",
    eyebrow: "Menselijk beslispunt",
    title: "Je team kiest: goedkeuren of aanpassen.",
    description: "De beslisser ziet het voorstel, de ontbrekende informatie en de bronnen zonder opnieuw door meerdere systemen te zoeken.",
    systems: [
      { name: "Slack", slug: "slack" },
      { name: "Gmail", slug: "gmail" },
    ],
    facts: ["Voorstel + onderbouwing", "Aanpassen mogelijk", "Actie nog geblokkeerd"],
    boundary: "Zonder expliciet akkoord wordt de opvolging niet verstuurd.",
    log: "Wacht op beslissing · eigenaar geïnformeerd",
  },
  {
    label: "Actie & logboek",
    eyebrow: "Na akkoord",
    title: "De actie wordt uitgevoerd en vastgelegd.",
    description: "Na goedkeuring kan de vervolgvraag worden verstuurd en wordt de status met het beslismoment in het operationele logboek bijgewerkt.",
    systems: [
      { name: "Gmail", slug: "gmail" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "Notion", slug: "notion" },
    ],
    facts: ["Opvolging verstuurd", "CRM-status bijgewerkt", "Besluit terug te lezen"],
    boundary: "De precieze actie en logging worden per workflow afgesproken.",
    log: "Actie uitgevoerd · besluit en context gelogd",
  },
];

export function WorkflowWalkthrough() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stages[activeIndex];

  return (
    <section className={styles.walkthrough} id="walkthrough" aria-labelledby="walkthrough-title">
      <div className={styles.shell}>
        <div className={styles.walkthroughIntro}>
          <div>
            <span className={styles.sectionIndex}>INTERACTIEVE PRODUCTTOUR</span>
            <h2 id="walkthrough-title">Eén workflow.<br />Van signaal tot logboek.</h2>
          </div>
          <div className={styles.walkthroughLead}>
            <p>Klik door een illustratieve salesworkflow. Niet om een dashboard te beloven, maar om zichtbaar te maken hoe context, controle en uitvoering samenhangen.</p>
            <span><ShieldCheck size={15} /> Voorbeeldomgeving · geen klantdata</span>
          </div>
        </div>

        <div className={styles.walkthroughFrame}>
          <div className={styles.walkthroughBar}>
            <span className={styles.walkthroughBrand}><i aria-hidden="true" /> Tibbe · workflowcontrole</span>
            <span>Illustratieve workflow</span>
          </div>

          <div className={styles.stageTabs} role="group" aria-label="Stappen van de voorbeeldworkflow">
            {stages.map((stage, index) => (
              <button
                type="button"
                key={stage.label}
                className={index === activeIndex ? styles.stageTabActive : styles.stageTab}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span>0{index + 1}</span>
                {stage.label}
              </button>
            ))}
          </div>

          <div className={styles.walkthroughBody} aria-live="polite">
            <div className={styles.walkthroughMain}>
              <div className={styles.walkthroughMeta}>
                <span>{active.eyebrow}</span>
                <span><Clock3 size={13} /> stap {activeIndex + 1} van {stages.length}</span>
              </div>
              <h3>{active.title}</h3>
              <p>{active.description}</p>

              <div className={styles.systemRoute} aria-label="Gebruikte voorbeeldsystemen">
                {active.systems.map((system, index) => (
                  <div key={system.name} className={styles.systemRouteItem}>
                    <span><Image src={`/integrations/${system.slug}.svg`} alt="" width={18} height={18} /></span>
                    <strong>{system.name}</strong>
                    {index < active.systems.length - 1 && <i aria-hidden="true" />}
                  </div>
                ))}
              </div>

              <div className={styles.factGrid}>
                {active.facts.map((fact) => <span key={fact}><Check size={13} /> {fact}</span>)}
              </div>
            </div>

            <aside className={styles.walkthroughAside} aria-label="Controle en logging van deze stap">
              <div className={styles.controlCard}>
                <span><LockKeyhole size={16} /> CONTROLEGRENS</span>
                <p>{active.boundary}</p>
              </div>
              <div className={styles.logCard}>
                <span>WORKFLOWLOGBOEK</span>
                {stages.map((stage, index) => (
                  <div key={stage.label} className={index <= activeIndex ? styles.logRowDone : styles.logRowPending}>
                    {index < activeIndex ? <CircleCheck size={14} /> : <Clock3 size={14} />}
                    <span>{index === activeIndex ? active.log : stage.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
