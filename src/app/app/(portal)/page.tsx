import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, Plug, Bot, LayoutDashboard } from "lucide-react";
import { currentUser } from "@/lib/session";
import {
  toolkits,
  authConfigIdFor,
  connectionsByAuthConfig,
  composioConfigured,
} from "@/lib/portal";

export default async function PortalOverview() {
  const user = await currentUser();
  if (!user) redirect("/app/login");
  const name = user.split("@")[0];
  const connections = await connectionsByAuthConfig(user);
  const active = toolkits.filter((t) => {
    const id = authConfigIdFor(t);
    return id && connections.get(id) === "ACTIVE";
  }).length;

  return (
    <div>
      <h1 className="font-display text-[34px] leading-[1.1]" style={{ fontWeight: 700 }}>
        Goedendag, <span className="text-accent">{name}</span>
      </h1>
      <p className="mt-2 text-[15px] text-muted-fg">
        Dit is de status van jouw Tibbe.
      </p>

      {/* volgende stap */}
      <div className="mt-8 flex flex-col items-start gap-4 rounded-[3px] border-2 border-accent bg-white p-6 sm:flex-row sm:items-center">
        <div className="flex-1">
          <div className="eyebrow">Volgende stap</div>
          <h2 className="mt-2 font-display text-[21px]" style={{ fontWeight: 700 }}>
            Koppel je tools
          </h2>
          <p className="mt-1.5 text-[14px] leading-relaxed text-muted-fg">
            Eén klik per tool. Tibbe gebruikt een koppeling alleen als het werk
            erom vraagt.
          </p>
        </div>
        <Link href="/app/koppelingen" className="btn-primary sm flex-none">
          Naar koppelingen
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* in één oogopslag */}
      <div className="mt-8">
        <div className="text-[13px] font-600 uppercase tracking-[0.1em] text-muted-fg/70" style={{ fontWeight: 600 }}>
          In één oogopslag
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="card">
            <span className="grid h-10 w-10 place-items-center rounded-[3px] bg-accent-soft text-accent">
              <Bot size={18} />
            </span>
            <div className="mt-4 text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
              Agent
            </div>
            <div className="mt-1 font-display text-[19px]" style={{ fontWeight: 700 }}>
              Wacht op koppelingen
            </div>
          </div>
          <div className="card">
            <span className="grid h-10 w-10 place-items-center rounded-[3px] bg-accent-soft text-accent">
              <Plug size={18} />
            </span>
            <div className="mt-4 text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
              Koppelingen
            </div>
            <div className="mt-1 font-display text-[19px]" style={{ fontWeight: 700 }}>
              {active} / {toolkits.length} verbonden
            </div>
          </div>
          <div className="card">
            <span className="grid h-10 w-10 place-items-center rounded-[3px] bg-accent-soft text-accent">
              <LayoutDashboard size={18} />
            </span>
            <div className="mt-4 text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
              Dashboard
            </div>
            <div className="mt-1 font-display text-[19px]" style={{ fontWeight: 700 }}>
              Komt na onboarding
            </div>
          </div>
        </div>
      </div>

      {!composioConfigured() && (
        <p className="mt-8 rounded-[3px] bg-amber-soft px-5 py-4 text-[14px] leading-relaxed text-[#7a4a0e]">
          De koppelingenlaag is nog niet geconfigureerd: er ontbreekt een
          COMPOSIO_API_KEY in de omgeving. Zie .env.example in de repo.
        </p>
      )}
    </div>
  );
}
