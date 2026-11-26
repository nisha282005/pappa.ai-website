import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  BookOpen,
  CreditCard,
  Shield,
  Layers,
} from 'lucide-react';

const MODULES = [
  { id: 'academics', label: 'Academics', icon: GraduationCap },
  { id: 'learning', label: 'Learning', icon: BookOpen },
  { id: 'fees', label: 'Fees', icon: CreditCard },
  { id: 'safety', label: 'Safety', icon: Shield },
  { id: 'made-to-grow', label: 'Scalability', icon: Layers },
];

export default function FeatureNav() {
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      const firstSection = document.getElementById(MODULES[0].id);

      // If user is at or near top above the first section, no module is active
      if (firstSection && scrollPos < firstSection.offsetTop) {
        setActiveModule(null);
        return;
      }

      let current = null;
      for (let i = MODULES.length - 1; i >= 0; i--) {
        const el = document.getElementById(MODULES[i].id);
        if (el && el.offsetTop <= scrollPos) {
          current = MODULES[i].id;
          break;
        }
      }
      setActiveModule(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveModule(id);
    }
  };

  return (
    <div className="sticky top-14 sm:top-16 z-30 w-full bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md pt-2 pb-6 sm:pb-8 transition-all select-none font-sans border-b border-transparent dark:border-slate-800/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <nav
          aria-label="Features Module Navigation"
          className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          <div className="inline-flex items-center">
            {MODULES.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = activeModule === mod.id;
              return (
                <React.Fragment key={mod.id}>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, mod.id)}
                    className={`group inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1 text-[13px] sm:text-[14px] font-semibold transition-all duration-200 shrink-0 focus:outline-none cursor-pointer ${
                      isActive
                        ? 'text-[#4F46E5] dark:text-indigo-400 font-bold'
                        : 'text-[#0F172A] dark:text-slate-200 hover:text-[#4F46E5] dark:hover:text-indigo-400'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.9] transition-colors duration-200 ${
                        isActive
                          ? 'text-[#4F46E5] dark:text-indigo-400'
                          : 'text-[#334155] dark:text-slate-400 group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{mod.label}</span>
                  </button>
                  {index < MODULES.length - 1 && (
                    <span
                      className="h-4.5 w-px bg-slate-200/90 dark:bg-slate-800 mx-0.5 sm:mx-1 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
