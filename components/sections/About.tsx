"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data/portfolio";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful interfaces with attention to detail",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and optimized applications",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and communicating clearly",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <Section id="about" className="bg-linear-to-tl from-orange-950/70 via-slate-900/90 to-rose-950/70 dark:from-orange-950/90 dark:via-slate-950 dark:to-rose-950/90">
      <SectionHeader
        title="About Me"
        description="Passionate about building exceptional digital experiences"
      />

      <div className="space-y-16">
        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-white">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4 text-lg text-white">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
