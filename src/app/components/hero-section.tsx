"use client";

import { HeroContent } from "@/core/types";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const { scrollY } = useScroll();

  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const imageY = useTransform(scrollY, [0, 300], [0, -50]);

  const textOpacity = useTransform(scrollY, [0, 400], [1, 0.7]);
  const textY = useTransform(scrollY, [0, 400], [0, -20]);

  const [typedName, setTypedName] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [showFunction] = useState(true);
  const [showReturn, setShowReturn] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const functionDelay = setTimeout(() => {
      setShowReturn(true);
    }, 800);

    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex <= content.name.length) {
        setTypedName(content.name.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        let titleIndex = 0;
        const titleInterval = setInterval(() => {
          if (titleIndex <= content.title.length) {
            setTypedTitle(content.title.slice(0, titleIndex));
            titleIndex++;
          } else {
            clearInterval(titleInterval);
            setTimeout(() => {
              setAnimationComplete(true);
            }, 500);
          }
        }, 40);
      }
    }, 80);

    return () => {
      clearTimeout(functionDelay);
      clearInterval(nameInterval);
    };
  }, [content.name, content.title]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <motion.div
          style={{ opacity: imageOpacity, y: imageY }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-transparent bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] mb-8"
        >
          <div className="rounded-full overflow-hidden bg-background">
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
          className="text-center"
        >
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xl md:text-3xl text-muted-foreground mb-2"
            >
              <span className="text-purple-500">const</span>{" "}
              <span className="text-blue-400">introduce</span> = () =&gt; &#123;
            </motion.div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xl md:text-3xl text-muted-foreground"
              >
                return
              </motion.span>
              <h1 className="flex items-center text-4xl md:text-6xl font-semibold gap-2">
                {typedName}
                <span
                  className={`inline-block w-0.5 h-8 md:h-12 bg-purple-500 ${
                    typedName.length < content.name.length
                      ? "animate-pulse"
                      : "opacity-0"
                  }`}
                />
                {animationComplete && (
                  <>
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
                  </>
                )}
              </h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: showFunction && showReturn ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm text-muted-foreground"
              ></motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xl md:text-3xl text-muted-foreground mb-4"
            >
              &#125;;
            </motion.div>

            <div className="flex items-center justify-center gap-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    typedName.length >= content.name.length &&
                    !animationComplete
                      ? 0.4
                      : 0,
                }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm text-muted-foreground"
              ></motion.span>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {typedTitle}
                <span
                  className={`inline-block w-0.5 h-5 md:h-6 bg-purple-500 ml-1 ${
                    typedTitle.length < content.title.length
                      ? "animate-pulse"
                      : "opacity-0"
                  }`}
                />
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: animationComplete ? 1 : 0,
              y: animationComplete ? 0 : 10,
            }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 flex-wrap justify-center mt-8"
          >
            <a
              href={`mailto:${content.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href={content.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
