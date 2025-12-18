import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

export default function BloomTimeExplained() {
  return (
    <div className="min-h-screen bg-[var(--espresso-black)] text-[var(--cream-foam)]">
      <Header />

      <article className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Link href="/knowledge">
            <Button variant="ghost" className="mb-8 text-[var(--copper-gold)] hover:text-[var(--cream-foam)]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Knowledge Lab
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--copper-gold)]/20 to-[var(--electric-ember)]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[var(--copper-gold)]" />
              </div>
              <span className="text-[var(--copper-gold)] uppercase tracking-widest text-sm font-semibold">
                5 min read
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
              Bloom Time <span className="text-[var(--electric-ember)]">Explained</span>
            </h1>
            <p className="text-xl text-[var(--cream-foam)]/70 text-pretty">
              Why the first 30 seconds matter most in your brew.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              The bloom phase is the foundation of a great pour-over coffee. These critical first 30-45 seconds set the
              stage for everything that follows, and understanding the bloom can dramatically improve your coffee.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">What is the Bloom?</h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              When hot water first contacts freshly ground coffee, it causes trapped CO2 gas to rapidly escape. This
              creates the characteristic bubbling and expansion you see at the start of brewing. This is the bloom.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Coffee releases CO2 for several days after roasting. Fresher coffee blooms more dramatically because it
              contains more trapped gas. This is why you'll see a vigorous bloom with coffee roasted 3-14 days ago, but
              little to no bloom with coffee roasted months ago.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">Why Blooming Matters</h2>
            <div className="bg-[var(--card)] border border-[var(--copper-gold)]/20 rounded-lg p-6 mb-6">
              <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-4">
                If you don't allow coffee to bloom properly, CO2 can interfere with extraction in two ways:
              </p>
              <ul className="space-y-3 list-disc list-inside text-[var(--cream-foam)]/80">
                <li>CO2 creates pressure that prevents water from fully saturating coffee particles</li>
                <li>The gas creates channels in the coffee bed, leading to uneven extraction</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              The Perfect Bloom Technique
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Start by pouring 2-3 times the weight of your coffee grounds in water. For example, if you're brewing 20g
              of coffee, pour 40-60g of water during the bloom.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              Pour gently in a spiral pattern, ensuring all grounds are evenly saturated. Then wait 30-45 seconds before
              continuing your pour. You should see vigorous bubbling and expansion during this time.
            </p>

            <h2 className="font-serif text-3xl font-bold text-[var(--copper-gold)] mt-12 mb-6">
              Bloom as a Freshness Indicator
            </h2>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              The vigor of your bloom is a reliable indicator of coffee freshness. A dramatic, vigorous bloom indicates
              fresh coffee with plenty of retained gases and aromatic compounds.
            </p>
            <p className="text-[var(--cream-foam)]/80 leading-relaxed mb-6">
              If you see little to no bloom, your coffee may be stale. While you can still brew it, the flavors will be
              muted compared to fresher coffee. This is why buying from roasters who date their bags is so important.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
