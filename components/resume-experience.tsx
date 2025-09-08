'use client';
import { useState, useEffect } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  environment: string;
  highlights: string[];
}

interface ResumeExperienceData {
  name: string;
  experience: ExperienceItem[];
}

const SAMPLE_DATA: ResumeExperienceData = {
  name: "SHREY SHAH",
  experience: [
    {
      title: "Senior AI Software Engineer",
      company: "Vivun",
      duration: "May 2023 – Present",
      environment: "Langgraph, Python, fastapi, nextjs, LLMS, RAG, Cursor",
      highlights: [
        "Led the development of multi-agent applications using LangGraph for efficient LLM and RAG-based systems.",
        "Developed POCs exploring RAG solutions, including Hybrid RAG, GraphRag and Agentic RAG.",
        "Used MCP tools to create a ticket to PR workflows in Cursor, to release features really really fast."
      ]
    }
  ]
};

export function ResumeExperience({
  experienceData = SAMPLE_DATA,
}: {
  experienceData?: ResumeExperienceData;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxDisplayed = isMobile ? 2 : 3;
  const displayedExperience = experienceData.experience.slice(0, maxDisplayed);

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl p-8 max-w-[750px] portfolio-card-gradient shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-800/60 overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-40" />
      
      <div className="absolute -top-24 -right-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 rounded-2xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700 shadow-lg">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold portfolio-gradient-text">Work Experience</h2>
            <p className="text-sm text-slate-400 mt-1">Professional Journey & Achievements</p>
          </div>
        </div>

        <div className="space-y-4">
          {displayedExperience.map((job, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-amber-500/40 transition-all duration-300 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex flex-row justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-amber-100 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-amber-400 font-medium">
                            {job.company}
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="text-sm text-slate-400">
                            {job.duration}
                          </span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="ml-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300"
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {job.environment && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.environment.split(', ').map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2.5 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-lg border border-amber-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {expandedIndex === index && (
                      <div className="mt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                        {job.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start gap-3 group/item">
                            <div className="mt-1.5">
                              <div className="w-1.5 h-1.5 rounded-full portfolio-accent-gradient" />
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed group-hover/item:text-slate-200 transition-colors">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {experienceData.experience.length > maxDisplayed && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm text-slate-400">
                {experienceData.experience.length - maxDisplayed} more positions
              </span>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slide-in-from-top-2 {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation-fill-mode: both;
        }
        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
        }
      `}</style>
    </div>
  );
}
