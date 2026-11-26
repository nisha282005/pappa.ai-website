import React from 'react';
import { LayoutGrid } from 'lucide-react';
import Container from '../../../components/common/Container';

export default function FeaturesIntro() {
  return (
    <section
      id="features-hero"
      aria-labelledby="features-hero-heading"
      className="pappa-hero-after-spacer relative w-full bg-white dark:bg-[#0B0F19] pt-8 sm:pt-10 md:pt-12 pb-3 sm:pb-4 overflow-hidden select-none font-sans transition-colors duration-200"
    >
      {/* Subtle Ambient Lavender Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[220px] bg-gradient-to-r from-indigo-100/35 via-purple-100/25 to-indigo-50/35 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-indigo-950/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        {/* Title Case Eyebrow Badge */}
        <div className="animate-hero-fade-up inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/80 dark:border-indigo-900/60 mb-3 sm:mb-4 shadow-2xs hover:scale-105 transition-transform duration-200">
          <LayoutGrid className="w-3.5 h-3.5 text-[#4F46E5] dark:text-indigo-400" aria-hidden="true" />
          <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">
            Platform Features
          </span>
        </div>

        {/* Main Headline */}
        <h1
          id="features-hero-heading"
          className="animate-hero-fade-up animation-delay-100 font-sans text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold leading-[1.18] tracking-tight text-[#0F172A] dark:text-white max-w-4xl mx-auto"
        >
          Everything Your Institution Needs,
          <span className="block text-[#4F46E5] dark:text-indigo-400 mt-1 sm:mt-1.5">in One Place</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="animate-hero-fade-up animation-delay-200 mt-3 sm:mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#475569] dark:text-slate-300 max-w-[720px] mx-auto [text-wrap:balance]">
          From scheduling classes to tracking learning and keeping families informed,
          Pappa.ai brings every part of your institution together in one connected platform.
        </p>
      </Container>
    </section>
  );
}
