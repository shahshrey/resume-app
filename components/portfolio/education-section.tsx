'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, School } from 'lucide-react';
import Image from 'next/image';
import { RESUME_DATA } from './portfolio-data';

const educationLogos: Record<string, string> = {
  'University of Windsor': '/images/education/windsor.png',
  'Gujarat Technological University': '/images/education/gtu.png'
};

export function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <motion.h2 
              className="text-sm font-medium text-amber-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              EDUCATION
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Learning and Growth
            </motion.h3>
          </div>

          <div className="space-y-6">
            {RESUME_DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 hover:border-amber-500/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    {educationLogos[edu.institution] && (
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                        <Image 
                          src={educationLogos[edu.institution]} 
                          alt={edu.institution}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {!educationLogos[edu.institution] && (
                      <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <School className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-100 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-amber-400 font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 mt-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


