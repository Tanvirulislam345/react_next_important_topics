"use client";

import { portfolioConfig } from "@/lib/data/portfolio";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: LucideIcons.Github,
  Linkedin: LucideIcons.Linkedin,
  Twitter: LucideIcons.Twitter,
  Mail,
};

export function Hero() {
  return (
    <Section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center bg-linear-to-b from-gray-950 via-gray-800 to-gray-700"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base font-medium text-gray-400 uppercase tracking-wider"
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
              >
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                  {portfolioConfig.name}
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-white"
              >
                {portfolioConfig.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg text-gray-400 max-w-xl"
              >
                {portfolioConfig.description}
              </motion.p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{portfolioConfig.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-linear-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0 shadow-lg shadow-orange-500/25"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-orange-500/50 text-white bg-orange-500/10 hover:bg-linear-to-r hover:from-orange-500 hover:to-rose-500 hover:border-transparent backdrop-blur-sm transition-all duration-300"
              >
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
                    className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-orange-500/30 text-gray-300 bg-orange-500/5 hover:bg-linear-to-r hover:from-orange-500 hover:to-rose-500 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-full max-w-sm mx-auto lg:max-w-full">
              <div className="aspect-square rounded-2xl border-none overflow-hidden ">
                <Image
                  src={portfolioConfig.avatar}
                  alt={portfolioConfig.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
