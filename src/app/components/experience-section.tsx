"use client";

import { Experience } from "@/core/types";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            $ ls experiences/
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                {exp.companyLink && (
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
