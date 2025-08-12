"use client"

import { Download, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  data: {
    name: string
    role: string
    bio: string
    avatar: string
    email: string
    phone: string
    location: string
    resume: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <img
              src={data.avatar || "/placeholder.svg"}
              alt={data.name}
              className="w-32 h-32 md:auto md:h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-xl"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{data.name}</h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6 font-medium">{data.role}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">{data.bio}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/70">
              <Mail size={16} />
              <span className="text-sm">{data.email}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Phone size={16} />
              <span className="text-sm">{data.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} />
              <span className="text-sm">{data.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium transition-all duration-200 bg-transparent"
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
