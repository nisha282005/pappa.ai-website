import React from 'react';
import { Layers } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function MadeToGrow() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const cards = [
    {
      number: '01',
      title: 'Centralized Management',
      description: 'Manage students, staff, academics, and administration in one place.',
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 sm:w-12 sm:h-12 text-[#6366F1]"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Flag on top */}
          <path d="M24 4v6" />
          <path d="M24 5h7l-2 2.5 2 2.5h-7" fill="currentColor" fillOpacity="0.18" />
          {/* Triangular pediment roof */}
          <path d="M13 17l11-7 11 7" />
          {/* Round clock / window */}
          <circle cx="24" cy="17.5" r="2.2" />
          {/* Center pillars / walls */}
          <path d="M16 17v19" />
          <path d="M32 17v19" />
          {/* Arched entrance doorway */}
          <path d="M21 36v-6a3 3 0 0 1 6 0v6" />
          {/* Left wing with windows */}
          <path d="M6 21h10v15H6z" />
          <rect x="9" y="24.5" width="4" height="3.5" rx="0.8" />
          {/* Right wing with windows */}
          <path d="M32 21h10v15H32z" />
          <rect x="35" y="24.5" width="4" height="3.5" rx="0.8" />
          {/* Base platform */}
          <path d="M3 36h42" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Multi-Campus Operations',
      description: 'Oversee multiple campuses with consistent control and visibility.',
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 sm:w-12 sm:h-12 text-[#6366F1]"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Upper right pin */}
          <path d="M35 6a6.5 6.5 0 0 1 6.5 6.5c0 5-6.5 11.5-6.5 11.5s-6.5-6.5-6.5-11.5A6.5 6.5 0 0 1 35 6z" />
          <circle cx="35" cy="12.5" r="2" fill="currentColor" />
          {/* Lower left pin */}
          <path d="M13 19a6.5 6.5 0 0 1 6.5 6.5c0 5-6.5 11.5-6.5 11.5s-6.5-6.5-6.5-11.5A6.5 6.5 0 0 1 13 19z" />
          <circle cx="13" cy="25.5" r="2" fill="currentColor" />
          {/* Curved dashed route between them */}
          <path d="M18 36c4 3.5 10 3 14-1s4-8 3-11" strokeDasharray="3.5 3.5" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Flexible Academic Structure',
      description: 'Set up academic years, grades, sections, courses, and programs easily.',
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 sm:w-12 sm:h-12 text-[#6366F1]"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Stacked isometric diamond layers */}
          <path d="M24 8l16 9-16 9-16-9 16-9z" />
          <path d="M8 23.5l16 9 16-9" />
          <path d="M8 30.5l16 9 16-9" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="made-to-grow"
      ref={sectionRef}
      aria-labelledby="growth-heading"
      className={`w-full bg-[#FFFFFF] dark:bg-[#0B0F19] py-10 sm:py-12 md:py-14 overflow-hidden scroll-mt-24 font-sans transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <Container>
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Title Case Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/80 dark:border-indigo-900/60 mb-3 select-none hover:scale-105 transition-transform duration-200">
            <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] dark:bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Layers className="w-2.5 h-2.5 text-white" aria-hidden="true" />
            </span>
            <span className="text-[12px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">
              Multi-Campus & Scalability
            </span>
          </div>

          {/* Headline */}
          <h2
            id="growth-heading"
            className="text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[36px] font-bold text-[#0F172A] dark:text-white leading-[1.22] tracking-tight"
          >
            One Platform. Every Part of <span className="text-[#4F46E5] dark:text-indigo-400">Your Institution.</span>
          </h2>

          {/* Description */}
          <p className="mt-3 text-[15px] sm:text-[15.5px] text-[#475569] dark:text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:pretty]">
            Whether you manage a single school or multiple campuses, Pappa.ai brings your academic operations, teams, and administration together.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group relative bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-[22px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(79,70,229,0.12)] hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[160px] sm:min-h-[175px]"
            >
              {/* Decorative corner background shape */}
              <div
                className="absolute bottom-0 right-0 w-28 h-28 sm:w-32 sm:h-32 rounded-tl-[80px] sm:rounded-tl-[90px] bg-[#F5F3FF] dark:bg-indigo-950/30 pointer-events-none group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Top row: Number badge & Title */}
                  <div className="flex items-start gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                    <span className="inline-flex items-center justify-center text-[11px] font-bold text-[#4F46E5] dark:text-indigo-400 bg-[#EEF2FF] dark:bg-indigo-950/60 px-2.5 py-1 rounded-md tracking-wider shrink-0 mt-0.5">
                      {card.number}
                    </span>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0F172A] dark:text-white leading-snug tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#475569] dark:text-slate-300 leading-relaxed pr-16 sm:pr-20">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Corner Icon */}
              <div
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 pointer-events-none group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
