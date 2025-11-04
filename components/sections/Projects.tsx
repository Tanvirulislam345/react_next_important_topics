"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <Section id="projects" className="bg-black">
      <SectionHeader
        title="Featured Projects"
        description="A showcase of my recent work and side projects"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="h-full flex flex-col bg-gray-900 py-0 pb-6 border-gray-800 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm text-gray-400">Project Image</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {project.image}
                    </p>
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 z-10 bg-linear-to-r from-orange-500 to-rose-500 text-white border-0">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-orange-500/30 text-gray-300 bg-orange-500/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 ">
                {project.demoUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="flex-1 bg-linear-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
