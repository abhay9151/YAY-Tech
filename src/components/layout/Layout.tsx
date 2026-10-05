import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PageLoader } from '@/components/ui/PageLoader';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export const Layout: React.FC = () => {
  const location = useLocation();
  useSmoothScroll();

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <PageLoader />
      <Navbar />
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
