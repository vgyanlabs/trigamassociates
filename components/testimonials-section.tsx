"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Marketing Director, TechFlow",
      avatar: "/images/avatar-1.jpg",
      rating: 5,
      text: "Trigam Associates has truly transformed our brand's presence! Their creative strategies, fast execution, and ROI-driven approach have made a significant impact. A team that understands marketing like no other!",
      color: "bg-blue-50 dark:bg-blue-900/20",
      accent: "border-blue-200 dark:border-blue-700",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "CEO, Brew House Coffee",
      avatar: "/images/avatar-2.jpg",
      rating: 5,
      text: "Trigam Associates has been a game-changer for our coffee chain! Their innovative marketing strategies, quick execution, and data-driven approach have helped us connect with the right audience and elevate our brand. Highly recommended!",
      color: "bg-purple-50 dark:bg-purple-900/20",
      accent: "border-purple-200 dark:border-purple-700",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Founder, Nexus Apparel",
      avatar: "/images/avatar-3.jpg",
      rating: 5,
      text: "Working with Trigam has been the best decision for our e-commerce business. Their performance marketing expertise has doubled our conversion rates and significantly reduced our customer acquisition costs. They're truly partners in our growth!",
      color: "bg-teal-50 dark:bg-teal-900/20",
      accent: "border-teal-200 dark:border-teal-700",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="overflow-hidden bg-white py-20 dark:bg-gray-900 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-[#2A4466] px-4 py-2 text-sm text-white">
            <Quote className="mr-2 h-4 w-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">What Our Clients Say – Real Results, Real Success!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Trusted by top brands, our results speak louder than words
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                  "rounded-2xl border-2 p-8 md:p-12",
                  testimonials[currentIndex].color,
                  testimonials[currentIndex].accent,
                )}
              >
                <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-800">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=${testimonials[currentIndex].name.charAt(0)}`}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="mt-4 text-center font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].position}
                    </p>
                    <div className="mt-2 flex text-amber-400">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="relative">
                      <Quote className="absolute -left-4 -top-4 h-12 w-12 text-gray-200 dark:text-gray-700" />
                      <p className="relative text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-end">
                      <div className="h-1 flex-grow rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-1 rounded-full bg-gradient-to-r from-purple-600 to-teal-500"
                          style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                        ></div>
                      </div>
                      <p className="ml-4 text-sm font-medium">
                        {currentIndex + 1}/{testimonials.length}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
