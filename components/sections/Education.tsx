import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen px-6 py-24 text-white bg-white/5 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Educational <span className="text-purple-400">Journey</span>
        </h2>

        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-purple-500/30" />

          {/* ITEM 1 */}
          <div className="relative mb-28 flex items-center justify-between">
            {/* LEFT EMPTY */}
            <div className="w-[45%]" />

            {/* DOT */}
            <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-purple-500" />

            {/* CARD */}
            <div className="w-[45%]">
              <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-md">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                  <GraduationCap size={16} />
                  Currently Pursuing
                </div>

                <h3 className="mb-4 text-3xl font-semibold">
                  B.Tech Computer Science
                </h3>

                <p className="text-purple-300">
                  Govt. Women Institute of Technology
                </p>

                <p className="mt-2 text-zinc-400">Dehradun, Uttarakhand</p>

                <div className="mt-4 flex gap-6 text-zinc-400">
                  <span className="flex items-center gap-2">
                    <Calendar size={18} />
                    2022 - 2026
                  </span>

                  <span className="flex items-center gap-2 text-green-400">
                    <Award size={18} />
                    CGPA 8.04
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="relative mb-28 flex items-center justify-between">
            {/* CARD LEFT */}
            <div className="w-[45%]">
              <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-md">
                <div className="mb-4 inline-flex rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                  Completed
                </div>

                <h3 className="mb-4 text-3xl font-semibold">
                  Class XII (UK Board)
                </h3>

                <p className="text-purple-300">Durga Moder Inter College</p>

                <p className="mt-2 text-zinc-400">Haridwar, Uttarakhand</p>

                <div className="mt-4 flex gap-6">
                  <span className="text-zinc-400">2021</span>

                  <span className="text-green-400">88.2%</span>
                </div>
              </div>
            </div>

            {/* DOT */}
            <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-purple-500" />

            {/* EMPTY */}
            <div className="w-[45%]" />
          </div>

          {/* ITEM 3 */}
          <div className="relative flex items-center justify-between">
            <div className="w-[45%]" />

            <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-purple-500" />

            <div className="w-[45%]">
              <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-md">
                <div className="mb-4 inline-flex rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                  Completed
                </div>

                <h3 className="mb-4 text-3xl font-semibold">
                  Class X (UK Board)
                </h3>

                <p className="text-purple-300">Durga Modern Inter College</p>

                <p className="mt-2 text-zinc-400">Haridwar, Uttarakhand</p>

                <div className="mt-4 flex gap-6">
                  <span className="text-zinc-400">2019</span>

                  <span className="text-green-400">89%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
