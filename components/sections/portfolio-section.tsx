"use client"

const portfolioItems = [
  {
    title: "TechFlow Dashboard",
    description: "AI-powered analytics platform for enterprise clients",
    image: "/modern-dashboard-interface-with-charts-and-analyti.jpg",
  },
  {
    title: "EcoStore E-commerce",
    description: "Sustainable shopping experience with smart recommendations",
    image: "/minimal-ecommerce-website-with-products-clean-whit.jpg",
  },
  {
    title: "HealthAI Portal",
    description: "Intelligent healthcare booking and management system",
    image: "/healthcare-app-interface-clean-modern-medical-desi.jpg",
  },
  {
    title: "FinanceHub App",
    description: "Personal finance management with AI insights",
    image: "/finance-app-dashboard-with-graphs-and-statistics-m.jpg",
  },
  {
    title: "CreativeStudio",
    description: "AI-assisted design platform for professionals",
    image: "/creative-design-tool-interface-with-canvas-and-too.jpg",
  },
  {
    title: "LearnSmart LMS",
    description: "Adaptive learning platform with personalized paths",
    image: "/education-platform-interface-with-courses-and-prog.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our latest AI-crafted digital experiences
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
