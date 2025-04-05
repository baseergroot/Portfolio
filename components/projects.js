"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, Link } from "lucide-react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Grootly",
      description:
        "A fast and efficient URL shortener that allows users to create compact and shareable links with ease.",
      image: "/placeholder-logo1.png",
      tags: ["Next.js", "MongoDB", "Node.js", "Express.js"],
      demoLink: "https://bitlinlk.vercel.app/",
      codeLink: "https://github.com/baseergroot/grootly",
      status: "completed",
    },
    {
      id: 2,
      title: "Downwee",
      description: "A versatile video downloader that enables users to save videos from multiple platforms seamlessly.",
      image: "/downwee.png",
      tags: ["JavaScript", "Node.js", "Express.js", "API Integration"],
      demoLink: "https://downwee-all-downloader.vercel.app/",
      codeLink: "https://github.com/baseergroot/DownWee_All_downloader",
      status: "completed",
    },
    {
      id: 3,
      title: "Instagram Clone",
      description:
        "An Instagram-like project where users can upload videos, images, and captions with a seamless user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React.js", "Tailwind CSS", "Firebase", "Node.js"],
      demoLink: "#",
      codeLink: "#",
      status: "in-progress",
    },
  ]

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on. Each project represents my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden card-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-55">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover  transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {project.status === "in-progress" && (
                  <Badge className="absolute top-2 right-2 bg-yellow-600">In Progress</Badge>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-300 px-3 py-1 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Link className="mr-1 h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

