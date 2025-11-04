"use client";

import { portfolioConfig } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Activity, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-md"
          : " bg-gray-950"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            {portfolioConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {portfolioConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Activity mode={isMobileMenuOpen ? "visible" : "hidden"}>
          <div className="md:hidden py-4 border-t border-white/10 transition-all duration-500">
            <ul className="flex flex-col gap-2">
              {portfolioConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Activity>
      </nav>
    </header>
  );
}
