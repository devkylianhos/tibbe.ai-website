"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { nav, BOOKING_URL } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all"
      style={{
        background: scrolled ? "rgba(250, 250, 250, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-[21px]" style={{ fontWeight: 600 }}>
            Tibbe
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-500 text-muted-fg transition-colors hover:text-foreground"
              style={{ fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={BOOKING_URL} className="btn-primary sm">
          Plan een kennismaking
        </a>
      </div>
    </header>
  );
}
