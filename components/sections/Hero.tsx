"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="
mx-auto
flex
flex-col-reverse
items-center
justify-center
gap-16
px-6
pt-32
pb-16
lg:min-h-screen
lg:max-w-7xl
lg:flex-row
lg:justify-between
lg:px-8      "
      >
        <div className="flex w-full flex-col justify-center lg:w-3/5 text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300">
            AI/ML ENGINEER ✦ FULL STACK DEVELOPER
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1em] tracking-[-0.03em] text-white"
          >
            Saniya
            <br />
            Malik
          </h1>

          <p className="mt-6 mx-auto max-w-xl lg:mx-0 text-lg leading-8 text-zinc-400">
            Building intelligent products and beautiful web experiences through
            AI and modern technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/SanSaniya"
              className="
      flex
      items-center
      gap-2
      rounded-full
      bg-white
      px-6
      py-3
      text-black
      transition
      duration-300
      hover:scale-105
    "
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/Resume-saniya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/20
      px-6
      py-3
      text-white
      transition
      duration-300
      hover:bg-white/10
      hover:scale-105
    "
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        <div
          className="
flex
w-full
flex-col
justify-center
text-center
lg:w-3/5
lg:text-left
text-white
"
        >
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 lg:-bottom-20 -left-8 lg:-left-20 h-80 w-80 rounded-full bg-violet-500/40 blur-3xl
              "
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    absolute
    -top-8
    lg:-top-20
    -right-8
    lg:-right-20
    h-80
    w-80
    rounded-full
    bg-pink-300/25
    blur-3xl
  "
          />
          <div className="absolute left-2 top-20 grid grid-cols-4 gap-2 hidden lg:grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/40" />
            ))}
          </div>

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 h-[280px] w-[280px] overflow-hidden rounded-full border border-white/10 sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]
              "
          >
            <Image
              src="/image.png"
              alt="Saniya Malik"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute -bottom-0 right-0 hidden lg:grid grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-violet-200/40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
