"use client"

import { Globe, MessageSquare, Palette } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "AI Website Generator",
    description:
      "Create stunning, fully functional websites in minutes with our intelligent AI that understands your business needs and brand identity.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot & Automation",
    description:
      "Deploy smart chatbots and automation tools that handle customer inquiries 24/7, improving response times and customer satisfaction.",
  },
  {
    icon: Palette,
    title: "AI Branding & UI Creation",
    description:
      "Let our AI craft unique brand identities and user interfaces that resonate with your audience and stand out from the competition.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            AI-Powered Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cutting-edge tools designed to transform your digital presence
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground transition-colors">
                  <solution.icon size={24} className="text-foreground group-hover:text-background transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
