"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-screen max-w-7md items-center justify-between px-8">
        <div className="flex w-full flex-col justify-center lg:w-3/5 text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300">
            AI/ML ENGINEER • FULL STACK DEVELOPER
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
            className="
  text-5xl
md:text-6xl
lg:text-7xl
  leading-[1em]
  tracking-[-0.03em]
  text-white"
          >
            Saniya
            <br />
            Malik
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Building intelligent products and beautiful web experiences through
            AI and modern technologies.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-black transition hover:scale-105">
              Explore Projects
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10">
              Resume
            </button>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center lg:w-2/5">
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
            className="
    absolute
    -bottom-16
    -left-20
    h-80
    w-80
    rounded-full
    bg-violet-500/40
    blur-3xl
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
    -top-16
    -right-20
    h-80
    w-80
    rounded-full
    bg-pink-300/25
    blur-3xl
  "
          />
          <div className="absolute left-2 top-20 grid grid-cols-4 gap-2">
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
            className="
    relative
    z-10
    h-[420px]
    w-[420px]
    overflow-hidden
    rounded-full
    border
    border-white/10
  "
          >
            <Image
              src="/image.png"
              alt="Saniya Malik"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute -bottom-0 right-0 grid grid-cols-4 gap-2">
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
