import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

/* Gedeelde opmaak voor de juridische pagina's. */
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="web-skip" href="#main-content">Naar de inhoud</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="container-x pt-32 pb-24 sm:pt-36">
        <div className="mx-auto max-w-[760px]">
          <h1 className="display-2">{title}</h1>
          <p className="mt-3 text-[14px] text-muted-fg">Laatst bijgewerkt: {updated}</p>
          <div className="legal-prose mt-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
