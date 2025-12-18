import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-copper-cream opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          This Is More Than Coffee
        </h2>

        <p className="font-serif text-3xl md:text-4xl text-[var(--cream-foam)]/80 mb-12 italic text-balance">
          It's a Daily Ritual.
        </p>

        <Link href="/equipment">
          <Button
            size="lg"
            className="bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)] font-bold text-xl px-12 py-8 transition-all hover:scale-105 shadow-2xl"
          >
            <Coffee className="mr-3 h-6 w-6" />
            Build Your Brew Setup
          </Button>
        </Link>

        <p className="mt-8 text-[var(--cream-foam)]/60 text-sm">
          Curated equipment • Expert guidance • Lifetime support
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--copper-gold)] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[var(--electric-ember)] rounded-full blur-3xl opacity-10" />
    </section>
  )
}
