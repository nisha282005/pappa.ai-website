import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/helpers';

/**
 * Standard Pappa.ai Pill Button Component
 * Touch target: minimum 44px height across all sizes.
 * Pill radius (9999px), Font weight: 600.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full min-h-[44px] transition-all duration-200 text-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]';

  const sizeClasses = {
    sm: 'px-4 py-2 pappa-btn-text min-h-[44px]',
    md: 'px-5 sm:px-6 py-2 pappa-btn-text min-h-[44px]',
    lg: 'px-6 sm:px-8 py-2.5 pappa-btn-text min-h-[46px]',
  };

  const variantClasses = {
    primary: 'bg-[#4F46E5] dark:bg-indigo-600 text-white hover:bg-[#4338CA] dark:hover:bg-indigo-500 active:bg-[#3730A3] shadow-sm hover:shadow',
    secondary: 'bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-300 hover:bg-[#E0E7FF] dark:hover:bg-indigo-900/60 active:bg-[#C7D2FE]',
    outline: 'border border-[#E5E7EB] dark:border-slate-700 text-[#0F172A] dark:text-white bg-white dark:bg-slate-800 hover:bg-[#EEF2FF] dark:hover:bg-slate-700 hover:border-[#6366F1]/30 active:bg-slate-100 dark:active:bg-slate-700',
    ghost: 'text-[#475569] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:bg-[#EEF2FF] dark:hover:bg-slate-800 active:bg-slate-100',
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size] || sizeClasses.md,
    variantClasses[variant] || variantClasses.primary,
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}
