import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../../components/common/Container';
import Reveal from './Reveal';

/** About page: clean horizontal "Request a Demo" banner matching the reference card. */
export default function AboutDemoCTA() {
  return (
    <section
      aria-labelledby="about-demo-heading"
      className="bg-white dark:bg-[#0B0F19] pb-12 sm:pb-14 lg:pb-16 font-sans transition-colors duration-200"
    >
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#EDE9FE] dark:border-slate-800 bg-white dark:bg-[#111827] px-6 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-10 shadow-[0_18px_50px_-28px_rgba(79,70,229,0.35)] dark:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.8)]">
            {/* Soft lavender wave shapes at bottom-left and bottom-right */}
            <svg
              aria-hidden="true"
              viewBox="0 0 280 120"
              fill="none"
              className="pointer-events-none absolute -bottom-2 -left-2 -z-10 h-28 w-64 text-[#F5F3FF] dark:text-indigo-950/35"
            >
              <path
                d="M0 30C45 10 90 55 150 65C205 74 245 95 280 120H0V30Z"
                fill="currentColor"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 320 140"
              fill="none"
              className="pointer-events-none absolute -bottom-2 -right-2 -z-10 h-32 w-72 text-[#F5F3FF] dark:text-indigo-950/35"
            >
              <path
                d="M320 15C265 20 230 65 165 85C105 103 45 110 0 140H320V15Z"
                fill="currentColor"
              />
            </svg>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              {/* Left: Playful Monitor/Play Icon + Copy */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                {/* Icon box with top-left accent rays */}
                <div className="relative shrink-0">
                  {/* Top-left accent rays */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="absolute -top-4 -left-4 h-8 w-8 text-[#7C3AED] dark:text-indigo-400"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  >
                    <line x1="8" y1="22" x2="14" y2="23" />
                    <line x1="14" y1="11" x2="18" y2="17" />
                    <line x1="25" y1="7" x2="25" y2="14" />
                    <line x1="33" y1="11" x2="31" y2="16" />
                  </svg>

                  <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-[#F5F3FF] dark:bg-indigo-950/60 border border-[#EDE9FE]/80 dark:border-indigo-900/50">
                    {/* Monitor + Play + Cursor SVG */}
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                      className="h-12 w-12 sm:h-14 sm:w-14 text-[#4F46E5] dark:text-indigo-400"
                    >
                      {/* Monitor frame */}
                      <rect
                        x="8"
                        y="12"
                        width="44"
                        height="30"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="3.2"
                      />
                      {/* Monitor stand */}
                      <path
                        d="M30 42v7M22 49h16"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                      {/* Play triangle */}
                      <path
                        d="M27 21.5L36.5 27L27 32.5V21.5Z"
                        fill="currentColor"
                      />
                      {/* Cursor arrow */}
                      <path
                        d="M42 33L54 39.5L47.5 41.8L45.5 48.5L42 33Z"
                        fill="#1E1B4B"
                        className="dark:fill-white"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <p className="text-[12.5px] sm:text-[13px] font-bold tracking-tight text-[#0F172A] dark:text-indigo-300">
                    See Pappa.ai in Action
                  </p>
                  <h2
                    id="about-demo-heading"
                    className="mt-1 text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold tracking-tight leading-[1.15] text-[#0F172A] dark:text-white"
                  >
                    Request a Demo
                  </h2>
                  <p className="mt-1.5 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-[#475569] dark:text-slate-400 [text-wrap:pretty]">
                    Get a personalized walkthrough of Pappa.ai for your institution.
                  </p>
                </div>
              </div>

              {/* Right: CTA Button */}
              <Link
                to="/contact"
                className="group inline-flex min-h-[48px] w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-[#4F46E5] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_12px_24px_-10px_rgba(79,70,229,0.7)] hover:bg-[#4338CA] active:bg-[#3730A3] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4F46E5]/30"
              >
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
