import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function WhatWeBelieve() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const beliefs = [
    {
      title: 'Students & Educators First',
      tag: 'Core Empathy',
      description: 'Every tool and screen is evaluated by a simple test: does this genuinely save time in the classroom and protect student welfare?',
      icon: HeartHandshake,
      bullet: 'Zero dark patterns or vanity distraction',
    },
    {
      title: 'Privacy & Security by Default',
      tag: 'Uncompromised Trust',
      description: 'Student and family data belongs solely to the institution. We enforce 256-bit encryption and strictly zero third-party commercialization.',
      icon: ShieldCheck,
      bullet: 'Bank-grade compliance & audit controls',
    },
    {
      title: 'Radical Usability',
      tag: 'Zero Training Needed',
      description: 'Complex enterprise features engineered with consumer-grade simplicity. Seamless for grandparents, bus drivers, and teachers alike.',
      icon: Sparkles,
      bullet: 'Accessible across all smartphones & browsers',
    },
    {
      title: 'Built to Scale Without Friction',
      tag: 'Enterprise Reliability',
      description: 'Engineered for seamless elasticity. Expand from one boutique preschool to an inter-state network of 50 campuses without system lag.',
      icon: Layers,
      bullet: '99.98% guaranteed operational uptime',
    },
  ];

  return (
    <section
      id="what-we-believe"
      ref={sectionRef}
      aria-labelledby="values-heading"
      className={`w-full bg-[#FBFBFF] py-7 sm:py-8 md:py-10 overflow-hidden scroll-mt-24 border-t border-slate-100 font-sans transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF]/80 mb-2 select-none hover:scale-105 transition-transform duration-200">
            <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] flex items-center justify-center text-white shrink-0 shadow-xs">
              <HeartHandshake className="w-2.5 h-2.5 text-white" aria-hidden="true" />
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#4F46E5] tracking-tight">
              Core Principles
            </span>
          </div>

          <h2
            id="values-heading"
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#0F172A] leading-[1.16] tracking-tight"
          >
            Principles that Guide Every{' '}
            <span className="text-[#4F46E5]">Feature We Ship.</span>
          </h2>

          <p className="mt-2.5 text-[14px] sm:text-[14.5px] text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Our values aren't abstract corporate slogans. They are the daily engineering criteria behind our code, interfaces, and customer partnerships.
          </p>
        </div>

        {/* 4 Sleek Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-4 max-w-6xl mx-auto text-left">
          {beliefs.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-6px_rgba(79,70,229,0.10)] hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-[10.5px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded-md">
                      {b.tag}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-[15px] sm:text-[15.5px] font-bold text-[#0F172A] leading-snug tracking-tight mb-1.5 group-hover:text-indigo-950 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-[12px] sm:text-[12.5px] text-[#64748B] leading-relaxed mb-4">
                    {b.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-medium text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
                  <span>{b.bullet}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
