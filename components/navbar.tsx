"use client"

import { Home, BookOpen, Briefcase, FileText, Phone, Newspaper, LayoutGrid } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import Image from 'next/image'
import Link from 'next/link'

export default function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: LayoutGrid },
    { name: 'Blog', url: '/blog', icon: Newspaper },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Trigam Associates Logo"
              width={32}
              height={32}
              className="rounded-full sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-semibold">TrigamAssociates</span>
          </Link>
          <div className="text-sm text-muted-foreground italic text-center flex-1 max-w-[200px] sm:max-w-md">
            Marketing So Good, Even Algorithms Take Notes
          </div>
          <div className="shrink-0">
            <NavBar items={navItems} className="!relative !top-0 !right-0 !mb-0 !pt-0 !pr-0 scale-90 sm:scale-100" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-16 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Trigam Associates Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-semibold">TrigamAssociates</span>
            </Link>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-40 px-12 pb-4">
          <NavBar items={navItems}  />
        </div>
      </div>
    </>
  )
}
