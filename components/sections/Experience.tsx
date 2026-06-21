"use client";

import { experiences } from "@/data/experience";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Experience() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const x = useTransform(rotateY, [-15, 15], [-15, 15]);
  const y = useTransform(rotateX, [-15, 15], [15, -15]);
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-purple-300">
            JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            My professional journey building AI, software and web applications.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-12 md:mt-20 grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-5 md:p-8
    shadow-2xl
  "
            >
              <div
                className="
    absolute
    inset-0
    rounded-3xl
    opacity-0
    transition
    duration-500
    group-hover:opacity-100
  "
              >
                <div
                  className="
      absolute
      inset-0
      rounded-3xl
      border
      border-purple-500/40
    "
                />
              </div>
              {/* Purple glow */}

              <div
                className="
hidden md:block
      absolute
      -right-20
      -top-20
      h-56
      w-56
      rounded-full
      bg-purple-600/20
      blur-[120px]
      transition
      duration-500
      group-hover:bg-purple-500/30
    "
              />
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
    absolute
    right-10
    top-8
    h-2
    w-2
    rounded-full
    bg-purple-400
    shadow-[0_0_20px_#a855f7]
  "
              />

              <motion.div
                animate={{
                  y: [0, 6, 0],
                  opacity: [0.3, 0.9, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                hidden md:block
    absolute
    right-20
    top-16
    h-1.5
    w-1.5
    rounded-full
    bg-fuchsia-400
    shadow-[0_0_15px_#d946ef]
  "
              />
              {/* Card Content */}

              <div className="relative z-10">
                {/* Header */}

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  {/* Avatar */}

                  <div className="flex items-start gap-4">
                    <div className="relative">
                      {/* Glow */}

                      <div
                        className="
      absolute
      inset-0
      rounded-2xl
      bg-purple-500/40
      blur-xl
      transition
      duration-500
      group-hover:scale-125
    "
                      />

                      {/* Card */}

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                        }}
                        className="
                        hidden md:flex
      relative
      flex
      h-16
w-16
md:h-20
md:w-20
text-2xl
md:text-3xl
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-br
      from-purple-500
      via-violet-600
      to-fuchsia-600
      font-bold
      text-white
      shadow-[0_0_35px_rgba(168,85,247,0.4)]
    "
                      >
                        {experience.avatar}
                      </motion.div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl text-white font-bold">
                        {experience.role}
                      </h3>

                      <p
                        className="
    mt-1
text-base md:text-lg    font-semibold
    bg-gradient-to-r
    from-purple-400
    via-fuchsia-400
    to-violet-500
    bg-clip-text
    text-transparent
  "
                      >
                        {experience.company}
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Date */}

                  <div
                    className="
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          text-sm
          text-zinc-300
        "
                  >
                    {experience.duration}
                  </div>
                </div>

                {/* Divider */}

                <div className="my-6 md:my-8 h-px bg-white/10" />

                {/* Description */}

                <ul className="space-y-3 md:space-y-5">
                  {experience.description.map((point) => (
                    <li key={point} className="flex gap-4">
                      <div
                        className="
              mt-2
              h-2
              w-2
              rounded-full
              bg-purple-400
              shadow-[0_0_12px_#a855f7]
            "
                      />

                      <p className="text-sm md:text-base leading-6 md:leading-7 text-zinc-300">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Skills */}

                <div className="mt-6 md:mt-10 flex flex-wrap gap-3">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
            rounded-full
            border
            border-purple-400/20
            bg-purple-500/10
            px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm
            text-purple-300
            transition
            duration-300
            hover:bg-purple-500/20
            hover:shadow-[0_0_15px_#9333ea]
          "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
