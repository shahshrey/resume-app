'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, Video, Mic } from 'lucide-react';
import { RESUME_DATA } from './portfolio-data';

export function TalksSection() {
  return (
    <section id="talks" className="py-24 lg:py-32 px-6 relative bg-gray-900/50">
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-20" />
      
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
              SPEAKING & TEACHING
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Sharing Knowledge
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Teaching AI development through talks, workshops, and community events
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {RESUME_DATA.talks.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 hover:border-amber-500/30 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                      <Mic className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-100 mb-3 leading-tight">
                      {talk.title}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-4 h-4 text-amber-400" />
                      <p className="text-amber-400 font-medium">
                        {talk.event}
                      </p>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {talk.description}
                    </p>
                  </div>
                  
                  {talk.recording && talk.recording !== "#" && (
                    <motion.a 
                      href={talk.recording} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Video className="w-4 h-4" />
                      Watch Recording
                      <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 p-8 rounded-2xl bg-gray-800/20 border border-gray-700/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-5 h-5 text-amber-400" />
              <h4 className="text-xl font-semibold text-gray-200">Community Impact</h4>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reaching thousands of developers worldwide through Maven, community meetups, and conference talks. 
              Passionate about making AI development accessible to everyone.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
