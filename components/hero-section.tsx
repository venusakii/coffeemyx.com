"use client"

import { Button } from "@/components/ui/button"
import { Coffee, Beaker } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-plum-black opacity-80" />

      {/* Animated video placeholder */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/macro-shot-of-water-blooming-coffee-grounds-with-s.jpg"
          alt=""
          className="w-full h-full object-cover animate-pulse-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            Designed for Those Who <span className="text-[var(--copper-gold)]">Brew With Intention</span>.
          </h1>

          <p className="text-xl md:text-2xl text-[var(--cream-foam)]/80 mb-10 leading-relaxed text-pretty">
            High-end pour-over tools, artisan grinders, and roasters for modern coffee rituals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)] font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => router.push("/equipment")}
            >
              <Coffee className="mr-2 h-5 w-5" />
              Explore the Collection
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[var(--copper-gold)] text-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/10 font-semibold text-lg px-8 py-6 transition-all hover:scale-105 bg-transparent"
              onClick={() => router.push("/brew-methods")}
            >
              <Beaker className="mr-2 h-5 w-5" />
              Discover Brew Methods
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--copper-gold)] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[var(--copper-gold)] rounded-full" />
        </div>
      </div>
    </section>
  )
}
