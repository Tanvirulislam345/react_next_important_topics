"use client";

import { portfolioConfig } from "@/lib/data/portfolio";
import { Mail } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: LucideIcons.Github,
  Linkedin: LucideIcons.Linkedin,
  Twitter: LucideIcons.Twitter,
  Mail,
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-slate-900">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{portfolioConfig.name}</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              {portfolioConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {portfolioConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex gap-4">
              {portfolioConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
            <div className="text-sm text-gray-400">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="hover:text-white transition-colors"
              >
                {portfolioConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-center text-gray-400">
            © {currentYear || "2025"} {portfolioConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
