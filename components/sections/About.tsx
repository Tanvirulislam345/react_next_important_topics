"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  return (
    <Section id="about" className="bg-black">
      <SectionHeader
        title="About Me"
        description="Passionate about building exceptional digital experiences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-16 mt-12">
        {/* about description */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              I'm a passionate software engineer with a strong focus on building
              scalable, maintainable, and user-centric applications. With years
              of experience in full-stack development, I specialize in modern
              web technologies and cloud-native solutions.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              My expertise spans across frontend frameworks like React and
              Next.js, backend technologies including Node.js, and cloud
              platforms such as AWS. I'm dedicated to writing clean, efficient
              code and following best practices in software architecture.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              Beyond coding, I'm passionate about mentoring junior developers,
              contributing to open-source projects, and staying updated with the
              latest industry trends and technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Core Skills</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Git",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
          <Accordion
            type="single"
            defaultValue={experienceData[0]?.id}
            collapsible
            className="space-y-8"
          >
            {experienceData.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="border-none space-y-4"
              >
                <AccordionTrigger
                  hideChevron
                  className="w-full text-left border-l-2 border-white/20 pl-6 hover:border-white/30 transition-colors py-0 hover:no-underline [&[data-state=open]>div>svg]:rotate-180"
                >
                  <div className="flex items-start justify-between w-full pr-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white">
                        {exp.companyName}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {exp.duration}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {exp.location}
                      </p>
                    </div>
                    <ChevronDown className="w-6 h-6 text-white/60 transition-transform duration-300 shrink-0 mt-1" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="ml-6 pt-2 pb-0">
                  <div className="space-y-6">
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
                          <p className="text-gray-300 mt-3">
                            {role.description}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            {role.skill}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
