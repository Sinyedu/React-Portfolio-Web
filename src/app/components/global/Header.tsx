import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            ~/portfolio
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm hover:text-accent transition-colors"
            >
              about
            </Link>
            <Link
              href="#projects"
              className="text-sm hover:text-accent transition-colors"
            >
              projects
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-accent transition-colors"
            >
              contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
