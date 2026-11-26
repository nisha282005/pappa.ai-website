import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Container from '../../../components/common/Container';

const SLIDES = [
  {
    id: 'unified-modules',
    eyebrow: 'Why Pappa.ai',
    heading: 'Less juggling.',
    highlight: 'More time for what matters.',
    description:
      'Bring everyday tasks together so your institution can focus on its people.',
    benefits: [
      'All key modules in one system',
      'Less switching between tools',
      'A simpler way to manage your institution',
    ],
    image: '/images/why-choose/slide1-dashboard.png',
    alt: 'Pappa.ai dashboard on laptop with floating connected modules for Academics, Learning, Fees, Safety, Communication, and Enrollment',
    isTransparentBg: true,
  },
  {
    id: 'safety-connected',
    eyebrow: 'Why Pappa.ai',
    heading: 'More confidence',
    highlight: 'in every school day.',
    description:
      'Keep everyday safety activities and important child-related information connected.',
    benefits: [
      'Clearer visibility into everyday safety activities',
      'Important updates reach the right people',
      'A more connected experience for families',
    ],
    image: '/images/why-choose/slide2-safety.jpg',
    alt: 'School campus and bus transport with real-time mobile safety notifications for families',
    isTransparentBg: false,
  },
  {
    id: 'flexible-setup',
    eyebrow: 'Why Pappa.ai',
    heading: 'Your institution.',
    highlight: 'Your way of working.',
    description:
      "Get personal guidance to shape Pappa.ai around your institution's needs.",
    benefits: [
      "Understand your institution's needs",
      'Configure the experience around your workflow',
      'Get personal setup guidance',
    ],
    image: '/images/why-choose/slide3-support.jpg',
    alt: 'Professional onboarding and personal configuration consultation session',
    isTransparentBg: false,
  },
];

// Autoplay interval: 5.5 seconds (within the 5–6 second requirement)
const AUTOPLAY_INTERVAL = 5500;

export default function WhyChoosePappa() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const autoplayTimerRef = useRef(null);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    if (!isHovered && !isFocused && !isTabHidden && !prefersReducedMotion) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
      }, AUTOPLAY_INTERVAL);
    }
  }, [isHovered, isFocused, isTabHidden, prefersReducedMotion]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    resetAutoplay();
  }, [resetAutoplay]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    resetAutoplay();
  }, [resetAutoplay]);

  const handleDotClick = useCallback(
    (index) => {
      setCurrentIndex(index);
      resetAutoplay();
    },
    [resetAutoplay]
  );

  // Tab visibility detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Autoplay management
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [resetAutoplay]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !e.changedTouches || e.changedTouches.length === 0)
      return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section
      id="why-choose-pappa"
      role="region"
      aria-roledescription="carousel"
      aria-label="Why Choose Pappa.ai Showcase"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      className="relative w-full bg-[#FFFFFF] dark:bg-[#0B0F19] pappa-section-py overflow-hidden border-t border-b border-slate-100 dark:border-slate-800 select-none focus:outline-none transition-colors duration-200"
    >
      <Container className="relative">
        {/* Main 2-column continuous banner layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left z-10">
            {/* Eyebrow: 12px gap to heading */}
            <div className="text-[11.5px] sm:text-[12px] font-bold text-[#4F46E5] dark:text-indigo-400 mb-3">
              {currentSlide.eyebrow}
            </div>

            {/* Stable height container to avoid any layout jump during transitions */}
            <div className="relative min-h-[290px] sm:min-h-[280px] lg:min-h-[310px]">
              {SLIDES.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={slide.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${index + 1} of ${SLIDES.length}: ${slide.heading} ${slide.highlight}`}
                    aria-hidden={!isActive}
                    className={`transition-all duration-500 ease-out ${isActive
                      ? 'opacity-100 translate-x-0 relative z-10 pointer-events-auto'
                      : 'opacity-0 -translate-x-3 absolute inset-0 z-0 pointer-events-none'
                      }`}
                  >
                    {/* Main Heading: 36px desktop, 30px tablet, 26px mobile; font-weight 700; line-height 1.2 */}
                    <h2 className="pappa-h2 [text-wrap:balance]">
                      {slide.heading}{' '}
                      <span className="text-[#4F46E5] dark:text-indigo-400">{slide.highlight}</span>
                    </h2>

                    {/* Body Text: 16px desktop, 15px mobile, 1.65 line-height, #334155 */}
                    <p className="mt-4 pappa-body max-w-xl [text-wrap:pretty]">
                      {slide.description}
                    </p>

                    {/* Benefit List: 13.5-14px with crisp indigo check badge */}
                    <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                      {slide.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center gap-3">
                          <span
                            className="w-5 h-5 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs"
                            aria-hidden="true"
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span className="text-[13.5px] sm:text-[14px] text-[#334155] dark:text-slate-300 font-medium leading-normal">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-3 mt-4 sm:mt-6 pt-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-11 h-11 rounded-full bg-[#FFFFFF] dark:bg-slate-800 hover:bg-[#F8FAFC] dark:hover:bg-slate-700 text-[#4F46E5] dark:text-indigo-400 border border-slate-200/90 dark:border-slate-700 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-11 h-11 rounded-full bg-[#FFFFFF] dark:bg-slate-800 hover:bg-[#F8FAFC] dark:hover:bg-slate-700 text-[#4F46E5] dark:text-indigo-400 border border-slate-200/90 dark:border-slate-700 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Visual Banner */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Visual Container with fixed aspect ratio to eliminate layout shifts */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9] max-h-[460px] flex items-center justify-center">
              {SLIDES.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={slide.id}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${isActive
                      ? 'opacity-100 scale-100 relative z-10 pointer-events-auto'
                      : 'opacity-0 scale-[0.98] absolute inset-0 z-0 pointer-events-none'
                      }`}
                  >
                    {/* Clean rounded card frame matching all slides */}
                    <div className="w-full h-full p-1.5 sm:p-2 bg-white dark:bg-[#111827] rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className={`w-full h-full rounded-xl sm:rounded-2xl ${slide.isTransparentBg ? 'object-contain bg-white' : 'object-cover'}`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Arrows (Visible only on small screens) */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-[#FFFFFF] dark:bg-slate-800 hover:bg-[#F8FAFC] dark:hover:bg-slate-700 text-[#4F46E5] dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-[#FFFFFF] dark:bg-slate-800 hover:bg-[#F8FAFC] dark:hover:bg-slate-700 text-[#4F46E5] dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>

        {/* Pagination Dots (Bottom centered inside banner) */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-5">
          {SLIDES.map((slide, dotIndex) => {
            const isActive = currentIndex === dotIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleDotClick(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}: ${slide.heading}`}
                aria-current={isActive ? 'true' : 'false'}
                className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${isActive
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#4F46E5] dark:bg-indigo-500 shadow-xs'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#CBD5E1] dark:bg-slate-700 hover:bg-[#94A3B8] dark:hover:bg-slate-600'
                  }`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
