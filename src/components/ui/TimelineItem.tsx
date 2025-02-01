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

export const TimelineItem = ({ title, company, duration, description, technologies }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12 border-l border-primary-main/20 last:pb-0">
      <div className="absolute w-4 h-4 bg-gradient-to-r from-primary-main to-primary-dark rounded-full -left-2 mt-1.5 shadow-glow" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div>
          <h3 className="text-2xl font-semibold text-text-primary">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-text-secondary mt-1">
            <span className="font-medium text-primary-light">{company}</span>
            <span className="hidden sm:block text-text-disabled">•</span>
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-background-elevated text-primary-light border border-primary-main/20 hover:border-primary-main/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}; 