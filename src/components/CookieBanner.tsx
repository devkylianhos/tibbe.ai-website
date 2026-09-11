"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./CookieBanner.module.css";

const KEY = "tibbe-cookie-notice-v1";
const OPEN = "tibbe-cookie-notice-open";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setVisible(localStorage.getItem(KEY) !== "dismissed"); }
      catch { setVisible(true); }
    }, 300);
    const open = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setVisible(true);
      window.requestAnimationFrame(() => closeButton.current?.focus());
    };
    const sync = (event: StorageEvent) => {
      if (event.key === KEY) setVisible(event.newValue !== "dismissed");
    };
    window.addEventListener(OPEN, open);
    window.addEventListener("storage", sync);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN, open);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const dismiss = () => {
    try { localStorage.setItem(KEY, "dismissed"); } catch { /* Close even when storage is unavailable. */ }
    setVisible(false);
    returnFocus.current?.focus();
    returnFocus.current = null;
  };
  if (!visible) return null;
  return (
    <section className={styles.banner} aria-labelledby="cookie-notice-title" onKeyDown={(event) => { if (event.key === "Escape") dismiss(); }}>
      <span className={styles.label}>COOKIES & PRIVACY</span>
      <h2 id="cookie-notice-title">Alleen wat nodig is.</h2>
      <p>We gebruiken functionele opslag voor je sessie en om deze melding te onthouden. Geen analytics- of marketingcookies.</p>
      <div className={styles.actions}>
        <a href="/cookies">Meer informatie</a>
        <button ref={closeButton} onClick={dismiss}>Begrepen</button>
      </div>
    </section>
  );
}
export function CookieSettingsButton() {
  return <button className="btn-secondary sm" onClick={() => window.dispatchEvent(new Event(OPEN))}>Cookiemelding bekijken</button>;
}
