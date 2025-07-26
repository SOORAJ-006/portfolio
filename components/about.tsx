interface AboutProps {
  data: {
    name: string
    bio: string
  }
  skills: string[]
}

export default function About({ data, skills }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">{data.bio}</p>
              <p className="text-white/70 leading-relaxed">
                I specialize in building robust, scalable backend systems that power modern web applications. My
                expertise spans across various technologies and frameworks, with a focus on performance, security, and
                maintainability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-white/90 font-medium hover:bg-white/10 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
