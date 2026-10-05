import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WorkspaceSection } from '@/components/sections/WorkspaceSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ReelSection } from '@/components/sections/ReelSection';
import { InsightsSection } from '@/components/sections/InsightsSection';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <>
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <ServicesSection onSelectService={handleSelectService} />
      <ReelSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <WorkspaceSection />
      <InsightsSection />
      <ContactSection initialService={selectedService} />
      <CtaBannerSection />
    </>
  );
};
