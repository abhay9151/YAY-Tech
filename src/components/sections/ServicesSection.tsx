import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Clock, Star } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeService, setActiveService] = useState<string | null>(null);
  const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const categories = ['All', 'Development', 'Design', 'Marketing', 'Business'];
  const services = selectedCategory === 'All'
    ? siteContent.services
    : siteContent.services.filter((service) => service.category === selectedCategory);

  useEffect(() => {
    const closeHoverPreviewOnMobile = () => {
      if (window.innerWidth < 768) setActiveService(null);
      else setExpandedMobileService(null);
    };
    window.addEventListener('resize', closeHoverPreviewOnMobile);
    return () => window.removeEventListener('resize', closeHoverPreviewOnMobile);
  }, []);

  const goToContact = (serviceTitle: string) => {
    onSelectService?.(serviceTitle);
    document.getElementById('contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section id="services" data-nav-section className="py-20 sm:py-28 lg:py-36">
      <Container size="wide">
        <SectionHeading
          badge="Services"
          badgeVariant="default"
          align="left"
          title={<>Digital services, delivered <span className="text-foreground">on time.</span></>}
          subtitle="Professional engineering, design, and growth solutions delivered by seasoned domain specialists on guaranteed timelines."
        />

        <div className="mb-8 flex flex-wrap gap-2 sm:mb-10" aria-label="Filter services by category">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveService(null);
                  setExpandedMobileService(null);
                }}
                className={`min-h-[44px] rounded-full border px-4 text-xs font-medium transition-colors sm:text-sm ${
                  isSelected ? 'border-foreground bg-foreground text-inverse-foreground' : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="border-t border-border">
          <AnimatePresence mode="popLayout">
            {services.map((service, index) => {
              const isExpanded = window.innerWidth < 768
                ? expandedMobileService === service.id
                : activeService === service.id;
              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  animate={{ opacity: window.innerWidth >= 768 && activeService && !isExpanded ? 0.38 : 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: index * 0.025 }}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse' && window.innerWidth >= 768) setActiveService(service.id);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === 'mouse' && window.innerWidth >= 768) setActiveService(null);
                  }}
                  className="group border-b border-foreground/20 py-5 sm:py-7 lg:py-9"
                >
                  <div className="grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-center lg:grid-cols-[1.15fr_0.85fr]">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          setExpandedMobileService((current) => current === service.id ? null : service.id);
                        }
                      }}
                      onFocus={() => {
                        if (window.innerWidth >= 768) setActiveService(service.id);
                      }}
                      className="group/title flex min-h-12 w-full items-center justify-between text-left md:cursor-default"
                    >
                      <span className="font-display text-[clamp(1.7rem,4.7vw,4rem)] font-medium leading-none tracking-[-0.06em]">
                        <span className="underline-draw">{service.title}</span>
                      </span>
                      <span className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-transform group-hover/title:rotate-45 md:hidden">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>

                    <div className="grid grid-cols-[minmax(0,0.82fr)_minmax(150px,1fr)] gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(150px,1fr)]">
                      <div className="relative hidden min-h-28 overflow-hidden rounded-2xl bg-foreground/10 md:block lg:min-h-36">
                        <motion.img
                          src={service.image}
                          alt=""
                          loading="lazy"
                          width="480"
                          height="280"
                          animate={{ scale: isExpanded ? 1 : 1.05, rotate: isExpanded ? -2 : 0 }}
                          transition={{ duration: 0.45 }}
                          className={`absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <span className="absolute bottom-2 left-2 rounded-full bg-surface/90 px-3 py-1 text-[10px] font-medium text-foreground">
                          {service.category}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <ul className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-3 gap-y-2 text-xs leading-snug text-foreground/65 sm:text-sm">
                          {service.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex min-w-0 items-start gap-1.5">
                              <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                              <span className="min-w-0 break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground sm:text-xs">
                          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{service.deliveryTime}</span>
                          <span className="inline-flex items-center gap-1"><Star className="h-3 w-3 fill-foreground text-foreground" />{service.rating} ({service.reviewsCount})</span>
                          <span>{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
                        className="overflow-hidden md:hidden"
                      >
                        <div className="pt-4">
                          <img src={service.image} alt={`${service.title} service preview`} loading="lazy" className="mb-4 h-48 w-full rounded-2xl object-cover" />
                          <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="mt-3 hidden max-w-2xl text-sm leading-relaxed text-muted-foreground md:block">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => goToContact(service.title)}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-foreground underline-offset-4 hover:underline"
                  >
                    Discuss this service <ArrowUpRight className="h-4 w-4" />
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
