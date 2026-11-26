import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import FAQAccordion from './FAQAccordion';

export default function GeneralFAQ() {
  const generalQuestions = [
    {
      question: 'What is Pappa.ai and who is it designed for?',
      answer: 'Pappa.ai is an integrated school management platform built for school administrators, educators, parents, and community volunteers to streamline operations, communication, and learning.',
    },
    {
      question: 'Can Pappa.ai be used by multi-branch school networks?',
      answer: 'Yes. The system supports multi-campus and branch hierarchies, allowing network administrators to view consolidated reports while school principals manage their specific local campus.',
    },
    {
      question: 'What devices are supported?',
      answer: 'Pappa.ai is accessible on all modern web browsers (Chrome, Safari, Edge, Firefox) on desktop and tablet, alongside mobile applications for iOS and Android.',
    },
  ];

  return (
    <SectionWrapper id="general-faq">
      <SectionHeading
        align="left"
        eyebrow="Platform Overview"
        title="General Inquiries"
        description="Understanding how Pappa.ai coordinates school workflows."
      />
      <FAQAccordion idPrefix="general" items={generalQuestions} />
    </SectionWrapper>
  );
}
