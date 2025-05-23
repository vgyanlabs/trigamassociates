import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trigam Associates | 360° Marketing Solutions",
  description:
    "Trigam Associates delivers 360° marketing solutions integrating social media, influencer marketing, and META ads for impactful brand growth.",
  generator: 'vgyanlabs.com'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
