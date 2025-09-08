'use client';

import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  CodeBracketIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Markdown } from './markdown';

interface ResumeFullData {
  content: string;
}

export function ResumeFull({
  resumeContent,
}: {
  resumeContent: ResumeFullData | string;
}) {
  const content = typeof resumeContent === 'string' 
    ? resumeContent 
    : resumeContent?.content || '';

  const formatContent = (rawContent: string) => {
    const lines = rawContent.split('\n');
    const formatted: JSX.Element[] = [];
    let currentSection: JSX.Element[] = [];
    let sectionTitle = '';
    let inExperience = false;
    let inEducation = false;
    
    lines.forEach((line, index) => {
      if (line.includes('SHREY SHAH') && line.includes('24 Trout Run')) {
        formatted.push(
          <div key="header" className="text-center mb-8">
            <h1 className="text-4xl font-bold portfolio-gradient-text mb-2">
              SHREY SHAH
            </h1>
            <p className="text-xl text-gray-300 mb-4">GENERATIVE AI ENGINEER</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-amber-400" />
                <span>sshreyv@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-amber-300" />
                <span>(647)-675-0790</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-amber-200" />
                <span>24 Trout Run, Halifax, NS</span>
              </div>
            </div>
          </div>
        );
      } else if (line.includes('(647)-675-0790') && line.includes('GENERATIVE AI ENGINEER')) {
        return;
      } else if (line.includes('**SUMMARY**')) {
        sectionTitle = 'SUMMARY';
        inExperience = false;
        inEducation = false;
      } else if (line.includes('**TECHNICAL SKILLS:**')) {
        if (currentSection.length > 0) {
          formatted.push(
            <div key={sectionTitle} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-amber-400" />
                {sectionTitle}
              </h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                {currentSection}
              </div>
            </div>
          );
          currentSection = [];
        }
        sectionTitle = 'TECHNICAL SKILLS';
      } else if (line.includes('**WORK EXPERIENCE**')) {
        if (currentSection.length > 0) {
          formatted.push(
            <div key={sectionTitle} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CodeBracketIcon className="w-6 h-6 text-amber-300" />
                {sectionTitle}
              </h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                {currentSection}
              </div>
            </div>
          );
          currentSection = [];
        }
        sectionTitle = 'WORK EXPERIENCE';
        inExperience = true;
        inEducation = false;
      } else if (line.includes('**EDUCATION**')) {
        if (currentSection.length > 0) {
          formatted.push(
            <div key={sectionTitle} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BriefcaseIcon className="w-6 h-6 text-amber-400" />
                {sectionTitle}
              </h2>
              <div className="space-y-6">
                {currentSection}
              </div>
            </div>
          );
          currentSection = [];
        }
        sectionTitle = 'EDUCATION';
        inExperience = false;
        inEducation = true;
      } else if (line.trim() && !line.includes('sshreyv@gmail.com')) {
        if (inExperience && line.includes('**') && !line.includes('*')) {
          if (currentSection.length > 0 && sectionTitle === 'WORK EXPERIENCE') {
            formatted.push(
              <div key={`exp-${index}`} className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BriefcaseIcon className="w-6 h-6 text-teal-400" />
                  {sectionTitle}
                </h2>
                <div className="space-y-6">
                  {currentSection}
                </div>
              </div>
            );
            currentSection = [];
            sectionTitle = '';
          }
          
          const parts = line.split(/\s{2,}/);
          const [title, company, duration] = parts.map(p => p.replace(/\*\*/g, '').trim());
          
          currentSection.push(
            <div key={`job-${index}`} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-amber-500/40 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">{title || line.replace(/\*\*/g, '')}</h3>
                  {company && <p className="text-gray-300">{company}</p>}
                </div>
                {duration && <span className="text-sm text-gray-400 mt-2 md:mt-0">{duration}</span>}
              </div>
            </div>
          );
        } else if (inEducation && line.includes('**')) {
          const cleanLine = line.replace(/\*\*/g, '').trim();
          const parts = cleanLine.split(/\s{2,}/);
          
          currentSection.push(
            <div key={`edu-${index}`} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-amber-500/40 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-amber-300">{parts[0]}</h3>
                  {parts[1] && <p className="text-gray-300">{parts[1]}</p>}
                </div>
                {parts[2] && <span className="text-sm text-gray-400 mt-2 md:mt-0">{parts[2]}</span>}
              </div>
            </div>
          );
        } else {
          currentSection.push(
            <div key={`content-${index}`} className="prose prose-invert max-w-none">
              <Markdown>{line}</Markdown>
            </div>
          );
        }
      }
    });
    
    if (currentSection.length > 0) {
      const icon = sectionTitle === 'EDUCATION' ? (
        <AcademicCapIcon className="w-6 h-6 text-cyan-400" />
      ) : sectionTitle === 'WORK EXPERIENCE' ? (
        <BriefcaseIcon className="w-6 h-6 text-teal-400" />
      ) : (
        <SparklesIcon className="w-6 h-6 text-emerald-400" />
      );
      
      formatted.push(
        <div key={sectionTitle} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            {icon}
            {sectionTitle}
          </h2>
          <div className={sectionTitle === 'EDUCATION' || sectionTitle === 'WORK EXPERIENCE' ? "space-y-6" : "bg-slate-800/50 rounded-lg p-6 border border-emerald-700/30"}>
            {currentSection}
          </div>
        </div>
      );
    }
    
    return formatted;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-xl portfolio-card-gradient p-8 shadow-2xl border border-gray-800/60 backdrop-blur-sm">
        <div className="absolute inset-0 portfolio-mesh-gradient opacity-40" />
        <div className="absolute top-0 left-0 w-full h-1 portfolio-accent-gradient" />
        
        <div className="relative z-10">
          {formatContent(content)}
        </div>
      </div>
    </motion.div>
  );
}
