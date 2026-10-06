import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

const placeholderCards = [
  { label: 'Article 01', tone: 'from-gray-900 to-gray-700' },
  { label: 'Article 02', tone: 'from-gray-800 to-gray-600' },
  { label: 'Article 03', tone: 'from-gray-700 to-gray-500' },
];

export const InsightsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = section?.querySelector<HTMLElement>('[data-insights-panel]');
    if (!section || !panel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(panel, { marginInline: 24, borderRadius: 38 }, {
        marginInline: 0,
        borderRadius: 0,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'center center', scrub: 0.8 },
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section id="insights" ref={sectionRef} className="overflow-hidden bg-background py-12 text-inverse-foreground sm:py-20">
      <div data-nav-section data-theme="dark" data-insights-panel className="overflow-hidden bg-inverse-background px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <Container size="wide">
          <div className="mb-10 flex items-end justify-between gap-5 border-b border-inverse-foreground/20 pb-5 sm:mb-14">
            <div>
              <p className="section-label before:bg-inverse-foreground text-inverse-foreground">Insights</p>
              <h2 className="mt-5 font-display text-display-lg font-medium leading-[0.95] tracking-[-0.06em]">
                Notes from <span className="text-inverse-foreground">the work.</span>
              </h2>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-inverse-foreground/40 px-5 py-3 text-xs text-inverse-foreground/80 sm:inline-flex">
              See all <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
            {placeholderCards.map((card) => (
              <article key={card.label} className="group w-[82vw] max-w-[380px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <div className={`dark-glow-card relative flex aspect-[1.25] items-end overflow-hidden rounded-[1.65rem] bg-gradient-to-br ${card.tone} p-5 transition-transform duration-500 group-hover:rotate-[-1deg] sm:p-7`}>
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_75%_20%,#FFFFFF_0,transparent_45%),linear-gradient(135deg,transparent_60%,rgba(255,255,255,.2))]" />
                  <div className="relative flex w-full items-center justify-between border-t border-inverse-foreground/35 pt-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-inverse-foreground/80">{card.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-inverse-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-inverse-foreground/60">[ADD PUBLISH DATE]</p>
                  <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-inverse-foreground sm:text-xl">
                    <span className="underline-draw">[ADD ARTICLE TITLE]</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-inverse-foreground/70">[ADD ARTICLE SUMMARY]</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-xs text-inverse-foreground/60">Editorial cards are placeholders until approved YAY Tech articles are supplied.</p>
        </Container>
      </div>
    </section>
  );
};
