import { tool } from 'ai';
import { z } from 'zod';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  skills: {
    programming: string[];
    devOps: string[];
    databases: string[];
    ides: string[];
    genAI: string[];
  };
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    environment: string;
    highlights: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
  }>;
}

const RESUME_DATA: ResumeData = {
  name: "SHREY SHAH",
  title: "GENERATIVE AI ENGINEER",
  contact: {
    email: "sshreyv@gmail.com",
    phone: "",
    location: "Halifax, Canada"
  },
  summary: "Senior AI Software Engineer with over 9 years of software development and 2+ years specializing in AI agent development. Experienced in architecting and implementing scalable AI solutions, including multi-agent applications, RAG, and knowledge graph systems. Proficient in leading AI frameworks such as LangChain, LangGraph and MCPs.",
  skills: {
    programming: ["Java", "Python", "JavaScript", "TypeScript"],
    devOps: ["Docker", "GitHub Actions", "Harness", "Kubernetes"],
    databases: ["SQL Server", "MySQL", "MongoDB", "Chroma"],
    ides: ["IntelliJ", "VScode", "Cursor"],
    genAI: ["Langchain", "Langgraph", "Langsmith", "W&B", "HuggingFace", "ComfyUI"]
  },
  experience: [
    {
      title: "Senior AI Software Engineer",
      company: "Vivun",
      duration: "May 2023 – Present",
      environment: "Langgraph, Python, fastapi, nextjs, LLMS, RAG, Cursor",
      highlights: [
        "Became an AI advocate within the team and organization. Led training sessions for Developers on integrating and using AI.",
        "Led the development of multi-agent applications using LangGraph for efficient LLM and RAG-based systems.",
        "Developed POCs exploring RAG solutions, including Hybrid RAG, GraphRag and Agentic RAG.",
        "Used MCP tools to create a ticket to PR workflows in Cursor, to release features really really fast.",
        "Led AI assisted coding efforts org wide, Coached the entire dev team on efficient workflows."
      ]
    },
    {
      title: "Cursor Ambassador",
      company: "Anysphere",
      duration: "Mar 2025 - Present",
      environment: "",
      highlights: [
        "Helping bridge the gap between the AI community and Cursor team",
        "Hosted webinars & talks on Maven resulting in thousands of individuals learning more about Cursor Community",
        "2000+ hrs of cursor AI assisted coding experience resulting in building full stack apps within an hour."
      ]
    },
    {
      title: "Lead SDET",
      company: "Priceline",
      duration: "June 2021 – May 2023",
      environment: "Agile, Mocha, Chai, Postman, WebDriverIO, Axios, GRPC, Jira, Node.js, SQL, JavaScript, Splunk, GraphQL",
      highlights: [
        "Led development of an end-to-end test automation framework using wdio, Appium, Mocha and Saucelabs for web, mobile and API testing.",
        "Implemented GitHub actions for automating the entire release process, including PR creation and merging.",
        "Developed backend for one of core products using Spring Boot, supporting high volume of daily transactions."
      ]
    }
  ],
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

export const getMarkdownResume = () => {
  try {
    const resumePath = join(process.cwd(), 'SHREY SHAH resume AI.docx.md');
    return readFileSync(resumePath, 'utf8');
  } catch (error) {
    return null;
  }
};

export const getResume = tool({
  description: 'Get Shrey Shah resume information. Use "markdown" for full resume display, or specific sections like "summary", "experience", "skills", "education" for structured components. For experience, you can optionally filter by company name.',
  inputSchema: z.object({
    section: z.enum(['summary', 'experience', 'skills', 'education', 'full', 'markdown']).optional().default('summary'),
    company: z.string().optional().describe('Optional company name to filter experience (e.g., "Vivun", "Priceline", "Anysphere")'),
  }),
  execute: async ({ section, company }) => {
    if (section === 'markdown') {
      const markdownContent = getMarkdownResume();
      if (markdownContent) {
        return { type: 'markdown', content: markdownContent };
      }
      return { type: 'error', message: 'Could not load markdown resume' };
    }
    
    if (section === 'full') {
      return RESUME_DATA;
    }
    
    if (section === 'summary') {
      return {
        name: RESUME_DATA.name,
        title: RESUME_DATA.title,
        contact: RESUME_DATA.contact,
        summary: RESUME_DATA.summary,
      };
    }
    
    if (section === 'experience') {
      let experienceData = RESUME_DATA.experience;
      
      if (company) {
        experienceData = RESUME_DATA.experience.filter(exp => 
          exp.company.toLowerCase().includes(company.toLowerCase())
        );
        
        if (experienceData.length === 0) {
          return {
            type: 'error',
            message: `No experience found for company "${company}". Available companies: ${RESUME_DATA.experience.map(exp => exp.company).join(', ')}`
          };
        }
      }
      
      return {
        name: RESUME_DATA.name,
        experience: experienceData,
      };
    }
    
    if (section === 'skills') {
      return {
        name: RESUME_DATA.name,
        skills: RESUME_DATA.skills,
      };
    }
    
    if (section === 'education') {
      return {
        name: RESUME_DATA.name,
        education: RESUME_DATA.education,
      };
    }
    
    return RESUME_DATA;
  },
});
