"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CallToActionSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // In a real app, you would send this to your backend
      console.log("Email submitted:", email)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] py-20 text-[#2A4466] md:py-32">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#2A4466]/10 bg-white/90 p-8 backdrop-blur-sm md:p-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-6 text-3xl font-bold text-[#2A4466] md:text-4xl">Let's Create Something Extraordinary</h2>
                  <p className="mb-8 text-[#2A4466]/80">
                    Ready to take your brand to the next level? Partner with us for result-driven marketing strategies
                    that boost engagement, maximize ROI, and set your brand apart.
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-[#2A4466]/10 p-3">
                      <ArrowRight className="h-6 w-6 text-[#2A4466]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2A4466]">Get Started Today</p>
                      <p className="text-sm text-[#2A4466]/70">No commitments, cancel anytime</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#2A4466]">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Smith"
                          className="border-[#2A4466]/20 bg-white/80 text-[#2A4466] placeholder:text-[#2A4466]/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#2A4466]">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="border-[#2A4466]/20 bg-white/80 text-[#2A4466] placeholder:text-[#2A4466]/50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#2A4466]">
                          Company
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your Company"
                          className="border-[#2A4466]/20 bg-white/80 text-[#2A4466] placeholder:text-[#2A4466]/50"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="mt-2 w-full rounded-full bg-[#2A4466] py-6 text-lg font-medium text-white transition-all hover:bg-[#2A4466]/90 hover:shadow-lg hover:shadow-[#2A4466]/20"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Get in Touch
                      </Button>
                    </form>
                  ) : (
                    <div className="rounded-lg border border-[#2A4466]/30 bg-[#2A4466]/10 p-6 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2A4466]/20">
                        <svg className="h-8 w-8 text-[#2A4466]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-[#2A4466]">Thank You!</h3>
                      <p className="text-[#2A4466]/80">We've received your information and will be in touch shortly.</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
