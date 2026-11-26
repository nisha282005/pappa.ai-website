import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';

export default function ContactIntro() {
  return (
    <SectionWrapper id="contact-intro" background="soft" size="hero" className="pappa-hero-after-spacer">
      <SectionHeading
        level="h1"
        eyebrow="Connect With Us"
        title="Get in Touch with Pappa.ai"
        description="Whether you are planning a campus rollout, seeking a product demonstration, or need institutional pricing, our specialists are ready to assist."
      />
    </SectionWrapper>
  );
}
