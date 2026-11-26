import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Laptop } from 'lucide-react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import { LOGIN_URL, APP_STORE_URL, PLAY_STORE_URL } from '../../../utils/constants';

/**
 * AccessAnywhere (OnEveryScreen) Section
 *
 * Implements the redesigned Pappa.ai multi-platform experience closely matching the reference:
 * - Two-column responsive layout:
 *   - Left: Realistic laptop with Pappa.ai web dashboard + freestanding smartphone
 *     with Pappa.ai parent app, natural shadows, and subtle lavender curved backdrop
 *   - Right: "Access Anywhere" eyebrow, bold heading with indigo highlight,
 *     clear description, and single-row CTAs (Login to Web + vertical divider + official App Store & Google Play badges)
 * - Motion:
 *   - Gentle floating animation on device mockup
 *   - Ambient pulsing on background lavender curve
 *   - Scroll-triggered smooth fade-up on text
 *   - Micro-interaction lifts on CTAs
 *   - Full respect for user reduced-motion preferences
 */
export default function OnEveryScreen() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="access-anywhere"
      background="default"
      className="relative overflow-hidden bg-white dark:bg-[#0B0F19] select-none py-16 sm:py-20 md:py-24 lg:py-28 transition-colors duration-200"
    >
      {/* Background Ambient Lavender Curve / Organic Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
              scale: [1, 1.05, 1],
              opacity: [0.65, 0.85, 0.65],
            }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[-5%] sm:left-[2%] lg:left-[5%] top-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[540px] lg:w-[580px] h-[340px] sm:h-[460px] md:h-[540px] lg:h-[580px] rounded-full bg-gradient-to-tr from-[#EEF2FF]/80 via-[#EDE9FE]/60 to-indigo-50/40 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-indigo-950/20 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center w-full relative z-10">
        {/* =========================================================================
            LEFT COLUMN: REALISTIC LAPTOP & SMARTPHONE PRODUCT MOCKUP
            ========================================================================= */}
        <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-none flex items-center justify-center lg:justify-start"
          >
            {/* Gentle Floating Device Composition */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                    y: [0, -7, 0],
                  }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.015, y: -9 }}
              className="relative w-full transition-transform duration-300"
            >
              <picture className="w-full h-auto block select-none">
                <source
                  type="image/webp"
                  srcSet="/images/on-every-screen/pappa-devices-full.webp 1x, /images/on-every-screen/pappa-devices-full@2x.webp 2x"
                />
                <source
                  type="image/png"
                  srcSet="/images/on-every-screen/pappa-devices-full.png 1x, /images/on-every-screen/pappa-devices-full@2x.png 2x"
                />
                <img
                  src="/images/on-every-screen/pappa-devices-full.png"
                  alt="Pappa.ai web dashboard on laptop and mobile application on smartphone"
                  className="w-full h-auto object-contain max-h-[360px] sm:max-h-[440px] md:max-h-[500px] lg:max-h-[540px] select-none pointer-events-none drop-shadow-[0_16px_40px_rgba(79,70,229,0.08)]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: TEXT CONTENT & PLATFORM-SPECIFIC CTA BUTTONS
            ========================================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left order-1 lg:order-2"
        >
          {/* Eyebrow: Access Anywhere */}
          <div className="font-sans text-[12.5px] sm:text-[13.5px] font-bold text-[#4F46E5] dark:text-indigo-400 mb-2.5 sm:mb-3.5">
            Access Anywhere
          </div>

          {/* Heading */}
          <h2 className="font-sans font-bold text-[#0F172A] dark:text-white tracking-tight leading-[1.14] text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px] [text-wrap:balance]">
            Your institution,{' '}
            <span className="block text-[#4F46E5] dark:text-indigo-400 mt-1 sm:mt-1.5">
              wherever you are.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 font-sans text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#475569] dark:text-slate-300 leading-relaxed max-w-xl [text-wrap:pretty]">
            Access Pappa.ai seamlessly across web and mobile. Manage your school from your desktop or stay connected on the go with our mobile app.
          </p>

          {/* Platform Actions Row: Web Login + Divider + Store Badges */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* 1. Web: Login to Web (Primary Indigo Button) */}
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#3730A3] text-white font-semibold text-[14px] sm:text-[15px] shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 shrink-0"
              aria-label="Login to Pappa.ai Web Dashboard (opens in new tab)"
            >
              <Laptop className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.3} aria-hidden="true" />
              <span>Login to Web</span>
            </a>

            {/* Subtle Vertical Divider */}
            <div
              className="hidden sm:block h-7 w-[1px] bg-slate-300 dark:bg-slate-700 mx-0.5"
              aria-hidden="true"
            />

            {/* 2. iOS & Android Store Badges Group */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Apple App Store Badge */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Pappa.ai on the App Store (opens in new tab)"
                className="inline-block transition-transform hover:scale-[1.04] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-[7px] shrink-0"
              >
                <img
                  src="/app-store/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-10 sm:h-11 w-auto block select-none"
                />
              </a>

              {/* Google Play Store Badge */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Pappa.ai on Google Play (opens in new tab)"
                className="inline-block transition-transform hover:scale-[1.04] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-[7px] shrink-0"
              >
                <img
                  src="/app-store/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-11 w-auto block select-none"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
