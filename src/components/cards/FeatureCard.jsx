import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * FeatureCard conforming to Pappa.ai card design system:
 * - White surface, 1px subtle border (#E5E7EB / slate-200), 16px radius.
 * - Simple icons in lavender background (#EEF2FF) with Indigo text (#4F46E5).
 * - Exact typography: Title 20px, Description 15–16px.
 * - Desktop height: approximately 140–150px.
 * - Tablet and mobile: natural auto height with appropriately stacked cards.
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  image,
  imageAlt,
  className = '',
  children,
}) {
  // If an image is explicitly provided (for visual showcase cards)
  if (image) {
    return (
      <div
        className={cn(
          'group bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-slate-800 hover:border-indigo-200/90 dark:hover:border-indigo-500/30 rounded-[16px] p-4 md:p-5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full w-full break-words',
          className
        )}
      >
        <div className="w-full h-[140px] sm:h-[155px] lg:h-[170px] rounded-[12px] overflow-hidden bg-[#F1F5F9] dark:bg-slate-800 shrink-0">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex items-start gap-3.5 mt-3.5 sm:mt-4">
          {Icon && (
            <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-[10px] bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.9]" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-[18px] lg:text-[20px] font-bold text-[#0F172A] dark:text-white tracking-tight leading-snug mb-1 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            <p className="text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[15.5px] text-[#64748B] dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        {children && <div className="mt-3 pt-3 border-t border-[#E5E7EB] dark:border-slate-800">{children}</div>}
      </div>
    );
  }

  // Standard / Compact FeatureCard (no image): 140–150px tall on desktop, auto on mobile
  return (
    <div
      className={cn(
        'group bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-slate-800 hover:border-indigo-200/90 dark:hover:border-indigo-500/30 rounded-[16px] p-4 sm:p-4.5 lg:px-5 lg:py-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_-4px_rgba(79,70,229,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-center w-full lg:h-[146px] min-h-[128px] break-words',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-2 sm:mb-2.5">
          <div className="flex items-center gap-3 min-w-0">
            {Icon && (
              <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-[10px] bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-200 shadow-2xs">
                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
              </div>
            )}
            <h3 className="text-[18px] lg:text-[20px] font-bold text-[#0F172A] dark:text-white tracking-tight leading-snug group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
          </div>
          {badge && (
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF5FF] dark:bg-purple-950/50 text-[#7E22CE] dark:text-purple-300 shrink-0 border border-purple-100/80 dark:border-purple-800/50">
              {badge}
            </span>
          )}
        </div>
        <p className="text-[14px] sm:text-[14.5px] lg:text-[15px] xl:text-[15.5px] text-[#64748B] dark:text-slate-400 leading-relaxed [text-wrap:pretty]">
          {description}
        </p>
      </div>
      {children && <div className="mt-2.5 pt-2.5 border-t border-[#E5E7EB] dark:border-slate-800">{children}</div>}
    </div>
  );
}
