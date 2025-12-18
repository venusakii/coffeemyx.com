export function RoastersSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-coffee-ember opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Storytelling */}
          <div className="space-y-8">
            <div>
              <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
                Artisan Partners
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance leading-tight">
                Small-Batch <span className="text-[var(--electric-ember)]">Roasters</span>
              </h2>
            </div>

            <p className="text-xl text-[var(--cream-foam)]/80 leading-relaxed text-pretty">
              We partner with roasters who share our obsession with quality. Each batch is traced from origin to cup,
              roasted with precision, and delivered at peak freshness.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-[var(--copper-gold)] pl-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Origin Transparency</h3>
                <p className="text-[var(--cream-foam)]/70">Know the farm, the altitude, the processing method.</p>
              </div>

              <div className="border-l-2 border-[var(--copper-gold)] pl-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Roast Curve Science</h3>
                <p className="text-[var(--cream-foam)]/70">Every roast profile is data-driven and repeatable.</p>
              </div>

              <div className="border-l-2 border-[var(--copper-gold)] pl-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Peak Freshness</h3>
                <p className="text-[var(--cream-foam)]/70">Shipped within 48 hours of roasting.</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[var(--electric-ember)] pl-6 py-4 italic text-xl text-[var(--cream-foam)]/90 font-serif">
              "Coffee should reflect the hand that made it."
            </blockquote>
          </div>

          {/* Right: Imagery */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <img
                src="/artisan-coffee-roaster-with-fresh-roasted-beans-ci.jpg"
                alt="Artisan Coffee Roaster"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso-black)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--electric-ember)] rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
