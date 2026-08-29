import { Check, Plug } from "lucide-react";
import { redirect } from "next/navigation";
import { currentUser } from "@/lib/session";
import {
  toolkits,
  authConfigIdFor,
  connectionsByAuthConfig,
  composioConfigured,
} from "@/lib/portal";

export default async function KoppelingenPage() {
  const user = await currentUser();
  if (!user) redirect("/app/login");
  const connections = await connectionsByAuthConfig(user);
  const configured = composioConfigured();

  return (
    <div>
      <h1 className="font-display text-[34px] leading-[1.1]" style={{ fontWeight: 700 }}>
        Koppel je <span className="text-accent">tools</span>
      </h1>
      <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-muted-fg">
        Eén klik per tool. Je keurt de koppeling goed op het scherm van de
        aanbieder zelf, dus geen API-sleutels plakken en je inloggegevens raken
        dit dashboard nooit. Tibbe gebruikt een koppeling alleen als het werk
        erom vraagt.
      </p>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {toolkits.map((toolkit) => {
          const acId = authConfigIdFor(toolkit);
          const status = acId ? connections.get(acId) : undefined;
          const isActive = status === "ACTIVE";
          const isPending = status === "INITIATED";
          const available = configured && Boolean(acId);

          return (
            <div key={toolkit.slug} className="card flex flex-col">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-[3px] bg-accent-soft text-accent">
                  <Plug size={19} />
                </span>
                {isActive && (
                  <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-[12px] font-600 text-accent" style={{ fontWeight: 600 }}>
                    <Check size={13} />
                    gekoppeld
                  </span>
                )}
                {isPending && (
                  <span className="rounded-full bg-amber-soft px-3 py-1 text-[12px] font-600 text-[#a05e12]" style={{ fontWeight: 600 }}>
                    bezig...
                  </span>
                )}
              </div>
              <h2 className="mt-4 font-display text-[19px]" style={{ fontWeight: 700 }}>
                {toolkit.label}
              </h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted-fg">
                {toolkit.description}
              </p>
              <div className="mt-auto pt-5">
                {isActive ? (
                  <span className="text-[13px] text-muted-fg">
                    Verbonden en klaar voor gebruik.
                  </span>
                ) : available ? (
                  <a
                    href={`/api/koppelingen/connect?toolkit=${toolkit.slug}`}
                    className="btn-primary sm w-full"
                  >
                    Koppel {toolkit.label}
                  </a>
                ) : (
                  <span className="inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-2.5 text-[14px] text-muted-fg/70">
                    binnenkort beschikbaar
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-[13px] text-muted-fg">
        Beveiligd via beheerde OAuth. Je tokens raken dit dashboard nooit.
      </p>
    </div>
  );
}
