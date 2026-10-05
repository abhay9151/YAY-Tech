import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, PhoneCall, X } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[id][data-nav-section]');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setIsOverDark(entry.target.getAttribute('data-theme') === 'dark');
        });
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLElement>('a')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key !== 'Tab' || !menuRef.current) return;
      const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a, button'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleSectionLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) return;
    const target = document.getElementById(href.slice(2));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const pillTheme = isOverDark
    ? 'border-white/35 text-white hover:bg-white hover:text-ink'
    : 'border-ink/20 text-ink hover:bg-ink hover:text-white';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-5">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-[1500px] items-center justify-between">
          <a
            href="/#home"
            aria-label={`${siteContent.company.name} home`}
            className="flex min-h-11 items-center gap-3 rounded-full focus-visible:outline-offset-4"
            onClick={(event) => handleSectionLink(event, '/#home')}
          >
            <span className={`rounded-xl p-2 transition-colors ${isOverDark ? 'bg-white' : 'bg-white'}`}>
              <img
                src="/assets/Logo2-V5NBqAYW.png"
                alt=""
                className="h-7 w-auto object-contain sm:h-8"
                width="104"
                height="32"
              />
            </span>
            <span className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${isOverDark ? 'text-white' : 'text-ink'}`}>
              {siteContent.company.name}
            </span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${siteContent.company.contact.phone.replace(/\s+/g, '')}`}
              className={`hidden min-h-11 items-center gap-2 rounded-full border px-4 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 lg:inline-flex ${pillTheme} ${isOverDark ? 'lg:hidden' : ''}`}
            >
              <PhoneCall aria-hidden="true" className="h-3.5 w-3.5" />
              Book a call <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/#contact"
              onClick={(event) => handleSectionLink(event, '/#contact')}
              className={`hidden min-h-11 items-center gap-2 rounded-full px-5 text-xs font-semibold transition-all duration-300 md:inline-flex ${isOverDark ? 'bg-white text-ink hover:bg-lime' : 'bg-ink text-white hover:bg-violet'}`}
            >
              Contact <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <button
              ref={triggerRef}
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-violet ${
                isOverDark ? 'bg-white text-ink hover:bg-lime' : 'bg-ink text-white hover:bg-violet'
              }`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="site-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ clipPath: 'circle(0% at calc(100% - 42px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 42px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 42px) 40px)' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[45] overflow-y-auto bg-lime px-6 pb-10 pt-28 text-ink sm:px-10 sm:pt-32"
          >
            <div className="mx-auto grid min-h-[calc(100dvh-10rem)] max-w-6xl content-center gap-10 md:grid-cols-[1fr_15rem]">
              <div className="space-y-0">
                {siteContent.navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleSectionLink(event, item.href)}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.12 + index * 0.045, duration: 0.45 }}
                    className="group flex min-h-14 items-center justify-between border-b border-ink/15 py-2 font-display text-xl font-medium tracking-tight transition-colors hover:pl-3 hover:text-violet sm:min-h-16 sm:text-2xl"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-col justify-end gap-3 text-sm text-ink/65">
                <span className="section-label">Say hello</span>
                <a className="min-h-11 underline underline-offset-4 hover:text-violet" href={`mailto:${siteContent.company.contact.email}`}>
                  {siteContent.company.contact.email}
                </a>
                <a className="min-h-11 underline underline-offset-4 hover:text-violet" href={`tel:${siteContent.company.contact.phone.replace(/\s+/g, '')}`}>
                  {siteContent.company.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
