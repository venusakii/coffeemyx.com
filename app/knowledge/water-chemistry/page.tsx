import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Droplet } from "lucide-react"

export default function WaterChemistry() {
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
                <Droplet className="w-6 h-6 text-[var(--copper-gold)]" />
              </div>
              <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
                6 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
              Water <span className="text-[var(--electric-ember)]">Chemistry</span>
            </h1>
            <p className="text-xl text-[var(--cream-foam)]/70 text-pretty">
              TDS, hardness, and buffer capacity explained for optimal extraction.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Water makes up 98% of your cup of coffee, yet it's often the most overlooked variable in brewing.
              Understanding water chemistry can unlock flavors you never knew existed in your beans.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Total Dissolved Solids (TDS)
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              TDS measures all inorganic and organic substances dissolved in water, expressed in parts per million
              (ppm). The Specialty Coffee Association recommends 75-250 ppm for optimal coffee brewing.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Water that's too pure (low TDS) can actually be aggressive and over-extract coffee, creating harsh
              flavors. Water with moderate mineral content provides buffering and enhances extraction.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Hardness and Alkalinity
            </h2>
            <div className="bg-[var(--card)] border border-[var(--copper-gold)]/20 rounded-lg p-6 mb-6">
              <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-4">
                <span className="text-[var(--electric-ember)] font-bold">Hardness</span> refers to calcium and magnesium
                content. These minerals enhance coffee flavor by helping extract desirable compounds.
              </p>
              <p className="text-[var(--cream-foam)]/80 leading-relaxed">
                <span className="text-[var(--electric-ember)] font-bold">Alkalinity</span> measures bicarbonate content,
                which acts as a buffer against coffee's natural acidity. Too much alkalinity creates flat, dull coffee.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              The Ideal Water Recipe
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Many coffee professionals use a water recipe with approximately 40-70 ppm calcium hardness and 40-75 ppm
              alkalinity. This balance allows coffee's natural flavors to shine while providing enough buffering to
              prevent sourness.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              You can achieve this by mixing distilled water with minerals like Epsom salt (magnesium sulfate) and
              baking soda (sodium bicarbonate). Many commercial water solutions are also available for convenience.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">Testing Your Water</h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Simple TDS meters cost less than $20 and provide instant feedback. For comprehensive analysis, water
              testing kits can measure specific minerals and pH levels, allowing you to optimize your brew water
              precisely.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
