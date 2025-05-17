"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrendingUp, Users, Award, Globe } from "lucide-react"

export default function StatsCounter() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [counted, setCounted] = useState(false)

  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      value: 147,
      suffix: "%",
      label: "Average ROI",
      color: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-100 dark:border-purple-800",
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      value: 500,
      suffix: "+",
      label: "Clients Worldwide",
      color: "bg-teal-50 dark:bg-teal-900/20",
      border: "border-teal-100 dark:border-teal-800",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      value: 37,
      suffix: "",
      label: "Industry Awards",
      color: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-100 dark:border-amber-800",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      value: 12,
      suffix: "M+",
      label: "Social Reach",
      color: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-100 dark:border-blue-800",
    },
  ]

  useEffect(() => {
    if (inView && !counted) {
      controls.start("visible")
      setCounted(true)
    }
  }, [controls, inView, counted])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        hidden: {},
      }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className={`rounded-xl border ${stat.border} ${stat.color} p-6 text-center shadow-sm`}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-800">
            {stat.icon}
          </div>
          <div className="mt-4">
            <CountUp
              from={0}
              to={stat.value}
              duration={2}
              inView={inView}
              suffix={stat.suffix}
              className="text-4xl font-bold"
            />
            <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

interface CountUpProps {
  from: number
  to: number
  duration: number
  inView: boolean
  suffix?: string
  className?: string
}

function CountUp({ from, to, duration, inView, suffix = "", className = "" }: CountUpProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * (to - from) + from))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, inView])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}
