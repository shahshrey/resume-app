'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { cn } from '@/lib/utils';
import { theme } from '@/lib/theme';
import { Tooltip } from '../ui/Tooltip';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  major?: string;
  description?: string;
  achievements?: string[];
  logo?: string;
}

const EducationItem: FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  major,
  description,
  achievements,
  logo
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={cn(
        "relative pl-8 mb-12 group",
        "before:absolute before:left-0 before:top-2 before:w-4 before:h-4",
        "before:bg-background before:border-4 before:border-primary-main before:rounded-full",
        "after:absolute after:left-[7px] after:top-6 after:bottom-0 after:w-0.5",
        "after:bg-primary-main/30 last:after:hidden"
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={cn(
          "p-6 rounded-lg transition-all duration-300",
          "bg-background-paper/50 hover:bg-background-paper",
          "border border-transparent hover:border-primary-main",
          "shadow-sm hover:shadow-md"
        )}
        role="article"
        tabIndex={0}
        aria-label={`${degree} at ${institution}`}
      >
        <div className="flex items-start justify-between gap-4">
          {logo && (
            <img 
              src={logo} 
              alt={`${institution} logo`}
              className="w-12 h-12 object-contain rounded-md"
            />
          )}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary-main transition-colors">
              {degree}
            </h3>
            {major && (
              <p className="text-text-secondary mt-1 font-medium">
                {major}
              </p>
            )}
            <div className="flex flex-wrap gap-2 items-center text-text-secondary mt-2">
              <span className="font-medium">{institution}</span>
              <span className="text-text-disabled">•</span>
              <motion.span
                animate={{ opacity: isHovered ? 1 : 0.8 }}
                className="text-primary-main/80"
              >
                {period}
              </motion.span>
            </div>
            
            {description && (
              <p className="mt-3 text-text-secondary">
                {description}
              </p>
            )}
            
            {achievements && achievements.length > 0 && (
              <div className="mt-4">
                <Tooltip content="Notable Achievements">
                  <ul className="list-disc list-inside space-y-1 text-text-secondary">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education: FC = () => {
  const education = [
    {
      degree: "Master of Engineering",
      institution: "University of Windsor",
      period: "May 2016 - Aug 2017",
      major: "Electrical Engineering",
      description: "Advanced studies in electrical engineering with emphasis on industrial automation and control systems.",
      achievements: [
        "Specialized in industrial automation and control systems",
        "Research in electrical systems optimization",
        "Advanced coursework in power systems and electronics"
      ],
      logo: "/images/education/windsor.png"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Gujarat Technological University",
      period: "Aug 2011 - May 2015",
      major: "Electrical Engineering",
      description: "Comprehensive foundation in electrical engineering with a minor in computer engineering, combining hardware and software expertise.",
      achievements: [
        "First Class with Distinction",
        "Minor in Computer Engineering",
        "Strong foundation in both electrical systems and programming"
      ],
      logo: "/images/education/gtu.png"
    }
  ];

  return (
    <AnimatedSection className="py-12" delay={0.3}>
      <SectionHeader 
        title="Education" 
        subtitle="Academic qualifications and achievements"
      />
      
      <div className="mt-12">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education; 