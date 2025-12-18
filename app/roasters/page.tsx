import { Header } from "@/components/header"
import { RoastersSection } from "@/components/roasters-section"
import { Footer } from "@/components/footer"

export default function RoastersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <RoastersSection />
      </div>
      <Footer />
    </main>
  )
}
