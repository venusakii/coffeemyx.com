import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alexander Chen",
    role: "Coffee Enthusiast",
    location: "San Francisco, CA",
    quote:
      "CoffeeMyx transformed my morning ritual. Every piece of equipment they curate is thoughtfully chosen. The attention to detail is unmatched.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Sofia Martinez",
    role: "Home Barista",
    location: "Austin, TX",
    quote:
      "I've tried many coffee suppliers, but CoffeeMyx stands apart. The freshness of their beans and the precision of their equipment create the perfect cup every time.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "James Porter",
    role: "Coffee Professional",
    location: "Seattle, WA",
    quote:
      "As someone who's worked in coffee for 15 years, I can confidently say CoffeeMyx understands the craft. Their selection is museum-worthy.",
    rating: 5,
    image: "/professional-man-coffee-expert.jpg",
  },
  {
    name: "Emma Larsson",
    role: "Design Consultant",
    location: "New York, NY",
    quote:
      "The aesthetic and functionality merge perfectly. CoffeeMyx doesn't just sell coffee equipment—they sell an experience, a lifestyle.",
    rating: 5,
    image: "/professional-woman-designer.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--espresso-black)] via-[var(--roasted-brown)]/20 to-[var(--espresso-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
            Community Voices
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance">
            What Our <span className="text-[var(--copper-gold)]">Artisans</span> Say
          </h2>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-2xl mx-auto text-pretty">
            Join thousands of coffee lovers who've elevated their brewing ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#1a1a1c] to-[var(--espresso-black)] border-[var(--copper-gold)]/20 hover:border-[var(--copper-gold)]/60 transition-all duration-500 p-8"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--copper-gold)] text-[var(--copper-gold)]" />
                ))}
              </div>

              <blockquote className="text-lg text-[var(--cream-foam)]/90 mb-8 leading-relaxed font-serif italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--copper-gold)]/30"
                />
                <div>
                  <p className="font-bold text-[var(--cream-foam)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--cream-foam)]/60">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
