import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Shield,
  QrCode,
  ShieldCheck,
  CalendarClock,
} from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function Safety() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });
  const reduceMotion = useReducedMotion();

  const slideLeft = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.2 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const containerRef = useRef(null);

  // 3 Authentic Campus Safety Screenshots
  const slides = [
    {
      id: 'campus-checkin',
      title: 'Campus Check-In',
      subtitle: 'Monitoring active campus gates and verification streams',
      image: '/images/features/safety-campus-checkin.png',
      webp: '/images/features/safety-campus-checkin.webp',
      alt: 'Pappa.ai Campus Check-In monitoring active gates and scheduled student entry requests',
    },
    {
      id: 'qr-scan',
      title: 'Digital Check-in Scan',
      subtitle: 'Align QR code within the frame to verify entry',
      image: '/images/features/safety-qr-scan.png',
      webp: '/images/features/safety-qr-scan.webp',
      alt: 'Pappa.ai Digital Check-In camera scanner modal for parent and student verification',
    },
    {
      id: 'qr-token',
      title: 'Point-of-Entry Security Token',
      subtitle: 'Rotating security token QR code with high-security auto-expiry',
      image: '/images/features/safety-qr-token.png',
      webp: '/images/features/safety-qr-token.webp',
      alt: 'Pappa.ai Point-of-Entry Security Token rotating QR code pass',
    },
  ];

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatic slide progression every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  // Keyboard Navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
  };

  // Touch Handlers for Mobile Swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      goToNext();
    } else if (distance < -45) {
      goToPrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const safetyFeatures = [
    {
      icon: QrCode,
      title: 'QR-Based Verification',
      description: 'Scan QR codes to verify student and parent entry.',
    },
    {
      icon: ShieldCheck,
      title: 'Pickup Authorization',
      description: 'Teachers can scan or generate QR codes to authorize pickups.',
    },
    {
      icon: CalendarClock,
      title: 'Advance Scheduling',
      description: 'Schedule student pickups ahead of time for smooth coordination.',
    },
  ];

  return (
    <section
      id="safety"
      ref={sectionRef}
      aria-labelledby="safety-heading"
      className={`w-full bg-[#FBFBFF] dark:bg-[#080C14] py-10 sm:py-12 md:py-14 overflow-hidden scroll-mt-24 font-sans transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">

          {/* Left Column: Campus Safety Image Card Carousel with 16px (p-4) padding & 5s auto-run */}
          <motion.div {...slideLeft} className="lg:col-span-7 w-full flex items-center justify-center order-2 lg:order-1 relative">
            <div
              ref={containerRef}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              role="region"
              aria-label="Campus safety product screenshots carousel"
              className="group relative w-full rounded-2xl sm:rounded-[24px] bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-[0_12px_32px_-8px_rgba(79,70,229,0.08),0_4px_12px_-4px_rgba(15,23,42,0.04)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_48px_-10px_rgba(79,70,229,0.12)] hover:border-indigo-200/80 dark:hover:border-indigo-500/40 p-4 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/30"
            >
              {/* Carousel Viewport with 16px inner rounded container */}
              <div className="relative w-full aspect-[1024/720] rounded-xl sm:rounded-[18px] overflow-hidden bg-slate-50/40 dark:bg-slate-900/40 select-none">
                {/* Sliding Track */}
                <div
                  className="w-full h-full flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {slides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${slide.title} (${idx + 1} of ${totalSlides})`}
                      aria-hidden={idx !== currentIndex}
                      className="min-w-full w-full h-full flex items-center justify-center select-none"
                    >
                      <picture className="w-full h-full flex items-center justify-center">
                        <source srcSet={slide.webp} type="image/webp" />
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-contain select-none group-hover:scale-[1.01] transition-transform duration-500"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          draggable={false}
                          width="1024"
                          height="720"
                        />
                      </picture>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots below image inside the card */}
              <div
                role="tablist"
                aria-label="Safety screenshots pagination"
                className="flex items-center justify-center gap-1.5 mt-3 select-none"
              >
                {slides.map((slide, idx) => {
                  const isActive = currentIndex === idx;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={slide.title}
                      className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#4F46E5] ${
                        isActive
                          ? 'w-6 h-1.5 bg-[#4F46E5] dark:bg-indigo-500'
                          : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start text-left order-1 lg:order-2">
            {/* Title Case Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/80 dark:border-indigo-900/60 mb-3 select-none hover:scale-105 transition-transform duration-200">
              <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] dark:bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                <Shield className="w-2.5 h-2.5 text-white" aria-hidden="true" />
              </span>
              <span className="text-[12px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">
                Campus Safety & Dismissal
              </span>
            </div>

            {/* Headline */}
            <h2
              id="safety-heading"
              className="text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[36px] font-bold text-[#0F172A] dark:text-white leading-[1.22] tracking-tight [text-wrap:balance]"
            >
              Secure Campus Entry &{' '}
              <span className="text-[#4F46E5] dark:text-indigo-400">Easy Student Pickups</span>
            </h2>

            {/* Description */}
            <p className="mt-3 sm:mt-3.5 text-[15px] sm:text-[15.5px] leading-relaxed text-[#475569] dark:text-slate-300 max-w-[480px]">
              Verify student pickups with QR scanning, authorize entry, and schedule pickups in advance.
            </p>

            {/* 3 Safety Benefit Cards */}
            <div className="mt-5 sm:mt-6 space-y-3 w-full">
              {safetyFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-200">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-[14px] sm:text-[14.5px] font-semibold text-[#0F172A] dark:text-white leading-snug group-hover:text-indigo-950 dark:group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[13px] sm:text-[13.5px] text-[#64748B] dark:text-slate-400 leading-relaxed mt-1">
                        {item.description}
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
