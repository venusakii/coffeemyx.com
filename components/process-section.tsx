import { Coffee, Droplet, FlaskConical, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Coffee,
    number: "01",
    title: "Select Your Beans",
    description:
      "Choose from our curated selection of single-origin and blended beans, each with detailed tasting notes and brewing recommendations.",
  },
  {
    icon: Droplet,
    number: "02",
    title: "Choose Your Method",
    description:
      "From pour-over to espresso, select the brewing method that matches your taste preferences and lifestyle.",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Perfect Your Recipe",
    description:
      "Follow our expert guides or experiment with ratios, temperatures, and timing to discover your perfect cup.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Experience Excellence",
    description: "Enjoy coffee that's been crafted with precision, passion, and the finest equipment available.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--roasted-brown)]/10 via-[var(--espresso-black)] to-[var(--espresso-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--electric-ember)] uppercase tracking-widest text-sm font-semibold">
            The Journey
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            Your Path to <span className="text-[var(--copper-gold)]">Perfect Coffee</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-full h-0.5 bg-gradient-to-r from-[var(--copper-gold)] to-transparent" />
                )}

                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-flex w-24 h-24 rounded-full bg-gradient-to-br from-[var(--copper-gold)] to-[var(--electric-ember)] items-center justify-center relative">
                    <Icon className="w-10 h-10 text-[var(--espresso-black)]" />
                    <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[var(--electric-ember)] flex items-center justify-center font-bold text-sm text-[var(--espresso-black)]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
                  <p className="text-[var(--cream-foam)]/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
