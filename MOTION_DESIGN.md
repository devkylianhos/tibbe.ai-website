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

## Supplied Meridian horses reference

Added the user's engraved horses-and-coach video below the existing footer links. The footer uses Tibbe paper, ink, logo and fonts, with the original navigation and legal links intact. Multiply blending removes the white media background; grayscale keeps the engraving within Tibbe's ink palette. Extra empty sky is cropped from the locally hosted video, while responsive framing keeps the coach visible below the text. The page retains its normal scrolling layout.

Source: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260928_144832_2b6b23aa-4416-4fcb-9df4-132349c59edc.mp4

Hero and footer share ViewportVideo: deferred download on entry, background/offscreen pause, system reduced-motion poster and global manual pause. A second control in the footer makes pausing available next to the horses. Browser checks cover lazy download, scroll playback, pause/resume, reduced-motion and 320/390/768/1440/2560px without horizontal overflow. Lint and production build pass. Preview only.

## Calmer hero revision

User feedback: the hero feels too busy. Lowered the particle-wave opacity to 18–22%, removed animated pixel accents, orbital rings, travelling signal and progress timer, and removed pointer tilt. The workflow now changes only when a visitor selects Signaal/Besluit/Bewijs. Headline entrance, branding, layout, copy and footer remain intact. This supersedes the earlier automatic hero sequencing decision. Verified stable initial stage, manual selection, desktop/mobile rendering, lint and production build.

## Cinematic composition revision

Following the supplied Velorah reference and the user's request to develop a stronger overall direction, the hero now uses a centered, full-height composition: one large two-line headline, one primary action, a restrained full-bleed particle visual and a translucent navigation surface. Retained Tibbe logo, Schibsted type, existing hero wording and deepwater color family. The abstract visual remains the supplied particle wave; the unrelated starry/flowers video is not used. Removed the redundant workflow illustration from the hero; existing capabilities and interactive experience sections continue to explain the product. Other sections, routes and the horses footer are unchanged.

This supersedes the previous two-column/manual workflow hero decisions. Validated desktop 1440px and 320/390/768px widths, CTA anchor, mobile menu, video pause, no browser errors, lint and production build. Preview only. Existing accessibility findings from the earlier audit remain separate outstanding items.

## MKB positioning and simplified information architecture

User-approved direction: specialize in connecting the online customer journey to daily operations. Websites/webshops, connected software and AI support form one coherent offer. Preserve the visual system, cinematic media, routes and horses footer.

Replaced seven technical service tabs with three always-visible service explanations. Removed the repeated seven-service accordion from the homepage. Reframed the hero as “Van klantvraag naar actie” and replaced the invoice/Mission Control demo with a clearly fictional installation-company enquiry: website request → team → AI-prepared follow-up → human approval. The interactive approval/rejection/source/reset behavior remains, with no real sending. The next section explains the agency engagement in plain Dutch, followed by software examples, control principles, founder, FAQs and contact. Updated page metadata and form wording to match. Section labels now use full opacity for readable contrast.

Validation: lint, six existing tests, production build, three visible service areas and no tab controls, demo approve/reject/reset/source, all internal anchors, preserved public routes, desktop/mobile screenshots (320/390/768/1440px), no horizontal overflow or page errors. The automated WCAG A/AA scan of the current homepage in reduced-motion mode reports no violations; this is not a complete assistive-technology audit. Previously documented issues on other routes remain outside this content revision.

## Site-wide alignment and GitHub handoff

Expanded the same MKB positioning to public routes and shared navigation. Added /websites and /automatisering; rebuilt /webshops around building a shop, connecting orders and supporting customer questions. /launch remains accessible as “Start met Tibbe”, replacing the expired launch countdown and placeholder scarcity. Shared service-page layout keeps the current Tibbe hero, colors, motion controls and type. Added homepage/footer service links and sitemap entries; fixed old homepage anchor targets.

Shared footer, login/dashboard labels and privacy terminology now use the same plain-language framing. Existing AI subscription prices, guarantee, cancellation and liability text are retained; the conditions page explains that the existing subscription terms concern that service, with project scope/price/planning handled in a separate proposal. This is copy alignment, not a legal review or newly approved project contract.

Removed the legacy Reveal opacity effect to avoid faded text under reduced motion. Fixed legal text/table wrapping on narrow screens. Validation: lint, six tests, production build; nine routes (homepage, websites, webshops, automation, start, privacy, terms, cookies, login) return 200 and have one h1; internal hash targets resolve; desktop and 320/390px show no overflow after layout settles; no browser errors. Automated WCAG A/AA scans report no violations across those nine pages in reduced-motion mode. Physical device/Safari and authenticated workflows remain unverified. GitHub feature branch only, no production publication.
