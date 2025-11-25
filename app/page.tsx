import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
