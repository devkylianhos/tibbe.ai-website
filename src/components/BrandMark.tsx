/** Compact version of the current Tibbe loop, also used in the customer portal. */
export function BrandMark({ size = 28, color = '#14657F' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M22 8V46C22 53 28 56 35 56C47 56 55 48 55 38C55 28 48 22 38 22H12"
        stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
