import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../../../components/common/Container';

/**
 * AboutHero - Section 1: Hero
 * 
 * Clean, modern school-management hero with subtle lavender background,
 * centered headline, 3D educational illustrations on left and right, and Contact Us CTA.
 */
export default function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="pappa-hero-under-header relative w-full bg-[#F8F7FF] dark:bg-[#0B0F19] font-sans overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 transition-colors duration-200"
    >
      {/* Ambient background glows / organic lavender shapes */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-[#EDE9FE]/50 dark:bg-indigo-950/40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#E0E7FF]/50 dark:bg-purple-950/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      />

      {/* Left 3D Illustration: Purple Stacked Books with Pencil Cup */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hidden md:block absolute left-[3%] lg:left-[6%] xl:left-[8%] top-[22%] lg:top-[20%] z-10 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-20 sm:w-36 sm:h-24 lg:w-44 lg:h-30 xl:w-48 xl:h-32 drop-shadow-lg"
        >
          <img
            src="/images/about/about-hero-books.png"
            alt=""
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>
      </motion.div>

      {/* Right 3D Illustration: Purple Graduation Cap with Golden Tassel */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="hidden md:block absolute right-[3%] lg:right-[6%] xl:right-[8%] top-[20%] lg:top-[18%] z-10 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="w-28 h-22 sm:w-36 sm:h-26 lg:w-40 lg:h-32 xl:w-44 xl:h-34 drop-shadow-lg"
        >
          <img
            src="/images/about/about-hero-cap.png"
            alt=""
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>
      </motion.div>

      <Container className="relative z-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Pill Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#EDE9FE]/80 dark:bg-indigo-950/60 border border-[#DDD6FE] dark:border-indigo-800/80 text-[#4F46E5] dark:text-indigo-300 text-xs sm:text-sm font-bold shadow-2xs mb-5 sm:mb-6"
          >
            <span>About Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="about-hero-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#0F172A] dark:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.18] mb-5 sm:mb-6"
          >
            Making School Management{' '}
            <span className="text-[#4F46E5] dark:text-indigo-400 inline-block">
              Simpler, Smarter &amp; Connected.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#475569] dark:text-slate-300 text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl mb-8 sm:mb-9 [text-wrap:balance]"
          >
            Pappa.ai connects students, teachers, parents and administrators on one platform to make everyday school operations effortless and more engaging.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
