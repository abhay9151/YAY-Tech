import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const WorkspaceSection: React.FC = () => {
  return (
    <section id="workspace" data-nav-section className="relative overflow-hidden border-t border-line bg-paper py-20 sm:py-28 lg:py-36">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <Container size="wide">
        <SectionHeading
          badge="Headquarters"
          badgeVariant="success"
          title={
            <span>
              Visit Our Modern{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-accent-light">
                Engineering Workspace
              </span>
            </span>
          }
          subtitle="Located in Indirapuram, Ghaziabad, our modern collaborative hub is engineered for deep focus, rapid innovation, and direct client strategy sessions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 h-[380px] sm:h-[460px]"
          >
            <iframe
              src={siteContent.company.contact.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YAY Tech Office Location Map"
              className="w-full h-full"
            />

            {/* Floating Office Badge */}
            <div className="absolute right-4 top-4 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/95 p-3.5 shadow-card backdrop-blur-md">
              <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-ink">YAY Tech Office</div>
                <div className="text-xs text-gray-400">Indirapuram, Ghaziabad</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Office Location Details & Amenities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-6 rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-8">
              <h3 className="font-display text-2xl font-medium text-ink">
                Office Location & Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0 border border-accent/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-sm font-semibold text-ink">
                      Address
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      WFH Co-working space / Conference Room & Office Space, Indirapuram, Ghaziabad, UP, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-sm font-semibold text-ink">
                      Direct Phone
                    </h4>
                    <p className="text-xs text-gray-300 font-mono">
                      {siteContent.company.contact.phone}
                    </p>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Available 24/7 for urgent projects
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-sm font-semibold text-ink">
                      Email Inquiries
                    </h4>
                    <p className="text-xs text-gray-300 font-mono">
                      {siteContent.company.contact.email}
                    </p>
                    <span className="text-[11px] text-gray-400">
                      Response within 2 hours
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 shrink-0 border border-amber-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-display text-sm font-semibold text-ink">
                      Working Hours
                    </h4>
                    <p className="text-xs text-gray-400">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 border-t border-ink/10 pt-4 sm:flex-row">
                <Button
                  variant="primary"
                  icon={<Navigation className="w-4 h-4" />}
                  asAnchor
                  href={siteContent.company.contact.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Get Directions
                </Button>

                <Button
                  variant="outline"
                  asAnchor
                  href={`tel:${siteContent.company.contact.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto"
                >
                  Call Reception
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
