import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import ExperienceCard from '../../../components/cards/ExperienceCard';

export default function ParentExperience() {
  return (
    <SectionWrapper id="parent-experience">
      <SectionHeading
        align="left"
        eyebrow="For Families"
        title="Parent & Guardian Experience"
        description="Transparent access to your child's daily school life, grades, safety notifications, and billing."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <ExperienceCard
          role="Parent"
          headline="Stay Completely Connected"
          details="Receive instant attendance notifications, teacher feedback, and school notices directly on your mobile device."
          highlights={[
            'Daily arrival and departure alerts',
            'Subject grades, feedback & report cards',
            'Easy school event calendar & teacher appointments',
          ]}
        />
        <ExperienceCard
          role="Guardian"
          headline="Frictionless Payments & Safety"
          details="Review itemized tuition fees, pay invoices securely online, and access verified guardian pickup authorization."
          highlights={[
            'Secure digital fee payments and instant receipts',
            'Safe pickup authorization passes',
            'Direct message thread with class teachers',
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
