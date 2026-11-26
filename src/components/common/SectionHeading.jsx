import React from 'react';
import { cn } from '../../utils/helpers';
import Badge from './Badge';

/**
 * Reusable Section Heading component with fluid responsive typography,
 * balanced text wrapping, and configurable heading level (h1 or h2) for strict SEO/a11y hierarchy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  level = 'h2',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const HeadingTag = level === 'h1' ? 'h1' : 'h2';

  return (
    <div className={cn('flex flex-col w-full max-w-3xl mb-6 lg:mb-8', alignClasses[align], className)}>
      {eyebrow && (
        <div className="mb-3">
          <Badge variant="brand">{eyebrow}</Badge>
        </div>
      )}
      <HeadingTag
        className={cn(
          '[text-wrap:balance]',
          level === 'h1' ? 'pappa-h1' : 'pappa-h2'
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-4 pappa-supporting max-w-2xl [text-wrap:pretty]">
          {description}
        </p>
      )}
    </div>
  );
}
