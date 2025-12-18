import { Button } from "@/components/ui/button"
import { Settings2 } from "lucide-react"

export function GrindersSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-[var(--espresso-black)]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            Grinders: <span className="text-[var(--copper-gold)]">Precision</span> is Everything
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-3xl mx-auto text-pretty">
            Your grinder determines everything. Particle consistency, extraction uniformity, flavor clarity—it all
            starts here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--copper-gold)] to-[var(--electric-ember)] flex items-center justify-center">
              <Settings2 className="w-12 h-12 text-[var(--espresso-black)]" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Burr Types</h3>
            <p className="text-[var(--cream-foam)]/70">
              Conical vs. flat burrs—each creates a different particle distribution.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--electric-ember)] to-[var(--deep-plum)] flex items-center justify-center">
              <span className="text-3xl font-bold text-[var(--cream-foam)]">μm</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">Micron Control</h3>
            <p className="text-[var(--cream-foam)]/70">Adjust grind size in increments as small as 10 microns.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--deep-plum)] to-[var(--copper-gold)] flex items-center justify-center">
              <span className="text-3xl font-bold text-[var(--cream-foam)]">99%</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">Consistency</h3>
            <p className="text-[var(--cream-foam)]/70">Uniform particle size for even extraction every time.</p>
          </div>
        </div>

        {/* Visual: Burr geometry animation placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-[var(--roasted-brown)]/30 to-transparent rounded-lg flex items-center justify-center border border-[var(--copper-gold)]/20 overflow-hidden">
            <img
              src="/coffee-grinder-burrs-macro-geometry-precision-engi.jpg"
              alt="Burr Geometry"
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          <div className="text-center mt-12">
            
          </div>
        </div>
      </div>
    </section>
  )
}
