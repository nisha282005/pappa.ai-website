import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Pappa.ai Badge / Tag Component
 * Pill radius (9999px) with exact semantic color pairings.
 */
export default function Badge({
  children,
  variant = 'info',
  className = '',
  icon: Icon,
  ...props
}) {
  const variantClasses = {
    info: 'bg-[#DBEAFE] dark:bg-blue-950/60 text-[#1D4ED8] dark:text-blue-300',
    success: 'bg-[#ECFDF5] dark:bg-emerald-950/60 text-[#047857] dark:text-emerald-300',
    warning: 'bg-[#FFFBEB] dark:bg-amber-950/60 text-[#B45309] dark:text-amber-300',
    purple: 'bg-[#FAF5FF] dark:bg-purple-950/60 text-[#7E22CE] dark:text-purple-300',
    brand: 'bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full pappa-eyebrow',
        variantClasses[variant] || variantClasses.info,
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
