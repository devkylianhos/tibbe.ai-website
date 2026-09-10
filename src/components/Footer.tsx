import { BrandMark } from "./BrandMark";
import { nav, BOOKING_URL, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="flex items-center gap-3">
              {/* Geanimeerd merkteken uit het pakket: de tik-draai loader (rustige 4.8s-variant) */}
              <span className="tibbe-loader slow inline-flex" aria-hidden>
                <BrandMark size={40} />
              </span>
              <span className="font-display text-[22px]" style={{ fontWeight: 600 }}>
                Tibbe
              </span>
            </a>
            <p className="mt-4 max-w-[240px] text-[14px] leading-[1.55] text-muted-fg">
              De medewerker die nooit stopt. Hij doet je mail, je facturen en
              het geregel, terwijl jij het echte werk doet.
            </p>
          </div>

          <div>
            <div className="text-[13px] font-600 uppercase tracking-[0.12em] text-muted-fg/70">
              Product
            </div>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[15px] text-foreground/80 hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/webshops" className="text-[15px] text-foreground/80 hover:text-accent">
                  Voor webshops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-600 uppercase tracking-[0.12em] text-muted-fg/70">
              Aan de slag
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={BOOKING_URL} className="text-[15px] text-foreground/80 hover:text-accent">
                  Plan een kennismaking
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  className="text-[15px] text-foreground/80 hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="/launch" className="text-[15px] text-foreground/80 hover:text-accent">
                  Launch
                </a>
              </li>
              <li>
                <a href="/app" className="text-[15px] text-foreground/80 hover:text-accent">
                  Inloggen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-600 uppercase tracking-[0.12em] text-muted-fg/70">
              Bedrijf
            </div>
            <address className="mt-4 space-y-1 text-[15px] not-italic leading-relaxed text-muted-fg">
              <div className="text-foreground/90">Tibbe</div>
              <div>Parelweg 11</div>
              <div>1812 RS Alkmaar, NL</div>
              <div>KvK 80015298</div>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[13px] text-muted-fg sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Tibbe</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-accent">Privacy</a>
            <a href="/voorwaarden" className="hover:text-accent">Voorwaarden</a>
            <a href="/cookies" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
