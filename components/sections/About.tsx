"use client";

import { Section, SectionHeader } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" className="bg-black">
      <SectionHeader
        title="About Me"
        description="Passionate about building exceptional digital experiences"
      />
    </Section>
  );
}
