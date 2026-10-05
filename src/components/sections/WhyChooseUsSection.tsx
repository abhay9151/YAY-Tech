import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhyChooseUsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    delivery: <Clock className="w-8 h-8 text-accent" />,
    team: <Users className="w-8 h-8 text-emerald-400" />,
    quality: <ShieldCheck className="w-8 h-8 text-purple-400" />,
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="why-us" data-nav-section className="relative overflow-hidden border-t border-line py-20 sm:py-28 lg:py-36">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 blur-[160px] pointer-events-none rounded-full" />

      <Container size="wide">
        <SectionHeading
          badge="Why Choose Us"
          badgeVariant="success"
          title={
            <span>
              Engineered For Reliability,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-accent-light">
                Built For Scale
              </span>
            </span>
          }
          subtitle="We deliver exceptional results through proven engineering expertise, cutting-edge technology, and an unwavering commitment to your success."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.whyChooseUs.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 sm:p-8"
            >
              <div>
                {/* Top Icon Box */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet/15 bg-violet/5 transition-transform group-hover:scale-110">
                  {iconMap[pillar.id]}
                </div>

                <h3 className="mb-4 font-display text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-violet">
                  {pillar.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {pillar.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Pill */}
              <div className="space-y-4 border-t border-ink/10 pt-6">
                <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-paper p-4">
                  <span className="text-xs uppercase font-medium tracking-wider text-gray-400">
                    {pillar.metricLabel}
                  </span>
                  <span className="font-display text-2xl font-semibold text-ink">
                    {pillar.metricValue}
                  </span>
                </div>

                <button
                  onClick={() => scrollTo('portfolio')}
                  className="group/btn flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 py-2 text-xs font-semibold uppercase tracking-wider text-violet transition-colors hover:text-ink"
                >
                  <span>{pillar.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
