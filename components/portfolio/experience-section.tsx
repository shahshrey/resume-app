'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { RESUME_DATA } from './portfolio-data';

const companyLogos: Record<string, string> = {
  'Vivun': '/images/companies/vivun.jpg',
  'Cursor': '/images/companies/cursor.png',
  'Priceline': '/images/companies/priceline.png',
  'Powerhub Inc.': '/images/companies/powerhub.png',
  'Parsedata': '/images/companies/parsedata.png',
  'NXM Labs INC': '/images/companies/nxm.png',
  'Webyoutechnologies': '/images/companies/webyou.png'
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 relative bg-gray-900/50">
      <div className="absolute inset-0 portfolio-dot-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
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
              WORK EXPERIENCE
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Building the Future
            </motion.h3>
          </div>
          
          <div className="space-y-6">
            {RESUME_DATA.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 hover:border-amber-500/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                    <div className="lg:col-span-8">
                      <div className="flex items-start gap-4 mb-4">
                        {companyLogos[exp.company] && (
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                            <Image 
                              src={companyLogos[exp.company]} 
                              alt={exp.company}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {!companyLogos[exp.company] && (
                          <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-gray-500" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-100 mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-lg text-amber-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs font-medium border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-4 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      
                      {index === 0 && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 text-sm font-medium self-start"
                        >
                          <span>View Projects</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              Looking for detailed case studies? Check out my{' '}
              <a href="#talks" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
                talks and presentations
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
