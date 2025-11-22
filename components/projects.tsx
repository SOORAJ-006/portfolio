"use client"

import { useState } from "react"
import { Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
}

interface ProjectsProps {
  liveProjects: Project[]
  personalProjects: Project[] // kept for future use
}

export default function Projects({ liveProjects, personalProjects }: ProjectsProps) {
  // const [activeTab, setActiveTab] = useState<"live" | "personal">("live")
  // const currentProjects = activeTab === "live" ? liveProjects : personalProjects

  // Only show live projects
  const currentProjects = liveProjects

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Projects</h2>

        {/* Tab Navigation (Personal tab commented out) */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-2">
            <button
              // onClick={() => setActiveTab("live")}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-blue-600 text-white shadow-lg"
            >
              Live Projects
            </button>

            {/* <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "personal"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Personal Projects
            </button> */}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="text-white/70 text-xs space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="backdrop-blur-sm bg-purple-500/20 border border-purple-400/30 text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <Globe size={14} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 flex-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
