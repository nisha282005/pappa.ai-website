import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function Academics() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });
  const reduceMotion = useReducedMotion();

  const slideRight = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 80 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.2 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  const capabilities = [
    'Automated Timetable & Section Scheduling',
    'Real-Time Teacher & Room Availability Tracking',
    'Multi-Campus Synchronized Academic Calendars',
  ];

  return (
    <section
      id="academics"
      ref={sectionRef}
      aria-labelledby="academics-heading"
      className={`w-full bg-white dark:bg-[#0B0F19] py-10 sm:py-12 md:py-14 overflow-hidden scroll-mt-24 font-sans transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left">
            {/* Title Case Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/80 dark:border-indigo-900/60 mb-3 select-none hover:scale-105 transition-transform duration-200">
              <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] dark:bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                <Calendar className="w-2.5 h-2.5 text-white" aria-hidden="true" />
              </span>
              <span className="text-[12px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">
                Academics & Scheduling
              </span>
            </div>

            {/* Headline */}
            <h2
              id="academics-heading"
              className="text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[36px] font-bold text-[#0F172A] dark:text-white leading-[1.22] tracking-tight [text-wrap:balance]"
            >
              Run the School Day with{' '}
              <span className="text-[#4F46E5] dark:text-indigo-400">Fewer Moving Parts</span>
            </h2>

            {/* Description */}
            <p className="mt-3 sm:mt-3.5 text-[15px] sm:text-[15.5px] leading-relaxed text-[#475569] dark:text-slate-300 max-w-[480px]">
              Keep timetables, calendars, and classes organized while maintaining a crystal-clear operational view across every campus.
            </p>

            {/* Capability Checklist */}
            <ul className="mt-5 sm:mt-6 space-y-3 w-full">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="group flex items-center gap-3 text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300 transition-transform duration-200 hover:translate-x-1"
                >
                  <span className="w-5 h-5 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#4F46E5] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-normal">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Container with 16px Image Padding */}
          <motion.div {...slideRight} className="lg:col-span-7 w-full flex items-center justify-center relative">
            {/* Main Image Container with 16px (p-4) padding */}
            <div className="group relative w-full rounded-2xl sm:rounded-[24px] bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-[0_12px_32px_-8px_rgba(79,70,229,0.08),0_4px_12px_-4px_rgba(15,23,42,0.04)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_48px_-10px_rgba(79,70,229,0.12)] hover:border-indigo-200/80 dark:hover:border-indigo-500/40 p-4">
              <picture className="block w-full">
                <source srcSet="/images/features/academics-timetable.webp" type="image/webp" />
                <img
                  src="/images/features/academics-timetable.png"
                  alt="Pappa.ai Academics Allocations and Timetable schedule management"
                  className="w-full h-auto block select-none rounded-xl sm:rounded-[18px] group-hover:scale-[1.01] transition-transform duration-500"
                  width="1024"
                  height="537"
                  loading="eager"
                />
              </picture>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
