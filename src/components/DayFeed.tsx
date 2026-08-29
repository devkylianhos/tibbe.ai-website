import { Reveal } from "./Reveal";
import { ScrollSpine } from "./ScrollSpine";
import {
  RotateCcw,
  PenLine,
  LayoutDashboard,
  Receipt,
  Star,
  AlertTriangle,
  Palette,
} from "lucide-react";

/* Voorbeeld van een doorsnee dag — geen echte klantdata.
   TODO: vervang door echte voorbeelden zodra er een klantcase is. */
const feed = [
  {
    time: "03:12",
    icon: RotateCcw,
    text: "De bestellingen van gisteren verwerkt en de administratie bijgewerkt.",
    badge: null,
  },
  {
    time: "06:58",
    icon: PenLine,
    text: "Een blog geschreven over het onderwerp dat jij gisteren noemde.",
    badge: { label: "wacht op jouw ja", tone: "amber" as const },
  },
  {
    time: "08:30",
    icon: LayoutDashboard,
    text: "Je overzicht bijgewerkt: omzet van gisteren en wat er vandaag speelt.",
    badge: null,
  },
  {
    time: "09:15",
    icon: Receipt,
    text: "Vriendelijke herinnering gestuurd naar een klant die nog niet betaald had.",
    badge: { label: "jij zei ja", tone: "blue" as const },
  },
  {
    time: "11:40",
    icon: Star,
    text: "Veertien klantmails beantwoord. Twee lastige heeft hij voor jou apart gelegd.",
    badge: null,
  },
  {
    time: "14:05",
    icon: AlertTriangle,
    text: "Opgevallen: dezelfde klacht komt deze week drie keer terug. Hij legt je uit wat er speelt.",
    badge: { label: "even naar jou", tone: "amber" as const },
  },
  {
    time: "16:20",
    icon: Palette,
    text: "Twee social media posts klaargezet voor volgende week. Jij hoeft alleen nog ja te zeggen.",
    badge: { label: "wacht op jouw ja", tone: "amber" as const },
  },
];

export function DayFeed() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* kop links, blijft hangen */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="display-2">Een gewone dinsdag, terwijl jij wat anders doet.</h2>
              <p className="lead mt-5 max-w-[420px]">
                Dit deed Tibbe op een doorsnee dag. Ook &apos;s nachts en in het weekend.
                Alles wat naar een klant gaat, ziet jij eerst.
              </p>
              <p className="mt-6 text-[13px] text-muted-fg">
                Voorbeeld. Bij jou ziet de dag er anders uit, maar zo werkt het.
              </p>
            </Reveal>
          </div>

          {/* feed rechts */}
          <div className="relative">
            <ScrollSpine className="absolute bottom-8 left-[26px] top-8" />
            <div className="flex flex-col gap-4">
              {feed.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.time} delay={Math.min(i * 0.05, 0.25)}>
                    <div className="relative flex items-start gap-5 rounded-[3px] border border-border bg-white p-5">
                      <span className="relative z-10 grid h-11 w-11 flex-none place-items-center rounded-[3px] bg-accent-soft text-accent">
                        <Icon size={19} />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span
                            className="font-display text-[14px] tabular-nums text-muted-fg"
                            style={{ fontWeight: 600 }}
                          >
                            {item.time}
                          </span>
                          {item.badge && (
                            <span
                              className="rounded-full px-2.5 py-1 text-[11px] font-600"
                              style={{
                                fontWeight: 600,
                                background:
                                  item.badge.tone === "amber"
                                    ? "var(--amber-soft)"
                                    : "var(--accent-soft)",
                                color:
                                  item.badge.tone === "amber" ? "#a05e12" : "var(--accent)",
                              }}
                            >
                              {item.badge.label}
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-[15px] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
