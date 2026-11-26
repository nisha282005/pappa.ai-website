import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ImageCarousel
 * Reusable, accessible image carousel component with:
 * - Touch swipe support for mobile
 * - Keyboard navigation (ArrowLeft, ArrowRight, Home, End)
 * - Clickable previous/next arrow controls
 * - Clickable pagination dots
 * - Smooth horizontal sliding transition (300-400ms)
 * - Constant aspect-ratio container to prevent layout shifting
 * - Automatically disables/hides controls when only one slide is available
 * - Clean visual styling: 16px rounded corners, thin light-indigo border, subtle shadow
 */
export default function ImageCarousel({
  slides = [],
  aspectRatio = 'aspect-[524/293]',
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const containerRef = useRef(null);

  const totalSlides = slides.length;
  const hasMultipleSlides = totalSlides > 1;

  // Next Slide Handler
  const goToNext = useCallback(() => {
    if (!hasMultipleSlides) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [hasMultipleSlides, totalSlides]);

  // Previous Slide Handler
  const goToPrev = useCallback(() => {
    if (!hasMultipleSlides) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [hasMultipleSlides, totalSlides]);

  // Go to Specific Slide
  const goToSlide = (index) => {
    if (!hasMultipleSlides) return;
    setCurrentIndex(index);
  };

  // Keyboard Navigation
  const handleKeyDown = (e) => {
    if (!hasMultipleSlides) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setCurrentIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setCurrentIndex(totalSlides - 1);
    }
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    if (!hasMultipleSlides) return;
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    if (!hasMultipleSlides) return;
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!hasMultipleSlides || touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45; // 45px swipe threshold

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // AutoPlay support if enabled
  useEffect(() => {
    if (!autoPlay || !hasMultipleSlides) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, hasMultipleSlides, goToNext]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Dashboard Image Frame */}
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Learning dashboard preview"
        tabIndex={hasMultipleSlides ? 0 : -1}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative w-full ${aspectRatio} rounded-2xl bg-white dark:bg-[#111827] border border-[#E0E7FF] dark:border-slate-800 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.06),0_4px_16px_-4px_rgba(15,23,42,0.03)] dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 transition-shadow duration-300 hover:shadow-[0_20px_48px_-12px_rgba(15,23,42,0.09),0_6px_20px_-4px_rgba(15,23,42,0.04)]`}
      >
        {/* Slides Track */}
        <div
          className="w-full h-full flex transition-transform duration-350 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id || idx}
              role="group"
              aria-roledescription="slide"
              aria-label={slide.title || `Slide ${idx + 1} of ${totalSlides}`}
              aria-hidden={idx !== currentIndex}
              className="min-w-full w-full h-full flex items-center justify-center bg-white dark:bg-[#111827] select-none overflow-hidden"
            >
              <picture className="w-full h-full flex items-center justify-center">
                {slide.webp && <source srcSet={slide.webp} type="image/webp" />}
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title || 'Dashboard screenshot'}
                  className="w-full h-full object-contain select-none"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  draggable={false}
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Previous Arrow Button (Only displayed when multiple slides exist) */}
        {hasMultipleSlides && (
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#4F46E5] dark:hover:text-indigo-400 shadow-md border border-slate-200/80 dark:border-slate-700 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] active:scale-95 cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
        )}

        {/* Next Arrow Button (Only displayed when multiple slides exist) */}
        {hasMultipleSlides && (
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#4F46E5] dark:hover:text-indigo-400 shadow-md border border-slate-200/80 dark:border-slate-700 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] active:scale-95 cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Pagination Dots (Only displayed when multiple slides exist) */}
      {hasMultipleSlides && (
        <div
          role="tablist"
          aria-label="Carousel pagination"
          className="flex items-center justify-center gap-2 mt-4 select-none"
        >
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id || idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${slide.title || 'Slide'}`}
                onClick={() => goToSlide(idx)}
                className="p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-full cursor-pointer transition-all"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-6 bg-[#4F46E5] dark:bg-indigo-500'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
