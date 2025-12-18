import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const equipment = [
  {
    name: "Hario V60 Ceramic",
    slug: "hario-v60-ceramic",
    origin: "Japan",
    material: "Porcelain",
    precision: "9.5/10",
    image: "/hario-v60-ceramic-white-dripper-museum-quality-pro.jpg",
  },
  {
    name: "Comandante C40",
    slug: "comandante-c40",
    origin: "Germany",
    material: "Stainless Steel",
    precision: "10/10",
    image: "/comandante-hand-grinder-premium-aluminum-museum-qu.jpg",
  },
  {
    name: "Fellow Stagg EKG",
    slug: "fellow-stagg-ekg",
    origin: "USA",
    material: "Steel & Wood",
    precision: "9.8/10",
    image: "/fellow-stagg-electric-kettle-matte-black-museum-qu.jpg",
  },
  {
    name: "Timemore Sculptor",
    slug: "timemore-sculptor",
    origin: "China",
    material: "Titanium Burrs",
    precision: "9.7/10",
    image: "/timemore-sculptor-coffee-grinder-luxury-museum-qua.jpg",
  },
  {
    name: "AeroPress Clear",
    slug: "aeropress-clear",
    origin: "USA",
    material: "Tritan Plastic",
    precision: "9.2/10",
    image: "/aeropress-clear-coffee-maker-minimalist.jpg",
  },
  {
    name: "Chemex Classic",
    slug: "chemex-classic",
    origin: "USA",
    material: "Borosilicate Glass",
    precision: "9.4/10",
    image: "/chemex-glass-coffee-maker-elegant.jpg",
  },
  {
    name: "Kalita Wave 185",
    slug: "kalita-wave-185",
    origin: "Japan",
    material: "Ceramic",
    precision: "9.6/10",
    image: "/kalita-wave-ceramic-dripper-black.jpg",
  },
  {
    name: "Acaia Pearl Scale",
    slug: "acaia-pearl-scale",
    origin: "Taiwan",
    material: "Aluminum & Glass",
    precision: "10/10",
    image: "/acaia-pearl-coffee-scale-minimal.jpg",
  },
]

export function EquipmentShowcase() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[var(--espresso-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">
            Museum-Grade <span className="text-[var(--copper-gold)]">Equipment</span>
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-2xl mx-auto text-pretty">
            Each piece is selected for its craft, precision, and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item) => (
            <Card
              key={item.name}
              className="group relative bg-gradient-to-br from-[#1a1a1c] to-[var(--espresso-black)] border-[var(--copper-gold)]/30 hover:border-[var(--copper-gold)] transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--copper-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8">
                <div className="aspect-square mb-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-[var(--roasted-brown)]/20 to-transparent">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-bold">{item.name}</h3>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[var(--cream-foam)]/50">Origin</span>
                      <p className="text-[var(--copper-gold)] font-medium">{item.origin}</p>
                    </div>
                    <div>
                      <span className="text-[var(--cream-foam)]/50">Material</span>
                      <p className="text-[var(--copper-gold)] font-medium">{item.material}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--copper-gold)]/20">
                    <div>
                      <span className="text-[var(--cream-foam)]/50 text-sm">Precision Rating</span>
                      <p className="text-[var(--copper-gold)] font-bold text-lg">{item.precision}</p>
                    </div>

                    <Link href={`/equipment/${item.slug}`}>
                      <Button
                        variant="ghost"
                        className="text-[var(--copper-gold)] hover:text-[var(--cream-foam)] hover:bg-[var(--copper-gold)]/10"
                      >
                        Enter Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
