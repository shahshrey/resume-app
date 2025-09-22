'use client';
import { useState, useEffect } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

interface ResumeEducationData {
  name: string;
  education: EducationItem[];
}

const SAMPLE_DATA: ResumeEducationData = {
  name: "SHREY SHAH",
  education: [
    {
      degree: "Master of Engineering",
      institution: "University of Windsor",
      duration: "May 2016- Aug 2017"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Gujarat Technological University",
      duration: "Aug 2011-May 2015"
    }
  ]
};

export function ResumeEducation({
  educationData = SAMPLE_DATA,
}: {
  educationData?: ResumeEducationData;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDegreeIcon = (degree: string) => {
    if (degree.toLowerCase().includes('master')) {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    );
  };

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl p-8 max-w-[650px] portfolio-card-gradient shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-800/60 overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 portfolio-mesh-gradient opacity-40" />
      
      <div className="absolute -top-24 -right-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 portfolio-accent-gradient rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 rounded-2xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700 shadow-lg">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold portfolio-gradient-text">Education</h2>
            <p className="text-sm text-slate-400 mt-1">Academic Background</p>
          </div>
        </div>

        <div className="space-y-4">
          {educationData.education.map((edu, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-amber-500/40 transition-all duration-300 overflow-hidden hover:shadow-lg"
            >
              <div className="absolute inset-0 from-transparent to-transparent group-hover:from-amber-500/5 group-hover:to-amber-500/10 transition-all duration-300" />
              
              <div className="relative p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gray-800/50 text-amber-300 border border-gray-700 group-hover:border-amber-500/40 transition-all duration-300">
                    {getDegreeIcon(edu.degree)}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-100 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-amber-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-slate-400">
                        {edu.duration}
                      </span>
                    </div>
                    
                    {index === 0 && (
                      <div className="flex gap-2 mt-3">
                        <span className="px-2.5 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-lg border border-amber-500/20">
                          Graduate Degree
                        </span>
                        <span className="px-2.5 py-1 text-xs font-medium text-amber-200 bg-amber-500/10 rounded-lg border border-amber-500/20">
                          Completed
                        </span>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="flex gap-2 mt-3">
                        <span className="px-2.5 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 rounded-lg border border-amber-500/20">
                          Undergraduate
                        </span>
                        <span className="px-2.5 py-1 text-xs font-medium text-amber-200 bg-amber-500/10 rounded-lg border border-amber-500/20">
                          Completed
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-3 px-4 py-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm text-amber-300">Continuous Learning Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
}
