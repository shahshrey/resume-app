'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { theme } from '@/lib/theme';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-primary-main">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-background-paper text-text-primary rounded-full text-sm hover:bg-primary-main/20 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        "LangChain",
        "LangGraph",
        "litellm",
        "RAG Systems",
        "Knowledge Graphs",
        "Prompt Engineering",
        "LLM Fine-tuning",
        "Model Quantization",
        "ComfyUI",
        "Langserve",
        "Langsmith",
        "W&B",
        "HF Metaflow"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Harness",
        "AWS",
        "Azure DevOps"
      ]
    },
    {
      title: "Databases",
      skills: [
        "SQL Server",
        "MySQL",
        "MongoDB",
        "Neo4j"
      ]
    },
    {
      title: "Development Tools",
      skills: [
        "IntelliJ",
        "PyCharm",
        "VSCode",
        "Git",
        "Jira",
        "Confluence"
      ]
    },
    {
      title: "Testing & QA",
      skills: [
        "Selenium",
        "Playwright",
        "Cypress",
        "Mocha",
        "Chai",
        "JMeter",
        "Postman"
      ]
    }
  ];

  return (
    <AnimatedSection className="py-8" delay={0.4}>
      <SectionHeader 
        title="Skills" 
        subtitle="Technical expertise and professional capabilities"
      />
      
      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills; 