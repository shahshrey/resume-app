'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Database, Terminal, Sparkles, GitBranch, Layers } from 'lucide-react';
import { RESUME_DATA } from './portfolio-data';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: RESUME_DATA.skills.languages,
    level: 'Expert'
  },
  {
    icon: Brain,
    title: 'AI & ML',
    skills: RESUME_DATA.skills.ai,
    level: 'Advanced'
  },
  {
    icon: GitBranch,
    title: 'DevOps',
    skills: RESUME_DATA.skills.tools,
    level: 'Advanced'
  },
  {
    icon: Database,
    title: 'Databases',
    skills: RESUME_DATA.skills.databases,
    level: 'Proficient'
  }
];

const expertiseAreas = [
  { name: 'Multi-Agent Systems', percentage: 90 },
  { name: 'RAG Implementation', percentage: 85 },
  { name: 'LLM Fine-tuning', percentage: 80 },
  { name: 'Production AI', percentage: 95 }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 px-6 relative">
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
              TECHNICAL SKILLS
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Tools & Technologies
            </motion.h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h4 className="text-2xl font-semibold text-gray-200 mb-8">Core Competencies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 hover:border-amber-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                          <category.icon className="w-5 h-5 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-200 mb-1">{category.title}</h5>
                          <span className="text-xs text-gray-500">{category.level}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05) 
                            }}
                            viewport={{ once: true }}
                          >
                            <Terminal className="w-3 h-3 text-amber-400/60" />
                            <span className="text-gray-300 text-sm">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold text-gray-200 mb-8">AI Expertise</h4>
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{area.name}</span>
                      <span className="text-sm text-gray-500">{area.percentage}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 portfolio-accent-gradient rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${area.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-xl bg-amber-500/5 border border-amber-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h5 className="font-semibold text-gray-200">Cursor AI Ambassador</h5>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  2000+ hours of AI-assisted coding experience. Building full-stack applications in under an hour.
                </p>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gray-800/20 border border-gray-700/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <Layers className="w-6 h-6 text-amber-400" />
              <h4 className="text-xl font-semibold text-gray-200">Currently Exploring</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Advanced agentic workflows with memory systems, GraphRAG implementations, and multi-modal AI applications. 
              Always looking for challenging problems at the intersection of AI and software engineering.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
