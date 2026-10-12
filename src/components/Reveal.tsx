"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Bewust ingehouden: content staat standaard al zichtbaar (geen fade-per-sectie).
   Alleen een lichte, snelle verschuiving vanaf een al-zichtbaar startpunt,
   zodat de pagina nooit "verstopt" is achter een animatie die niet vuurt.
   Craft floor: exponential ease-out from an already-visible default. */
export function Reveal({
  children,
  delay = 0,
  y = 10,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
