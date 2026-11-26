import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PAGE_METADATA = {
  '/': {
    title: 'Pappa.ai — One Platform for Your Whole Institution',
    description: 'Pappa.ai brings the everyday running of schools, academies, training centers, and community programs into one place for admins, teachers, and families.',
  },
  '/features': {
    title: 'Features | Pappa.ai',
    description: 'Explore comprehensive school management features including academics, digital learning, fee collections, attendance, and campus security.',
  },
  '/about': {
    title: 'About Pappa.ai',
    description: 'Learn about Pappa.ai’s mission, vision, and core values empowering schools and communities through modern educational technology.',
  },
  '/how-it-works': {
    title: 'How It Works | Pappa.ai',
    description: 'Discover tailored experiences for school administrators, educators, parents, and volunteers in the Pappa.ai ecosystem.',
  },
  '/faq': {
    title: 'FAQ | Pappa.ai',
    description: 'Find answers to common questions about Pappa.ai school onboarding, data safety, privacy, and feature modules.',
  },
  '/contact': {
    title: 'Contact Pappa.ai',
    description: 'Get in touch with Pappa.ai for personalized walkthroughs, school onboarding inquiries, and institutional pricing.',
  },
};

/**
 * Hook to dynamically sync document title, meta descriptions, and OpenGraph metadata per route.
 */
export function useSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_METADATA[pathname] || PAGE_METADATA['/'];

    // Update Document Title
    document.title = meta.title;

    // Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);

    // Update OpenGraph Title
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', meta.title);
    }

    // Update OpenGraph Description
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', meta.description);
    }

    // Update OpenGraph URL
    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag && typeof window !== 'undefined') {
      ogUrlTag.setAttribute('content', window.location.href);
    }

    // Update Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    if (typeof window !== 'undefined') {
      canonicalTag.setAttribute('href', window.location.origin + pathname);
    }

    // Update Twitter Title & Description
    let twTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twTitleTag) {
      twTitleTag.setAttribute('content', meta.title);
    }
    let twDescTag = document.querySelector('meta[name="twitter:description"]');
    if (twDescTag) {
      twDescTag.setAttribute('content', meta.description);
    }
  }, [pathname]);
}
