import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ease } from '../utils/easings';

/** Seconds until the hero starts its entrance (loader duration). */
export const INTRO = 1.5;

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), INTRO * 1000 - 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: ease('premium') }}
        >
          <svg width="88" height="88" viewBox="0 0 48 48" aria-hidden>
            <motion.path
              d="M10 8h12v32h18M22 24h11"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: ease('smooth') }}
            />
          </svg>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.1, delay: 0.15 }}
          >
            FÓRMULA LEGAL
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
