import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import ExperienceCard from '../../../components/cards/ExperienceCard';

export default function VolunteerExperience() {
  return (
    <SectionWrapper id="volunteer-experience" background="subtle">
      <SectionHeading
        align="left"
        eyebrow="For Community"
        title="Volunteer & Community Experience"
        description="Structured coordination for school events, field trips, extracurriculars, and community initiatives."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <ExperienceCard
          role="Volunteer"
          headline="Coordinated Event Participation"
          details="Sign up for school activities, view assigned roles, and receive clear operational schedules."
          highlights={[
            'Event shift scheduling and role details',
            'Safety guidelines and check-in confirmation',
            'Direct coordination with school organizers',
          ]}
        />
        <ExperienceCard
          role="Coordinator"
          headline="Active Community Engagement"
          details="Streamline parent-teacher associations, alumni drives, and campus improvement campaigns."
          highlights={[
            'Volunteer attendance tracking',
            'Resource and task distribution lists',
            'Community communication bulletins',
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
