import React from 'react';
import { Target, Flag } from 'lucide-react';
import Container from '../../../components/common/Container';
import Reveal from './Reveal';

const CARDS = [
  {
    icon: Target,
    title: 'Our Vision',
    text: 'To be a trusted, all-in-one platform that empowers schools to deliver a better learning experience.',
  },
  {
    icon: Flag,
    title: 'Our Mission',
    text: 'To simplify and unify school operations with intuitive, reliable and role-based solutions for every stakeholder.',
  },
];

/**
 * About page: a rounded band with a photo of students on the left and an indigo
 * mission panel on the right (curved edge on desktop), then Vision and Mission
 * cards overlapping its bottom edge. On phones the photo stacks above the panel.
 */
export default function AboutMissionVision() {
  return (
    <section id="mission" aria-labelledby="about-mission-heading" className="bg-white dark:bg-[#0B0F19] pt-4 pb-12 sm:pb-14 lg:pb-16 font-sans overflow-x-clip transition-colors duration-200">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[#312E81] shadow-[0_30px_60px_-36px_rgba(49,46,129,0.7)] dark:shadow-[0_30px_60px_-36px_rgba(0,0,0,0.9)] lg:min-h-[290px]">
            {/* Photo: full width on phones, left 60% on desktop. The source photo (cut from the
                mockup) has the mockup's purple curve at its right, so phones show only its left
                part, and on desktop the curve below is drawn exactly over it. */}
            <div className="aspect-[16/9] sm:aspect-[37/20] lg:aspect-auto lg:absolute lg:inset-y-0 lg:left-0 lg:w-[60%]">
              <img
                src="/images/about/v2/about-mission-students.webp"
                alt="Students walking together with their school bags"
                loading="lazy"
                className="block w-full object-cover object-[0%_35%] lg:object-center dark:brightness-[0.85]"
                // Inline so it beats the global `img { height: auto }` reset.
                style={{ height: '100%' }}
              />
            </div>

            {/* Curved indigo panel (desktop). Wrapped, because the global reset makes svg display:block. */}
            <div aria-hidden="true" className="hidden lg:block absolute inset-0">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="about-mission-panel" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#4338CA" />
                    <stop offset="1" stopColor="#2E1065" />
                  </linearGradient>
                  <linearGradient id="about-mission-sliver" x1="0" y1="0" x2="1" y2="0.3">
                    <stop offset="0" stopColor="#A78BFA" />
                    <stop offset="1" stopColor="#5B4BE0" />
                  </linearGradient>
                </defs>
                {/* Lighter violet curved sliver, then the panel with an almost straight edge */}
                <path d="M42.8 0C47.5 20 52.5 50 55 100H100V0Z" fill="url(#about-mission-sliver)" />
                <path d="M56 0L57.5 100H100V0Z" fill="url(#about-mission-panel)" />
              </svg>
            </div>

            {/* Text */}
            <div className="relative bg-gradient-to-br from-[#4338CA] to-[#2E1065] lg:bg-none px-6 py-8 sm:px-10 sm:py-10 lg:ml-[62%] lg:flex lg:min-h-[290px] lg:flex-col lg:justify-center lg:px-0 lg:pr-12 lg:py-12">
              <p className="flex items-center gap-3 text-sm font-semibold text-indigo-100">
                <span className="h-0.5 w-7 rounded-full bg-indigo-200" aria-hidden="true" />
                Our Mission
              </p>
              <h2 id="about-mission-heading" className="mt-3 text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15] text-white [text-wrap:balance]">
                To Make School Management <span className="text-[#C4B5FD]">Effortless</span>
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-indigo-100/90">
                We help educational institutions run smoothly, <span className="font-semibold text-white">stay connected</span>, and focus on what matters most: student learning and growth.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Vision and Mission cards, overlapping the band */}
        <div className="relative mx-auto -mt-6 sm:-mt-8 grid max-w-5xl gap-4 sm:gap-6 px-0 sm:px-6 md:grid-cols-2">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} from={i === 0 ? 'left' : 'right'} once={false} delay={0.08 + i * 0.1}>
              <div className="flex h-full items-start gap-4 sm:gap-5 rounded-3xl border border-[#E9E5FF] dark:border-slate-800 bg-[#F7F5FF] dark:bg-[#111827] p-5 sm:p-6 shadow-[0_24px_50px_-30px_rgba(79,70,229,0.45)] dark:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-[0_28px_60px_-24px_rgba(79,70,229,0.5)] dark:hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.95)]">
                <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#818CF8] to-[#7C3AED] text-white shadow-[0_10px_20px_-10px_rgba(79,70,229,0.9)]">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">{title}</h3>
                  <p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-[#475569] dark:text-slate-400">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
