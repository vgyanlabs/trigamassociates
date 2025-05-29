"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    bestTimeToContact: "",
    preferredContactMethod: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setSubmitted(true)
  }

  const projectTypes = [
    {
      id: "website",
      title: "Website Development",
      description: "Build or redesign your website",
      icon: "🌐",
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Grow your online presence",
      icon: "📈",
    },
    {
      id: "branding",
      title: "Branding",
      description: "Create or refresh your brand",
      icon: "🎨",
    },
    {
      id: "other",
      title: "Other",
      description: "Something else in mind?",
      icon: "💡",
    },
  ]

  const contactMethods = [
    { id: "email", label: "Email", icon: "📧" },
    { id: "phone", label: "Phone", icon: "📱" },
    { id: "video", label: "Video Call", icon: "🎥" },
  ]

  const timeSlots = [
    "Morning (9AM - 12PM)",
    "Afternoon (12PM - 5PM)",
    "Evening (5PM - 8PM)",
  ]

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Get In Touch
            </h1>
            <p className="mb-8 text-lg text-purple-100 md:text-xl">
              Have a question or ready to elevate your marketing strategy? We're here to help you achieve your business
              goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Contact Info */}
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reach out to us through any of these channels or fill out the form to get started.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">hello@trigamassociates.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-teal-100 p-3 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-600 dark:text-gray-400">Saturday - Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">123 Digital Blvd, Suite 456</p>
                      <p className="text-gray-600 dark:text-gray-400">Digital City, DC 98765</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
                  <h3 className="mb-3 font-semibold">Follow Us</h3>
                  <div className="flex space-x-4">
                    {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href={`https://${social}.com`}
                        className="rounded-full bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-5 w-5"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-8">
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-800 md:p-10">
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Let's Get Started</h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {currentStep === 1
                          ? "Tell us a bit about yourself"
                          : "Tell us about your project"}
                      </p>
                      <div className="mt-4 flex items-center space-x-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            currentStep === 1 ? "bg-purple-600" : "bg-gray-300"
                          }`}
                        />
                        <div
                          className={`h-2 w-2 rounded-full ${
                            currentStep === 2 ? "bg-purple-600" : "bg-gray-300"
                          }`}
                        />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {currentStep === 1 ? (
                        <>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="John Smith"
                                value={formState.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                value={formState.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="w-full rounded-full bg-gradient-to-r from-purple-600 to-teal-500 py-6 text-lg font-medium text-white"
                          >
                            Continue
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <Label>What brings you here?</Label>
                              <div className="grid gap-4 md:grid-cols-2">
                                {projectTypes.map((type) => (
                                  <div
                                    key={type.id}
                                    className={`cursor-pointer rounded-lg border p-4 transition-all ${
                                      formState.projectType === type.id
                                        ? "border-purple-600 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/20"
                                        : "border-gray-200 hover:border-purple-200 dark:border-gray-700"
                                    }`}
                                    onClick={() => handleSelectChange("projectType", type.id)}
                                  >
                                    <div className="mb-2 text-2xl">{type.icon}</div>
                                    <h3 className="font-medium">{type.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {type.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-4">
                              <Label>Preferred Contact Method</Label>
                              <div className="flex space-x-4">
                                {contactMethods.map((method) => (
                                  <div
                                    key={method.id}
                                    className={`flex cursor-pointer items-center space-x-2 rounded-lg border p-3 ${
                                      formState.preferredContactMethod === method.id
                                        ? "border-purple-600 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/20"
                                        : "border-gray-200 hover:border-purple-200 dark:border-gray-700"
                                    }`}
                                    onClick={() =>
                                      handleSelectChange("preferredContactMethod", method.id)
                                    }
                                  >
                                    <span>{method.icon}</span>
                                    <span>{method.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="bestTimeToContact">Best Time to Contact</Label>
                              <Select
                                value={formState.bestTimeToContact}
                                onValueChange={(value) =>
                                  handleSelectChange("bestTimeToContact", value)
                                }
                              >
                                <SelectTrigger id="bestTimeToContact">
                                  <SelectValue placeholder="Select a time slot" />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeSlots.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex space-x-4">
                            <Button
                              type="button"
                              onClick={() => setCurrentStep(1)}
                              className="flex-1 rounded-full border border-gray-200 bg-white py-6 text-lg font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 py-6 text-lg font-medium text-white"
                            >
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </Button>
                          </div>
                        </>
                      )}
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <CheckCircle className="h-12 w-12 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">Message Sent Successfully!</h2>
                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                      Thank you for reaching out to us. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)} className="rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-8 py-6 text-lg font-medium text-white"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Visit Our Office</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              We're located in the heart of Digital City. Stop by for a coffee and a chat about your marketing needs.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-800">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                <div className="flex h-full w-full items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <span className="sr-only">Map placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            <p className="mb-12 text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[{
                question: "What services do you offer?",
                answer:
                  "We offer a comprehensive range of marketing services including social media marketing, influencer marketing, performance marketing, website development, content creation, and SEO optimization.",
              },
              {
                question: "How do you charge for your services?",
                answer:
                  "Our pricing is customized based on your specific needs and project scope. We offer both project-based pricing and monthly retainers depending on your requirements.",
              },
              {
                question: "How long does it take to see results?",
                answer:
                  "While some results can be seen immediately, most marketing strategies take 3-6 months to show significant results. We provide regular reports to track progress throughout the process.",
              },
              {}
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <h3 className="mb-3 text-lg font-semibold">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Correcting the JSX syntax error by ensuring proper closing of elements and checking for any missing or misplaced tags.
