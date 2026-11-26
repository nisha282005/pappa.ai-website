import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useTheme } from '../../context/ThemeContext';

/**
 * Navbar component with fluid responsive navigation, accessible drawer,
 * seamless scaling from 320px mobile to 1920px desktop, and dark mode support.
 * - On Home: Aligned at top of hero seamlessly; smoothly fixes with blur/border on scroll.
 * - On other pages: Fixed with spacer beneath so content starts below navbar.
 */
export default function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const isHome = normalizedPath === '/';
  const hasTransparentHero = ['/', '/about', '/contact'].includes(normalizedPath);
  const [isScrolled, setIsScrolled] = useState(false);

  // Subscribe to window scroll events once on mount
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize scroll state immediately on route change
  useEffect(() => {
    setIsScrolled(window.scrollY > 15);
  }, [location.pathname]);

  const showFixedStyle = !hasTransparentHero ? true : (isScrolled || isOpen);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          showFixedStyle
            ? 'bg-white/95 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#E5E7EB] dark:border-slate-800/80 shadow-xs'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        {/* Before scrolling, over a hero photo (light theme only): a soft white fade with no
            hard edge or line, so the logo and links stay readable. Hidden once scrolled,
            when the solid bar with its bottom line takes over. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 sm:h-28 bg-gradient-to-b from-white/90 via-white/60 to-transparent transition-opacity duration-300 dark:hidden ${
            showFixedStyle ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-2">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left: Brand Logo & Avatar */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-lg p-1"
              onClick={close}
              aria-label="Pappa.ai Home"
            >
              <picture className="shrink-0">
                <source type="image/webp" srcSet="/images/logo/pappa-logo-mark.webp" />
                <img
                  src="/images/logo/pappa-logo-mark.png"
                  alt=""
                  className="block w-auto drop-shadow-sm"
                  // Inline so it beats the global `img { height: auto }` reset.
                  style={{ height: 'clamp(36px, 4vw, 42px)' }}
                />
              </picture>
              {/* Wordmark in one colour: black in light theme, white in dark. */}
              <span className="text-[17px] sm:text-[18.5px] font-bold tracking-tight text-[#0F172A] dark:text-white transition-colors duration-200">
                Pappa.ai
              </span>
            </Link>

            {/* Right: Nav Links + Theme Toggle + Single Divider + Contact Us CTA Button */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Desktop Navigation Links */}
              <nav
                aria-label="Primary Navigation"
                className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7"
              >
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      `relative py-1 pappa-nav transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded ${
                        isActive
                          ? 'text-[#4F46E5] dark:text-indigo-400 font-semibold'
                          : 'text-[#0F172A] dark:text-slate-200 hover:text-[#4F46E5] dark:hover:text-indigo-400'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-flex flex-col items-center">
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-1 w-full h-[2px] rounded-full bg-[#4F46E5] dark:bg-indigo-400 transition-colors duration-200" />
                        )}
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Theme Toggle Button (Desktop) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="w-4.5 h-4.5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
                ) : (
                  <Moon className="w-4.5 h-4.5 text-slate-700 dark:text-slate-300 transition-transform duration-300 rotate-0 hover:-rotate-12" />
                )}
              </button>

              {/* Single vertical divider between Nav and Contact Us */}
              <div
                className="hidden md:block h-5 w-[1px] mx-0.5 bg-slate-200 dark:bg-slate-800"
                aria-hidden="true"
              />

              {/* Contact Us Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#3730A3] text-white pappa-btn-text text-[13.5px] sm:text-[14px] min-h-[40px] shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={toggle}
                className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] text-[#0F172A] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? (
                  <X className="w-5 h-5 sm:w-5.5 sm:h-5.5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-5.5 sm:h-5.5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop & Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="md:hidden fixed inset-x-0 top-[72px] sm:top-20 bottom-0 z-40 bg-slate-900/60 backdrop-blur-sm"
            onClick={close}
          >
            <div
              className="bg-white dark:bg-[#111827] border-b border-[#E5E7EB] dark:border-slate-800 px-4 py-5 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-slate-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Mobile Menu Links">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/'}
                    onClick={close}
                    className={({ isActive }) =>
                      `flex items-center min-h-[42px] px-3.5 rounded-[10px] pappa-nav transition-colors ${
                        isActive
                          ? 'bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 font-semibold'
                          : 'text-[#475569] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0F172A] dark:hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="pt-4 mt-3 border-t border-[#E5E7EB] dark:border-slate-800">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white pappa-btn-text shadow-xs transition-all min-h-[44px]"
                  onClick={close}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for non-hero pages so content starts right beneath the fixed header */}
      {!hasTransparentHero && <div className="h-[72px] sm:h-20 shrink-0 w-full" aria-hidden="true" />}
    </>
  );
}
