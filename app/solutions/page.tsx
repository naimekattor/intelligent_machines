import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Globe, Bot, Workflow, Palette, Database, Cpu, LineChart, Lock } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "AI Website Generator",
    description:
      "Create stunning, responsive websites in minutes with our AI-powered generation engine. Simply describe your vision, and watch it come to life.",
    features: ["Instant generation", "Mobile responsive", "SEO optimized", "Custom domains"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Deploy intelligent conversational agents that understand context, learn from interactions, and provide 24/7 customer support.",
    features: ["Natural language", "Multi-language", "Analytics dashboard", "Easy integration"],
  },
  {
    icon: Workflow,
    title: "AI Automation Tools",
    description:
      "Streamline your business operations with intelligent automation that handles repetitive tasks and optimizes workflows.",
    features: ["Task automation", "Smart scheduling", "Data processing", "Custom triggers"],
  },
  {
    icon: Palette,
    title: "AI Branding & UX",
    description:
      "Generate cohesive brand identities and user experiences that resonate with your audience through AI-driven design systems.",
    features: ["Logo generation", "Color palettes", "Typography", "Brand guidelines"],
  },
  {
    icon: Database,
    title: "Intelligent Data Systems",
    description:
      "Build smart database architectures that adapt to your needs with AI-optimized queries and real-time analytics.",
    features: ["Auto-scaling", "Smart queries", "Real-time sync", "Backup automation"],
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence implementations designed specifically for your unique business challenges and goals.",
    features: ["Custom models", "API integration", "Scalable infrastructure", "Ongoing support"],
  },
  {
    icon: LineChart,
    title: "AI Analytics Platform",
    description:
      "Gain actionable insights from your data with machine learning-powered analytics and predictive modeling.",
    features: ["Predictive insights", "Visual dashboards", "Automated reports", "Trend detection"],
  },
  {
    icon: Lock,
    title: "Secure AI Infrastructure",
    description:
      "Enterprise-grade security for all your AI implementations with encryption, compliance, and access controls.",
    features: ["End-to-end encryption", "GDPR compliant", "Role-based access", "Audit logs"],
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            AI-Powered Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Comprehensive suite of intelligent tools designed to transform your business and accelerate your digital
            journey.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <div
                  key={solution.title}
                  className="group bg-background rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground/20 transition-colors">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">How We Work</h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your needs and define the scope of your AI solution.",
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates a tailored blueprint for your intelligent system.",
              },
              {
                step: "03",
                title: "Development",
                description: "We build and train AI models optimized for your specific use case.",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Seamless integration and launch with ongoing monitoring and support.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's explore which solutions are right for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
