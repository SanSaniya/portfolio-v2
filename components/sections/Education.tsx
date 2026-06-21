import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    status: "Currently Pursuing",
    title: "B.Tech Computer Science",
    institute: "Govt. Women Institute of Technology",
    location: "Dehradun, Uttarakhand",
    duration: "2022 - 2026",
    score: "CGPA 8.04",
    current: true,
  },
  {
    status: "Completed",
    title: "Class XII (UK Board)",
    institute: "Durga Modern Inter College",
    location: "Haridwar, Uttarakhand",
    duration: "2021",
    score: "88.2%",
    current: false,
  },
  {
    status: "Completed",
    title: "Class X (UK Board)",
    institute: "Durga Modern Inter College",
    location: "Haridwar, Uttarakhand",
    duration: "2019",
    score: "89%",
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-white/5 px-6 py-24 text-white backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
          Educational <span className="text-purple-400">Journey</span>
        </h2>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-purple-500/30 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">
            {education.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex ${
                  index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-purple-500 lg:left-1/2" />

                {/* Card */}
                <div className="ml-10 w-full lg:ml-0 lg:w-[45%]">
                  <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-purple-400 hover:bg-white/10 md:p-6 lg:p-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-2 text-xs text-purple-300 md:text-sm">
                      {item.current && <GraduationCap size={15} />}
                      {item.status}
                    </div>

                    <h3 className="mb-3 text-xl font-semibold md:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>

                    <p className="text-purple-300">{item.institute}</p>

                    <p className="mt-2 text-sm text-zinc-400 md:text-base">
                      {item.location}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4 text-sm md:text-base">
                      <span className="flex items-center gap-2 text-zinc-400">
                        <Calendar size={16} />
                        {item.duration}
                      </span>

                      <span className="flex items-center gap-2 text-green-400">
                        <Award size={16} />
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
