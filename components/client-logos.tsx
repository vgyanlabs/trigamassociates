"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    { name: "Company 1", logo: "/images/logo-1.svg" },
    { name: "Company 2", logo: "/images/logo-2.svg" },
    { name: "Company 3", logo: "/images/logo-3.svg" },
    { name: "Company 4", logo: "/images/logo-4.svg" },
    { name: "Company 5", logo: "/images/logo-5.svg" },
    { name: "Company 6", logo: "/images/logo-6.svg" },
    { name: "Company 7", logo: "/images/logo-7.svg" },
    { name: "Company 8", logo: "/images/logo-8.svg" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = containerRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPos = 0
    const scrollSpeed = 0.5
    let animationId: number

    const scroll = () => {
      scrollPos += scrollSpeed
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="border-y border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/30">
    <div className="container">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Trusted by innovative brands worldwide
      </p>
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex space-x-12 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-16 w-32 flex-shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0 md:h-20 md:w-40"
          >
            <Image
              src={`/placeholder.svg?height=80&width=160&text=${logo.name}`}
              alt={logo.name}
              width={160}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900"></div>
    </div>
    </div>
    </section>
  )
}
