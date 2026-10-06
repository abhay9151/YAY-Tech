import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Marquee } from '@/components/ui/Marquee';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" data-nav-section className="relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-36">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-gray-700/5 blur-[160px] pointer-events-none rounded-full" />

      <Container size="wide">
        <SectionHeading
          badge="Client Testimonials"
          badgeVariant="default"
          title={
            <span>
              Trusted By Founders &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Engineering Leaders
              </span>
            </span>
          }
          subtitle="Here is what founders, product managers, and enterprise directors say about partnering with YAY Tech."
        />

        {/* Horizontal Marquee Feed 1 */}
        <div className="space-y-6">
          <Marquee speed="slow" pauseOnHover className="py-2">
            {siteContent.testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -4 }}
                className="flex w-[340px] shrink-0 flex-col justify-between rounded-3xl border border-foreground/10 bg-surface p-6 shadow-card transition-all duration-300 hover:border-foreground/40 sm:w-[420px] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-gray-600 fill-gray-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-foreground/60" />
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-foreground/75 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-foreground/10 pt-4">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="h-11 w-11 rounded-full border border-foreground/10 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>

          {/* Horizontal Marquee Feed 2 (Reverse direction for dynamic rhythm) */}
          <Marquee speed="slow" direction="right" pauseOnHover className="py-2">
            {[...siteContent.testimonials].reverse().map((testimonial) => (
              <motion.div
                key={`rev-${testimonial.id}`}
                whileHover={{ y: -4 }}
                className="flex w-[340px] shrink-0 flex-col justify-between rounded-3xl border border-foreground/10 bg-surface p-6 shadow-card transition-all duration-300 hover:border-foreground/40 sm:w-[420px] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-gray-600 fill-gray-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-foreground/60" />
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-foreground/75 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-foreground/10 pt-4">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="h-11 w-11 rounded-full border border-foreground/10 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};
