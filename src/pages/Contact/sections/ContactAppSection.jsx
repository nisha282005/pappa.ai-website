import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import AppDownloadButtons from '../../../components/common/AppDownloadButtons';
import { Mail, Phone } from 'lucide-react';
import { CONTACT_CONFIG } from '../../../data/contact';

export default function ContactAppSection() {
  return (
    <SectionWrapper id="contact-app-section" size="compact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Direct Channels"
            title="We're Here to Support You"
            description="Reach our team directly through official communication channels or download the companion mobile apps."
            className="mb-6"
          />
          <div className="space-y-3 pappa-supporting text-[#475569] dark:text-slate-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <a
                href={`mailto:${CONTACT_CONFIG.officeEmail}`}
                className="hover:text-[#4F46E5] dark:hover:text-indigo-400 text-slate-700 dark:text-slate-200 transition-colors break-all"
              >
                {CONTACT_CONFIG.officeEmail}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="break-all text-slate-700 dark:text-slate-200">Support Desk: {CONTACT_CONFIG.supportEmail}</span>
            </div>
          </div>
        </div>
        <div id="mobile-apps" className="bg-[#F8FAFC] dark:bg-[#111827] border border-[#E5E7EB] dark:border-slate-800 rounded-[16px] p-4 md:p-5 lg:p-6 flex flex-col items-center text-center w-full transition-colors duration-200">
          <h3 className="pappa-h3 text-[#0F172A] dark:text-white mb-3 [text-wrap:balance]">
            Pappa.ai On Mobile
          </h3>
          <p className="pappa-supporting text-[#64748B] dark:text-slate-400 mb-6 max-w-sm [text-wrap:pretty]">
            Available on iOS and Android for administrators, educators, and parents on the move.
          </p>
          <div id="app-store">
            <AppDownloadButtons />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
