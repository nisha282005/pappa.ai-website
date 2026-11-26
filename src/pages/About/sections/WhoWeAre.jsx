import React from 'react';
import { Users, Layers, TrendingUp } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function WhoWeAre() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const values = [
    {
      id: 'people-first',
      title: 'People First',
      description: 'Designed for students, educators, and families.',
      delay: '100ms',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#4F46E5]"
          aria-hidden="true"
        >
          {/* Main user in front */}
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          {/* Second user behind right */}
          <path d="M20 18v-1a3 3 0 0 0-2.5-2.95" />
          <path d="M16 3.13a3.5 3.5 0 0 1 0 6.74" />
        </svg>
      ),
    },
    {
      id: 'all-in-one',
      title: 'All-in-One Platform',
      description: 'Academics, administration, and communication in one place.',
      delay: '250ms',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#4F46E5]"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 12l10 5 10-5" />
          <path d="M2 17l10 5 10-5" />
        </svg>
      ),
    },
    {
      id: 'built-to-scale',
      title: 'Built to Scale',
      description: 'Supports single schools and multi-campus institutions.',
      delay: '400ms',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#4F46E5]"
          aria-hidden="true"
        >
          {/* Bar chart bars */}
          <path d="M3 21h18" />
          <path d="M5 21v-4" />
          <path d="M10 21v-8" />
          <path d="M15 21v-12" />
          {/* Growth arrow */}
          <path d="M4 14l6-6 4 4 6-6" />
          <path d="M16 6h4v4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      aria-labelledby="who-we-are-heading"
      className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden font-sans"
    >
      <Container>
        {/* Header with horizontal line accents */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-3 transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            <div className="w-10 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
            <h2
              id="who-we-are-heading"
              className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold text-[#0F172A] tracking-tight"
            >
              Who <span className="text-[#4F46E5]">We Are</span>
            </h2>
            <div className="w-10 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
          </div>

          <p
            className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed transition-all duration-700 delay-100 ease-out [text-wrap:pretty]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            A team passionate about education and technology, building simple, reliable, and impactful solutions for modern institutions.
          </p>
        </div>

        {/* 3 Value Columns with Sequential Stagger and Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
          {values.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col items-center text-center px-6 py-6 md:py-2 transition-all duration-700 ease-out hover:-translate-y-1 ${
                index < 2 ? 'md:border-r md:border-slate-200/80' : ''
              }`}
              style={{
                transitionDelay: item.delay,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] border border-indigo-100/70 flex items-center justify-center mb-4 sm:mb-5 shadow-xs group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0F172A] leading-snug tracking-tight mb-2 group-hover:text-indigo-950 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed max-w-[260px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
