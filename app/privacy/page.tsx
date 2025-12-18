import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--espresso-black)]">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-[var(--cream-foam)]">Privacy Policy</h1>

        <div className="space-y-8 text-[var(--cream-foam)]/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Introduction</h2>
            <p>
              At CoffeeMyx, we take your privacy seriously. This Privacy Policy explains how we collect, use, and
              protect your personal information when you visit our website or purchase our products.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our products</li>
              <li>Improve our website and customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Protect against fraud and unauthorized transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. All payment information is encrypted
              using industry-standard SSL technology.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize
              content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at
              privacy@coffeemyx.com or visit our Contact page.
            </p>
          </section>

          <p className="text-sm text-[var(--cream-foam)]/50 pt-8 border-t border-[var(--copper-gold)]/20">
            Last updated: December 2024
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
