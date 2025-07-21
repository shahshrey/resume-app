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
    <div className="relative border-l border-white/20 pb-12 pl-8 last:pb-0">
      <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-white/60 to-white/40 shadow-lg shadow-white/30 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl shadow-xl shadow-black/10"
      >
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <div className="mt-1 flex flex-col gap-2 text-white/70 sm:flex-row sm:items-center sm:gap-3">
            <span className="font-medium text-white/90">{company}</span>
            <span className="hidden text-white/50 sm:block">•</span>
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <p className="leading-relaxed text-white/80">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
