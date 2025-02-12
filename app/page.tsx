import BackgroundPaths from "@/components/BackgroundPaths"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <BackgroundPaths>
      <Header />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </BackgroundPaths>
  )
}

