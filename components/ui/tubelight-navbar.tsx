"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items.find(item => item.url === pathname)?.name || items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "relative z-50 w-[90%] mx-auto sm:w-auto sm:fixed sm:top-0 sm:left-auto sm:translate-x-0 sm:right-0 sm:pt-8 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 sm:px-2 md:px-3 lg:px-4 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm sm:text-base font-semibold px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-[#2A4466]/10 text-[#2A4466]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={24} strokeWidth={2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#2A4466]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#2A4466] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#2A4466]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#2A4466]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#2A4466]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}