import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function V60Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)] pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C] to-[#FF6A2A] opacity-20" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
                  Hario <span className="text-[var(--copper-gold)]">V60</span>
                </h1>
                <p className="text-2xl text-[var(--cream-foam)]/80 mb-6">Clean, bright, and nuanced.</p>
                <p className="text-lg text-[var(--cream-foam)]/70 mb-8 leading-relaxed">
                  The iconic cone-shaped dripper that revolutionized pour-over coffee. Its spiral ribs and large opening
                  allow for maximum water flow, creating a clean, vibrant cup that highlights the coffee's natural
                  characteristics.
                </p>
                <div className="flex gap-4">
                  <Link href="/equipment">
                    <Button
                      size="lg"
                      className="bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)]"
                    >
                      Shop V60 Equipment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/hario-v60-pour-over-coffee-dripper-elegant-shot.jpg"
                  alt="Hario V60"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brewing Guide */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
              The Perfect <span className="text-[var(--copper-gold)]">V60 Recipe</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Ratio</h3>
                <p className="text-3xl font-bold mb-2">1:16</p>
                <p className="text-[var(--cream-foam)]/70">Coffee to water ratio for optimal extraction</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Grind Size</h3>
                <p className="text-3xl font-bold mb-2">Medium-Fine</p>
                <p className="text-[var(--cream-foam)]/70">Like table salt consistency</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Water Temp</h3>
                <p className="text-3xl font-bold mb-2">93°C</p>
                <p className="text-[var(--cream-foam)]/70">Just off boil for best results</p>
              </Card>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-3xl font-bold mb-8">Brewing Steps</h3>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rinse the Filter</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Place the paper filter in the V60 and rinse with hot water to remove paper taste and preheat the
                    dripper.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Add Coffee Grounds</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Add 20g of medium-fine ground coffee. Create a flat bed by gently shaking the dripper.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Bloom Phase</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Pour 40g of water in a circular motion. Wait 30-45 seconds to allow the coffee to bloom and degas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Main Pour</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Pour the remaining 280g of water in steady, circular motions, keeping the water level consistent.
                    Total brew time: 2:30-3:00 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Enjoy</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Remove the dripper and savor the clean, vibrant flavors of your perfectly brewed V60.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-transparent to-[var(--roasted-brown)]/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
              Pro <span className="text-[var(--copper-gold)]">Tips</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--copper-gold)]">Water Flow Control</h3>
                <p className="text-[var(--cream-foam)]/70">
                  Use a gooseneck kettle for precise pouring. Pour from the center outward in circular motions, avoiding
                  the filter walls.
                </p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--copper-gold)]">Consistency is Key</h3>
                <p className="text-[var(--cream-foam)]/70">
                  Maintain a steady pour rate throughout the brew. The ideal total brew time is between 2:30 and 3:00
                  minutes.
                </p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--copper-gold)]">Grind Adjustment</h3>
                <p className="text-[var(--cream-foam)]/70">
                  If brew time is too fast (under 2:30), grind finer. If too slow (over 3:00), grind coarser.
                </p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--copper-gold)]">Water Quality</h3>
                <p className="text-[var(--cream-foam)]/70">
                  Use filtered water with balanced mineral content for optimal extraction and flavor clarity.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
