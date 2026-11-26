import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Standard container constraint for centered page content.
 * Enforces standardized responsive padding and width:
 * Max-width: 1440px
 * Large desktop (1440px+): 64px
 * Laptop (1280px): 48px
 * Small desktop (1024px): 40px
 * Tablet (768px): 32px
 * Mobile (390px and below): 16px
 * Center: margin-inline: auto
 */
export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={cn('pappa-container', className)}
      {...props}
    >
      {children}
    </div>
  );
}
