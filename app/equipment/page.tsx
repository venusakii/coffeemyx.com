import { Header } from "@/components/header"
import { EquipmentShowcase } from "@/components/equipment-showcase"
import { Footer } from "@/components/footer"

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <EquipmentShowcase />
      </div>
      <Footer />
    </main>
  )
}
