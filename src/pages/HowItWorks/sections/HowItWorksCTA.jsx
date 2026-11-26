import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function HowItWorksCTA() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  return (
    <section
      id="how-it-works-cta"
      ref={sectionRef}
      aria-labelledby="how-it-works-cta-heading"
      className={`w-full py-8 sm:py-9 md:py-11 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] dark:from-indigo-950 dark:to-indigo-900 text-white overflow-hidden relative font-sans transition-all duration-700 ease-out border-t border-transparent dark:border-indigo-800/40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Decorative ambient subtle white circles */}
      <div
        className="absolute top-0 right-10 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 translate-y-1/2 w-72 h-72 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '3s' }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title Case Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-white text-[11.5px] font-medium mb-2.5 sm:mb-3 border border-white/20 shadow-xs hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-200 animate-pulse" />
            <span>Ready to see it in action?</span>
          </div>

          <h2
            id="how-it-works-cta-heading"
            className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-tight text-white tracking-tight [text-wrap:balance]"
          >
            Experience Pappa.ai in Real Time
          </h2>

          <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[14.5px] text-white/90 leading-relaxed max-w-xl mx-auto [text-wrap:pretty]">
            Request a guided session to see how easily your teachers, parents, and administrative team can collaborate.
          </p>

          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="group w-full sm:w-auto bg-white text-[#4F46E5] hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl shadow-md min-h-[40px] text-[13.5px] transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              to="/features"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 font-medium px-5 py-2.5 rounded-xl min-h-[40px] text-[13.5px] transition-all duration-200 active:scale-95"
            >
              Explore Platform Features
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
