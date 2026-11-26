import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Container from '../../../components/common/Container';

/**
 * About page banner: a rounded photo strip of the school with an indigo tint,
 * the page title and a breadcrumb. Sits just below the transparent header.
 */
export default function AboutBanner() {
  return (
    <section
      aria-labelledby="about-title"
      className="pappa-hero-under-header bg-[#F8F7FF] dark:bg-[#0B0F19] pt-[80px] sm:pt-[84px] font-sans transition-colors duration-200"
    >
      <Container>
        <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[28px] h-[150px] sm:h-[180px] lg:h-[200px] shadow-[0_20px_50px_-30px_rgba(79,70,229,0.55)] dark:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]">
          <img
            src="/images/about/v2/about-banner.webp"
            alt=""
            className="absolute inset-0 -z-10 w-full object-cover object-[70%_60%]"
            // Inline so it beats the global `img { height: auto }` reset.
            style={{ height: '100%' }}
          />
          {/* Tint: brand indigo in light, deep navy in dark, darker in the middle behind the text */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4F46E5]/55 via-[#4338CA]/60 to-[#7C3AED]/35 dark:from-[#0B0F19]/80 dark:via-[#1E1B4B]/75 dark:to-[#0B0F19]/60" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(30,27,75,0.35),transparent_65%)]" />

          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 id="about-title" className="text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-tight leading-none text-white [text-shadow:0_2px_16px_rgba(30,27,75,0.35)]">
              About Us
            </h1>
            <nav aria-label="Breadcrumb" className="mt-3">
              <ol className="flex items-center gap-1.5 text-[13px] sm:text-sm font-medium text-white/85">
                <li>
                  <Link to="/" className="rounded hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li aria-current="page" className="text-white">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
