import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ChemexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)] pt-24">
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3A2417] to-[#C89B3C] opacity-20" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
                  <span className="text-[var(--copper-gold)]">Chemex</span>
                </h1>
                <p className="text-2xl text-[var(--cream-foam)]/80 mb-6">Rich body with clarity.</p>
                <p className="text-lg text-[var(--cream-foam)]/70 mb-8 leading-relaxed">
                  An iconic hourglass-shaped brewer that combines elegance with functionality. The thick proprietary
                  filters produce a remarkably clean cup with full body, making it perfect for showcasing high-quality
                  single-origin coffees.
                </p>
                <div className="flex gap-4">
                  <Link href="/equipment">
                    <Button
                      size="lg"
                      className="bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)]"
                    >
                      Shop Chemex
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/chemex-coffee-maker-with-wooden-collar-elegant-sho.jpg"
                  alt="Chemex"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
              The Perfect <span className="text-[var(--copper-gold)]">Chemex Recipe</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Ratio</h3>
                <p className="text-3xl font-bold mb-2">1:17</p>
                <p className="text-[var(--cream-foam)]/70">Slightly lighter for clarity</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Grind Size</h3>
                <p className="text-3xl font-bold mb-2">Medium-Coarse</p>
                <p className="text-[var(--cream-foam)]/70">Like sea salt texture</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Water Temp</h3>
                <p className="text-3xl font-bold mb-2">94°C</p>
                <p className="text-[var(--cream-foam)]/70">Slightly hotter for extraction</p>
              </Card>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-3xl font-bold mb-8">Brewing Steps</h3>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Prepare the Filter</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Unfold the Chemex filter with three layers on the spout side. Rinse thoroughly with hot water and
                    discard.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Add Coffee</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Add 42g of medium-coarse ground coffee. Level the bed for even extraction.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Bloom</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Pour 80g of water starting from the center. Allow to bloom for 45 seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Continue Pouring</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Pour remaining water in stages, keeping the slurry level constant. Total brew time: 4:00-4:30
                    minutes for 714g total water.
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
