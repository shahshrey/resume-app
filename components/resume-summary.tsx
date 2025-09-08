'use client';

import cx from 'classnames';
import { useState, useEffect } from 'react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ResumeSummaryData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
}

const SAMPLE_DATA: ResumeSummaryData = {
  name: "SHREY SHAH",
  title: "GENERATIVE AI ENGINEER",
  contact: {
    email: "sshreyv@gmail.com",
    phone: "(647)-675-0790",
    location: "24 Trout Run, Halifax, NS"
  },
  summary: "Senior AI Software Engineer with over 9 years of software development and 2+ years specializing in AI agent development. Experienced in architecting and implementing scalable AI solutions, including multi-agent applications, RAG, and knowledge graph systems."
};

export function ResumeSummary({
  resumeData = SAMPLE_DATA,
}: {
  resumeData?: ResumeSummaryData;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="relative flex flex-col gap-5 rounded-3xl p-8 max-w-[700px] portfolio-card-gradient shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-800/60 overflow-hidden backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-40" />
      
      <div className="absolute -top-24 -right-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold portfolio-gradient-text animate-gradient">
                {resumeData.name}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-amber-200">
                  {resumeData.title}
                </span>
                <span className="px-2 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/30">
                  Available
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="size-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm flex items-center justify-center border border-emerald-500/30 shadow-lg">
                <svg className="w-10 h-10 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className={cx("grid gap-3 mt-2", {
            "grid-cols-1": isMobile,
            "grid-cols-3": !isMobile
          })}>
            <a href={`mailto:${resumeData.contact.email}`} className="group flex items-center gap-3 px-4 py-2.5 bg-gray-800/40 hover:bg-gray-800/60 rounded-xl border border-gray-700 transition-all duration-300">
              <svg className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-300 group-hover:text-amber-100 transition-colors">{resumeData.contact.email}</span>
            </a>
            
            <div className="group flex items-center gap-3 px-4 py-2.5 bg-gray-800/40 hover:bg-gray-800/60 rounded-xl border border-gray-700 transition-all duration-300">
              <svg className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm text-gray-300 group-hover:text-amber-100 transition-colors">{resumeData.contact.phone}</span>
            </div>
            
            <div className="group flex items-center gap-3 px-4 py-2.5 bg-gray-800/40 hover:bg-gray-800/60 rounded-xl border border-gray-700 transition-all duration-300">
              <svg className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300 group-hover:text-amber-100 transition-colors">{resumeData.contact.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Professional Summary</h2>
          <p className="text-slate-200 leading-relaxed text-base">
            {resumeData.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/30">9+ Years Experience</span>
            <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/30">AI Specialist</span>
            <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-full border border-amber-500/30">Full Stack</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
