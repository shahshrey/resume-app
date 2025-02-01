'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { theme } from '@/lib/theme';

const Hero: FC = () => {
  return (
    <section className="relative" id="home">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Shrey Shah
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-main">
            AI Software Engineer
          </h2>
          <div className="space-y-2">
            <p className="text-text-secondary">
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sshreyv@gmail.com
              </span>
            </p>
            <p className="text-text-secondary">
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (647)-675-0790
              </span>
            </p>
            <p className="text-text-secondary">
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Halifax, NS
              </span>
            </p>
          </div>
          <div className="prose prose-lg mt-6">
            <p className="text-text-secondary leading-relaxed">
              AI Software Engineer with over 8 years of experience in software development and 1.5+ years of experience developing AI-driven tools and solutions. Expertise in LangChain, LangGraph, and litellm with hands-on development of multi-agent applications, RAG and knowledge graphs systems at scale.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-light to-primary-dark animate-pulse">
            <div className="absolute inset-2 bg-background-main rounded-full flex items-center justify-center">
              <span className="text-6xl text-text-primary">SS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 