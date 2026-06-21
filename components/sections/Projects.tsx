"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 bg-accent-foreground/10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-purple-300">
            MY WORK
          </p>

          <h2 className="text-5xl text-white font-bold">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A collection of AI, Machine Learning and Full Stack applications
            I've built.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-3xl text-white font-family-geist-mono font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <div className="mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-purple-400"
                  >
                    <Link size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
