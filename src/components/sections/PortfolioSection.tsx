import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Building, Clock, Layers } from 'lucide-react';
import { siteContent, type ProjectItem } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const reduceMotion = useReducedMotion();
  const closeProject = () => setSelectedProject(null);

  const discussProject = () => {
    closeProject();
    document.getElementById('contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section id="portfolio" data-nav-section className="border-t border-line py-20 sm:py-28 lg:py-36">
      <Container size="wide">
        <SectionHeading
          badge="Selected work"
          align="left"
          title={<>Real projects. <span className="text-violet">Measurable impact.</span></>}
          subtitle="Explore some of our successful client collaborations across corporate web portals, native mobile apps, and enterprise management systems."
        />

        <div id="work" className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
          {siteContent.portfolio.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduceMotion ? 0.01 : 0.65, delay: index % 2 ? 0.12 : 0 }}
              onClick={() => setSelectedProject(project)}
              className={`group block min-w-0 text-left focus-visible:rounded-[2rem] ${index % 2 ? 'md:mt-24' : ''}`}
              aria-label={`View case study: ${project.title}`}
            >
              <div className="relative aspect-[1.22] overflow-hidden rounded-[1.75rem] bg-violet/10 sm:rounded-[2rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width="1000"
                  height="800"
                  className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-6 sm:bottom-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-medium text-ink backdrop-blur sm:text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-6 sm:top-6">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <span className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex">
                  <span className="flex h-20 w-20 scale-90 items-center justify-center rounded-full bg-white/85 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    View
                  </span>
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 pt-5 sm:pt-6">
                <div className="min-w-0">
                  <p className="section-label text-[9px] text-muted before:h-1.5 before:w-1.5">{project.category}</p>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl">
                    <span className="underline-draw">{project.title}</span>
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted">{project.description}</p>
                </div>
                <span className="mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-violet group-hover:bg-violet group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <Modal isOpen={!!selectedProject} onClose={closeProject} title={selectedProject?.title}>
        {selectedProject && (
          <div className="space-y-6">
            <img src={selectedProject.image} alt={selectedProject.title} className="max-h-80 w-full rounded-3xl object-cover object-top" />
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-paper p-4">
              <div><div className="text-xs text-muted"><Layers className="mr-1 inline h-3.5 w-3.5 text-violet" />Category</div><div className="mt-1 text-xs font-semibold sm:text-sm">{selectedProject.category}</div></div>
              <div><div className="text-xs text-muted"><Building className="mr-1 inline h-3.5 w-3.5 text-violet" />Client</div><div className="mt-1 text-xs font-semibold sm:text-sm">{selectedProject.client}</div></div>
              <div><div className="text-xs text-muted"><Clock className="mr-1 inline h-3.5 w-3.5 text-violet" />Timeline</div><div className="mt-1 text-xs font-semibold sm:text-sm">{selectedProject.completionTime}</div></div>
            </div>
            <p className="text-sm leading-relaxed text-muted">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => <span key={tag} className="rounded-full bg-violet/10 px-3 py-1.5 text-xs text-violet">{tag}</span>)}
            </div>
            <div className="flex justify-end gap-3 border-t border-line pt-4">
              <Button variant="ghost" size="sm" onClick={closeProject}>Close</Button>
              <Button variant="primary" size="sm" icon={<ArrowUpRight className="h-4 w-4" />} onClick={discussProject}>Discuss a project</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
