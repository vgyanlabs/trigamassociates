import Link from "next/link"
import { Button } from "./ui/button"
export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-teal-400">
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                    T
                  </div>
                </div>
                <span className="text-xl font-medium">trigam</span>
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Your 360° marketing partner delivering strategies that drive growth and engagement.
              </p>
              <div className="mt-6 flex space-x-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-5 w-5"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-3">
                {[
                  "Social Media Marketing",
                  "Influencer Marketing",
                  "Performance Marketing",
                  "Website Development",
                  "Content Creation",
                  "SEO Optimization",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Testimonials", "Careers", "Blog", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>hello@trigamassociates.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Marketing Street, Digital City, 10001</li>
              </ul>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-teal-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/20">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-600 dark:text-gray-400 md:flex-row md:space-y-0">
              <p>© 2025 Trigam Associates. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="hover:text-teal-600 dark:hover:text-teal-400">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-teal-600 dark:hover:text-teal-400">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-teal-600 dark:hover:text-teal-400">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}