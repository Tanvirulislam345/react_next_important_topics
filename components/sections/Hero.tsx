"use client";

import { portfolioConfig } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: LucideIcons.Github,
  Linkedin: LucideIcons.Linkedin,
  Twitter: LucideIcons.Twitter,
  Mail,
};

export function Hero() {
  return (
    <Section id="home" className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-wider"
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {portfolioConfig.name}
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground"
              >
                {portfolioConfig.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg text-muted-foreground max-w-xl"
              >
                {portfolioConfig.description}
              </motion.p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{portfolioConfig.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {portfolioConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-accent hover:border-foreground/20 transition-all"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-linear-to-tr from-foreground/5 to-foreground/10 rounded-2xl blur-3xl animate-pulse" />

              {/* Profile placeholder */}
              <div className="relative aspect-square rounded-2xl border-2 border-border overflow-hidden bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-accent border-4 border-border" />
                    <p className="text-sm text-muted-foreground">
                      Your profile image
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: [12, 15, 12] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-border rounded-2xl -z-10"
              />
              <motion.div
                animate={{ rotate: [-6, -9, -6] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-border rounded-2xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
