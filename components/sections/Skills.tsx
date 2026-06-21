"use client";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import OrbitItem from "../ui/OrbitItem";

const innerOrbit = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    angle: -90,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
    angle: -35,
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    angle: 20,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    angle: 80,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
    angle: 145,
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    color: "#EE4C2C",
    angle: 210,
  },
];
const outerOrbit = [
  {
    name: "Git",
    icon: SiGit,
    color: "#F05033",
    angle: -120,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#80BD01",
    angle: -65,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    angle: -10,
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    angle: 40,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    angle: 85,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    angle: 145,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    angle: 205,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-20 md:py-24 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-purple-300">
            MY TECH STACK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills &<span className="text-purple-400"> Technologies</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Technologies I use to build AI-powered applications, full-stack
            products and modern web experiences.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:hidden">
          {[...innerOrbit, ...outerOrbit].map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-md
        "
              >
                <Icon size={26} style={{ color: skill.color }} />

                <span className="text-sm font-medium text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
        {/* Orbit goes here */}
        <div
          className="hidden lg:flex mt-24 h-[700px] w-full items-center justify-center
          "
        >
          {" "}
          {/* Mobile Orbit */}
          {/*FOR DESKTOP ILL PUT IT HERE--->Parent orbit container in which everything will go*/}
          <div
            className="
              relative
              h-[600px]
              w-[600px]
              rounded-full
              isolate
              border
              border-white/5
              bg-white/[0.02]
            "
          >
            {/*inner orbit ring */}
            <div
              className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[480px]
                  w-[480px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/15
                "
            >
              {/* outer orbit ring */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[600px]
                  w-[600px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/15
                  "
              />
              {/* Center Planet */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                }}
                className="
    absolute
    left-1/2
    top-1/2
    flex
    h-36
    w-36
    -translate-x-1/2
    -translate-y-1/2
    flex-col
    items-center
    justify-center
    rounded-full
    border
    border-purple-500/30
    bg-zinc-900/80
    backdrop-blur-xl
    shadow-[0_0_60px_rgba(168,85,247,0.18)]
"
              >
                {/*saturn ring*/}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M19.039 11.459c.001.015.022.244.03.407c.006.113 0 .29 0 .3c.003 0 .029.023.03.024c1.428 1.17 2.943 2.767 3.204 3.94c.073.325.056.618-.072.868c-.152.293-.439.503-.834.638c-2.046.7-6.925-.642-10.907-2.609c-2.845-1.406-5.342-3.081-7.032-4.719c-1.57-1.523-1.995-2.71-1.59-3.427c.155-.271.42-.472.776-.609c1.299-.507 3.788-.152 6.239.579c-1.16.866-1.968 2.034-2.342 3.202l-.001.007l-.001.006c-.115 1.07 1.434 2.47 3 3.25c-.002-.006.084.032.084.026c-.002-.006-.015-.109-.017-.113c-.366-2.66 1.648-6.64 3.765-7.513c.136-.056.254-.09.27-.095l-.273-.027q-.11-.01-.228-.015a8 8 0 0 0-.272-.01a6.44 6.44 0 0 0-3.4.892C5.378 5.057 2.383 4.892 1.13 5.31q-.747.251-1 .751c-.174.35-.175.79-.002 1.306c.57 1.704 3.058 4.032 6.211 6.099c.457 2.407 2.615 4.875 5.703 5.204l.142.015a.3.3 0 0 1 .05 0l-.173-.132c-.955-.736-1.813-1.949-2.107-3l.185.093l.143.07c4.985 2.465 10.215 3.72 12.53 2.947c.519-.174.9-.418 1.075-.768c.167-.335.139-.78-.029-1.278c-.436-1.3-2.304-3.284-4.675-5.052l-.145-.107"
                    />
                  </svg>
                </span>
                <p className="mt-2 text-xs tracking-[0.3em] text-purple-300">
                  AI • ML
                </p>
                <p className="text-[11px] text-zinc-400">FULL STACK</p>
              </motion.div>

              {/* rotating inner orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="
    absolute
    inset-0
    rounded-full
  "
              >
                {innerOrbit.map((skill, index) => (
                  <OrbitItem
                    key={skill.name}
                    skill={skill}
                    radius={220}
                    duration={45}
                  />
                ))}
              </motion.div>
              {/* rotating outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 90,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute inset-0"
              >
                {outerOrbit.map((skill, index) => (
                  <OrbitItem
                    key={skill.name}
                    skill={{
                      ...skill,
                      angle: (360 / outerOrbit.length) * index,
                    }}
                    radius={340}
                    duration={70}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
