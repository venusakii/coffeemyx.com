import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const equipmentData = {
  "hario-v60-ceramic": {
    name: "Hario V60 Ceramic Dripper",
    origin: "Japan",
    material: "Porcelain",
    precision: "9.5/10",
    price: "$28",
    image: "/hario-v60-ceramic-white-dripper-museum-quality-pro.jpg",
    description:
      "The iconic V60 ceramic dripper from Hario combines Japanese craftsmanship with functional design. Its 60-degree angle and spiral ribs create the perfect conditions for extraction, while the porcelain construction retains heat beautifully.",
    features: [
      "60-degree cone angle for optimal flow rate",
      "Spiral ribs promote even extraction",
      "Heat-retaining ceramic construction",
      "Dishwasher safe and durable",
      "Available in multiple colors",
      "Perfect for 1-4 cup brewing",
    ],
    specs: {
      Size: "02 (1-4 cups)",
      Weight: "340g",
      Dimensions: "11.9 x 10 x 8.2 cm",
      "Made In": "Japan",
    },
  },
  "comandante-c40": {
    name: "Comandante C40 Hand Grinder",
    origin: "Germany",
    material: "Stainless Steel",
    precision: "10/10",
    price: "$279",
    image: "/comandante-hand-grinder-premium-aluminum-museum-qu.jpg",
    description:
      "The Comandante C40 represents the pinnacle of manual coffee grinding. German engineering meets artisan craftsmanship in this precision instrument, featuring high-nitrogen stainless steel burrs that deliver unparalleled consistency.",
    features: [
      "High-nitrogen stainless steel conical burrs",
      "40mm burr diameter for fast, consistent grinding",
      "Precision-machined aluminum body",
      "Axial ball bearing system for smooth operation",
      "Adjustable grind settings from espresso to French press",
      "25-30g capacity",
    ],
    specs: {
      "Burr Material": "High-Nitrogen Stainless Steel",
      "Burr Size": "40mm",
      Capacity: "25-30g",
      Weight: "640g",
      Height: "18cm",
      "Made In": "Germany",
    },
  },
  "fellow-stagg-ekg": {
    name: "Fellow Stagg EKG Electric Kettle",
    origin: "USA",
    material: "Steel & Wood",
    precision: "9.8/10",
    price: "$195",
    image: "/fellow-stagg-electric-kettle-matte-black-museum-qu.jpg",
    description:
      "The Stagg EKG is where form meets function. This precision pour-over kettle features variable temperature control and a sleek minimalist design that looks stunning on any countertop.",
    features: [
      "Variable temperature control (135°F-212°F)",
      "Built-in brew stopwatch",
      "Precision pour spout for controlled flow",
      "1200W for quick heating",
      "Hold mode maintains temperature for 60 minutes",
      "Counterbalanced handle for ergonomic pouring",
    ],
    specs: {
      Capacity: "0.9L",
      Power: "1200W",
      "Temperature Range": "135°F-212°F / 57°C-100°C",
      Material: "Stainless Steel, Wood",
      "Cord Length": "2.5 feet",
      "Made In": "China (Designed in USA)",
    },
  },
  "timemore-sculptor": {
    name: "Timemore Sculptor 078s Grinder",
    origin: "China",
    material: "Titanium Burrs",
    precision: "9.7/10",
    price: "$699",
    image: "/timemore-sculptor-coffee-grinder-luxury-museum-qua.jpg",
    description:
      "The Sculptor 078s represents Timemore's flagship grinder, combining cutting-edge titanium burr technology with precision engineering for exceptional clarity and sweetness in every cup.",
    features: [
      "78mm titanium-coated burrs",
      "Stepless micro-adjustment system",
      "Ultra-low retention design",
      "Powerful brushless motor",
      "Premium aluminum construction",
      "Single-dose workflow optimized",
    ],
    specs: {
      "Burr Material": "Titanium-Coated Steel",
      "Burr Size": "78mm",
      Motor: "Brushless DC",
      RPM: "420",
      Retention: "<0.2g",
      "Made In": "China",
    },
  },
  "aeropress-clear": {
    name: "AeroPress Clear Coffee Maker",
    origin: "USA",
    material: "Tritan Plastic",
    precision: "9.2/10",
    price: "$45",
    image: "/aeropress-clear-coffee-maker-minimalist.jpg",
    description:
      "The AeroPress Clear brings transparency to the beloved brewing method. Made with crystal-clear Tritan plastic, watch your coffee brew while enjoying the same great taste and versatility.",
    features: [
      "Crystal-clear Tritan construction",
      "Versatile brewing (espresso-style to cold brew)",
      "Fast 1-2 minute brew time",
      "Easy cleanup with minimal waste",
      "Portable and virtually indestructible",
      "Includes 100 micro-filters",
    ],
    specs: {
      Material: "Tritan (BPA-free)",
      Capacity: "1-3 cups per pressing",
      Weight: "230g",
      Dimensions: "13 x 11.5 x 11.5 cm",
      "Filter Type": "Paper micro-filters",
      "Made In": "USA",
    },
  },
  "chemex-classic": {
    name: "Chemex Classic Series Pour-Over",
    origin: "USA",
    material: "Borosilicate Glass",
    precision: "9.4/10",
    price: "$52",
    image: "/chemex-glass-coffee-maker-elegant.jpg",
    description:
      "An icon of design, the Chemex has been brewing exceptional coffee since 1941. Its elegant hourglass shape is featured in museums worldwide, while delivering clean, bright cups every time.",
    features: [
      "Non-porous borosilicate glass",
      "Bonded paper filters for clean extraction",
      "Elegant hourglass design",
      "Heat-resistant construction",
      "Easy to clean and maintain",
      "Permanent collection at MoMA",
    ],
    specs: {
      Capacity: "6 cup (30 oz)",
      Material: "Borosilicate Glass",
      Height: "23cm",
      Diameter: "13cm",
      Weight: "510g",
      "Made In": "USA",
    },
  },
  "kalita-wave-185": {
    name: "Kalita Wave 185 Ceramic Dripper",
    origin: "Japan",
    material: "Ceramic",
    precision: "9.6/10",
    price: "$38",
    image: "/kalita-wave-ceramic-dripper-black.jpg",
    description:
      "The Kalita Wave's flat-bottom design and three-hole drainage create even extraction and consistent results. The ceramic construction adds thermal stability for professional-grade brewing.",
    features: [
      "Flat-bottom design for even extraction",
      "Three drainage holes for balanced flow",
      "Wave filter design reduces channeling",
      "Ceramic heat retention",
      "Simple, forgiving technique",
      "Consistent, repeatable results",
    ],
    specs: {
      Size: "185 (3-4 cups)",
      Material: "Ceramic",
      "Filter Type": "Wave 185",
      Dimensions: "14 x 12 x 9 cm",
      Weight: "380g",
      "Made In": "Japan",
    },
  },
  "acaia-pearl-scale": {
    name: "Acaia Pearl Coffee Scale",
    origin: "Taiwan",
    material: "Aluminum & Glass",
    precision: "10/10",
    price: "$229",
    image: "/acaia-pearl-coffee-scale-minimal.jpg",
    description:
      "The Acaia Pearl redefines coffee precision. With 0.1g accuracy, ultra-fast response time, and built-in brew modes, this scale is the professional's choice for perfect extraction every time.",
    features: [
      "0.1g precision accuracy",
      "Ultra-fast 20ms response time",
      "Built-in auto-tare function",
      "Multiple brew modes (pour-over, espresso)",
      "Bluetooth connectivity with app",
      "Water-resistant design",
    ],
    specs: {
      Accuracy: "±0.1g",
      Capacity: "2000g",
      "Response Time": "20ms",
      "Battery Life": "20-30 hours",
      Dimensions: "16 x 16 x 3.2 cm",
      "Made In": "Taiwan",
    },
  },
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = equipmentData[slug as keyof typeof equipmentData]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)]">
      <Header />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link href="/equipment">
            <Button variant="ghost" className="mb-8 text-[var(--copper-gold)] hover:text-[var(--cream-foam)]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Equipment
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--roasted-brown)]/20 to-transparent border border-[var(--copper-gold)]/30">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute top-6 right-6 bg-[var(--copper-gold)] text-[var(--espresso-black)] px-4 py-2 rounded-full font-bold flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                {product.precision}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[var(--copper-gold)] uppercase tracking-wider text-sm mb-2">{product.origin}</p>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">{product.name}</h1>
                
                <p className="text-lg text-[var(--cream-foam)]/80 leading-relaxed text-pretty">{product.description}</p>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)] font-semibold text-lg py-6"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="border-t border-[var(--copper-gold)]/20 pt-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--copper-gold)] mt-2 shrink-0" />
                      <span className="text-[var(--cream-foam)]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="border-t border-[var(--copper-gold)]/20 pt-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-[var(--cream-foam)]/50 text-sm mb-1">{key}</p>
                      <p className="text-[var(--copper-gold)] font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
