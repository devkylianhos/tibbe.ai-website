import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function SectionLabel({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <p className="web-label">
      {number && <span>{number} /</span>} {children}
    </p>
  )
}

export function ActionLink({
  children,
  href = '#contact',
  secondary = false,
  className = '',
}: {
  children: ReactNode
  href?: string
  secondary?: boolean
  className?: string
}) {
  return (
    <a
      className={`web-action ${secondary ? 'web-action--secondary' : ''} ${className}`}
      href={href}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  )
}
