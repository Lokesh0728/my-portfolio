import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experiance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative selection:bg-indigo-500/30 dark:selection:bg-amber-500/30 overflow-x-hidden pb-16">
      {/* Global Navigation Engine */}
      <Navbar />

      {/* Main Content Layout Sequence */}
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Footer/>
    </main>
  );
}