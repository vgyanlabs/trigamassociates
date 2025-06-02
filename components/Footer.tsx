import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
    const socialLinks = [
        { name: "twitter", icon: Twitter, url: "https://twitter.com" },
        { name: "facebook", icon: Facebook, url: "https://facebook.com" },
        { name: "instagram", icon: Instagram, url: "https://instagram.com" },
        { name: "linkedin", icon: Linkedin, url: "https://linkedin.com" },
    ]

    return (
        <footer className="border-t border-gray-200 bg-white py-4 dark:border-gray-800 dark:bg-gray-950">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="Trigam Associates Logo"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <span className="text-lg font-medium">TrigamAssociates</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            {socialLinks.map(({ name, icon: Icon, url }) => (
                                <a
                                    key={name}
                                    href={url}
                                    className="rounded-full p-1.5 text-gray-600 transition-colors hover:text-[#2A4466] dark:text-gray-400 dark:hover:text-[#2A4466]"
                                >
                                    <span className="sr-only">{name}</span>
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                        <div className="hidden items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 md:flex">
                            <a href="mailto:official@trigamassociates.com" className="hover:text-[#2A4466] dark:hover:text-[#2A4466]">
                                official@trigamassociates.com
                            </a>
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                            <a href="tel:+919606849689" className="hover:text-[#2A4466] dark:hover:text-[#2A4466]">
                                +91 9606849689
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}