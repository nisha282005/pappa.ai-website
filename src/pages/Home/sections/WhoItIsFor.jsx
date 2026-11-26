import React from 'react';
import {
  GraduationCap,
  Landmark,
  BookOpen,
  Monitor,
  Calendar,
  Users,
} from 'lucide-react';
import Container from '../../../components/common/Container';
import { WHO_ITS_FOR_INSTITUTIONS } from '../../../data/audiences';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const ICON_MAP = {
  GraduationCap,
  Landmark,
  BookOpen,
  Monitor,
  Calendar,
  Users,
};

export default function WhoItIsFor() {
  // once: false ensures the hanging animation plays each time the section is scrolled into view
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: false });

  return (
    <section
      id="who-it-is-for"
      ref={sectionRef}
      className="relative w-full bg-white dark:bg-[#0B0F19] pappa-section-py overflow-hidden scroll-mt-20 transition-colors duration-200"
      aria-labelledby="who-it-is-for-heading"
    >
      {/* Decorative subtle lavender background rounded squares */}
      <div
        className="absolute -left-10 sm:-left-6 top-1/4 w-32 h-32 sm:w-44 sm:h-44 rounded-[26px] bg-[#EEF2FF] dark:bg-indigo-950/20 -z-0 opacity-80 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-6 sm:left-12 lg:left-20 bottom-4 sm:bottom-8 w-24 h-24 sm:w-32 sm:h-32 rounded-[22px] bg-[#EEF2FF] dark:bg-indigo-950/20 -z-0 opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-8 sm:-right-6 top-1/3 w-32 h-32 sm:w-40 sm:h-40 rounded-[26px] bg-[#EEF2FF] dark:bg-indigo-950/20 -z-0 opacity-75 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Header Section with smooth entrance */}
        <div
          className="max-w-3xl mx-auto text-center mb-6 lg:mb-8 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Eyebrow: 12px to heading */}
          <div className="mb-3">
            <span className="pappa-eyebrow text-[#4F46E5]">
              Who It’s For
            </span>
          </div>

          {/* Heading */}
          <h2
            id="who-it-is-for-heading"
            className="pappa-h2 [text-wrap:balance]"
          >
            Built for the way <br className="hidden sm:inline" />
            <span className="text-[#4F46E5]">your institution works.</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 pappa-supporting max-w-2xl mx-auto [text-wrap:pretty]">
            From schools and colleges to academies and community programs, Pappa.ai brings everyday operations together in one place.
          </p>
        </div>

        {/* Six Cards Grid Layout with one-by-one hanging entrance animation every scroll */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 items-start">
          {WHO_ITS_FOR_INSTITUTIONS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName] || GraduationCap;
            const isOddCol = idx % 2 === 0;
            const animationClass = isOddCol ? 'animate-hanging-right' : 'animate-hanging-left';
            const animationDelay = `${idx * 130 + 80}ms`;

            return (
              <div
                key={`${item.id}-${isVisible}`}
                className={`flex flex-col items-center w-full ${isOddCol ? 'mt-3 sm:mt-4' : 'mt-0'
                  } md:mt-0 ${item.desktopOffset} ${isVisible ? animationClass : 'opacity-0'
                  }`}
                style={{
                  transformOrigin: '50% 0px',
                  animationDelay: isVisible ? animationDelay : '0ms',
                }}
              >
                {/* Thin Dotted Indigo Connector Line with Circular Dot Marker (the hanging pin) */}
                <div
                  className="flex flex-col items-center justify-end w-full mb-0 pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Circular indigo pin marker */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4F46E5] dark:bg-indigo-400 ring-4 ring-[#EEF2FF] dark:ring-indigo-950/80 shadow-sm mb-0.5 transition-transform duration-300 hover:scale-125" />
                  {/* Vertical dotted indigo connector line / string */}
                  <div
                    className={`w-0 border-l-[1.5px] border-dotted border-[#6366F1] dark:border-indigo-400 h-4 sm:h-5 ${item.connectorHeight || 'lg:h-6'}`}
                  />
                </div>

                {/* Hanging Picture Frame / Square Card with subtle hover swing */}
                <div
                  className={`group relative w-full aspect-square rounded-[20px] sm:rounded-[24px] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-[0_8px_20px_-4px_rgba(15,23,42,0.08),0_4px_8px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_32px_-4px_rgba(79,70,229,0.22)] transition-all duration-300 hover:-translate-y-1.5 ${isOddCol ? 'hover:rotate-1' : 'hover:-rotate-1'
                    } origin-top border border-slate-100/90 dark:border-slate-800`}
                >
                  {/* Realistic Institutional Photograph filling entire square card */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ height: '100%', width: '100%' }}
                    loading="lazy"
                  />

                  {/* Gentle Gradient Scrim for Pill Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent pointer-events-none" />

                  {/* Floating Pill Label with Icon */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-14px)] max-w-[175px] sm:max-w-[195px] bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md rounded-full py-1.5 px-2 sm:px-2.5 shadow-md border border-white/80 dark:border-slate-700/80 flex items-center justify-center gap-1.5 sm:gap-2 text-center transition-all duration-200 group-hover:shadow-lg group-hover:bg-white dark:group-hover:bg-[#111827]">
                    <Icon
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4F46E5] dark:text-indigo-400 shrink-0"
                      strokeWidth={2.2}
                    />
                    <span className="text-[11px] sm:text-[11.5px] md:text-[12px] font-bold text-[#0F172A] dark:text-white tracking-tight leading-none whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
