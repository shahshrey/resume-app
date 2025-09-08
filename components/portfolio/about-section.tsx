'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Code2, Layers, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from './portfolio-data';

const philosophyPoints = [
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "Every solution starts with understanding how AI can augment human capabilities, not replace them."
  },
  {
    icon: Code2,
    title: "Production Excellence",
    description: "Building systems that scale from prototype to production with reliability and performance at the core."
  },
  {
    icon: Layers,
    title: "Architectural Depth",
    description: "Designing multi-layered systems where each component serves a purpose in the larger ecosystem."
  }
];

export function AboutSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <section id="about" className="py-24 lg:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-medium text-amber-400 mb-4">ABOUT</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
                Engineering the Future of AI
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {RESUME_DATA.summary}
              </p>
              
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold portfolio-gradient-text">9+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-700" />
                <div>
                  <div className="text-3xl font-bold portfolio-gradient-text">2+</div>
                  <div className="text-sm text-gray-500">Years in AI</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h4 className="text-2xl font-semibold text-gray-200 mb-6">Engineering Philosophy</h4>
                <div className="space-y-4">
                  {philosophyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 hover:border-amber-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-300">
                          <point.icon className="w-5 h-5 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-200 mb-2">{point.title}</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-semibold text-gray-200 mb-6">Key Highlights</h4>
                <div className="grid gap-4">
                  {RESUME_DATA.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-3 p-4 rounded-lg bg-gray-800/20 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
