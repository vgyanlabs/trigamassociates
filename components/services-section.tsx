"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, BarChart3, Users, Zap, Globe, PenTool, Search, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: "01",
      title: "Social Media Marketing",
      description:
        "We don't just post—we create waves! Our social media marketing strategies are designed to amplify your brand's voice, drive engagement, and turn followers into loyal customers. From viral content to targeted ad campaigns, we ensure your brand stays ahead of the curve.",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466]",
      image: "/images/social-media-marketing.jpg",
    },
    {
      id: "02",
      title: "Influencer Marketing",
      description:
        "Leverage the power of influence! We connect your brand with the right influencers to create authentic, high-impact collaborations that boost credibility and drive real conversions. Whether it's macro or micro-influencers, we ensure maximum ROI and engagement.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466]",
      image: "/images/influencer-marketing.jpg",
    },
    {
      id: "03",
      title: "Performance Marketing",
      description:
        "Every click counts! Our performance marketing approach focuses on data-driven strategies, optimizing ad campaigns across platforms like Google, META, and beyond. We ensure your marketing budget delivers measurable growth, higher conversions, and better ROI.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466]",
      image: "/images/performance-marketing.jpg",
    },
    {
      id: "04",
      title: "Website Development",
      description:
        "Your digital storefront matters! We create stunning, conversion-optimized websites that not only look great but perform exceptionally. From responsive design to seamless user experience, we build websites that convert visitors into customers.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466]",
      image: "/images/website-development.jpg",
    },
    {
      id: "05",
      title: "Content Creation",
      description:
        "Content that captivates! Our creative team crafts compelling content that resonates with your audience and drives engagement. From blog posts and videos to infographics and social media content, we create assets that tell your brand story effectively.",
      icon: <PenTool className="h-6 w-6" />,
      color: "from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466]",
      image: "/images/content-creation.jpg",
    },
    {
      id: "06",
      title: "SEO Optimization",
      description:
        "Get found online! Our SEO strategies improve your visibility in search results, driving organic traffic to your website. We focus on technical SEO, content optimization, and link building to help your brand climb the rankings and stay there.",
      icon: <Search className="h-6 w-6" />,
      color: "from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466]",
      image: "/images/seo-optimization.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32">
    <div className="container">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full bg-[#2A4466]/10 px-4 py-2 text-sm text-[#2A4466] dark:bg-[#2A4466]/30 dark:text-[#2A4466]">
          <Target className="mr-2 h-4 w-4" />
          <span>Comprehensive Marketing Solutions</span>
        </div>
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">Our 360° Marketing Services</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Strategy, creativity, and performance combined to amplify your brand and maximize growth
        </p>
      </div>

    <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-20">
      <div className="md:col-span-5">
        <div className="sticky top-24 space-y-6">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "flex w-full items-start rounded-xl p-6 text-left transition-all hover:scale-[1.02] duration-300",
                activeTab === index 
                  ? "bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] text-[#2A4466] shadow-xl" 
                  : "hover:bg-gray-50 dark:hover:bg-gray-900",
              )}
            >
              <div className={cn("mr-5 rounded-full bg-[#2A4466]/20 p-4", activeTab === index ? "text-[#2A4466]" : "text-[#2A4466]")}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className={cn("mt-2 text-sm leading-relaxed", activeTab === index ? "text-gray-800" : "text-gray-600 dark:text-gray-400")}>
                  {service.description.substring(0, 80)}...
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800 transform transition-all duration-500 hover:scale-[1.01]">
          <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-t-2xl">
            <Image
              src={`/placeholder.svg?height=800&width=1200&text=${services[activeTab].title}`}
              alt={services[activeTab].title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div
                className={cn(
                  "mb-3 inline-flex items-center rounded-full bg-gradient-to-br px-4 py-2 text-sm font-medium",
                  services[activeTab].color,
                )}
              >
                {services[activeTab].icon}
                <span className="ml-2">{services[activeTab].id}</span>
              </div>
              <h3 className="text-2xl font-bold md:text-3xl">{services[activeTab].title}</h3>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="mb-6 text-gray-700 dark:text-gray-300">{services[activeTab].description}</p>

            <div className="mb-8 grid gap-4 md:grid-cols-2">
              {["Strategic Planning", "Content Creation", "Campaign Management", "Performance Analytics"].map(
                (feature, i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={cn("mr-3 rounded-full bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] p-1 text-[#2A4466]", services[activeTab].color)}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ),
              )}
            </div>

            <Button
              className="bg-[#2A4466] text-white hover:bg-[#2A4466]/90 hover:shadow-lg hover:shadow-[#2A4466]/20 group flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
