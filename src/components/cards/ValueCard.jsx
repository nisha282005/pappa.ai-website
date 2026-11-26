import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * ValueCard for principles, mission pillars, and impact points.
 * Full height in grid cells with responsive padding.
 */
export default function ValueCard({
  icon: Icon,
  title,
  description,
  tag,
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
        {Icon && (
          <div className="w-10 h-10 rounded-[12px] bg-[#FAF5FF] dark:bg-purple-950/50 text-[#7E22CE] dark:text-purple-300 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {tag && (
          <div className="mb-2">
            <span className="pappa-caption font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF5FF] dark:bg-purple-950/50 text-[#7E22CE] dark:text-purple-300">
              {tag}
            </span>
          </div>
        )}
        <h3 className="pappa-h3 mb-2 [text-wrap:balance]">{title}</h3>
        <p className="pappa-supporting [text-wrap:pretty]">{description}</p>
      </div>
    </div>
  );
}
