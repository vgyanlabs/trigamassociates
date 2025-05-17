"use client"

import { Home, BookOpen, Briefcase, FileText, Phone, Newspaper, LayoutGrid } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: LayoutGrid },
    { name: 'Blog', url: '/blog', icon: Newspaper },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]

  return <NavBar items={navItems} />
}
