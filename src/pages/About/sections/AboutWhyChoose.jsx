import React from 'react';
import {
  Layers,
  MessageSquare,
  GraduationCap,
  CreditCard,
  Calendar,
  BookOpen,
} from 'lucide-react';
import Container from '../../../components/common/Container';

/**
 * AboutWhyChoose - Section 4: Why Choose Pappa.ai
 *
 * Features a subtle lavender background and six clean feature cards in a 3x2 grid.
 */
export default function AboutWhyChoose() {
  const features = [
    {
      icon: Layers,
      title: 'Unified School Management',
      desc: 'Manage students, staff, classes, schedules and more in one place.',
    },
    {
      icon: MessageSquare,
      title: 'Connected Communication',
      desc: 'Keep everyone informed with announcements, messages and real-time updates.',
    },
    {
      icon: GraduationCap,
      title: 'Smarter Academic Management',
      desc: 'Plan lessons, share assignments, conduct tests and track student progress.',
    },
    {
      icon: CreditCard,
      title: 'Simplified Fee Management',
      desc: 'Configure fee structures, collect payments and track them with ease.',
    },
    {
      icon: Calendar,
      title: 'Attendance & Student Tracking',
      desc: 'Record attendance, view history and stay updated on student activities.',
    },
    {
      icon: BookOpen,
      title: 'Digital Learning Experience',
      desc: 'Share learning materials, assignments and resources for a better learning journey.',
    },
  ];

  return (
    <section
      id="about-why-choose"
      aria-labelledby="why-choose-heading"
      className="w-full bg-[#F8F7FF] dark:bg-[#080C14] font-sans py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-colors duration-200"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-[#DDD6FE] dark:border-slate-700 text-[#4F46E5] dark:text-indigo-400 text-xs font-bold shadow-2xs mb-4">
            <span>Why Choose Pappa.ai</span>
          </div>

          <h2
            id="why-choose-heading"
            className="text-[#0F172A] dark:text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight leading-tight mb-4"
          >
            A Complete School Platform{' '}
            <span className="text-[#4F46E5] dark:text-indigo-400">Designed for Real Needs.</span>
          </h2>

          <p className="text-[#64748B] dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Powerful, easy to use and built for the way schools work.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white dark:bg-[#111827] rounded-2xl p-6 sm:p-7 border border-[#EDE9FE]/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#DDD6FE] dark:hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] dark:bg-indigo-950/60 border border-[#EDE9FE] dark:border-indigo-900/60 flex items-center justify-center text-[#4F46E5] dark:text-indigo-400 mb-5 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-[#64748B] dark:text-slate-400 text-sm leading-relaxed [text-wrap:pretty]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
