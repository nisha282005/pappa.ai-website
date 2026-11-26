import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal hook
 * Attaches an IntersectionObserver to an element to trigger subtle scroll-entrance animations.
 * Automatically falls back to visible if IntersectionObserver is unsupported or if
 * the user has enabled prefers-reduced-motion.
 */
export function useScrollReveal(options = { threshold: 0.1, once: true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once) {
          observer.unobserve(el);
        }
      } else if (!options.once) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return [ref, isVisible];
}

export default useScrollReveal;

