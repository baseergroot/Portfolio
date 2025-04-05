"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Mail, ExternalLink } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    let index = 0
    let direction = "typing" // 'typing' or 'erasing'
    const fullText = "Full Stack Developer"

    const typingInterval = setInterval(() => {
      if (direction === "typing") {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index))
          index++

          if (index > fullText.length) {
            direction = "waiting"
            setTimeout(() => {
              direction = "erasing"
            }, 2000) // Wait 2 seconds before erasing
          }
        }
      } else if (direction === "erasing") {
        if (index >= 0) {
          setTypedText(fullText.slice(0, index))
          index--

          if (index === 0) {
            direction = "typing"
          }
        }
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-white/10 text-gray-300 mb-4">
            Welcome to my portfolio
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="gradient-text">Baseer Afridi</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center justify-center">
            <span>{typedText}</span>
            <span className="animate-pulse ml-1">|</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            A passionate self-taught developer focused on creating efficient, scalable applications that provide real
            value to users.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn-gradient">
              View My Work
            </a>
            <a
              href="https://github.com/baseergroot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center"
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/baseergroot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:baseergroot@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/qr/3B2FR3YUWNDTI1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="WhatsApp"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-gray-400" />
        </a>
      </div>
    </section>
  )
}

