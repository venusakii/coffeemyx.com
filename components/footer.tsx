import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[var(--copper-gold)]/20 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">CoffeeMyx</h3>
            <p className="text-[var(--cream-foam)]/60 text-sm leading-relaxed">
              High-end brewing equipment for ritual-driven coffee lovers.
            </p>
          </div>

          {/* Placeholder for additional columns */}
          {/* Placeholder for additional columns */}
          {/* Placeholder for additional columns */}
        </div>

        <div className="pt-8 border-t border-[var(--copper-gold)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--cream-foam)]/50 text-sm font-serif italic">
            CoffeeMyx.com — where precision meets passion.
          </p>

          <div className="flex gap-6 text-sm text-[var(--cream-foam)]/50">
            <Link href="/privacy" className="hover:text-[var(--copper-gold)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--copper-gold)] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[var(--copper-gold)] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
