export const profile = {
  name: "Tufan Butuner",
  title: "Software Engineer",
  location: "London",
  email: "tufanbutuner@gmail.com",
  summary:
    "SC cleared and AWS-certified full-stack software engineer with strong front-end focus and hands-on backend/cloud experience. I have held various developer roles, working with clients from both the public and private sectors.",
  links: {
    github: "https://github.com/tufanbutuner",
    linkedin: "https://linkedin.com/in/tufanbutuner",
  },
}

export interface Experience {
  role: string
  company: string
  period: string
  description?: string
  responsibilities?: string[]
  projects?: { name: string; description: string }[]
}

export const experience: Experience[] = [
  {
    role: "Software Engineer II",
    company: "JPMorganChase",
    period: "March 2026 - Present",
  },
  {
    role: "Software Developer",
    company: "Transform",
    period: "July 2022 - March 2026",
    description:
      "Full-stack engineer delivering public and private sector digital solutions, with emphasis on front-end architecture, performance, system design and maintainability. Worked across multidisciplinary teams through discovery, delivery and live support, contributing to long-running production systems.",
    responsibilities: [
      "Led front-end architecture and testing strategies for production applications (React, TypeScript, Vite, Jest, Cypress)",
      "Designed modular UI patterns, state management approaches and API integration layers",
      "Delivered performant and accessibility-compliant interfaces",
      "Contributed to backend services, cloud deployments, and CI/CD pipelines (.NET, Azure, AWS)",
      "Collaborated closely with designers, delivery managers, and policy stakeholders",
    ],
    projects: [
      {
        name: "Crown Prosecution Service",
        description:
          "Led development of a workflow platform improving casework operations; defined front-end architecture, testing strategy, and accessibility standards",
      },
      {
        name: "Department for Education",
        description:
          "Contributed to .NET microservices within the Learning Records Service, supporting service boundary design and Azure DevOps CI/CD",
      },
      {
        name: "Department for Energy Security & Net Zero",
        description:
          "Delivered interactive data visualisations for policy decision-making using D3.js",
      },
      {
        name: "Honda",
        description:
          "Shipped features across multiple campaign management applications, integrating Auth0 and deploying to Azure",
      },
      {
        name: "Transform (Internal)",
        description:
          "Built an AI-powered bid-support chatbot using GPT-4o and vector search",
      },
      {
        name: "Myco",
        description:
          "Implemented scalable front-end workflows for a high-throughput watch-to-earn video platform",
      },
    ],
  },
  {
    role: "Front-End Developer",
    company: "Becave",
    period: "Aug 2021 - Jul 2022",
    description:
      "Built a rental marketplace using React and TypeScript with atomic design principles. Mentored junior developers, ran code reviews, and drove improvements in UI consistency, accessibility, and performance. Worked in Scrum and Kanban teams.",
  },
]

export const education = {
  degree: "BSc Computer Science",
  classification: "First Class Honours",
  institution: "Goldsmiths, University of London",
  period: "2018 - 2021",
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: ["TypeScript/JavaScript", "React", "Node.js", "C#/.NET", "HTML/CSS", "D3.js"],
  },
  {
    name: "Cloud & Infra",
    skills: ["Azure", "AWS", "Docker", "Azure DevOps", "Vercel"],
  },
  {
    name: "Data & APIs",
    skills: ["REST", "GraphQL", "MS SQL"],
  },
  {
    name: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress"],
  },
  {
    name: "Other",
    skills: ["Accessibility (WCAG)", "Git", "Agile (Scrum/Kanban)"],
  },
]

export const certifications = [
  {
    name: "AWS Certified Developer Associate",
    date: "Oct 2024",
  },
]

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
] as const
