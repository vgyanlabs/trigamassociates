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
    company: "",
    subject: "",
    message: "",
    budget: "",
    howDidYouHear: "",
  })
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
    // In a real app, you would send this to your backend
  }

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

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-background dark:to-transparent"></div>
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
                    <h2 className="mb-6 text-2xl font-bold md:text-3xl">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
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
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
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
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formState.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          value={formState.subject}
                          onValueChange={(value) => handleSelectChange("subject", value)}
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="services">Services Information</SelectItem>
                            <SelectItem value="quote">Request a Quote</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry..."
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Estimated Budget</Label>
                        <RadioGroup
                          value={formState.budget}
                          onValueChange={(value) => handleSelectChange("budget", value)}
                          className="grid grid-cols-2 gap-4 md:grid-cols-4"
                        >
                          <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                            <RadioGroupItem value="under5k" id="under5k" />
                            <Label htmlFor="under5k" className="cursor-pointer">
                              Under $5K
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                            <RadioGroupItem value="5k-10k" id="5k-10k" />
                            <Label htmlFor="5k-10k" className="cursor-pointer">
                              $5K - $10K
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                            <RadioGroupItem value="10k-25k" id="10k-25k" />
                            <Label htmlFor="10k-25k" className="cursor-pointer">
                              $10K - $25K
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                            <RadioGroupItem value="25kplus" id="25kplus" />
                            <Label htmlFor="25kplus" className="cursor-pointer">
                              $25K+
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                        <Select
                          value={formState.howDidYouHear}
                          onValueChange={(value) => handleSelectChange("howDidYouHear", value)}
                        >
                          <SelectTrigger id="howDidYouHear">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-purple-600 to-teal-500 py-6 text-lg font-medium text-white"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
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
                      onClick={() => setSubmitted(false)}\n                      className="rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-8 py-6 text-lg font-medium text-white"
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
