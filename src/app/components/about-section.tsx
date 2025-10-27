import { AboutContent } from "@/core/types";

interface AboutSectionProps {
  content: AboutContent;
  skills: string[];
}

export function AboutSection({ content, skills }: AboutSectionProps) {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">$ cat about.txt</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          {content.title}
        </h2>
        <p className="text-base md:text-lg text-foreground/80 mb-12 leading-relaxed">
          {content.content}
        </p>

        <div>
          <h3 className="text-xl font-medium mb-6 text-muted-foreground">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 border border-border bg-card hover:bg-muted transition-colors text-sm text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
