"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">
      {/* Purple Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
            THANK YOU
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Thanks for visiting!
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            I'm always open to internships, collaborations, freelance work and
            exciting AI or Full Stack opportunities.
          </p>
        </motion.div>

        {/* Social Icons */}

        <div className="mt-12 flex justify-center gap-6">
          {[
            {
              icon: <FaGithub size={22} />,
              link: "https://github.com/SanSaniya",
            },
            {
              icon: <FaLinkedin size={22} />,
              link: "https://www.linkedin.com/in/saniya-malik-25b05725b",
            },
            {
              icon: <Mail size={22} />,
              link: "mailto:saniyamlk1111@gmail.com",
            },
          ].map((item) => (
            <motion.a
              key={item.link}
              href={item.link}
              target="_blank"
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              whileTap={{ scale: 0.95 }}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-zinc-300
                backdrop-blur-xl
                transition
                hover:border-purple-400
                hover:text-purple-300
                hover:shadow-[0_0_25px_rgba(168,85,247,.45)]
              "
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 Saniya Malik. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Crafted with
            <Heart size={16} className="fill-purple-500 text-purple-500" />
            using Next.js, React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
