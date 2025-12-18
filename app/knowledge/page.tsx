import { Header } from "@/components/header"
import { KnowledgeLabSection } from "@/components/knowledge-lab-section"
import { Footer } from "@/components/footer"

export default function KnowledgePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <KnowledgeLabSection />
      </div>
      <Footer />
    </main>
  )
}
