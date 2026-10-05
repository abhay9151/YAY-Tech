import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '@/data/siteContent';

export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 100 : 650);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night text-white"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          aria-label="Loading YAY Tech"
          role="status"
        >
          <motion.span
            className="font-display text-2xl font-medium tracking-tight"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {siteContent.company.name}<span className="text-lime">.</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
