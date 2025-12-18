import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--espresso-black)]">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-[var(--cream-foam)]">Terms of Service</h1>

        <div className="space-y-8 text-[var(--cream-foam)]/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Agreement to Terms</h2>
            <p>
              By accessing or using CoffeeMyx.com, you agree to be bound by these Terms of Service and all applicable
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using this
              site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Product Information</h2>
            <p>
              We strive to provide accurate product descriptions, specifications, and pricing. However, we do not
              warrant that product descriptions or other content is accurate, complete, reliable, or error-free. We
              reserve the right to correct any errors and update information at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Orders and Payment</h2>
            <p className="mb-4">By placing an order, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Pay all charges at the prices in effect when you place your order</li>
              <li>Pay applicable taxes and shipping fees</li>
              <li>Authorize us to charge your payment method</li>
            </ul>
            <p className="mt-4">
              We reserve the right to refuse or cancel any order for any reason, including product availability, errors
              in pricing, or suspected fraud.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Shipping and Delivery</h2>
            <p>
              We ship to addresses within our service areas. Shipping times are estimates and not guaranteed. Title and
              risk of loss pass to you upon delivery to the carrier. We are not responsible for delays caused by
              shipping carriers or customs processing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Returns and Refunds</h2>
            <p>
              We accept returns within 30 days of delivery for most products in their original condition. Personalized
              or custom items may not be eligible for return. Refunds will be processed to the original payment method
              within 7-10 business days of receiving the returned item.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of
              CoffeeMyx or its content suppliers and is protected by copyright and trademark laws. You may not
              reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CoffeeMyx shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of our products or website. Our total liability
              shall not exceed the amount you paid for the product.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes
              shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon
              posting. Your continued use of the website constitutes acceptance of modified terms.
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
