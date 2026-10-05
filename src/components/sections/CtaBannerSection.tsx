import React from 'react';
import { ArrowUpRight, MoveUpRight, Sparkles, Zap } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const CtaBannerSection: React.FC = () => (
  <section id="cta" data-nav-section data-theme="dark" className="relative overflow-hidden bg-night py-20 text-white sm:py-28 lg:py-36">
    <Container size="wide">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#100B1C] px-6 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-20 lg:py-24">
        <div className="pointer-events-none absolute -right-10 top-4 hidden h-48 w-48 animate-float-slow items-center justify-center rounded-full border border-violet/50 lg:flex">
          <div className="h-32 w-32 rounded-full border border-violet/40" />
          <div className="absolute h-px w-56 rotate-[-35deg] bg-violet/55" />
        </div>
        <Zap aria-hidden="true" className="pointer-events-none absolute right-[14%] top-[18%] hidden h-14 w-14 rotate-12 animate-float-slow fill-lime text-lime lg:block" />
        <Sparkles aria-hidden="true" className="pointer-events-none absolute right-[30%] top-[38%] hidden h-9 w-9 animate-pulse text-mint lg:block" />

        <div className="relative z-10 max-w-4xl">
          <p className="section-label before:bg-lime text-white">Have a project in mind?</p>
          <h2 className="mt-7 font-display text-[clamp(2.8rem,7.5vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.065em]">
            Let's make your next <span className="text-violet">digital experience</span> happen.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            {siteContent.company.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="glow"
              icon={<ArrowUpRight className="h-5 w-5" />}
              asAnchor
              href="/#contact"
            >
              Contact YAY Tech
            </Button>
            <a
              href={`tel:${siteContent.company.contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Book a call <MoveUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-12 border-t border-white/15 pt-5 sm:mt-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">Our services</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/75 sm:text-sm">
            {siteContent.services.map((service, index) => (
              <React.Fragment key={service.id}>
                {index > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-lime" />}
                <span>{service.title}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:grid-cols-3">
          {[
            { label: 'Work', href: '/portfolio' },
            { label: 'Process', href: '/#process' },
            { label: 'About', href: '/#why-us' },
            { label: 'Insights', href: '/#insights' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex min-h-14 items-center justify-between rounded-full border border-white/20 px-5 text-sm text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink sm:min-h-16 sm:px-7"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
