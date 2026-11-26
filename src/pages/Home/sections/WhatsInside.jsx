import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import FeatureCard from '../../../components/cards/FeatureCard';
import { WHATS_INSIDE_MODULES } from '../../../data/features';
import {
  GraduationCap,
  BookOpen,
  CreditCard,
  Shield,
  MessageSquare,
  Users,
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  BookOpen,
  CreditCard,
  Shield,
  MessageSquare,
  Users,
};

export default function WhatsInside() {
  return (
    <SectionWrapper
      id="whats-inside"
      background="default"
      py="py-10 md:py-11 lg:py-12"
      className="relative font-sans"
    >
      {/* Centered section heading with anchored lavender accents & reduced compact gaps */}
      <div className="relative max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-7 text-center">
        {/* Subtle lavender dot matrix (left of heading) */}
        <div
          className="absolute -left-12 md:-left-20 lg:-left-28 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block opacity-75"
          aria-hidden="true"
        >
          <svg
            width="64"
            height="72"
            viewBox="0 0 68 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="whats-inside-dots"
              x="0"
              y="0"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="2.2" fill="#D5D9FB" />
            </pattern>
            <rect width="68" height="80" fill="url(#whats-inside-dots)" />
          </svg>
        </div>

        {/* Subtle lavender overlapping rounded squares (right of heading) */}
        <div
          className="absolute -right-10 md:-right-16 lg:-right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block"
          aria-hidden="true"
        >
          <div className="relative w-14 h-14">
            <div className="absolute top-0 right-0 w-10 h-10 rounded-[12px] bg-[#EEF2FF] dark:bg-indigo-950/40 opacity-90" />
            <div className="absolute bottom-0 left-0 w-10 h-10 rounded-[12px] bg-[#E0E7FF]/70 dark:bg-indigo-950/20" />
          </div>
        </div>

        {/* Title Case Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/80 dark:border-indigo-900/60 mb-2 sm:mb-2.5 select-none hover:scale-105 transition-transform duration-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-indigo-400" aria-hidden="true" />
          <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">
            Platform Features
          </span>
        </div>

        {/* Heading: 44–48px */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold text-[#0F172A] dark:text-white leading-[1.14] tracking-tight [text-wrap:balance]">
          Everything your institution needs,<br className="hidden sm:inline" />{' '}
          <span className="text-[#4F46E5] dark:text-indigo-400">working together.</span>
        </h2>

        {/* Supporting description: 17–18px */}
        <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] text-[#475569] dark:text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:pretty]">
          Six connected areas that bring everyday institutional operations into one place.
        </p>
      </div>

      {/* 6 Feature Cards Grid: 3 columns × 2 rows on desktop, Row gap 16px, Column gap 20–24px */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-5 lg:gap-x-6 relative z-10">
        {WHATS_INSIDE_MODULES.map((module) => {
          const IconComponent = iconMap[module.iconName];
          return (
            <FeatureCard
              key={module.id}
              icon={IconComponent}
              title={module.title}
              description={module.description}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
