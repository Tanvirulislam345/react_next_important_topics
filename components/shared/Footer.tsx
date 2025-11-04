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
    <footer className="border-t border-gray-800  bg-linear-to-b from-gray-950 via-gray-900 to-gray-700">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {portfolioConfig.name}
            </h3>
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
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
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
            <div className="flex gap-3">
              {portfolioConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-gray-700 text-gray-400 bg-gray-800/50 hover:bg-linear-to-r hover:from-orange-500 hover:to-rose-500 hover:border-transparent hover:text-white transition-all duration-300"
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
                className="hover:text-orange-400 transition-colors"
              >
                {portfolioConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-sm text-center text-gray-200">
            © {currentYear || "2025"} {portfolioConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
