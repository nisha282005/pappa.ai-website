import React from 'react';
import Container from '../../../components/common/Container';
import Badge from '../../../components/common/Badge';
import Reveal from './Reveal';

/**
 * About page hero: centred headline on a soft lavender background with
 * flowing shapes in the corners. Sits behind the transparent header.
 */
export default function AboutIntroHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="pappa-hero-under-header relative isolate overflow-hidden bg-gradient-to-b from-[#F7F5FF] to-[#F1EEFF] dark:from-[#0B0F19] dark:to-[#0F1328] pt-[104px] sm:pt-[112px] lg:pt-[120px] pb-12 sm:pb-14 lg:pb-16 font-sans transition-colors duration-200"
    >
      {/* Flowing shapes */}
      <svg aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[260px] w-[520px] text-[#E9E5FF] dark:text-indigo-500/10" viewBox="0 0 520 260" fill="none" preserveAspectRatio="none">
        <path d="M0 40C120 30 210 90 280 160C330 210 400 250 520 260H0V40Z" fill="currentColor" />
      </svg>
      <svg aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 -z-10 h-[300px] w-[560px] text-[#ECE8FF] dark:text-purple-500/10" viewBox="0 0 560 300" fill="none" preserveAspectRatio="none">
        <path d="M560 300C430 290 360 230 320 160C280 90 210 20 60 0H560V300Z" fill="currentColor" />
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 -z-10 h-56 w-[640px] -translate-x-1/2 rounded-full bg-white/70 dark:bg-indigo-600/10 blur-3xl" />

      <Container className="text-center">
        <Reveal>
          <Badge variant="brand" className="mb-4">About Us</Badge>
          <h1
            id="about-title"
            className="mx-auto max-w-3xl text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold tracking-tight leading-[1.12] text-[#0F172A] dark:text-white [text-wrap:balance]"
          >
            Building a More Connected and Efficient{' '}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              School Ecosystem
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[#475569] dark:text-slate-300">
            We&rsquo;re on a mission to simplify school management, bring every role together, and create a better learning experience for every student.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
