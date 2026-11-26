import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import FeatureCard from '../../../components/cards/FeatureCard';

export default function HowItGoes() {
  const steps = [
    {
      step: '1',
      title: 'Submit Inquiry',
      description: 'Fill out the access request form with details about your institution and requirements.',
    },
    {
      step: '2',
      title: 'Personalized Walkthrough',
      description: 'Meet with our education technology team for an interactive demonstration tailored to your school.',
    },
    {
      step: '3',
      title: 'Guided Onboarding',
      description: 'We assist with student and staff roster setup, fee structure configuration, and orientation.',
    },
  ];

  return (
    <SectionWrapper id="how-it-goes">
      <SectionHeading
        align="left"
        eyebrow="Process"
        title="What to Expect Next"
        description="A straightforward, supported path from discovery to school rollout."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {steps.map((s) => (
          <FeatureCard
            key={s.step}
            badge={`Step ${s.step}`}
            title={s.title}
            description={s.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
