import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import { LOGIN_URL } from '../../../utils/constants';

/**
 * Minimal Final CTA Section for Pappa.ai Homepage
 * Closely matching the reference design:
 * - Predominantly pure white background
 * - Subtle, low-opacity lavender and pale-indigo curved shapes at outer corners
 * - Centered, minimal, spacious typography
 * - Pill-shaped indigo CTA button linking to actual application login URL
 */
export default function HomeClosingBand() {
  return (
    <SectionWrapper
      id="closing-cta"
      background="default"
      size="compact"
      className="relative text-center bg-white dark:bg-[#0B0F19] overflow-hidden transition-colors duration-200"
    >
      {/* Outer corner subtle lavender & pale-indigo curved decorative shapes */}
      {/* Top-Left curved shapes */}
      <div
        className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-52 sm:w-64 h-52 sm:h-64 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/20 opacity-80 pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-[#E0E7FF]/40 dark:bg-indigo-950/10 pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Bottom-Right curved shape and small floating circle */}
      <div
        className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/20 opacity-80 pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-3 right-16 sm:bottom-5 sm:right-24 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/20 opacity-90 pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Eyebrow: 12px gap to heading */}
        <div className="pappa-eyebrow text-[#4F46E5] dark:text-indigo-400 mb-3">
          Ready When You Are
        </div>

        {/* Heading: 16px gap to description */}
        <h2 className="pappa-h2 [text-wrap:balance] mb-4">
          Bring your institution<br className="hidden sm:inline" />{' '}
          <span className="text-[#4F46E5] dark:text-indigo-400">together with Pappa.ai.</span>
        </h2>

        {/* Supporting text: Comfortable 1.65 line spacing */}
        <p className="pappa-body max-w-xl mx-auto [text-wrap:pretty]">
          One platform for academics, learning, fees, safety, and communication. Everything connected, so your team can focus on what matters.
        </p>

        {/* CTA Button: 24px gap from description */}
        <div className="mt-6 flex items-center justify-center">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#3730A3] text-white font-semibold text-[13px] sm:text-[13.5px] shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 min-h-[44px]"
          >
            Login to Pappa.ai
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
