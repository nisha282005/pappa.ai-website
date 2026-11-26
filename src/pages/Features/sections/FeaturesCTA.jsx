import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function FeaturesCTA() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  return (
    <section
      id="features-cta"
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className={`w-full py-8 sm:py-9 md:py-11 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white overflow-hidden relative font-sans transition-all duration-700 ease-out ${
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
          {/* Subtle Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-white text-[11.5px] font-medium mb-2.5 sm:mb-3 border border-white/20 shadow-xs hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-200 animate-pulse" />
            <span>Ready for unified institutional operations?</span>
          </div>

          <h2
            id="cta-heading"
            className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-tight text-white tracking-tight [text-wrap:balance]"
          >
            See All Features in Action
          </h2>

          <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[14.5px] text-white/90 leading-relaxed max-w-xl mx-auto [text-wrap:pretty]">
            Book a personalized walkthrough with our product specialists and discover how Pappa.ai connects every role in your institution.
          </p>

          <div className="mt-4 sm:mt-5 flex items-center justify-center">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="group w-full sm:w-auto bg-white text-[#4F46E5] hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl shadow-md min-h-[40px] text-[13.5px] transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <span>Request a Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
