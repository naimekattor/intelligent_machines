"use client"

import { Target, Eye } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Empowering Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We believe in the power of intelligent automation to revolutionize how businesses operate online.
          </p>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <div className="group p-8 sm:p-10 rounded-3xl bg-background border border-border hover:border-foreground/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target size={24} className="text-background" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses through intelligent, AI-driven website automation that streamlines operations and
              enhances customer engagement.
            </p>
          </div>

          {/* Vision */}
          <div className="group p-8 sm:p-10 rounded-3xl bg-background border border-border hover:border-foreground/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye size={24} className="text-background" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the global leader in AI-created digital experiences, setting new standards for innovation and
              excellence in web technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
