import React from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import FeatureCard from '../../../components/cards/FeatureCard';

export default function Communication() {
  return (
    <SectionWrapper
      id="communication"
      background="soft"
      className="relative overflow-hidden border-t border-[#E0E7FF]/40"
    >
      {/* Decorative ambient subtle background glow shapes */}
      <div
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[#E0E7FF]/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-4 right-1/4 w-64 h-64 rounded-full bg-[#EEF2FF]/60 blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <SectionHeading
          align="left"
          eyebrow="School-Home Bridge"
          title="Unified Communication"
          description="Connect teachers and families through centralized messaging, emergency alerts, and circular announcements."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <FeatureCard
            title="Instant Circulars & Notices"
            description="Send targeted school circulars to entire grades, specific classes, or individual parents."
          />
          <FeatureCard
            title="Teacher-Parent Messaging"
            description="Direct, moderated channels allowing productive dialogue without sharing personal phone numbers."
          />
          <FeatureCard
            title="Event Calendars & Reminders"
            description="Synchronized school event schedules with automated RSVP tracking and parental alerts."
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
