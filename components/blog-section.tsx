"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function BlogSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "7 Social Media Trends That Will Dominate 2025",
      excerpt:
        "Discover the emerging social media trends that will shape marketing strategies in 2025 and how your brand can stay ahead of the curve.",
      image: "/images/blog-1.jpg",
      category: "Social Media",
      date: "May 10, 2025",
      readTime: "5 min read",
      author: "Alex Morgan",
    },
    {
      id: 2,
      title: "The Art Of Creating Viral Content That Converts",
      excerpt:
        "Learn the science and art behind creating content that not only goes viral but also drives meaningful conversions for your business.",
      image: "/images/blog-2.jpg",
      category: "Content Marketing",
      date: "April 28, 2025",
      readTime: "7 min read",
      author: "Sophia Chen",
    },
    {
      id: 3,
      title: "How AI Is Revolutionizing Digital Marketing",
      excerpt:
        "Explore how artificial intelligence is transforming digital marketing strategies and how businesses can leverage AI to gain a competitive edge.",
      image: "/images/blog-3.jpg",
      category: "Technology",
      date: "April 15, 2025",
      readTime: "6 min read",
      author: "James Wilson",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900/50 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-[#0D5F72]/10 px-4 py-2 text-sm text-[#0D5F72] dark:bg-[#0D5F72]/30 dark:text-[#0D5F72]">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span>Latest Insights</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Marketing Insights and Trends</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stay ahead of the curve with our latest marketing insights, tips, and industry trends
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={item}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                <div className="relative h-48 overflow-hidden md:h-56">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Blog+${post.id}`}
                    alt={post.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      hoveredIndex === index ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="rounded-full bg-[#2A4466] px-3 py-1 text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-[#0D5F72] dark:group-hover:text-[#0D5F72]">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="group inline-flex items-center text-sm font-medium text-[#0D5F72] transition-colors hover:text-[#F95F53] dark:text-[#0D5F72] dark:hover:text-[#F95F53]"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full border-[#0D5F72] px-8 text-[#0D5F72] hover:bg-[#0D5F72]/10 hover:text-[#F95F53] dark:border-[#0D5F72] dark:text-[#0D5F72] dark:hover:bg-[#0D5F72]/20 dark:hover:text-[#F95F53]"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
