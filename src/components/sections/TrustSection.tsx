import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { Marquee } from '@/components/ui/Marquee';

export const TrustSection: React.FC = () => {
  const projects = siteContent.portfolio;
  const renderNames = (reverse = false) => {
    const items = reverse ? [...projects].reverse() : projects;
    return items.map((project) => (
      <span key={project.id} className="flex shrink-0 items-center gap-7 px-5 font-display text-xl font-medium tracking-tight text-foreground/75 sm:text-2xl">
        {project.client}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-foreground" />
      </span>
    ));
  };

  return (
    <section aria-label="Project collaborations" className="overflow-hidden border-b border-border py-10 sm:py-14">
      <Container size="wide" className="mb-5">
        <p className="section-label">Selected project collaborations</p>
      </Container>
      <div className="space-y-1">
        <Marquee speed="slow" className="py-2">{renderNames()}</Marquee>
        <Marquee direction="right" speed="slow" className="py-2">{renderNames(true)}</Marquee>
      </div>
    </section>
  );
};
