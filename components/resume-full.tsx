'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
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

  // Clean up and format the markdown content for better display
  const formatMarkdown = (text: string) => {
    if (!text) return '';
    
    let formatted = text;
    
    // Format section headers with icons
    formatted = formatted.replace(/^\*\*SUMMARY\*\*$/gm, '## 📝 PROFESSIONAL SUMMARY');
    formatted = formatted.replace(/^\*\*TECHNICAL SKILLS:\*\*$/gm, '## 💻 TECHNICAL SKILLS');
    formatted = formatted.replace(/^\*\*WORK EXPERIENCE\*\*$/gm, '## 💼 WORK EXPERIENCE');
    formatted = formatted.replace(/^\*\*EDUCATION\*\*$/gm, '## 🎓 EDUCATION');
    
    // Fix escaped characters
    formatted = formatted.replace(/\\&/g, '&');
    formatted = formatted.replace(/\\\-/g, '-');
    formatted = formatted.replace(/\\`/g, '`');
    
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
          {/* Download Button */}
          <div className="flex justify-center mb-6">
            <a
              href="/resume.pdf"
              download="Shrey_Shah_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 
                bg-gradient-to-r from-amber-500/20 to-orange-500/20 
                hover:from-amber-500/30 hover:to-orange-500/30 
                text-amber-300 hover:text-amber-200
                border border-amber-500/40 hover:border-amber-400/60
                rounded-lg transition-all duration-300 
                shadow-lg hover:shadow-amber-500/20
                backdrop-blur-sm group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-medium">Download Resume PDF</span>
            </a>
          </div>

          {/* Resume Content */}
          <div className="prose prose-invert prose-amber max-w-none
            prose-headings:text-amber-200
            prose-h1:text-4xl prose-h1:font-bold prose-h1:text-center prose-h1:mb-2
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-amber-300 prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-amber-500/30 prose-h2:pb-2
            prose-h3:text-xl prose-h3:font-medium prose-h3:text-amber-400 prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-3
            prose-strong:text-amber-300 prose-strong:font-semibold
            prose-ul:text-gray-200 prose-ul:space-y-2 prose-ul:mb-4
            prose-li:marker:text-amber-400 prose-li:leading-relaxed prose-li:mb-1
            prose-em:text-gray-400 prose-em:not-italic
            prose-hr:border-amber-500/30 prose-hr:my-6">
            <Markdown>{formatMarkdown(content)}</Markdown>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
