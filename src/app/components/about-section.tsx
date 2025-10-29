"use client";

import { AboutContent } from "@/core/types";
import { motion } from "framer-motion";

interface AboutSectionProps {
  content: AboutContent;
  skills: Record<string, string[]>;
}

export function AboutSection({ content, skills }: AboutSectionProps) {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-6">
          <span className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
            $ cat about.txt
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground dark:text-foreground-dark">
          {content.title}
        </h2>
        <p className="text-base md:text-lg text-foreground/80 dark:text-foreground-dark/80 mb-12 leading-relaxed">
          {content.content}
        </p>

        <div>
          <h3 className="text-xl font-medium mb-6 text-muted-foreground dark:text-muted-foreground-dark">
            Skills & Technologies
          </h3>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm text-foreground dark:text-foreground-dark"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
