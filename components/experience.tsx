import { Calendar } from "lucide-react"

interface ExperienceProps {
  data: Array<{
    id: number
    company: string
    position: string
    duration: string
    description: string
    technologies: string[]
  }>
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>

        <div className="space-y-8">
          {data.map((job, index) => (
            <div
              key={job.id}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{job.position}</h3>
                  <h4 className="text-lg text-blue-400 font-medium">{job.company}</h4>
                </div>
                <div className="flex items-center gap-2 text-white/70 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span className="text-sm">{job.duration}</span>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-6">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="backdrop-blur-sm bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
