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
    <div className="fixed top-0 left-0 right-0 z-50  ">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
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
        <NavBar items={navItems} className="!relative !top-0 !right-0 !mb-0 !pt-0 !pr-0" />
      </div>
    </div>
  )
}
