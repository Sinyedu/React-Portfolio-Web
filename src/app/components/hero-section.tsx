"use client";

import { HeroContent } from "@/core/types";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const { scrollY } = useScroll();

  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const imageY = useTransform(scrollY, [0, 300], [0, -50]);

  const textOpacity = useTransform(scrollY, [0, 400], [1, 0.7]);
  const textY = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div
        style={{ opacity: imageOpacity, y: imageY }}
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-transparent bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px]"
      >
        <div className="rounded-full overflow-hidden">
          <Image
            src="/img/simonhero.jpg"
            alt={`${content.name} portrait`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute bottom-10 text-center px-4"
      >
        <h1 className="flex items-center text-4xl md:text-6xl font-semibold mb-4 gap-2">
          {content.name}
          <Image
            src="/flags/denmark.png"
            alt="Danish flag"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <Image
            src="/flags/finland.png"
            alt="Finnish flag"
            width={46}
            height={46}
            className="rounded-sm"
          />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          {content.title}
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center text-xl text-gray-900 dark:text-white"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center text-xl text-gray-900 dark:text-white"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center text-xl text-gray-900 dark:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
