import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Users, Shield } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Product',
    icon: Layers,
    links: [
      { label: 'Features', to: '/features' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Company',
    icon: Users,
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    icon: Shield,
    links: [
      { label: 'Security', to: '/contact#security' },
      { label: 'Privacy Policy', to: '/contact#privacy' },
      { label: 'Terms & Conditions', to: '/contact#terms' },
    ],
  },
];

/** Pappa.ai logo (portrait sticker). Height is inline so it beats the global img reset. */
function LogoMark({ height }) {
  return (
    <picture className="shrink-0">
      <source type="image/webp" srcSet="/images/logo/pappa-logo-mark.webp" />
      <img src="/images/logo/pappa-logo-mark.png" alt="" className="block w-auto drop-shadow-sm" style={{ height }} />
    </picture>
  );
}

/**
 * Site footer.
 *
 * Brand block, a vertical divider and three link columns, then a divider and the
 * copyright line. A faded photo of a school sits behind the bottom-right corner and
 * fades out towards the left and top, so it never competes with the text:
 *   light: daytime photo on #F9F7FE    dark: dimmed dusk version on #0B0F19
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#FDFCFF] to-[#F9F7FE] dark:from-[#0B0F19] dark:to-[#0B0F19] font-sans text-[#0F172A] dark:text-slate-100 transition-colors duration-200">
      {/* Faded school photo, bottom right. Visibility is toggled on the wrappers,
          because the global img reset sets display:block. */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 -z-10 w-[170%] sm:w-[85%] lg:w-[62%] max-w-[1100px] [mask-image:linear-gradient(to_right,transparent_0%,transparent_12%,#000_45%),linear-gradient(to_bottom,transparent_0%,#000_35%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      >
        <div className="dark:hidden">
          <img src="/images/footer/footer-building-light.webp" alt="" loading="lazy" className="block w-full" style={{ height: 'auto' }} />
        </div>
        <div className="hidden dark:block">
          <img src="/images/footer/footer-building-dark.webp" alt="" loading="lazy" className="block w-full" style={{ height: 'auto' }} />
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              aria-label="Pappa.ai Home"
              className="inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[#0B0F19]"
            >
              <LogoMark height="52px" />
              {/* Wordmark in one colour: black in light theme, white in dark. */}
              <span className="text-[24px] sm:text-[26px] font-extrabold tracking-tight leading-none text-[#0F172A] dark:text-white">
                Pappa.ai
              </span>
            </Link>

            <p className="mt-4 text-[15px] sm:text-base font-bold tracking-tight leading-snug text-[#0F172A] dark:text-slate-100 max-w-lg">
              A connected platform for smarter school management.
            </p>
            <svg className="mt-1.5 h-1.5 w-20 text-[#4F46E5] dark:text-indigo-400" viewBox="0 0 100 8" fill="none" aria-hidden="true">
              <path d="M2 6C30 1 70 1 98 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>

            <p className="mt-2.5 text-sm leading-relaxed text-[#475569] dark:text-slate-400 max-w-xs [text-wrap:pretty]">
              Bringing students, teachers, parents and administrators together.
            </p>
          </div>

          {/* Divider (desktop) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center" aria-hidden="true">
            <span className="h-full w-px bg-[#E2E8F0] dark:bg-slate-800" />
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:col-span-6">
            {COLUMNS.map(({ title, icon: Icon, links }) => (
              <div key={title}>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-[15px] font-bold text-[#0F172A] dark:text-white">{title}</h3>
                </div>
                <ul className="mt-3 space-y-2 sm:pl-1">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-[#475569] dark:text-slate-400 hover:text-[#4F46E5] dark:hover:text-indigo-400 transition-colors duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="pt-6 lg:pt-8 text-xs sm:text-sm text-[#475569] dark:text-slate-400">
          &copy; {currentYear}{' '}
          <a
            href="https://www.maitsys.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#4F46E5] dark:text-indigo-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
          >
            Maitsys.com
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
