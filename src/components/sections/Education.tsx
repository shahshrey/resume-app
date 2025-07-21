'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { cn } from '@/lib/utils';
import { Tooltip } from '../ui/Tooltip';
import Image from 'next/image';

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
  logo,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={cn(
        'group relative mb-12 pl-8',
        'before:absolute before:left-0 before:top-2 before:h-4 before:w-4',
        'before:bg-white/20 before:rounded-full before:border-4 before:border-white/60 before:backdrop-blur-xl',
        'after:absolute after:bottom-0 after:left-[7px] after:top-6 after:w-0.5',
        'after:bg-white/30 last:after:hidden'
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
          'rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300',
          'shadow-xl shadow-black/10 hover:border-white/40 hover:bg-white/10',
          'hover:shadow-2xl hover:shadow-black/20'
        )}
        role="article"
        tabIndex={0}
        aria-label={`${degree} at ${institution}`}
      >
        <div className="flex items-start justify-between gap-4">
          {logo && (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/30 bg-white/5 backdrop-blur-xl">
              <Image
                src={logo}
                alt={`${institution} logo`}
                fill
                className="rounded-md object-contain p-2"
                sizes="48px"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-white/90">
              {degree}
            </h3>
            {major && <p className="mt-1 font-medium text-white/80">{major}</p>}
            <div className="mt-2 flex flex-wrap items-center gap-2 text-white/70">
              <span className="font-medium">{institution}</span>
              <span className="text-white/50">•</span>
              <motion.span
                animate={{ opacity: isHovered ? 1 : 0.8 }}
                className="text-white/90"
              >
                {period}
              </motion.span>
            </div>

            {description && <p className="mt-3 text-white/80">{description}</p>}

            {achievements && achievements.length > 0 && (
              <div className="mt-4">
                <Tooltip content="Notable Achievements">
                  <ul className="list-inside list-disc space-y-1 text-white/80">
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
      degree: 'Master of Engineering',
      institution: 'University of Windsor',
      period: 'May 2016 - Aug 2017',
      major: 'Electrical Engineering',
      description:
        'Advanced studies in electrical engineering with emphasis on power systems  and control systems.',
      achievements: [
        'Specialized in power systems and control systems',
        'Research in electrical systems optimization',
        'Advanced coursework in power systems and electronics',
      ],
      logo: '/images/education/windsor.png',
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'Gujarat Technological University',
      period: 'Aug 2011 - May 2015',
      major: 'Electrical Engineering',
      description:
        'Comprehensive foundation in electrical engineering with a minor in computer engineering, combining hardware and software expertise.',
      achievements: [
        'First Class with Distinction',
        'Minor in Computer Engineering',
        'Strong foundation in both electrical systems and programming',
      ],
      logo: '/images/education/gtu.png',
    },
  ];

  return (
    <AnimatedSection className="py-12" delay={0.3}>
      <SectionHeader title="Education" subtitle="Academic qualifications and achievements" />

      <div className="mt-12">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
