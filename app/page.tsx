import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import OpenSource from "@/components/OpenSource"
import Blogs from "@/components/Blogs"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <OpenSource />
      <Blogs />
      <Skills />
      <Contact />
    </main>
  );
}
