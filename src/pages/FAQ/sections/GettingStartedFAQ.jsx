import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import FAQAccordion from './FAQAccordion';

export default function GettingStartedFAQ() {
  const onboardingQuestions = [
    {
      question: 'How long does onboarding typically take?',
      answer: 'Initial configuration, student and staff roster importing, and basic setup typically takes only a few business days with guidance from our onboarding team.',
    },
    {
      question: 'Is training provided for teachers and administrators?',
      answer: 'Yes. We provide interactive onboarding sessions, structured guides, and dedicated support to ensure faculty and staff are confident using the platform.',
    },
    {
      question: 'How do parents receive their access credentials?',
      answer: 'Schools generate secure invitation links or SMS passes that allow parents to register and link directly to their child’s profile.',
    },
  ];

  return (
    <SectionWrapper id="getting-started-faq">
      <SectionHeading
        align="left"
        eyebrow="Implementation"
        title="Getting Started & Onboarding"
        description="Everything you need to know about setting up your school on Pappa.ai."
      />
      <FAQAccordion idPrefix="onboarding" items={onboardingQuestions} />
    </SectionWrapper>
  );
}
