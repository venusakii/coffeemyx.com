import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ThermometerSun } from "lucide-react"

export default function TemperatureCurves() {
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
                <ThermometerSun className="w-6 h-6 text-[var(--copper-gold)]" />
              </div>
              <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
                7 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
              Temperature <span className="text-[var(--electric-ember)]">Curves</span>
            </h1>
            <p className="text-xl text-[var(--cream-foam)]/70 text-pretty">
              The relationship between heat and extraction in coffee brewing.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Temperature is a powerful variable in coffee extraction. Understanding how heat affects solubility and
              extraction kinetics can help you dial in the perfect cup for any coffee bean.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              The Science of Temperature
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Higher temperatures increase the kinetic energy of water molecules, allowing them to extract compounds
              from coffee more quickly and efficiently. However, temperature also affects which compounds are extracted.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Different flavor compounds have different solubility thresholds. Acids extract at lower temperatures,
              while sugars and oils require higher heat. This is why temperature control is crucial for flavor balance.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Optimal Temperature Ranges
            </h2>
            <div className="bg-[var(--card)] border border-[var(--copper-gold)]/20 rounded-lg p-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--electric-ember)] font-bold">Light Roasts:</span>
                  <span className="text-[var(--cream-foam)]/80">
                    200-205°F (93-96°C) to extract delicate flavors and bright acidity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--electric-ember)] font-bold">Medium Roasts:</span>
                  <span className="text-[var(--cream-foam)]/80">195-200°F (90-93°C) for balanced extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--electric-ember)] font-bold">Dark Roasts:</span>
                  <span className="text-[var(--cream-foam)]/80">
                    185-195°F (85-90°C) to avoid over-extraction and bitterness
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Temperature Stability
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Maintaining consistent temperature throughout the brew is just as important as the starting temperature.
              Temperature drops of even 5-10°F can significantly impact extraction and flavor consistency.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Pre-heating your brewing equipment helps maintain temperature stability. Rinsing your filter with hot
              water not only removes paper taste but also warms the brewer, reducing heat loss during extraction.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Experimenting with Temperature
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Try brewing the same coffee at different temperatures to understand its flavor profile. Start at 200°F and
              adjust in 5°F increments. Keep detailed notes on acidity, sweetness, body, and aftertaste at each
              temperature.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              A simple digital thermometer is an invaluable tool for temperature experimentation. Variable temperature
              kettles with precise controls make consistent brewing much easier.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
