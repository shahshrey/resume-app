# Content Schema Document

## Resume MDX Schema
```typescript
interface ResumeSchema {
  hero: {
    name: string;
    title: string;
    summary: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
  
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
  }>;
  
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
    description?: string;
  }>;
  
  skills: {
    technical: string[];
    soft: string[];
    tools: string[];
  };
  
  contact: {
    email: string;
    location: string;
    available: boolean;
  };
}
``` 