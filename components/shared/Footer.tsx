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
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{portfolioConfig.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {portfolioConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {portfolioConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
            <div className="text-sm text-muted-foreground">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="hover:text-foreground transition-colors"
              >
                {portfolioConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear || "2025"} {portfolioConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
