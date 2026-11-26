import React from 'react';
import { cn } from '../../utils/helpers';
import { APP_STORE_URL, PLAY_STORE_URL } from '../../utils/constants';

/**
 * Mobile app download buttons: the official App Store and Google Play badges,
 * linking to the Pappa.ai store pages (opened in a new tab).
 */
export default function AppDownloadButtons({ className = '', align = 'center' }) {
  const alignClass = align === 'left' ? 'justify-start' : 'justify-center';
  const linkClass =
    'inline-block transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-[7px] shrink-0';
  return (
    <div className={cn('flex flex-row items-center gap-3 w-full sm:w-auto', alignClass, className)}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Pappa.ai on the App Store (opens in new tab)" className={linkClass}>
        <img src="/app-store/app-store-badge.svg" alt="Download on the App Store" className="h-10 sm:h-11 w-auto" />
      </a>
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Pappa.ai on Google Play (opens in new tab)" className={linkClass}>
        <img src="/app-store/google-play-badge.svg" alt="Get it on Google Play" className="h-10 sm:h-11 w-auto" />
      </a>
    </div>
  );
}
