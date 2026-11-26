import React from 'react';
import { Users, FileCheck2, HeartHandshake, CheckCircle2, Clock } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function EnrollmentCommunity() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const cards = [
    {
      step: '01',
      tag: 'Programs & Registration',
      title: 'Programs families can discover and join online.',
      description: 'Showcase course catalogs, academic terms, and enrichment camps with friction-free digital enrollment.',
      icon: Users,
      preview: (
        <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-left transition-colors duration-200 group-hover:bg-indigo-50/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md inline-flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon-emerald" />
              Enrollment Open
            </span>
            <span className="text-[10.5px] font-medium text-slate-400">AY 2026-27</span>
          </div>
          <div className="text-[12.5px] font-semibold text-slate-800">Primary Foundation Course</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Grades 1–5 • 42 of 50 seats filled</div>
          <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] via-[#818CF8] to-[#4F46E5] animate-shimmer"
              style={{ width: '84%' }}
            />
          </div>
        </div>
      ),
    },
    {
      step: '02',
      tag: 'Application Tracking',
      title: 'Admissions and document review in one queue.',
      description: 'Process incoming applicant paperwork, verify credentials, and dispatch automated status updates.',
      icon: FileCheck2,
      preview: (
        <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-left transition-colors duration-200 group-hover:bg-indigo-50/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-700">App #ADM-8429</span>
            <span className="text-[10.5px] font-semibold text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded-md shadow-2xs">
              Stage 3 of 4
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[11px] text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Forms & Birth Certificate Verified</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#4F46E5] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#4F46E5] shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Parent Interaction Scheduled</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: '03',
      tag: 'Community Hub',
      title: 'Volunteers and community supported together.',
      description: 'Keep parents and alumni actively involved with intuitive volunteer sign-ups and PTA event scheduling.',
      icon: HeartHandshake,
      preview: (
        <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-left transition-colors duration-200 group-hover:bg-indigo-50/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-700">Annual Science Fair</span>
            <span className="text-[10.5px] font-medium text-slate-500">Mar 22</span>
          </div>
          <div className="text-[11px] text-slate-600 mb-1.5">18 Parent Volunteers Registered</div>
          <div className="flex items-center -space-x-1.5">
            {['bg-indigo-600', 'bg-purple-600', 'bg-blue-600', 'bg-teal-600'].map((bg, i) => (
              <div
                key={i}
                className={`w-5.5 h-5.5 rounded-full ${bg} text-white text-[8.5px] font-bold flex items-center justify-center border-2 border-white transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer shadow-2xs`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <span className="text-[9.5px] text-slate-500 font-medium pl-2.5">+14 more</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="enrollment-community"
      ref={sectionRef}
      aria-labelledby="enrollment-heading"
      className={`w-full bg-white py-10 sm:py-12 md:py-14 overflow-hidden scroll-mt-24 font-sans transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Title Case Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF]/80 mb-3 select-none hover:scale-105 transition-transform duration-200">
            <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] flex items-center justify-center text-white shrink-0 shadow-xs">
              <Users className="w-2.5 h-2.5 text-white" aria-hidden="true" />
            </span>
            <span className="text-[12px] font-semibold text-[#4F46E5] tracking-tight">
              Enrollment & Community
            </span>
          </div>

          {/* Heading */}
          <h2
            id="enrollment-heading"
            className="text-[26px] sm:text-[30px] lg:text-[34px] xl:text-[36px] font-bold text-[#0F172A] leading-[1.22] tracking-tight [text-wrap:balance]"
          >
            Open the Doors,{' '}
            <span className="text-[#4F46E5]">Then Welcome People In.</span>
          </h2>

          {/* Description */}
          <p className="mt-3 text-[15px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-xl mx-auto [text-wrap:pretty]">
            Make it effortless for prospective families to discover programs, submit digital applications, and stay deeply engaged with your school community.
          </p>
        </div>

        {/* 3 Modern Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-5 max-w-6xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.step}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_12px_24px_-6px_rgba(79,70,229,0.10)] hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Bar with Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded-md group-hover:bg-[#4F46E5] group-hover:text-white transition-colors duration-200">
                      {card.step} / {card.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[15.5px] sm:text-[16px] font-bold text-[#0F172A] leading-snug tracking-tight mb-2 group-hover:text-indigo-950 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Micro-preview Widget */}
                {card.preview}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
