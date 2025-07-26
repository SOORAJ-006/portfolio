"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import portfolioData from "@/data/portfolio.json"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} skills={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Education data={portfolioData.education} />
        <Projects liveProjects={portfolioData.liveProjects} personalProjects={portfolioData.personalProjects} />
        <Contact data={portfolioData.personal} />
      </main>
    </div>
  )
}
