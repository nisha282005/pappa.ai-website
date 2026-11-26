import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  Users,
  Layers,
  ShieldCheck,
  Headphones,
  ChevronDown,
  HelpCircle,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Container from '../../components/common/Container';
import { FAQ_CATEGORIES, FAQ_DATA } from '../../data/faq';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General');
  // Default all questions to CLOSED as requested
  const [openId, setOpenId] = useState(null);

  const questions = FAQ_DATA[activeTab] || [];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Keep questions closed by default when switching category
    setOpenId(null);
  };

  const toggleQuestion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (iconName, isOpen) => {
    const iconClass = `w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors duration-200 ${
      isOpen ? 'text-[#4F46E5] dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-300'
    }`;
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard className={iconClass} strokeWidth={2} />;
      case 'Users':
        return <Users className={iconClass} strokeWidth={2} />;
      case 'Layers':
        return <Layers className={iconClass} strokeWidth={2} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} strokeWidth={2} />;
      case 'Headphones':
        return <Headphones className={iconClass} strokeWidth={2} />;
      default:
        return <HelpCircle className={iconClass} strokeWidth={2} />;
    }
  };

  return (
    <div className="pappa-hero-after-spacer relative w-full bg-white dark:bg-[#0B0F19] font-sans py-10 sm:py-14 md:py-18 overflow-hidden select-none transition-colors duration-200">
      {/* Subtle ambient lavender glow behind content */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-indigo-100/35 via-purple-100/25 to-indigo-50/30 dark:from-indigo-950/20 dark:via-purple-950/15 dark:to-indigo-950/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Centered FAQ Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow Badge - Centered directly above the headline */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 border border-[#E0E7FF]/90 dark:border-indigo-900/60 select-none hover:scale-105 transition-transform duration-200 shadow-2xs">
              <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#4F46E5] dark:text-indigo-300 tracking-tight">
                FAQs
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold text-[#0F172A] dark:text-white tracking-tight leading-[1.15] mb-3 sm:mb-3.5">
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] text-[#64748B] dark:text-slate-400 leading-relaxed max-w-xl mx-auto [text-wrap:pretty]">
            Find quick answers to common questions about Pappa.ai.
          </p>
        </div>

        {/* Functional Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10 max-w-xl mx-auto">
          {FAQ_CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabChange(tab)}
                className={`px-5 sm:px-6 py-2 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                  isActive
                    ? 'bg-[#4F46E5] dark:bg-indigo-600 text-white shadow-xs scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500/50 hover:text-[#4F46E5] dark:hover:text-indigo-300 active:bg-slate-50 dark:active:bg-slate-700'
                }`}
                aria-pressed={isActive}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Expandable Accordion FAQ Cards (Default Closed) */}
        <div className="space-y-3 sm:space-y-3.5 max-w-3xl mx-auto">
          {questions.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8F7FF] dark:bg-[#111827] border border-indigo-200/90 dark:border-indigo-500/40 shadow-[0_4px_16px_-4px_rgba(79,70,229,0.06)] dark:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5)]'
                    : 'bg-white dark:bg-[#111827]/70 border border-slate-200/80 dark:border-slate-800/90 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-3">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? 'bg-[#EEF2FF] dark:bg-indigo-950/80 shadow-2xs'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-[#EEF2FF] dark:group-hover:bg-indigo-950/80 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-300'
                      }`}
                    >
                      {renderIcon(item.icon, isOpen)}
                    </div>
                    <span
                      className={`text-[15px] sm:text-[16px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen
                          ? 'text-[#4F46E5] dark:text-indigo-400'
                          : 'text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-indigo-300'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 shrink-0 transition-colors duration-200">
                    <ChevronDown
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#4F46E5] dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {/* Smooth Expand / Collapse with CSS Grid Transition */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4.5 pt-1 sm:pl-[72px] sm:pr-6 sm:pb-5 sm:pt-0 text-[13.5px] sm:text-[14px] text-[#475569] dark:text-slate-300 leading-relaxed [text-wrap:pretty]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated "Still have a question?" Contact Support Card */}
        <div className="max-w-3xl mx-auto mt-6 sm:mt-7">
          <div className="bg-[#FAF9FF] dark:bg-[#111827] border border-indigo-100/90 dark:border-slate-800 rounded-2xl sm:rounded-[22px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(79,70,229,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs">
                <HelpCircle className="w-5 h-5 text-[#4F46E5] dark:text-indigo-400" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0F172A] dark:text-white leading-tight">
                  Still have a question?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#64748B] dark:text-slate-400 mt-0.5">
                  We're here to help you.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#3730A3] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-[13.5px] shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 w-full sm:w-auto"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Three Minimal Highlights */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-10 mb-6 sm:mb-10">
          <div className="bg-[#FAF9FF] dark:bg-[#111827] border border-indigo-100/80 dark:border-slate-800 rounded-2xl sm:rounded-[24px] p-6 sm:p-8 shadow-[0_2px_12px_rgba(79,70,229,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
              {/* Highlight 1: Secure & Reliable */}
              <div className="flex flex-col items-center sm:border-r sm:border-indigo-100/80 dark:sm:border-slate-800 px-2 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center mb-3 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#0F172A] dark:text-white mb-1">
                  Secure & Reliable
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-slate-500 dark:text-slate-400 leading-normal">
                  Your school data is always safe with us.
                </p>
              </div>

              {/* Highlight 2: Quick to Set Up */}
              <div className="flex flex-col items-center sm:border-r sm:border-indigo-100/80 dark:sm:border-slate-800 px-2 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center mb-3 shadow-2xs">
                  <Zap className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#0F172A] dark:text-white mb-1">
                  Quick to Set Up
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-slate-500 dark:text-slate-400 leading-normal">
                  Get your institution started in no time.
                </p>
              </div>

              {/* Highlight 3: Dedicated Support */}
              <div className="flex flex-col items-center px-2 sm:px-4">
                <div className="w-11 h-11 rounded-full bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 flex items-center justify-center mb-3 shadow-2xs">
                  <Headphones className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#0F172A] dark:text-white mb-1">
                  Dedicated Support
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-slate-500 dark:text-slate-400 leading-normal">
                  Our team is here whenever you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
