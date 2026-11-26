import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import FAQAccordion from './FAQAccordion';

export default function SafetyPrivacyFAQ() {
  const safetyQuestions = [
    {
      question: 'How is student data protected?',
      answer: 'All data is encrypted in transit using modern TLS and at rest with enterprise-grade standards. Role-based access ensures educators and parents only access records authorized for them.',
    },
    {
      question: 'Are financial and payment records secure?',
      answer: 'Fee transactions and online payments are handled through PCI-DSS compliant payment processing integrations, ensuring zero payment card data is stored on local servers.',
    },
    {
      question: 'How does pickup authorization work?',
      answer: 'Guardians verify student dismissals through authorized pickup digital badges, preventing unauthorized dismissals from school grounds.',
    },
  ];

  return (
    <SectionWrapper id="safety-faq" background="subtle">
      <SectionHeading
        align="left"
        eyebrow="Trust & Compliance"
        title="Safety & Privacy"
        description="Our commitment to safeguarding student, educator, and institutional data."
      />
      <FAQAccordion idPrefix="safety" items={safetyQuestions} />
    </SectionWrapper>
  );
}
