"use client";

import { AboutContent } from "@/core/types";
import { motion, Variants } from "framer-motion";

interface AboutSectionProps {
  content: AboutContent;
  skills: Record<string, string[]>;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export function AboutSection({ content, skills }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="mb-6">
          <span className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
            $ cat about.txt
          </span>
        </div>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-foreground dark:text-foreground-dark relative"
        >
          {content.title}
          <motion.span
            className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>

        <p className="text-base md:text-lg text-foreground/80 dark:text-foreground-dark/80 mb-12 leading-relaxed">
          {content.content}
        </p>

        <div>
          <h3 className="text-xl font-medium mb-6 text-muted-foreground dark:text-muted-foreground-dark">
            Skills & Technologies
          </h3>

          <motion.div variants={containerVariants} className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div key={category} variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">
                  {category}{" "}
                  <span className="text-sm text-purple-400">
                    {category === "Programming Languages"
                      ? "💬 I speak code somewhat..."
                      : category === "Frontend Frameworks"
                      ? "🎨 Master of documentation"
                      : category === "Backend & Databases"
                      ? "🗄️ Accidentally deleted databases"
                      : category === "Tools & DevOps"
                      ? "⚙️ My code is pristine right?..."
                      : category === "APIs & Others"
                      ? "🔗 1 + 1 = 2 right?"
                      : "🛠️ Toolbox ready"}
                  </span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1,
                        rotate: [0, 5, -5, 0],
                        textShadow: "0px 0px 5px rgb(255,255,255)",
                      }}
                      className="border border-gray-300 dark:border-pink-400 rounded-lg px-4 py-2 text-xl text-foreground dark:text-foreground-dark cursor-pointer hover:shadow-lg transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
