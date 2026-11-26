import React from 'react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function OurImpact() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  return (
    <section
      id="our-impact"
      ref={sectionRef}
      aria-labelledby="impact-heading"
      className="w-full bg-white pb-14 sm:pb-18 md:pb-24 pt-4 sm:pt-6 font-sans overflow-hidden"
    >
      <Container>
        {/* Unified Impact Card with Soft Lavender Background */}
        <div
          className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-[24px] bg-[#FAF8FF] border border-indigo-100/90 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_2px_16px_rgba(79,70,229,0.04)] overflow-hidden transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Column: Campus Building Illustration */}
            <div
              className="md:col-span-5 flex items-center justify-center transition-all duration-700 delay-150 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.97)',
              }}
            >
              <picture className="w-full max-w-[280px] sm:max-w-[320px]">
                <source srcSet="/images/about/about-impact-campus.webp" type="image/webp" />
                <img
                  src="/images/about/about-impact-campus.png"
                  alt="Connected campus building illustration"
                  width={470}
                  height={270}
                  className="w-full h-auto object-contain mx-auto"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Right Column: Text & Content with Staggered Fade */}
            <div
              className="md:col-span-7 text-left transition-all duration-700 delay-250 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF]/80 mb-3 select-none hover:scale-105 transition-transform duration-200">
                <span className="text-[12px] font-semibold text-[#4F46E5] tracking-tight">
                  Our Impact
                </span>
              </div>

              {/* Heading */}
              <h2
                id="impact-heading"
                className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold text-[#0F172A] leading-[1.2] tracking-tight mb-3 [text-wrap:balance]"
              >
                Empowering Schools <span className="text-[#4F46E5]">to Grow</span>
              </h2>

              {/* Description */}
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-xl [text-wrap:pretty]">
                We help educational institutions operate more efficiently, stay connected, and deliver a better learning experience for their community.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
