import { Reveal } from "./Reveal";
import { integrations } from "@/lib/site";

const stats = [
  { value: "7", label: "taken, één medewerker" },
  { value: "1 week", label: "en hij is aan het werk" },
  { value: "24/7", label: "aan het werk, ook 's nachts" },
  { value: "€ 250", label: "per maand, tijdens de beta" },
];

export function IntegrationsStats() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="rounded-[3px] bg-sand px-6 py-10 sm:px-12 sm:py-12">
            <p className="text-center text-[14px] font-500 text-muted-fg" style={{ fontWeight: 500 }}>
              Werkt met de programma&apos;s die je nu al gebruikt
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-border bg-white px-4 py-2 text-[15px] font-600"
                  style={{ fontWeight: 600 }}
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="mx-auto mt-10 grid max-w-[860px] grid-cols-2 gap-8 border-t border-[#e3d9cb] pt-9 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-[34px] leading-none text-foreground" style={{ fontWeight: 700 }}>
                    {s.value}
                  </div>
                  <div className="mt-2 text-[13px] leading-snug text-muted-fg">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
