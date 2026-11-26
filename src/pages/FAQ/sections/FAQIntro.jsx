import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';

export default function FAQIntro() {
  return (
    <SectionWrapper id="faq-intro" background="soft" size="hero">
      <SectionHeading
        level="h1"
        eyebrow="Help & Information"
        title="Frequently Asked Questions"
        description="Find answers to common questions about platform security, onboarding, features, and school deployments."
      />
    </SectionWrapper>
  );
}
