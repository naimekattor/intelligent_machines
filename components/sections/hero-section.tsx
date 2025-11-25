"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-foreground/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-foreground/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-8">
          <Sparkles size={14} className="text-foreground" />
          <span className="text-xs font-medium text-foreground">AI-Powered Solutions</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-tight text-balance mb-6">
          Building the Future with{" "}
          <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
             AI
          </span>{" "}
          Solutions.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Intelligent Machines turns ideas into smart, automated digital experiences that transform how businesses
          connect with their customers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all hover:scale-105"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-transparent text-foreground border border-border rounded-full hover:bg-secondary transition-all hover:scale-105"
          >
            View Portfolio
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "50+", label: "Projects" },
            { value: "98%", label: "Satisfaction" },
            { value: "24/7", label: "AI Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
