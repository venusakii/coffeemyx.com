import { Thermometer, Timer, Award, Shield, Truck, Sparkles } from "lucide-react"

const features = [
  {
    icon: Thermometer,
    title: "Temperature Precision",
    description: "Control every degree for optimal extraction. Our equipment maintains +/- 0.5°C accuracy.",
  },
  {
    icon: Timer,
    title: "Time Mastery",
    description: "Programmable timers and scales ensure repeatable results every single brew.",
  },
  {
    icon: Award,
    title: "Award-Winning Selection",
    description: "Only equipment that has earned recognition from coffee professionals worldwide.",
  },
  {
    icon: Shield,
    title: "Lifetime Support",
    description: "Every purchase comes with lifetime customer support and brewing guidance.",
  },
  {
    icon: Truck,
    title: "Fast & Fresh Delivery",
    description: "Free express shipping. Beans roasted to order and shipped within 48 hours.",
  },
  {
    icon: Sparkles,
    title: "Curated Experience",
    description: "Hand-picked by coffee experts. Each item tells a story of craft and dedication.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[var(--espresso-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--electric-ember)] uppercase tracking-widest text-sm font-semibold">
            Why CoffeeMyx
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            Precision Meets <span className="text-[var(--copper-gold)]">Passion</span>
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-3xl mx-auto text-pretty">
            We don't just sell coffee equipment. We curate experiences that transform your daily ritual into an art
            form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-lg bg-gradient-to-br from-[#1a1a1c]/50 to-transparent border border-[var(--copper-gold)]/20 hover:border-[var(--copper-gold)]/60 transition-all duration-500 hover:transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--copper-gold)] to-[var(--electric-ember)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-[var(--espresso-black)]" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-4 text-[var(--cream-foam)]">{feature.title}</h3>
                <p className="text-[var(--cream-foam)]/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
