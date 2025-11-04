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
            <Card className="h-full flex gap-4 flex-col bg-gray-900 py-0 border-gray-800 overflow-hidden hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-500 ease-out">
              {/* Project Image */}
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <div className="text-center p-4">
                  <p className="text-sm text-gray-400">Project Image</p>
                  <p className="text-xs text-gray-500 mt-2">{project.image}</p>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/10 backdrop-blur-sm text-white border border-white/20">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="h-[110px] flex flex-col justify-between">
                <p className="text-gray-400 text-sm leading-relaxed ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-300 bg-gray-800/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-4  py-4!  border-t border-gray-800">
                {project.demoUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="flex-1 bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-600 hover:text-white transition-all duration-300 font-medium "
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
                    className="flex-1 bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-600 hover:text-white transition-all duration-300 font-medium "
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
