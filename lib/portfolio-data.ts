export interface PortfolioItem {
  slug: string
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  features: string[]
  technologies: string[]
  year: string
  client: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "ecommerce-platform",
    title: "AI E-Commerce Platform",
    category: "Web Development",
    image: "/minimal-ecommerce-website-with-products-clean-whit.jpg",
    description: "A fully automated e-commerce solution with AI-powered product recommendations and dynamic pricing.",
    fullDescription:
      "We developed a comprehensive e-commerce platform that leverages artificial intelligence to deliver personalized shopping experiences. The system analyzes user behavior in real-time to provide tailored product recommendations, optimize pricing strategies, and predict inventory needs. The result is a seamless shopping experience that increases conversion rates and customer satisfaction.",
    features: [
      "AI product recommendations",
      "Dynamic pricing engine",
      "Inventory prediction",
      "Personalized search",
      "Automated marketing",
    ],
    technologies: ["Next.js", "TensorFlow", "PostgreSQL", "Stripe", "Vercel"],
    year: "2024",
    client: "RetailTech Inc.",
  },
  {
    slug: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    category: "AI Analytics",
    image: "/healthcare-app-interface-clean-modern-medical-desi.jpg",
    description: "Real-time patient data visualization with predictive health insights powered by machine learning.",
    fullDescription:
      "This healthcare analytics platform transforms complex medical data into actionable insights for healthcare providers. Using advanced machine learning algorithms, the system predicts patient outcomes, identifies at-risk individuals, and optimizes resource allocation across medical facilities. The intuitive dashboard enables healthcare professionals to make data-driven decisions quickly and effectively.",
    features: [
      "Predictive health analytics",
      "Real-time monitoring",
      "Risk assessment",
      "Resource optimization",
      "HIPAA compliant",
    ],
    technologies: ["React", "Python", "TensorFlow", "AWS", "D3.js"],
    year: "2024",
    client: "MedCare Systems",
  },
  {
    slug: "finance-app",
    title: "Smart Finance App",
    category: "Mobile App",
    image: "/finance-app-dashboard-with-graphs-and-statistics-m.jpg",
    description: "AI-driven personal finance management with automated budgeting and investment recommendations.",
    fullDescription:
      "A revolutionary personal finance application that uses AI to help users achieve their financial goals. The app automatically categorizes transactions, creates personalized budgets, and provides intelligent investment recommendations based on individual risk profiles and market conditions. Users gain complete visibility into their finances with minimal effort.",
    features: ["Automated budgeting", "Investment AI", "Spending insights", "Goal tracking", "Bill prediction"],
    technologies: ["React Native", "Node.js", "MongoDB", "Plaid API", "OpenAI"],
    year: "2023",
    client: "FinanceFirst",
  },
  {
    slug: "education-platform",
    title: "Adaptive Learning Platform",
    category: "EdTech",
    image: "/education-platform-interface-with-courses-and-prog.jpg",
    description: "Personalized education experience that adapts to each student's learning pace and style.",
    fullDescription:
      "An innovative educational platform that personalizes the learning journey for every student. The AI engine continuously analyzes learning patterns, adjusts content difficulty, and recommends optimal study paths. This adaptive approach has shown to improve learning outcomes by 40% compared to traditional methods, making education more accessible and effective.",
    features: [
      "Adaptive learning paths",
      "Progress analytics",
      "Content personalization",
      "Performance prediction",
      "Engagement optimization",
    ],
    technologies: ["Next.js", "Python", "PostgreSQL", "GPT-4", "Vercel"],
    year: "2024",
    client: "EduTech Global",
  },
  {
    slug: "design-studio",
    title: "AI Design Studio",
    category: "Creative Tools",
    image: "/creative-design-tool-interface-with-canvas-and-too.jpg",
    description: "Generative design platform enabling rapid creation of brand assets and marketing materials.",
    fullDescription:
      "A cutting-edge design platform that empowers creators to generate professional brand assets in minutes. Using generative AI, users can create logos, marketing materials, and complete brand identities by simply describing their vision. The platform maintains brand consistency across all outputs while dramatically reducing design iteration time.",
    features: ["AI logo generation", "Brand kit creation", "Marketing templates", "Style transfer", "Batch processing"],
    technologies: ["Next.js", "Stable Diffusion", "DALL-E", "Figma API", "AWS"],
    year: "2024",
    client: "Creative Labs",
  },
  {
    slug: "analytics-dashboard",
    title: "Enterprise Analytics Suite",
    category: "Business Intelligence",
    image: "/modern-dashboard-interface-with-charts-and-analyti.jpg",
    description: "Comprehensive business intelligence platform with AI-powered insights and forecasting.",
    fullDescription:
      "An enterprise-grade analytics solution that transforms raw business data into strategic insights. The platform combines traditional BI capabilities with AI-powered forecasting, anomaly detection, and natural language querying. Executives and analysts can quickly understand business performance and make informed decisions based on predictive models.",
    features: [
      "Predictive forecasting",
      "Natural language queries",
      "Anomaly detection",
      "Custom dashboards",
      "Automated reports",
    ],
    technologies: ["React", "Python", "Snowflake", "GPT-4", "Tableau"],
    year: "2023",
    client: "Enterprise Solutions Co.",
  },
]

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug)
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioItems.map((item) => item.slug)
}
