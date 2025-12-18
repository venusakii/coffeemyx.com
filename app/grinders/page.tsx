import { Header } from "@/components/header"
import { GrindersSection } from "@/components/grinders-section"
import { Footer } from "@/components/footer"

export default function GrindersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <GrindersSection />
      </div>
      <Footer />
    </main>
  )
}
