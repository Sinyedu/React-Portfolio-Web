"use client";

import { ContentData, ProjectsData } from "@/core/types";
import { AboutSection } from "@/app/components/about-section";
import { ContactSection } from "@/app/components/contact-section";
import { HeroSection } from "@/app/components/hero-section";
import { ProjectsSection } from "@/app/components/projects-section";

import contentData from "@/app/data/content.json";
import projectsData from "@/app/data/projects.json";
import { Header } from "@/app/components/global/Header";
import { Footer } from "@/app/components/global/Footer";

export default function HomePage() {
  const content = contentData as ContentData;
  const { projects } = projectsData as ProjectsData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 scroll-smooth">
        <section id="home" className="scroll-mt-16">
          <HeroSection content={content.hero} />
        </section>

        <section id="about" className="scroll-mt-24">
          <AboutSection content={content.about} skills={content.skills} />
        </section>

        <section id="projects" className="scroll-mt-24">
          <ProjectsSection projects={projects} />
        </section>

        <section id="contact" className="scroll-mt-24">
          <ContactSection
            content={content.contact}
            email={content.hero.email}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
