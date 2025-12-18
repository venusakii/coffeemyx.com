import { Header } from "@/components/header"
import { BrewMethodsSection } from "@/components/brew-methods-section"
import { Footer } from "@/components/footer"

export default function BrewMethodsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <BrewMethodsSection />
      </div>
      <Footer />
    </main>
  )
}
