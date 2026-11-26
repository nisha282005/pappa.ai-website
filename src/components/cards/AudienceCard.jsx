import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * AudienceCard for displaying role-specific benefits.
 * White surface, 1px border, 16px radius, subtle shadow.
 * Full height in grid cells with responsive padding.
 */
export default function AudienceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  items = [],
  className = '',
}) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-slate-800 rounded-[16px] p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full w-full break-words',
        className
      )}
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          {Icon && (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          )}
          <div>
            <h3 className="pappa-h3 [text-wrap:balance]">{title}</h3>
            {subtitle && <p className="pappa-caption text-[#4F46E5] dark:text-indigo-400">{subtitle}</p>}
          </div>
        </div>
        <p className="pappa-supporting mb-4 [text-wrap:pretty]">
          {description}
        </p>
      </div>
      {items.length > 0 && (
        <ul className="mt-4 pt-4 border-t border-[#E5E7EB]/70 dark:border-slate-800 space-y-2 pappa-supporting text-[#334155] dark:text-slate-300">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-indigo-400 mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
