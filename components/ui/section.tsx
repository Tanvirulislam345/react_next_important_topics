import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={cn(!fullWidth && "container-custom", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
