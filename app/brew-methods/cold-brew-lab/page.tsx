import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ColdBrewLabPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)] pt-24">
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0C] to-[#3A2417] opacity-20" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
                  Cold Brew <span className="text-[var(--copper-gold)]">Lab</span>
                </h1>
                <p className="text-2xl text-[var(--cream-foam)]/80 mb-6">Smooth and concentrated.</p>
                <p className="text-lg text-[var(--cream-foam)]/70 mb-8 leading-relaxed">
                  The cold brew tower system uses slow-drip extraction over 8-12 hours to create a remarkably smooth,
                  low-acid concentrate. This method produces a sweet, complex coffee that's perfect for iced drinks and
                  creative coffee cocktails.
                </p>
                <div className="flex gap-4">
                  <Link href="/equipment">
                    <Button
                      size="lg"
                      className="bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)]"
                    >
                      Shop Cold Brew Systems
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/cold-brew-coffee-tower-laboratory-equipment-elegan.jpg"
                  alt="Cold Brew Lab"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
              The Perfect <span className="text-[var(--copper-gold)]">Cold Brew Recipe</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Ratio</h3>
                <p className="text-3xl font-bold mb-2">1:10</p>
                <p className="text-[var(--cream-foam)]/70">Creates concentrated brew</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Grind Size</h3>
                <p className="text-3xl font-bold mb-2">Extra Coarse</p>
                <p className="text-[var(--cream-foam)]/70">Like coarse pepper</p>
              </Card>
              <Card className="bg-[var(--card)] border-[var(--copper-gold)]/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Brew Time</h3>
                <p className="text-3xl font-bold mb-2">8-12 hrs</p>
                <p className="text-[var(--cream-foam)]/70">Slow drip extraction</p>
              </Card>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-3xl font-bold mb-8">Brewing Steps</h3>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Prepare the System</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Rinse all components with cold water. Add 100g extra-coarse ground coffee to the brewing chamber.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Add Ice Water</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Fill the top chamber with 1 liter of ice water. The cold temperature extracts smoothly without
                    bitterness.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Adjust Drip Rate</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Set the drip valve to 1 drop per second. This slow extraction is key to the smooth flavor profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--copper-gold)] flex items-center justify-center font-bold text-[var(--espresso-black)]">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Wait and Enjoy</h4>
                  <p className="text-[var(--cream-foam)]/70">
                    Let the system run for 8-12 hours. The resulting concentrate can be diluted 1:1 with water or milk,
                    stored for up to 2 weeks refrigerated.
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
