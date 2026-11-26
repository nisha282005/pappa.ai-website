import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to control mobile navigation menu state.
 * Manages scroll-lock and keyboard accessibility (ESC to close).
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Automatically close mobile menu on route navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock background scroll when open to prevent awkward page interaction
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  return { isOpen, toggle, open, close };
}
