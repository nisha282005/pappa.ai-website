import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const ROLES = [
  {
    id: 'admin',
    role: 'Administrator',
    tag: 'For Leadership',
    title: 'Centralized Operational Command',
    text: 'Oversee attendance, fees, staff and reporting from one console.',
    points: [
      'Real-time institutional metrics & reports',
      'Role-based permissions & audit logging',
      'Compliance and document registries',
    ],
    image: '/images/how-it-works/roles/admin.webp',
    alt: 'School administrator smiling while working on a laptop',
    position: '50% 20%',
  },
  {
    id: 'teacher',
    role: 'Teacher & Faculty',
    tag: 'For Teaching',
    title: 'Streamlined Classroom Experience',
    text: 'Plan lessons, manage assignments and track progress with ease.',
    points: [
      'Create and share learning materials',
      'Assign and grade assessments',
      'Track student performance and engagement',
    ],
    image: '/images/how-it-works/roles/teacher.webp',
    alt: 'Teacher in a saree smiling while using a laptop',
    position: '50% 25%',
  },
  {
    id: 'parent',
    role: 'Parents & Guardians',
    tag: 'For Care & Support',
    title: 'Stay Connected, Always',
    text: 'Follow your child’s learning, attendance, fees and school updates.',
    points: [
      'View attendance and academic progress',
      'Pay fees and manage registrations',
      'Receive timely announcements',
    ],
    image: '/images/how-it-works/roles/parent.webp',
    alt: 'Father and daughter looking at a phone together',
    position: '50% 30%',
  },
  {
    id: 'staff',
    role: 'Community & Staff',
    tag: 'For Campus Operations',
    title: 'A More Connected Campus',
    text: 'Stay updated and keep campus operations running smoothly.',
    points: [
      'Manage tasks and service requests',
      'View timetables and substitutions',
      'Receive campus-wide announcements',
    ],
    image: '/images/how-it-works/roles/staff.webp',
    alt: 'Campus staff member working on a laptop',
    position: '50% 25%',
  },
];

/**
 * How It Works: one row per role, alternating text and photo, joined by a dotted
 * timeline down the middle on desktop. On phones each role stacks photo then text.
 *
 * On scroll, each row's text and photo slide in from their own side (text from the
 * left when it sits on the left, and so on). Skipped when reduced motion is on.
 */
export default function RoleExperiences() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });
  const reduceMotion = useReducedMotion();

  // dir: -1 = slide in from the left, 1 = from the right.
  const slide = (dir, delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, x: dir * 80 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: false, amount: 0.2 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="role-experiences"
      ref={sectionRef}
      aria-labelledby="role-experiences-heading"
      className={`w-full overflow-x-clip bg-[#FBFBFF] dark:bg-[#080C14] py-10 sm:py-12 md:py-16 border-t border-slate-100 dark:border-slate-800 font-sans transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/80 dark:border-indigo-900/60 mb-3 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-indigo-400" aria-hidden="true" />
            <span className="text-[12px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">User Experiences</span>
          </div>
          <h2
            id="role-experiences-heading"
            className="text-[24px] sm:text-[28px] lg:text-[34px] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-tight"
          >
            Specialized for Every Role <span className="text-[#4F46E5] dark:text-indigo-400">Across Campus.</span>
          </h2>
          <p className="mt-2 text-[14px] sm:text-[15px] text-[#64748B] dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
            Discover how administrators, educators, families and staff work together in one connected platform.
          </p>
        </div>

        <ol className="relative max-w-5xl mx-auto space-y-10 lg:space-y-6">
          {/* Dotted timeline (desktop) */}
          <span
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 border-l-2 border-dotted border-[#A5B4FC] dark:border-indigo-500/50"
          />

          {ROLES.map((r, i) => {
            const imageLeft = i % 2 === 1;
            return (
              <li key={r.id} className="relative grid items-center gap-5 lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] lg:gap-0">
                {/* Text */}
                <motion.div {...slide(imageLeft ? 1 : -1)} className={`${imageLeft ? 'lg:col-start-3 lg:pl-4' : 'lg:col-start-1 lg:pr-4'} lg:row-start-1 order-2 lg:order-none`}>
                  <div>
                    <span className="inline-block text-[12px] font-bold text-[#4F46E5] dark:text-indigo-300 bg-[#EEF2FF] dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
                      {r.role}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[19px] sm:text-[21px] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] sm:text-[14.5px] text-[#475569] dark:text-slate-400 leading-relaxed">{r.text}</p>
                  <ul className="mt-3 space-y-2">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#4F46E5] dark:text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Timeline dot (desktop) */}
                <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 justify-center" aria-hidden="true">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-[#080C14] ring-2 ring-[#4F46E5] dark:ring-indigo-400 shadow-[0_0_0_6px_rgba(79,70,229,0.10)]">
                    <span className="h-2 w-2 rounded-full bg-[#4F46E5] dark:bg-indigo-400" />
                  </span>
                </div>

                {/* Photo with a soft lavender shape behind it */}
                <motion.div {...slide(imageLeft ? -1 : 1, 0.1)} className={`${imageLeft ? 'lg:col-start-1 lg:pr-6' : 'lg:col-start-3 lg:pl-6'} lg:row-start-1 order-1 lg:order-none`}>
                  <div className="relative mx-auto max-w-[400px]">
                    <span
                      aria-hidden="true"
                      className={`absolute -top-3 ${imageLeft ? '-left-3 -rotate-2' : '-right-3 rotate-2'} h-[85%] w-[92%] rounded-[28px] bg-[#EDE9FE] dark:bg-indigo-500/15`}
                    />
                    <img
                      src={r.image}
                      alt={r.alt}
                      loading="lazy"
                      className="relative block w-full rounded-[24px] object-cover shadow-[0_18px_40px_-20px_rgba(79,70,229,0.35)] dark:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)] dark:brightness-[0.92]"
                      // Inline so it beats the global `img { height: auto }` reset.
                      style={{ aspectRatio: '16 / 8.5', height: 'auto', objectPosition: r.position }}
                    />
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
