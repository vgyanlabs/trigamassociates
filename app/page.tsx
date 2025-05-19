"use client"

import { useEffect, useState } from "react"
import { ChevronUp} from "lucide-react"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import CallToActionSection from "@/components/call-to-action-section"
import BlogSection from "@/components/blog-section"
import ClientLogos from "@/components/client-logos"
import { useInView } from "react-intersection-observer"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import GrowthPartner from "@/components/growth-partner"
import Footer from "@/components/Footer"

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
      <HeroSection heroRef={heroRef} />
      <StatsSection />
      <ClientLogos />
      <ServicesSection />
      <GrowthPartner />
      <TestimonialsSection />
      <CallToActionSection />
      <BlogSection />
      <Footer />

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
