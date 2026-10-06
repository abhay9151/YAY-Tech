# YAY Tech Color Audit

## Scope and result

Searched the Tailwind theme, global CSS, HTML metadata, page and section components, inline styles, animation definitions, SVG/icon markup, content data, and public image references. No Lottie files or authored SVG asset files are present. GSAP and Framer Motion animate geometry, opacity, and transforms only; they do not animate color values.

## Before / after mapping

| File or resource | Previous color usage | Monochrome replacement |
|---|---|---|
| `tailwind.config.js` | Tinted off-whites and grays, violet, lime, mint, emerald, cyan, amber, indigo, and colored shadow tokens | Only black, white, the specified neutral gray scale, and semantic tokens: `background`, `foreground`, `muted`, `muted-foreground`, `border`, `surface`, `inverse-background`, `inverse-foreground` |
| `src/index.css` | Violet focus/scrollbar/section dots, lime selection, warm-tinted page and scrollbar surfaces, and a global grayscale media filter | Black focus/hover/selection, white selection text, neutral gray scrollbar, semantic section colors, and subtle neutral grain/glow on dark surfaces; no media filters |
| `index.html` | Tinted body classes, tinted browser theme color, original color favicon and social preview | Semantic body classes, `#FAFAFA` theme color, monochrome wordmark favicon, and the original full-color hero photo for Open Graph/Twitter previews |
| `src/components/sections/HeroSection.tsx` | Violet and lime marquee pills, colored badge, and a muted image overlay | Black/white and light-gray pill fills, black badge, outlined headline emphasis, and the original full-color image without a tint overlay |
| `src/components/sections/ReelSection.tsx`, `InsightsSection.tsx`, `CtaBannerSection.tsx` | Violet/green/gold media gradients, colored decorative marks, and tinted dark surfaces | Full-color showreel image and poster without desaturation or a full-card overlay; black/white surfaces and details, neutral-only gradients and glows |
| `src/components/layout/Navbar.tsx`, `Footer.tsx`, `PageLoader.tsx` | Lime menu/hover accents, violet focus and links, colored loader marks | Light/dark adaptive black-and-white controls and loader; neutral underlines, borders, and focus rings |
| `src/components/ui/Button.tsx`, `Badge.tsx`, `Modal.tsx`, `SectionHeading.tsx` | Violet/emerald/amber variants, colored glows, and focus rings | Monochrome variants and black shadows; former variant roles remain distinguishable by labels/icons and borders |
| `src/components/sections/ContactSection.tsx` | Red invalid states, green success state, violet focus, tinted gradients | Thick black invalid borders with error icons/text, black-on-white success indicator, black focus and neutral gradients |
| `src/components/sections/ServicesSection.tsx`, `PortfolioSection.tsx`, `ProcessSection.tsx`, `StatsSection.tsx`, `TrustSection.tsx` | Accent-colored headings, stars, pills, borders, and image treatments | Semantic black/white/light-gray treatments, gray dividers, and original-color project/service imagery |
| `src/components/sections/WhyChooseUsSection.tsx`, `TestimonialsSection.tsx`, `WorkspaceSection.tsx` | Green/blue/purple icons and headings, colored ambient glows, tinted card/map imagery | Black/gray details and neutral shadows; portraits and the embedded map retain their original colors |
| `src/components/layout/Layout.tsx`, `src/pages/ServicesPage.tsx`, `PortfolioPage.tsx`, `ContactPage.tsx`, `NotFoundPage.tsx` | Legacy paper/ink names, colored 404 gradient, and tinted body text | Semantic surface/text tokens and a neutral black-to-gray 404 gradient |
| `src/data/siteContent.ts` | Unused blue/green/purple presentation-color fields on differentiators | Removed unused color fields; copy and displayed content are unchanged |
| `public/assets/*.png`, `*.jpeg` and rendered `src/assets/*` images | Source photography, logos, and project screenshots can contain color | Original media files render without grayscale filters or blend modes; the monochrome favicon is retained for the wordmark |
| `README.md`, `DESIGN_NOTES.md`, `UPGRADE_NOTES.md`, `AUDIT.md` | Earlier theme documentation described tinted and accent palettes | Theme guidance now documents semantic monochrome tokens |

## Approved values

- Black: `#000000`; large dark surface: `#0A0A0A`
- White: `#FFFFFF`
- Neutral grays: `#FAFAFA`, `#F2F2F2`, `#E5E5E5`, `#CFCFCF`, `#A3A3A3`, `#737373`, `#525252`, `#3A3A3A`, `#1F1F1F`, `#111111`

The original source photographs and logo files remain intact and render without grayscale filters or blend modes. Client names in the collaboration ticker remain text wordmarks; the monochrome favicon is retained as a brand mark, while social previews use the original full-color hero photo.
