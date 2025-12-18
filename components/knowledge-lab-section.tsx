import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Droplet, ThermometerSun, Clock } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Grind Size Science",
    description: "How particle distribution affects extraction and flavor.",
    icon: BookOpen,
    readTime: "8 min",
    slug: "grind-size-science",
  },
  {
    title: "Water Chemistry",
    description: "TDS, hardness, and buffer capacity explained.",
    icon: Droplet,
    readTime: "6 min",
    slug: "water-chemistry",
  },
  {
    title: "Temperature Curves",
    description: "The relationship between heat and extraction.",
    icon: ThermometerSun,
    readTime: "7 min",
    slug: "temperature-curves",
  },
  {
    title: "Bloom Time Explained",
    description: "Why the first 30 seconds matter most.",
    icon: Clock,
    readTime: "5 min",
    slug: "bloom-time-explained",
  },
]

export function KnowledgeLabSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--espresso-black)] via-[var(--deep-plum)]/10 to-[var(--espresso-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
            CoffeeMyx Lab
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            Coffee <span className="text-[var(--electric-ember)]">Knowledge</span>
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-2xl mx-auto text-pretty">
            Deep dives into the science and art of brewing exceptional coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => {
            const Icon = article.icon
            return (
              <Card
                key={article.title}
                className="group bg-[var(--card)] border-[var(--copper-gold)]/20 hover:border-[var(--copper-gold)] transition-all duration-500 p-6 cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[var(--copper-gold)]/20 to-[var(--electric-ember)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[var(--copper-gold)]" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-[var(--copper-gold)] transition-colors">
                  {article.title}
                </h3>

                <p className="text-[var(--cream-foam)]/70 mb-4 leading-relaxed">{article.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--copper-gold)]/20">
                  <span className="text-sm text-[var(--cream-foam)]/50">{article.readTime} read</span>
                  <Link href={`/knowledge/${article.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[var(--copper-gold)] hover:text-[var(--cream-foam)] p-0"
                    >
                      Read →
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
