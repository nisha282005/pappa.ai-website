import React from 'react';
import { Building2, GraduationCap, Users, Bus, CheckCircle2 } from 'lucide-react';
import Container from '../../../components/common/Container';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function WhoWeBuildFor() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const personas = [
    {
      id: 'admins',
      role: 'Leadership & Trustees',
      title: 'School Administrators',
      icon: Building2,
      badgeColor: 'bg-indigo-50 text-[#4F46E5]',
      description: 'Unified oversight across fee cycles, compliance reporting, staffing allocations, and multi-campus governance.',
      capabilities: [
        'Real-time financial audits & fee analytics',
        'Staff management & digital records',
        'Multi-campus executive dashboard',
      ],
    },
    {
      id: 'teachers',
      role: 'Faculty & Mentors',
      title: 'Educators & Teachers',
      icon: GraduationCap,
      badgeColor: 'bg-purple-50 text-[#7C3AED]',
      description: 'Save hours each week with rapid roll-call, streamlined gradebook entries, curriculum pacing, and parent messaging.',
      capabilities: [
        'Single-click student attendance',
        'Intuitive timetable & lesson planner',
        'Integrated student performance metrics',
      ],
    },
    {
      id: 'parents',
      role: 'Families & Guardians',
      title: 'Parents & Families',
      icon: Users,
      badgeColor: 'bg-blue-50 text-[#2563EB]',
      description: 'A dedicated mobile window into your child’s school life, from real-time bus tracking to instant digital fee payments.',
      capabilities: [
        'Instant attendance & pickup alerts',
        '1-tap fee payments with receipts',
        'Direct progress updates from teachers',
      ],
    },
    {
      id: 'operations',
      role: 'Support & Security',
      title: 'Campus Operations',
      icon: Bus,
      badgeColor: 'bg-emerald-50 text-[#059669]',
      description: 'Equipping transport drivers, front-desk staff, security gatekeepers, and volunteers with purpose-built mobile tools.',
      capabilities: [
        'Live GPS transport route management',
        'Digital QR gate-pass verification',
        'Campus medical & incident logging',
      ],
    },
  ];

  return (
    <section
      id="who-we-build-for"
      ref={sectionRef}
      aria-labelledby="who-heading"
      className={`w-full bg-white py-7 sm:py-8 md:py-10 overflow-hidden scroll-mt-24 border-t border-slate-100 font-sans transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF]/80 mb-2 select-none hover:scale-105 transition-transform duration-200">
            <span className="w-4.5 h-4.5 rounded-full bg-[#4F46E5] flex items-center justify-center text-white shrink-0 shadow-xs">
              <Users className="w-2.5 h-2.5 text-white" aria-hidden="true" />
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#4F46E5] tracking-tight">
              Campus Ecosystem
            </span>
          </div>

          <h2
            id="who-heading"
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#0F172A] leading-[1.16] tracking-tight"
          >
            Built for Every Stakeholder{' '}
            <span className="text-[#4F46E5]">Across Campus.</span>
          </h2>

          <p className="mt-2.5 text-[14px] sm:text-[14.5px] text-[#64748B] leading-relaxed max-w-xl mx-auto">
            A truly connected school platform cannot leave anyone behind. Pappa.ai is custom-tailored to the everyday workflows of your entire community.
          </p>
        </div>

        {/* 4 Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5 max-w-6xl mx-auto text-left">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.id}
                className="group relative bg-[#FBFBFF] hover:bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_12px_24px_-6px_rgba(79,70,229,0.12)] hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Role tag + Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-semibold text-[#4F46E5] bg-indigo-50/90 border border-indigo-100/60 px-2 py-0.5 rounded-md">
                      {persona.role}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/70 text-[#4F46E5] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[15.5px] font-bold text-[#0F172A] leading-snug tracking-tight mb-1.5 group-hover:text-[#4F46E5] transition-colors">
                    {persona.title}
                  </h3>

                  <p className="text-[12.5px] text-[#64748B] leading-relaxed mb-4">
                    {persona.description}
                  </p>
                </div>

                {/* Capabilities checklist */}
                <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                  {persona.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-1.5 text-[11px] sm:text-[11.5px] text-slate-600 font-medium leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4F46E5] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
