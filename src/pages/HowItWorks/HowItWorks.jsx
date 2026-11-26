import React from 'react';
import FourStepsFlow from './sections/FourStepsFlow';
import RoleExperiences from './sections/RoleExperiences';

export default function HowItWorks() {
  return (
    <div className="w-full bg-white dark:bg-[#0B0F19] transition-colors duration-200">
      <FourStepsFlow />
      <RoleExperiences />
    </div>
  );
}
