"use client";

import { Project } from "@/core/types";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">$ ls projects/</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group border border-border bg-card p-6 hover:bg-muted transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
