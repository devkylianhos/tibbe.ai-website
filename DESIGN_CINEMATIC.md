# Cinematic homepage

Reference: user-supplied Nexeus specification, adapted to Tibbe and Dutch copy as explicitly requested. This concrete source takes precedence over the general skill preference to synthesize several references.

| Decision | Source | Application |
| --- | --- | --- |
| Full-viewport alpine video | User's exact media URLs | Same video, poster and crop rules; no substituted artwork |
| Left hero and glass footer | 1600 × 780 source artboard | Preserve positions, blur, gradients and scaled dimensions |
| Display and body typography | Source font specifications | Instrument Serif 400 and Plus Jakarta Sans 400/500 |
| Dutch content and working links | User's clarification and existing site | Tibbe copy, WhatsApp CTA, existing information and legal pages |
| Footer column spacing | Dutch labels | Slightly wider final column to keep real labels readable |
| Existing detail content | Current Website component | Retained under /over-tibbe with sitemap entry |
| Entrance and reduced motion | Source timeline; craft accessibility guide | WAAPI entrance, visible without JS, pause video for reduced motion |

`index.html` is the standalone English reference export, with inline CSS/JS and external source media/fonts. It is separate from the Next.js homepage and does not load analytics. The prompt omits several referenced mobile font clamps; those missing values are filled conservatively, so exact pixel parity cannot be certified without the original screenshot/source.

Validation: visual checks at 1600×780, 1440×900, 2560×1080, 768×1024, 390×844, and 320×568. Short phones scroll to keep footer content reachable. Cookie consent remains in the shared root layout.
