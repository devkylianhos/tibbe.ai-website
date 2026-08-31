import { Reveal } from "./Reveal";
import { Check, Minus } from "lucide-react";
import { BETA_MONTHLY_PRICE_LABEL } from "@/lib/site";

const rows = [
  {
    label: "Teksten schrijven",
    los: "een tekstschrijver inhuren, per stuk betalen",
  },
  {
    label: "Klantenmail beantwoorden",
    los: "zelf doen, of iemand aannemen",
  },
  {
    label: "Social media posts maken",
    los: "een ontwerper inhuren en wachten",
  },
  {
    label: "Facturen en herinneringen sturen",
    los: "zelf achteraan zitten, of het blijft liggen",
  },
  {
    label: "Overzicht van je cijfers",
    los: "bij elkaar sprokkelen uit losse programma's",
  },
  {
    label: "Dingen uitzoeken",
    los: "zelf googelen tussen de bedrijven door",
  },
  {
    label: "Het terugkerende geregel",
    los: "blijft op jouw bord liggen",
  },
];

export function Compare() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <h2 className="display-2">Wat je nu allemaal apart regelt, doet straks één iemand.</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-[3px] border border-border bg-white">
            {/* kopregel */}
            <div className="hidden grid-cols-[1.1fr_1fr_0.9fr] items-center border-b border-border bg-sand px-6 py-4 sm:grid sm:px-8">
              <span className="text-[13px] font-600 uppercase tracking-[0.06em] text-muted-fg" style={{ fontWeight: 600 }}>
                Wat er moet gebeuren
              </span>
              <span className="text-[13px] font-600 uppercase tracking-[0.06em] text-muted-fg" style={{ fontWeight: 600 }}>
                Zoals het nu gaat
              </span>
              <span className="text-[13px] font-600 uppercase tracking-[0.06em] text-accent" style={{ fontWeight: 600 }}>
                Met Tibbe
              </span>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1.5 border-b border-border px-6 py-4 last:border-b-0 sm:grid-cols-[1.1fr_1fr_0.9fr] sm:items-center sm:gap-0 sm:px-8"
              >
                <span className="pr-4 text-[15px] font-600" style={{ fontWeight: 600 }}>
                  {row.label}
                </span>
                <span className="flex items-start gap-2 pr-4 text-[13.5px] leading-snug text-muted-fg">
                  <Minus size={14} className="mt-0.5 flex-none opacity-50" />
                  {row.los}
                </span>
                <span className="flex items-center gap-2 text-[14px] font-600 text-accent" style={{ fontWeight: 600 }}>
                  <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-soft">
                    <Check size={13} />
                  </span>
                  doet hij
                </span>
              </div>
            ))}

            {/* slotregel */}
            <div className="grid grid-cols-1 gap-1.5 bg-sand px-6 py-5 sm:grid-cols-[1.1fr_1fr_0.9fr] sm:items-center sm:gap-0 sm:px-8">
              <span className="text-[15px] font-600" style={{ fontWeight: 600 }}>
                Wat het kost
              </span>
              <span className="pr-4 text-[13.5px] leading-snug text-muted-fg">
                losse rekeningen, per uur en per programma
              </span>
              <span className="font-display text-[17px] text-accent" style={{ fontWeight: 700 }}>
                vanaf {BETA_MONTHLY_PRICE_LABEL} per maand
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-[600px] text-center text-[13px] text-muted-fg">
            Eén vast bedrag, één aanspreekpunt. En jij zegt overal ja of nee tegen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
