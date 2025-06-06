"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "social-media", label: "Social Media" },
    { id: "influencer", label: "Influencer Marketing" },
    { id: "performance", label: "Performance Marketing" },
    { id: "content", label: "Content Strategy" },
    { id: "trends", label: "Industry Trends" },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Crafting Captivating Headlines: Your awesome post title goes here",
      excerpt: "Engaging Introductions: Capturing Your Audience's Interest The initial impression your blog post makes is crucial, and that's where your introduction […]",
      image: "/placeholder.svg?height=600&width=800&text=Captivating+Headlines",
      category: "content",
      date: "March 7, 2025",
      readTime: "5 min read",
      author: "admin",
      featured: false,
      content: `Engaging Introductions: Capturing Your Audience's Interest\nThe initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.\n\nCrafting Informative and Cohesive Body Content\nWithin the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.\n\nPowerful Closures: Leaving a Lasting Impression\nConcluding your blog post isn't just about wrapping things up - it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.`
    },
    {
      id: 2,
      title: "The Art of Drawing Readers In: Your attractive post title goes here",
      excerpt: "Engaging Introductions: Capturing Your Audience's Interest The initial impression your blog post makes is crucial, and that's where your introduction",
      image: "/placeholder.svg?height=600&width=800&text=Drawing+Readers+In",
      category: "content",
      date: "March 7, 2025",
      readTime: "5 min read",
      author: "admin",
      featured: false,
      content: `Engaging Introductions: Capturing Your Audience's Interest\nThe initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.\n\nCrafting Informative and Cohesive Body Content\nWithin the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.\n\nPowerful Closures: Leaving a Lasting Impression\nConcluding your blog post isn't just about wrapping things up - it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.`
    },
    {
      id: 3,
      title: "Mastering the First Impression: Your intriguing post title goes here",
      excerpt: "Engaging Introductions: Capturing Your Audience's Interest The initial impression your blog post makes is crucial, and that's where your introduction",
      image: "/placeholder.svg?height=600&width=800&text=First+Impression",
      category: "content",
      date: "March 7, 2025",
      readTime: "5 min read",
      author: "admin",
      featured: false,
      content: `Engaging Introductions: Capturing Your Audience's Interest\nThe initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.\n\nCrafting Informative and Cohesive Body Content\nWithin the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.\n\nPowerful Closures: Leaving a Lasting Impression\nConcluding your blog post isn't just about wrapping things up - it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.`
    },
    {
      id: 4,
      title: "Hello world!",
      excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
      image: "/placeholder.svg?height=600&width=800&text=Hello+World",
      category: "content",
      date: "November 26, 2023",
      readTime: "2 min read",
      author: "Editorial Team",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "all" || post.category === activeCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))

  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2)

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
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-[#2A4466] via-[#2A4466]/90 to-[#2A4466]/80 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Marketing Insights & Trends
            </h1>
            <p className="mb-8 text-lg text-[#2A4466] md:text-xl">
              Stay ahead of the curve with our latest marketing insights, tips, and industry trends.
            </p>

            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search className="h-5 w-5 text-[#2A4466]/60" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full border-[#2A4466]/20 bg-white/80 pl-10 text-[#2A4466] placeholder:text-[#2A4466]/60 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold text-[#2A4466] md:text-3xl">Featured Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-[#2A4466]/10"
                >
                  <div className="relative h-60 overflow-hidden md:h-72">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A4466]/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <Badge className="mb-2 bg-[#2A4466] text-white">Featured</Badge>
                      <h3 className="mb-2 text-2xl font-bold text-white">{post.title}</h3>
                      <div className="flex items-center space-x-4 text-xs text-white/80">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-[#2A4466]/80">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full bg-[#2A4466]/10">
                          <User className="absolute inset-0 m-auto h-5 w-5 text-[#2A4466]" />
                        </div>
                        <span className="text-sm font-medium text-[#2A4466]">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="group inline-flex items-center text-sm font-medium text-[#2A4466] transition-colors hover:text-[#2A4466]/80"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="border-y border-[#2A4466]/10 bg-[#F5F5F5] py-4">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Tag className="h-5 w-5 flex-shrink-0 text-[#2A4466]" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#2A4466] to-[#2A4466]/90"
                    : "border-[#2A4466]/20 text-[#2A4466] hover:bg-[#2A4466]/10",
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#2A4466] md:text-3xl">All Articles</h2>
            <div className="text-sm text-[#2A4466]/60">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.id} variants={item} className="group">
                  <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-[#2A4466]/10">
                    <div className="relative h-48 overflow-hidden md:h-56">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A4466]/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge
                          className={cn(
                            "bg-[#2A4466] text-white",
                          )}
                        >
                          {categories.find((c) => c.id === post.category)?.label}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4 flex items-center space-x-4 text-xs text-[#2A4466]/60">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-[#2A4466] transition-colors group-hover:text-[#2A4466]/80">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-[#2A4466]/80">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full bg-[#2A4466]/10">
                            <User className="absolute inset-0 m-auto h-5 w-5 text-[#2A4466]" />
                          </div>
                          <span className="text-sm font-medium text-[#2A4466]">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="group inline-flex items-center text-sm font-medium text-[#2A4466] transition-colors hover:text-[#2A4466]/80"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="my-20 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2A4466]/10">
                <Search className="h-10 w-10 text-[#2A4466]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2A4466]">No articles found</h3>
              <p className="mb-6 text-[#2A4466]/80">
                We couldn't find any articles matching your search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
                className="bg-[#2A4466] text-white hover:bg-[#2A4466]/90"
              >
                Reset Filters
              </Button>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full border-[#2A4466] px-8 text-[#2A4466] hover:bg-[#2A4466]/10"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] py-20 text-[#2A4466]">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#2A4466]/10 bg-white/80 p-8 backdrop-blur-sm md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2A4466] md:text-4xl">Stay Updated with Marketing Trends</h2>
              <p className="mb-8 text-lg text-[#2A4466]/80">
                Subscribe to our newsletter to receive the latest marketing insights and trends directly to your inbox.
              </p>

              <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-[#2A4466]/20 bg-white/80 text-[#2A4466] placeholder:text-[#2A4466]/60"
                  required
                />
                <Button type="submit" className="rounded-full bg-[#2A4466] px-6 py-2 text-white hover:bg-[#2A4466]/90">
                  Subscribe
                </Button>
              </form>
              <p className="mt-4 text-sm text-[#2A4466]/70">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
