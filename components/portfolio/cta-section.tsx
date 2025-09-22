'use client';

import { motion } from 'framer-motion';
import { Bot, Mail, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from './portfolio-data';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 px-6 relative">
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-200">Available for opportunities</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Build Something
            <br />
            <span className="portfolio-gradient-text">Extraordinary</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Whether you need AI consulting, want to discuss a project, or just chat about the future of AI – I'm here to help.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/chat" className="inline-block">
              <Button 
                size="lg" 
                className="group bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-6 text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Chat with AI Assistant
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <a href={`mailto:${RESUME_DATA.email}`}>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-300 font-medium px-8 py-6 text-base transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                Send Email
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available for consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              <span>AI responds 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
