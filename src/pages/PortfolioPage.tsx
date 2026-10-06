import React from 'react';
import { Container } from '@/components/ui/Container';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Container size="wide" className="mb-8 pt-8 text-center sm:pt-12">
        <h1 className="font-display text-display-lg font-medium tracking-tight text-foreground mb-4">
          Client Case Studies & Work
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore production websites, mobile apps, and enterprise systems built by YAY Tech.
        </p>
      </Container>
      <PortfolioSection />
      <TestimonialsSection />
      <CtaBannerSection />
      <ContactSection />
    </div>
  );
};
