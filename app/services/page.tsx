"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Users, Zap, Globe, PenTool, Search, CheckCircle, Info, Lightbulb, Rocket, TrendingUp, Wrench } from "lucide-react"
import { useState, useRef } from "react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  features?: string[];
  process?: { step: string; description: string }[];
};

interface AnimatedTabBarProps {
  services: Service[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

interface CursorProps {
  position: { left: number; width: number; opacity: number };
}

export default function ServicesPage() {
  const services = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      description:
        "We don't just post—we create waves! Our social media marketing strategies are designed to amplify your brand's voice, drive engagement, and turn followers into loyal customers.",
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
      image: "/placeholder.svg?height=600&width=800&text=Social+Media+Marketing",
      features: [
        "Strategic content planning and creation",
        "Community management and engagement",
        "Paid social media advertising",
        "Performance tracking and analytics",
        "Competitor analysis and benchmarking",
        "Platform-specific optimization",
      ],
      process: [
        { step: "Discovery", description: "Understanding your brand, audience, and goals" },
        { step: "Strategy", description: "Developing a tailored social media strategy" },
        { step: "Content Creation", description: "Creating engaging, on-brand content" },
        { step: "Implementation", description: "Executing the strategy across platforms" },
        { step: "Optimization", description: "Continuous improvement based on performance data" },
      ],
    },
    {
      id: "influencer",
      title: "Influencer Marketing",
      description:
        "Leverage the power of influence! We connect your brand with the right influencers to create authentic, high-impact collaborations that boost credibility and drive real conversions.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      image: "/placeholder.svg?height=600&width=800&text=Influencer+Marketing",
      features: [
        "Influencer identification and vetting",
        "Campaign strategy and planning",
        "Relationship management",
        "Content approval and quality control",
        "Performance tracking and ROI analysis",
        "Contract negotiation and management",
      ],
      process: [
        { step: "Influencer Research", description: "Finding the perfect influencers for your brand" },
        { step: "Campaign Planning", description: "Developing campaign objectives and strategy" },
        { step: "Outreach & Negotiation", description: "Contacting influencers and finalizing partnerships" },
        { step: "Content Creation", description: "Collaborating on authentic, engaging content" },
        { step: "Measurement", description: "Tracking performance and calculating ROI" },
      ],
    },
    {
      id: "performance",
      title: "Performance Marketing",
      description:
        "Every click counts! Our performance marketing approach focuses on data-driven strategies, optimizing ad campaigns across platforms like Google, META, and beyond.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-teal-500 to-emerald-600",
      image: "/placeholder.svg?height=600&width=800&text=Performance+Marketing",
      features: [
        "PPC campaign management",
        "Conversion rate optimization",
        "A/B testing and experimentation",
        "Retargeting strategies",
        "Analytics and attribution modeling",
        "Budget optimization and allocation",
      ],
      process: [
        { step: "Audit & Analysis", description: "Reviewing current performance and opportunities" },
        { step: "Strategy Development", description: "Creating data-driven marketing strategies" },
        { step: "Campaign Setup", description: "Building optimized campaigns across platforms" },
        { step: "Optimization", description: "Continuous testing and improvement" },
        { step: "Reporting", description: "Transparent reporting on KPIs and ROI" },
      ],
    },
    {
      id: "website",
      title: "Website Development",
      description:
        "Your digital storefront matters! We create stunning, conversion-optimized websites that not only look great but perform exceptionally.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-amber-500 to-orange-600",
      image: "/placeholder.svg?height=600&width=800&text=Website+Development",
      features: [
        "Responsive web design",
        "User experience optimization",
        "E-commerce development",
        "Content management systems",
        "Website maintenance and support",
        "Performance optimization",
      ],
      process: [
        { step: "Discovery", description: "Understanding your business goals and requirements" },
        { step: "Planning", description: "Creating sitemaps and wireframes" },
        { step: "Design", description: "Developing visual designs and user interfaces" },
        { step: "Development", description: "Building the website with clean, efficient code" },
        { step: "Launch & Support", description: "Deploying and maintaining your website" },
      ],
    },
    {
      id: "content",
      title: "Content Creation",
      description:
        "Content that captivates! Our creative team crafts compelling content that resonates with your audience and drives engagement.",
      icon: <PenTool className="h-6 w-6" />,
      color: "from-rose-500 to-red-600",
      image: "/placeholder.svg?height=600&width=800&text=Content+Creation",
      features: [
        "Blog posts and articles",
        "Video production",
        "Graphic design",
        "Email marketing content",
        "Social media content",
        "Whitepapers and ebooks",
      ],
      process: [
        { step: "Content Strategy", description: "Developing a content plan aligned with your goals" },
        { step: "Research", description: "Researching topics and keywords" },
        { step: "Creation", description: "Producing high-quality, engaging content" },
        { step: "Distribution", description: "Sharing content across appropriate channels" },
        { step: "Analysis", description: "Measuring content performance and impact" },
      ],
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description:
        "Get found online! Our SEO strategies improve your visibility in search results, driving organic traffic to your website.",
      icon: <Search className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-600",
      image: "/placeholder.svg?height=600&width=800&text=SEO+Optimization",
      features: [
        "Keyword research and strategy",
        "On-page SEO optimization",
        "Technical SEO audits",
        "Content optimization",
        "Link building",
        "Local SEO",
      ],
      process: [
        { step: "SEO Audit", description: "Comprehensive analysis of your current SEO status" },
        { step: "Keyword Strategy", description: "Identifying valuable keywords for your business" },
        { step: "On-Page Optimization", description: "Optimizing website content and structure" },
        { step: "Off-Page SEO", description: "Building authority through quality backlinks" },
        { step: "Monitoring & Reporting", description: "Tracking rankings and organic traffic growth" },
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState(services[0].id)

  const processIcons = [
    <Info key="info" className="h-6 w-6 text-blue-500" />, // Discovery/Research
    <Lightbulb key="lightbulb" className="h-6 w-6 text-yellow-500" />, // Strategy/Planning
    <PenTool key="pen" className="h-6 w-6 text-pink-500" />, // Content/Design
    <Wrench key="wrench" className="h-6 w-6 text-green-500" />, // Implementation/Development
    <TrendingUp key="trend" className="h-6 w-6 text-purple-500" />, // Optimization/Analysis
    <Rocket key="rocket" className="h-6 w-6 text-orange-500" />, // Launch/Measurement
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] py-24 md:py-36">
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
            <h1 className="mb-8 bg-gradient-to-r from-[#2A4466] via-[#1A2F4A] to-[#2A4466] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Our 360° Marketing Services
            </h1>
            <p className="mb-10 text-lg text-[#2A4466] md:text-xl">
              Comprehensive marketing solutions designed to amplify your brand and maximize growth through strategy,
              creativity, and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container px-4 sm:px-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8 sm:space-y-12"
          >
            {/* Custom Animated Tab Bar */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <AnimatedTabBar
                services={services}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>

            {services.map((service, sIdx) => (
              <TabsContent key={service.id} value={service.id} className="space-y-8 sm:space-y-16">
                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-start">
                  <div className="space-y-6">
                    <div
                      className={cn(
                        "mb-4 sm:mb-6 inline-block rounded-full bg-gradient-to-br px-4 sm:px-5 py-2 text-white text-sm font-semibold shadow-md",
                        "from-[#2A4466] to-[#1A2F4A]"
                      )}
                    >
                      {service.icon}
                      <span className="ml-2">Service</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A4466]">{service.title}</h2>
                    {/* Subtitle/Tagline */}
                    <p className="text-sm sm:text-base italic text-[#1A2F4A]">{service.description.split("!")[0]}!</p>
                    <p className="text-base sm:text-lg text-[#2A4466] leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#2A4466]">Key Features</h3>
                      <ul className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle
                              className="h-5 w-5 flex-shrink-0 mt-1 text-[#2A4466]"
                            />
                            <span className="text-sm sm:text-base text-[#2A4466]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="mt-4 sm:mt-6 bg-gradient-to-br from-[#2A4466] to-[#1A2F4A] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg border-2 border-transparent hover:border-[#F5F5F5] hover:scale-105 transition-all duration-200">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>

                  {/* Animated image transition */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#2A4466]/20 bg-white p-2 flex items-center justify-center min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover rounded-xl"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2A4466]">Our Process</h3>
                  <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(42,68,102,0.15)" }}
                        className="relative rounded-xl border border-[#2A4466]/20 bg-white p-5 sm:p-7 shadow-md flex flex-col min-h-[160px] sm:min-h-[180px] transition-all duration-200"
                        aria-label={`Step ${index + 1}: ${step.step}`}
                      >
                        <div
                          className="absolute -top-3 sm:-top-4 left-4 sm:left-6 rounded-full bg-gradient-to-br from-[#2A4466] to-[#1A2F4A] px-3 sm:px-4 py-1 text-xs font-semibold text-white shadow flex items-center gap-2"
                        >
                          {processIcons[index]}
                          Step {index + 1}
                        </div>
                        <h4 className="mb-2 mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-[#2A4466]">{step.step}</h4>
                        <p className="text-xs sm:text-sm text-[#2A4466]/80">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-[#2A4466] to-[#1A2F4A] p-10 text-center text-white shadow-2xl md:p-16">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Marketing?</h2>
            <p className="mb-10 text-lg text-[#F5F5F5]">
              Let's create a customized marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-[#F5F5F5] px-10 py-6 text-lg font-semibold text-[#2A4466] hover:bg-white shadow-lg border-2 border-transparent hover:border-[#2A4466] hover:scale-105 transition-all duration-200"
              >
                Schedule a Consultation
              </Button>
              <Link
                href="/contact"
                className="text-lg font-semibold text-[#F5F5F5] underline decoration-2 underline-offset-4 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const AnimatedTabBar: React.FC<AnimatedTabBarProps> = ({ services, activeTab, setActiveTab }) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [cursor, setCursor] = useState<{ left: number; width: number; opacity: number }>({ left: 0, width: 0, opacity: 0 });

  React.useEffect(() => {
    if (!containerRef.current) return;
    const activeIdx = services.findIndex((s: Service) => s.id === activeTab);
    const tab = containerRef.current.children[activeIdx] as HTMLElement | undefined;
    if (tab) {
      setCursor({
        left: tab.offsetLeft,
        width: tab.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeTab, services]);

  return (
    <ul
      ref={containerRef}
      className="relative mx-auto flex w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] rounded-full border-2 border-gray-200 bg-white dark:bg-gray-900 p-1 shadow-lg overflow-x-auto scrollbar-hide"
      onMouseLeave={() => setCursor((pv) => ({ ...pv, opacity: 1 }))}
      role="tablist"
    >
      {services.map((service: Service, idx: number) => (
        <li
          key={service.id}
          onClick={() => setActiveTab(service.id)}
          onMouseEnter={e => {
            setCursor({
              left: e.currentTarget.offsetLeft,
              width: e.currentTarget.offsetWidth,
              opacity: 1,
            });
          }}
          className={`relative z-10 flex flex-col items-center justify-center gap-1 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 cursor-pointer rounded-full transition-all duration-200 whitespace-nowrap min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem]
            ${activeTab === service.id ? 'text-white' : 'text-gray-700 dark:text-gray-200'}
            text-xs sm:text-sm font-semibold uppercase`}
          aria-label={service.title}
          aria-selected={activeTab === service.id}
          tabIndex={activeTab === service.id ? 0 : -1}
          role="tab"
        >
          <span className="mb-1">{service.icon}</span>
          <span>{service.title}</span>
        </li>
      ))}
      <Cursor position={cursor} />
    </ul>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => (
  <motion.li
    animate={position}
    transition={{ type: "spring", stiffness: 400, damping: 30 }}
    className="absolute z-0 h-[3.5rem] sm:h-[4rem] md:h-[4.5rem] rounded-full bg-black dark:bg-white/10"
    style={{ top: 2, ...position }}
    aria-hidden="true"
  />
);
