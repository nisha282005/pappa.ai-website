import React from 'react';
import { Check, Users } from 'lucide-react';
import Container from '../../../components/common/Container';
import Badge from '../../../components/common/Badge';
import Reveal from './Reveal';

const POINTS = [
  {
    title: 'Simplify School Operations',
    text: 'Manage academic, administrative and day-to-day tasks with ease.',
  },
  {
    title: 'Bring Everyone Together',
    text: 'Keep students, staff and parents in sync.',
  },
  {
    title: 'Support Better Learning',
    text: 'Enable a more organized, engaging and student-focused experience.',
  },
];

const PHOTO = 'block w-full rounded-2xl object-cover shadow-[0_16px_36px_-22px_rgba(79,70,229,0.45)] dark:shadow-[0_16px_36px_-22px_rgba(0,0,0,0.9)] dark:brightness-[0.92]';

/** About page: who we are, three key points and a photo collage. */
export default function AboutOverview() {
  return (
    <section aria-labelledby="about-overview-heading" className="bg-white dark:bg-[#0B0F19] py-12 sm:py-14 lg:py-16 font-sans transition-colors duration-200">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          {/* Text */}
          <Reveal from="left">
            <Badge variant="brand" className="mb-4">About Pappa.ai</Badge>
            <h2
              id="about-overview-heading"
              className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-tight leading-[1.12] text-[#0F172A] dark:text-white [text-wrap:balance]"
            >
              Empowering Schools with Simpler, Smarter Management
            </h2>
            <p className="mt-4 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#475569] dark:text-slate-300">
              Pappa.ai is a school management platform that brings students, teachers, parents and administrators together on one connected platform.
            </p>

            <ul className="mt-6 space-y-4">
              {POINTS.map(({ title, text }) => (
                <li key={title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] dark:bg-indigo-500 text-white shadow-[0_6px_14px_-6px_rgba(79,70,229,0.8)]">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[15px] sm:text-base font-bold text-[#0F172A] dark:text-white">{title}</span>
                    <span className="mt-0.5 block text-[14px] leading-relaxed text-[#475569] dark:text-slate-400">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Collage */}
          <Reveal from="right" className="grid grid-cols-[1.07fr_1fr] gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4">
              <img
                src="/images/about/v2/about-teacher-student.webp"
                alt="Teacher helping a student with her writing"
                loading="lazy"
                className={PHOTO}
                style={{ height: 'auto', aspectRatio: '227 / 152' }}
              />
              <img
                src="/images/about/v2/about-student-tablet.webp"
                alt="Student smiling while using a tablet in class"
                loading="lazy"
                className={PHOTO}
                style={{ height: 'auto', aspectRatio: '227 / 127' }}
              />
              <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-[#EDE9FE] dark:border-slate-800 bg-white dark:bg-[#111827] px-4 py-3.5 sm:px-5 sm:py-4 shadow-[0_16px_36px_-24px_rgba(79,70,229,0.5)] dark:shadow-none">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </span>
                <span className="text-[14px] sm:text-[16px] font-bold leading-snug text-[#0F172A] dark:text-white">
                  One Platform for Your School
                </span>
              </div>
            </div>
            <img
              src="/images/about/v2/about-student-smile.webp"
              alt="Smiling student with a school bag"
              loading="lazy"
              className={`${PHOTO} object-[50%_30%]`}
              style={{ height: '100%' }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
