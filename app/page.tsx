import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050816] via-[#091224] to-black">
      <Navbar />

      {/* Temporary Hero Placeholder */}
      <section className="flex min-h-screen items-center justify-center">
        <Hero />
      </section>
      <About />
      <Education />
    </main>
  );
}
