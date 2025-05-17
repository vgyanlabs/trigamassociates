"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { blogPosts as allPosts } from "../page"

export default function BlogPostPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const id = Number(params.id)

  // Blog posts data (copy from main blog page)
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
      content: `Engaging Introductions: Capturing Your Audience's Interest\nThe initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.\n\nCrafting Informative and Cohesive Body Content\nWithin the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.\n\nPowerful Closures: Leaving a Lasting Impression\nConcluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.`
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
      content: `Engaging Introductions: Capturing Your Audience's Interest\nThe initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.\n\nCrafting Informative and Cohesive Body Content\nWithin the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.\n\nPowerful Closures: Leaving a Lasting Impression\nConcluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.`
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
      content: `Engaging Introductions: Capturing Your Audience's Interest\nThe initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.\n\nCrafting Informative and Cohesive Body Content\nWithin the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.\n\nPowerful Closures: Leaving a Lasting Impression\nConcluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.`
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
      content: `Welcome to WordPress. This is your first post. Edit or delete it, then start writing!`
    },
  ]

  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">404 - Post Not Found</h1>
        <p className="mb-8 text-gray-500">Sorry, the blog post you are looking for does not exist.</p>
        <Link href="/blog" className="inline-flex items-center text-teal-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <main className="flex-1">
      <div className="container py-16 max-w-3xl mx-auto">
        <Link href="/blog" className="mb-8 inline-flex items-center text-teal-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <div className="mb-6 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
        <article className="prose prose-lg dark:prose-invert">
          {post.content.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </div>
    </main>
  )
} 