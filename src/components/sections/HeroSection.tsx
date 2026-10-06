import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';

const MarqueePill: React.FC<{ children: string; tone: 'primary' | 'secondary' }> = ({ children, tone }) => (
  <span
    className={`inline-flex max-w-full overflow-hidden rounded-full px-[0.18em] align-[0.03em] text-[0.72em] leading-[1.03] ${
      tone === 'primary' ? 'bg-foreground text-inverse-foreground' : 'bg-gray-200 text-foreground'
    }`}
    style={{ width: tone === 'primary' ? '3.3em' : '5.2em' }}
  >
    <span className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden="true">
      {[0, 1].map((copy) => (
        <span key={copy} className="flex shrink-0 items-center gap-[0.24em] px-[0.16em]">
          {children} <span className="text-[0.45em]">✦</span> {children}
          <span className="text-[0.45em]">✦</span>
        </span>
      ))}
    </span>
    <span className="sr-only">{children}</span>
  </span>
);

const RotatingMark: React.FC = () => (
  <div className="relative h-32 w-32 text-foreground sm:h-40 sm:w-40">
    <svg className="h-full w-full animate-spin-slow motion-reduce:animate-none group-hover:[animation-duration:4s]" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="badge-circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
      </defs>
      <text fill="currentColor" fontSize="10" fontWeight="600" letterSpacing="2.1">
        <textPath href="#badge-circle">JUST GREAT WORK ✦ YAY TECH ✦ </textPath>
      </text>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-3xl">↗</span>
  </div>
);

export const HeroSection: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 44 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0.01 : 0.85, delay, ease: [0.76, 0, 0.24, 1] as const },
  });

  return (
    <section id="home" data-nav-section className="relative overflow-hidden pb-12 pt-32 sm:pt-40 lg:pb-16 lg:pt-44">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-10">
            <motion.p {...entrance(0.08)} className="section-label mb-6 sm:mb-9">
              {siteContent.company.primaryTagline}
            </motion.p>
            <h1 className="font-display text-[clamp(3.2rem,9.5vw,9.2rem)] font-medium leading-[0.91] tracking-[-0.075em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span {...entrance(0.14)} className="block">We deliver your</motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span {...entrance(0.23)} className="block">
                    <span className="text-outline">projects</span> <MarqueePill tone="primary">On Time</MarqueePill>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span {...entrance(0.32)} className="block">
                  <MarqueePill tone="secondary">Every Time</MarqueePill>
                  <span className="text-foreground">.</span>
                </motion.span>
              </span>
            </h1>
          </div>
          <motion.div {...entrance(0.42)} className="flex items-end justify-between gap-8 lg:col-span-2 lg:flex-col lg:items-start lg:pb-2">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteContent.company.heroDescription}
            </p>
            <a href="#work" aria-label="Scroll to selected work" className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-inverse-foreground transition-transform hover:translate-y-1 sm:flex">
              <ArrowDown className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          {...entrance(0.5)}
          className="group relative mt-10 overflow-hidden rounded-[2rem] bg-foreground sm:mt-14 sm:rounded-[2.5rem] lg:mt-16"
        >
          <img
            src="/assets/home-Cbd3xqKn.jpeg"
            alt="YAY Tech team collaborating on a project"
            className="h-[320px] w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 sm:h-[440px] lg:h-[540px]"
            fetchPriority="high"
            width="1280"
            height="720"
          />
          <div className="absolute left-5 top-5 rounded-full bg-surface/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur sm:left-8 sm:top-8">
            {siteContent.company.secondaryTagline}
          </div>
          <div className="absolute -bottom-1 left-4 sm:left-10">
            <RotatingMark />
          </div>
          <a
            href="#contact"
            className="absolute bottom-5 right-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-inverse-foreground transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
        <div className="mt-8 h-px bg-border sm:mt-10" />
      </Container>
    </section>
  );
};
