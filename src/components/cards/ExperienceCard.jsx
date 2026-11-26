import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * ExperienceCard for user journey experiences (admin, teacher, parent, volunteer).
 * Full height in grid cells with responsive padding.
 */
export default function ExperienceCard({
  role,
  headline,
  details,
  icon: Icon,
  highlights = [],
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
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="pappa-caption font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 shrink-0">
            {role}
          </span>
          {Icon && <Icon className="w-5 h-5 text-[#4F46E5] dark:text-indigo-400 shrink-0" />}
        </div>
        <h3 className="pappa-h3 mb-2 [text-wrap:balance]">{headline}</h3>
        <p className="pappa-supporting mb-4 [text-wrap:pretty]">{details}</p>
      </div>
      {highlights.length > 0 && (
        <div className="space-y-2 border-t border-[#E5E7EB] dark:border-slate-800 pt-4 mt-2">
          {highlights.map((h, i) => (
            <div key={i} className="pappa-supporting text-[#334155] dark:text-slate-300 flex items-start gap-2">
              <span className="text-[#047857] dark:text-emerald-400 font-bold mt-0.5 shrink-0">✓</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
