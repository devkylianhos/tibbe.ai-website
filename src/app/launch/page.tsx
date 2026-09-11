import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Countdown } from "@/components/Countdown";
import {
  BOOKING_URL,
  AGENT_TEAM_MONTHLY_PRICE,
  BETA_MONTHLY_PRICE,
  BETA_MONTHLY_PRICE_LABEL,
  LAUNCH_DATE,
  BETA_SEATS_TOTAL,
  BETA_SEATS_TAKEN,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Tibbe launch — sta vooraan",
  description: `Bij de launch gaat de instap van ${BETA_MONTHLY_PRICE} naar ${AGENT_TEAM_MONTHLY_PRICE} euro per maand. Wie er in de beta bij is, houdt de betaprijs zolang die blijft.`,
};

export const dynamic = "force-dynamic";

function remaining(targetIso: string) {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor(diff / 3_600_000) % 24,
    m: Math.floor(diff / 60_000) % 60,
    s: Math.floor(diff / 1_000) % 60,
    done: diff === 0,
  };
}

export default async function LaunchPage() {
  const seatsLeft = BETA_SEATS_TOTAL - BETA_SEATS_TAKEN;
  const betaOpen = seatsLeft > 0;
  const left = remaining(LAUNCH_DATE);

  const launchDay = new Date(LAUNCH_DATE).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
  });

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-8%] h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,155,60,0.14), transparent 65%)" }}
      />

      <div className="container-x relative py-10">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-[20px]" style={{ fontWeight: 600 }}>
            Tibbe
          </span>
        </Link>

        <div className="mt-14 grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* verhaalkant */}
          <div>
            <span className="eyebrow">Tibbe launch · {launchDay}</span>

            <div className="mt-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-600"
                style={{
                  fontWeight: 600,
                  background: betaOpen ? "var(--accent-soft)" : "var(--amber-soft)",
                  color: betaOpen ? "var(--accent)" : "#a05e12",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: betaOpen ? "var(--accent)" : "var(--amber)" }}
                />
                {betaOpen
                  ? `beta open · nog ${seatsLeft} van ${BETA_SEATS_TOTAL} plekken`
                  : `beta vol · ${BETA_SEATS_TOTAL} van ${BETA_SEATS_TOTAL} plekken bezet`}
              </span>
            </div>

            <h1 className="display-1 mt-6">
              {left.done
                ? "We zijn live."
                : betaOpen
                  ? "De beta is open. Daarna gaat de prijs omhoog."
                  : "De beta zit vol. Sta vooraan bij de launch."}
            </h1>

            <p className="lead mt-6 max-w-[520px]">
              {betaOpen
                ? `Tot de launch stap je in voor ${BETA_MONTHLY_PRICE} euro per maand, en die prijs blijft staan zolang je blijft. Vanaf ${launchDay} kost het normale Agent Team ${AGENT_TEAM_MONTHLY_PRICE} euro per maand.`
                : `Op ${launchDay} gaat Tibbe open voor iedereen. Het Agent Team kost dan ${AGENT_TEAM_MONTHLY_PRICE} euro per maand. Stuur een appje en je hoort het als eerste.`}
            </p>

            <div className="mt-9">
              <Countdown targetIso={LAUNCH_DATE} initial={left} />
            </div>

            <ul className="mt-9 space-y-2.5">
              {[
                "Beta-instappers houden de betaprijs zolang ze blijven",
                "Vandaag geen betaling, eerst een kennismaking",
                "Maandelijks opzegbaar, je data gaat met je mee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-muted-fg">
                  <Check size={15} className="flex-none text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* actiekant */}
          <div className="rounded-[3px] border-2 border-accent bg-white p-7 sm:p-8">
            {betaOpen ? (
              <>
                <p className="eyebrow">Nu instappen</p>
                <h2 className="mt-3 font-display text-[26px] leading-[1.1]" style={{ fontWeight: 700 }}>
                  Claim een betaplek voor de prijs omhoog gaat.
                </h2>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-[44px] leading-none" style={{ fontWeight: 700 }}>
                    {BETA_MONTHLY_PRICE_LABEL}
                  </span>
                  <span className="text-[14px] text-muted-fg">/ maand · vast zolang je blijft</span>
                </div>
                <div className="mt-1.5 text-[13px] text-muted-fg">
                  excl. btw · excl. token usage en Claude-abonnement
                </div>

                {/* plekkenmeter */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-sand">
                    <div
                      className="rounded-full bg-accent"
                      style={{ width: `${(BETA_SEATS_TAKEN / BETA_SEATS_TOTAL) * 100}%` }}
                    />
                  </div>
                  <span className="text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
                    {seatsLeft} vrij
                  </span>
                </div>

                <a href={BOOKING_URL} className="btn-primary mt-7 w-full">
                  Plan een kennismaking
                </a>
                <Link
                  href="/#diensten"
                  className="mt-4 block text-center text-[14px] font-600 text-accent hover:text-accent-dark"
                  style={{ fontWeight: 600 }}
                >
                  Eerst kijken wat Tibbe doet
                </Link>
              </>
            ) : (
              <>
                <p className="eyebrow">Launchlijst</p>
                <h2 className="mt-3 font-display text-[26px] leading-[1.1]" style={{ fontWeight: 700 }}>
                  Hoor het als eerste zodra Tibbe opengaat.
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-fg">
                  Stuur een appje en je staat op de lijst. Geen nieuwsbrief,
                  alleen bericht bij de launch.
                </p>
                <a
                  href={waLink("Hoi, zet mij op de launchlijst van Tibbe.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-6 w-full"
                >
                  Zet me op de lijst via WhatsApp
                </a>
                <a
                  href={BOOKING_URL}
                  className="mt-4 block text-center text-[14px] font-600 text-accent hover:text-accent-dark"
                  style={{ fontWeight: 600 }}
                >
                  Liever eerst praten? Plan een call
                </a>
              </>
            )}
          </div>
        </div>

        <p className="mt-16 text-[13px] text-muted-fg">
          Geen analytics- of marketingcookies. Zo doen we dat hier.
        </p>
      </div>
    </main>
  );
}
