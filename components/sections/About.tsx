"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <Section id="about" className="bg-black">
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
              <Card className="h-full bg-gray-900 border-gray-800 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
