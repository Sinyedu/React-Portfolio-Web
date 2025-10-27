import { ContactContent } from "@/core/types";

interface ContactSectionProps {
  content: ContactContent;
  email: string;
}

export function ContactSection({ content, email }: ContactSectionProps) {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">
            $ echo &ldquo;contact&ldquo;
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {content.title}
        </h2>
        <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
          {content.description}
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
}
