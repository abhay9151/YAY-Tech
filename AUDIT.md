# Existing Site Audit

## Application and routes

- React 18 + TypeScript + Vite; Tailwind CSS 3.4; strict TypeScript settings.
- `src/App.tsx` defines `/`, `/services`, `/portfolio`, `/work` (alias), `/contact`, and a catch-all 404 route inside the shared `Layout`.
- `HomePage` composes Hero, Stats, Services, Process, Why Choose Us, Portfolio, Testimonials, Workspace, CTA, and Contact sections.
- Services, Portfolio, Contact, and Not Found have dedicated page components.

## Shared components

- Layout: `Navbar`, route outlet, and `Footer`.
- Sections: `HeroSection`, `StatsSection`, `ServicesSection`, `ProcessSection`, `WhyChooseUsSection`, `PortfolioSection`, `TestimonialsSection`, `WorkspaceSection`, `CtaBannerSection`, `ContactSection`.
- UI: `Badge`, `Button`, `Card`, `Container`, `Marquee`, `Modal`, `Reveal`, `SectionHeading`; `cn` utility in `src/lib/utils.ts`.
- Existing motion uses Framer Motion, CSS marquee animations, and Lenis initialized in `Layout`.

## Content and assets

- `src/data/siteContent.ts` contains company copy/contact/socials, navigation, stats, six services, four process steps, three differentiators, three projects, five testimonials, and footer link groups.
- Local assets include company logo variants, hero/profile photos, and images for the three portfolio projects.
- No supplied client-logo collection, showreel video, or editorial/blog articles were found. Add these only as explicitly labeled placeholders; no factual article or client claims should be fabricated.

## Styling and dependencies

- The original Tailwind theme used light tinted surfaces plus multiple accent hues; see `COLOR_AUDIT.md` for the monochrome conversion.
- Space Grotesk and Instrument Sans load from Google Fonts in `index.html`.
- Framer Motion, Lenis, and Lucide React are already dependencies. GSAP and ScrollTrigger are not installed.
- Vite serves on port 3000; `npm run build` runs TypeScript and the production bundle.
