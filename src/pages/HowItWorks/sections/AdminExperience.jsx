import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import ExperienceCard from '../../../components/cards/ExperienceCard';

export default function AdminExperience() {
  return (
    <SectionWrapper id="admin-experience">
      <SectionHeading
        align="left"
        eyebrow="For Leadership"
        title="School Administrator Experience"
        description="Comprehensive dashboard intelligence for real-time oversight of school operations, finances, and personnel."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <ExperienceCard
          role="Administrator"
          headline="Centralized Operational Command"
          details="Oversee daily attendance, financial inflows, staff assignments, and statutory reporting from one unified console."
          highlights={[
            'Real-time institutional metrics & reports',
            'Role-based permissions & audit logging',
            'Automated compliance and document registries',
          ]}
        />
        <ExperienceCard
          role="Leadership"
          headline="Informed Decision Making"
          details="Leverage actionable data summaries on fee collection, academic progression, and campus attendance."
          highlights={[
            'Automated invoice generation & fee reminders',
            'Campus-wide broadcast announcements',
            'Staff substitution & timetable governance',
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
