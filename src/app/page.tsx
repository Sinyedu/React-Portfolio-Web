import { ContentData, ProjectsData } from "@/core/types";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";

import contentData from "./data/content.json";
import projectsData from "./data/projects.json";
import { Header } from "@/app/components/global/Header";
import { Footer } from "@/app/components/global/Footer";

export default function HomePage() {
  const content = contentData as ContentData;
  const { projects } = projectsData as ProjectsData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} skills={content.skills} />
        <ProjectsSection projects={projects} />
        <ContactSection content={content.contact} email={content.hero.email} />
      </main>
      <Footer />
    </div>
  );
}
