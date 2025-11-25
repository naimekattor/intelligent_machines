import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Sparkles, Users, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            About Intelligent Machines
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're pioneering the future of digital experiences through AI-powered innovation, making intelligent website
            creation accessible to businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To make website creation intelligent, automated, and globally accessible. We believe every business
                deserves a powerful digital presence, and we're committed to democratizing access to cutting-edge AI
                technology.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To power the next generation of digital presence with AI-driven design and automation. We envision a
                world where intelligent systems handle the complexity, allowing creators to focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We blend human creativity with artificial intelligence to create experiences that are both innovative and
            deeply human. Technology should amplify creativity, not replace it.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6">
              <Sparkles className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Innovation First</h3>
              <p className="text-sm text-muted-foreground">
                Constantly pushing boundaries with cutting-edge AI technology
              </p>
            </div>
            <div className="p-6">
              <Users className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Human-Centered</h3>
              <p className="text-sm text-muted-foreground">Designing for people, powered by intelligent machines</p>
            </div>
            <div className="p-6">
              <Shield className="w-8 h-8 text-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Trust & Quality</h3>
              <p className="text-sm text-muted-foreground">Delivering reliable, premium solutions every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose Intelligent Machines
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "AI-Powered Support" },
              { number: "5x", label: "Faster Development" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background rounded-xl p-6 text-center border border-border">
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how AI can transform your digital presence.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
