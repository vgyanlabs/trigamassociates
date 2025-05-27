"use client"

import { Home, LayoutGrid, Newspaper, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: LayoutGrid },
    { name: 'Blog', url: '/blog', icon: Newspaper },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Tagline - Hidden on mobile */}
          <div className="hidden lg:block text-center text-gray-600 font-medium flex-1 max-w-md mx-8">
            Marketing So Good, Even Algorithms Take Notes
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} py-4 border-t border-gray-100`}>
          {/* Tagline - Visible only on mobile when menu is open */}
          <div className="text-center text-gray-600 font-medium mb-4 px-4">
            Marketing So Good, Even Algorithms Take Notes
          </div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
