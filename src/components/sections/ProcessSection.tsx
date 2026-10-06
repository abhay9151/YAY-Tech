import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

const processImages = [
  '/assets/home-Cbd3xqKn.jpeg',
  '/assets/GuptaLawOffices-cfwldCdE.png',
  '/assets/QMS-DrwGjg1h.png',
  '/assets/YogaForNation-CWyWTq-H.png',
];

export const ProcessSection: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.to(gallery, {
        scrollLeft: () => gallery.scrollWidth - gallery.clientWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: gallery,
          start: 'top 78%',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      gsap.utils.toArray<HTMLElement>('[data-process-image]').forEach((image, index) => {
        gsap.fromTo(image, { y: index % 2 ? 26 : -18 }, {
          y: index % 2 ? -18 : 26,
          ease: 'none',
          scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
        });
      });
    }, gallery);
    return () => context.revert();
  }, []);

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    dragState.current = { active: true, startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const drag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    event.currentTarget.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.startX);
  };
  const endDrag = () => { dragState.current.active = false; };

  return (
    <section id="process" data-nav-section className="overflow-hidden border-t border-border py-20 sm:py-28 lg:py-36">
      <Container size="wide">
        <div className="grid gap-8 border-b border-foreground/15 pb-10 md:grid-cols-12 md:items-end md:pb-14">
          <div className="md:col-span-7">
            <p className="section-label mb-5">Our process</p>
            <h2 className="font-display text-display-lg font-medium leading-[0.98] tracking-[-0.06em]">
              A clear path from <span className="text-foreground">first brief</span> to final delivery.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our systematic four-phase engineering framework guarantees transparent communication, zero scope creeps, and punctual deployment.
            </p>
            <a href="#process-gallery" className="pill-link group hover:border-foreground hover:text-foreground">
              See process <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>

      <div
        id="process-gallery"
        ref={galleryRef}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="no-scrollbar mt-8 flex cursor-grab select-none items-start gap-4 overflow-x-auto px-4 pb-4 active:cursor-grabbing sm:mt-12 sm:gap-6 sm:px-8 lg:px-[max(2rem,calc((100vw-1440px)/2))]"
        aria-label="Drag horizontally to explore the four-step process"
      >
        {siteContent.process.map((step, index) => (
          <article key={step.step} className={`w-[78vw] max-w-[470px] shrink-0 ${index % 2 ? 'mt-12 sm:mt-20' : ''}`}>
            <div className={`relative overflow-hidden rounded-[1.75rem] bg-foreground/10 ${index % 2 ? 'h-52 sm:h-72' : 'h-64 sm:h-96'}`} data-process-image>
              <img
                src={processImages[index]}
                alt={`Visual for process phase: ${step.title}`}
                loading="lazy"
                width="900"
                height="600"
                draggable="false"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wider text-inverse-foreground">
                Phase 0{step.step}
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-foreground/15 py-5">
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
              <span className="font-display text-3xl font-medium text-foreground">0{step.step}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
