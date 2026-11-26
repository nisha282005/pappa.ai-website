import React from 'react';
import { BookOpen, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function WhyWeBuiltIt() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const oldWays = [
    'Scattered WhatsApp groups and misplaced paper circulars',
    'Separate software for fees, timetables, and admissions',
    'Chaotic dismissal lines with manual clipboard sign-outs',
    'Hours spent every evening reconciling disparate spreadsheets',
  ];

  const pappaWays = [
    'One centralized, verified communication feed for all families',
    'Integrated academic scheduling, tuition billing, and gradebooks',
    'Instant digital gate passes with real-time guardian verification',
    'Automated bank reconciliation, ledger audits, and cloud backups',
  ];

  return (
    <section
      id="why-we-built-it"
      ref={sectionRef}
      aria-labelledby="story-heading"
      className={`w-full bg-white py-7 sm:py-8 md:py-10 overflow-hidden scroll-mt-24 border-t border-slate-100 font-sans transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF]/80 mb-2 select-none hover:scale-105 transition-transform duration-200">
            <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] flex items-center justify-center text-white shrink-0 shadow-xs">
              <BookOpen className="w-2.5 h-2.5 text-white" aria-hidden="true" />
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#4F46E5] tracking-tight">
              The Origin Story
            </span>
          </div>

          <h2
            id="story-heading"
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#0F172A] leading-[1.16] tracking-tight"
          >
            Schools Don't Need More Software.{' '}
            <span className="text-[#4F46E5]">They Need One Connected Platform.</span>
          </h2>

          <p className="mt-2.5 text-[14px] sm:text-[14.5px] text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Educators were drowning in fragmented apps, duplicate data entry, and frustrated parents. We built Pappa.ai to bring calm and clarity back to campus life.
          </p>
        </div>

        {/* Side-by-Side Comparison: The Fragmented Past vs Connected Future */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto text-left">
          {/* Fragmented Stacks */}
          <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/40 border border-rose-200/60 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-rose-700 bg-rose-100/70 px-2.5 py-0.5 rounded-md">
                  The Fragmented Reality
                </span>
                <XCircle className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F172A] leading-snug tracking-tight mb-2">
                5+ Disconnected Apps & Manual Paper Chasing
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                Staff juggling separate logins for grades, fees, and messaging while critical student updates fall through the cracks.
              </p>
              <ul className="space-y-2">
                {oldWays.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connected Pappa.ai Platform */}
          <div className="group p-5 sm:p-6 rounded-2xl bg-white border border-indigo-200/80 shadow-[0_4px_16px_-4px_rgba(79,70,229,0.10)] hover:shadow-[0_12px_28px_-6px_rgba(79,70,229,0.14)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-50/80 rounded-full blur-2xl pointer-events-none group-hover:scale-130 transition-transform duration-500"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md">
                  The Pappa.ai Solution
                </span>
                <CheckCircle2 className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F172A] leading-snug tracking-tight mb-2 group-hover:text-indigo-950 transition-colors">
                One Account. Every Campus. Every Role.
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#64748B] leading-relaxed mb-4">
                A single unified interface providing seamless synchronization between leadership, classroom teachers, and families.
              </p>
              <ul className="space-y-2">
                {pappaWays.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
