"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";

const stars = [
  { left: "10%", top: "15%", delay: 0.2 },
  { left: "25%", top: "65%", delay: 0.5 },
  { left: "40%", top: "20%", delay: 0.8 },
  { left: "55%", top: "80%", delay: 1.1 },
  { left: "70%", top: "35%", delay: 1.4 },
  { left: "85%", top: "60%", delay: 1.7 },
  { left: "15%", top: "45%", delay: 2.0 },
  { left: "30%", top: "90%", delay: 2.3 },
  { left: "50%", top: "10%", delay: 2.6 },
  { left: "65%", top: "55%", delay: 2.9 },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      {/* Background Glows */}

      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    left-[-180px]
    top-24
    h-[420px]
    w-[420px]
    rounded-full
    bg-purple-600/15
    blur-[140px]
    pointer-events-none
  "
      />

      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 35, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    right-[-10px]
    bottom-12
    h-[380px]
    w-[380px]
    rounded-full
    bg-fuchsia-500/10
    blur-[130px]
    pointer-events-none
  "
      />
      {stars.map((star, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0.2,
            scale: 0.8,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            left: star.left,
            top: star.top,
          }}
          className="
      absolute
      h-1
      w-1
      rounded-full
      bg-purple-300
      pointer-events-none
    "
        />
      ))}
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-purple-300">
            CONTACT ME
          </p>

          <h2 className="text-5xl font-bold text-white">
            Let's Build
            <span className="text-purple-400"> Something Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Whether it's an internship opportunity, AI project, research
            collaboration or simply a conversation about technology, I'd love to
            hear from you.
          </p>
        </div>

        {/* Main Grid */}

        <motion.div
          className="mt-20 grid gap-10 lg:grid-cols-2"
          whileHover={{
            y: -8,
            scale: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
        >
          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
border
border-white/10
bg-white/[0.03]
backdrop-blur-2xl
shadow-[0_0_50px_rgba(168,85,247,0.08)]
transition-all
duration-500
              p-10
              backdrop-blur-xl
            "
          >
            <h3 className="text-3xl font-bold text-white">Get In Touch</h3>

            <p className="mt-5 leading-8 text-zinc-400">
              I'm currently looking for internships, AI/ML opportunities,
              research collaborations and exciting software projects.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon={<Mail size={22} />}
                title="Email"
                value="saniyamlk1111@gmail.com"
                href="mailto:saniyamlk1111@gmail.com"
              />

              <ContactItem
                icon={<FaGithub size={22} />}
                title="GitHub"
                value="@SanSaniya"
                href="https://github.com/SanSaniya"
              />

              <ContactItem
                icon={<FaLinkedin size={22} />}
                title="LinkedIn"
                value="Open LinkedIn"
                href="https://www.linkedin.com/in/saniya-malik-25b05725b"
              />

              <ContactItem
                icon={<MapPin size={22} />}
                title="Location"
                value="India"
              />
            </div>
          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
border
border-white/10
bg-white/[0.03]
backdrop-blur-2xl
shadow-[0_0_50px_rgba(168,85,247,0.08)]
transition-all
duration-500
              p-10
              backdrop-blur-xl
            "
          >
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-purple-500"
              />

              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-purple-500"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-white/10 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-purple-500"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: loading ? 1 : 1.03,
                  y: loading ? 0 : -2,
                }}
                whileTap={{
                  scale: loading ? 1 : 0.98,
                }}
                className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-600
                    shadow-[0_0_30px_rgba(168,85,247,0.35)]
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-purple-500
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                "
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

function ContactItem({ icon, title, value, href }: ContactItemProps) {
  return (
    <motion.div
      whileHover={{
        x: 8,
        scale: 1.03,
      }}
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-white/10
        bg-zinc-950/60
        p-5
      "
    >
      <div
        className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-purple-500/10
text-purple-400
transition-all
group-hover:rotate-12
group-hover:bg-purple-500/20
"
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-zinc-500">{title}</p>

        <div className="text-white">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-purple-400"
            >
              {value}
            </a>
          ) : (
            <span className="text-white">{value}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
