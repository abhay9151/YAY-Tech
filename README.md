# YAY Tech — Production Marketing Website

A modern, high-performance marketing website engineered with React 18, TypeScript, Tailwind CSS, Framer Motion, GSAP, ScrollTrigger, and Lenis smooth scrolling. Existing YAY Tech content and routes are retained.

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with a strict black, white, and neutral-gray palette plus semantic color tokens
- **Animation & Motion**: Framer Motion for interface motion; GSAP + ScrollTrigger for scroll effects
- **Smooth Scrolling**: Lenis (`lenis`) synchronized with the GSAP ticker and ScrollTrigger
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom` (multi-page support with deep hash anchor navigation)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken, production-ready static bundle in the `dist/` directory with zero TypeScript or bundling warnings.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deploy to Vercel

This project is configured for Vercel in [`vercel.json`](./vercel.json). Vercel will run `npm run build` and publish the generated `dist/` directory. The rewrite in that configuration supports React Router routes when someone opens or refreshes a URL such as `/services`, `/portfolio`, or `/contact`.

1. Push the project to a Git provider supported by Vercel (GitHub, GitLab, or Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import that repository.
3. Set the project root to the directory containing `package.json` and `vercel.json`. The build command and output directory are already configured.
4. Select **Deploy**. No environment variables or backend services are required for this frontend.

After the first deployment, pushes to the connected production branch create production deployments; other branches create preview deployments. Add a custom domain from the project’s **Settings → Domains** page if needed.

---

## 📁 Project Architecture & Directory Structure

```
├── public/
│   └── assets/                     # Authentic logos, hero imagery, project screenshots
├── src/
│   ├── assets/                     # Bundled image assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Adaptive navbar and keyboard-accessible full-screen menu
│   │   │   ├── Footer.tsx          # Dark brand footer, link directory, socials, marquee
│   │   │   └── Layout.tsx          # Root shell, route transitions, loader, Lenis/GSAP setup
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Oversized split headline and animated image feature
│   │   │   ├── TrustSection.tsx    # Opposing client-name marquees from project data
│   │   │   ├── ReelSection.tsx     # Interactive showreel placeholder and modal
│   │   │   ├── StatsSection.tsx    # 4 core metric callouts + service ticker
│   │   │   ├── ServicesSection.tsx # Filterable, expandable service rows
│   │   │   ├── ProcessSection.tsx  # Four-stage draggable image gallery
│   │   │   ├── WhyChooseUsSection.tsx # 3 core pillars (On-time, Expert team, Quality score)
│   │   │   ├── PortfolioSection.tsx # 3 client projects with interactive detail modal
│   │   │   ├── TestimonialsSection.tsx # Dual continuous marquee customer review feed
│   │   │   ├── WorkspaceSection.tsx# Google Maps embed, Indirapuram office & contact details
│   │   │   ├── InsightsSection.tsx # Editorial placeholders pending approved content
│   │   │   ├── CtaBannerSection.tsx # Dark CTA, capability list, and page links
│   │   │   └── ContactSection.tsx  # Interactive form with validation & success state
│   │   └── ui/
│   │       ├── Badge.tsx           # Pill badges with animated status indicators
│   │       ├── Button.tsx          # Motion-enabled pill button with variants & icons
│   │       ├── Card.tsx            # Neutral surface card with restrained shadow
│   │       ├── Container.tsx       # Standardized responsive container constraints
│   │       ├── Marquee.tsx         # Infinite scrolling ribbon ticker with pause-on-hover
│   │       ├── Modal.tsx           # Accessible overlay modal with ESC & backdrop dismiss
│   │       ├── Reveal.tsx          # Staggered viewport entrance motion wrapper
│   │       ├── SectionHeading.tsx  # Section label, divider, and responsive title
│   │       └── PageLoader.tsx      # Short reduced-motion-aware intro
│   ├── data/
│   │   └── siteContent.ts          # SINGLE SOURCE OF TRUTH for all site copy & data
│   ├── hooks/
│   │   └── useSmoothScroll.ts      # Lenis + GSAP ticker lifecycle
│   ├── lib/
│   │   └── utils.ts                # Class merging utility (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── HomePage.tsx            # Complete assembled marketing page
│   │   ├── ServicesPage.tsx        # Dedicated services overview page (/services)
│   │   ├── PortfolioPage.tsx       # Dedicated portfolio & case studies page (/portfolio)
│   │   ├── ContactPage.tsx         # Dedicated contact & workspace page (/contact)
│   │   └── NotFoundPage.tsx        # 404 error page with navigation fallback
│   ├── App.tsx                     # React Router tree configuration
│   ├── index.css                   # Custom scrollbars, glow utilities, base styling
│   └── main.tsx                    # React DOM entry point
├── AUDIT.md                        # Existing architecture and content audit
├── UPGRADE_NOTES.md                # UI upgrade and design-tuning notes
├── TODO.md                         # Placeholder assets & verification checklist
├── tailwind.config.js              # Custom color palette, typography clamp, animations
└── vite.config.ts                  # Vite build and path alias configuration
```

---

## ✏️ How to Edit Content in `src/data/siteContent.ts`

All marketing copy, pricing tiers, services, case studies, team contacts, and company data are centralized and strictly typed in:

👉 **[`src/data/siteContent.ts`](file:///Users/abhaypratapsingh/Desktop/Project%20Internship/src/data/siteContent.ts)**

You do not need to touch any UI component code to update content. Here are the main sections you can edit:

### 1. Company Information & Contact
Update phone number, email addresses, physical office address, or working hours in `siteContent.company`:
```typescript
company: {
  name: "YAY Tech",
  primaryTagline: "We Deliver Your Projects On Time, Every Time",
  contact: {
    phone: "+91 8941092513",
    email: "business@yaytech.in",
    address: {
      short: "Indirapuram, Ghaziabad, Uttar Pradesh, India",
      // ...
    }
  }
}
```

### 2. Services & Pricing Tiers
Add, remove, or modify services in `siteContent.services`:
```typescript
{
  id: "web-development",
  icon: "💻",
  title: "Web Development",
  category: "Development",
  description: "Custom websites and web applications built with modern technologies...",
  deliveryTime: "7-14 days",
  price: "₹29,999/-",
  rating: 4.98,
  reviewsCount: 127,
  features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
  image: "https://images.unsplash.com/photo-..."
}
```

### 3. Portfolio Case Studies
Update projects in `siteContent.portfolio`:
```typescript
{
  id: "gupta-law-offices",
  title: "GuptaLawOffices: Legal Services Website",
  category: "Web Development",
  description: "Developed a professional and fully responsive corporate website...",
  image: "/assets/GuptaLawOffices-cfwldCdE.png",
  tags: ["React", "Responsive UI", "SEO Architecture", "Legal Tech"],
  client: "Gupta Law Offices",
  completionTime: "12 Days"
}
```

### 4. Client Testimonials
Add or edit client quotes in `siteContent.testimonials`:
```typescript
{
  id: "t1",
  name: "Ujjwal Sharma",
  position: "Co-founder, Xcentic",
  text: "YAY Tech exceeded our expectations. Their disciplined adherence to delivery deadlines...",
  rating: 5,
  imageSrc: "/assets/profile-D9iN4Mzw.jpeg"
}
```

---

## 🎨 Design System & Theme Customization

Design tokens are configured in [`tailwind.config.js`](file:///Users/abhaypratapsingh/Desktop/Project%20Internship/tailwind.config.js):
- **Palette**: Black `#000000`, white `#FFFFFF`, and neutral grays `#FAFAFA` through `#111111`
- **Semantic tokens**: `background`, `foreground`, `muted`, `muted-foreground`, `border`, `surface`, `inverse-background`, and `inverse-foreground`
- **Display Typography**: `Space Grotesk` (Google Fonts)
- **Body Typography**: `Instrument Sans` (Google Fonts)
- **Fluid Type Scale**: `display-2xl` (`clamp(3rem, 7vw, 5.5rem)`), `display-xl` (`clamp(2.25rem, 5vw, 4rem)`)

---

## ♿ Accessibility & Responsiveness

- **Mobile First**: Fully fluid and tested across `360px`, `390px`, `768px`, `1024px`, `1280px`, and `1536px` without any horizontal scroll.
- **Touch Targets**: All interactive elements (buttons, drawer items, links) meet or exceed the recommended 44×44px touch target guidelines.
- **Motion Accessibility**: All animations automatically scale down or disable when `prefers-reduced-motion: reduce` is detected.
- **Keyboard Navigation**: Form inputs, buttons, and navigation items feature clear `focus-visible` outline rings.
