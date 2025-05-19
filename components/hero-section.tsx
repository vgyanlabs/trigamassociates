"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export default function HeroSection({ heroRef }: any) {
  return (
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

          <h1 className="mb-6 bg-gradient-to-r from-white via-[#F95F53]/90 to-white bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-5xl">
            Marketing So Good, Even Algorithms Take Notes
          </h1>

          <p className="mb-8 md:mt-2 text-sm text-purple-100 md:text-xl">
            We deliver 360° marketing solutions integrating social media, influencer marketing, and META ads for
            impactful brand growth that drives real results.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative h-[300px] w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 shadow-2xl md:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <p className="text-sm font-medium uppercase tracking-wider text-purple-300">Featured Project</p>
              <h3 className="text-xl font-bold">360° Marketing Dashboard</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}