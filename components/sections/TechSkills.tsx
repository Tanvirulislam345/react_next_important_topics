"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data/portfolio";

import { motion } from "framer-motion";

export function TechSkills() {
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill.name);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return (
    <Section className="py-12 bg-linear-to-b from-gray-950 via-gray-800 to-gray-700">
      <SectionHeader
        title="Skills & Technologies"
        description="Passionate about building exceptional digital experiences"
      />
      {/* Skills Section */}
      <div className="space-y-8">
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
                <Card className="h-full bg-gray-900 border-gray-800 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4 text-lg text-white">
                      {category}
                    </h4>
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
    </Section>
  );
}
