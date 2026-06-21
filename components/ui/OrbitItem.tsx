"use client";
import { motion } from "framer-motion";

type OrbitItemProps = {
  skill: {
    name: string;
    icon: React.ElementType;
    color: string;
    angle: number;
  };
  radius: number;
  duration: number;
};

export default function OrbitItem({ skill, radius, duration }: OrbitItemProps) {
  const angle = (skill.angle * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const Icon = skill.icon;

  return (
    <div
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      className="absolute"
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.15,
        }}
        className="flex flex-col items-center"
      >
        <div
          className="
          pointer-events-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-zinc-900/90
            backdrop-blur-md
          "
        >
          <Icon size={24} color={skill.color} />
        </div>

        <p className="mt-2 text-xs text-zinc-300">{skill.name}</p>
      </motion.div>
    </div>
  );
}
