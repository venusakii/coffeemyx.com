import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function KalitaWavePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)] pt-24">
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A2A] to-[#3C1F3F] opacity-20" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
                  Kalita <span className="text-[var(--copper-gold)]">Wave</span>
                </h1>
                <p className="text-2xl text-[var(--cream-foam)]/80 mb-6">Balanced and forgiving.</p>
                <p className="text-lg text-[var(--cream-foam)]/70 mb-8 leading-relaxed">
                  The flat-bottom design with three drainage holes creates even extraction and consistent results.
                  Perfect for beginners and experts alike, the Kalita Wave is the most forgiving pour-over brewer.
                </p>
                <div className="flex gap-4">
                  <Link href="/equipment">
                    <Button
                      size="lg"
                      className="bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)]"
                    >
                      Shop Kalita Wave
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/kalita-wave-coffee-dripper-flat-bottom-elegant-sho.jpg"
                  alt="Kalita Wave"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
              The Perfect <span className="text-[var(--copper-gold)]">Kalita Recipe</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Ratio</h3>
                <p className="text-3xl font-bold mb-2">1:16</p>
                <p className="text-[var(--cream-foam)]/70">Balanced extraction</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Grind Size</h3>
                <p className="text-3xl font-bold mb-2">Medium</p>
                <p className="text-[var(--cream-foam)]/70">Granulated sugar texture</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Water Temp</h3>
                <p className="text-3xl font-bold mb-2">93°C</p>
                <p className="text-[var(--cream-foam)]/70">Optimal for consistency</p>
              </Card>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-3xl font-bold mb-8">Brewing Steps</h3>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rinse Filter</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Place wave filter in dripper and rinse with hot water. The flat bottom ensures even saturation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Add Grounds</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Add 20g of medium ground coffee. The flat bed promotes even extraction.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Bloom</h4>
                  <p className="text-[var(--cream-foam)]/70">Pour 50g water in circular motion. Wait 30 seconds.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Pour and Enjoy</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Pour remaining 270g in steady pulses. Total time: 2:30-3:00 minutes. The three-hole design prevents
                    channeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
