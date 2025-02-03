'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { cn } from '@/lib/utils';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon?: string;
}

const CertificationCard: FC<CertificationProps> = ({
  title,
  issuer,
  date,
  credentialUrl,
  icon,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn(
      'group rounded-lg p-6 transition-all duration-300',
      'bg-background-paper/50 backdrop-blur-sm',
      'border border-transparent hover:border-primary-main',
      'hover:shadow-lg hover:shadow-primary-main/5'
    )}
  >
    <div className="flex items-start gap-4">
      {icon && (
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-main/5 text-2xl">
          {icon}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-primary-main">
          {title}
        </h3>
        <div className="mt-1 flex flex-col gap-2 text-sm text-text-secondary sm:flex-row sm:items-center">
          <span className="font-medium">{issuer}</span>
          <span className="hidden sm:inline">•</span>
          <span>{date}</span>
        </div>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-sm text-primary-main transition-colors hover:text-primary-dark"
          >
            View Credential
            <span className="ml-1">↗</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Certifications: FC = () => {
  const certifications: CertificationProps[] = [
    {
      title: 'Building Knowledge Graphs with LLMs',
      issuer: 'Neo4j',
      date: 'Oct 2024',
      credentialUrl: 'https://graphacademy.neo4j.com/c/1cc52f2c-b223-42ce-8379-08dd11c15937/',
      icon: '🕸️',
    },
    {
      title: 'Cypher Fundamentals',
      issuer: 'Neo4j',
      date: 'Oct 2024',
      credentialUrl: 'https://graphacademy.neo4j.com/c/402da2b3-1994-4a3d-8f18-6e3bd25ce8c1/',
      icon: '📊',
    },
    {
      title: 'Stable Diffusion: Tips, Tricks, and Techniques',
      issuer: 'LinkedIn',
      date: 'Mar 2024',
      credentialUrl:
        'https://www.linkedin.com/learning/certificates/a943d0719ccc8df7de8418bb5b45a538f8b1ab36e050c0bf0855643fa3643ca7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BcweTjjtgS7ue%2B3Veh3wjDA%3D%3D',
      icon: '🎨',
    },
    {
      title: 'AWS Cloud Practitioner - CLF-C01',
      issuer: 'A Cloud Guru | Pluralsight',
      date: 'Nov 2022',
      credentialUrl: 'https://verify.acloud.guru/4624E78810D8',
      icon: '☁️',
    },
    {
      title: 'AWS Certified Solutions Architect - Associate SAA-C02',
      issuer: 'A Cloud Guru | Pluralsight',
      date: 'Nov 2022',
      credentialUrl: 'https://verify.acloud.guru/40A6C3120BE7',
      icon: '🏗️',
    },
    {
      title: 'Advanced Testing Practices Using AWS DevOps Tools',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Nov 2022',
      credentialUrl:
        'https://drive.google.com/file/d/1g6yuAGJ6AK_LrEoqACzEeZthUcFWSxmq/view?usp=sharing',
      icon: '🔧',
    },
    {
      title: 'Splunk 7.x Fundamentals Part 1',
      issuer: 'Splunk - NYC',
      date: 'Sep 2021',
      credentialUrl:
        'https://education.splunk.com/award/completion/ae50595c-3489-3248-9456-acd9d263464c',
      icon: '📊',
    },
  ];

  return (
    <AnimatedSection className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" delay={0.5}>
      <SectionHeader
        title="Certifications"
        subtitle="Professional certifications and achievements"
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
