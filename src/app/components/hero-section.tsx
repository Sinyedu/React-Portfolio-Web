import { HeroContent } from "@/core/types";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl">
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">$ whoami</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-balance">
          {content.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          {content.title}
        </p>
        <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl">
          {content.description}
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-muted transition-colors text-sm"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-muted transition-colors text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={content.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-muted transition-colors text-sm"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
