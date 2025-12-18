"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-[var(--espresso-black)]">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[var(--cream-foam)]">Get in Touch</h1>
          <p className="text-xl text-[var(--cream-foam)]/70 max-w-2xl mx-auto">
            Have questions about our products or need assistance? We're here to help you craft the perfect brew.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[var(--charcoal-shadow)] border border-[var(--copper-gold)]/20 rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold mb-6 text-[var(--copper-gold)]">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--cream-foam)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--espresso-black)] border border-[var(--copper-gold)]/30 rounded-lg text-[var(--cream-foam)] focus:outline-none focus:border-[var(--copper-gold)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--cream-foam)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--espresso-black)] border border-[var(--copper-gold)]/30 rounded-lg text-[var(--cream-foam)] focus:outline-none focus:border-[var(--copper-gold)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--cream-foam)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--espresso-black)] border border-[var(--copper-gold)]/30 rounded-lg text-[var(--cream-foam)] focus:outline-none focus:border-[var(--copper-gold)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--cream-foam)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--espresso-black)] border border-[var(--copper-gold)]/30 rounded-lg text-[var(--cream-foam)] focus:outline-none focus:border-[var(--copper-gold)] transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[var(--copper-gold)] hover:bg-[var(--copper-gold)]/90 text-[var(--espresso-black)] font-bold text-lg py-6 transition-all hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[var(--charcoal-shadow)] border border-[var(--copper-gold)]/20 rounded-lg p-8">
              <h2 className="font-serif text-2xl font-bold mb-6 text-[var(--copper-gold)]">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--copper-gold)]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[var(--copper-gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--cream-foam)] mb-1">Email</h3>
                    <p className="text-[var(--cream-foam)]/70">support@coffeemyx.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--copper-gold)]/10 rounded-lg">
                    <Phone className="w-6 h-6 text-[var(--copper-gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--cream-foam)] mb-1">Phone</h3>
                    <p className="text-[var(--cream-foam)]/70">+1 (941) 548-6468</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--copper-gold)]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[var(--copper-gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--cream-foam)] mb-1">Address</h3>
                    <p className="text-[var(--cream-foam)]/70">
                      3295 Medical Center Drive
                      <br />
                      Sarasota, FL 34240
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--charcoal-shadow)] border border-[var(--copper-gold)]/20 rounded-lg p-8">
              <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--copper-gold)]">Business Hours</h2>
              <div className="space-y-2 text-[var(--cream-foam)]/70">
                <p>
                  <span className="font-semibold text-[var(--cream-foam)]">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-[var(--cream-foam)]">Saturday:</span> 10:00 AM - 4:00 PM
                </p>
                <p>
                  <span className="font-semibold text-[var(--cream-foam)]">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
