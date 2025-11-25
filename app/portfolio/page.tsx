import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { portfolioItems } from "@/lib/portfolio-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our collection of AI-powered digital experiences crafted for forward-thinking businesses across
            industries.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Want to Be Our Next Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's create something extraordinary together.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
