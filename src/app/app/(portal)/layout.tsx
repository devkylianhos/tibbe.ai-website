import { redirect } from "next/navigation";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { currentUser, signOut } from "@/lib/session";

const navItems = [
  { href: "/app", label: "Overzicht" },
  { href: "/app/koppelingen", label: "Koppelingen" },
];

async function logout() {
  "use server";
  await signOut();
  redirect("/app/login");
}

export const metadata = { robots: { index: false, follow: false }, title: "Dashboard — Tibbe" };

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if (!user) redirect("/app/login");

  return (
    <div className="flex min-h-screen">
      {/* sidebar */}
      <aside className="hidden w-[230px] flex-none flex-col border-r border-border bg-white/60 p-6 md:flex">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-[20px]" style={{ fontWeight: 600 }}>
            Tibbe
          </span>
        </Link>
        <nav className="mt-10 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[3px] px-3.5 py-2.5 text-[15px] font-500 text-muted-fg transition-colors hover:bg-sand hover:text-foreground"
              style={{ fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}
          <span className="cursor-default rounded-[3px] px-3.5 py-2.5 text-[15px] text-muted-fg/50">
            Facturatie · later
          </span>
          <span className="cursor-default rounded-[3px] px-3.5 py-2.5 text-[15px] text-muted-fg/50">
            Instellingen · later
          </span>
        </nav>
        <div className="mt-auto border-t border-border pt-4">
          <div className="truncate text-[13px] text-muted-fg">{user}</div>
        </div>
      </aside>

      {/* content */}
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="truncate text-[13px] font-500 text-muted-fg md:hidden" style={{ fontWeight: 500 }}>
            {user}
          </span>
          <div className="ml-auto flex items-center gap-4">
            <form action={logout}>
              <button
                type="submit"
                className="text-[14px] font-500 text-muted-fg transition-colors hover:text-foreground"
                style={{ fontWeight: 500 }}
              >
                Uitloggen
              </button>
            </form>
          </div>
        </header>
        <main className="mx-auto max-w-[900px] px-6 py-10">{children}</main>
      </div>
    </div>
  );
}
