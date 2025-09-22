'use client';

import cx from 'classnames';
import { useState, useEffect } from 'react';

interface SkillsData {
  programming: string[];
  devOps: string[];
  databases: string[];
  ides: string[];
  genAI: string[];
}

interface ResumeSkillsData {
  name: string;
  skills: SkillsData;
}

const SAMPLE_DATA: ResumeSkillsData = {
  name: "SHREY SHAH",
  skills: {
    programming: ["Java", "Python", "JavaScript", "TypeScript"],
    devOps: ["Docker", "GitHub Actions", "Harness", "Kubernetes"],
    databases: ["SQL Server", "MySQL", "MongoDB", "Chroma"],
    ides: ["IntelliJ", "VScode", "Cursor"],
    genAI: ["Langchain", "Langgraph", "Langsmith", "W&B", "HuggingFace", "ComfyUI"]
  }
};

const SKILL_CATEGORIES = [
  { 
    key: 'programming', 
    label: 'Programming Languages', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ), 
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-500/30'
  },
  { 
    key: 'genAI', 
    label: 'Generative AI', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30'
  },
  { 
    key: 'devOps', 
    label: 'DevOps Tools', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-500/30'
  },
  { 
    key: 'databases', 
    label: 'Database Systems', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/30'
  },
  { 
    key: 'ides', 
    label: 'Development Tools', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/30'
  },
] as const;

export function ResumeSkills({
  skillsData = SAMPLE_DATA,
}: {
  skillsData?: ResumeSkillsData;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl p-8 max-w-[700px] portfolio-card-gradient shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-800/60 overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-40" />
      
      <div className="absolute -top-24 -right-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 rounded-2xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700 shadow-lg">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold portfolio-gradient-text">Technical Skills</h2>
            <p className="text-sm text-slate-400 mt-1">Core Competencies & Technologies</p>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1">
          {SKILL_CATEGORIES.map((category) => {
            const skills = skillsData.skills[category.key as keyof SkillsData];
            if (!skills || skills.length === 0) return null;

            return (
              <div 
                key={category.key} 
                className={cx(
                  "group relative bg-gradient-to-br backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden",
                  category.bgGradient,
                  category.borderColor,
                  "hover:shadow-lg hover:scale-[1.02]"
                )}
                onMouseEnter={() => setHoveredCategory(category.key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-gray-800/50 text-amber-300 border border-gray-700">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-white">{category.label}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className={cx(
                          "px-3 py-1.5 text-xs font-medium rounded-xl border backdrop-blur-sm transition-all duration-300",
                          hoveredCategory === category.key
                            ? "bg-amber-500/10 text-amber-100 border-amber-500/30 scale-105"
                            : "bg-gray-800/40 text-gray-300 border-gray-700 hover:bg-gray-800/60 hover:text-amber-100"
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm text-slate-400">9+ years experience</span>
          </div>
          <div className="text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <span className="text-sm text-slate-400">AI specialist</span>
          </div>
        </div>
      </div>
    </div>
  );
}
