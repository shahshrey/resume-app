'use client';
import React, { FC, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { theme } from '@/lib/theme';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';

interface SkillProps {
  name: string;
  proficiency: number;
  icon?: string;
  yearsOfExperience?: number;
  type: 'Beginner' | 'Intermediate' | 'Expert';
  category: string;
}

type FilterType = 'All' | 'Beginner' | 'Intermediate' | 'Expert';
type SortType = 'name' | 'proficiency' | 'experience';

const getTypeColor = (type: SkillProps['type']) => {
  switch (type) {
    case 'Expert':
      return 'from-emerald-500 to-emerald-300';
    case 'Intermediate':
      return 'from-amber-500 to-amber-300';
    case 'Beginner':
      return 'from-sky-500 to-sky-300';
  }
};

const SkillBadge: FC<SkillProps> = ({ name, proficiency, icon, yearsOfExperience, type }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group relative"
    role="listitem"
    aria-label={`${name} - ${proficiency}% proficiency`}
  >
    <Tooltip content={`${yearsOfExperience} ${yearsOfExperience === 1 ? 'year' : 'years'} of experience`}>
      <div className="flex items-center gap-3 p-3 bg-background-paper/50 backdrop-blur-sm rounded-lg border border-transparent hover:border-primary-main transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-main/5">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-main/5 flex items-center justify-center text-xl">
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <h4 className="text-sm font-medium text-text-primary truncate group-hover:text-primary-main transition-colors">
                {name}
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-background-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary-main to-primary-light"
                    role="progressbar"
                    aria-valuenow={proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap bg-primary-main/10 text-primary-main">
                  {type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  </motion.div>
);

const CategorySection: FC<{ title: string; skills: SkillProps[]; icon: string }> = ({ title, skills, icon }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-4"
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-lg font-semibold bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-transparent">
        {title}
        <span className="ml-2 text-sm font-normal text-text-secondary">
          ({skills.length} {skills.length === 1 ? 'skill' : 'skills'})
        </span>
      </h3>
    </div>
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      layout
    >
      <AnimatePresence mode="popLayout">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </AnimatePresence>
    </motion.div>
  </motion.div>
);

const Skills: FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const [sortBy, setSortBy] = useState<SortType>('proficiency');

  const skillsData = [
    // AI & ML
    { category: "AI & ML", name: "RAG Systems", proficiency: 95, icon: "📚", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "AI & ML", name: "LangChain", proficiency: 90, icon: "🔗", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "AI & ML", name: "LangGraph", proficiency: 85, icon: "📊", yearsOfExperience: 1, type: 'Expert' as const },
    { category: "AI & ML", name: "Multi-Agent Systems", proficiency: 90, icon: "🤖", yearsOfExperience: 1, type: 'Expert' as const },
    { category: "AI & ML", name: "Prompt Engineering", proficiency: 90, icon: "✨", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "AI & ML", name: "LLM Fine-tuning", proficiency: 85, icon: "🎯", yearsOfExperience: 1, type: 'Expert' as const },
    { category: "AI & ML", name: "Knowledge Graphs", proficiency: 85, icon: "🕸️", yearsOfExperience: 2, type: 'Expert' as const },
    
    // Languages
    { category: "Languages", name: "Python", proficiency: 95, icon: "🐍", yearsOfExperience: 4, type: 'Expert' as const },
    { category: "Languages", name: "JavaScript", proficiency: 90, icon: "🌐", yearsOfExperience: 3, type: 'Expert' as const },
    { category: "Languages", name: "TypeScript", proficiency: 85, icon: "📘", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "Languages", name: "Java", proficiency: 85, icon: "☕️", yearsOfExperience: 3, type: 'Expert' as const },
    
    // DevOps & Cloud
    { category: "DevOps & Cloud", name: "Azure DevOps", proficiency: 90, icon: "☁️", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "DevOps & Cloud", name: "GitHub Actions", proficiency: 90, icon: "⚡️", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "DevOps & Cloud", name: "Docker", proficiency: 85, icon: "🐳", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "DevOps & Cloud", name: "CI/CD", proficiency: 90, icon: "🔄", yearsOfExperience: 3, type: 'Expert' as const },
    
    // Testing & QA
    { category: "Testing & QA", name: "Test Automation", proficiency: 95, icon: "🔧", yearsOfExperience: 5, type: 'Expert' as const },
    { category: "Testing & QA", name: "Playwright", proficiency: 90, icon: "🎭", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "Testing & QA", name: "Cypress", proficiency: 85, icon: "🎯", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "Testing & QA", name: "API Testing", proficiency: 90, icon: "🔌", yearsOfExperience: 4, type: 'Expert' as const },
    
    // Databases
    { category: "Databases", name: "Neo4j", proficiency: 85, icon: "🕸️", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "Databases", name: "MongoDB", proficiency: 85, icon: "🍃", yearsOfExperience: 2, type: 'Expert' as const },
    { category: "Databases", name: "SQL", proficiency: 90, icon: "📊", yearsOfExperience: 3, type: 'Expert' as const },
    
    // Languages (Human)
    { category: "Natural Languages", name: "English", proficiency: 100, icon: "🇬🇧", yearsOfExperience: 0, type: 'Expert' as const },
    { category: "Natural Languages", name: "Gujarati", proficiency: 100, icon: "🇮🇳", yearsOfExperience: 0, type: 'Expert' as const },
    { category: "Natural Languages", name: "Hindi", proficiency: 100, icon: "🇮🇳", yearsOfExperience: 0, type: 'Expert' as const },
    { category: "Natural Languages", name: "French", proficiency: 60, icon: "🇫🇷", yearsOfExperience: 0, type: 'Beginner' as const }
  ];

  const categoryIcons = {
    "AI & ML": "🤖",
    "Languages": "💻",
    "DevOps & Cloud": "☁️",
    "Databases": "🗄",
    "Testing & QA": "🧪",
    "Natural Languages": "🌍"
  };

  const groupedAndFilteredSkills = useMemo(() => {
    const grouped = skillsData
      .filter(skill => filter === 'All' || skill.type === filter)
      .sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'proficiency':
            return b.proficiency - a.proficiency;
          case 'experience':
            return (b.yearsOfExperience || 0) - (a.yearsOfExperience || 0);
          default:
            return 0;
        }
      })
      .reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      }, {} as Record<string, SkillProps[]>);

    return Object.entries(grouped)
      .map(([category, skills]) => ({
        category,
        skills,
        icon: categoryIcons[category as keyof typeof categoryIcons] || "💡"
      }))
      .filter(group => group.skills.length > 0);
  }, [filter, sortBy]);

  return (
    <AnimatedSection className="py-12 container mx-auto px-4 sm:px-6 lg:px-8" delay={0.4}>
      <SectionHeader 
        title="Skills & Expertise" 
        subtitle="A comprehensive overview of my technical proficiencies"
      />
      
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-text-secondary">Filter by level:</span>
            {(['All', 'Beginner', 'Intermediate', 'Expert'] as FilterType[]).map((type) => (
              <Button
                key={type}
                variant={filter === type ? 'filled' : 'ghost'}
                size="sm"
                onClick={() => setFilter(type)}
                className="rounded-full"
              >
                {type}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
            <span className="text-sm text-text-secondary">Sort by:</span>
            {[
              { value: 'name', label: 'Name' },
              { value: 'proficiency', label: 'Proficiency' },
              { value: 'experience', label: 'Experience' }
            ].map(({ value, label }) => (
              <Button
                key={value}
                variant={sortBy === value ? 'filled' : 'ghost'}
                size="sm"
                onClick={() => setSortBy(value as SortType)}
                className="rounded-full"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="space-y-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {groupedAndFilteredSkills.map(({ category, skills, icon }) => (
              <CategorySection
                key={category}
                title={category}
                skills={skills}
                icon={icon}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Skills; 