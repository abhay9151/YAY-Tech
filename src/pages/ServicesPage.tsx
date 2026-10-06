import React from 'react';
import { Container } from '@/components/ui/Container';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Container size="wide" className="mb-8 pt-8 text-center sm:pt-12">
        <h1 className="font-display text-display-lg font-medium tracking-tight text-foreground mb-4">
          Our Capabilities & Services
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Tailored engineering, digital design, and technical consulting with contractual deadlines.
        </p>
      </Container>
      <ServicesSection />
      <ProcessSection />
      <CtaBannerSection />
      <ContactSection />
    </div>
  );
};
