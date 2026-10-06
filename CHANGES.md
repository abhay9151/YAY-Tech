# Media Color and Monochrome UI Update

## Full-color media restored

- Removed the site-wide grayscale filter from images, videos, and embedded media in `src/index.css`.
- Removed the luminosity blend, reduced opacity, and full-card dark overlay from the showreel image in `src/components/sections/ReelSection.tsx`; the poster in its modal is full opacity too.
- Removed the dark image overlays from `src/components/sections/HeroSection.tsx` and `src/components/sections/PortfolioSection.tsx`.
- Kept the original image files untouched and changed the Open Graph and Twitter preview to the original full-color hero photo in `index.html`.
- Client names remain monochrome wordmarks in the collaboration marquee; this is the cleaner, more consistent treatment for the existing text-only logo row.

## Monochrome depth and polish

- Added a restrained neutral radial glow and low-opacity grayscale film grain to dark sections in `src/index.css`.
- Added soft white ambient shadows to the dark CTA and Insights cards.
- Added outlined headline emphasis and a slightly stronger image hover zoom without changing text or layout.

The monochrome favicon remains a black-and-white wordmark. Existing routes, copy, form behavior, and animation logic are unchanged.
