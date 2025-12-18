"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const brewMethods = [
  {
    name: "V60",
    color: "from-[#C89B3C] to-[#FF6A2A]",
    grindSize: "Medium-Fine",
    description: "Clean, bright, and nuanced.",
    image: "/hario-v60-pour-over-coffee-dripper-elegant-shot.jpg",
    slug: "v60",
  },
  {
    name: "Chemex",
    color: "from-[#3A2417] to-[#C89B3C]",
    grindSize: "Medium-Coarse",
    description: "Rich body with clarity.",
    image: "/chemex-coffee-maker-with-wooden-collar-elegant-sho.jpg",
    slug: "chemex",
  },
  {
    name: "Kalita Wave",
    color: "from-[#FF6A2A] to-[#3C1F3F]",
    grindSize: "Medium",
    description: "Balanced and forgiving.",
    image: "/kalita-wave-coffee-dripper-flat-bottom-elegant-sho.jpg",
    slug: "kalita-wave",
  },
  {
    name: "Origami",
    color: "from-[#3C1F3F] to-[#C89B3C]",
    grindSize: "Medium-Fine",
    description: "Versatile and precise.",
    image: "/origami-dripper-ceramic-geometric-elegant-shot.jpg",
    slug: "origami",
  },
  {
    name: "Cold Brew Lab",
    color: "from-[#0B0B0C] to-[#3A2417]",
    grindSize: "Extra Coarse",
    description: "Smooth and concentrated.",
    image: "/cold-brew-coffee-tower-laboratory-equipment-elegan.jpg",
    slug: "cold-brew-lab",
  },
]

export function BrewMethodsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--espresso-black)] via-[var(--roasted-brown)]/20 to-[var(--espresso-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">
            Choose Your <span className="text-[var(--copper-gold)]">Ritual</span>
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-2xl mx-auto text-pretty">
            Every brewing method tells a different story. Find yours.
          </p>
        </div>

        {/* Horizontal scroll gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {brewMethods.map((method) => (
            <Card
              key={method.name}
              className="flex-shrink-0 w-80 snap-center bg-[var(--card)] border-[var(--copper-gold)]/20 hover:border-[var(--copper-gold)] transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${method.color} relative overflow-hidden`}>
                <img
                  src={method.image || "/placeholder.svg"}
                  alt={method.name}
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-3xl font-bold mb-2">{method.name}</h3>
                <p className="text-[var(--cream-foam)]/70 mb-4">{method.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--copper-gold)]/20">
                  <span className="text-sm text-[var(--copper-gold)]">Grind: {method.grindSize}</span>
                  <Link href={`/brew-methods/${method.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[var(--copper-gold)] hover:text-[var(--cream-foam)]"
                    >
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
