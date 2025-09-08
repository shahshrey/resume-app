'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, ArrowRight, Mail, Github, Linkedin, ChevronDown, Terminal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProfileImage } from './profile-image';
import { RESUME_DATA } from './portfolio-data';

export function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 300], [0, 50]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: textY }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-200">Available for consulting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-gray-100">{RESUME_DATA.name.split(' ')[0]}</span>
                <br />
                <span className="portfolio-gradient-text">{RESUME_DATA.name.split(' ')[1]}</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
                {RESUME_DATA.title}
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Architecting scalable AI systems with {RESUME_DATA.experience[0].period.split('–')[0].split(' ')[1]} years of experience. 
              Specializing in multi-agent workflows, RAG solutions, and production-grade LLM applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/chat" className="inline-block">
                <Button 
                  size="lg" 
                  className="group bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-6 text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300"
                >
                  <Bot className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Chat with my AI
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="#experience">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-300 font-medium px-8 py-6 text-base transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a 
                href={`mailto:${RESUME_DATA.email}`}
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com"
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shreyshahh"
                className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: imageY }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 portfolio-accent-gradient rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10" />
                <ProfileImage className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 portfolio-accent-gradient rounded-full blur-2xl opacity-30" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-300/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </motion.div>
    </section>
  );
}
