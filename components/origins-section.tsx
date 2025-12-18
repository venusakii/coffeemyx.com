import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const origins = [
  {
    region: "Ethiopian Highlands",
    country: "Ethiopia",
    altitude: "1,800 - 2,200m",
    notes: "Floral, Blueberry, Jasmine",
    description: "The birthplace of coffee. Complex, wine-like acidity with intense fruit notes.",
    image: "/ethiopian-coffee-farm-highlands-mountains.jpg",
  },
  {
    region: "Huila Region",
    country: "Colombia",
    altitude: "1,500 - 2,000m",
    notes: "Caramel, Chocolate, Citrus",
    description: "Balanced sweetness with bright acidity. Perfect for both espresso and filter.",
    image: "/colombian-coffee-plantation-mountains.jpg",
  },
  {
    region: "Antigua Valley",
    country: "Guatemala",
    altitude: "1,400 - 1,800m",
    notes: "Cocoa, Spice, Apple",
    description: "Full-bodied with distinctive smoky notes from volcanic soil.",
    image: "/guatemalan-coffee-farm-volcano-landscape.jpg",
  },
]

export function OriginsSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-coffee-ember opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            Coffee Origins
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            From <span className="text-[var(--electric-ember)]">Farm</span> to Cup
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-2xl mx-auto text-pretty">
            Each origin tells a unique story. Explore the terroir that shapes your favorite beans.
          </p>
        </div>

        <div className="space-y-8">
          {origins.map((origin, index) => (
            <Card
              key={index}
              className="group bg-gradient-to-br from-[#1a1a1c] to-[var(--espresso-black)] border-[var(--copper-gold)]/30 hover:border-[var(--copper-gold)] transition-all duration-500 overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-2 aspect-video md:aspect-square relative rounded-lg overflow-hidden">
                  <img
                    src={origin.image || "/placeholder.svg"}
                    alt={origin.region}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso-black)] via-transparent to-transparent opacity-40" />
                </div>

                <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="font-serif text-4xl font-bold mb-2">{origin.region}</h3>
                    <p className="text-[var(--copper-gold)] text-lg font-medium">{origin.country}</p>
                  </div>

                  <p className="text-lg text-[var(--cream-foam)]/80 leading-relaxed">{origin.description}</p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="text-[var(--cream-foam)]/50 text-sm uppercase tracking-wide">Altitude</span>
                      <p className="text-[var(--copper-gold)] font-bold text-lg mt-1">{origin.altitude}</p>
                    </div>
                    <div>
                      <span className="text-[var(--cream-foam)]/50 text-sm uppercase tracking-wide">Tasting Notes</span>
                      <p className="text-[var(--cream-foam)] font-medium mt-1">{origin.notes}</p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-[var(--copper-gold)] to-transparent" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
