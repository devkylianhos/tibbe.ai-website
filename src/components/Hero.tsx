import { DashboardMock } from "./DashboardMock";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";

/* Hero: één moment. Kop, één zin, twee knoppen. Niks eromheen.
   Trust-signalen staan in de sectie direct eronder. */
export function Hero() {
  return (
    <section id="top" className="px-3 pt-20 sm:px-4 sm:pt-[84px]">
      <div className="sky-panel mx-auto max-w-[1400px] rounded-[3px]">
        <div className="container-x relative pb-14 pt-16 sm:pb-16 sm:pt-20">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <h1 className="display-1 text-white">
                Een medewerker die nooit stopt.
              </h1>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="lead mx-auto mt-6 max-w-[520px] text-white/85">
                Tibbe beantwoordt je mail, houdt je administratie bij en
                beheert je socials. Ook &apos;s nachts. Jij zegt alleen nog ja of nee.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={BOOKING_URL} className="btn-inverse" target="_blank" rel="noopener">
                  Plan een kennismaking
                </a>
                <a href="#hoe-het-werkt" className="btn-ghost-light">
                  Zo werkt het
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={18}>
            <div className="mx-auto mt-14 max-w-[900px]">
              <DashboardMock />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
