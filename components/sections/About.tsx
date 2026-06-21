import { GraduationCap, Code2, Target, Heart, Download } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 lg:min-h-screen lg:py-24 text-white bg-white/5 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-20 text-center text-5xl font-bold">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <p className="text-xl leading-10 text-zinc-300">
              As a dedicated and motivated B.Tech in Computer Science and
              Engineering student, I am passionate about leveraging technology
              to solve real-world problems and build impactful digital
              experiences.
            </p>

            <p className="mt-10 text-xl leading-10 text-zinc-300">
              With a strong foundation in AI/ML, Web Development, and Software
              Engineering, I continuously explore new technologies and create
              projects that combine innovation with practicality.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-wrap gap-4">
                {/* Resume */}
                <a
                  href="/Resume-saniya.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-4 font-semibold transition hover:bg-purple-700 hover:scale-105
                    "
                >
                  <Download size={20} />
                  Download Resume
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className=" rounded-xl border border-purple-500 px-6 py-4  font-semibold  text-purple-400  transition  hover:bg-purple-500/10  hover:scale-105
                "
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Card 1 */}
            <div
              className=" flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:block lg:p-8            
                "
            >
              <div className=" flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 lg:mb-6 lg:h-20 lg:w-20              ">
                <GraduationCap size={38} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Education</h3>

                <p className="mt-3 text-zinc-400">B.Tech CSE</p>

                <p className="text-zinc-500">WIT Campus Institute</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:block lg:p-8            ">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 lg:mb-6 lg:h-20 lg:w-20              ">
                <Code2 size={38} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Development</h3>

                <p className="mt-3 text-zinc-400">AI/ML & Web Projects</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:block lg:p-8            ">
              <div className=" *:flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 lg:mb-6 lg:h-20 lg:w-20              ">
                <Target size={38} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Passion</h3>

                <p className="mt-3 text-zinc-400">Problem Solving</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className=" flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:block lg:p-8            ">
              <div
                className="

  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  bg-purple-500/20
  lg:mb-6
  lg:h-20
  lg:w-20              "
              >
                <Heart size={38} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Learning</h3>

                <p className="mt-3 text-zinc-400">Continuous Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
