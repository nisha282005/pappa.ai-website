import React from 'react';
import { cn } from '../../utils/helpers';
import Container from '../common/Container';

/**
 * SectionWrapper provides standardized vertical spacing and semantic section tag.
 * Standard Vertical Spacing System:
 * - Default: Desktop: 72px, Tablet: 56px, Mobile: 40px, Small mobile: 32px
 * - Compact: Desktop: 48px, Mobile: 32px
 * - Hero: Desktop: 72px (64–80px), Tablet: 56px, Mobile: 40px
 */
export default function SectionWrapper({
  children,
  id,
  className = '',
  containerClassName = '',
  background = 'default',
  noContainer = false,
  size = 'default', // 'default' | 'compact' | 'hero' | 'none'
  py,
  ...props
}) {
  const bgClasses = {
    default: 'bg-white dark:bg-[#0B0F19]',
    soft: 'bg-[#EEF2FF]/40 dark:bg-indigo-950/20',
    subtle: 'bg-[#F8FAFC] dark:bg-[#080C14]',
  };

  const sizePyClasses = {
    default: 'pappa-section-py',
    compact: 'pappa-section-py-compact',
    hero: 'pappa-hero-py',
    none: '',
  };

  const paddingClass = py !== undefined ? py : (sizePyClasses[size] || sizePyClasses.default);

  return (
    <section
      id={id}
      className={cn(
        'w-full relative overflow-hidden scroll-mt-20 sm:scroll-mt-24',
        paddingClass,
        bgClasses[background] || bgClasses.default,
        className
      )}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
