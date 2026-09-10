import { Reveal } from "./Reveal";

/* Eén vertrouwenssectie (Trust + WhyTrust samengevoegd).
   Andere layout-familie dan de kaartgrids: kop links, feiten als
   verticale lijst met dividers rechts. Geen eyebrow, geen kaarten. */
const facts = [
  {
    title: "Een echt bedrijf, geen anonieme tool",
    body: "Achter Tibbe staat Kylian, ondernemer en oprichter. Je weet met wie je samenwerkt en begint met een persoonlijke kennismaking.",
  },
  {
    title: "Jij keurt goed wat telt",
    body: "Gaat er iets naar een klant of gaat het om geld, dan vraagt hij het eerst aan jou. Alles wat hij doet kun je teruglezen, en terugdraaien als je wilt.",
  },
  {
    title: "Jouw gegevens blijven van jou",
    body: "Jouw Tibbe draait op een eigen plek die alleen van jou is. Niks wordt gedeeld met andere bedrijven, en wij houden het dag en nacht in de gaten. Hij is gebouwd op Claude, een van de beste AI-modellen die er is.",
  },
  {
    title: "Je loopt geen risico",
    body: "Bevalt het niet? Dan stop je gewoon, elke maand kan dat. En levert hij je in de eerste twee weken niks op, dan krijg je je geld terug.",
  },
  {
    title: "We zijn net begonnen, en daar zijn we eerlijk over",
    body: "Daarom beginnen we met tien klanten, voor een lage vaste prijs, en help ik je persoonlijk. Jij denkt mee over hoe Tibbe wordt, vanaf het eerste uur.",
  },
];

export function WhyTrust() {
  return (
    <section id="vertrouwen" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="display-2">Waarom je ons nu al kunt vertrouwen.</h2>
              <p className="lead mt-5 max-w-[400px]">
                Geen loze beloftes en geen verzonnen reviews. Wel een paar
                dingen die gewoon kloppen.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={Math.min(i * 0.04, 0.16)}>
                <div className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                  <h3 className="font-display text-[21px] leading-snug">{f.title}</h3>
                  <p className="text-[15.5px] leading-relaxed text-muted-fg">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
