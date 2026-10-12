"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./CookieBanner.module.css";
import { applyAnalyticsConsent, CONSENT_KEY, readAnalyticsConsent, saveAnalyticsConsent, type AnalyticsConsent } from "@/lib/analytics";

const OPEN = "tibbe-cookie-notice-open";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const consent = readAnalyticsConsent();
      applyAnalyticsConsent(consent);
      setVisible(consent === null);
    }, 300);
    const open = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setVisible(true);
      window.requestAnimationFrame(() => closeButton.current?.focus());
    };
    const sync = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY || event.key === null) {
        const consent = readAnalyticsConsent();
        applyAnalyticsConsent(consent);
        setVisible(consent === null);
      }
    };
    window.addEventListener(OPEN, open);
    window.addEventListener("storage", sync);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN, open);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const choose = (consent: AnalyticsConsent) => {
    saveAnalyticsConsent(consent);
    setVisible(false);
    returnFocus.current?.focus();
    returnFocus.current = null;
  };
  if (!visible) return null;
  return (
    <section className={styles.banner} aria-labelledby="cookie-notice-title">
      <span className={styles.label}>COOKIES & PRIVACY</span>
      <h2 id="cookie-notice-title">Jij kiest wat je deelt.</h2>
      <p>We onthouden je sessie en cookievoorkeur. Met jouw toestemming meten we ook websitebezoek met Google Analytics. Geen advertentiecookies.</p>
      <div className={styles.actions}>
        <button type="button" ref={closeButton} onClick={() => choose("denied")}>Alleen noodzakelijk</button>
        <button type="button" onClick={() => choose("granted")}>Analytics toestaan</button>
      </div>
      <a className={styles.details} href="/cookies">Lees ons cookiebeleid <span aria-hidden="true">↗</span></a>
    </section>
  );
}
export function CookieSettingsButton() {
  return <button className="btn-secondary sm" onClick={() => window.dispatchEvent(new Event(OPEN))}>Cookievoorkeuren wijzigen</button>;
}
