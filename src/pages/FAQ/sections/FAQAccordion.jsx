import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../utils/helpers';

/**
 * FAQAccordion displays collapsible question and answer cards
 * with accessible touch targets, unique prefixed IDs, and responsive wrapping.
 */
export default function FAQAccordion({ items = [], idPrefix = 'faq', className = '' }) {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className={cn('space-y-4 max-w-3xl mx-auto w-full', className)}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const panelId = `${idPrefix}-panel-${idx}`;
        const buttonId = `${idPrefix}-btn-${idx}`;

        return (
          <div
            key={idx}
            className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-sm transition-all duration-200"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleIndex(idx);
                }
              }}
              className="w-full flex items-center justify-between p-4 md:p-5 lg:p-6 text-left min-h-[52px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="pappa-h3 pr-3 [text-wrap:pretty]">
                {item.question}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0">
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-[#4F46E5] transition-transform duration-200',
                    isOpen ? 'transform rotate-180' : ''
                  )}
                  aria-hidden="true"
                />
              </div>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-4 pb-4 md:px-5 md:pb-5 lg:px-6 lg:pb-6 pt-3 pappa-body border-t border-[#E5E7EB]/60 break-words [text-wrap:pretty]"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
