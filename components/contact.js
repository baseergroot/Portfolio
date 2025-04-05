"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Send, Smartphone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      title: "Email",
      value: "baseergroot@gmail.com",
      link: "mailto:baseergroot@gmail.com",
    },
    {
      icon: <Github className="h-6 w-6 text-blue-400" />,
      title: "GitHub",
      value: "github.com/baseergroot",
      link: "https://github.com/baseergroot",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
      title: "WhatsApp",
      value: "Click to chat",
      link: "https://wa.me/qr/3B2FR3YUWNDTI1",
    },
  ]

  return (
    <section id="contact" className="section-padding relative bg-gray-950/50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="section-subtitle">
            I'm always open to collaboration, learning opportunities, and new challenges. Let's build something amazing
            together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass-card p-6 flex items-center space-x-4 card-hover">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">{method.icon}</div>
                <div>
                  <h3 className="font-medium mb-1">{method.title}</h3>
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {method.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border-white/10 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border-white/10 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    required
                    className="bg-white/5 border-white/10 focus:border-purple-500 min-h-[150px]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-900/50 border border-green-700 rounded-md text-green-300">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

