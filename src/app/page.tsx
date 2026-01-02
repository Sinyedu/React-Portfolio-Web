

import { AboutSection } from "@/app/components/about-section";
import { ContactSection } from "@/app/components/contact-section";
import { HeroSection } from "@/app/components/hero-section";
import { ProjectsSection } from "@/app/components/projects-section";
import { ExperienceSection } from "@/app/components/experience-section";
import { Header } from "@/app/components/global/Header";
import { Footer } from "@/app/components/global/Footer";

import contentJSON from "@/app/data/content.json";
import projectsJSON from "@/app/data/projects.json";
import experiencesJSON from "@/app/data/experiences.json";

import { ContentData, ProjectsData, Experience } from "@/core/types";

export default function HomePage() {
  const content: ContentData = contentJSON as ContentData;
  const { projects } = projectsJSON as ProjectsData;
  const experiences = experiencesJSON as Experience[];

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

        <section id="experience" className="scroll-mt-24">
          <ExperienceSection experiences={experiences} />
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
