'use client';
import React, { FC } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineItem } from '../ui/TimelineItem';
import { theme } from '@/lib/theme';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
}

const EducationItem: FC<EducationItemProps> = ({
  degree,
  institution,
  period
}) => (
  <div className="border-l-4 border-primary-main pl-4 mb-8 space-y-2">
    <h3 className="text-xl font-semibold text-text-primary">{degree}</h3>
    <div className="flex flex-wrap gap-2 items-center text-text-secondary">
      <span className="font-medium">{institution}</span>
      <span className="text-text-disabled">•</span>
      <span>{period}</span>
    </div>
  </div>
);

const Education: FC = () => {
  const education = [
    {
      degree: "Master of Engineering",
      institution: "University of Windsor",
      period: "May 2016 - Aug 2017"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Gujarat Technological University",
      period: "Aug 2011 - May 2015"
    }
  ];

  return (
    <AnimatedSection className="py-8" delay={0.3}>
      <SectionHeader 
        title="Education" 
        subtitle="Academic background and qualifications"
      />
      
      <div className="mt-8">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education; 