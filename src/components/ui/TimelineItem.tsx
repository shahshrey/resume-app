'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const TimelineItem = ({
  title,
  company,
  duration,
  description,
  technologies,
}: TimelineItemProps) => {
  return (
    <div className="relative border-l border-primary-main/20 pb-12 pl-8 last:pb-0">
      <div className="shadow-glow absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-primary-main to-primary-dark" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div>
          <h3 className="text-2xl font-semibold text-text-primary">{title}</h3>
          <div className="mt-1 flex flex-col gap-2 text-text-secondary sm:flex-row sm:items-center sm:gap-3">
            <span className="font-medium text-primary-light">{company}</span>
            <span className="hidden text-text-disabled sm:block">•</span>
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary-main/20 bg-background-elevated px-3 py-1 text-sm text-primary-light transition-colors hover:border-primary-main/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
