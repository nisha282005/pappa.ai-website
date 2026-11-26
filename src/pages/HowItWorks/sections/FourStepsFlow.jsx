import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Container from '../../../components/common/Container';

/**
 * How It Works - 4 Steps Interactive Section
 *
 * Two columns: the step's picture on the left and a vertical timeline on the
 * right. Hovering a step (or tapping / focusing it) selects it: its circle
 * fills, earlier steps show as completed and the connector line fills up to it.
 */
export default function FourStepsFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'Set Up Your Institution',
      description:
        'Set up your institution, academic year, branches, classes and other essential details.',
      image: '/images/features/how-it-works-setup.webp',
      alt: 'Laptop showing the Institution Setup screen with institution name, type and location',
    },
    {
      number: '02',
      title: 'Connect Everyone',
      description:
        'Bring teachers, students, parents and administrators together through one connected platform.',
      image: '/images/features/how-it-works-connect.webp',
      alt: 'A student connected with a teacher, parent, admin and staff member',
    },
    {
      number: '03',
      title: 'Manage Daily Operations',
      description:
        'Simplify everyday school operations with connected academic and administrative tools.',
      image: '/images/features/how-it-works-operations.webp',
      alt: 'Laptop dashboard with attendance, tasks, announcements and approvals, surrounded by daily operations',
    },
    {
      number: '04',
      title: 'Stay Updated Anywhere',
      description:
        'Access important school updates, activities and information anytime, anywhere.',
      image: '/images/features/how-it-works-anywhere.webp',
      alt: 'The same school dashboard on a laptop, tablet and phone, labelled Access Anywhere',
    },
  ];

  const current = steps[activeStep];

  return (
    <section
      id="how-it-works-steps"
      aria-labelledby="how-it-works-heading"
      className="pappa-hero-after-spacer relative w-full bg-white dark:bg-[#0B0F19] font-sans pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14 overflow-hidden select-none transition-colors duration-200"
    >
      <Container>
        {/* =========================================================================
            CENTERED SECTION HEADING (Compact height & padding)
            ========================================================================= */}
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8 lg:mb-10">
          {/* Small Badge: "How It Works" */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE9FE]/80 dark:bg-indigo-950/60 border border-[#DDD6FE] dark:border-indigo-800/80 text-[#4F46E5] dark:text-indigo-300 text-xs font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5] dark:text-indigo-400" />
            <span>How It Works</span>
          </div>

          {/* Main Heading */}
          <h1
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-tight"
          >
            Get started with Pappa.ai in{' '}
            <span className="text-[#4F46E5] dark:text-indigo-400 inline-block">4 simple steps.</span>
          </h1>
        </div>

        {/* =========================================================================
            TWO-COLUMN INTERACTIVE LAYOUT (50% Left Visual + 50% Right Timeline)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* ---------------------------------------------------------------------
              LEFT COLUMN: STEP PICTURE
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-6 relative order-1">
            <div className="relative w-full">
              {/* Soft ambient lavender glow behind the picture */}
              <div
                className="absolute -top-8 -left-8 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#EDE9FE]/60 dark:bg-indigo-950/40 blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -right-8 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#E0E7FF]/50 dark:bg-purple-950/30 blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Picture: no frame or border, full column width, soft drop shadow.
                  The box keeps a fixed 3:2 ratio so the layout doesn't jump between
                  steps; each image is fitted inside it at its own proportions, with
                  rounded corners on the image itself. */}
              <div className="relative flex w-full aspect-[3/2] items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={current.alt}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="rounded-2xl select-none pointer-events-none [filter:drop-shadow(0_24px_40px_rgba(79,70,229,0.18))_drop-shadow(0_6px_12px_rgba(15,23,42,0.06))] dark:[filter:drop-shadow(0_24px_48px_rgba(0,0,0,0.55))]"
                    // Inline so the global img reset can't override: fit inside the box at natural ratio.
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                    loading="eager"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN: STEP TIMELINE
              Each row draws its own connector from the bottom of its circle to the
              next circle, so the line always runs exactly through the circle centres.
              Hovering a step fills its circle; earlier steps show as completed.
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-6 order-2">
            <ol className="relative">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isDone = index < activeStep;
                const isLast = index === steps.length - 1;

                return (
                  <li key={step.number} className={`relative ${isLast ? '' : 'pb-7 sm:pb-8'}`}>
                    {/* Connector to the next step (centred under the 40px circle) */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[19px] top-11 bottom-1 w-0.5 overflow-hidden rounded-full bg-[#E2E8F0] dark:bg-slate-800"
                      >
                        <span
                          className={`block w-full origin-top bg-[#4F46E5] dark:bg-indigo-500 transition-transform duration-500 ease-out ${
                            isDone ? 'scale-y-100' : 'scale-y-0'
                          }`}
                          style={{ height: '100%' }}
                        />
                      </span>
                    )}

                    <button
                      type="button"
                      // Hover selects the step on desktop; click/tap and keyboard focus
                      // do the same on touch screens and for keyboard users.
                      onMouseEnter={() => setActiveStep(index)}
                      onFocus={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      aria-current={isActive ? 'step' : undefined}
                      className="group flex w-full items-start gap-4 sm:gap-5 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[#0B0F19]"
                    >
                      {/* Step circle */}
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors duration-300 ${
                          isActive
                            ? 'border-[#4F46E5] bg-[#4F46E5] text-white ring-4 ring-[#EEF2FF] dark:border-indigo-500 dark:bg-indigo-500 dark:ring-indigo-500/20'
                            : isDone
                              ? 'border-[#4F46E5] bg-[#4F46E5] text-white dark:border-indigo-500 dark:bg-indigo-500'
                              : 'border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#4F46E5] group-hover:text-[#4F46E5] dark:border-slate-700 dark:bg-[#0B0F19] dark:text-slate-400 dark:group-hover:border-indigo-400 dark:group-hover:text-indigo-300'
                        }`}
                      >
                        {isDone ? <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> : step.number}
                      </span>

                      {/* Title + description (title's first line is centred on the circle) */}
                      <span className="min-w-0 flex-1 pt-2">
                        <span
                          className={`block text-base sm:text-lg font-bold leading-6 transition-colors duration-200 ${
                            isActive || isDone
                              ? 'text-[#0F172A] dark:text-white'
                              : 'text-[#475569] dark:text-slate-300 group-hover:text-[#0F172A] dark:group-hover:text-white'
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="mt-1.5 block text-sm sm:text-[15px] leading-relaxed text-[#64748B] dark:text-slate-400 [text-wrap:pretty]">
                          {step.description}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
