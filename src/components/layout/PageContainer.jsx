import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useSEO } from '../../hooks/useSEO';

/**
 * PageContainer provides top-level page wrapper with Navbar, Footer,
 * keyboard skip-to-content link, dynamic SEO metadata, and zero horizontal overflow.
 */
export default function PageContainer({ children }) {
  useScrollToTop();
  useSEO();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0B0F19] text-[#334155] dark:text-[#CBD5E1] font-sans w-full overflow-x-hidden relative transition-colors duration-200">
      {/* Keyboard Accessibility: Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4F46E5] focus:text-white focus:rounded-lg focus:shadow-md focus:font-semibold focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" tabIndex="-1" className="flex-1 w-full overflow-x-hidden outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
