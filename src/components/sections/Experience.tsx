'use client';
import React, { FC } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineItem } from '../ui/TimelineItem';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  environment: string;
  responsibilities: string[];
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  environment,
  responsibilities
}) => (
  <div className="border-l-4 border-primary-light pl-4 mb-8 space-y-2">
    <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
    <div className="flex flex-wrap gap-2 items-center text-secondary-DEFAULT">
      <span className="font-medium">{company}</span>
      <span className="text-secondary-light">•</span>
      <span>{period}</span>
    </div>
    <div className="text-sm text-secondary-light">
      <span className="font-medium">Environment:</span> {environment}
    </div>
    <ul className="list-disc list-inside space-y-1 text-secondary-DEFAULT">
      {responsibilities.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Experience: FC = () => {
  const experiences = [
    {
      title: "AI Software Engineer",
      company: "Vivun",
      period: "May 2023 – Present",
      environment: "Agile, Jira, Playwright, Axios, Mocha, Chai, Postman, GRPC, Node.js, TypeScript, Splunk, GraphQL",
      responsibilities: [
        "Led development of multi-agent applications using LangChain and LangGraph frameworks",
        "Collaborated on RAG solutions including Hybrid RAG, GraphRAG and Agentic RAG",
        "Developed CI/CD pipelines for testing and deployment of agents",
        "Integrated knowledge graphs using Neo4j for improved data processing",
        "Fine-tuned and quantized LLMs for enhanced local performance",
        "Led AI training sessions and created POCs for latest LLM advancements"
      ]
    },
    {
      title: "Lead SDET",
      company: "Priceline",
      period: "June 2021 – May 2023",
      environment: "Agile, Mocha, Chai, Postman, WebDriverIO, Axios, GRPC, Jira, Node.js, SQL, JavaScript, Splunk, GraphQL",
      responsibilities: [
        "Led end-to-end test automation framework development using wdio and Appium",
        "Implemented GitHub actions for automating release processes",
        "Developed backend for core products using Spring Boot",
        "Created algorithms for auto-generating tests from historical data",
        "Integrated test automation with Zephyr Scale for traceability",
        "Implemented Splunk dashboards for real-time monitoring"
      ]
    },
    {
      title: "Automation Developer",
      company: "Powerhub Inc.",
      period: "Sept 2020 – June 2021",
      environment: "Agile, Mocha, Chai, Postman, Puppeteer, TFS, Azure Dev-ops, Node.js, JIRA, MongoDB, JavaScript",
      responsibilities: [
        "Developed test automation framework using Cypress, Mocha, and Chai",
        "Implemented Eslint and SonarQube for code quality maintenance",
        "Created MongoDB queries for database validation",
        "Leveraged Azure DevOps for agile ALM processes"
      ]
    }
  ];

  return (
    <AnimatedSection className="py-8" delay={0.2}>
      <SectionHeader 
        title="Experience" 
        subtitle="My professional journey and contributions"
      />
      
      <div className="mt-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience; 