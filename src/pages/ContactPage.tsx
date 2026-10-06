import React from 'react';
import { Container } from '@/components/ui/Container';
import { ContactSection } from '@/components/sections/ContactSection';
import { WorkspaceSection } from '@/components/sections/WorkspaceSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Container size="wide" className="mb-8 pt-8 text-center sm:pt-12">
        <h1 className="font-display text-display-lg font-medium tracking-tight text-foreground mb-4">
          Contact YAY Tech
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Reach out for project estimates, technical inquiries, or to visit our Indirapuram workspace.
        </p>
      </Container>
      <ContactSection />
      <WorkspaceSection />
    </div>
  );
};
