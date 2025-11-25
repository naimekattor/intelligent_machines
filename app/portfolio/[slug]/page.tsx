import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPortfolioItem, getAllPortfolioSlugs, portfolioItems } from "@/lib/portfolio-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Building, ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }))
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getPortfolioItem(slug)

  if (!item) {
    notFound()
  }

  // Find next and previous items for navigation
  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug)
  const prevItem = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null
  const nextItem = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Back Link */}
      <section className="pt-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">{item.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-2 mb-6 text-balance">
                {item.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{item.fullDescription}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{item.year}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{item.client}</span>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="py-12 px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {prevItem ? (
              <Link
                href={`/portfolio/${prevItem.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                  <div className="text-foreground font-medium">{prevItem.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextItem ? (
              <Link
                href={`/portfolio/${nextItem.slug}`}
                className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                  <div className="text-foreground font-medium">{nextItem.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Interested in a Similar Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can bring your vision to life with AI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
