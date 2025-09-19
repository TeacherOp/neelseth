import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import OpenSource from "@/components/OpenSource"
import Blogs from "@/components/Blogs"
import GitHubActivity from "@/components/GitHubActivity"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <OpenSource />
      <Blogs />
      <GitHubActivity />
      <Skills />
      <Contact />
    </main>
  );
}
