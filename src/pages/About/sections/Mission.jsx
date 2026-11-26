import React from 'react';
import { Target } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function Mission() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  return (
    <section
      id="mission"
      ref={sectionRef}
      aria-labelledby="mission-heading"
      className="w-full bg-white py-10 sm:py-14 md:py-16 overflow-hidden scroll-mt-24 font-sans"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto text-left">
          {/* Card 1: Our Mission (Slides gently from left) */}
          <div
            className="group relative bg-[#F5F3FF] border border-indigo-100/90 rounded-2xl sm:rounded-[24px] p-6 sm:p-8 lg:p-9 shadow-[0_2px_12px_rgba(79,70,229,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(79,70,229,0.12)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            style={{
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '100ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-35px)',
            }}
          >
            <div>
              {/* Target / Bullseye Icon in soft purple container */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-indigo-100/80 text-[#4F46E5] flex items-center justify-center shrink-0 mb-4 sm:mb-5 shadow-xs group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                <Target className="w-6 h-6" strokeWidth={2.2} aria-hidden="true" />
              </div>

              {/* Title */}
              <h2
                id="mission-heading"
                className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] leading-snug tracking-tight mb-2.5 group-hover:text-indigo-950 transition-colors"
              >
                Our Mission
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed">
                To simplify school operations and enable seamless learning, communication, and collaboration for every stakeholder.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision (Slides gently from right, staggered 150ms) */}
          <div
            className="group relative bg-white border border-slate-200/90 rounded-2xl sm:rounded-[24px] p-6 sm:p-8 lg:p-9 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(79,70,229,0.12)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            style={{
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '250ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(35px)',
            }}
          >
            <div>
              {/* Mountain with Flag Icon in soft purple container */}
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] border border-indigo-100/80 text-[#4F46E5] flex items-center justify-center shrink-0 mb-4 sm:mb-5 shadow-xs group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  {/* Mountain peak */}
                  <path d="M4 20L10 12L15 17L20 9" />
                  {/* Flagpole & Flag on summit */}
                  <path d="M15 4V11" />
                  <path d="M15 4L20 7L15 10" fill="currentColor" fillOpacity="0.25" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] leading-snug tracking-tight mb-2.5 group-hover:text-indigo-950 transition-colors">
                Our Vision
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed">
                To be the most trusted and people-centric platform for schools across the world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
