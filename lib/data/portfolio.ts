import { PortfolioConfig, Project, Review, Skill } from "@/types/portfolio";
import ProfileImage from "@/assets/Profile.jpeg";

export const portfolioConfig: PortfolioConfig = {
  name: "Portfolio",
  title: "Front-End Tead & Software Engineer",
  description:
    "I build exceptional digital experiences with modern technologies",
  avatar: ProfileImage,
  email: "demo@gmail.com",
  location: "Your Location",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "Linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "Twitter",
    },
  ],
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Design" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    image: "/projects/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    image: "/projects/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Generator",
    description:
      "SaaS platform that helps developers create beautiful portfolio websites using customizable templates.",
    image: "/projects/project3.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Vercel"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "John Smith",
    role: "Senior Developer",
    company: "Tech Corp",
    content:
      "Outstanding work! The project was delivered on time with exceptional quality. Great communication throughout.",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Startup Inc",
    content:
      "Very professional and skilled developer. Brought creative solutions to complex problems. Highly recommended!",
    avatar: "/avatars/avatar2.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "CTO",
    company: "Innovation Labs",
    content:
      "Excellent technical skills and attention to detail. Made our vision come to life with clean, maintainable code.",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
  },
];
