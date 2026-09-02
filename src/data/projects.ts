import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gearup",
    title: "GearUp",
    shortDescription:
      "A modern rental platform for sports and outdoor gear with secure booking and payment functionality.",
    description:
      "GearUp is a full-stack rental platform designed to make sports and outdoor equipment rental easier. The application includes gear management, rental workflows, authentication, availability validation, and payment integration.",
    category: "Full Stack",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    githubUrl: "https://github.com/harunhira69/gearup-backend",
    highlights: [
      "Built REST APIs for gear and rental management.",
      "Implemented authentication and authorization.",
      "Added rental date and availability validation.",
      "Integrated Stripe payment processing.",
      "Designed a scalable backend architecture with Prisma and PostgreSQL.",
    ],
  },

  {
    slug: "submission-system",
    title: "Project Submission System",
    shortDescription:
      "A platform for students to access courses, submit projects, and track academic performance.",
    description:
      "A web-based project submission platform where students can access course information, submit projects, view performance scores, and receive project marks. The system is designed around a structured dashboard experience.",
    category: "Web Application",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "Authentication",
    ],
    githubUrl: "https://github.com/harunhira69/submission_system",
    highlights: [
      "Built dashboard-based student workflows.",
      "Implemented project submission functionality.",
      "Integrated REST APIs with the frontend.",
      "Used Prisma ORM with PostgreSQL.",
      "Separated application and dashboard layouts for maintainability.",
    ],
  },

  {
    slug: "digital-life-lessons",
    title: "Digital Life Lessons",
    shortDescription:
      "A modern learning platform featuring premium lessons and online payment integration.",
    description:
      "Digital Life Lessons is a learning-focused web application built with Next.js. The platform provides users with structured lessons and premium content supported by authentication and payment functionality.",
    category: "Learning Platform",
    featured: true,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NextAuth.js",
      "Stripe",
      "Tailwind CSS",
    ],
    highlights: [
      "Built responsive learning interfaces.",
      "Implemented authentication.",
      "Added premium content access.",
      "Integrated Stripe payments.",
      "Created reusable UI components.",
    ],
  },

  {
    slug: "pawmart",
    title: "PawMart",
    shortDescription:
      "A pet adoption platform with a clean interface for discovering and exploring available pets.",
    description:
      "PawMart is a pet adoption-focused web application with a responsive user interface and organized pet information. The project focuses on creating a simple and approachable browsing experience.",
    category: "Frontend",
    featured: false,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    highlights: [
      "Designed a responsive pet browsing experience.",
      "Created reusable React components.",
      "Integrated application data with MongoDB.",
      "Focused on clean and accessible UI patterns.",
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);