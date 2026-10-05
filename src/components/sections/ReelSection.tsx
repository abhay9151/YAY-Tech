import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Modal } from '@/components/ui/Modal';

gsap.registerPlugin(ScrollTrigger);

export const ReelSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  React.useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(card, { scale: 0.94, borderRadius: '40px' }, {
        scale: 1,
        borderRadius: '28px',
        ease: 'none',
        scrollTrigger: { trigger: card, start: 'top 90%', end: 'center 50%', scrub: 0.6 },
      });
    }, card);
    return () => context.revert();
  }, []);

  const handlePointer = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <>
      <section aria-labelledby="reel-title" className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Inside the work</p>
              <h2 id="reel-title" className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-4xl">
                A closer look at YAY Tech
              </h2>
            </div>
            <span className="hidden items-center gap-2 text-xs uppercase tracking-widest text-muted sm:flex">
              Reel <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div
            ref={cardRef}
            onMouseMove={handlePointer}
            className="group relative min-h-[280px] overflow-hidden rounded-[2rem] bg-violet sm:min-h-[430px] lg:min-h-[560px]"
          >
            <img
              src="/assets/home-Cbd3xqKn.jpeg"
              alt="YAY Tech workspace and team"
              loading="lazy"
              width="1280"
              height="720"
              className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-60 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet/55 via-ink/15 to-ink/70" />
            <div className="absolute left-6 top-6 text-white sm:left-10 sm:top-10">
              <p className="section-label before:bg-lime">Showreel</p>
              <p className="mt-2 font-display text-sm text-white/75 sm:text-base">
                {`[ADD YAY Tech showreel video]`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-white"
              aria-label="Open the YAY Tech showreel placeholder"
            >
              <motion.span
                animate={{ x: (cursor.x - 50) * 1.1, y: (cursor.y - 50) * 1.1 }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full border border-white/70 bg-white/20 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:h-32 sm:w-32"
              >
                <Play className="h-4 w-4 fill-current" /> Play reel
              </motion.span>
            </button>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="YAY Tech showreel">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl bg-night">
            <img
              src="/assets/home-Cbd3xqKn.jpeg"
              alt="YAY Tech team — temporary showreel poster"
              loading="lazy"
              className="max-h-[60vh] w-full object-cover opacity-70"
            />
            <p className="absolute inset-0 flex items-center justify-center p-6 text-center font-display text-2xl text-white sm:text-4xl">
              [ADD SHOWREEL VIDEO]
            </p>
          </div>
          <p className="text-sm text-muted">Replace this image and placeholder with the approved YAY Tech showreel.</p>
        </div>
      </Modal>
    </>
  );
};
