import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../../components/common/Container';

/**
 * AboutTestimonials - Section 5: Testimonials
 *
 * Clean two-column testimonials section showcasing trusted school partners,
 * with campus photo on the left and quote card with interactive navigation on the right.
 */
export default function AboutTestimonials() {
  const testimonials = [
    {
      id: 'ats',
      quote:
        'Pappa.ai has made our school operations more organized and communication with parents much smoother. It\'s easy to use for our entire staff.',
      author: 'Acton Tamil School (ATS)',
      role: 'School Partner',
      image: '/images/about/about-testimonial-school.png',
    },
    {
      id: 'oakridge',
      quote:
        'The attendance tracking and automated notifications have significantly reduced our administrative workload while keeping parents fully informed.',
      author: 'Heritage Academy',
      role: 'School Partner',
      image: '/images/about/about-testimonial-school.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="about-testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full bg-white dark:bg-[#0B0F19] font-sans py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-200"
    >
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EDE9FE]/80 dark:bg-indigo-950/60 border border-[#DDD6FE] dark:border-indigo-800/80 text-[#4F46E5] dark:text-indigo-300 text-xs font-bold shadow-2xs mb-4">
            <span>Testimonials</span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-[#0F172A] dark:text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight leading-tight mb-4"
          >
            Trusted by Schools
          </h2>

          <p className="text-[#64748B] dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Here's what our school partners have to say about Pappa.ai.
          </p>
        </div>

        {/* Two-Column Testimonial Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Left Column: School Building Photo */}
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] rounded-2xl overflow-hidden border border-[#EDE9FE] dark:border-slate-800 shadow-xs bg-[#F8F7FF] dark:bg-slate-900">
              <img
                src={current.image}
                alt={`${current.author} campus building`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="md:col-span-7 flex flex-col justify-between bg-[#F8F7FF] dark:bg-[#111827] rounded-2xl p-7 sm:p-9 border border-[#EDE9FE] dark:border-slate-800 shadow-2xs relative">
            {/* Quote Icon */}
            <div>
              <div className="text-[#4F46E5] dark:text-indigo-400 mb-3">
                <Quote className="w-8 h-8 rotate-180 fill-current opacity-80" />
              </div>

              {/* Quote Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#0F172A] dark:text-slate-100 text-base sm:text-lg font-medium leading-relaxed mb-6 [text-wrap:pretty]">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author Info & Nav Buttons */}
            <div className="pt-4 border-t border-[#EDE9FE] dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] dark:text-white">
                  {current.author}
                </h3>
                <p className="text-xs text-[#64748B] dark:text-slate-400 font-medium mt-0.5">
                  {current.role}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-700 flex items-center justify-center text-[#64748B] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white hover:border-[#CBD5E1] dark:hover:border-slate-600 transition-all shadow-2xs active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-[#4F46E5] text-white flex items-center justify-center hover:bg-[#4338CA] transition-all shadow-xs active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
