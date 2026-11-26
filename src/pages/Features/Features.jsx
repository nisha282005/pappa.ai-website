import React from 'react';
import FeaturesIntro from './sections/FeaturesIntro';
import FeatureNav from './sections/FeatureNav';
import Academics from './sections/Academics';
import Learning from './sections/Learning';
import Fees from './sections/Fees';
import Safety from './sections/Safety';
import MadeToGrow from './sections/MadeToGrow';

export default function Features() {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#0B0F19] transition-colors duration-200">
      <FeaturesIntro />
      <FeatureNav />
      <Academics />
      <Learning />
      <Fees />
      <Safety />
      <MadeToGrow />
    </div>
  );
}
