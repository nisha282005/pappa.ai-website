/**
 * Combines conditional CSS class names into a single string.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scrolls to an element by ID if present.
 */
export function scrollToElement(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
