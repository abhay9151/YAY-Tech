import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { Marquee } from '@/components/ui/Marquee';

export const StatsSection: React.FC = () => (
  <section id="stats" data-nav-section className="border-y border-foreground/15 py-12 sm:py-16">
    <div className="mb-10 overflow-hidden sm:mb-14">
      <Marquee speed="normal" className="py-2">
        {siteContent.services.map((service) => (
          <span key={service.id} className="flex shrink-0 items-center gap-7 px-4 font-display text-xl font-medium tracking-tight text-foreground/65 sm:text-2xl">
            {service.title} <Star className="h-4 w-4 fill-foreground text-foreground" />
          </span>
        ))}
      </Marquee>
    </div>
    <Container size="wide">
      <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-4 md:gap-8">
        {siteContent.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="border-l border-foreground/15 pl-4 sm:pl-6"
          >
            <div className="font-display text-[clamp(2.4rem,5vw,4.7rem)] font-medium leading-none tracking-[-0.07em] text-foreground">
              {stat.number}
            </div>
            <p className="mt-3 font-display text-sm font-medium sm:text-base">{stat.label}</p>
            {stat.description && <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-muted-foreground">{stat.description}</p>}
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
