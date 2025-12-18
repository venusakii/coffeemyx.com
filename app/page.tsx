import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrewMethodsSection } from "@/components/brew-methods-section"
import { EquipmentShowcase } from "@/components/equipment-showcase"
import { FeaturesSection } from "@/components/features-section"
import { RoastersSection } from "@/components/roasters-section"
import { OriginsSection } from "@/components/origins-section"
import { GrindersSection } from "@/components/grinders-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { KnowledgeLabSection } from "@/components/knowledge-lab-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BrewMethodsSection />
      <FeaturesSection />
      <EquipmentShowcase />
      <RoastersSection />
      <OriginsSection />
      <GrindersSection />
      <ProcessSection />
      <TestimonialsSection />
      <KnowledgeLabSection />
      <CTASection />
      <Footer />
    </main>
  )
}
