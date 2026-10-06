# YAY Tech UI Upgrade

## What changed

- Preserved the existing React routes, `siteContent.ts` copy, contact flow, and project data.
- Reworked the home hero, services, work, process gallery, stats, trust ticker, CTA, and footer around large Space Grotesk headlines, pill controls, thin dividers, rounded imagery, and a strict monochrome palette.
- Added a full-screen keyboard-accessible navigation overlay, route transitions, a short intro loader, interactive project/service previews, and a reel placeholder modal.
- Added GSAP/ScrollTrigger reveal/parallax effects and wired Lenis to the GSAP ticker. Scroll-triggered contexts and Lenis listeners clean up on unmount.
- Added an Insights panel whose article content remains visibly marked as a placeholder because no blog copy or article artwork was supplied.
- Reused only the site's current local hero and project imagery where possible. Existing remote service photos remain in the content data.

## New or updated components

- New: `TrustSection`, `ReelSection`, `InsightsSection`, `PageLoader`, and `useSmoothScroll`.
- Updated: Navbar, Footer, Hero, Stats, Services, Process, Portfolio, Testimonials, Workspace, Contact, CTA, Modal, Button, SectionHeading, and Marquee.
- Existing routes remain `/`, `/services`, `/portfolio`, `/work`, `/contact`, and the 404 fallback.

## Tweaking the design

- Colors and typography live in `tailwind.config.js`: semantic monochrome tokens, neutral grays, and the display/body font families.
- Font imports are in `index.html`. Space Grotesk is the display face; Instrument Sans is the body face.
- Headline clamp sizes are `display-lg`, `display-xl`, `display-2xl` in Tailwind and the hero's responsive `clamp()` class.
- Marquee speeds are the `slow`, `normal`, and `fast` values in `src/components/ui/Marquee.tsx`; the footer and hero marquees use their Tailwind animation classes.
- GSAP scroll trigger ranges and scrub values are configured in `ReelSection`, `ProcessSection`, and `InsightsSection`.
- Company text, contacts, services, projects, testimonials, navigation, and footer links are editable in `src/data/siteContent.ts`.

## Motion and accessibility

- `prefers-reduced-motion` disables smooth scrolling and GSAP parallax and reduces entrance/marquee motion.
- Main menu has Escape handling and a keyboard focus loop; modal has Escape dismissal and restores prior body scroll state.
- Images are lazy-loaded outside the hero and include meaningful alternative text where they communicate content.

## Run and verify

```bash
npm install
npm run dev
npm run build
```
