"use client";

import { Section } from "@/components/ui/section";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export function TechSlider() {
  // Duplicate the skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <Section className="py-12 overflow-hidden bg-secondary/20">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center">
          Technologies I Work With
        </h3>

        {/* Infinite Scrolling Animation */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-secondary/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-secondary/20 to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse direction */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-secondary/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-secondary/20 to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`reverse-${skill.name}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
