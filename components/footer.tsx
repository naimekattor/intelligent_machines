import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">IM</span>
            </div>
            <span className="font-semibold text-foreground">Intelligent Machines</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Intelligent Machines</p>
        </div>
      </div>
    </footer>
  )
}
