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
