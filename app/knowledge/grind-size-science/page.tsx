import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

export default function GrindSizeScience() {
  return (
    <div className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)]">
      <Header />

      <article className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Link href="/knowledge">
            <Button variant="ghost" className="mb-8 text-[var(--copper-gold)] hover:text-[var(--cream-foam)]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Knowledge Lab
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--copper-gold)]/20 to-[var(--electric-ember)]/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[var(--copper-gold)]" />
              </div>
              <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
                8 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
              Grind Size <span className="text-[var(--electric-ember)]">Science</span>
            </h1>
            <p className="text-xl text-[var(--cream-foam)]/70 text-pretty">
              How particle distribution affects extraction and flavor in your coffee.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              The grind size of your coffee beans is one of the most critical variables in brewing exceptional coffee.
              Understanding how particle distribution affects extraction can transform your daily brew from mediocre to
              extraordinary.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Understanding Particle Distribution
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              When you grind coffee, you create particles of varying sizes. Even the best grinders produce a
              distribution of particle sizes, not uniform particles. This distribution dramatically affects how water
              extracts compounds from your coffee.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Smaller particles have more surface area relative to their volume, leading to faster extraction. Larger
              particles extract more slowly. The key is finding the right balance for your brewing method.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Grind Size by Brewing Method
            </h2>
            <div className="bg-[var(--card)] border border-[var(--copper-gold)]/20 rounded-lg p-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--electric-ember)] font-bold">Espresso:</span>
                  <span className="text-[var(--cream-foam)]/80">
                    Fine grind (200-300 microns) for 25-30 second extraction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--electric-ember)] font-bold">Pour Over:</span>
                  <span className="text-[var(--cream-foam)]/80">
                    Medium grind (500-800 microns) for 2.5-3.5 minute brew
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--electric-ember)] font-bold">French Press:</span>
                  <span className="text-[var(--cream-foam)]/80">
                    Coarse grind (700-1000 microns) for 4-5 minute steep
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">The Impact on Flavor</h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Grind size directly affects extraction rate and, consequently, flavor. Too fine, and you risk
              over-extraction, resulting in bitter, astringent coffee. Too coarse, and you'll get under-extraction,
              leading to sour, weak coffee.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              The ideal extraction yields a balanced cup where sweetness, acidity, and body harmonize. This typically
              occurs between 18-22% extraction yield, which is heavily influenced by your grind size.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Choosing the Right Grinder
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Burr grinders produce more consistent particle sizes than blade grinders. Flat burrs create a bimodal
              distribution with distinct peaks, while conical burrs produce a broader distribution. Each has its
              advantages depending on your brewing method and taste preferences.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
