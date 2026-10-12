# Tibbe motion layer — preview only

Preserve the current homepage, colors, type, section order, content, routes and analytics. Do not merge or publish to production without the user's explicit approval.

## References actually retrieved through MotionSites MCP

- [Nexora Automation](https://motionsites.ai/?prompt=nexora-hero): graduated hero timing, 10–30px entrance travel, headline before supporting copy and UI. Borrow only motion sequencing, not its branding, video, layout or fonts.
- [Pixel Grid Hover](https://motionsites.ai/?prompt=pixel-grid-hover): cubic-bezier(.22,1,.36,1), 0.1s staggered reveals, pointer-responsive pixel details. Adapt into Tibbe's existing workflow illustration and service rows; do not import its image cards, marquee or case-study claims.
- Existing Tibbe motion and Refero's motion craft reference: concise feedback, reduced-motion handling, visible content without JavaScript.

## Decisions

| Area | Added behavior | Guardrail |
| --- | --- | --- |
| Hero | Masked line entrance; staggered copy and workflow illustration | Same text, line breaks and layout |
| Workflow | Source → decision → evidence sequence, travelling signal, pixel accents | Stops on hover/focus, out of view, background tabs, reduced motion, manual pause; selection ends auto-cycling |
| Sections | Sequenced reveals and headline masks | Visible server-rendered content, one entrance per mount, cancel effects on cleanup |
| Process | Scroll progress along the existing connector, progressive step emphasis | Passive listener, one scheduled frame, no scroll hijacking |
| Services | Staggered preview details and localized grid hover | Same tabs, keyboard controls, copy and CTA targets |
| Controls | Magnetic CTA and crisp icon movement; global homepage pause control | Reduced motion and manual pause disable the added effects |

No new packages or remotely executed MotionSites scripts. MotionSites is a prompt library: the adapted implementation is local React, CSS and Web Animations API.

Validation: production build, lint, existing tests, browser checks for auto sequence and manual pause, reduced motion, desktop/mobile overflow, existing routes, no-JS content, service tabs and no browser errors. Preview deployment only; production remains unchanged.

## Supplied Vesper visual reference (12 October 2026)

Primary reference remains the existing Tibbe website. The supplied Vesper brief owns only the decorative particle-wave media, glass surfaces and metallic hover finish. Tibbe retains its logo, Schibsted/mono typography, charcoal/paper/deepwater palette, copy, navigation, section order and routes. The reference's single-viewport layout, alternate branding and invented statistics are not adopted.

Media source: user-supplied CloudFront MP4, `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4`. Self-hosted derivative: 1280px H.264, silent, about 746 KiB; poster: 54 KiB. The visual fills the right side of the existing hero and sits behind its workflow. Edge masking keeps the original text readable. On mobile it is positioned behind the workflow below the copy.

| Decision | Source / role | Implementation |
| --- | --- | --- |
| Particle wave | Supplied decorative hero visual | Local video with static poster; no external runtime requests |
| Glass surfaces | Vesper secondary surface treatment | Existing source node and process selector, readable solid fallback |
| Metallic finish | Vesper button/card detail | Deepwater CTA, light paper result card, Tibbe core; existing shapes retained |
| Media lifecycle | Existing Tibbe motion controls | Download only when enabled and visible; pause offscreen, in background tabs and on manual/system pause |

Visual QA: desktop 1440px, mobile 390px and 320px; no horizontal overflow, no browser errors. Video playback, pause/resume, offscreen pause and reduced-motion (zero MP4 requests) checked in the browser. Lint, six tests and production build pass. All changes remain in the feature branch/local preview; no production deployment.
