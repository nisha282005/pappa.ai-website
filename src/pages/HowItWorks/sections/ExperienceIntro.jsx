import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';

export default function ExperienceIntro() {
  return (
    <SectionWrapper id="how-it-works-intro" background="soft" size="hero">
      <SectionHeading
        level="h1"
        eyebrow="User Journeys"
        title="How Pappa.ai Works"
        description="A cohesive ecosystem crafted to deliver specialized, role-tailored experiences for every member of the school community."
      />
    </SectionWrapper>
  );
}
