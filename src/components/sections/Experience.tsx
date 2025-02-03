'use client';
import React, { FC } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineItem } from '../ui/TimelineItem';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';
import { Tooltip } from '../ui/Tooltip';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  environment: string;
  responsibilities: string[];
  isActive?: boolean;
  logoUrl?: string;
}

const TechBadge: FC<{ tech: string }> = ({ tech }) => (
  <Tooltip content={`Experience with ${tech}`}>
    <span className="px-3 py-1 text-sm rounded-full bg-background-paper/50 backdrop-blur-sm text-primary-light 
      border border-primary-main/20 hover:border-primary-main/50 transition-all duration-300 cursor-default
      hover:bg-background-paper/80 hover:scale-105">
      {tech}
    </span>
  </Tooltip>
);

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  environment,
  responsibilities,
  isActive = false,
  logoUrl
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 mb-12 last:mb-0"
    >
      {/* Timeline Marker with Pulse Effect */}
      <div className="absolute left-0 w-0.5 h-full bg-gradient-to-b from-primary-main/20 to-transparent" />
      <div className="absolute -left-1.5 flex items-center justify-center">
        <div className={cn(
          "w-4 h-4 rounded-full shadow-lg transition-all duration-300",
          isActive ? "bg-primary-main shadow-primary-main/30" : "bg-background-paper border-2 border-primary-main/50"
        )} />
        {isActive && (
          <div className="absolute w-8 h-8 rounded-full animate-ping bg-primary-main/20" />
        )}
      </div>

      {/* Content Card */}
      <div 
        className={cn(
          "relative p-6 rounded-lg transition-all duration-300",
          "bg-background-paper/50 backdrop-blur-sm",
          "border border-transparent hover:border-primary-main",
          "group cursor-pointer",
          isHovered && "shadow-lg shadow-primary-main/5 scale-[1.02]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {logoUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-12 h-12 rounded-lg overflow-hidden border border-primary-main/10 bg-background-paper/50"
            >
              <img src={logoUrl} alt={`${company} logo`} className="w-full h-full object-contain p-2" />
            </motion.div>
          )}
          <div className="flex-1 space-y-1">
            <motion.h3 
              className="text-xl font-semibold text-primary-dark group-hover:text-primary-main transition-colors"
              whileHover={{ x: 4 }}
            >
              {title}
            </motion.h3>
            <div className="flex items-center gap-2 text-sm text-secondary-light">
              <span className="font-medium text-primary-light">{company}</span>
              <span>•</span>
              <span>{period}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack with Categories */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {environment.split(', ').map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {/* Responsibilities with Enhanced Animation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : '0',
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-6 space-y-3">
            {responsibilities.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-secondary-DEFAULT group/item"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-light/50 group-hover/item:bg-primary-main/70 transition-colors" />
                <span className="flex-1 group-hover/item:text-primary-dark transition-colors">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Enhanced Expand/Collapse Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "mt-6 w-full justify-center gap-2 group/button",
              isExpanded && "bg-primary-main/5"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="opacity-50 group-hover/button:opacity-100"
            >
              ↓
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience: FC = () => {
  const experiences = [
    {
      title: "Software Engineer | AI",
      company: "Vivun",
      period: "June 2023 – Present",
      environment: "LangChain, LangGraph, RAG Systems, Multi-Agent Systems, Neo4j, LLMs, Prompt Engineering, FastAPI, LangServe, Gradio, Streamlit, MLflow, Hugging Face",
      responsibilities: [
        "Led development of multi-agent applications using LangChain and LangGraph frameworks",
        "Built innovative systems using advanced AI frameworks and tools",
        "Implemented various RAG architectures including Hybrid RAG, GraphRAG and Agentic RAG",
        "Developed CI/CD pipelines for testing and deployment of AI agents",
        "Integrated knowledge graphs using Neo4j for improved data processing",
        "Fine-tuned and quantized LLMs for enhanced local performance",
        "Led AI training sessions and created POCs for latest LLM advancements",
        "Developed local AI tools fine-tuned for specific use cases",
        "Optimized inference workflows for low-latency and high-throughput performance",
        "Engineered prompts and deployed through FastAPI and LangServe",
        "Created user-friendly interfaces using Gradio and Streamlit"
      ],
      logoUrl: "/images/companies/vivun.jpg",
      isActive: true
    },
    {
      title: "Senior Software Development Engineer In Test",
      company: "Priceline",
      period: "May 2021 – June 2023",
      environment: "WebDriverIO, Appium, Mocha, Chai, Saucelabs, GitHub Actions, Spring Boot, Zephyr Scale, Splunk, JavaScript, SQL, GraphQL",
      responsibilities: [
        "Led development of an end-to-end test automation framework using wdio, Appium, Mocha and Saucelabs for web, mobile and API testing",
        "Implemented continuous integration and delivery pipelines using GitHub Actions, enabling multiple releases per day",
        "Automated the entire release process including PR creation, merging, and confluence documentation",
        "Developed backend for core products using Spring Boot, supporting high transaction volumes",
        "Created algorithms to auto-generate test cases from historical test-data, reducing manual effort",
        "Integrated test automation framework with Zephyr Scale for end-to-end traceability",
        "Implemented Splunk dashboards and alerts for real-time application performance monitoring",
        "Provided technical leadership and mentoring on test automation best practices",
        "Played a pivotal role in SDET recruitment and interviewing process"
      ],
      logoUrl: "/images/companies/priceline.png"
    },
    {
      title: "Automation Engineer",
      company: "PowerHub",
      period: "September 2020 – May 2021",
      environment: "Cypress, Mocha, Chai, JavaScript, MongoDB, Azure DevOps, Eslint, SonarQube, Postman, JMeter",
      responsibilities: [
        "Conducted thorough research on technical solutions and testing frameworks",
        "Utilized inverse pyramid of automation for comprehensive feature test coverage",
        "Developed test automation framework using Cypress, Mocha, Chai, and JavaScript",
        "Implemented Eslint and SonarQube tools for consistent code quality",
        "Managed test data creation with various JavaScript libraries",
        "Performed API testing with Postman and JMeter for performance testing",
        "Created MongoDB queries in Roto3T for database validation",
        "Scheduled test runs and builds using Azure pipelines",
        "Leveraged Azure DevOps for agile ALM processes"
      ],
      logoUrl: "/images/companies/powerhub.png"
    },
    {
      title: "Software Engineer In Test",
      company: "Parsedata",
      period: "April 2020 – September 2020",
      environment: "Python, Selenium, Pytest, Azure DevOps, Active Directory, POM, Agile",
      responsibilities: [
        "Gained hands-on experience with Microsoft Azure DevOps portal and Active Directory",
        "Developed a robust testing framework using Python, Selenium, Pytest, and POM",
        "Acted as a BA to communicate with clients and understand requirements",
        "Created user stories, acceptance criteria, API specification documents, and guides",
        "Reduced bug reports and improved testing efficiency through automation"
      ],
      logoUrl: "/images/companies/parsedata.png"
    },
    {
      title: "Quality Assurance Automation Engineer",
      company: "NXM Labs INC",
      period: "Feb 2018 – Apr 2020",
      environment: "Agile, TDD, Selenium WebDriver, Python, Java TestNG, JIRA, IoT, POM Design Pattern, GitLab, SoapUI, JMeter, ADB, Appium, Gherkin",
      responsibilities: [
        "Led testing of Blockchain, Mobile & Web apps, SQL databases, and IoT devices",
        "Developed data-driven framework for API, Web, and Mobile app testing",
        "Engineered API testing framework using Python and Pytest for IoT devices",
        "Conducted load testing using Apache JMeter and Artillery",
        "Performed code quality analysis using Sonarlint and SonarQube"
      ],
      logoUrl: "/images/companies/nxm.png"
    },
    {
      title: "Software Tester",
      company: "Webyoutechnologies",
      period: "May 2014 – Apr 2016",
      environment: "Selenium, TestNG, Java, Hybrid Framework, POM",
      responsibilities: [
        "Developed Selenium test cases using Hybrid framework with POM and TestNG",
        "Validated test scripts for accuracy and scenario coverage",
        "Developed test scenarios, test cases and test data",
        "Performed positive and negative testing"
      ],
      logoUrl: "/images/companies/webyou.png"
    }
  ];

  return (
    <AnimatedSection className="py-8" delay={0.2}>
      <SectionHeader 
        title="Experience" 
        subtitle="My professional journey and contributions"
      />
      
      <div className="mt-12">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            {...exp} 
            isActive={index === 0}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience; 