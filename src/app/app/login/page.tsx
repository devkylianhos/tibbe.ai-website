import { redirect } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { AUDIT_URL } from "@/lib/site";
import { currentUser, signIn } from "@/lib/session";

async function login(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "");
  if (!email.includes("@")) return;
  await signIn(email);
  redirect("/app");
}

export const metadata = { title: "Inloggen — Tibbe" };

export default async function LoginPage() {
  const user = await currentUser();
  if (user) redirect("/app");

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-[420px] rounded-[3px] border border-border bg-white p-8">
        <BrandMark size={34} />
        <p className="eyebrow mt-6">Inloggen</p>
        <h1 className="mt-3 font-display text-[28px] leading-[1.1]" style={{ fontWeight: 700 }}>
          Open je Tibbe-dashboard
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-fg">
          Vul je e-mailadres in om verder te gaan.
        </p>
        <form action={login} className="mt-6 flex flex-col gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="jij@jouwbedrijf.nl"
            className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-accent"
          />
          <button type="submit" className="btn-primary w-full">
            Verder
          </button>
        </form>
        <p className="mt-5 text-center text-[13px] text-muted-fg">
          Nog geen Tibbe?{" "}
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-600 text-accent"
            style={{ fontWeight: 600 }}
          >
            Plan een gratis workflow-audit
          </a>
        </p>
      </div>
    </main>
  );
}
