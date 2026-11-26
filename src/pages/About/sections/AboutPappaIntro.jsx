import React from 'react';
import { Users, Sliders, GraduationCap } from 'lucide-react';
import Container from '../../../components/common/Container';

/**
 * AboutPappaIntro - Section 2: About Pappa.ai & Our Focus
 *
 * Two-column section with classroom learning photo on the left,
 * brand mission copy on the right, and a horizontal "Our Focus" panel at the bottom.
 */
export default function AboutPappaIntro() {
  const focusItems = [
    {
      icon: Users,
      title: 'People',
      desc: 'Stronger school connections',
    },
    {
      icon: Sliders,
      title: 'Processes',
      desc: 'Simpler, faster operations',
    },
    {
      icon: GraduationCap,
      title: 'Learning',
      desc: 'A better learning experience',
    },
  ];

  return (
    <section
      id="about-intro"
      aria-labelledby="about-intro-heading"
      className="w-full bg-white dark:bg-[#0B0F19] font-sans py-14 sm:py-18 lg:py-20 overflow-hidden transition-colors duration-200"
    >
      <Container>
        {/* Two-Column Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with soft organic lavender backdrop */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Lavender organic background frame */}
              <div
                className="absolute inset-0 bg-[#EDE9FE]/70 dark:bg-indigo-950/40 rounded-[28px] sm:rounded-[36px] -rotate-1 scale-102 transition-transform duration-500 pointer-events-none"
                aria-hidden="true"
              />
              
              {/* Image Container */}
              <div className="relative bg-white dark:bg-[#111827] p-2 sm:p-2.5 rounded-[26px] sm:rounded-[34px] shadow-sm border border-[#EDE9FE] dark:border-slate-800 overflow-hidden">
                <img
                  src="/images/about/about-classroom-learning.png"
                  alt="Teacher and students learning together with a digital tablet"
                  className="w-full h-auto object-cover rounded-[20px] sm:rounded-[28px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EDE9FE]/80 dark:bg-indigo-950/60 border border-[#DDD6FE] dark:border-indigo-800/80 text-[#4F46E5] dark:text-indigo-300 text-xs font-bold shadow-2xs mb-4">
              <span>About Pappa.ai</span>
            </div>

            {/* Heading */}
            <h2
              id="about-intro-heading"
              className="text-[#0F172A] dark:text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-5"
            >
              Built for Schools,<br />
              <span className="text-[#4F46E5] dark:text-indigo-400">With People at the Center.</span>
            </h2>

            {/* Description */}
            <p className="text-[#475569] dark:text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:pretty]">
              Pappa.ai is a school management platform designed to bring people, processes and learning together. We help schools run smoothly, improve communication and create a more connected and engaging school experience for students, teachers, parents and administrators.
            </p>
          </div>
        </div>

        {/* Bottom Horizontal "Our Focus" Panel */}
        <div className="mt-12 sm:mt-16 bg-[#F8F7FF] dark:bg-[#111827] rounded-2xl sm:rounded-3xl border border-[#EDE9FE] dark:border-slate-800 p-4 sm:p-6 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
            {/* "Our Focus" Pill Label */}
            <div className="md:col-span-3 flex md:justify-start">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-[#DDD6FE] dark:border-slate-700 text-[#0F172A] dark:text-white text-xs sm:text-sm font-bold shadow-2xs">
                Our Focus
              </span>
            </div>

            {/* 3 Focus Columns */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {focusItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-[#EDE9FE] dark:border-slate-700 flex items-center justify-center text-[#4F46E5] dark:text-indigo-400 shrink-0 shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A] dark:text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
