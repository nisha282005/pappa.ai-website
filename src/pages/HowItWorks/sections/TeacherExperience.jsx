import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import ExperienceCard from '../../../components/cards/ExperienceCard';

export default function TeacherExperience() {
  return (
    <SectionWrapper id="teacher-experience" background="subtle">
      <SectionHeading
        align="left"
        eyebrow="For Educators"
        title="Teacher & Faculty Experience"
        description="Intuitive workflows that reduce repetitive paperwork and return valuable hours to interactive teaching."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <ExperienceCard
          role="Teacher"
          headline="Fast Attendance & Gradebooks"
          details="Mark class attendance with two clicks, record scores seamlessly, and auto-sync student report indicators."
          highlights={[
            'One-touch attendance logging',
            'Digital gradebook with automatic averaging',
            'Direct parent updates without exchanging personal contacts',
          ]}
        />
        <ExperienceCard
          role="Classroom"
          headline="Homework & Study Materials"
          details="Publish homework assignments, attach lesson resources, and review student submissions digitally."
          highlights={[
            'Streamlined assignment distribution',
            'Built-in syllabus and lesson schedule planner',
            'Direct classroom announcement channel',
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
