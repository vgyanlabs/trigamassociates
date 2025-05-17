"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp, ArrowRight, CheckCircle, TrendingUp, Target, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import CallToActionSection from "@/components/call-to-action-section"
import BlogSection from "@/components/blog-section"
import StatsCounter from "@/components/stats-counter"
import ClientLogos from "@/components/client-logos"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#0D5F72] via-[#0D5F72]/80 to-[#F95F53]"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-[#F95F53]/30 bg-[#F95F53]/10 px-4 py-2 text-sm text-white">
              <Zap className="mr-2 h-4 w-4 text-purple-300" />
              <span>Turning clicks into conversions with marketing magic</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#F95F53]/90 to-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Marketing So Good, Even Algorithms Take Notes
            </h1>

            <p className="mb-8 text-lg text-purple-100 md:text-xl">
              We deliver 360° marketing solutions integrating social media, influencer marketing, and META ads for
              impactful brand growth that drives real results.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#0D5F72] to-[#F95F53] px-8 py-6 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[#F95F53]/20"
              >
                Get Started
                <span className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-purple-300/20 bg-white/5 px-8 py-6 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <div className="relative h-[300px] w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 shadow-2xl md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <Image
                src="/images/dashboard-mockup.png"
                alt="Marketing Dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <p className="text-sm font-medium uppercase tracking-wider text-purple-300">Featured Project</p>
                <h3 className="text-xl font-bold">360° Marketing Dashboard</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-background dark:to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <StatsCounter />
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/30">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Trusted by innovative brands worldwide
          </p>
          <ClientLogos />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-[#0D5F72]/10 px-4 py-2 text-sm text-[#0D5F72] dark:bg-[#0D5F72]/30 dark:text-[#0D5F72]">
              <Target className="mr-2 h-4 w-4" />
              <span>Comprehensive Marketing Solutions</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">Our 360° Marketing Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Strategy, creativity, and performance combined to amplify your brand and maximize growth
            </p>
          </div>

          <ServicesSection />
        </div>
      </section>

      {/* Growth Partner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D5F72] via-[#0D5F72]/80 to-[#F95F53] py-20 text-white md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#F95F53]/30 bg-[#F95F53]/10 px-4 py-2 text-sm text-white">
                <TrendingUp className="mr-2 h-4 w-4 text-teal-300" />
                <span>Your Growth Partner</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                From Clicks To Conversions – We've Got Your Marketing Covered
              </h2>
              <p className="mb-8 text-lg text-teal-100">
                From strategy to execution, we master social media, influencer marketing, and META ads to deliver
                unmatched brand success.
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  "Data-driven strategies that deliver results",
                  "Creative content that captivates your audience",
                  "Performance marketing that maximizes ROI",
                  "Ongoing optimization and reporting",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-teal-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#0D5F72] to-[#F95F53] px-8 py-6 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[#F95F53]/20"
              >
                Learn Our Approach
              </Button>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Image src="/images/analytics-dashboard.png" alt="Marketing Analytics" fill className="object-cover" />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900/50">
                    <TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">+147%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-6 rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">New Customers</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">+2,834</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CallToActionSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-teal-400">
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                    T
                  </div>
                </div>
                <span className="text-xl font-medium">trigam</span>
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Your 360° marketing partner delivering strategies that drive growth and engagement.
              </p>
              <div className="mt-6 flex space-x-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-5 w-5"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-3">
                {[
                  "Social Media Marketing",
                  "Influencer Marketing",
                  "Performance Marketing",
                  "Website Development",
                  "Content Creation",
                  "SEO Optimization",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Testimonials", "Careers", "Blog", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>hello@trigamassociates.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Marketing Street, Digital City, 10001</li>
              </ul>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-teal-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/20">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-600 dark:text-gray-400 md:flex-row md:space-y-0">
              <p>© 2025 Trigam Associates. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="hover:text-teal-600 dark:hover:text-teal-400">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-teal-600 dark:hover:text-teal-400">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-teal-600 dark:hover:text-teal-400">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-teal-600 to-purple-500 p-3 text-white shadow-lg transition-all hover:shadow-purple-500/20"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}
