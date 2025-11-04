"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ChevronDown } from "lucide-react";

interface Role {
  title: string;
  duration: string;
  description: string;
  skill: string;
}

interface Experience {
  id: string;
  companyName: string;
  location: string;
  duration: string;
  current?: boolean;
  roles: Role[];
}

const experienceData: Experience[] = [
  {
    id: "1",
    companyName: "Mediusware",
    location: "Dhaka, Bangladesh · On-site",
    duration: "Full-time · 3 yrs 1 mo",
    current: true,
    roles: [
      {
        title: "Software Engineer and Team Lead",
        duration: "May 2025 - Present · 7 mos",
        description:
          "Currently leading multiple projects from concept to deployment, with a strong focus on software architecture, scalable system design.",
        skill: "TypeScript, Team Management and +5 skills",
      },
      {
        title: "Senior Software Engineer",
        duration: "Jan 2023 - Apr 2025 · 2 yrs 4 mos",
        description:
          "Developed enterprise-level applications and mentored junior developers.",
        skill: "React, Node.js, AWS and +3 skills",
      },
    ],
  },
  {
    id: "2",
    companyName: "Wizard Software Ltd.",
    location: "Dhaka, Bangladesh · On-site",
    duration: "Full-time · 3 yrs 1 mo",
    current: true,
    roles: [
      {
        title: "Software Engineer and Team Lead",
        duration: "May 2025 - Present · 7 mos",
        description:
          "Currently leading multiple projects from concept to deployment, with a strong focus on software architecture, scalable system design.",
        skill: "TypeScript, Team Management and +5 skills",
      },
      {
        title: "Senior Software Engineer",
        duration: "Jan 2023 - Apr 2025 · 2 yrs 4 mos",
        description:
          "Developed enterprise-level applications and mentored junior developers.",
        skill: "React, Node.js, AWS and +3 skills",
      },
    ],
  },
];

export function About() {
  const [openAccordions, setOpenAccordions] = useState<string[]>(
    experienceData.map((exp) => exp.id)
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Section id="about" className="bg-black">
      <SectionHeader
        title="About Me"
        description="Passionate about building exceptional digital experiences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
        {/* about description */}
        <div></div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
          {experienceData.map((exp) => (
            <div key={exp.id} className="space-y-4">
              {/* Company Header - Accordion Trigger */}
              <button
                onClick={() => toggleAccordion(exp.id)}
                className="w-full text-left border-l-2 border-white/20 pl-6 hover:border-white/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white">
                      {exp.companyName}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                      openAccordions.includes(exp.id) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Roles (Stepper) - Accordion Content */}
              <div
                className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordions.includes(exp.id)
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-6 pt-2">
                  {exp.roles.map((role, index) => (
                    <div key={index} className="relative pl-6">
                      {/* Stepper Dot */}
                      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white border-2 border-black" />

                      {/* Role Content */}
                      <div className="pb-6">
                        <h5 className="text-xl font-semibold text-white">
                          {role.title}
                        </h5>
                        <p className="text-sm text-gray-400 mt-1">
                          {role.duration}
                        </p>
                        <p className="text-gray-300 mt-3">{role.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {role.skill}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
