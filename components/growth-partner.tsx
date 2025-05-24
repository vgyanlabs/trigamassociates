import Image from "next/image"
import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { CheckCircle } from "lucide-react"
import { Users } from "lucide-react"

export default function GrowthPartner({}) {
    return(
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5]/80 to-[#2A4466] py-20 text-white md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#F95F53]/30 bg-[#F95F53]/10 px-4 py-2 text-sm text-[#2A4466]">
                <TrendingUp className="mr-2 h-4 w-4 text-teal-300" />
                <span>Your Growth Partner</span>
              </div>
              <h2 className="mb-6 text-3xl text-[#2A4466] font-bold md:text-5xl">
                From Clicks To Conversions – We've Got Your Marketing Covered
              </h2>
              <p className="mb-8 text-lg text-[#2A4466]">
                From strategy to execution, we master social media, influencer marketing, and META ads to deliver
                unmatched brand success.
              </p>

              <ul className="mb-8 text-[#2A4466] space-y-4">
                {[
                  "Data-driven strategies that deliver results",
                  "Creative content that captivates your audience",
                  "Performance marketing that maximizes ROI",
                  "Ongoing optimization and reporting",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-teal-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                size="lg"
                className="rounded-full bg-gray-400 px-8 py-6 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[#2A4466]/20"
              >
                Learn Our Approach
              </Button>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Image src="/images/analytics-dashboard.png" alt="Marketing Analytics" fill className="object-cover" />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900/50">
                    <TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">+147%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-6 rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/50">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">New Customers</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">+2,834</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}