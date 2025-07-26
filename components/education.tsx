import { GraduationCap, Calendar } from "lucide-react"

interface EducationProps {
  data: Array<{
    id: number
    institution: string
    degree: string
    duration: string
    gpa?: string
    description: string
  }>
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Education</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((edu) => (
            <div
              key={edu.id}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="backdrop-blur-sm bg-blue-500/20 p-3 rounded-xl">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-blue-400 font-medium mb-2">{edu.institution}</h4>
                  <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    {edu.gpa && (
                      <span className="backdrop-blur-sm bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
