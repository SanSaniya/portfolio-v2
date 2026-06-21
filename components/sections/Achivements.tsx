"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            My
            <span className="text-purple-400"> Achievements</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A milestone that reflects teamwork, innovation and problem-solving.
          </p>
        </div>

        {/* Achievement Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-3xl
            border
            border-zinc-500/20
            p-10
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(168,85,247,0.12)]
          "
        >
          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-purple-500/10
                ring-1
                ring-purple-400/20
              "
            >
              <Trophy size={42} className="text-purple-400" />
            </div>

            <span
              className="
                mt-8
                rounded-full
                border
                border-purple-400/20
                bg-purple-500/10
                px-5
                py-2
                text-sm
                tracking-wide
                text-purple-300
              "
            >
              Competition
            </span>

            <h3 className="mt-6 text-4xl font-bold text-white">
              Smart India Hackathon{" "}
              <span className="text-purple-400">2025</span> 2x
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Successfully cleared the{" "}
              <span className="font-semibold text-white">
                college internal round
              </span>{" "}
              of Smart India Hackathon 2025 by collaborating in a team to
              design, develop and present an innovative solution to a real-world
              problem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
