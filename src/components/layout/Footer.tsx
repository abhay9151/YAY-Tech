import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    Linkedin: <Linkedin className="h-4 w-4" />,
    Twitter: <Twitter className="h-4 w-4" />,
    Instagram: <Instagram className="h-4 w-4" />,
    Github: <Github className="h-4 w-4" />,
  };

  return (
    <footer id="footer" data-nav-section data-theme="dark" className="overflow-hidden bg-inverse-background pt-14 text-inverse-foreground sm:pt-20">
      <Container size="wide">
        <div className="grid gap-10 border-b border-inverse-foreground/15 pb-12 md:grid-cols-12 md:pb-16">
          <div className="md:col-span-5">
            <a href="/#home" className="inline-flex min-h-12 items-center gap-3">
              <span className="rounded-xl bg-surface px-2.5 py-1.5">
                <img src="/assets/Logo-B8NKkpMF.png" alt="" loading="lazy" className="h-8 w-auto" width="112" height="40" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">{siteContent.company.name}</span>
            </a>
            <p className="mt-5 max-w-md font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
              {siteContent.company.secondaryTagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-inverse-foreground/70">{siteContent.company.heroDescription}</p>
          </div>

          <div className="space-y-3 text-sm text-inverse-foreground/75 md:col-span-3 md:col-start-7">
            <p className="section-label before:bg-inverse-foreground text-inverse-foreground">Get in touch</p>
            <a href={`tel:${siteContent.company.contact.phone.replace(/\s+/g, '')}`} className="flex min-h-11 items-center gap-3 underline-offset-4 hover:underline">
              <Phone className="h-4 w-4 text-inverse-foreground" />{siteContent.company.contact.phone}
            </a>
            <a href={`mailto:${siteContent.company.contact.email}`} className="flex min-h-11 items-center gap-3 underline-offset-4 hover:underline">
              <Mail className="h-4 w-4 text-inverse-foreground" />{siteContent.company.contact.email}
            </a>
            <p className="flex items-start gap-3 pt-1 text-xs leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-inverse-foreground" />{siteContent.company.contact.address.short}
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-inverse-foreground/30 text-inverse-foreground transition-colors hover:bg-inverse-foreground hover:text-inverse-background md:col-span-1 md:col-start-12 md:justify-self-end"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-9 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {siteContent.footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-inverse-foreground">{column.title}</h2>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="group inline-flex min-h-9 items-center gap-1 text-xs leading-snug text-inverse-foreground/70 transition-colors hover:text-inverse-foreground hover:underline sm:text-sm">
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-inverse-foreground/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-[10px] leading-relaxed text-inverse-foreground/50 sm:text-left">
            © {new Date().getFullYear()} {siteContent.company.name} ({siteContent.company.legalName}). All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            {siteContent.company.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-inverse-foreground/25 text-inverse-foreground transition-colors hover:border-inverse-foreground hover:bg-inverse-foreground hover:text-inverse-background"
              >
                {icons[social.icon] ?? <span>{social.name[0]}</span>}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="overflow-hidden border-t border-inverse-foreground/15 py-3">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center gap-7 px-4 font-display text-[clamp(2.8rem,8vw,8rem)] font-medium uppercase leading-none tracking-[-0.06em] text-inverse-foreground">
              {siteContent.company.primaryTagline}
              <span className="text-inverse-foreground">✳</span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
