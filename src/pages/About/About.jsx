import React from 'react';
import AboutIntroHero from './sections/AboutIntroHero';
import AboutOverview from './sections/AboutOverview';
import AboutMissionVision from './sections/AboutMissionVision';
import AboutDemoCTA from './sections/AboutDemoCTA';

/**
 * About Page
 * - Hero: centred headline on a soft lavender background
 * - Overview: who we are, three key points, photo collage
 * - Mission & Vision: students photo with a curved indigo mission panel, two overlapping cards
 * - Request a Demo banner
 */
export default function About() {
  return (
    <div className="w-full bg-white dark:bg-[#0B0F19] overflow-hidden font-sans transition-colors duration-200">
      <AboutIntroHero />
      <AboutOverview />
      <AboutMissionVision />
      <AboutDemoCTA />
    </div>
  );
}
