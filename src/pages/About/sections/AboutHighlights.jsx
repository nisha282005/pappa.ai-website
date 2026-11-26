import React from 'react';
import { Users, Layers, Laptop, ShieldCheck } from 'lucide-react';
import Container from '../../../components/common/Container';

/**
 * AboutHighlights - Section 3: Platform Highlights
 *
 * Four compact cards in a responsive row highlighting key system capabilities.
 */
export default function AboutHighlights() {
  const highlights = [
    {
      icon: Users,
      title: 'Students, Parents & Staff in One Platform',
    },
    {
      icon: Layers,
      title: 'Key School Operations Simplified',
    },
    {
      icon: Laptop,
      title: 'Accessible on Web and Mobile',
    },
    {
      icon: ShieldCheck,
      title: 'Secure, Reliable and Easy to Use',
    },
  ];

  return (
    <section
      id="about-highlights"
      aria-label="Platform Highlights"
      className="w-full bg-white dark:bg-[#0B0F19] font-sans py-8 sm:py-12 border-b border-[#F1F5F9] dark:border-slate-800 transition-colors duration-200"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white dark:bg-[#111827] rounded-2xl p-4 sm:p-5 border border-[#EDE9FE]/70 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#DDD6FE] dark:hover:border-indigo-500/40 transition-all duration-200 flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F5F3FF] dark:bg-indigo-950/60 border border-[#EDE9FE] dark:border-indigo-900/60 flex items-center justify-center text-[#4F46E5] dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] dark:text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
