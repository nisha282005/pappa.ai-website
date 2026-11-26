import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const OFFSET = { left: { x: -60 }, right: { x: 60 }, up: { y: 32 } };

/** Fades and slides its content in once it scrolls into view. Skipped with reduced motion. */
export default function Reveal({ from = 'up', delay = 0, once = true, className = '', children }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSET[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
