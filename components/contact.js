"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Send, Smartphone } from "lucide-react"

export default function Contact() {
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
            I'm always open to collaboration, learning opportunities, and new challenges. Let's build something amazing together!
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
              <form
                action="https://formsubmit.co/baseergroot@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://baseer-portfolio.vercel.app" />

                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
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
                    placeholder="Hello, I'd like to talk about..."
                    required
                    className="bg-white/5 border-white/10 focus:border-purple-500 min-h-[150px]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient w-full flex items-center justify-center"
                >
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
                      }
