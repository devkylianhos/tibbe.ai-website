'use client'

import { useState } from 'react'

type LogoProps = { inverse?: boolean; compact?: boolean; className?: string }

export function Logo({ inverse = false, compact = false, className = '' }: LogoProps) {
  const stroke = inverse ? '#4FA3C4' : '#14657F'
  const [replay, setReplay] = useState(0)
  return (
    <span className={`logo logo--animated ${compact ? 'logo--compact' : ''} ${className}`}
      onPointerEnter={() => setReplay((value) => value + 1)}>
      <svg key={replay} viewBox="0 0 64 64" aria-hidden="true">
        <path
          className="logo__guide"
          d="M22 8V46C22 53 28 56 35 56C47 56 55 48 55 38C55 28 48 22 38 22H12"
          fill="none" stroke={stroke} strokeWidth="8"
          strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          className="logo__draw"
          pathLength="100"
          d="M22 8V46C22 53 28 56 35 56C47 56 55 48 55 38C55 28 48 22 38 22H12"
          fill="none"
          stroke={stroke}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path className="logo__light" pathLength="100"
          d="M22 8V46C22 53 28 56 35 56C47 56 55 48 55 38C55 28 48 22 38 22H12"
          fill="none" stroke={inverse ? '#D6F2FC' : '#73BBD1'} strokeWidth="4"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && <span style={{ color: inverse ? '#F2EFE9' : '#23211D' }}>tibbe</span>}
    </span>
  )
}
